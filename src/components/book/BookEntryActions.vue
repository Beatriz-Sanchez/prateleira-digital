<template>
    <div v-if="book.volumeInfo.previewLink">
        <v-subheader class="mt-5">Ações</v-subheader>
        <v-divider class="mb-3" />
        <v-btn
            text
            small
            color="primary"
            class="mb-10"
            @click="goToPreview(book)"
        >
            Ver Prévia
        </v-btn>
    </div>
    <div v-else />
</template>

<script>
    import bookService from './bookService';

    export default {
        name: 'BookEntryActions',
        mixins: [bookService],
        props: {
            book: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style>

</style>
