<template>
  <b-nav-item-dropdown
    id="login-form"
    :text="showSignUpForm ? 'Signup' : 'Login'"
    ref="loginDropdown"
    right
  >
    <b-dropdown-form class="login-menu">
        <FormInput v-if="showSignUpForm" name="Name" placeholder="Jane Doe" :errorMsg="this.errorMsg.name" @resetError="resetError" @change="handleChange" :value="this.userData.name"/>
        <FormInput name="Email" placeholder="email@example.com" :errorMsg="this.errorMsg.email" @resetError="resetError" @change="handleChange" :value="this.userData.email"/>
        <FormInput name="Password" placeholder="Password" :errorMsg="this.errorMsg.password" @resetError="resetError" @change="handleChange" :value="this.userData.password"/>
        
        <span v-if="errorMsg.user" class="error-message">{{errorMsg.user}}</span>
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
      errorMsg: {
        name: '',
        email: '',
        password: '',
        user: ''
      },
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
      }).catch(({ response }) => {
        const field = ['Name', 'Email', 'Password', 'User'].filter(word => (
          response.data.message.includes(word)
        )).pop().toLowerCase()
        this.errorMsg[field] = response.data.message
      })
    },
    resetError(field) {
      this.errorMsg[field] = ''
      this.errorMsg.user = ''
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
.error-message {
  position: relative;
  top: -8px;
  left: 3px;
  color: red;
}
</style>