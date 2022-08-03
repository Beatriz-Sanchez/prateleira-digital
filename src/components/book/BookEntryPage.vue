<template>
    <v-container fluid>
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
        <v-row v-if="book && book.volumeInfo">
            <v-col
                v-if="book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.small"
                cols="12"
                md="3"
            >
                <img
                    :src="book.volumeInfo.imageLinks.small"
                    :alt="book.volumeInfo.title"
                >
            </v-col>
            <v-col
                cols="12"
                md="9"
            >
                <h1 class="display-1">{{ book.volumeInfo.title }}</h1>
                <h1 class="headline">{{ book.volumeInfo.subtitle || "Sem descrição" }}</h1>
                <p class="mt-2">{{ book.volumeInfo.description }}</p>
                <div>
                    <v-subheader>Autores</v-subheader>
                    <v-divider class="mb-3" />
                    <v-chip
                        v-for="(author, i) in book.volumeInfo.authors"
                        :key="i"
                        pill
                    >
                        <v-avatar
                            left
                            color="primary white--text"
                        >
                            {{ author.substring(0,1) }}
                        </v-avatar>
                        {{ author }}
                    </v-chip>
                    <div v-if="book.volumeInfo.categories && book.volumeInfo.categories.length > 0">
                        <v-subheader class="mt-5">Categorias</v-subheader>
                        <v-divider class="mb-3" />
                        <v-tooltip
                            v-for="(category, i) in book.volumeInfo.categories"
                            :key="i"
                            bottom
                        >
                            <template #activator="{on, attrs}">
                                <v-chip
                                    v-bind="attrs"
                                    :key="i"
                                    v-on="on"
                                >
                                    {{ category }}
                                </v-chip>
                            </template>
                            <span>{{ category }}</span>
                        </v-tooltip>
                    </div>
                    <div v-if="book.volumeInfo.previewLink">
                        <v-subheader class="mt-5">Ações</v-subheader>
                        <v-divider class="mb-3" />
                        <v-btn
                            text
                            small
                            color="primary"
                            class="mb-10"
                            @click="goToPreview"
                        >
                            Ver Prévia
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'BookEntryPage',
        data() {
            return {
                book: {},
                src: '',
            };
        },
        created() {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${this.$route.params.id}`).then((res) => {
                this.book = res.data;
            });
        },
        methods: {
            goBack() {
                this.$router.push('/book');
            },
            goToPreview() {
                window.open(this.book.volumeInfo.previewLink, '_blank');
            },
        },
    };
</script>

<style scoped>

</style>
