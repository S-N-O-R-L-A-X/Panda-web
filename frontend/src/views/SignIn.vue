<template>

  <!-- <v-img src="../pics/sign in1.jpg"></v-img> -->
  <v-card elevation="5">
      <v-img src="../pics/LOGO.png" id="logo"></v-img>
      <v-container>
        <v-row><v-btn block id="wechat"><v-icon>mdi-wechat </v-icon>Sign in with WeChat</v-btn></v-row>
        <v-row><v-btn block id="facebook"><v-icon>mdi-facebook</v-icon>Sign in with Facebook</v-btn></v-row>
        <v-divider></v-divider>
        <br>
        ----------------or----------------
        <br>
        <br>
        <v-form>
            <v-row><v-text-field append-icon="mdi-email" v-model="email" :rules="emailRules"
            label="E-mail" required outlined></v-text-field></v-row>
            <v-row>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" 
                label="Password" required outlined></v-text-field>
            </v-row>
        </v-form>
      </v-container>
      
  </v-card>
      
</template>

<script>
export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
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