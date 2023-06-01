<template>
  <v-container>
    <v-card v-for="article in paginatedArticles" :key="article.id" class="mb-4">
      <v-img :src="article.image" height="200"></v-img>
      <v-card-title>
        {{ article.title }}
      </v-card-title>
      <v-card-text>
        {{ article.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn text>Read More</v-btn>
      </v-card-actions>
    </v-card>

    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="paginate"
    ></v-pagination>
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
        },
        {
          id: 2,
          title: "Article 2",
          description: "Description for Article 2",
          image: "https://www.imgonline.com.ua/examples/bee-on-daisy.jpg",
        },
        // Add more articles as needed
      ],
      pageSize: 4, // Number of articles per page
      currentPage: 1, // Current page
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.articles.length / this.pageSize);
    },
    paginatedArticles() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.articles.slice(startIndex, endIndex);
    },
  },
  methods: {
    paginate() {
      // Perform any additional logic here if needed
    },
  },
};
</script>

<style>
.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
