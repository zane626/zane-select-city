# 基于 element 的城市三级联动


此插件基于[elementUI](https://element.eleme.cn/)中的[cascader](https://element.eleme.cn/#/zh-CN/component/cascader)组件
```shell
vue add element
```


> main.js

```javascript
import { Cascader } from "element-ui";
import ZaneSelectCity from "zane-select-city";

Vue.use(Cascader);
Vue.use(ZaneSelectCity);
```

```html
<template>
  ...
    <zane-select-city :language="language" @select="result" />
  ...
</template>
<script>
export default {
  data(){
    ...
    language:'zh'
  },
  methods:{
    result(e){
      alert(e)
    }
  }
}
<script>

```
