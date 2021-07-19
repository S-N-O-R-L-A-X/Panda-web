<template>
<div>
  <div>
    <v-img src="../pics/sign in1.jpg" height="100%" width="100%"></v-img>
  </div>
  <!-- <v-img src="../pics/sign in1.jpg"></v-img> -->
  <v-card  id="card">
      <v-img src="../pics/LOGO.png" id="logo"></v-img>
      <v-card-title id="v-card-title">welcome</v-card-title>
      
      <v-form id="form">
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
            <v-select v-model="select" :items="identities" 
            :rules="[v =>!!v||'Itendentity is required']" label="Identity" required></v-select>
          </v-row>
          <v-card-title></v-card-title>
      </v-form>
      
      <v-btn id="signup">Join Us →</v-btn>
      <v-row id="hint">Already a member? <router-link to="/signin">Sign in.</router-link></v-row>


  </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      password: '',
      username:'',
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
      select: null,
      identities:["Teacher","Student"]
    }),
}
</script>

<style scoped>
#card
{
  width:839px;
  height:100%;
  position:absolute;
  right:0;
  top:0;
}

#v-card-title
{
  /* width:74px; */
  height:22px;
  position:absolute;
  top:186px;
  left:383px; 

  font-size:16px;
}

#logo
{
    width: 151px;
    height:63px;
    position: absolute;
    left:344px;
    top:101px;
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
  left:232px;
  top:281px;
}

#signup
{
  
  width: 375px;
  height:50px;
  position: absolute;
  background-color:#1443BD;
  color:#ffffff;
  top:620px;
  left:232px;
}

#hint
{
  position: absolute;
  width: 247px;
  height: 20px;
  left: 350px;
  top: 750px;

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