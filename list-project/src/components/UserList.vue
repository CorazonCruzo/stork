<template>
    <div>
        <h1>
            {{ title }}
        </h1>
        <ul class="users-list">
            <li v-for="{id, name, username} in users" :key="id" class="users-list__item">
                <router-link :to="{name: 'user', params: {id}}" exact>
                    <span>
                        <b> {{`${textId}${separator}`}} </b>
                        {{ id }} 
                    </span>
                    <span> 
                        <b> {{`${textName}${separator}`}} </b>
                        {{ name }}
                    </span>
                    <span>
                        <b>{{ `${textUsername}${separator}` }}</b>
                        {{ username }}
                    </span>
                </router-link>
            </li>
        </ul>
        <Pagination />
    </div>
</template>

<script>
import store from '../store/index';
import Pagination from './Pagination.vue';

export default {
    data() {
        return {
            users: null,
            textId: 'Id',
            textName: 'Имя',
            textUsername: 'Логин',
            separator: ': ',
            title: 'Список пользователей',
            paramsId: this.$route.params.id
        }
    },
    components: { Pagination },
    mounted() {
        store.dispatch('GET_USERS', this.paramsId).then(() => {
            this.users = store.state.users;
        });
    }
}
</script>

<style lang="scss" scoped>
    .users-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 2rem 1rem;
    }

    .users-list__item {
        width: 20%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        border: 3px solid #000;
        margin: 1rem 2rem;


        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem;
            text-decoration: none;
            color: #2c3e50;
        }
    }
</style>