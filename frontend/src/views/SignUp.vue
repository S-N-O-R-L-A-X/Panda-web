<template>
<div>
  <div>
    <v-img src="../pics/sign in1.jpg" height="100%" width="100%"></v-img>
  </div>
  <!-- <v-img src="../pics/sign in1.jpg"></v-img> -->
  <v-card elevation="5" id="card">
      <v-img src="../pics/LOGO.png" id="logo"></v-img>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
      welcome
      <v-container>
        <v-row><v-btn block id="wechat"><v-icon>mdi-wechat </v-icon>Sign in with WeChat</v-btn></v-row>
        <v-row><v-btn block id="facebook"><v-icon>mdi-facebook</v-icon>Sign in with Facebook</v-btn></v-row>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-divider></v-divider> 
        <br>
        <v-form>
            <v-row><v-text-field v-model="email" :rules="emailRules"
            label="Emailaddress" required outlined></v-text-field></v-row>
            <v-row>
                <v-text-field v-model="password" :rules="nameRules" :counter="10" 
                label="Password" required outlined></v-text-field>
            </v-row>
            <v-row>
                <v-text-field v-model="username" :rules="nameRules" :counter="10" 
                label="Username" required outlined></v-text-field>
            </v-row>
            <v-row>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" 
                label="Password" required outlined></v-text-field>
            </v-row>
            
            <v-row><v-btn>Join us →</v-btn></v-row>
        </v-form>
        <v-divider></v-divider>
        <v-row>Not a member? <router-link to="/signup">Create an account</router-link></v-row>
      </v-container>
      
  </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      firstname: '',
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
    }),
}
</script>

<style scoped>
#card
{

  position:absolute;
  left:601px;

}

#logo
{
    width: 151px;
    height:63px;
}

.v-btn 
{
    color:#ffffff;
}

#wechat
{
    background-color:#00AD22;
    
}

#facebook
{
    background-color:#476AF0
}
</style>