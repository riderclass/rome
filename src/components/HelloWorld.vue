<script>
import { ref } from 'vue';
import ResultBox from './ResultBox.vue'
export default {
  components: { ResultBox },
  setup() {
    const stack = ref('');


    const kill = function(num) {
      return this.arr.splice(num, 1);
    }

    const count = function(num)  {
  function isANumber(str){
  return !/\D/.test(str);
}

  if ( isANumber(num) )  {
    let stack = [];
    let t = Math.floor(num / 1000);
    let h = Math.floor((num - (1000*t)) / 100);
    let d = Math.floor(((num - (1000*t)) - (100*h)) / 10);
    let e = ((num - (1000*t)) - (100*h)) - (10*d);
    stack = [1000*t, 100*h, 10*d, e];
    stack = stack.filter(function(val) { return val !== 0; })
           stack = stack.map(item => {
        
    if ( String(item).length === 4 ) {
        return "M".repeat(t)
        
    } else if ( String(item).length === 3 ) {
        if ( item < 400 ) {
             return "C".repeat(h)
        } else if ( item === 400 ) {
             return "CD"
        } else if ( item > 400 && item < 900 ) {
             return "D" + "C".repeat(h - 5)
        } else if ( item === 900 ) {
            return "CM"
        }
    } 
        else if ( String(item).length === 2  ) {
        if ( item < 40 ) {
             return "X".repeat(d)
        } else if ( item === 40 ) {
             return "XL"
        } else if ( item > 40 && item < 90 ) {
             return "L" + "X".repeat(d - 5)
        } else if ( item === 90 ) {
            return "XC"
        }
    } 

          else if ( String(item).length === 1  ) {
        if ( item < 4 ) {
             return "I".repeat(e)
        } else if ( item === 4 ) {
             return "IV"
        } else if ( item > 4 && item < 9 ) {
             return "V" + "I".repeat(e - 5)
        } else if ( item === 9 ) {
            return "IX"
        }
    }                          
})
    stack = stack.join('').replace(/\s/g, "");
    return stack
} else if ( !isANumber(num) ) {

  let stack = 0;
    for (let i = 0; i<num.length; i++) {
      if (num[i] === "M") {
        stack = stack + 1000;
      } else if (num[i] === "D") {
        stack = stack + 500;
      } else if (num[i] === "C" && num[i + 1] !== "M" && num[i + 1] !== "D") {
        stack = stack + 100;
      } else if (num[i] === "C" && num[i + 1] === "M") {
        stack = stack + 900;
        i++
      } else if (num[i] === "C" && num[i + 1] === "D" ) {
        stack = stack + 400;
        i++
      } else if (num[i] === "L") {
        stack = stack + 50
      } else if (num[i] === "X" && num[i + 1] !== "C" && num[i + 1] !== "L") {
        stack = stack + 10;
      } else if (num[i] === "X" && num[i + 1] === "C") {
        stack = stack + 90;
        i++
      } else if (num[i] === "X" && num[i + 1] === "L") {
        stack = stack + 40;
        i++
      } else if (num[i] === "V") {
        stack = stack + 5;
      } else if (num[i] === "I"  && num[i + 1] !== "X" && num[i + 1] !== "V") {
        stack = stack + 1;
      } else if (num[i] === "I" && num[i + 1] === "X" ) {
        stack = stack + 9;
        i++;
      } else if (num[i] === "I"  &&  num[i + 1] === "V") {
        stack = stack + 4
        i++
      }
    }
    return stack
}


  };
  const arr = ref([]);

  const AddNum = function(num) {
    this.arr.push(num);
    this.stack = '';
  }




    return { stack, count, arr, AddNum, kill } 
  }
}

</script>

<template>
<p>Введите число арабское или римское (от 1 до 4000)</p>
  <div>
    <input style="
        height: 40px;
    font-size: 20px;
    padding-left: 20px;
    " v-model="stack" />
<ResultBox :result="count(stack)" />

    <button @click="AddNum(count(stack))">Добавить</button>
    <ul v-if="arr.length > 0" style="text-align: left;">
      <li style="
          display: block;
    margin: 0px auto;
    width: 300px;
    padding: 0px 20px;
      " v-for="(item, index) in arr" :key="item">
        <h3 style="
        display: inline-block;
    width: 200px;
        ">{{ item }}</h3>
        <button style="margin-left:40px" @click="kill(index)">X</button>
      </li>
    </ul>
    <h3 style="margin-top:60px" v-else>Пока ничего..</h3>
  </div>

 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
