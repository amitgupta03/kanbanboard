<template>
  <v-container>
      <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <h1 justify="start">KANBAN BOARD</h1>

      
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card  :elevation="23">
          <v-toolbar
          class="mb-2"
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form  ref="form" lazy-validation>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Email ID"
                      id="email"
                      v-model="email"
                      type="email" :rules="emailRules"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password" :rules="passwordRules"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <br>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn @click="onLogin()" color="primary">Login</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card><br>
       <p>You don't have an account? you can <router-link to="/register">Register</router-link></p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import firebase from 'firebase'
import Vue from 'vue';

  export default Vue.extend({
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        emailRules: [
        (v: any) => !!v || 'E-mail is required',
        (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        passwordRules: [
        (v: any) => !!v || 'Password is required',
        (v: any) => /^.{6,}$/.test(v) || 'Password must have atleast 6 characters'
      ],
      }
  },
  methods:{
     onLogin() {
       if((this.$refs.form as Vue & { validate: () => boolean }).validate()){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace('home');
          },
          (err) => {
            alert(err.message)
          }
        )
       }
    }
  }
  } )
</script>