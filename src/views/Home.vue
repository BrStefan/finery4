<template>
  <v-main>
    <v-container>
      <Logo />
      <Navbar />
    </v-container>
  </v-main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<style>
.logo-container {
  display: flex;
}
</style>
