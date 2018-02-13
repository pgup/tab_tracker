
<template>
 
<v-layout column>
  <v-flex xs6 offset-xs3>
    <panel title="Login">
   <!--  <form
      name="tab-tracker-form"
      autocomplete="off"> -->
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
     <!-- <div class = "error" v-html= "error" /> danger alert is globall css style-->
      <div class = "danger-alert" v-html= "error" />
       <v-btn class = "cyan"
         @click="login" dark > 
         Register
         </v-btn>
    <!-- </form> -->
    </panel>
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
    async login () {
       try{
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
        name: 'songs'
      })
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
/* .error {
 color: red
} */

</style>



