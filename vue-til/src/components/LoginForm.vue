<template>
  <div class="">
    <form class="login-form" action="" @submit.prevent="submitForm">
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
    <p class="log warning">{{ logMessage }}</p>
  </div>
</template>

<script>
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

        await this.$store.dispatch("LOGIN", userData);

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
