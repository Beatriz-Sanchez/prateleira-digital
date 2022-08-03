<template>
    <v-card class="mx-auto book-card">
        <v-tooltip top>
            <template #activator="{ on, attrs }">
                <div
                    v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail"
                    v-bind="attrs"
                    class="text-center pt-3"
                    v-on="on"
                >
                    <img
                        :src="book.volumeInfo.imageLinks.smallThumbnail"
                        :alt="book.volumeInfo.title"
                    >
                </div>
                <v-card-title
                    v-bind="attrs"
                    v-on="on"
                >
                    <span class="text-truncate">{{ book.volumeInfo.title }}</span>
                </v-card-title>
            </template>
            <span>{{ book.volumeInfo.title }}</span>
        </v-tooltip>
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
                @click="goToPreview"
            >
                Ver Preview
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'BookItem',
        props: {
            book: { type: Object, required: true },
        },
        data() {
            return {
                maxTitleLength: 20,
            };
        },
        methods: {
            goToPreview() {
                window.open(this.book.volumeInfo.previewLink, '_blank');
            },
            goToDetails() {
                // TODO: levar para a nossa página de livro
            },
        },
    };
</script>

<style scoped>
    .book-card {
        height: 100%;
    }
</style>
