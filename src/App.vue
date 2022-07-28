<template>
    <v-app>
        <app-header />
        <v-content>
            <router-view />
        </v-content>
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
