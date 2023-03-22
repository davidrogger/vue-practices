
<script>
  import Banner from '../components/Banner.vue';
  import BurgerForm from '../components/BurgerForm.vue';

  export default {
    name: "HomeView",
    components: {
    Banner,
    BurgerForm
}
  }
</script>

<template>
  <Banner />
  <main class="page-container">
    <h1>Build your own burger!</h1>
    <BurgerForm />
  </main>
</template>
