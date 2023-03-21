<script>
  export default {
    name: "Banner"
  }
</script>

<template>
  <div class="banner-container">
    <h1>Make Your Burger</h1>
  </div>
</template>

<style scoped>
  .banner-container {
    background-image: url('/img/burger.jpg');
    background-position: 0 65%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    background-color: var(--primary-dark-color);
    color: var(--primary-accent-color);
    text-align: center;
    font-size: 3.5rem;
    padding: 20px 40px;
  }
</style>