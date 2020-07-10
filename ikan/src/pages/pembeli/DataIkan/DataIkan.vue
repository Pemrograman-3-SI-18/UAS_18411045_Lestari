<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md"  v-for="(ikan, i) in data" :key="i">
          <q-card flat class="bg-blue-2 text-blue-gray-14">
            <q-card-section>
              <div class="text-h6">
                {{ ikan.namaikan }}
              </div>
            </q-card-section>
            <q-card-section class="row items-center justify-center">
              <q-img spinner-color="white" style="height: 250px; max-width: 150%" :src="baseUrl + ikan.gambar"/>
            </q-card-section>
            <q-card-section>
              <div>
                Rp. {{ ikan.hargaikan }}
              </div>
            </q-card-section>
            <q-card-section>
              <div>
                <q-btn rounded flat icon="delete" label="Hapus Ikan" unelevated no-caps color="negative"></q-btn>
              </div>
              <q-btn unelevated color="teal" icon="add_shopping_card" no-caps label="Tambah Ke Keranjang" to="/pembeli/datakeranjang"></q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataIkan',
  data () {
    return {
      data: [],
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getdataikan () {
      this.$axios.get('/ikan/dataikan')
        .then((res) => {
          this.data = res.data.data
          console.log(res)
        })
    }
  },
  mounted () {
    this.getdataikan()
  }
}
</script>

<style scoped>

</style>
