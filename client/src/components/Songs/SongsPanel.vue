
<template>
 
     <panel title = "Songs">
        <!--  <router-link
          slot="action"
          :to="{name: 'songs-create'}"> -->
            
              <v-btn 
              slot="action" 
              to="/songs/create" 
              class="cyan accent-2" 
              light medium absolute right middle fab>
                    <v-icon>add</v-icon>
              </v-btn>
         <!-- </router-link> -->


         <div v-for="song in songs"
              class="song"   
             :key="song.id">

             <v-layout>
                 <v-flex xs6>
                     <div class="song-title">
                         {{song.title}}
                     </div> 
                     <div class="song-title">
                         {{song.artist}}
                     </div> 
                     <div class="song-genra">
                         {{song.genre}}
                     </div> 

                     <v-btn dark class = "cyan"
                         @click="navigateTo({
                             name: 'song', 
                             params: {
                                 songId: song.id
                                 }
                            })" > 
                         view
                     </v-btn>  

                </v-flex>

                 <v-flex xs6>
                     <img class="album-image" :src="song.albumImageUrl"/>
                </v-flex>
             </v-layout>
             
         </div>
     </panel>    

</template>

<script>

import SongsService from '@/services/SongsService'

export default {
   
   data () {
       return {
           songs: null
       }
   },
   async mounted () {
       this.songs = (await SongsService.index()).data
   },
   methods: {
       navigateTo (route) {
           this.$router.push(route)
       }
   },
   watch: {
       '$route.query.search': {
            immediate: true,
          async handler (value) {
               this.songs = (await SongsService.index(value)).data
           }
       }
   }

}
</script>

<style scoped>
.song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title{
    font-size: 30px;
}
.song-artist{
    font-size: 24px;
}
.song-genre{
    font-size: 18px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>



