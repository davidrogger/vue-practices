<script>
import CustomerOrders from './CustomerOrders.vue';

  const mockedUser = {
    "name": "Jonas Doe",
    "bread": "Parmesan and Oregano",
    "meat": "Bottom Sirloin",
    "options": [
      "Bacon",
      "Tomato",
      "Cheddar",
      "Red Onion",
      "Pickles",
      "Salami"
    ],
    "status": "Requested",
    "id": 2
    };

  export default {
    name: "Dashboard",
    data() {
        return {
            titles: ["#", "Client", "Bread", "Meat", "Optionals", "Status"],
            orders: [mockedUser, mockedUser],
        };
    },
    components: { CustomerOrders }
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