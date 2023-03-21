<script>
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
      }
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
          {{ customer.status }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    border-bottom: 2px solid var(--primary-dark-color);
    padding: 10px;
  }

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
</style>