<template>
  <button
    @click="$emit('changeImg')"
  >
    Mudar images
  </button>
</template>

<script>
  export default {
    name: 'ChangeImg',
    emits: ['changeImg']
  }
</script>

<style scoped>
  button {
    padding: 10px;
    margin: 5px;
    border-radius: 2px;
    border: 2px solid red;
    background: gray;
    color: white;
    width: 100%;
  }
</style>