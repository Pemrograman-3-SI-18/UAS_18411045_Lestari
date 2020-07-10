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
        <span class="text-blue-grey-14">Data Pelanggan</span>
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
          label: 'Id Pelanggan',
          align: 'left',
          field: row => row.idpelanggan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapelanggan', align: 'center', label: 'Nama Pelanggan', field: 'namapelanggan', sortable: true },
        { name: 'notelp', align: 'center', label: 'No Telpon', field: 'notelp', sortable: true },
        { name: 'alamat', label: 'Alamat', align: 'center', field: 'alamat' }
      ],
      data: [
        {
          id: 1,
          idpelanggan: 'I001',
          namapelanggan: 'Nam jo Hyuk',
          notelp: '083168338569',
          alamat: 'jl Mangnidan-gil Mangwon Mapo-gul Seoul korea'
        },
        {
          id: 2,
          idpelanggan: 'I002',
          namapelanggan: 'Ji Chang Wook',
          notelp: '085156742704',
          alamat: 'jl Songnidan-gil Seoul Korea'
        },
        {
          id: 3,
          idpelanggan: 'I003',
          namapelanggan: 'Hyun Bin',
          notelp: '085781131211',
          alamat: 'jl Haengnidan-gil Suwon Seoul Korea'
        },
        {
          id: 4,
          idpelanggan: 'I004',
          namapelanggan: 'jiso',
          notelp: '085781131211',
          alamat: 'jl Hwangnidan-gil Gyeongju korea'
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
