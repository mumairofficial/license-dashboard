<template>
  <content-wrapper>
    
    <div class="flex">
      <div class="bg-white text-grey-darkest flex-1 p-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Total License</div>
        <div class="mt-8 text-4xl text-right">123,456,10</div>
      </div>
      
      <div class="bg-green-light text-white flex-1 p-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Active</div>
        <div class="mt-8 text-4xl text-right">123,45</div>
      </div>

      <div class="bg-orange-light text-white flex-1 p-4 rounded-lg mr-4">
        <div class="uppercase tracking-wide">Expired</div>
        <div class="mt-8 text-4xl text-right">123</div>
      </div>

      <div class="bg-blue-light text-white flex-1 p-4 rounded-lg">
        <div class="uppercase tracking-wide">Earning</div>
        <div class="mt-8 text-4xl text-right">PKR 123,45</div>
      </div>
    </div>

    <div class="flex mt-10">
      <div class="flex-1 p-2 bg-white rounded-lg mr-4">
        Recent Sale
      </div>
      <div class="flex-1 p-2 bg-white rounded-lg">
        Up Coming Expiries
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
