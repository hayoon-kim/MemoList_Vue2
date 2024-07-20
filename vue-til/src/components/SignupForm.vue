<template>
  <form class="signup-form" @submit.prevent="submitForm">
    <div class="">
      <label for="username">ID: </label>
      <input id="username" v-model="username" type="text" />
    </div>
    <div class="">
      <label for="password">PW: </label>
      <input id="password" v-model="password" type="password" />
    </div>
    <div class="">
      <label for="nickname">Nickname: </label>
      <input id="nickname" v-model="nickname" type="text" />
    </div>
    <button type="submit">Sign Up</button>
    <p class="log">{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from "@/api/auth";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username}님, 가입되었습니다.`;
      this.initForm();
    },
    initForm() {
      this.username = "";
      this.password = "";
      this.nickname = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
