/*
* Com a criação deste arquivo, encapsulamos o Axios
* se no futuro quisermos trocar a biblioteca que usamos para manipular a api,
* só precisaremos mudar este arquivo
*/

import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
});

export default apiInstance;
