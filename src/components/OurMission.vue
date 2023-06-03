<template>
  <v-container fluid class="missionContainer">
    <div>teste</div>
    <div>Lore impsum</div>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
  </v-container>
</template>

<style>
.missionContainer {
  width: 35%;
  display: inline-grid;
  background-color: red;
  padding: 50px;
  max-height: 500px;
}
</style>
