<template>
  <li class="post-list-item">
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="fa-solid fa-pen" @click="routeEditPage"></i>
      <i class="fa-solid fa-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from "@/api/posts";

deletePost;
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      if (confirm("삭제하시겠습니까?")) {
        await deletePost(this.postItem._id);
        this.$emit("refresh");
      }
    },
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
