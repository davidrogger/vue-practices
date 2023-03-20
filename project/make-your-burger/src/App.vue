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
  <div class="main-container">
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

  .main-container {
    position: relative;
    min-height: 100vh;
  }

  .page-container {
    margin: 50px;
    min-height: 250px;
  }

  .page-container h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }

</style>
