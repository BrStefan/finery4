<template>
  <v-app-bar app class="navbar" :elevation="0">
    <v-app-bar-nav-icon
      v-if="isMobile"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-container class="nav-container">
      <v-row align="center" justify="center">
        <v-col cols="auto" v-if="!isMobile">
          <v-list dense class="nav-list">
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
        { title: "Home", link: "/" },
        { title: "Shop", link: "/shop" },
        { title: "Collections", link: "/collections" },
        { title: "Gifts", link: "/gifts" },
        { title: "Sale", link: "/sale" },
        { title: "Stores", link: "/stores" },
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
  background-color: #ffffff; /* Customize the drawer background color */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  box-shadow: none; /* Remove the box shadow */
  top: 0;
  position: sticky;
}
</style>
