new Vue({
  el: '#excersise',
  data: {
    effect: 'highlight',
    active: 'active',
    bordered: 'bordered',
    userClass: '',
    secondClass: "true",
    userColor: '',
    progressBarWidth: 0
  },
  computed: {
    userStyle: function() {
      return {
        backgroundColor: this.userColor,
      }
    }
  },
  methods: {
    startEffect: function() {
      var tm = this;
      setInterval(function() {
        tm.effect = tm.effect == 'shrink' ? 'highlight' : 'shrink';
      }, 2000);
    },
    startProgressBar: function() {
      var tm = this;
      tm.interval = setInterval(function() {
        if (tm.progressBarWidth < 300) {
          tm.progressBarWidth += 50;
        } else {
          clearInterval(tm.interval);
        }
      }, 2000);
    }
  }
});