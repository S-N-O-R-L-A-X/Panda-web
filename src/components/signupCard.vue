<template>
<div>
  <!-- <v-snackbar>
    {{alertContent}}
    <template>
      <v-btn @click="wrongAlert=false"></v-btn>
    </template>
  </v-snackbar> -->
  <ErrorAlert :wrong-alert="wrongAlert" :content="alertContent" />
  <v-card id="card">
    <v-img src="../pics/LOGO.png" id="logo"></v-img>
    <v-card-title id="v-card-title">welcome</v-card-title>

    <v-form id="form">
      
      <v-row>
        <v-text-field
          v-model="username"
          :rules="nameRules"
          :counter="10"
          label="Username"
          required
          outlined
        ></v-text-field>
      </v-row>
      <v-row>
        
        <v-text-field
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          :rules="passwordRules"
          v-model="password"
          hint="At least 8 characters"
          label="Password"
          required
          outlined
        ></v-text-field>
      </v-row>
      <v-row>

        <v-text-field
          type="password"
          v-model="repeatedPassword"
          :rules="repeatedPasswordRules"
          label="RepeatedPassword"
          required
          outlined
        ></v-text-field>
      </v-row>

      <v-row>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Emailaddress"
          required
          outlined
        ></v-text-field>
      </v-row>
      <!-- <v-row>
        <v-select
          v-model="select"
          :items="identities"
          :rules="[(v) => !!v || 'Identity is required']"
          label="Identity"
          required
        ></v-select>
      </v-row> -->
      
    </v-form>

    <v-btn id="signup" @click="createUser()">Join Us →</v-btn>
    <v-row id="hint"
      >Already a member?
      <router-link to="/signin">Sign in.</router-link>
    </v-row>
  </v-card>
  <VerifyCode :show-code="showCode" :user="user" @closeVerify="closeVerify()" />
  
</div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue"
import VerifyCode from "./VerifyCode.vue"
import axios from "axios";
export default {
  components:{ErrorAlert,VerifyCode},
  data() {
    return {
      username: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      password: "",
      showPassword: false,
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          v.length >= 8 ||
          "Password must be more than 8 characters and less than 20 characters",
      ],
      repeatedPassword: "",
      repeatedPasswordRules: [
        (v) => !!v || "Repeated password is required for safety",
        (v) =>
          v.length >= 8 ||
          "Password must be more than 8 characters and less than 20 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      checkbox: true,
      select: null,
      identities: ["Teacher", "Student"],
      overlay:false,
      wrongAlert:false,
      alertContent:"",
      showCode:false,
      user:null,
    };
  },
  methods: {
    createUser() {
      if(this.repeatedPassword!==this.password) {
        this.alertContent="两次输入密码不一致！"
        this.wrongAlert=true;
        return ;
      }

      this.user={
        "email": this.email, 
        "password": this.password,
        "repeat_password": this.repeatedPassword,
        "username": this.username
      };

      axios.post("http://panda.rainspace.cn:8001/auth/verify", this.user)
      .then((res) => {
        this.showCode=true;
      })
      .catch((error) => {
        this.alertContent="注册失败！"+error;
        this.wrongAlert=true;
        return ;
      })  
    },

    closeVerify(){
      this.showCode=false;
    }
  },
};
</script>

<style>

#card {
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}

#v-card-title {
  /* width:74px; */
  height: 2.4%;
  position: absolute;
  top: 10%;
  left: 45%;

  font-size: 16px;
}

#logo {
  width: 18%;
  height: 6%;
  position: absolute;
  left: 344px;
  top: 5%;
}

#form {
  width: 44.6%;
  position: absolute;
  left: 232px;
  top: 20%;
}

#signup {
  width: 375px;
  height: 50px;
  /* position: absolute; */
  background-color: #1443bd;
  color: #ffffff;
  top: 65%;
  left: 232px;
}

#hint {
  position: absolute;
  width: 247px;
  height: 20px;
  left: 350px;
  top: 80%;

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