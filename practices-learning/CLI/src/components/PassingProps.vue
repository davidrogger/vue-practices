<template>
  <div
    class="session"
  >
    Email: {{ email }}
  </div>
</template>

<script>
  export default {
    name: 'PassingProps',
    props: {
      email: String
    }
  }
</script>