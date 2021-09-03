<template>
<div>
  <v-row>
    <v-col cols="5">
      <v-img src="../pics/LOGO.png" max-width="12rem"></v-img>
    </v-col>
    <v-col cols="3"><v-btn @click="toSignIn()" class="white blue--text">Sign In</v-btn></v-col>
    <v-col cols="4"><v-btn @click="toSignUp()" class="indigo accent-4  white--text">Sign Up</v-btn></v-col>
  </v-row>
  <v-row>
    <v-app-bar color="#F2F2F2" >
      <v-col cols="4"><router-link to="/M_classes" >Classes</router-link></v-col>
      <v-col cols="4"><router-link to="/M_download" >Download</router-link></v-col>
      <v-col cols="4"><router-link to="/M_join">Join us</router-link></v-col>
    </v-app-bar>
  </v-row>
</div>
</template>

<script>
export default {
  methods: {
    toSignIn()
    {
      this.$router.push('/M_signin');
    },
    toSignUp()
    {
        this.$router.push('/M_signup');
    }
    
  }
}
</script>

<style scoped>

</style>