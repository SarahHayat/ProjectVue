<template>
  <div>
    <h1>Compteur</h1>
    <button @click="plus"> +</button>
    <p>Compteur : {{ compteur }}</p>
    <button @click="moins"> -</button>
  </div>
</template>

<script>
export default {
  name: "Compteur",
  data() {
    return {
      compteur: 0,
    }
  },
  methods: {
    plus() {
      this.compteur++;
    },
    moins() {
      this.compteur--;
    },
  }
}
</script>

<style scoped>

</style>