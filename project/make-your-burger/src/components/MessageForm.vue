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
    animation: fadeIn 5s;
    border-radius: 5px;
    position: absolute;
    top: 0;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
    transition: 2s;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

</style>