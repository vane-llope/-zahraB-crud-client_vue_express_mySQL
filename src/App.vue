<template>
<div>
 <!-- <spinnerView/>-->
  <navbarView />
  <router-view/>
  
</div>
  <!--  <nav>
    <i class="fa fa-home fa-4x"></i>
  <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>-->
</template>
<script>
import navbarView from './components/navbarView.vue'
//import spinnerView from './components/spinnerView.vue'
export default {
  components : {
    navbarView,
   // spinnerView
  }
}
</script>
<style lang="scss">

</style>
