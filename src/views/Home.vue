<template>
  <v-main class="main">
    <v-container fluid>
      <Logo v-if="!isMobile" />
      <Navbar />
      <Article></Article>
      <!-- Rest of the content -->
    </v-container>
  </v-main>
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
.main {
  padding-top: 0px !important;
}
</style>
