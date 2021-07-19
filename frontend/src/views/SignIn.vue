<template>
<div>
  <div>
    <v-img src="../pics/sign in1.jpg" height="100%" width="100%"></v-img>
  </div>
  <!-- <v-img src="../pics/sign in1.jpg"></v-img> -->
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
      
      <v-btn id="signin">Sign In →</v-btn>
      <v-row id="hint">Not a member? <router-link to="/signup">Create an account</router-link></v-row>


  </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      password: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: true,
     
    }),
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