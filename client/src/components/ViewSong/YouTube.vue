
<template>
 <panel title="Youtube Vidoe">
    <youtube 
     :video-id="youtubeId"
     :player-width="600"
     :player-height="330"
     ></youtube>
 </panel>
</template>

<script>
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
    props: [
        'youtubeId'
    ]
}
</script>

<style scoped>
</style>



