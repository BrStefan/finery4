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
            <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="navigateTo(item.link)"
              @mouseover="showDropdown(item)"
              @mouseleave="hideDropdown(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-menu
                v-if="item.showDropdown"
                :close-on-content-click="false"
                offset-y
              >
                <template v-slot:activator="{ on }"></template>
                <v-list>
                  <v-list-item
                    v-for="subItem in item.dropdownItems"
                    :key="subItem.title"
                    link
                  >
                    <v-list-item-title>{{ subItem.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary class="nav-drawer">
    <v-list class="nav-list-mobile">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        active-class="active"
        @click="navigateTo(item.link)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Section 1",
          showDropdown: false,
          dropdownItems: [
            { title: "Subsection 1-1" },
            { title: "Subsection 1-2" },
          ],
        },
        {
          title: "Section 2",
          showDropdown: false,
          dropdownItems: [
            { title: "Subsection 2-1" },
            { title: "Subsection 2-2" },
          ],
        },
        {
          title: "Section 3",
          showDropdown: false,
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
    showDropdown(item) {
      item.showDropdown = true;
    },
    hideDropdown(item) {
      item.showDropdown = false;
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

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f5f5f5;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.v-list-item:hover .dropdown-menu {
  display: block;
}
</style>

<!-- <style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.fancyfont {
  font-family: "Pacifico", Pacifico;
  overflow: auto !important ;
}
</style> -->
