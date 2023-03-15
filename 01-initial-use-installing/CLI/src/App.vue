<template>
  <div>
    <TitleComponent />
    <LifeCycle />
  </div>
</template>

<script>
import TitleComponent from './components/Title.vue';
import LifeCycle from './components/LifeCycle.vue';

  export default {
    name: 'App',
    components: {
      TitleComponent,
      LifeCycle
    }
  }
</script>