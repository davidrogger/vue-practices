<template>
  <div>
    <TitleComponent />
    <LifeCycle />
    <PersonComponent />
  </div>
</template>

<script>
import TitleComponent from './components/Title.vue';
import LifeCycle from './components/LifeCycle.vue';
import PersonComponent from './components/Person.vue';

  export default {
    name: 'App',
    components: {
      TitleComponent,
      LifeCycle,
      PersonComponent
    }
  }
</script>