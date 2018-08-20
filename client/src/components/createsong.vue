<template>
    <div>
        <panel title="Song Metadata">
            <v-form ref="form" v-model="valid" lazy-validation>
                <div class="error" v-html="error"></div>
                <v-text-field v-model="song.title" :rules="songRules" label="title" required></v-text-field>
                <v-text-field v-model="song.artist" :rules="songRules" label="artist" required></v-text-field>
                <v-text-field v-model="song.album" :rules="songRules" label="album" required></v-text-field>
                <v-text-field v-model="song.genre" :rules="songRules" label="genre" required></v-text-field>
                <v-text-field v-model="song.youtubeID" :rules="songRules" label="youtubeID" required></v-text-field>
                <v-text-field v-model="song.albumImageUrl" :rules="songRules" label="albumImageUrl" required></v-text-field>
                <v-text-field v-model="song.tab" multi-line :rules="songRules" label="tab" required></v-text-field>
                <v-text-field v-model="song.lyrics" multi-line :rules="songRules" label="lyrics" required></v-text-field>
                <v-btn :disabled="!valid" @click="createsong">CREATE SONG</v-btn>
                <v-btn @click="clear">clear</v-btn>
            </v-form>
        </panel>
    </div>
</template>

<script>
import Panel from '@/components/Panel'
import songsApi from '../../services/songs'
export default {
    components:{
        Panel
    },
    data(){
        return {
            song : {
            "title": "",
            "artist": "",
            "album": "",
            "genre": "",
            "youtubeID": "",
            "albumImageUrl": "",
            "lyrics": "",
            "tab": ""},
            valid: true,
            error: '',
            songRules: [
                v => !!v || 'This field is required'
            ]
        }
    },
    methods: {
        async createsong(){
            if (this.$refs.form.validate()){
                try {
                    await songsApi.post(this.song)
                    this.$router.push('/songs')
                } catch (error) {
                    this.error = response.data.error
                } 
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>
