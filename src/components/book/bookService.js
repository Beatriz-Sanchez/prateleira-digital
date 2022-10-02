export default {
    name: 'book service',
    methods: {
        goToPreview(book) {
            window.open(book.volumeInfo.previewLink, '_blank');
        },
    },
};
