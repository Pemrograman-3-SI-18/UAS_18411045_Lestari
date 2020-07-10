<template>
  <q-layout class="bg-blue-2" view="hHh Lpr lFf">
  <q-page-container>
    <q-page padding class="row items-center justify-center">
      <div class="row full-width">
        <div class="col-md-5 offset-md-4 col-xs-12 q-pl-md q-pr-md q-pt-sm">
          <q-card flat class="bg-white text-black">
            <div class="row">
              <div class="col-md-8 col-xs-6">
                <div class="row q-pt-md q-pb-md bg-white">
                  <div class="col-md-9 offset-3 col-xs-9">
                    <q-img spinner-color="blue-2" placeholder-src="statics/bubu.png" src="statics/bubu.png"></q-img>
                  </div>
                </div>
              </div>
              <div class="col-md-16 col-xs-12 q-pt-md">
                <div class="text-blue-grey-10 text-h4">Login</div>
                <q-card-section class="text-blue-grey-14">
                </q-card-section>

                <q-form
                  @submit="onSubmit"
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
                    type="Password"
                    v-model="form.Password"
                    label="Password"
                    hint="Password"
                    lazy-rules
                    :rules="[val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                  />

                  <div>
                    <q-btn label="Login" type="submit" color="primary"/>
                    <q-btn label="Registrasi" to="/auth/registrasi" color="primary" flat class="q-ml-sm" />
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
  name: 'Login',
  data () {
    return {
      form: {
        Username: null,
        Password: null
      },

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/Login', {
        userName: this.form.Username,
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
            if (res.data.data.role === 1) {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/')
            } else {
              this.$q.localStorage.set('datauser', res.data.data)
              this.$router.push('/pembeli')
            }
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
