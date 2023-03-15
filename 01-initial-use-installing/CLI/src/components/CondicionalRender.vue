<template>
  <div
    class="session"
  >
  <h1>Diretivas/ Condicional Render</h1>

  <p>Quantidade clicada {{ btn }}</p>

  <button
    type="button"
    @click="btn++"
  >
    Clique para contar
  </button>

  <p v-if="btn > 2">Com o botão clicado mais que 2 vezes</p>
  <p v-else>Menos que 2 clicadas</p>

  <p v-if="btn === 10">Botão clicado 10 vezes</p>

  </div>
</template>

<script>
  export default {
    nome: 'CondicionalRender',
    data() {
      return {
        btn: 0
      }
    },
  }
</script>