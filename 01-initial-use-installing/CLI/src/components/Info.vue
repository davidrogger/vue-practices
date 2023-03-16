<template>
  <div>
    <p>Linguagens:</p>
    <ul>
      <li
        v-for="{ name, id } in technologies"
        :key="id"
      >
      {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'InfoComponent',
    data() {
      return {
        technologies: [
          { id: 1, name: 'Javascript' },
          { id: 2, name: 'ReactJS' },
          { id: 3, name: 'Python' },
        ]
      }
    }
  }
</script>