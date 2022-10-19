<template>
    <v-container fluid>
        <BackButton />
        <v-row v-if="shelf">
            <v-col
                cols="12"
            >
                <h6
                    class="headline display-1 text-uppercase mt-5"
                >
                    {{ shelf.title }}
                </h6>
                <span class="overline">{{ volumeCountText }}</span>
            </v-col>
        </v-row>
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
    </v-container>
</template>

<script>
    import api from '../api/api';
    import BackButton from '../navigation/BackButton.vue';
    import BookItem from '../book/BookItem.vue';

    export default {
        name: 'LibraryEntryPage',
        components: {
            BackButton,
            BookItem,
        },
        mixins: [api],
        data() {
            return {
                shelf: {},
                bookList: [],
            };
        },
        computed: {
            volumeCountText() {
                if (!this.shelf || !this.shelf.volumeCount) return 'Ainda não há livros';
                return `${this.shelf.volumeCount} ${this.shelf.volumeCount === 1 ? 'livro' : 'livros'}`;
            },
        },
        created() {
            this.get(`/users/${this.$store.state.userID}/bookshelves/${this.$route.params.id}`).then((res) => {
                this.shelf = res.data;
            });
            this.get(`/users/${this.$store.state.userID}/bookshelves/${this.$route.params.id}/volumes`).then((res) => {
                this.bookList = res.data.items;
            });
        },
        methods: {
        },
    };
</script>

<style scoped>

</style>
