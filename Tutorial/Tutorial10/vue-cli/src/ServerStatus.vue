<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical"
    };
  },
  methods: {
    //ES6可簡寫changeStatus = function(){}為changeStatus()
    changeStatus() {
      this.status = "Normal";
    }
  }
};
</script>

<style>
</style>
