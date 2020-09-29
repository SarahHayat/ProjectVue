import Vue from 'vue'
import App from './App.vue'
Vue.use(require('vue-moment'));
Vue.use(require('vue-async-computed'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
