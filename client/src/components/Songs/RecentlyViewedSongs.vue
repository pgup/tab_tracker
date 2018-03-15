
<template>
<panel title="Recently Viewed Songs">
    <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="histories">
        <template slot="items" scope="props">
            <td class="text-xs-right">
                {{props.item.title}}
            </td>
            <td class="text-xs-right">
                {{props.item.artist}}
            </td>
        </template>
         </v-data-table>

</panel> 

</template>

<script>
import {mapState} from 'vuex'
import SongHistoryService from '@/services/SongHistoryService'

export default {
   data () {
       return {
           headers: [
               {
                   text: 'Title',
                   value: 'title'
               },
               {
                   text: 'Artist',
                   value: 'artist'
               }
           ],
           pagination: {
               sortBy: 'createdAt', //change 1
               descending: true
           },
           histories: //change 2
            [
                /* {
                   text: 'Title',
                   value: 'title'
               },
               {
                   text: 'Artist',
                   value: 'artist'
               } */
            ]

       }   
    },
    computed: {
       ...mapState([
           'isUserLoggedIn',
           'user'
       ])
   },
    async mounted () {
        if (this.isUserLoggedIn) {  //change 3
      this.histories = (await SongHistoryService.index()).data
    }
    }
   
}
</script>

<style scoped>

/*  computed: {
       ...mapState([
           'isUserLoggedIn',
           'user'
       ])
   },
    async mounted () {
        if (this.isUserLoggedIn) {
            this.bookmarks = (await BookmarksService.index({
                userId: this.user.id
            })).adata
        }
    } */
</style>


