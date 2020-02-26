<template>
    <div class="todo-info">
        <span class="total" v-if="totalItem > 1">{{totalItem}} items left</span>
        <span class="total" v-else>{{totalItem}} item left</span>
        <div class="tabs">
            <a v-for="(item,index) in states" :key="index"
               @click="toggleState(item)"
                :class="state === item ? 'ac':''">
                {{item}}
            </a>
        </div>
        <button class="clear" @click="ClearCompleted">Clear Completed</button>
    </div>
</template>

<script>
  export default {
    name: "todoInfo",
    props:{
      totalItem:Number,
    },
    data(){
      return {
        states:['all','active','completed'],
        state:'all',
      }
    },
    methods:{
      toggleState(state){
        this.state = state;
        this.$emit('toggleState',state)
      },
      ClearCompleted(){
        this.$emit('ClearCompleted')
      }
    },
  }

</script>

<style scoped>
    .todo-info{
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        padding:5px 10px;
        line-height: 30px;
        border-top:1px solid rgba(0,0,0,0.1);
    }

    .total{
        color: rgb(254, 67, 101);
    }

    .tabs{
        display: flex;
        justify-content: space-between;
        width:200px;
    }
    .tabs a{
        border:1px solid rgb(252, 157, 154);
        border-radius: 5px;
        padding:0 10px;
    }
    .ac{
        border: none;
        background-color: rgb(252, 157, 154);
        color:#fff;
    }
    .clear{
        padding:0 10px;
        background-color: rgb(131, 175, 155);
        border-radius: 5px;
        color:#fff;
        appearance: none;
        border:none;
        outline: none;
    }

</style>
