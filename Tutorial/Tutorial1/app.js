new Vue({
	/* 選取控制的element */
  el: '#app',
  /* 資料存放 */
  data: {
    title: '測試',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function() {
      return this.title
    }
  }
});
