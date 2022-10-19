<template>
    <div v-if="book.volumeInfo.categories && book.volumeInfo.categories.length > 0">
        <v-subheader class="mt-5">Categorias</v-subheader>
        <v-divider class="mb-3" />
        <v-tooltip
            v-for="(category, i) in book.volumeInfo.categories"
            :key="i"
            bottom
        >
            <template #activator="{on, attrs}">
                <v-chip
                    v-bind="attrs"
                    :key="i"
                    v-on="on"
                >
                    {{ category }}
                </v-chip>
            </template>
            <span>{{ category }}</span>
        </v-tooltip>
    </div>
    <div v-else />
</template>

<script>
    export default {
        name: 'BookEntryCategories',
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
