<script>
  export default {
    name: "SelectForm",
    props: ["items", "itemName", "modelValue"],
    data() {
      return {
        selected: ""
      }
    },
    created() {
      this.selected = this.itemSelected;
    }
  }
</script>

<template>
  <label :for="`${itemName}Pick`">
    Pick your {{ itemName }}
    <select
      :name="`${itemName}Pick`"
      :id="`${itemName}Pick`"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <option value="" disabled>
      Pick a {{ itemName }} here
    </option>
    <option 
      v-for="{id, type} in items" :key="id"
      :value="type"
    >
      {{ type }}
    </option>
    </select>
  </label>
</template>