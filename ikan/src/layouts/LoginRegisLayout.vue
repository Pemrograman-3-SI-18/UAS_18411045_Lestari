<template>
<q-layout view="hHr LpR lFf">
  <q-header class="bg-blue-2" text-dark>
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="left=left"/>
      <q-toolbar-title class="absolute-center">
        <div class="text-black">
          <div class="text-weight-bold">
            <marquee direction="right" scollamount="5" align="center">Welcom to Bubu Fish</marquee>
          </div>
        </div>
      </q-toolbar-title>
  <q-footer>
  </q-footer>
    </q-toolbar>
  </q-header>
  <q-page-container>
    <router-view></router-view>
  </q-page-container>
</q-layout>
</template>

<script>
export default {
  name: 'LoginRegisLayout'
}
</script>

<style scoped>

</style>
