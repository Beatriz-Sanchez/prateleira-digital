<template>
    <div>
        <v-row>
            <v-col
                cols="12"
            >
                <v-text-field
                    v-model="textSearch"
                    label="Pesquise Algo..."
                    @input="searchBooks"
                />
            </v-col>
        </v-row>
        <v-row
            v-if="!textSearch"
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                class="text-center"
            >
                <p>Digite algo para pesquisar</p>
            </v-col>
        </v-row>
        <Loading :condition="searchOnGoing">
            <v-row>
                <v-col
                    v-for="(book, i) in bookList"
                    :key="i"
                    cols="12"
                    md="3"
                    lg="2"
                >
                    <v-card class="mx-auto">
                        <v-card-title>{{ book.volumeInfo.title }}</v-card-title>
                        <v-card-text>{{ book.volumeInfo.subtitle }}</v-card-text>
                        <v-card-actions>
                            <v-btn
                                text
                                small
                                color="primary"
                            >
                                Ver Detalhes
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </Loading>
    </div>
</template>

<script>
    import axios from 'axios';
    import Loading from '../loading/Loading.vue';

    export default {
        name: 'BookList',
        components: {
            Loading,
        },
        data() {
            return {
                bookList: [],
                textSearch: '',
                searchOnGoing: false,
            };
        },
        methods: {
            searchBooks() {
                if (this.textSearch) {
                    this.searchOnGoing = true;
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`).then((response) => {
                        this.bookList = response.data.items;
                        this.searchOnGoing = false;
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
