<template>
  <div class="post-form-wrap">
    <form action="" class="contents-form" @submit.prevent="submitForm">
      <div class="">
        <label for="title">Title: </label>
        <input id="title" type="text" v-model="title" />
      </div>
      <div class="">
        <label for="contents">Contents: </label>
        <textarea id="contents" type="text" rows="5" v-model="contents" />
      </div>
      <p v-if="!isContentsValid" class="validation-text warning">
        작성글은 0자 이상, 200자 이하여야 합니다.
      </p>
      <button type="submit">Save</button>
    </form>
    <p class="log">{{ logMessage }}</p>
  </div>
</template>

<script>
import { createPost } from "@/api/posts";
export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 200 && this.contents.length > 0;
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        });
        console.log(response);
      } catch (error) {
        this.logMessage = error.response.data.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
