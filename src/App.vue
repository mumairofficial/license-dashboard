<template>
  <div id="app">
    <top-navigation />
    <router-view/>
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation'
export default {
  components: {
    TopNavigation
  }
}
</script>


<style>

</style>
