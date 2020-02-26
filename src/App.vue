<template>
  <div id="app">
    <main-header></main-header>
    <main-todo></main-todo>
    <Footer></Footer>
  </div>
</template>

<script>
  import('./assets/css/global.css');
  import MainHeader from "./components/Header/MainHeader";
  import MainTodo from "./components/MainTodo/MainTodo";
  import Footer from "./components/Footer/Footer";
  export default {
  name: 'App',
  components: {
    MainHeader,
    MainTodo,
    Footer
  }
}
</script>

<style>

</style>
