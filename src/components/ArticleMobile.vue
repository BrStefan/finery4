<template>
  <v-container class="mobileArticleContainer">
    <v-pagination
      class="pagination"
      v-model="currentPage"
      :length="totalPages"
      @input="paginate"
    ></v-pagination>
    <v-card
      class="mx-auto articleMobile"
      max-width="400"
      v-for="article in paginatedArticles"
      :key="article.id"
    >
      <v-img
        class="align-end text-white"
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>{{ article.title }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4"
        ><v-chip v-for="tag in article.hashtags" :key="tag">
          {{ tag }}
        </v-chip>
      </v-card-subtitle>

      <v-card-text>
        {{ article.description }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { articles } from "@/utils/ArticleData";
export default {
  data() {
    return {
      articles,
      pageSize: 3, // Number of articles per page
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
.mobileArticleContainer {
  display: block;
}

.articleMobile {
  margin-bottom: 50px;
}
</style>
