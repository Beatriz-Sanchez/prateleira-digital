<template>
    <div v-if="book.volumeInfo.authors && book.volumeInfo.authors.length > 0">
        <v-subheader>Autores</v-subheader>
        <v-divider class="mb-3" />
        <v-chip
            v-for="(author, i) in book.volumeInfo.authors"
            :key="i"
            pill
        >
            <v-avatar
                left
                color="primary white--text"
            >
                {{ author.substring(0,1) }}
            </v-avatar>
            {{ author }}
        </v-chip>
    </div>
    <div v-else />
</template>

<script>
    export default {
        name: 'BookEntryAuthors',
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
