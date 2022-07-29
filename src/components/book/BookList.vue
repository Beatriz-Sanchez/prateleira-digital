<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
                <v-text-field
                    v-model="textSearch"
                    label="Pesquise Algo..."
                    @change="searchBooks"
                />
            </v-col>
        </v-row>
        <v-row v-if="bookList.length > 0">
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
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'BookList',
        data() {
            return {
                bookList: [],
                textSearch: '',
            };
        },
        methods: {
            searchBooks() {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.textSearch}`).then((response) => {
                    this.bookList = response.data.items;
                });
            },
        },
    };
</script>

<style>

</style>
