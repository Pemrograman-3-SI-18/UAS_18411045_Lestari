<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        color="primary"
        card-class="bg-blue-2 text-dark"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="blue-5" :disable="loading" label="Tambah Data Ikan" to="/admin/inputdataikan"/>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeikan" :props="props">
              {{ props.row.kodeikan }}
            </q-td>
            <q-td key="namaikan" :props="props">{{ props.row.namaikan }}</q-td>
            <q-td key="jenisikan" :props="props">{{ props.row.jenisikan }}</q-td>
            <q-td key="hargaikan" :props="props">{{ props.row.hargaikan }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeikan)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataIkan(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodeikan',
          required: true,
          label: 'Kode Ikan',
          align: 'left',
          field: row => row.kodeikan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaikan', align: 'center', label: 'Nama Ikan', field: 'namaikan', sortable: true },
        { name: 'jenisikan', align: 'center', label: 'Jenis Ikan', field: 'jenisikan', sortable: true },
        { name: 'hargaikan', label: 'Harga Ikan', align: 'center', field: 'hargaikan' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getdataikan () {
      this.$axios.get('/ikan/dataikan')
        .then((res) => {
          this.data = res.data.data
          console.log(res)
        })
    },
    hapusDataIkan (_id) {
      this.$axios.delete('/ikan/hapus/' + _id)
        .then((res) => {
          this.data = res.data.data
          this.getdataikan()
        })
    },
    edit (kodeikan) {
      this.$router.push('admin/editdataikan/' + kodeikan)
    }
  },
  mounted () {
    this.getdataikan()
  }
}
</script>
