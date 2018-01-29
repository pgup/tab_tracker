
<template>
 
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
      <v-text-field
           label="email"
           
           v-model="email"
      ></v-text-field>  
      <!-- <input 
        type="email"
        name="name"
        v-model="email"
        placeholder="email"/> -->
     <br>
     <v-text-field
            label="password"
            type="password"
            v-model="password"
      ></v-text-field> 
     <!-- <input 
       type="password"
       name="password"
       v-model="password"
       placeholder="password"/> -->
     <br>
     <div class = "error" v-html= "error" />
       <v-btn class = "cyan"
         @click="register" dark > 
         Register
         </v-btn>
      </div>
    </div>
  </v-flex>
</v-layout> 
<!-- <div>
  <h1>Register</h1>
  
</div> -->
  
</template>

<script>

//import AuthenticationService from 'services/AuthenticationService.js'
import AuthenticationService from '@/services/AuthenticationService'
export default {
   data () {
    return {
      email:'',
      password:'',
      error: null
    }
  },
    methods:{
    async register(){
      try{
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  } 
/*
  watch: {
    email(value){
      console.log('email has changed',value)
    }
  }, 
*/
  /* mounted(){
    setTimeout() => {
      this.email = 'hello world'
    }2000)
  } */
}
</script>
<style scoped>
.error {
 color: red
}

</style>



