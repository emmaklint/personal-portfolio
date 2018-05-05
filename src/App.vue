<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navigation></navigation>
    <router-view/>
    <contact></contact>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Contact from '@/components/Contact'

export default {
  name: 'App',
  components: {
    Navigation,
    Contact
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
