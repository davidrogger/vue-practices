<script>
  import SelectForm from './SelectForm.vue';

  export default {
    name: "BurgerForm",
    components: {
      SelectForm,
    },
    data() {
      return {
        customerName: null,
        breads: [],
        meats: [],
        options: [],
        breadSelected: null,
        meatSelected: null,
        optionsSelected: [],
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
      },
      sentOrder(event) {
        event.preventDefault();
        const { breadSelected, meatSelected, optionsSelected, customerName } = this;
        console.log({breadSelected, meatSelected, optionsSelected, customerName });

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
      <form @submit="sentOrder">
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

          <SelectForm
            v-model="breadSelected"
            itemName="bread"
            :items="breads"
          />

          <SelectForm
            v-model="meatSelected"
            itemName="meat"
            :items="meats"
          />

        </div>

        <div class="extra-form-container">
          <h2>Extra ingredients</h2>
          <div class="extra-options-container">
            <label v-for="{ id, type } in options" :key="id" :for="type">
              <input
                :id="type"
                type="checkbox"
                :value="type"
                v-model="optionsSelected"
              >
              {{ type }}
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Make my Burger!"
          class="submitBtn"
        >
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
    gap: 5px;
    width: 100%;
  }

  .extra-options-container label {
    width: 32%;
  }

  .submitBtn {
    background-color: var(--primary-dark-color);
    border: 2px solid var(--primary-dark-color);
    border-radius: 10px;
    color: var(--primary-accent-color);
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    margin: 25px auto 0 auto;
    transition: 0.5s;
  }

  .submitBtn:hover {
    background-color: transparent;
    color: var(--primary-dark-color);
    border-radius: 0;
  }
</style>