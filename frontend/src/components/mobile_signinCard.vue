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
        let user = this.new_user,formdata=new FormData();
        Object.keys(user).forEach((key) => {
          formdata.append(key, user[key]);
        });
        axios.post('http://1.117.107.95:8000/login/',formdata)
          .then(response => {
            console.log(response);
            console.log(response.status);
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
  width:100%;
  height:100%;
  position:absolute;
}

#logo
{
    width: 80%;
    height:20%;
    position: absolute;
    left:10%;
    
}

.v-btn 
{
    color:#ffffff;
    width: 70%;
    height:5%;
    left:15%;
}


#wechat
{
    background-color:#00AD22;
    position: absolute;
    top:25%;
}

#facebook
{
    background-color:#476AF0;
    position: absolute;
    top:35%;
}

#form
{
  width:60%;
  position: absolute;
  left:20%;
  top:50%;
}

#signin
{
  position: absolute;
  background-color:#1443BD;
  top:85%;
}

#hint
{
  position: absolute;
  width: 247px;
  height: 20px;
  left: calc(50% - 247px/2 + 0.5px);
  bottom: 5%;

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