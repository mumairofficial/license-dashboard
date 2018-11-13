<template>
  <div id="app">
    <top-app-bar />
    <router-view/>
  </div>
</template>

<script>
import TopAppBar from '@/components/appbar/TopAppBar'
export default {
  components: {
    TopAppBar
  }
}
</script>


<style>

</style>
