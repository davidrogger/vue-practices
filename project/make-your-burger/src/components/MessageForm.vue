<script>
  export default {
    name: "MessageForm",
    props: ["sentMessage", "messageType"]
  }
</script>

<template>
  <div
    v-show="sentMessage"
    :class="`message-container ${messageType}`"
  >
    {{ sentMessage }}
  </div>
</template>

<style scoped>
  .positive-message {
    color: #00852c;
    background-color: #ccffd7;
    border: 2px solid #b8ffc4;
  }

  .negative-message {
    color: #850000;
    background-color: #ffcccc;
    border: 2px solid #ffb8b8;
  }

  .message-container {
    border-radius: 5px;
    padding: 10px;
    margin: 30px 0;
    text-align: center;;
    transition: 2s;
    animation: fadeIn 5s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

</style>