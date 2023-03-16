<template>
  <div
    class="session"
  >
  <h1>Atributos Dinâmicos</h1>
  <div
    class="email-container"
  >
    Meu e-mail é:
  <div
    class="email-display"
  >
  <span
  v-show="show_email"
  >
    {{ email }}
  </span>
  </div>
  <div
    class="eye-icon"
    @click="toggleEmail"
  >
    <span v-if="show_email"><PhEyeClosed /></span>
    <span v-else><PhEye /></span>
  </div>
  </div>
  <p>Acesse meu link <a v-bind:href="link" target="_blank">aqui</a></p>
  <PictureComponent />
  </div>
</template>

<script>
import PictureComponent from './Picture.vue';
import { PhEye, PhEyeClosed } from '@phosphor-icons/vue';

  export default {
    nome: 'AttributesDina',
    data() {
      return {
        show_email: true,
        email: 'jonas@doe.com',
        link: 'https://www.google.com',
      }
    },
    components: {
      PictureComponent,
      PhEye,
      PhEyeClosed
    },
    methods: {
      toggleEmail() {
        this.show_email = !this.show_email;
      }
    }
  }
</script>