<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // ref如果是绑定在组件中,那么通过this.$refs.redname获取到的是一个组建对象
  // ref如果是绑定在普通的元素中,那么通过this.$refs.refname获取到的是一个元素对象
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted(){
      // 1. 创建BScroll对象
       this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动位置
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollPos', position)
      })
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>
