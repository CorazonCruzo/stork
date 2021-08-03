import { createStore } from 'vuex';

const store = createStore({
    state: {
        users: null,
        user: null,
        url: 'https://jsonplaceholder.typicode.com/users',
        pageNumber: 1,
        pagesCount: 1,
        countOfItems: 3,
      },
      mutations: {
        SET_USERS: (state, payload) => {
          state.users = payload;
        },
        SET_USER: (state, payload) => {
            state.user = payload;
        },
        SET_PAGES_COUNT: (state, payload) => {
            state.pagesCount = payload;
        }
      },
    
      actions: {
        GET_USERS: async (context, pageNumber = 1, index = pageNumber - 1) => {
            const response = await fetch(context.state.url);
            const json = await response.json();
            const pagesCount = Math.ceil(json.length / context.state.countOfItems);

            context.commit('SET_PAGES_COUNT', pagesCount);
            const filterUsersForPagination = (usersArr, countOfItems, pageNumber, index, context) => {
                const result = usersArr.slice(index * countOfItems, pageNumber * countOfItems);
                console.log(result);
                context.commit('SET_USERS', result);
            };

            filterUsersForPagination(json, context.state.countOfItems, pageNumber, index, context);
        },

        GET_USER: async (context, id) => {
            const response = await fetch(`${context.state.url}/${id}`);
            const json = await response.json();
            context.commit('SET_USER', json);
        }
      },
});

export default store;