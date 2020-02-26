module.exports = {
  publicPath:'./',
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'img':'@/assets/img',
        'main-todo':'@/components/MainTodo'
      }

    }
  }
}

