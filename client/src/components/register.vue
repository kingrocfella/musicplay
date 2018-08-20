<template>
    <v-layout column>
        <v-flex xs6>
            <panel title="REGISTER">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <div class="error" v-html="error"></div>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" autocomplete="false" required></v-text-field>
                    <v-text-field v-model="password" label="Password" type="password" autocomplete="new-password" required></v-text-field>
                    <v-btn :disabled="!valid" @click="register">sign up</v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
import auth from '../../services/auth'
import Panel from '@/components/Panel'
export default {
    data(){
        return{
            email: '',
            password: '',
            error: '',
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }
    },
    methods: {
        async register(){
            if (this.$refs.form.validate()) {
                try {
                    const response = await auth.register({
                        "email": this.email,
                        "password": this.password
                    })
                    this.$store.dispatch('setToken',response.data.token)
                    this.$store.dispatch('setUser',response.data.user)
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    },
    components:{
        Panel
    }
}
</script>


<style>
    .error{
        color: red;
    }
</style>


