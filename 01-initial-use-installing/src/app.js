const { createApp } = Vue;

const App = {
  data() {
    return {
      name: "Vue",
      version: 3
    }
  }
}

createApp(App).mount('#app');
