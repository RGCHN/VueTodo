<template>
    <div :class="['item',todoData.completed?'completed':'']">
        <label>
            <input type="checkbox" v-model="todoData.completed">
            {{todoData.content}}
        </label>
        <button @click="delItem"></button>
    </div>
</template>

<script>
  export default {
    name: "todoItem",
    props:{
        todoData:Object,
    },
    methods:{
      delItem(){
        this.$emit('del',this.todoData.id);
      },
    }

  }
</script>

<style scoped>
    .item{
        display:flex;
        justify-content:space-between;
        padding:10px;
        font-size: 24px;
        border-top:1px solid rgba(0,0,0,0.1);
    }

    .item:hover button:after{
            content: 'x';
            font-size: 24px;
            color:rgb(252, 157, 154);
            padding:0 0 0 3px;
        }
    .completed label{
        color:#d9d9d9;
        text-decoration: line-through;
    }

    label{
        flex:1;
        transition: color 0.4s;
    }

    input{
        width:50px;
        height: 30px;
        padding:5px 0 0 0;
        appearance:none;
        border:none;
        outline:none;
        text-align: center;
    }
    input:after{
         content:url("~img/check.png");
     }
    input:checked:after{
        content:url("~img/uncheck.png");
    }
    button{
        width:40px;
        background-color: transparent;
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
    }
</style>
