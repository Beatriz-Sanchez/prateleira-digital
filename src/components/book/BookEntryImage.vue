<template>
    <v-col
        v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.small"
        cols="12"
        md="3"
    >
        <img
            :src="book.volumeInfo.imageLinks.small"
            :alt="book.volumeInfo.title"
        >
    </v-col>
    <div v-else />
</template>

<script>
    export default {
        name: 'BookEntryImage',
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
