<template>
  <v-container class="mobileArticleContainer">
    <v-pagination
      class="pagination"
      v-model="currentPage"
      :length="totalPages"
      @input="paginate"
    ></v-pagination>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>

      <v-card-text>
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Share </v-btn>

        <v-btn color="orange"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: "Article 1",
          description: "Description for Article 1",
          image: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
          hashtags: ["#sunglasses", "#summer"],
        },
        {
          id: 2,
          title: "Article 2",
          description: "Description for Article 2",
          image: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
          hashtags: ["#sunglasses", "#summer"],
        },
        {
          id: 3,
          title: "Article 2",
          description: "Description for Article 2",
          image: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
          hashtags: ["#sunglasses", "#summer"],
        },
        {
          id: 4,
          title: "Article 2",
          description: "Description for Article 2",
          image: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
          hashtags: ["#sunglasses", "#summer"],
        },
        // Add more articles as needed
      ],
      pageSize: 3, // Number of articles per page
      currentPage: 1, // Current page
    };
  },
};
</script>

<style>
.mobileArticleContainer {
  display: block;
}
</style>
