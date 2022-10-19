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
                    v-model="userID"
                    label="ID do usuário"
                    class="mb-3"
                />
                <v-text-field
                    v-model="token"
                    label="Token"
                    class="mb-3"
                />

                <v-btn
                    depressed
                    dark
                    block
                    color="primary"
                    class="mb-2"
                    @click="login"
                >
                    Login
                </v-btn>

                <v-btn
                    text
                    color="secondary"
                    @click="loginAsGuest"
                >
                    entrar como visitante
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    export default {
        name: 'LoginPage',
        data() {
            return {
                token: 'AIzaSyB1lRFZHRvKOD_TWBxIHOzeMdSsDyHTT5U',
                userID: '107514126961081396518',
            };
        },
        created() {
            if (window.localStorage.authToken) {
                this.$router.push({ name: 'bookList' });
            }
        },
        methods: {
            login() {
                if (this.userID && this.token) {
                    this.$store.commit('setUserID', this.userID);
                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                } else {
                    this.$store.commit('setErrorMessage', 'Você deve informar ID e token');
                }
            },
            loginAsGuest() {
                this.$router.push('/book');
                this.$store.commit('setLogged', true);
            },
        },
    };
</script>

<style scoped>

</style>
