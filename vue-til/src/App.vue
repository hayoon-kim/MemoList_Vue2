<template>
  <div class="body-wrap">
    <AppHeader></AppHeader>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/common/AppHeader.vue";
import "./style.css";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss" scoped></style>
