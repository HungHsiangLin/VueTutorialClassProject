<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <server-detail></server-detail>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import ServerDetail from "./components/Server/ServerDetail.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "server-detail": ServerDetail
  }
};
</script>

<style>
</style>
