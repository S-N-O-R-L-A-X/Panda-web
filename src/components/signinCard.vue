<template>
  <div>
    <v-snackbar
      class="text-center ma-2"
      top
      v-model="snackbar"
      :timeout="3000"
      color="success"
      >{{ snackbar_text }}
      <v-spacer></v-spacer>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-card elevation="5" id="card">
      <v-img src="../pics/LOGO.png" id="logo"></v-img>
      <v-card-title></v-card-title>

      <v-btn id="wechat"><v-icon>mdi-wechat </v-icon>Sign in with WeChat</v-btn>
      <v-btn id="facebook"
        ><v-icon>mdi-facebook</v-icon>Sign in with Facebook</v-btn
      >
      <v-card-title></v-card-title>
      <v-form id="form">
        <v-row
          ><v-text-field
            append-icon="mdi-email"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            outlined
          ></v-text-field
        ></v-row>
        <v-row>
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            label="Password"
            required
            outlined
          ></v-text-field>
        </v-row>
        <v-row
          ><v-checkbox v-model="checkbox" :label="`Remember me`"></v-checkbox
        ></v-row>
        <!-- <v-row><v-btn id="signin">Sign In →</v-btn></v-row> -->
       
      </v-form>

      <v-btn id="signin" @click="login()">Sign In →</v-btn>
      <v-row id="hint">
        Not a member?
        <router-link to="/signup">Create an account</router-link>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { httpPost, httpGet } from "@/api/http.js";
export default {
  data: () => ({
    snackbar: false,
    snackbar_text: "",
    valid: false,
    password: "",
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    checkbox: true,
    showPassword: false,
  }),
  methods: {
    login() {
      const user = { email: this.email, password: this.password };

      console.log(user);
      httpGet("login", user)
        .then((res) => {
          this.snackbar=true;
          this.snackbar_text="登录成功！"
        })
        .catch((err) => {
          alert("登录失败!" + err.message);
        });
      
    },
  },
  computed: {
    new_user() {
      return {
        password: this.password,
        email: this.email,
      };
    },
  },
};
</script>

<style scoped>
#card {
  width: 522px;
  height: 659px;
  position: absolute;
  left: 642px;
  top: 52px;
}

#logo {
  width: 151px;
  height: 63px;
  position: absolute;
  left: 182px;
  top: 5%;
}

.v-btn {
  color: #ffffff;
  width: 375px;
  height: 10%;
  left: 70px;
}

#wechat {
  background-color: #00ad22;
  position: absolute;

  top: 20%;
}

#facebook {
  background-color: #476af0;
  position: absolute;

  top: 30%;
}

#form {
  width: 375px;
  position: absolute;
  left: 70px;
  top: 45%;
}

#signin {
  position: absolute;
  background-color: #1443bd;
  top: 85%;
}

#hint {
  position: absolute;
  width: 247px;
  height: 20px;
  left: calc(50% - 247px / 2 + 0.5px);
  top:80%;

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