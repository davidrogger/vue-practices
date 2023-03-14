const { createApp } = Vue;

const App = {
  data() {
    return {
      name: "",
      input_name: ""
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.name = this.input_name;
    }
  }
}

createApp(App).mount('#app');
