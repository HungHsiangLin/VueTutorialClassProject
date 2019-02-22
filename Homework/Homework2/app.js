new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    clickAlert: function() {
      alert('Show Alert');
    },
    saveValue: function(event) {
      this.value = event.target.value;
    },
  }
});
