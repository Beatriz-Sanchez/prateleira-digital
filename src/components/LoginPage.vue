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
                    @click="LoginAsGuest"
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
                token: '',
            };
        },
        methods: {
            login() {
                this.$store.commit('setAuthToken', this.token);
                alert(this.$store.state.authToken);
            },
            loginAsGuest() {
                // TODO
            },
        },
    };
</script>

<style scoped>

</style>
