<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 需與props中參數相同名稱 -->
    <p>User Name: {{switchName()}}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: String ,
    resetFn: Function
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Max";
      //resetName事件觸發後，自動觸發nameWasReset事件
      this.$emit("nameWasReset", this.myName);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
