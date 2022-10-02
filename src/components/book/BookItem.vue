<template>
    <v-card class="mx-auto book-card d-flex flex-column justify-stretch">
        <v-tooltip top>
            <template #activator="{ on, attrs }">
                <div
                    v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
                    v-bind="attrs"
                    class="text-center pt-3"
                    style="min-height: 210px;"
                    v-on="on"
                >
                    <img
                        :src="book.volumeInfo.imageLinks.smallThumbnail"
                        :alt="book.volumeInfo.title"
                    >
                </div>
                <div
                    v-else
                    style="min-height: 210px;"
                />
                <v-card-title
                    v-bind="attrs"
                    v-on="on"
                >
                    <span class="text-truncate">{{ book.volumeInfo.title }}</span>
                </v-card-title>
            </template>
            <span>{{ book.volumeInfo.title }}</span>
        </v-tooltip>
        <div
            class="d-flex flex-column justify-space-between"
            style="height: 100%"
        >
            <v-card-text>{{ book.volumeInfo.subtitle || 'Sem descrição' }}</v-card-text>
            <v-card-actions>
                <v-btn
                    text
                    small
                    color="primary"
                    @click="goToDetails"
                >
                    Ver Detalhes
                </v-btn>
                <v-btn
                    v-if="book.volumeInfo.previewLink"
                    text
                    small
                    color="primary"
                    @click="goToPreview(book)"
                >
                    Ver Prévia
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
    import bookService from './bookService';

    export default {
        name: 'BookItem',
        mixins: [bookService],
        props: {
            book: { type: Object, required: true },
        },
        data() {
            return {
                maxTitleLength: 20,
            };
        },
        methods: {
            goToDetails() {
                this.$router.push(`/book/${this.book.id}`);
            },
        },
    };
</script>

<style scoped>
    .book-card {
        height: 100%;
    }
</style>
