<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :goods-item="item" class="goods-list" />
  </div>
</template>

<script>
  import GoodListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components:{
      GoodListItem
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 48%;
  }

</style>
