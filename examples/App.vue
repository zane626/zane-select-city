<template>
  <div id="app">
    <el-button @click="cahngeLanguage">{{language}}</el-button>
    <zane-select-city :language="language" @select="result" />
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      language: "zh"
    };
  },
  methods: {
    cahngeLanguage() {
      this.language = this.language == "zh" ? "en" : "zh";
    },
    result(e){
      alert(e)
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
