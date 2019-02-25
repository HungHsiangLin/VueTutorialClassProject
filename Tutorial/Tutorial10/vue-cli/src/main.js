import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//全域註冊
Vue.component('app-server', Home);

new Vue({
  el: '#app',
  //相當於(function (h) {  return h(App);  });  
  render: h => h(App)
})
