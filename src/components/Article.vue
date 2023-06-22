<template>
  <v-container class="articleContaier">
    <v-pagination
      class="pagination"
      v-model="currentPage"
      :length="totalPages"
      @input="paginate"
    ></v-pagination>
    <v-row flex-wrap>
      <v-row v-for="article in paginatedArticles" :key="article.id">
        <v-card class="mb-4 cardArticle">
          <v-card-text class="articleInnerContainer">
            <v-row no-gutters>
              <v-col cols="2">
                <v-img
                  :src="article.image"
                  aspect-ratio="16/9"
                  class="articleimg fill-height"
                  max-height="850px"
                  contain
                ></v-img>
              </v-col>
              <v-col cols="8" class="pl-4">
                <v-card-title>
                  {{ article.title }}
                </v-card-title>
                <v-card-text>
                  {{ article.description }}
                </v-card-text>
                <v-card-text>
                  <v-chip
                    v-for="tag in article.hashtags"
                    :key="tag"
                    outlined
                    class="mr-2"
                  >
                    {{ tag }}
                  </v-chip>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-row>
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

.articleContaier {
  margin-top: 72px;
  max-width: 50% !important;
  display: inline-grid;
  flex: 1;
}

.articleimg {
  display: flex;
  margin: 0 auto;
}

.pagination {
  margin-bottom: 50px;
}

.cardArticle {
  margin-left: 50px;

  padding: 2000px;
}

.cardArticle:hover {
  cursor: pointer;
}

.articleInnerContainer {
  padding: 30px !important;
}
</style>
