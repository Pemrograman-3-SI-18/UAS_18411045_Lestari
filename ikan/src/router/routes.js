
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/admin/home/DataIkan.vue') },
      { path: 'admin/inputdataikan', component: () => import('pages/admin/home/InputDataIkan.vue') },
      { path: 'admin/datatransaksi', component: () => import('pages/admin/transaksi/DataTransaksi.vue') },
      { path: 'admin/editdataikan/:id', component: () => import('pages/admin/home/EditDataIkan.vue') },
      { path: 'admin/datapelanggan', component: () => import('pages/pembeli/pelanggan/DataPelanggan.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      { path: 'dataikan', component: () => import('pages/pembeli/DataIkan/DataIkan.vue') },
      { path: 'transaksi', component: () => import('pages/pembeli/Transaksi/DataTransaksi.vue') },
      { path: 'rating', component: () => import('pages/pembeli/rating/rating.vue') },
      { path: 'datakeranjang', component: () => import('pages/pembeli/keranjang/DataKeranjang.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout'),
    children: [
      { path: 'auth/Login', component: () => import('pages/users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/users/Registrasi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
