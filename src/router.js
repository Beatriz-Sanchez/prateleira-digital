import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './components/login/LoginPage.vue';
import BookListPage from './components/book/BookListPage.vue';
import BookEntryPage from './components/book/BookEntryPage.vue';
import LibraryListPage from './components/library/LibraryListPage.vue';
import LibraryEntryPage from './components/library/LibraryEntryPage.vue';

Vue.use(Router);

const routes = [
    { path: '/', name: 'login', component: LoginPage },
    { path: '/library', name: 'library', component: LibraryListPage },
    { path: '/library/:id', name: 'libraryEntry', component: LibraryEntryPage },
    { path: '/book', name: 'bookList', component: BookListPage },
    { path: '/book/:id', name: 'bookEntry', component: BookEntryPage },
];

export default new Router({
    routes,
});
