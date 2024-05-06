<template>
    <div class="background">
        <div class="centered">
            <h1 class="title">Subjective Reviews for<br>Macro Photography IQA!</h1>
            <el-input 
                placeholder="Please enter your user ID..." 
                v-model="userID" 
                clearable class="half-width Dinput">
            </el-input>
            <el-row>
                <el-button type="primary" round class="button" @click="userLogin"> Login </el-button>
           
                <el-button type="success" round class="button" @click="userCreate">New User</el-button>
            </el-row> 
      </div>
    </div>
</template>

<script>
//import axios from 'axios';
// import api!

  
export default {
    name: 'LoginPage',
    data() {
        return {
            userID: '',
            idFound: true,
            errorMessage: 'No user id found!'
        }
    },
    methods: {
        async userLogin() {  
            
            // temporally wirte this
            if(this.idFound) {
                // backend interface for userId
                /** const {data} = await apiLogin({
                userID :this.userID
                }) **/
                // give feedback from backend
                // If the user ID exists, navigate to the intro page
                this.$router.push({ name: 'IntroPage', params: { ID: this.userID } });
            } else {
                this.displayErrorMessage("No user found! You may want to create a new user!" );
            }
        },

        userCreate() {
            //const response = await axios.get(`/../backend/users/${this.userId}`);
            // if response ---> found ---> error message ---> else login as new user
            // temporally wirte this
            if(!this.idFound) {
                // backend interface for userId
                /** const {data} = await apiLogin({
                userID :this.userID
                }) **/
                // If the user ID exists, give error message
                this.$router.push({ name: 'IntroPage', params: { ID: this.userID } });
                // backend create a user and its corresponding directory
                // every user has a dir and it contains txt file in which
                // each line corresponds : "id of a image": rating1 rating2 ;
            } else {
                this.displayErrorMessage("A user found! Please login in directly!");
            }
        },

        displayErrorMessage(mess) {
            this.$notify.error({
            title: 'Error Message',
            message: mess,
            offset: 100
        });
        },
    }
}
</script>

<style>
.background {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-image: url('@/assets/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        backdrop-filter: blur(10px); 
        background-position: center;
}
.title {
    font-size: 4em;
    margin-bottom: 1em;
    text-align: center;
}

.input {
    margin-bottom: 1em;
}

.centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.el-button--primary {
    background: #143FAE;
    font-size: 2em;
    margin-top: 1em;
}

.el-button--success {
    background: #143FAE;
    font-size: 1.2em;
    margin-top: 1em;
}

.half-width {
    width: 50%;
}

.background::after {
    content: "";
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
        url('@/assets/background.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%; 
}
</style>
    