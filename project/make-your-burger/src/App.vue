<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      Navbar,
      Footer,
    },
    data() {
      return {
        navLogoImg: "/img/logo.png",
        navDescriptionImg: "A Cartoon Hamburger image",
      }
    }
  }
</script>

<template>
  <div>
    <Navbar
      :navLogoImg="navLogoImg"
      :navDescriptionImg="navDescriptionImg"
    />
    <RouterView />
    <Footer />
  </div>
</template>

<style>

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
  }

</style>
