<template>
  <div id="app">
    <myHeader></myHeader>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from './components/Header'
  import myFooter from './components/Footer'

  export default {
    name: 'app',
    components: {
      myHeader,
      myFooter
    }
  }
</script>

<style lang="scss">
  @import '../static/css/main.scss';
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
