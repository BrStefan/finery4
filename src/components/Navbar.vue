<template>
  <v-app-bar
    app
    class="navbar custom-app-bar"
    :elevation="0"
    :class="{ 'move-down': !isMobile }"
  >
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <div class="custom-toolbar">
      <v-app-bar-title v-if="isMobile" class="navTitle"
        >Finery Magazine</v-app-bar-title
      >
    </div>

    <v-container fluid class="nav-container">
      <v-row align="center" justify="center">
        <v-col cols="auto" v-if="!isMobile">
          <v-list dense class="nav-list">
            <template v-for="item in items" :key="item.title">
              <v-list-item class="navListItem" @click="navigateTo(item.link)">
                <v-menu open-on-hover class="subitems">
                  <template v-slot:activator="{ props }">
                    <v-list-item-title v-bind="props">{{
                      item.title
                    }}</v-list-item-title>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in item.dropdownItems"
                      :key="index"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary class="nav-drawer">
    <!-- <v-list class="nav-list-mobile">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="navigateTo(item.link)"
        :ripple="false"
        append-icon="mdi-menu-down"
      >
        <v-list-group
          v-if="item.dropdownItems"
          no-action
          :prepend-icon="item.subItemsIcon"
        >
          <template v-slot:activator="{ props }">
            <v-list-item-title v-bind="props">{{
              item.title
            }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="subItem in item.dropdownItems"
            :key="subItem.title"
            link
            :ripple="false"
          >
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-item>
    </v-list> -->
    <v-list-item
      v-for="item in items"
      :key="item.title"
      @click="navigateTo(item.link)"
      :ripple="false"
    >
      <v-list-item-title v-if="item.hasOwnProperty('dropdownItems')">{{
        item.title
      }}</v-list-item-title>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
        },
        {
          title: "Section 1",
          dropdownItems: [
            { title: "Subsection 1-1", id: 1 },
            { title: "Subsection 1-2", id: 2 },
          ],
        },
        {
          title: "Section 2",
          dropdownItems: [
            { title: "Subsection 2-1" },
            { title: "Subsection 2-2" },
          ],
        },
        {
          title: "Section 3",
          dropdownItems: [
            { title: "Subsection 3-1" },
            { title: "Subsection 3-2" },
          ],
        },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
  methods: {
    navigateTo(link) {
      // Implement your navigation logic here
    },
  },
};
</script>

<style scoped>
.logo {
  height: 50px;
}

.nav-list {
  display: flex;
  justify-content: center;
}

.nav-list-mobile {
  display: flex;
  flex-direction: column;
}

.active {
  color: #000000; /* Customize the active item color */
}

.nav-drawer {
  background-color: white; /* Customize the drawer background color */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  box-shadow: none; /* Remove the box shadow */
}

.custom-app-bar.move-down {
  margin-top: 128px; /* Adjust the value as needed */
}

.navTitle .v-toolbar-title__placeholder {
  overflow: visible !important; /* Override overflow */
}
.navListItem {
  width: 200px;
  text-align: center;
}

.subitems {
  box-shadow: none;
}
</style>

<!-- <style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.fancyfont {
  font-family: "Pacifico", Pacifico;
  overflow: auto !important ;
}
</style> -->
