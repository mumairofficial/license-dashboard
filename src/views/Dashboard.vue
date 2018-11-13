<template>
  <content-wrapper>
    
    <div class="flex">
      <div class="bg-white text-grey-darkest flex-1 py-6 px-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Total License</div>
        <div class="mt-4 text-4xl text-right">123,456,10</div>
      </div>
      
      <div class="bg-green-light text-white flex-1 py-6 px-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Active</div>
        <div class="mt-4 text-4xl text-right">123,45</div>
      </div>

      <div class="bg-orange-light text-white flex-1 py-6 px-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Expired</div>
        <div class="mt-4 text-4xl text-right">123</div>
      </div>

      <div class="bg-blue-light text-white flex-1 py-6 px-4 rounded-lg">
        <div class="uppercase tracking-wide">Recalled</div>
        <div class="mt-4 text-4xl text-right">123,456,10</div>
      </div>
    </div>

  </content-wrapper>
</template>

<script>
// @ is an alias to /src
import ContentWrapper from '@/components/layout/ContentWrapper.vue'

export default {
  name: "home",
  components: { ContentWrapper }
}
</script>
