<!-- eslint-disable no-alert -->
<template>
    <v-container>
        <v-row
            justify="center"
        >
            <v-col
                cols="12"
                md="4"
                xl="3"
                class="text-center"
            >
                <h6 class="headline"> Login</h6>

                <v-text-field
                    v-model="token"
                    label="Token"
                />

                <v-btn
                    depressed
                    dark
                    block
                    color="light-green darken-1"
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
        <v-snackbar
            v-model="showMessage"
            :multi-line="multiLine"
            color="grey darken-4"
        >
            {{ message }}

            <template #action="{ attrs }">
                <v-btn
                    color="pink accent-2"
                    text
                    v-bind="attrs"
                    @click="showMessage = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script>
    // AIzaSyB1lRFZHRvKOD_TWBxIHOzeMdSsDyHTT5U
    export default {
        name: 'LoginPage',
        data() {
            return {
                token: '',
                showMessage: false,
                message: '',
                multiLine: true,
            };
        },
        methods: {
            login() {
                if (this.token) {
                    this.$store.commit('setAuthToken', this.token);
                    this.$router.push('/book');
                } else {
                    this.message = 'Você deve informar um token';
                    this.showMessage = true;
                }
            },
            loginAsGuest() { // TODO
                this.$router.push('/book');
            },
        },
    };
</script>

<style scoped>

</style>
