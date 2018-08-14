<template>
    <div>
        <h1>Register here!!</h1>
        <input type="email" name="email" id="email" v-model="email"/>
        <br>
        <input type="password" name="password" id="password" v-model="password" />
        <br>
        <button type="submit" @click="register">Register</button>
    </div>
</template>
<script>
import auth from '../../services/auth'
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        async register(){
            await auth.register({
                "email": this.email,
                "password": this.password
            })
        }
    }
}
</script>


