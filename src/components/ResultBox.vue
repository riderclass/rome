<script>
import { ref } from 'vue';
export default {
  props: {
    result: {
      type: [Number, String],
      required: true
    },
},
setup() {
    const checkResult = function(res) {
      if (res === 1988 || res === 'MCMLXXXVIII') {
        alert('Да это же год моего рождения!')
        return res
      } else {
        return res
      }
    }
    return { checkResult }
}
}
</script>

<template>
    <div>
    <h1 class="superInput">{{ checkResult(result) }}</h1>
    {{ test1 }}
  </div>
  </template>

  <style scoped>
.superInput {
  width: 400px;
    height: 60px;
    text-align: center;
    padding: 20px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 20px auto;
}
</style>