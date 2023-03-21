<script>
  export default {
    name: "CustomerOrders",
    props: ["orders", "status"],
  }
</script>

<template>
  <tr v-for="order in orders" :key="order.id">
    <td>
      {{ order.id }}
    </td>
    <td>
      {{ order.name }}
    </td>
    <td>
      {{ order.bread }}
    </td>
    <td>
      {{ order.meat }}
    </td>
    <td>
      <ul>
        <li v-for="(optinal, index) in order.options" :key="index">
          {{ optinal }}
        </li>
      </ul>
    </td>
    <td>
      <select
        class="status-item"
        :value="order.status"
      >
        <option
          v-for="{id, type} in status"
          :key="id"
          :name="type"
          :value="type"
        >
          {{ type }}
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
    overflow: hidden;
    white-space: nowrap;
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