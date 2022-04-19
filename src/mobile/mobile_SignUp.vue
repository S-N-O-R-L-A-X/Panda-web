<template>
  <div>
    <v-snackbar
      class="text-center ma-2"
      top
      v-model="snackbar"
      :timeout="3000"
      color="success"
      >{{ snackbar_text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-card id="card">
      <div id="logoContainer">
        <v-img src="../../public/LOGO.png"></v-img>
      </div>

      <v-form id="form">
        <v-row
          ><v-text-field
            v-model="email"
            :rules="emailRules"
            label="Emailaddress"
            required
            outlined
          ></v-text-field
        ></v-row>

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
        <!-- <v-row>
          <v-select v-model="select" :items="identities" 
          :rules="[v =>!!v||'Identity is required']" label="Identity" required></v-select>
        </v-row> -->
      </v-form>

      <v-btn id="signup" @click="createUser()">Join Us →</v-btn>
      <v-row id="hint"
        >Already a member?
        <router-link to="/signin">Sign in.</router-link></v-row
      >
    </v-card>
    <VerifyCode
      :show-code="showCode"
      :user="user"
      @closeVerify="closeVerify()"
    />
  </div>
</template>

<script>
import VerifyCode from "../components/VerifyCode.vue";
import axios from "axios";
export default {
  components: { VerifyCode },
  data: () => ({
    snackbar: false,
    snackbar_text: "",
    showCode: false,
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
    showPassword: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    repeatedPassword: "",
    repeatedPasswordRules: [
      (v) => !!v || "Repeated password is required for safety",
      (v) =>
        v.length >= 8 ||
        "Password must be more than 8 characters and less than 20 characters",
    ],
    user: null,
    // identities: ["Teacher", "Student"],
  }),
  methods: {
    createUser() {
      if (this.repeatedPassword !== this.password) {
        this.alertContent = "两次输入密码不一致！";
        this.wrongAlert = true;
        return;
      }

      this.user = {
        email: this.email,
        password: this.password,
        repeat_password: this.repeatedPassword,
        username: this.username,
      };

      axios
        .post("http://panda.rainspace.cn:8001/register1/", this.user)
        .then((res) => {
          this.showCode = true;
        })
        .catch((error) => {
          this.alertContent = "注册失败！" + error;
          this.wrongAlert = true;
          return;
        });
    },
    closeVerify() {
      this.showCode = false;
    },
  },
};
</script>

<style scoped>
#card {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  margin: 0;
}

#logoContainer {
  text-align: center;
  top: 10%;
  height: 20%;
  width: 40%;
  margin: 0 auto;
}

#logo {
  text-align: center;
  width: 100%;
  height: 100%;
}

#form {
  width: 44.6%;
  position: absolute;
  left: 25%;
  top: 30%;
}

#signup {
  width: 30%;
  height: 6.25%;
  position: absolute;
  background-color: #1443bd;
  color: #ffffff;
  top: 80%;
  left: 35%;
}

#hint {
  position: absolute;

  height: 2.5%;
  left: 35%;
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