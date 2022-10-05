<template>
    <v-app-bar
        app
        color="secondary"
        flat
        dense
        dark
    >
        <v-toolbar-title class="d-flex align-center">
            <img
                src="https://img.icons8.com/bubbles/50/000000/book-shelf.png"
                alt=""
                class="me-2"
            >
            <span class="text-h5">Prateleira digital</span>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items v-if="$store.state.logged">
            <v-btn
                text
                @click="goToBookList"
            >
                Livros
            </v-btn>
            <v-btn
                v-if="$store.state.authToken"
                text
                @click="goToCollection"
            >
                Minha Coleção
            </v-btn>
            <v-btn
                text
                @click="logout"
            >
                Sair
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
        methods: {
            goToBookList() {
                this.$router.push('/book');
            },
            goToCollection() {
                this.$router.push('/collection');
            },
            logout() {
                this.$store.commit('setAuthToken', '');
                this.$router.push('/');
            },
        },
    };
</script>

<style scoped>

</style>
