import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userID: '',
        authToken: '',
        message: {
            text: '',
            type: '',
        },
        logged: false,
    },
    mutations: {
        setUserID(state, payload) {
            window.localStorage.userID = payload;
            state.userID = payload;
        },
        setAuthToken(state, payload) {
            window.localStorage.authToken = payload;
            state.authToken = payload;
            state.logged = Boolean(state.authToken);
        },
        setLogged(state, payload) {
            state.logged = payload;
        },
        setErrorMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'ERROR',
            };
        },
        setSuccessMessage(state, payload) {
            state.message = {
                text: payload,
                type: 'SUCCESS',
            };
        },
    },
});
