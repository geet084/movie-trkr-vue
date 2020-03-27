<template>
  <b-nav-item-dropdown
    id="login-form"
    :text="showSignUpForm ? 'Signup' : 'Login'"
    ref="loginDropdown"
    right
  >
    <b-dropdown-form class="login-menu">
        <FormInput v-if="showSignUpForm" name="Name" placeholder="Jane Doe" @inputChange="handleChange" :value="this.userData.name"/>
        <FormInput name="Email" placeholder="email@example.com" @inputChange="handleChange" :value="this.userData.email"/>
        <FormInput name="Password" placeholder="Password" @inputChange="handleChange" :value="this.userData.password"/>

        <b-form-checkbox class="mb-3" disabled>Remember me</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="submitForm">
          {{showSignUpForm ? 'Sign Up' : ' Sign In'}}
        </b-button>
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item-button @click="showSignUp">
        {{showSignUpForm ? 'Already a member? Login' : 'New Around here? Sign Up'}}
      </b-dropdown-item-button>
      <b-dropdown-item-button v-if="!showSignUpForm" disabled>Forgot Password?</b-dropdown-item-button>
  </b-nav-item-dropdown>
</template>

<script>
import FormInput from '../components/FormInput.vue'

export default {
  name: 'LoginSignup',
  props: ['userInfo'],
  components: {
    FormInput
  },
  data() {
    return {
      showSignUpForm: false,
      userData: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm() {
      let url = process.env.VUE_APP_DATABASE_URL
      if (this.showSignUpForm) url += '/api/users/new'
      else url += '/api/users/login'
      
      this.$http.post(url, this.userData).then(res => {
        this.$emit('userData', res.data)
        this.$refs.loginDropdown.hide(true)
        this.userData = {
          name: '',
          email: '',
          password: ''
        }
      }).catch(e => {
        console.error('Login unsuccessful', e);
      })
    },
    showSignUp() {
      this.showSignUpForm = !this.showSignUpForm
      this.$refs.loginDropdown.show(true)
    },
    handleChange(target) {
      this.userData[target.name] = target.value
    }
  }
}
</script>

<style scoped>
.dropdown-menu .login-menu {
  width: 245px;
}
</style>