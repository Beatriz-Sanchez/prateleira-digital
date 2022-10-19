<template>
    <v-card class="mx-auto book-card d-flex flex-column justify-stretch">
        <v-card-title>
            <span class="text-truncate">{{ shelf.title }}</span>
        </v-card-title>
        <div
            class="d-flex flex-column justify-space-between"
            style="height: 100%"
        >
            <v-card-text>{{ volumeCountText }}</v-card-text>
            <v-card-actions>
                <DetailsButton :url="libraryDetailsUrl" />
                <v-btn
                    v-if="shelf.previewLink"
                    text
                    small
                    color="primary"
                    @click="goToPreview(shelf)"
                >
                    Ver Prévia
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
    import bookService from './bookService';
    import DetailsButton from '../navigation/DetailsButton.vue';

    export default {
        name: 'LibraryItem',
        components: { DetailsButton },
        mixins: [bookService],
        props: {
            shelf: { type: Object, required: true },
        },
        data() {
            return {
                maxTitleLength: 20,
            };
        },
        computed: {
            volumeCountText() {
                if (!this.shelf || !this.shelf.volumeCount) return 'Sem livros';
                return `Contém ${this.shelf.volumeCount} ${this.shelf.volumeCount === 1 ? 'livro' : 'livros'}`;
            },
            libraryDetailsUrl() {
                return `/library/${this.shelf.id}`;
            },
        },
    };
</script>

<style scoped>
    .book-card {
        height: 100%;
    }
</style>
