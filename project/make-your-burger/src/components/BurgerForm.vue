<script>
  import SelectForm from './SelectForm.vue';

  export default {
    name: "BurgerForm",
    components: {
      SelectForm,
    },
    data() {
      return {
        breads: [],
        meats: [],
        options: [],
      }
    },
    methods: {
      async getIngredients() {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
        const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;

        const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/ingredients`;
        try {
          const request = await fetch(REQUEST_URL);
          const ingredients = await request.json();

          this.breads = ingredients.breads;
          this.meats = ingredients.meats;
          this.options = ingredients.options;
          
        } catch (error) {
          console.error(error);
        }
      }
    },
    mounted() {
      this.getIngredients();
    }
}
</script>

<template>
  <div>
    <span>
      Action message
    </span>
      <form>
        <div class="mandaroty-form-container">
          <label for="customerName">
            Customer Name
            <input
              type="text"
              name="customerName"
              id="customerName"
              v-model="customerName"
              placeholder="Insert your name here"
            >
          </label>

        </div>
        <div class="extra-form-container">
          <h2>Extra ingredients</h2>
          <div class="extra-options-container">
            <label for="first">
              <input id="first" type="checkbox">
              first item
            </label>
            <label for="second">
              <input id="second" type="checkbox">
              second item
            </label>
            <label for="third">
              <input id="third" type="checkbox">
              Third item
            </label>
          </div>
        </div>
      </form>
  </div>
</template>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 350px;
    margin: auto;
  }

  .mandaroty-form-container label,
  .extra-form-container {
    display: flex;
    flex-direction: column;
    border-left: 4px solid var(--primary-accent-color);
    margin-bottom: 15px;
    padding: 5px 10px;
    color: var(--primary-dark-color);
    font-weight: bold;
  }

  .mandaroty-form-container input,
  .mandaroty-form-container select {
    padding: 10px;
    margin-top: 5px;
  }

  .extra-form-container h2 {
    margin-bottom: 10px;
  }

  .extra-options-container {
    display: flex;
    flex-flow: row wrap;
    gap: 10px;
    width: 100%;
  }
</style>