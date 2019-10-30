<template>
  <div id="app" class="container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/navbar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style></style>
