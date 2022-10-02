<template>
    <div>
        <v-row>
            <v-col
                cols="12"
            >
                <searchInputField @search="searchBooks" />
            </v-col>
        </v-row>
        <v-row
            v-if="!bookList.length > 0 && !ongoingSearch"
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                class="text-center"
            >
                <p>{{ notSearchingText }}</p>
            </v-col>
        </v-row>
        <Loading :condition="ongoingSearch">
            <v-row>
                <v-col
                    v-for="(book, i) in bookList"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="3"
                    xl="2"
                >
                    <book-item :book="book" />
                </v-col>
            </v-row>
        </Loading>
    </div>
</template>

<script>
    import api from '../api/api';
    import Loading from '../loading/Loading.vue';
    import SearchInputField from '../search/SearchInputField.vue';
    import BookItem from './BookItem.vue';

    export default {
        name: 'BookList',
        components: {
            Loading,
            BookItem,
            SearchInputField,
        },
        mixins: [api],
        data() {
            return {
                bookList: [],
                ongoingSearch: false,
                notSearchingText: 'Digite algo para pesquisar',
            };
        },
        methods: {
            searchBooks(textSearch) {
                if (textSearch) {
                    this.ongoingSearch = true;
                    this.notSearchingText = 'Digite algo para pesquisar';
                    this.get(`/volumes?q=${textSearch}`)
                        .then((response) => {
                            this.bookList = response.data.items;
                            this.ongoingSearch = false;
                            if (!this.bookList.length > 0) {
                                this.notSearchingText = 'Nenhum resultado encontrado';
                            }
                        })
                        .catch(() => {
                            this.notSearchingText = 'Nenhum resultado encontrado';
                        });
                } else {
                    this.bookList = [];
                }
            },
        },
    };
</script>

<style>

</style>
