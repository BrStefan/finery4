<template>
  <v-container
    fluid
    :class="{ missionContainer: !isMobile, missionContainerMobile: isMobile }"
  >
    <div>teste</div>
    <div>Lore impsum</div>
    <v-text-field
      v-model="search"
      :append-icon="getIcon"
      label="Search"
      single-line
      hide-details
    ></v-text-field>
    <div class="btnContainer">
      <v-btn v-if="isMobile" class="searchButton">Search</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    getIcon() {
      if (!this.isMobile) {
        return "mdi-magnify"; // Icon to append when condition is met
      } else {
        return ""; // No icon when condition is not met
      }
    },
  },
};
</script>

<style>
.missionContainer {
  width: 35%;
  display: inline-grid;
  background-color: red;
  padding: 50px;
  max-height: 500px;
}

.missionContainerMobile {
  width: 95%;
  background-color: red;
  padding: 20px;
  max-height: 500px;
  text-align: center;
}

.btnContainer {
  margin-top: 25px;
  display: flex;
  justify-content: center;
}
</style>
