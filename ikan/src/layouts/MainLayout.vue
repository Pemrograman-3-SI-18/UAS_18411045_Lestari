<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-blue-2 text-blue-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="absolute-center">
          <div class="text-dark">
            <div class="text-weight-bold">
              <marquee direction="right" scrollamount="3" align="center">
                <q-avatar size="50px">
                  <img placeholder-src="statics/bubu.png" src="statics/bubu.png">
                </q-avatar>
                "Welcome to Bubu Fish"
                <q-avatar size="50px">
                  <img placeholder-src="statics/bubu.png" src="statics/bubu.png">
                </q-avatar>
              </marquee>
            </div>
          </div>
        </q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">User</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">Admin</div>
                  <div>Lestari</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <q-img spinner-color="white" placeholder-src="statics/bubu.png" src="statics/bubu.png"></q-img>
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="teal"
                  label="Keluar"
                  unelevated
                  size="sm"
                  @click="keluar"
                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-blue-2 text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-blue-5 text-bold">
            <q-item-section>
              Aplikasi Penjualan Ikan Mas Koki
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="300px" class="q-mb-md">
                <q-img spinner-color="white" placeholder-src="statics/bubu.png" src="statics/bubu.png"></q-img>
              </q-avatar>
              <div class="text-weight-bold">Admin</div>
              <div>Lestari</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-dark"
          >
            Koleksi Ikan
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="visibility" />
            </q-item-section>
            <q-item-section>
              Data Ikan
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/admin/inputdataikan">
            <q-item-section avatar>
              <q-icon name="input" />
            </q-item-section>
            <q-item-section>
              Input Data Ikan
            </q-item-section>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Transaksi
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/admin/datatransaksi">
            <q-item-section avatar>
              <q-icon name="attach_money" />
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/admin/datapelanggan">
            <q-item-section avatar>
              <q-icon name="assignment_ind" />
            </q-item-section>
            <q-item-section>
              Data Pelanggan
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('/auth/Login')
    }
  }
}
</script>
