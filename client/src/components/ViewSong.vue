
<template>
<v-layout>
    <panel title = "Songs">
        <div>
        {{song.title}}
         {{song.artist}}
          {{song.genre}}
        </div>
    </panel> 
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
   data () {
     return {
         song: {} 
     }  
   }, 
   async mounted () {
       const songId = this.$store.state.route.params.songId
       this.song = (await SongsService.show(songId)).data
   }
}
</script>

<style scoped>
</style>



