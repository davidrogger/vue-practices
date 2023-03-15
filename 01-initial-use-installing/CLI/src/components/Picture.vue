<template>
  <img :src="source" :alt="description">
</template>

<script>
  export default {
    name: 'PictureComponent',
    data() {
      return {
        source: './img/avatar.png',
        description: 'avatares'
      }
    }
  }
</script>