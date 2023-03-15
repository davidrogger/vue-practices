<template>
  <div
    class="session"
  >
  <h1>Atributos Dinâmicos</h1>
  <p v-show="show_email"> Meu e-mail é: {{ email }} </p>
  <p>Acesse meu link <a v-bind:href="link" target="_blank">aqui</a></p>
  <PictureComponent />
  </div>
</template>

<script>
import PictureComponent from './Picture.vue';

  export default {
    nome: 'AttributesDina',
    data() {
      return {
        show_email: true,
        email: 'jonas@doe.com',
        link: 'https://www.google.com'
      }
    },
    components: {
      PictureComponent
    }
  }
</script>