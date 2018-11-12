<template>
  <div class="w-full">
    <app-header />
    <app-navigation />
  </div>
</template>

<script>
import AppHeader from './layout/Header'
import AppNavigation from './layout/Navigation'

export default {
  name: 'TopNavigation',
  components: {
    AppHeader,
    AppNavigation
  }
}
</script>

<style>

</style>
