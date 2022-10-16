<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                md="4"
                lg="3"
            >
                <h6
                    class="headline display-1 text-uppercase mt-5"
                >
                    Minha Coleção
                </h6>
            </v-col>
        </v-row>
        <library-list />
    </v-container>
</template>

<script>
    import LibraryList from './LibraryList.vue';

    export default {
        name: 'LibraryListPage',
        components: { LibraryList },
        data() {
            return {};
        },
        methods: {},
    };
</script>

<style scoped>

</style>
