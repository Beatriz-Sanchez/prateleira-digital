<template>
    <v-app>
        <app-header />
        <v-main>
            <router-view />
        </v-main>
        <Feedback />
    </v-app>
</template>

<script>
    import apiConfig from './components/api/apiConfig';

    import Feedback from './components/feedback/Feedback.vue';
    import AppHeader from './components/header/Header.vue';

    export default {
        name: 'App',

        components: {
            Feedback,
            AppHeader,
        },
        mixins: [apiConfig],
        created() {
            this.createInterceptors();
            if (window.localStorage.authToken) {
                this.$store.commit('setAuthToken', window.localStorage.authToken);
            } else {
                this.$router.push('/');
            }
        },
    };
</script>

<style scoped>

</style>
