<template>
  <div>
    <h1>Liste de Films</h1>
    <ul>
      <li v-for="(film, index) in films" :key="index">
        <b>Title</b> : {{ film.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Films",
  data() {
    return {
      films: null,
    }
  },
  mounted() {
    this.getFilms();
  },
  methods:{
    getFilms(){
      fetch('https://api-films.herokuapp.com/films')
          .then((data) => data.json())
          .then((film) => {
            this.films=film
          })
    }
  },
  filters:{
    currency:(value) =>{
      return `${value}€`;
    },
  }
}
</script>

<style scoped>

</style>