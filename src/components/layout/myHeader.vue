<template>
  <div class="header">
    <v-img id="logo" src="../../pics/LOGO.png"></v-img>

    <router-link to="/classes" class="link" id="classes">Classes</router-link>
    <router-link to="/download" class="link" id="download">Download</router-link>
    <router-link to="/join" class="link" id="join">Join us</router-link>
    <v-btn id="signIn" @click="toSignIn()">Sign In</v-btn>
    <v-btn id="signUp" @click="toSignUp()">Sign Up</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toSignIn() {
      this.$router.push("/signin");
    },
    toSignUp() {
      const mobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      if (mobile) {
        this.$router.push("/M_signup");
      } 
      else {
        this.$router.push("/signup");
      }
    },
  },
};
</script>

<style scoped>
#logo {
  /* position: absolute; */
  width: 152px;
  height: 65px;
  left: 96px;
  top: 22px;
}

#signIn {
  position: absolute;
  width: 100px;
  height: 36px;
  left: 1175px;
  top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 4px;
  color: #2a84c6;
  background-color: #ffffff;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

#signUp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  width: 107px;
  height: 36px;
  left: 1258px;
  top: 36px;
  color: #ffffff;
  /* Button/Primary/Active */
  background: linear-gradient(
      0deg,
      rgba(13, 50, 145, 0.2) 0%,
      rgba(16, 54, 151, 0) 100%
    ),
    #1443bd;
  border-radius: 4px;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}

.link {
  top: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #1443bd;
  line-height: 28px;
  text-decoration: none;
  /* identical to box height, or 140% */
  letter-spacing: 0.0015em;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 36px;
}

#classes {
  position: absolute;
  width: 75px;
  height: 28px;
  left: 633.5px;
}

#download {
  position: absolute;
  width: 105px;
  left: 760.5px;
}

#join {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 140px;
  left: 885.5px;
}
</style>