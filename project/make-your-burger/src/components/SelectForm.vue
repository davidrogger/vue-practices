<script>
  export default {
    name: "SelectForm",
    props: ["items", "itemName"]
  }
</script>

<template>
  <label :for="`${itemName}Pick`">
    Pick your {{ itemName }}
    <select :name="`${itemName}Pick`" :id="`${itemName}Pick`">
    <option value="" disabled selected>
      Pick a {{ itemName }} here
    </option>
    <option v-for="{id, type} in items" :key="id" :value="type">
      {{ type }}
    </option>
    </select>
  </label>
</template>