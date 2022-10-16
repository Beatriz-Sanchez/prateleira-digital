import apiInstance from './apiInstance';

/* //! Os interceptors são funções que serão executadas em algum momento da requisição
    ! pode ser antes ou em seu retorno
    ! No axios, a de antes se chama request e o de depois se chama response
*/

export default {
    name: 'apiConfig',
    methods: {
        createInterceptors() {
            apiInstance.interceptors.request.use((config) => {
                const newConfig = config;
                //! caso a api precise do authorization enviado no headers,
                //! faça como o exemplo abaixo
                // config.headers.authorization = this.$store.state.authToken;

                //* No caso da api googleBooks, a authorization vai na url
                //* Então faremos assim:
                if (newConfig.url.indexOf('?') !== -1) {
                    newConfig.url += '&';
                } else {
                    newConfig.url += '?';
                }

                newConfig.url += `key=${this.$store.state.authToken}`;

                return newConfig;
            });
        },
    },
};
