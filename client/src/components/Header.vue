
<template>
  <v-toolbar fixed class="green" dark> <!-- cyan -->
   <v-toolbar-title class="mr-4">
       <span 
       class="Home"
       @click="navigateTo({name: 'root'})">
        TabTracker
       </span>
   </v-toolbar-title> 
   <v-toolbar-items>
      
       <v-btn 
       flat 
       dark
       @click="navigateTo({name: 'songs'})">
       Browser
       </v-btn>
   
   </v-toolbar-items>
   
   <v-spacer></v-spacer>
  <!--  <v-toolbar-items>
        <router-link to="register">
          <v-btn flat dark>
              Sign Up
          </v-btn>
       </router-link>    
   </v-toolbar-items> -->
        <v-toolbar-items>
            
            <v-btn 
            v-if="!$store.state.isUserLoggedIn"
            flat
            dark 
            router 
            to="login">
                Login
            </v-btn>
            
            <v-btn v-if="!$store.state.isUserLoggedIn"
            flat  
            dark 
            router to="register">
                Sign Up
            </v-btn>
            
            <v-btn v-if="$store.state.isUserLoggedIn"
            flat  
            dark 
            @click="logout">
                Log Out
            </v-btn>
        
        </v-toolbar-items>
  </v-toolbar>
</template>
 
<script>

export default {
    methods: {
        navigateTo (route) { 
            this.$router.push(route)
        },
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            this.$router.push({
              name: 'root'
            })
        }
    }
}
</script>
<style scoped>
.Home {
    cursor: pointer;
}
.Home:hover{
    color:blanchedalmond; 
}
</style>



