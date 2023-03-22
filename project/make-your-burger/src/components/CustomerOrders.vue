<script>
  import { deleteOrder, updateOrder } from '../services/api';
import Loading from './Loading.vue';

  export default {
    name: "CustomerOrders",
    props: ["orders", "status"],
    emits: ["saveOrders", "messageHandler"],
    data() {
        return {
            idLoading: null,
        };
    },
    methods: {
        async deleteHandler(id) {
          try {
            this.idLoading = id;
            await deleteOrder(id);
            this.$emit("saveOrders");
            this.$emit("messageHandler", `Order ${id} removed with success!`, "positive-message");
            this.idLoading = null;
          } catch (error) {
            this.$emit("messageHandler", "Something went wrong", "negative-message")
          }
        },
        async statusHandler(id, status) {
          try {
            await updateOrder(id, status);
            this.$emit("messageHandler", `Order ${id} updated to ${status}!`, "positive-message")
          } catch (error) {
            this.$emit("messageHandler", "Something went wrong", "negative-message")
          }
        },
    },
    components: { Loading }
}
</script>

<template>
  <tbody>
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
        <div  class="status-container">
          <select
            class="status-item"
            :value="order.status"
            @change="statusHandler(order.id, $event.target.value)"
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
            @click="deleteHandler(order.id)"
            :disabled="idLoading === order.id"
          >
            <span v-if="!(idLoading === order.id)">Cancelar</span>
            <Loading v-else />
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<style scoped>
  td {
    border-bottom: 1px solid var(--primary-dark-transparent);
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

  .status-container {
    display: flex;
    justify-content: center;
  }

  .status-item {
    width: 110px;
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