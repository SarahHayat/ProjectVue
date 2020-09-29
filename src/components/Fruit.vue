<template>
<div>
  <h1>Liste de Fruits</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" :key="index">
        <span v-if="fruit.color === 'green'">
         name: {{ fruit.name }} - color: {{ fruit.color }}
        </span>
    </li>
  </ul>
</div>
</template>

<script>
export default {
name: "Fruit",
  data() {
    return {
      fruits: [
        {
          name: 'apple',
          color: 'green',
        },
        {
          name: 'orange',
          color: 'orange',
        },
        {
          name: 'pear',
          color: 'green'
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>