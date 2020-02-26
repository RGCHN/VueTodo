<template>
    <div class="main-todo">
        <input type="text" class="add-todo" placeholder="what to do ?" autofocus
               v-model="content" @keyup.enter="addTodo">
        <new-item v-for="(item,index) in filterData" :key="index"
                  :todo-data="item"
                  @del="handleDel">
        </new-item>
        <todo-info :totalItem="totalItem"
                   @toggleState="handleToggleState"
                    @ClearCompleted="handleClear">

        </todo-info>
    </div>
</template>

<script>
    import newItem from "main-todo/child/todoItem";
    import todoInfo from "main-todo/child/todoInfo";
  export default {
    name: "MainTodo",
    components: {
      newItem,
      todoInfo,
    },
    data() {
      return {
        content: '',
        todoData: [],
        totalItem: 0,
        filter: 'all'
      }
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
          case 'active':
            return this.todoData.filter(item => item.completed === false)
          case 'completed':
            return this.todoData.filter(item => item.completed === true)
          default:
            return null
        }
      }
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.totalItem = this.todoData.filter(
              item => item.completed === false
          ).length
        }
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return;
        const index = this.todoData.length;
        this.todoData.unshift({
          id: index,
          content: this.content,
          completed: false
        });
        this.content = '';
      },
      handleDel(id) {
        this.todoData.splice(this.todoData.findIndex(item => item.id === id), 1)
      },
      handleToggleState(state) {
        this.filter = state;
      },
      handleClear(){
        this.todoData = this.todoData.filter(item => item.completed === false)
      },
    }
  }
</script>

<style lang="stylus"  scoped>
   .main-todo
        margin: 0 auto
        width: 600px
        background-color: #fff
        box-shadow: 0 0 5px rgba(255,255,255,0.8)

     .add-todo
        padding:16px 16px 16px 36px
        width: 600px
        font-size:24px
        font-family: inherit
        font-weight:  inherit
        color: inherit
        border:none
        outline: none
        box-sizing: border-box



</style>
