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
          <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
      </span>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'namaikan', align: 'center', label: 'Nama Ikan', field: 'namaikan', sortable: true },
        { name: 'jenisikan', label: 'Jenis Ikan', align: 'center', field: 'jenisikan' },
        { name: 'hargaikan', label: 'Harga Ikan', align: 'center', field: 'hargaikan' },
        { name: 'jumlahbeli', label: 'Jumlah Beli', align: 'center', field: 'jumlahbeli' },
        { name: 'total', label: 'Total', align: 'center', field: 'total' }
      ],
      data: [
        {
          id: 1,
          kodetransaksi: 'Trs0001',
          namapembeli: 'Nam Jo Hyuk',
          namaikan: 'Ikan Mas Koki',
          jenisikan: 'Oranda',
          hargaikan: '25000',
          jumlahbeli: '4',
          total: '100000'
        },
        {
          id: 2,
          kodetransaksi: 'Trs0002',
          namapembeli: 'Ji Chang Wook',
          namaikan: 'Ikan Mas Koki',
          jenisikan: 'Komet',
          hargaikan: '30000',
          jumlahbeli: '10',
          total: '300000'
        },
        {
          id: 3,
          kodetransaksi: 'Trs0003',
          namapembeli: 'Hyun Bin',
          namaikan: 'Ikan Mas KOki',
          jenisikan: 'Lionhead',
          hargaikan: '35000',
          jumlahbeli: '7',
          total: '245000'
        },
        {
          id: 4,
          kodetransaksi: 'Trs0004',
          namapembeli: 'Jiso',
          namaikan: 'Ikan Mas KOki',
          jenisikan: 'Ranchu',
          hargaikan: '50000',
          jumlahbeli: '7',
          total: '350000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
