<template>
  <v-main class="main">
    <v-container fluid>
      <Logo v-if="!isMobile" />
      <Navbar />
      <v-container
        fluid
        :class="{ articles: !isMobile, articlesMobile: isMobile }"
      >
        <Article v-if="!isMobile"></Article>
        <ArticleMobile v-if="isMobile" />
      </v-container>
      <!-- Rest of the content -->
    </v-container>
  </v-main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
import Article from "@/components/Article.vue";
import ArticleMobile from "@/components/ArticleMobile.vue";
</script>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
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
</style>
