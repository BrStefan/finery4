// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    articleRead: 1,
    //
  }),
  getters: {
    getArticleRead: (state) => state.articleRead,
  },
  actions: {
    setArticleRead(id) {
      this.articleRead = id;
    },
  },
});
