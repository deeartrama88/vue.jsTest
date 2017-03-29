<template>
  <div id="app">
    <myHeader></myHeader>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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
  @import '../static/css/font-awesome.min.css';

</style>
