<template>
  <v-main class="main">
    <v-container fluid>
      <Logo v-if="!isMobile" />
      <Navbar />
      <!-- Rest of the content -->
    </v-container>
    <v-container fluid class="teste">
      <div>{{ articleId }}</div>
      <div>{{ articles[articleId].title }}</div>
    </v-container>
  </v-main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
import { articles } from "@/utils/ArticleData";
</script>

<script>
import { useAppStore } from "@/store/app";
const store = useAppStore();
export default {
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    articleId() {
      return store.getArticleRead;
    },
  },
  data() {
    return {
      articles,
    };
  },
};
</script>

<style>
.main {
  padding-top: 0px !important;
}

.articles {
  margin-top: 50px;
  display: flex;
  align-items: center;
}

.articlesMobile {
  margin-top: 50px;
}
.teste {
  margin-top: 120px;
}
</style>
