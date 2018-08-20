<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-toolbar>
                <v-toolbar-title>
                    <span @click="navigateTo('/')" class="home">Tab Tracker</span> 
                </v-toolbar-title>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat @click="navigateTo('/songs')">
                        Browse
                    </v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat @click="navigateTo('/login')" v-if="!$store.state.isUserLoggedIn">
                    Login
                </v-btn> 
                <v-btn flat @click="navigateTo('/register')" v-if="!$store.state.isUserLoggedIn">
                    Sign Up
                </v-btn> 
                <v-btn flat @click="LogOut('/')" v-if="$store.state.isUserLoggedIn">
                    Log Out
                </v-btn> 
                <!-- <v-btn flat>Link Two</v-btn>
                <v-btn flat>Link Three</v-btn> -->
                </v-toolbar-items>
            </v-toolbar>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    methods: {
        navigateTo(route){
            this.$router.push(route);
        },
        LogOut(route){
            this.$store.dispatch('setToken',null)
            this.$store.dispatch('setUser',null)
            this.$router.push(route)
        }
    }
}
</script>

<style>
   .home{
       cursor: pointer;
   }
</style>


