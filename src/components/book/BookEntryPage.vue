<template>
    <v-container fluid>
        <BackButton />
        <v-row v-if="book && book.volumeInfo">
            <BookEntryImage :book="book" />
            <v-col
                cols="12"
                md="9"
            >
                <BookEntryData :book="book" />
                <div>
                    <BookEntryAuthors :book="book" />
                    <BookEntryCategories :book="book" />
                    <BookEntryActions :book="book" />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import api from '../api/api';
    import BackButton from '../navigation/BackButton.vue';
    import BookEntryImage from './BookEntryImage.vue';
    import BookEntryData from './BookEntryData.vue';
    import BookEntryAuthors from './BookEntryAuthors.vue';
    import BookEntryCategories from './BookEntryCategories.vue';
    import BookEntryActions from './BookEntryActions.vue';

    export default {
        name: 'BookEntryPage',
        components: {
            BackButton,
            BookEntryImage,
            BookEntryData,
            BookEntryAuthors,
            BookEntryCategories,
            BookEntryActions,
        },
        mixins: [api],
        data() {
            return {
                book: {},
                src: '',
            };
        },
        created() {
            this.get(`/volumes/${this.$route.params.id}`).then((res) => {
                this.book = res.data;
            });
        },
        methods: {
        },
    };
</script>

<style scoped>

</style>
