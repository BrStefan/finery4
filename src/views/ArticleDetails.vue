<template>
  <v-main class="main">
    <v-container fluid>
      <Logo v-if="!isMobile" />
      <Navbar />
      <!-- Rest of the content -->
    </v-container>
    <v-container class="article-container" fluid>
      <v-row justify="center">
        <v-col :cols="isMobile ? 12 : 8">
          <!-- Article Image -->
          <v-img
            class="article-image"
            :src="article.image"
            aspect-ratio="16/9"
          ></v-img>

          <!-- Article Content -->
          <v-container>
            <v-row justify="center">
              <v-col>
                <v-heading class="headline">{{ article.title }}</v-heading>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-paragraph class="article-description">{{
                  article.description
                }}</v-paragraph>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import Navbar from "@/components/Navbar.vue";
import { articles } from "@/utils/ArticleData";
</script>

<script>
import { useAppStore } from "@/store/app";
const store = useAppStore();
export default {
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    articleId() {
      return store.getArticleRead;
    },
    article() {
      return articles.filter((a) => a.id === store.getArticleRead)[0];
    },
  },
};
</script>

<style>
.main {
  padding-top: 0px !important;
}

.articles {
  margin-top: 50px;
  display: flex;
  align-items: center;
}

.articlesMobile {
  margin-top: 50px;
}

.article-container {
  margin-top: 140px;
}

.article-image {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.headline {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.article-description {
  color: #444;
  line-height: 1.6;
  text-align: justify;
  margin-top: 10px;
}
</style>
