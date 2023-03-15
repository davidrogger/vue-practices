<template>
  <div>
    <h2>Nome: {{ name }}</h2>
    <InfoComponent />
  </div>
</template>

<script>
  import InfoComponent from './Info.vue';
  export default {
    name: 'PersonComponent',
    components: {
      InfoComponent,
    },
    data() {
      return {
        name: 'Jonas'
      }
    }
  }
</script>