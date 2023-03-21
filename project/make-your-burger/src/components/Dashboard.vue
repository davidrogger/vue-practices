<script>
import { getOrders, getStatus } from '../services/api';
import CustomerOrders from './CustomerOrders.vue';
  export default {
    name: "Dashboard",
    data() {
        return {
            titles: ["#", "Client", "Bread", "Meat", "Optionals", "Status"],
            orders: [],
            status: [],
        };
    },
    components: {
      CustomerOrders,
    },
    methods: {
      async saveOrders() {
        const orders = await getOrders();
        this.orders = orders;
      },
      async saveStatus() {
        const status = await getStatus();
        this.status = status;
      },
    },
    mounted() {
      this.saveOrders();
      this.saveStatus();
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
        :status="status"
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