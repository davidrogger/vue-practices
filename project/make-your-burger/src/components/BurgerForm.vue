<script>
  import MessageForm from './MessageForm.vue';
import SelectForm from './SelectForm.vue';
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
  
  export default {
    name: "BurgerForm",
    components: {
    SelectForm,
    MessageForm
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
        messageType: null,
        sentMessage: null,
        missingFields: [],
      }
    },
    methods: {
      async getIngredients() {
        try {
          const REQUEST_URL = `${BACKEND_URL}:${BACKEND_PORT}/ingredients`;
          const request = await fetch(REQUEST_URL);
          const ingredients = await request.json();

          this.breads = ingredients.breads;
          this.meats = ingredients.meats;
          this.options = ingredients.options;
          
        } catch (error) {
          console.error(error);
        }
      },
      cleanMessage() {
        this.sentMessage = null;
        this.messageType = null;
        this.missingFields = [];
      },
      getMissingFields() {
        const fields = this.missingFields;
        return fields.reduce((fieldsPhrase, field, index)=> {
          if (index === fields.length - 1) fieldsPhrase += `${field} ]`
          else fieldsPhrase += `${field}, `
          return fieldsPhrase;
        },"[ ")
      },
      emptyFieldsNotAllowed(payload) {
        for (const entry of Object.entries(payload)) {
          const [field, value] = entry;
          if (!value) {
            this.missingFields.push(field)
          }
        }

        if (this.missingFields) throw new Error("Missing Fields");

        return {
          customerName: payload.name,
          breadSelected: payload.bread,
          meatSelected: payload.meat,
        }
      },
      getPayloadData() {
        const mandatoryFields = {
          name: this.customerName,
          bread: this.breadSelected,
          meat: this.meatSelected,
        }

        const fieldsChecked = this.emptyFieldsNotAllowed(mandatoryFields);

        return {
          ...fieldsChecked,
          optionsSelected: Array.from(this.optionsSelected),
          status: "Requested",
        }
      },
      async createOrder(payload) {
        const POST_URL =`${BACKEND_URL}:${BACKEND_PORT}/burgers`;
        const POST_DATA = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };
        const response = await fetch(POST_URL, POST_DATA);

        return response.json();
      },
      resetForms() {
        this.customerName = null;
        this.breadSelected = null;
        this.meatSelected = null;
        this.optionsSelected = [];
      },
      async sentOrder(event) {
        event.preventDefault();
        try {
          const payload = this.getPayloadData();
          const request = await this.createOrder(payload);
          this.resetForms();
          console.log(request);
        } catch (error) {
          console.error(error);
          if (this.missingFields) {
            const isPlural = this.missingFields.length > 0 ? 's' : '';
            this.messageType = 'negative-message';
            this.sentMessage = `Need to fullfill the fild${isPlural}: ${this.getMissingFields()}`;
          }
        }
        setTimeout(() => this.cleanMessage(), 5000);
      }
    },
    mounted() {
      this.getIngredients();
    }
}
</script>

<template>
  <div class="order-container">
    <MessageForm :messageType="messageType" :sentMessage="sentMessage" />
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
  .order-container {
    max-width: 350px;
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
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