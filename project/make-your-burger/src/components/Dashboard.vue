<script>
import { getOrders, getStatus } from '../services/api';
import CustomerOrders from './CustomerOrders.vue';
import MessageForm from './MessageForm.vue';
  export default {
    name: "Dashboard",
    data() {
        return {
            titles: ["#", "Client", "Bread", "Meat", "Optionals", "Status"],
            orders: [],
            status: [],
            messageType: null,
            sentMessage: null,
        };
    },
    components: {
    CustomerOrders,
    MessageForm
},
    methods: {
      messageHandler(msg, type) {
        this.sentMessage = msg;
        this.messageType = type;

        setTimeout(() => {
          this.sentMessage = null;
          this.messageType = null;
        }, 5000);
      },
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
  <div
    class="orders-container"
  >
    <MessageForm 
      :messageType="messageType"
      :sentMessage="sentMessage"
    />
    <table v-if="orders.length">
      <tr>
        <th v-for="title in titles">
          {{ title }}
        </th>
      </tr>
      <CustomerOrders
        @save-orders="saveOrders"
        @message-handler="messageHandler"
        :orders="orders"
        :status="status"
      />
    </table>
    <h2 v-else>None orders could be found</h2>
  </div>
</template>

<style scoped>
  .orders-container {
    position: relative;
    width: 100%;
    display: flex;
    padding-top: 50px;
  }

  h2 {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    display: block;
    overflow: hidden;
    overflow-x: scroll;
    overflow-y: none;
    margin: 0 auto;
  }

  th {
    border-bottom: 2px solid var(--primary-dark-color);
    background-color: var(--primary-dark-transparent);
    padding: 10px;
  }

</style>