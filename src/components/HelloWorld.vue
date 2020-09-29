<template>
  <div class="hello">
    <button @click="getAxios">Axios</button>
    <br>
    <h4 v-if="user_data.created_at !== undefined">created at : {{ user_data.created_at|format }}</h4>
    <h4 v-if="user_data.updated_at !== undefined">updated at :
      {{ user_data.updated_at|moment('dddd, MMMM do YYYY') }}</h4>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      user_data: {},
    }
  },
  mounted() {
    this.geUserData();
  },
  filters: {
    format: (value) => {
      let date = new Date(value);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    },
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
    geUserData() {
      fetch('https://api.github.com/users/SarahHayat')
          .then((data) => data.json())
          .then((user) => {
            this.user_data = user;
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
