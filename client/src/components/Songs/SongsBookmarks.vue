
<template>
<panel title="Bookmarks">
    <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
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
import BookmarksService from '@/services/BookmarksService'

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
               sortBy: 'createdAt', // change 3
               descending: true
           },
           bookmarks: [ // change 4
               /* {
                   title: 'hellow world ',
                   artist: 'Testing1'
               },
               {
                   title: 'hellow world2 ',
                   artist: 'Testing2'
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
        if (this.isUserLoggedIn) {
            this.bookmarks = (await BookmarksService.index({
                userId: this.user.id
            })).data
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


