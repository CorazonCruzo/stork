<template>
    <div>
        <h1> {{ title }} </h1>
        <div v-if="user?.id">
            <ul class="user-list">
                <li class="user-list__item">
                    <span v-if="user?.id">
                        <b> {{`${textId}${separator}`}} </b>
                        {{ user.id }}
                    </span>
                    <span v-if="user.username">
                        <b> {{`${textUsername}${separator}`}} </b>
                        {{ user.username }}
                    </span>
                    <span v-if="user.name">
                        <b> {{`${textName}${separator}`}} </b>
                        {{ user.name }}
                    </span>
                    <span v-if="user.email">
                        <b> {{`${textEmail}${separator}`}} </b>
                        {{ user.email }}
                    </span>
                    <span v-if="user.address?.zipcode">
                        <b> {{`${textZipcode}${separator}`}} </b>
                        {{ user.address.zipcode }}
                    </span>
                    <span v-if="user.address?.street">
                        <b> {{`${textStreet}${separator}`}} </b>
                        {{ user.address.street }}
                    </span>
                    <span v-if="user.address?.suite">
                        <b> {{`${textSuite}${separator}`}} </b>
                        {{ user.address.suite }}
                    </span>
                    <span v-if="user.address?.geo?.textLgn">
                        <b> {{`${textLgn}${separator}`}} </b>
                        {{ user.address.geo.textLgn }}
                    </span>
                    <span v-if="user.address?.geo?.textLat">
                        <b> {{`${textLgn}${separator}`}} </b>
                        {{ user.address.geo.textLat }}
                    </span>
                </li>
            </ul>
             <router-link to="/list/1" class="link" exact>
                {{ backToList }}
            </router-link>
        </div>
        
        <div v-else-if="user !== null && !user.id">
            <p class="error">
                {{ textError }}
            </p>
            <router-link to="/list/1" class="link" exact>
                {{ backToList }}
            </router-link>
        </div>
    </div>
</template>

<script>
import store from '../store/index';

export default {
    data() {
        return {
            user: null,
            paramsId: this.$route.params.id,
            textId: 'Id',
            textName: 'Имя',
            textUsername: 'Логин',
            textEmail: 'E-mail',
            textStreet: 'Улица',
            textSuite: 'Дом, квартира',
            textCity: 'Город',
            textZipcode: 'Почтовый индекс',
            textLgn: 'Долгота',
            textLat: 'Широта',
            separator: ': ',
            title: 'Информация о пользователе',
            backToList: 'Вернуться к списку',
            textError: 'Информация о пользователе не найдена'
        }
    },
    created() {
        store.dispatch('GET_USER', this.paramsId).then(() => {
            this.user = store.state.user;
        });
    }
}
</script>

<style scoped lang="scss">
    .user-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style-type: none;
        padding: 2rem 1rem;
    }

    .user-list__item {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        border: 3px solid #000;
        margin: 1rem 2rem;
        display: flex;
        flex-direction: column;
        padding: 3rem;
        text-decoration: none;
        color: #2c3e50;
    }

    .error {
        margin-bottom: 3rem;
        color: #DB1E1E;
        font-size: 1.3em;
        font-weight: bold;
    }

    .link {
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        border: 2px solid #2c3e50;
        padding: 1em;
        margin-top: 3rem;
    }
</style>