<template>
  <div>
    <Components />
    <CondicionalRender />
    <AttributesDina />
  </div>
</template>

<script>
import Components from './components/Components.vue';
import CondicionalRender from './components/CondicionalRender.vue'
import AttributesDina from './components/AttributesDina.vue';

  export default {
    name: 'App',
    components: {
      Components,
      CondicionalRender,
      AttributesDina,
    }
  }
</script>