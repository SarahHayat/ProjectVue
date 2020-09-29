<template>
  <div>
    <h1>Liste de Course</h1>
    <label>Ajouter un ingredient : </label>
    <input type="text" placeholder="(ex:Ketchup)" v-model="new_item" @keydown.enter="ajouter_item">
    <ul>
      <li v-for="(item, index) in liste_course" :key="index">
        <span>{{ item }} <button @click="supprimer_item(index)">&times;</button></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Liste",
  data() {
    return {
      liste_course: ['Tomates', 'Oranges', 'Pain', 'Oignons',],
      new_item: '',
    }
  },
  methods: {
    ajouter_item() {
      if (this.new_item != "") {
        this.liste_course.push(this.new_item)
        this.new_item = ""
      }
    },
    supprimer_item(index) {
      this.liste_course.splice(index, 1)
    },
  }
}
</script>

<style scoped>

</style>