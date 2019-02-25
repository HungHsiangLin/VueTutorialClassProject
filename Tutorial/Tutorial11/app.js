

//全域宣告component，每個Vue instantance皆可用
Vue.component('my-cmp', {
  //為了不讓每個component共享同樣的data，此處須為function
  data: function () {
    return {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p> ',
  methods: {
    changeStatus: function () {
      this.status = "Normal";
    }
  }
});

var cmp = {
  data: function () {
    return {
      status: 'Critical2'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p> ',
  methods: {
    changeStatus: function () {
      this.status = "Difficult";
    }
  }
}


new Vue({
  el: '#app'
});


new Vue({
  el: '#app2',
  //局部宣告component,只有該Vue instantance可用
  components: {
    'my-cmp2': cmp
  }

});

