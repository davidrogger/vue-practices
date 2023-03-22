<template>
  <h1>Nome: {{ nome }}</h1>
</template>

<script>
  export default {
    name: 'LifeCycle',
    data() {
      return {
        nome: ''
      }
    },
    created() {
      this.nome = "Dvd"
    }
  }
</script>