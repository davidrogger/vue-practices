<template>
  <div
    class="session"
  >
    <button
      @click="firstEvent(), secondEvent(), lastEvent()"
    >
      Iniciar evento
    </button>
    <p>{{ poliform }}</p>
  </div>
</template>

<script>
  export default {
    name: 'MultiEvents',
    data() {
      return {
        poliform: ''
      }
    },
    methods: {
      firstEvent() {
        this.poliform = 'First event activated'
      },
      secondEvent() {
        setTimeout(() => this.poliform = 'Second event activated', 1000)
      },
      lastEvent() {
        setTimeout(() => this.poliform = '', 2000)
      }
    }
  }
</script>

<style scoped>
  p {
    text-align: center;
    color: chocolate;
  }

  button {
    padding: 10px;
    border: 1px solid white;
    color: white;
    background: gray;
    border-radius: 5px;
  }

  button:hover {
    background: rgb(158, 157, 157);
  }
</style>