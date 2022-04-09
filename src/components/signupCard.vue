<template>
<div>
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
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
          outlined
        ></v-text-field>
      </v-row>
      <v-row>
        <v-text-field
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
  <v-alert border="right" colored-border
      dismissible type="error"  elevation="2" :value="wrongAlert">{{alertContent}}</v-alert>
  <v-overlay :value="overlay">
    请在下方输入验证码
  </v-overlay>
</div>
</template>

<script>
import axios from "axios";
import {sendCode} from "@/api/register.js";
export default {
  data() {
    return {
      username: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      password: "",
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
    };
  },
  methods: {
    createUser() {
      if(this.repeatedPassword!==this.password) {
        this.alertContent="两次输入密码不一致！"
        return ;
      }
      const user={email: this.email, password: this.password,repeat_password: this.repeatedPassword,username: this.username};
      sendCode("register1",user)
      .then((res) => {
        console.log(res)
        this.snackbar_text = "成功创建用户";
        this.snackbar = true;
      })
      .catch((error) => {
        alert("新建用户失败：" + error.message);
      })
      
    },
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