<template>
  <b-nav-item-dropdown 
    id="login-form"
    :text="userInfo.name ? userInfo.name : 'Login'"
    ref="loginDropdown"
    right
  >
    <div v-if="userInfo.name !== ''">
      <b-dropdown-form class="signout">
        <b-dropdown-item-button>
          Sign Out {{userInfo.name}}
        </b-dropdown-item-button>
      </b-dropdown-form>
    </div>

    <div v-else>
      <b-dropdown-form class="login-menu">
        <FormInput v-if="showSignUpForm" name="Name" placeholder="Jane Doe" />
        <FormInput name="Email" placeholder="email@example.com" />
        <FormInput name="Password" placeholder="Password" />

        <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
        <b-button variant="primary" size="sm" @click="toggleForm">
          {{showSignUpForm ? 'Sign Up' : ' Sign In'}}
        </b-button>
      </b-dropdown-form>
      <b-dropdown-divider></b-dropdown-divider>

      <b-dropdown-item-button @click="showSignUp">
        {{showSignUpForm ? 'Already a member? Login' : 'New Around here? Sign Up'}}
      </b-dropdown-item-button>
      <b-dropdown-item-button v-if="!showSignUpForm">Forgot Password?</b-dropdown-item-button>
    </div>
  </b-nav-item-dropdown>

</template>

<script>
import FormInput from '../components/FormInput.vue'

export default {
  name: 'Login',
  components: {
    FormInput
  },
  props: ['userInfo'],
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