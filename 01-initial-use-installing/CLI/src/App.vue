<template>
  <div>
    <Components />
    <CondicionalRender />
    <AttributesDina />
    <MultiEvents />
    <PassingProps
      email="parent@email.com"
    />
  </div>
</template>

<script>
import Components from './components/Components.vue';
import CondicionalRender from './components/CondicionalRender.vue'
import AttributesDina from './components/AttributesDina.vue';
import MultiEvents from './components/MultiEvents.vue';
import PassingProps from './components/PassingProps.vue';

  export default {
    name: 'App',
    components: {
    Components,
    CondicionalRender,
    AttributesDina,
    MultiEvents,
    PassingProps
}
  }
</script>

<style>
  body {
    background: #3c5041;
    color: white;
  }

</style>