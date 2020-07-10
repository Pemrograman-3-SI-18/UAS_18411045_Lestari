<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data IKan</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Ikan"
            lazy-rules
            color="teal"
            v-model="form.kodeikan"
            :rules="[
           val => val !== null && val !== '' || 'Kode ikan dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Nama Ikan"
            lazy-rules
            color="teal"
            v-model="form.namaikan"
            :rules="[
           val => val !== null && val !== '' || 'Nama Ikan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Ikan"
            lazy-rules
            color="teal"
            v-model="form.jenisikan"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Ikan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Harga Ikan"
            lazy-rules
            color="teal"
            v-model="form.hargaikan"
            :rules="[
           val => val !== null && val !== '' || 'Harga Ikan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gangtiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gangtiGambar == true"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Ubah Data Ikan"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataIkan',
  data () {
    return {
      gangtiGambar: false,
      baseUrl: 'http://localhost:5050/gambar/',
      form: {
        kodeikan: null,
        namaikan: null,
        jenisikan: null,
        hargaikan: null
      },
      id: null,
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodeikan', this.form.kodeikan)
      formData.append('namaikan', this.form.namaikan)
      formData.append('jenisikan', this.form.jenisikan)
      formData.append('hargaikan', this.form.hargaikan)
      this.$axios.put('/ikan/ubah/' + this.id, formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    },
    getDataIkanById () {
      this.$axios.get('/ikan/dataikan/' + this.$route.params.id)
        .then((res) => {
          this.data = res.data.data
          console.log(this.data)
          this.form.kodeikan = this.data.kodeikan
          this.form.namaikan = this.data.namaikan
          this.form.jenisikan = this.data.jenisikan
          this.form.hargaikan = this.data.hargaikan
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataIkanById()
  }
}
</script>

<style scoped>

</style>
