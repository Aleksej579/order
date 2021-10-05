<template>
  <Header />
  <Navbar />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/NavBar.vue";
export default {
  components: {
    Header,
    Navbar,
  },
};
</script>

<style  lang="sass">
*
  margin: 0
  padding: 0
html
  background-color: #f0f3f5
.el-popup-parent--hidden
  overflow: auto
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 0 !important
  position: relative
  min-height: 100vh
#nav
  padding: 30px
  & a
    font-weight: bold
    color: #2c3e50
  & a.router-link-exact-active
    color: #42b983
</style>
