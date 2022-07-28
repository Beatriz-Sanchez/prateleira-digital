<template>
    <v-app-bar
        app
        color="light-green darken-3"
        flat
        dense
        dark
    >
        <v-toolbar-title>Header</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-btn text>Livros</v-btn>
            <v-btn text>Minha Coleção</v-btn>
            <v-btn text>Sair</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'AppHeader',
    };
</script>

<style scoped>

</style>
