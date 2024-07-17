<template>
  <div class="spinner-containers">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.spinner-containers {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 240px;
}

.spinner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  border: 5px solid rgba(252, 252, 252, 0.2);
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: spin 1s linear infinite;
  position: relative;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
