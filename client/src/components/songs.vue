<template>
    <v-layout column>
        <v-flex xs6>
            <panel title="Songs">
                <v-btn slot="action" @click="navigateTo('/songs/create')" class="green" light medium absolute right middle>ADD</v-btn> 
                <div v-for="song in songs" :key="song.id" class="song">
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
                            <div class="createdAt">
                                {{song.createdAt}}
                            </div>
                            <v-btn @click="navigateTo({name: 'song', params: { songId: song.id}})">View Song</v-btn>
                        </v-flex>
                        <v-flex xs6>
                            <div class="albumImageUrl">
                                <img :src="song.albumImageUrl" alt="">
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import songsApi from '../../services/songs'
export default {
    components:{
        Panel
    },
    data(){
        return{
            songs: ''
        }
    },
    async mounted(){
        const response = await songsApi.index();
        this.songs = response.data
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
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
</style>
