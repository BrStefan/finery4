<template>
  <v-main class="main">
    <v-container>
      <Logo v-if="!isMobile" />
      <Navbar />
      <!-- Rest of the content -->
    </v-container>
  </v-main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
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
