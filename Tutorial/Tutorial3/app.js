new Vue({
  el: '#app',
  data: {
    name: 'Sam',
    counter: 0,
    secondCounter: 0,
    searchLink: 'https://www.google.com/'
  },
  /*   computed 對象內的方法如果在初始化時綁定到元素上的事件會先執行一次這個方法 ，而 methods 內的方法則不會,我們可以使用 methods 來替代 computed，效果上兩個都是一樣的，
  但是 computed 是基於它的依賴緩存，只有相關依賴發生改變時才會重新取值。而使用 methods ，在重新渲染的時候，函數總會重新調用執行。可以說使用 computed 性能會更好，但是如果你不希望緩存，
  你可以使用 methods 屬性。
   */
  computed: {
    output: function () {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function (value) {
      var vm = this;
      setTimeout(function () {
        vm.counter = 0
      }, 2000);
    }
  },
  methods: {
    result: function () {
      console.log('Method');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    },
  }

});

