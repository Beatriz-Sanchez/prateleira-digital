<template>
    <v-text-field
        v-model="textSearch"
        label="Pesquise Algo..."
        @input="search"
    />
</template>

<script>
    export default {
        name: 'SearchInputField',
        props: {},
        data() {
            return {
                textSearch: '',
                lastChange: 0,
                delay: 300,
            };
        },
        methods: {
            search() {
                this.lastChange = new Date().getTime();
                setTimeout(() => {
                    if (new Date().getTime() >= this.lastChange + this.delay) {
                        this.$emit('search', this.textSearch);
                    }
                }, this.delay);
            },
        },
    };
</script>

<style scoped>

</style>
