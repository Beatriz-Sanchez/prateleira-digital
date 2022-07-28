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
    import Feedback from './components/feedback/Feedback.vue';
    import AppHeader from './components/header/Header.vue';

    export default {
        name: 'App',

        components: {
            Feedback,
            AppHeader,
        },
    };
</script>

<style scoped>

</style>
