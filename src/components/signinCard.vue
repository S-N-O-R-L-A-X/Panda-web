<template>
<div>
  <v-snackbar class="text-center ma-2" top v-model="snackbar" :timeout="3000" color="success">{{snackbar_text}}
    <v-spacer></v-spacer>
    <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
  </v-snackbar>
  <v-card elevation="5" id="card">
      <v-img src="../pics/LOGO.png" id="logo"></v-img>
      <v-card-title></v-card-title>
      
      <v-btn id="wechat"><v-icon>mdi-wechat </v-icon>Sign in with WeChat</v-btn>
      <v-btn id="facebook"><v-icon>mdi-facebook</v-icon>Sign in with Facebook</v-btn>
      <v-card-title></v-card-title>
      <v-form id="form">
          <v-row><v-text-field append-icon="mdi-email" v-model="email" :rules="emailRules"
          label="E-mail" required outlined></v-text-field></v-row>
          <v-row><v-text-field  append-icon="mdi-eye-outline" v-model="password" :rules="nameRules" :counter="10" 
          label="Password" required outlined></v-text-field></v-row>
          <v-row><v-checkbox v-model="checkbox" :label="`Remember me`"></v-checkbox></v-row>
          <!-- <v-row><v-btn id="signin">Sign In →</v-btn></v-row> -->
          <v-card-title></v-card-title>
      </v-form>
      
      <v-btn id="signin" @click="login()">Sign In →</v-btn>
      <v-row id="hint">Not a member? <router-link to="/signup">Create an account</router-link></v-row>


  </v-card>
</div>
</template>

<script>
import axios from 'axios'
import {httpPost,httpGet} from '@/api/http.js'
export default {
  data: () => ({
      snackbar:false,
      snackbar_text:'',
      valid: false,
      password: '',
      nameRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8  || 'Password must be more than 8 characters and less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: true,
      
    }),
    methods:
    {
      login(){
        const user={email:this.email, password:this.password};
        
        console.log(user);
        httpGet('login',user).then(res => {
          
          alert("欢迎您！"+res)
          
        })
        .catch(err => {
          alert("登录失败!" + err.message);
        })
        /*
        axios.post('http://1.117.107.95:8000/login/',formdata)
          .then(response => {
            console.log(response);
            if(response.status===200) {
              this.$emit('change', 'Created!');
              this.snackbar_text = "登录成功";
              this.snackbar = true;
            }
            else{
              throw new Error((response.message));
            }
          })
          .catch(error => {
            alert("登录失败：" + error.message);
          })
          .finally(e => {
            
          })
          */
      }
    },
    computed: {
      new_user() {
        return {
          password: this.password,
          email:this.email,
        }
      }
    },
}
</script>

<style scoped>
#card
{
  width:522px;
  height:659px;
  position:absolute;
  left:642px;
  top:52px;
}

#logo
{
    width: 151px;
    height:63px;
    position: absolute;
    left:182px;
    top:59px;
}

.v-btn 
{
    color:#ffffff;
    width: 375px;
    height:50px;
    left:70px;
}


#wechat
{
    background-color:#00AD22;
    position: absolute;
    
    top:130px;
}

#facebook
{
    background-color:#476AF0;
    position: absolute;
    
    top:194px;
}

#form
{
  width:375px;
  position: absolute;
  left:70px;
  top:300px;
}

#signin
{
  position: absolute;
  background-color:#1443BD;
  top:520px;
}

#hint
{
  position: absolute;
  width: 247px;
  height: 20px;
  left: calc(50% - 247px/2 + 0.5px);
  bottom: 48px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: center;

  /* Black 60 */

  color: rgba(17, 17, 19, 0.6);

}
</style>