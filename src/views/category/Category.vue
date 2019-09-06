<template>
<div>
  <div class="wrapper">
    <ul>
      <button @click="btnClick">按钮</button>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
      <li>11111111</li>
    </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data(){
      return {
        scroll: null
      }
    },
    mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll', position => {
        console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log("上拉加载更多");
      })
    },
    methods: {
      btnClick(){
        console.log('----');
      }
    }
  }
</script>

<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
