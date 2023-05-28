<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
//
</script>

<script>
export default {
  mounted() {
    const appElement = document.getElementById("app");
    appElement.classList.remove("v-layout-top");
  },
};
</script>
