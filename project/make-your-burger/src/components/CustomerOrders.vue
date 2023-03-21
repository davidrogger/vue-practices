<script>
  export default {
    name: "CustomerOrders",
    props: ["orders"],
    data() {
      return {
        statusOptions: ["Requested", "Burning", "Ready To Go"],
      }
    }
  }
</script>

<template>
  <tr v-for="customer in orders">
    <td>
      {{ customer.id }}
    </td>
    <td>
      {{ customer.name }}
    </td>
    <td>
      {{ customer.bread }}
    </td>
    <td>
      {{ customer.meat }}
    </td>
    <td>
      <ul>
        <li v-for="optinal in customer.options">
          {{ optinal }}
        </li>
      </ul>
    </td>
    <td>
      <select
        class="status-item"
        :value="customer.status"
      >
        <option
          v-for="status in statusOptions"
          :name="status"
          :value="status"
        >
          {{ status }}
        </option>
      </select>
      <button
      class="status-item status-btn"
      >
        Cancelar
      </button>
    </td>
  </tr>
</template>

<style scoped>
  td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 10px;
  }

  ul {
    list-style-position: inside;
    width: 60%;
    text-align: left;
    margin: auto;
  }

  .status-item {
    width: 45%;
    height: 40px;
  }

  .status-btn {
    background-color: var(--primary-dark-color);
    color: var(--primary-accent-color);
    border: 2px solid var(--primary-dark-color);
    font-weight: bold;
    margin-left: 5px;
    transition: 0.5s;
  }

  .status-btn:hover {
    background-color: transparent;
    color: var(--primary-dark-color);
  }

</style>