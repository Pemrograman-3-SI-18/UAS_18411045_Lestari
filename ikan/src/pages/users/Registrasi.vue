<template>
  <q-layout class="bg-blue-2" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-blue-1 text-black">
              <div class="row">
                <q-card-section class="text-blue-grey-14">
                  <div class="text-H4">Registrasi</div>
                </q-card-section>
               <div class="col-md-12 col-xs-12 q-pt-md">

                  <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                  >
                    <q-input
                      filled
                      v-model="form.Username"
                      label="Username"
                      hint="Username"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                    />

                    <q-input
                      filled
                      v-model="form.NamaLengkap"
                      label="Nama Lengkap"
                      hint="Nama Lengkap"
                      lazy-rules
                      :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                    />

                    <q-input
                      filled
                      v-model="form.email"
                      label="Email"
                      hint="Email"
                      lazy-rules
                      :rules="[val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                    />

                    <q-input
                      filled
                      v-model="form.notelp"
                      label="No Telp"
                      hint="No Telp"
                      lazy-rules
                      :rules="[val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                    />

                    <q-input
                      filled
                      type="Password"
                      v-model="form.Password"
                      label="Password"
                      hint="Password"
                      lazy-rules
                      :rules="[val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                    />

                    <div>
                      <q-btn label="Registrasi" type="submit" color="primary"/>
                      <q-btn label="Login" to="/auth/Login" color="primary" flat class="q-ml-sm" />
                    </div>
                  </q-form>

                </div>
                <div c>

                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      form: {
        Username: null,
        NamaLengkap: null,
        email: null,
        notelp: null,
        Password: null
      },

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        userName: this.form.Username,
        namaLengkap: this.form.NamaLengkap,
        email: this.form.email,
        noTelp: this.form.notelp,
        role: '2',
        password: this.form.Password
      })
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
            this.$router.push('Login')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
