var data = {
  title: 'The VueJS Instance',
  showParagraph: false
}


Vue.component('hello',{
  template: '<h1>Hello!</h1>'
});


var vm1 = new Vue({
  data: data,
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function (title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function (value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

//透過$mount掛載該 vue instance
vm1.$mount('#app1');



//在vue實例中，使用$refs屬性可通過該元素其命名來引用其元素
console.log(vm1.$refs.myButton);
console.log(vm1.$refs.myButton.innerText);
vm1.$refs.myButton.innerText = 'Text';
vm1.$refs.heading.innerText = 'Something else';



//可透過vue instance中的$data 取得data的資料
console.log(vm1.$data === data);

//外部控制vm1這vue instance，取值(data、method)
setTimeout(function () {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The  2nd VueJS Instance'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed!';
    }

  }
});


var vm3 = new Vue({
  template:'<h1>Hello!</h1>'
});

vm3.$mount('#app3');