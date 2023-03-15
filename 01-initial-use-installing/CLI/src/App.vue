<template>
  <div>
    <Components />
    <CondicionalRender />
  </div>
</template>

<script>
import Components from './components/Components.vue';
import CondicionalRender from './components/CondicionalRender.vue'

  export default {
    name: 'App',
    components: {
      Components,
      CondicionalRender,
    }
  }
</script>