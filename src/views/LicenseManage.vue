<template>
  <content-wrapper>
    <div class="border border-grey-light rounded bg-white">
      <!-- <div class="bg-grey-lighter"> -->
        <input class="px-6 py-4 bg-grey-light w-full text-mono text-grey-darker no-outline" type="text" placeholder="Type to search..." />
      <!-- </div> -->
      <table class="text-left w-full" style="border-collapse:collapse">
        <thead>
          <tr class="">
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Issue To</th>
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Application</th>
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">License Key</th>
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Expiry</th>
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Issued On</th>
            <th class="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr class="hover:bg-blue-lightest font-mono text-sm tracking-wide">
            <td class="py-4 px-6 border-b border-grey-light">user@email.com</td>
            <td class="py-4 px-6 border-b border-grey-light">Remote Desktop</td>
            <td class="py-4 px-6 border-b border-grey-light">
              <span class="mr-2">ASDF234567812345678LJK868</span>
              <button class="border px-3 py-1 rounded bg-grey-lighter text-sm">copy</button>
            </td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2019</td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2018</td>
            <td class="py-4 px-6 border-b border-grey-light">Active</td>
          </tr>

          <tr class="hover:bg-blue-lightest font-mono text-sm tracking-wide">
            <td class="py-4 px-6 border-b border-grey-light">user@email.com</td>
            <td class="py-4 px-6 border-b border-grey-light">Remote Desktop</td>
            <td class="py-4 px-6 border-b border-grey-light">
              <span class="mr-2">ASDF234567812345678LJK868</span>
              <button class="border px-3 py-1 rounded bg-grey-lighter text-sm">copy</button>
            </td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2019</td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2018</td>
            <td class="py-4 px-6 border-b border-grey-light">Active</td>
          </tr>

          <tr class="hover:bg-blue-lightest font-mono text-sm tracking-wide">
            <td class="py-4 px-6 border-b border-grey-light">user@email.com</td>
            <td class="py-4 px-6 border-b border-grey-light">Remote Desktop</td>
            <td class="py-4 px-6 border-b border-grey-light">
              <span class="mr-2">ASDF234567812345678LJK868</span>
              <button class="border px-3 py-1 rounded bg-grey-lighter text-sm">copy</button>
            </td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2019</td>
            <td class="py-4 px-6 border-b border-grey-light">12-Aug-2018</td>
            <td class="py-4 px-6 border-b border-grey-light">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  </content-wrapper>
</template>

<script>
import ContentWrapper from '@/components/layout/ContentWrapper.vue'

export default {
  components: { ContentWrapper }  
}
</script>
