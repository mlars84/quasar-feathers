<template>
  <div>SignIn</div>
</template>

<script>
import { Toast, Dialog } from 'quasar'
// import api from 'src/api'

export default {
  data () {
    return {
      mounted () {
        Dialog.create({
          title: this.isRegistration() ? 'Register' : 'Sign In',
          form: {
            email: {
              type: 'email',
              label: 'E-mail',
              model: ''
            },
            password: {
              type: 'password',
              label: 'Password',
              model: ''
            }
          },
          onDismiss: () => {
            this.$router.push({ name: 'home' })
          },
          buttons: [
            {
              label: 'Ok',
              handler: (data) => {
                if (this.isRegistration()) {
                  this.register(data.email, data.password)
                    .then(() => {
                      return this.login(data.email, data.password)
                    })
                    .then(_ => {
                      Toast.create.positive('You are now logged in')
                    })
                    .catch(_ => {
                      Toast.create.negative('Cannot register, please check your e-mail or password')
                      this.$router.push({ name: 'home' })
                    })
                }
                else {
                  this.login(data.email, data.password)
                    .then(_ => {
                      Toast.create.positive('You are now logged in')
                    })
                    .catch(_ => {
                      Toast.create.negative('Cannot sign in, please check your e-mail or password')
                      this.$router.push({ name: 'home' })
                    })
                }
              }
            }
          ]
        })
      }
    }
  }
}
</script>

<style>
</style>
