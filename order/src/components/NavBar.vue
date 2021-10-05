<template>
  <div id="navbar">
    <div id="logo"></div>
    <ul id="nav">
      <li>
        <router-link to="/">Orders</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass">
#navbar
  width: 250px
  box-shadow: 0 10px 10px rgba(0,0,0,0.5)
  padding-top: 50px
  position: absolute
  top: 80px
  bottom: 0
  background-color: white
#logo
  height: 100px
  width: 100px
  border-radius: 50px
  margin: 0 auto
  background-image: url('../assets/d.jpg')
  background-size: cover
#nav
  li
    list-style-type: none
    margin: 15px 0
</style>


