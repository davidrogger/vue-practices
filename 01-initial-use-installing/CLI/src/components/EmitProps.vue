<template>
  <div
    class="session"
  >
    <h1>
      Executar eventos por parentesco de filhos para pai
    </h1>
    <img :src="avatar" :alt="description">
    <ChangeImg 
      @change-img="changeImg"
    />
  </div>
</template>

<script>
import ChangeImg from './ChangeImg.vue';

  export default {
    name: 'EmitProps',
    data() {
        return {
            avatar: '/img/avatar.png',
            description: 'avatar image'
        };
    },
    components: { ChangeImg },
    methods: {
      changeImg() {
        this.avatar = '/img/avatar2.png';
      }
    }
}
</script>