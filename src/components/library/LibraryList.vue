<template>
    <div>
        <Loading :condition="loadingLibrary">
            <v-row v-if="libraryList">
                <v-col
                    v-for="(shelf, i) in libraryList"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="3"
                    xl="2"
                >
                    <library-item :shelf="shelf" />
                </v-col>
            </v-row>
        </Loading>
    </div>
</template>

<script>
    import api from '../api/api';
    import Loading from '../loading/Loading.vue';
    import LibraryItem from './LibraryItem.vue';

    // uid=107514126961081396518;

    export default {
        name: 'LibraryList',
        components: {
            Loading,
            LibraryItem,
        },
        mixins: [api],
        data() {
            return {
                libraryList: null,
                loadingLibrary: false,
                userID: '107514126961081396518',
            };
        },
        created() {
            this.loadingLibrary = true;
            this.get(`users/${this.userID}/bookshelves`)
                .then((res) => {
                    this.libraryList = res.data.items;
                })
                .finally(() => {
                    this.loadingLibrary = false;
                });
        },
        methods: {

        },
    };
</script>

<style scoped>

</style>
