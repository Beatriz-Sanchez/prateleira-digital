<!-- eslint-disable no-alert -->
<template>
    <v-container>
        <v-row
            class="mt-5"
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                xl="3"
                class="text-center"
            >
                <h6
                    class="headline display-1 text-uppercase"
                >
                    Login
                </h6>

                <v-text-field
                    v-model="token"
                    label="Token"
                    class="mb-3"
                />

                <v-btn
                    depressed
                    dark
                    block
                    color="light-green darken-1"
                    class="mb-2"
                    @click="login"
                >
                    Login
                </v-btn>

                <v-btn
                    text
                    @click="loginAsGuest"
                >
                    entrar como visitante
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    // AIzaSyB1lRFZHRvKOD_TWBxIHOzeMdSsDyHTT5U

    export default {
        name: 'LoginPage',
        data() {
            return {
                token: '',
            };
        },
        methods: {
            login() {
                if (this.token) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                } else {
                    this.$store.commit('setErrorMessage', 'Você deve informar um token');
                }
            },
            loginAsGuest() {
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>
