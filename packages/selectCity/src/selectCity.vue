<template>
  <div>
    <span v-if="language=='zh'">
      <el-cascader
        v-model="value"
        :options="options"
        :props="{value: 'key',label: 'value'}"
        @change="handleChange"
      ></el-cascader>
    </span>
    <el-cascader
      v-else
      v-model="value"
      :options="options"
      :props="{value: 'key',label: 'enValue'}"
      @change="handleChange"
    ></el-cascader>
  </div>
</template>

<script>
let json = require("./city.json");
export default {
  name: "ZaneSelectCity",
  data() {
    return {
      value: [],
      options: json,
      keys: {
        value: "key",
        label: "enValue"
      }
    };
  },
  props: {
    language: {
      validator(value) {
        return ["zh", "en"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    cahngeLanguage() {
      this.language = !this.language;
    },
    handleChange(e) {
      this.$emit("select", e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
