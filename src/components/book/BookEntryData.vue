<template>
    <div>
        <h1 class="display-1">{{ book.volumeInfo.title }}</h1>
        <h1 class="headline">{{ book.volumeInfo.subtitle || "Sem descrição" }}</h1>
        <p class="mt-2">{{ book.volumeInfo.description }}</p>
    </div>
</template>

<script>
    export default {
        name: 'BookEntryData',
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
