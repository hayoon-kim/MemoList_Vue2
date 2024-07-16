<template>
  <div class="">
    <form action="" @submit.prevent="submitForm">
      <div class="">
        <label for="username">ID</label>
        <input id="username" v-model="username" type="text" />
      </div>
      <div class="">
        <label for="password">PW</label>
        <input id="password" v-model="password" type="text" />
      </div>
      <button :disabled="!isUsernameValid || !password" type="submit">
        Login
      </button>
    </form>
    <p>{{ logMessage }}</p>
  </div>
</template>

<script>
import { loginUser } from "@/api/index";
import { validateEmail } from "@/utils/validation";

export default {
  data() {
    return {
      username: "",
      password: "",
      logMessage: "",
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        this.$store.commit("setUsername", data.user.username);

        // move to main
        this.$router.push("/main");
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = "";
      this.password = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
