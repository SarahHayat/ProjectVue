<template>
  <div>
  <button @click="getFilms">FILMS</button>
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
  methods:{
    getFilms(){
      fetch('https://api-films.herokuapp.com/films')
          .then((data) => data.json())
          .then((film) => {
            this.films=film
          })
    }
  }
}
</script>

<style scoped>

</style>