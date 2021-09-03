<template>
<div>
  <v-img src="../pics/join us/Frame 4608.png" id="bg"></v-img>
  
    <v-card-title id="title">Join us</v-card-title>
    <v-card-subtitle id="subtitle">Getting started from here</v-card-subtitle>
    <v-card-text id="content" style="top:260px;">From signing up for an account to choosing an identity</v-card-text>
    <v-card-text id="content" style="top:280px;">-Student/Teacher/Collaborator</v-card-text>
    
    <v-btn id="signUp" @click="toSignUp()">Sign Up Now</v-btn>
  
  <myfooter></myfooter>
</div>
</template>

<script>
import myfooter from '../components/myFooter'
export default {
  components:{myfooter},
  methods:(
    {
            toSignUp()
            {
                  this.$router.push('/signup');
            },
    }
  )
}
</script>

<style scoped>

#bg
{
   width:1260px;
   height:365px;
   position:absolute;
   left:103px;
   top:67px;
}

#signUp
{
  position: absolute;
  left:865px;
  top:334px;
  width: 145px;
  height: 36px;
  
  color:#ffffff;
  /* Button/Primary/Active */

  background: linear-gradient(0deg, rgba(13, 50, 145, 0.2) 0%, rgba(16, 54, 151, 0) 100%), #1443BD;
  border-radius: 4px;
}

#title
{
  font-family: Ubuntu;
  font-style:normal;
  font-weight: bold;
  color:#1A1A5E;
  line-height: 56px;
  font-size: 48px;
  position:absolute;
  left:840px;
  top:120px;
}

#subtitle
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.005em;
  font-size: 16px;
  color:#2B2796;
  position:absolute;
  left:850px;
  top:250px;
}

#content
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.0025em;
  color:#1A1A5E;
  position:absolute;
  left:865px;
}
</style>