<template>
    <div>
        <ul class="pagination-wrap">
            <li v-for="index in pagesCount" :key="index" class="link">
                <router-link :to="{name: 'list', params: {id: index}}" exact>
                    {{ index }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store/index';

export default {
    data() {
        return {
            pagesCount: 1,
            paramsId: this.$route.params.id
        }
    },
    created() {
        store.dispatch('GET_USERS', this.paramsId).then(() => {
            this.pagesCount = store.state.pagesCount;
        });
    }
}
</script>

<style scoped lang="scss">
    .pagination-wrap {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }

    .link {
        display: inline-flex;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: 2px solid #2c3e50;
        margin: 3rem;

        a {
            text-decoration: none;
            color: #2c3e50;
            padding: 1em 2em;
        }
    }
</style>