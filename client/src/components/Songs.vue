
<template>
 <v-layout column>
  <v-flex xs6 offset-xs3>
     <panel title = "Songs">
        <!--  <router-link
          slot="action"
          :to="{name: 'songs-create'}"> -->
            
              <v-btn slot="action" to="/songs/create" class="cyan accent-2" light medium absolute right middle fab>
                    <v-icon>add</v-icon>
              </v-btn>
         <!-- </router-link> -->


         <div v-for="song in songs" 
             :key="song.id">

             <v-layout>
                 <v-flex xs6>
                     <div class="song-title">
                         {{song.title}}
                     </div> 
                     <div class="song-title">
                         {{song.artis}}
                     </div> 
                     <div class="song-genra">
                         {{song.genre}}
                     </div>    
                </v-flex>

                 <v-flex xs6>
                     <img class="album-image" :src="song.albumImageUrl"/>
                </v-flex>
             </v-layout>
             
         </div>
     </panel>    
  </v-flex>
</v-layout> 

</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
   components: {
       Panel 
   },
   data () {
       return {
           songs: null
       }
   },
   async mounted () {
       this.songs = (await SongsService.index()).data
   }

}
</script>

<style scoped>
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>



