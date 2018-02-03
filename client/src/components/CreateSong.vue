
<template>
<v-layout>
  <v-flex xs6>
      <panel title="Song Metadata">
          <v-text-field
            label="Title"
            v-model="song.title"
      ></v-text-field> 

      <v-text-field
            label="Artist"
            v-model="song.Artist"
      ></v-text-field> 

      <v-text-field
            label="Genre"
            v-model="song.Genre"
      ></v-text-field> 

      <v-text-field
            label="Album"
            v-model="song.Album"
      ></v-text-field> 

      <v-text-field
            label="Album Image Url"
            v-model="song.AlbumImageUrl"
      ></v-text-field> 

      <v-text-field
            label="Youtube Id"
            v-model="song.youtubeId"
      ></v-text-field>

      <v-text-field
            label="lyrics"
            v-model="song.lyrics"
      ></v-text-field>

      <v-text-field
            label="tab"
            v-model="song.tab"
      ></v-text-field>

      
      </panel>
      </v-flex>
      
      <v-flex xs8>
      <panel title="Song Structure">
        <v-text-field
            label="Lyrics"
            multi-line
            v-model="song.Lyrics"
      ></v-text-field>

      <v-text-field
            label="Tab"
            multi-line
            v-model="song.Tab"
      ></v-text-field>
        </panel>

        <v-btn class = "cyan"
         @click="create" > 
         Create Song
         </v-btn>

        </v-flex>
        
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
   data () {
       return {
        song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
           }
       }
   },
   components: {
       Panel
   },
   methods: {
       async create() {
           // call API
           try {
           await SongsService.post(this.song)
           }catch (err) {
               console.log(err)
           }
       }
   }
}
</script>

<style scoped>
</style>



