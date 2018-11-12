<template>
  <div class="bg-white border-b">
    <div class="container mx-auto flex justify-between">
      <div class="flex pt-5 ">
        <router-link to="/about" class="no-underline flex items-center mr-8 text-blue border-b-2 border-blue pb-5">
          <svg class="fill-current text-blue-dark w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
          <div><a class="no-underline text-blue-dark ml-2" href="/about">Dashboard</a></div>
        </router-link>

        <router-link to="/about" class="no-underline flex items-center mr-8  border-b-2 border-transparent hover:border-blue pb-5">
          <svg class="fill-current text-grey-dark w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
          <div><a class="no-underline text-grey-dark ml-2" href="/about">Licenses</a></div>
        </router-link>

        <router-link to="/about" class="no-underline flex items-center mr-8  border-b-2 border-transparent hover:border-blue pb-5">
          <svg class="fill-current text-grey-dark pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
          <div><a class="no-underline text-grey-dark ml-2" href="/about">Settings</a></div>
        </router-link>
      </div>

      <div class="pt-3">
        <button class="px-5 py-3 text-sm bg-green hover:bg-green-light border text-white rounded border-dashed">Register License</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>

<style>

</style>
