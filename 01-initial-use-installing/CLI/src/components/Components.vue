<template>
  <div
    class="session"  
  >
    <h2>Componentes</h2>
    <TitleComponent />
    <LifeCycle />
    <PersonComponent />
  </div>
</template>

<script>
  import TitleComponent from './Title.vue';
  import LifeCycle from './LifeCycle.vue';
  import PersonComponent from './Person.vue';

  export default {
    name: "ComponentsPractices",
    components: {
      TitleComponent,
      LifeCycle,
      PersonComponent,
    }
  }
</script>