<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-blue-2 q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Ikan</span>
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
           val => val !== null && val !== '' || 'Kode Ikan Dibutuhkan'
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
              <q-icon name="panorama_fish_eye"/>
            </template>
          </q-input>
          <q-input
            label="Jenis Ikan"
            lazy-rules
            color="teal"
            v-model="form.jenisikan"
            :rules="[
           val => val !== null && val !== '' || 'Jenis ikan Dibutuhkan'
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
           val => val !== null && val !== '' || 'Harga ikan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name ="attach_money"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
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
              type="submit"
              label="Tambah Data Ikan"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodeikan: null,
        namaikan: null,
        jenisikan: null,
        hargaikan: null
      },
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
      this.$axios.post('/ikan/input', formData)
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
    }
  }
}
</script>

<style scoped>

</style>
