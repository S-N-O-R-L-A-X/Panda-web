<template>
<div>
  <v-snackbar class="text-center ma-2" top v-model="snackbar" :timeout="3000" color="success">{{snackbar_text}}
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
  
  <v-card  id="card">
    <div id="logoContainer">
      <v-img src="../../public/LOGO.png" ></v-img>
    </div> 
    
    
    <v-form id="form">
        <v-row><v-text-field v-model="email" :rules="emailRules"
        label="Emailaddress" required outlined></v-text-field></v-row>
        <v-row>
            <v-text-field v-model="password" :rules="passwordRules" 
            label="Password" required outlined></v-text-field>
        </v-row>
        
        <v-row>
              <v-text-field v-model="username" :rules="nameRules" :counter="10" 
              label="Username" required outlined></v-text-field>
        </v-row>

        <v-row>
          <v-select v-model="select" :items="identities" 
          :rules="[v =>!!v||'Identity is required']" label="Identity" required></v-select>
        </v-row>
        <v-card-title></v-card-title>
    </v-form>
    
    <v-btn id="signup" @click="createUser()">Join Us →</v-btn>
    <v-row id="hint">Already a member? <router-link to="/signin">Sign in.</router-link></v-row>


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
      
      username:'',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8  || 'Password must be more than 8 characters and less than 20 characters',
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
    methods:
    {
      createUser(){
        let user = this.new_user,formdata=new FormData();
        Object.keys(user).forEach((key) => {
          formdata.append(key, user[key]);
        });
        axios.post('http://1.117.107.95:8000/register/',formdata)
          .then(response => {
            console.log(response);
            console.log(response.status);
            if(response.status===200) {
              this.$emit('change', 'Created!');
              this.snackbar_text = "成功创建用户";
              this.snackbar = true;
            }
            else{
              throw new Error((response.message));
            }
          })
          .catch(error => {
            alert("新建用户失败：" + error.message);
          })
          .finally(e => {
            
          })
      }
    },
    computed: {
      new_user() {
        return {
          email:this.email,
          username:this.username,
          password: this.password,
          identity:this.select,
          repeat_password:this.password
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
  top:0;
  margin:0;
}


#logoContainer
{
    text-align:center;
    top:10%;
    height:20%;
    width:40%;
    margin:0 auto;
}

#logo
{
    text-align:center;
    width: 100%;
    height:100%;
}



#form
{
  width:44.6%;
  position: absolute;
  left:25%;
  top:35%;
}

#signup
{
  width: 30%;
  height:6.25%;
  position: absolute;
  background-color:#1443BD;
  color:#ffffff;
  top:75%;
  left:35%;
}

#hint
{
  position: absolute;
  
  height: 2.5%;
  left:35%;
  top: 93.75%;

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