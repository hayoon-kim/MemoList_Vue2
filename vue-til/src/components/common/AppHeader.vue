<template>
  <header>
    <div class="">
      <router-link :to="logoLink"> TIL </router-link>
    </div>
    <div class="navigations">
      <!-- user -->
      <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <!-- login -->
      <template v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "@/utils/cookies";

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? "/main" : "login";
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$store.commit("clearToken");
      deleteCookie("til_auth");
      deleteCookie("til_user");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
