<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <panel title="Song Metadata">
                    <v-layout>
                        <v-flex xs6>
                            <div class="song-title">
                                {{song.title}}
                            </div>
                            <div class="song-album">
                                {{song.album}}
                            </div>
                            <div class="song-genre">
                                {{song.genre}}
                            </div>
                            <div class="youtubeID">
                                {{song.youtubeID}}
                            </div>
                            <div class="createdAt">
                                {{song.createdAt}}
                            </div>
                        </v-flex>
                        <v-flex xs6>
                            <div class="albumImageUrl">
                                <img :src="song.albumImageUrl" alt=""> <br>
                                {{song.title}}
                            </div>
                        </v-flex>
                    </v-layout>
                </panel>
            </v-flex>
            <v-flex xs6>
            <panel title="Youtube Video">
                <youtube
                    :video-id=song.youtubeID
                    :player-width="500"
                    :player-height="330">
                </youtube>
            </panel>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs6>
            <panel title="Tabs">
                <textarea v-model="song.tab" readonly="true"></textarea>
            </panel>
        </v-flex>
        <v-flex xs6>
            <panel title="Lyrics">
                <textarea v-model="song.lyrics" readonly="true"></textarea>
            </panel>
        </v-flex>
    </v-layout>   
    </div>
    
    
</template>

<script>
import songsApi from '../../services/songs'
import Panel from '@/components/Panel'
export default {
    data(){
        return {
            song: ''
        }
    },
    async mounted(){
        const songId = this.$store.state.route.params.songId;
        this.song = await songsApi.show(songId);
        this.song = this.song.data;
    },
    components: {
        Panel
    }
}
</script>

<style>
    .albumImageUrl{
        width: 100%;
    }
    .song-title{
        font-size: 24px;
    }
    .song-genre{
        font-size: 18px;
    }
    .song-album{
        font-size: 18px;
    }
    .song{
        padding: 20px;
        height: 300px;
        overflow: hidden;
    }
    textarea{
        width: 100%;
        border: none;
        border-style: none;
        border-color: transparent;
        overflow: auto;
        height: 300px;
        /* padding: 10px; */
    }
</style>
