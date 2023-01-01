<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'AppSpinner',
}
</script>

<style scoped>
.spinner-container {
  width: 100%;
  height: 100%;
  z-index: 99999;
  text-align: center;
  background-color: #fff;
  position: fixed;
}
.spinner {
  margin: auto;
  border: 6px solid #dbf2ff;

  width: 62px;
  height: 62px;
  display: inline-block;
  position: absolute;
  top: -5%;
  left: 20%;
  border-radius: 50%;
  border-right: 6px solid #018df7;
  text-align: center;
  animation-name: spin;
  animation-duration: 900ms;
  animation-iteration-count: infinite;
  /*animation-timing-function: linear; /*linear spin */
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    width: 24px;
    height: 24px;
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
