<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init () {
      
      class peope{
        constructor(...args){
          this.args = args
        }
        introduce(){
          console.log(this.args)
        }
      }
      // console.log(new peope('清茶','nv'))
      let one = new peope(1,2,3,4,5)
      
      let toString = ()=>{
        console.log(this)
      }
      
      Object.assign(peope.prototype,{toString})
      one.toString()
      one.introduce()
      

      let a = new Set()
      let array = [1,2,3,2,4,235,54,46,54,5,4,3,'dfdg',4]
      array.forEach(i=>{
        a.add(i)
      })
      const set = new Set([
        ['foo', 1],
        ['bar', 2]
      ]);
      const m1 = new Map(set)
      console.log(m1.keys())

      // generator函数 yield表达式
      function* hwGenerator(){
        let a = [1,2,43,5,6]
        yield a
        yield 'hello'
        yield 'world'
        return '执行结束'
      }
      
      let hw = hwGenerator()
      console.log(hw.next())
      

      var arr = [1, [[2, 3], 4], [5, 6]];

      var flat = function* (a) {
        var length = a.length;
        for (var i = 0; i < length; i++) {
          var item = a[i];
          if (typeof item !== 'number') {
            yield* flat(item);
          } else {
            console.log('执行到此')
            yield item;
          }
        }
      };
console.log(flat(arr))
      for (var f of flat(arr)) {
        console.log(f);
      }
      // for (var f in flat(arr)) {
      //   console.log(f);
      // }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: 18rem;
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10rem;
}
a {
  color: #42b983;
}
</style>
