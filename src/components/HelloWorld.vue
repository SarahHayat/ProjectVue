<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getAxios">Axios</button>
    <br>
    <button @click="getFetch">Fetch</button>


  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getAxios() {
      axios.get('https://api.github.com/users/SarahHayat')
          .then(function (response) {
            // handle success
            console.log(response)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },
    getFetch() {
      fetch('https://api.github.com/users/SarahHayat')
          .then((data) => data.json())
          .then((user) => {
            console.log(user)
          })
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
