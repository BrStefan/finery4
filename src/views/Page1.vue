<template>
  <v-container fluid>
    <Logo v-if="!isMobile" />
    <Navbar />
  </v-container>
  <v-container fluid class="mainPage"> teste </v-container>
  <v-container fluid> <Article v-if="!isMobile"></Article> </v-container>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
import Article from "@/components/Article.vue";
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
.articleContaier {
  margin-top: 72px;
  max-width: 90% !important;
  flex: 1;
}
.cardArticle {
  margin-left: 150px;
}
.mainPage {
  margin-top: 120px;
  text-align: center;
}
</style>
