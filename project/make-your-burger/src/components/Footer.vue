<script>
  export default {
    name: 'Footer'
  }
</script>

<template>
  <footer>
    <span>Make Your Burger! &copy; 2023</span>
  </footer>
</template>

<style scoped>

  footer {
    align-items: center;
    background: var(--primary-dark-color);
    color: var(--primary-accent-color);
    display: flex;
    justify-content: center;
    height: 200px;
    width: 100%;
  }

</style>