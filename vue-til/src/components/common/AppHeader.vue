<template>
  <header>
    <div class="">
      <router-link to="/"> TIL </router-link>
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
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUsername");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped></style>
