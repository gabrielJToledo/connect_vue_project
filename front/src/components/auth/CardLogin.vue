<template>
    <div class="cardLogin">
        <div class="loginContent">
            <div class="insideLoginContent">
                <div class="logo"><img src="@/assets/logo.png" style="width: 50px; hight: 50px" alt="logo"></div>
                <div class="loginText">
                    <h1>{{ showSignup ? 'Cadastro' : 'Login' }}</h1>
                    <h4>Venha ver o quanto você cresceu!</h4>
                </div>
                <button class="googleLogin">Signin With Google</button>
                <div class="divInMiddle">
                    <p class="otherAlternative" v-if="showSignup">---------- Registre-se! ----------</p>
                    <p class="otherAlternative" v-else>-------- Faça o login com o e-mail! --------</p>
                </div>
                <div class="emailLogin">
                    <p v-if="showSignup">Nome:</p>
                    <input v-if="showSignup" v-model="user.name" placeholder="Digite seu e-mail..." class="inputLogin">
                    <p>E-mail:</p>
                    <input type="text" v-model="user.email" placeholder="Digite seu e-mail..." class="inputLogin">
                    <p>Senha:</p>
                    <input type="password" v-model="user.password" placeholder="Digite sua senha..." class="inputLogin">
                    <input type="password" v-if="showSignup" v-model="user.confirmPassword" placeholder="Confirme a senha..." class="inputLogin">
                </div>
                <button v-if="showSignup" @click="signup" class="emailButtonLogin">Registrar</button>
                <button v-else @click="signin" class="emailButtonLogin">Login with E-mail!</button>
                <div class="divInMiddle">
                    <a href @click.prevent="showSignup = !showSignup">
                        <span v-if="showSignup">Já tem cadastro? Acesse o login!</span>
                        <span v-else>Não tem cadastro? Registre-se aqui</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="imgContent"><img src="@/assets/company.jpg" alt=""></div>
    </div>
</template>

<script>
import { baseApiUrl, userKey } from '@/global'
import axios from 'axios'

export default {
    name: 'CardLogin',
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            axios.post(`${baseApiUrl}/signin`, this.user).then(res => {
                this.$store.commit('setUser', res.data)
                localStorage.setItem(userKey, JSON.stringify(res.data))
                this.$router.push({path: '/'})
            }).catch((e) => this.$toast.error(e.response.data))
        },
        signup() {
            axios.post(`${baseApiUrl}/signup`, this.user).then(() => {
                return
            }).catch((e) => this.$toast.error(e.response.data))
        }
    }
}
</script>

<style>
    .cardLogin {
        width: 900px;
        height: 580px;
        border: solid 1px rgb(131, 131, 131);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    .loginContent {
        display: flex;
        width: 50%;
        height: 90%;
        background-color: white;
        border-top-left-radius: 14px;
        border-bottom-left-radius: 14px;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .insideLoginContent {
        width: 60%;
        height: 80%;
    }

    .imgContent {
        display: flex;
        width: 50%;
        height: 100%;
        border-left: solid 1px black;
    }

    .imgContent > img {
        width: 100%;
        border-top-right-radius: 14px;
        border-bottom-right-radius: 14px;
    }

    .googleLogin {
        width: 100%;
        height: 8%;
        border-radius: 25px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 29px 0px; 
        background-color: white;
        border: solid 1px rgb(170, 170, 170);
    }

    .googleLogin:active {
        background-color: #dadada;
        box-shadow: 0 1px #666;
        transform: translateY(0.5px);
    }

    .otherAlternative {
        color: rgb(175, 175, 175);
        margin: 10px 0px 0px 0px;
    }

    .emailLogin {
        width: 100%;
    }

    .inputLogin {
        width: 100%;
        border-radius: 25px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 29px 0px; 
        background-color: white;
        border: solid 1px rgb(214, 214, 214);
        height: 25px;
        outline: none;
    }

    div.emailLogin > p {
        margin: 5px;
    }

    .emailButtonLogin {
        width: 100%;
        height: 8%;
        border-radius: 25px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 2px 29px 0px; 
        background-color: white;
        border: solid 1px rgb(170, 170, 170);
        margin: 20px 0px 20px 0px;
        
    }

    .emailButtonLogin:active {
        background-color: #dadada;
        box-shadow: 0 1px #666;
        transform: translateY(0.5px);
    }

    .divInMiddle {
        display: flex;
        justify-content: center;
        margin: 0px;
    }
</style>