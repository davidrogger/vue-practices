<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar,
      Footer,
    }
  }
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style></style>
