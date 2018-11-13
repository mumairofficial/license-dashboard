<template>
  <div class="w-full">
    <app-header />
    <app-navigation />
  </div>
</template>

<script>
import AppHeader from './Header'
import AppNavigation from './Navigation'

export default {
  name: 'TopAppBar',
  components: {
    AppHeader,
    AppNavigation
  }
}
</script>

<style>

</style>
