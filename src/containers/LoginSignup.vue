<template>
  <b-nav-item-dropdown
    id="login-form"
    :text="showSignUpForm ? 'Signup' : 'Login'"
    ref="loginDropdown"
    right
  >
    <b-dropdown-form class="login-menu">
        <FormInput v-if="showSignUpForm" name="Name" placeholder="Jane Doe" />
        <FormInput name="Email" placeholder="email@example.com" />
        <FormInput name="Password" placeholder="Password" />

        <b-form-checkbox class="mb-3" disabled>Remember me</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="toggleForm">
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
      showSignUpForm: false
    }
  },
  methods: {
    toggleForm() {
      this.$refs.loginDropdown.hide(true)
    },
    showSignUp() {
      this.showSignUpForm = !this.showSignUpForm
      this.$refs.loginDropdown.show(true)
    }
  }
}
</script>

<style scoped>
.dropdown-menu .login-menu {
  width: 245px;
}
</style>