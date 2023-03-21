<script>
import { getOrders } from '../services/api';
import CustomerOrders from './CustomerOrders.vue';
  export default {
    name: "Dashboard",
    data() {
        return {
            titles: ["#", "Client", "Bread", "Meat", "Optionals", "Status"],
            orders: [],
        };
    },
    components: {
      CustomerOrders,
    },
    methods: {
      async saveOrders() {
        const orders = await getOrders();
        this.orders = orders;
      }
    },
    mounted() {
      this.saveOrders();
    }
}
</script>

<template>
  <div>
    <table>
      <tr>
        <th v-for="title in titles">
          {{ title }}
        </th>
      </tr>
      <CustomerOrders
        :orders="orders"
      />
    </table>
  </div>
</template>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    overflow: scroll;
  }

  th {
    border-bottom: 2px solid var(--primary-dark-color);
    padding: 10px;
  }
</style>