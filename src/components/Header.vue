<template>
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
      <v-btn @click.prevent="logout" >LOGOUT</v-btn>
    </v-app-bar>
</template>
<script>
import firebase from 'firebase'
export default {
      name: 'Header',

        methods:{
            logout(){
                firebase.auth().signOut()
                    .then(() =>{
                        this.$router.replace('login');
                     })
            },
        }
    
}
</script>