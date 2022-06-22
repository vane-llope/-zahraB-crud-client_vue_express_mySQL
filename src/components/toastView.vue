<template>
  <div class="container">
    <div v-if="clr == 'danger'" class="alert alert-danger text-center" role="alert">
      {{msg}}
    </div>
    <div v-if="clr == 'info'" class="alert alert-info text-center" role="alert">
      {{msg}}
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    clr: String
  },
 
  
}
</script>

<style>
</style>