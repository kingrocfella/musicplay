<template>
    <div class="register">
        <h2>REGISTER</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
            <div class="error" v-html="error"></div>
            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>
            <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            ></v-text-field>
            <v-btn
            :disabled="!valid"
            @click="register"
            >
            submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-form>
    </div>
</template>

<script>
import auth from '../../services/auth'
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
                    await auth.register({
                        "email": this.email,
                        "password": this.password
                    })
                } catch (error) {
                    this.error = error.response.data.error
                }
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>


<style>
    .error{
        color: red;
    }
    .register{
        max-width: 30%;
        margin: 10% auto;
    }
</style>


