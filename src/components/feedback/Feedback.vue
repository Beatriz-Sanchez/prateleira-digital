<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-snackbar
        v-model="showMessage"
        multi-line
        :color="color"
    >
        {{ message }}

        <template #action="{ attrs }">
            <v-btn
                color="white"
                text
                v-bind="attrs"
                @click="resetMessage()"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Feedback',
        data() {
            return {
                showMessage: false,
                message: '',
                color: '',
            };
        },
        watch: {
            '$store.state.message.text': 'setMessage',
        },
        methods: {
            setMessage() {
                if (this.$store.state.message.text !== '') {
                    this.message = this.$store.state.message.text;
                    this.color = this.$store.state.message.type.toLowerCase();
                    this.showMessage = true;
                }
            },
            resetMessage() {
                this.showMessage = false;
                let functionName = '';
                if (this.$store.state.message === 'ERROR') {
                    functionName = 'setErrorMessage';
                } else {
                    functionName = 'setSuccessMessage';
                }
                this.$store.commit(functionName, '');
            },
        },
    };
</script>

<style scoped>

</style>
