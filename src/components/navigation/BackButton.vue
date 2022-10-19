<template>
    <v-row justify="end">
        <v-col
            cols="12"
            md="2"
        >
            <v-btn
                text
                block
                @click="goBack"
            >
                Voltar
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'BackButton',
        data() {
            return {
            };
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
        },
    };
</script>

<style scoped>

</style>
