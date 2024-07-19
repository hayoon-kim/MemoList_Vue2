<template>
  <div class="main-wrapper">
    <div class="list-container contents">
      <h1 class="page-headers">Today I Learned</h1>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul v-if="!isLoading" class="post-list">
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button"> + </router-link>
  </div>
</template>

<script>
import PostListItem from "@/components/posts/PostListItem.vue";
import LoadingSpinner from "@/components/common/LoadingSpinner.vue";
import { fetchPosts } from "@/api/posts";

export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      if (data.posts) {
        this.isLoading = false;
        this.postItems = data.posts;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
