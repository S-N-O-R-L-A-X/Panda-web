<template>
<div>
  <v-img id="logo" src="../pics/LOGO.png"></v-img>
  <router-link to="/classes" id="classes">Classes</router-link>
  <router-link to="/download" id="download">Download</router-link>
  <router-link to="/join" id="join">Join us</router-link>
  
  <p id="title">Learning Chinese with Panda!</p>
  <p id="illustration">Professional and interesting Chinese learning community.</p>
  <v-btn id="signIn" @click="toSignIn()">Sign In</v-btn>
  <v-btn id="signUp" @click="toSignUp()">Sign Up</v-btn>
  <v-img id="triangle" src="../pics/Point-line triangle cube.png"></v-img>
  <v-img id="banner" src="../pics/Banner.png"></v-img>
  <v-img id="vector3" src="../pics/Vector 3.png"></v-img>
  <v-img id="vector4" src="../pics/Vector 4.png"></v-img>
  <v-btn id="getStart">Get Started ></v-btn>
  <v-icon id="arrowRight">mdi-arrow-right-drop-circle-outline</v-icon><span id="intro">Intro</span>
  <myfooter></myfooter>
</div>
  
</template>

<script>
import myfooter from "./myFooter"
export default {
  components:{myfooter},
  data () {
      return {
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      }
    },
  methods: {
    toSignIn()
    {
      this.$router.push('/signin');
    },
    toSignUp()
    {
      if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
) 
        this.$router.push('/M_signup');
      
      else
        this.$router.push('/signup');
    }
  }
  
}
</script>

<style>
#logo 
{
  /* position: absolute; */
  width: 152px;
  height: 65px;
  left: 96px;
  top: 22px;
}
.similarButton 
{
  position: absolute;
  width: 75px;
  height: 28px;
  left: 200px;
  top: 30px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  letter-spacing: 0.0015em;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 36px;
}
#triangle 
{
  position: absolute;
  width: 130px;
  height: 130px;
  left: 2.37px;
  top: 88.62px;
  opacity: 0.6;
  transform: rotate(-42.37deg);
}
#classes
{
  position: absolute;
  width: 75px;
  height: 28px;
  left: 633.5px;
  top: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color:#1443BD;
  line-height: 28px;
  text-decoration: none;  
  /* identical to box height, or 140% */
  letter-spacing: 0.0015em;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 36px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  /* linear-gradient(0deg, #1443BD, #1443BD); */
}
#download
{
  position: absolute;
  width: 105px;
  height: 28px;
  left: 760.5px;
  top: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color:#1443BD;
  text-decoration: none;
/* identical to box height, or 140% */
  letter-spacing: 0.0015em;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 36px;
}
#join
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: absolute;
  width: 140px;
  height: 28px;
  left: 885.5px;
  top: 40px;
  text-decoration: none;  
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color:#1443BD;
  /* Inside Auto Layout */
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 36px;
}
#signIn
{
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
  color: #2A84C6;
  background-color: #ffffff;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
#signUp
{
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
  color:#ffffff;
  /* Button/Primary/Active */
  background: linear-gradient(0deg, rgba(13, 50, 145, 0.2) 0%, rgba(16, 54, 151, 0) 100%), #1443BD;
  border-radius: 4px;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}

#title
{
  /* position: absolute; 
   width: 20%;
  height: 10%; 
  left: 7%;
  top: 20%; */
  position: absolute;
  width: 600px;
  height: 144px;
  left: 108px;
  top: 222px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  /* or 120% */
  color:#1A1A5E;
  letter-spacing: -0.005em;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 10px;
}

#illustration
{
  position: absolute;
  width: 492px;
  height: 24px;
  left: 108px;
  top: 390px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color:#3f477c;
  /* identical to box height, or 150% */
  letter-spacing: 0.005em;
  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 0px 10px;
}
#banner
{
  position: absolute;
  width: 496px;
  height: 420px;
  right: 108px;
  top: 182px;
}
#vector3
{
  position: absolute;
  left: 0;
  top: 89.66px;
  width:1280px;
  /* Dark/Error/90 */
  /* background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #D93A56; */
}
#vector4
{
  position: absolute;
  width:855px;
  left: 5px;
  top: 448.27px;
  /* Light/Error/5 */
  /* background: linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #F56D7E; */
  opacity: 0.4;
}
#getStart
{
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  width: 188px;
  height: 56px;
  left: 243px;
  top: 470px;
  /* Button/Primary/Active */
  background: linear-gradient(0deg, rgba(13, 50, 145, 0.2) 0%, rgba(16, 54, 151, 0) 100%), #1443BD;
  border-radius: 8px;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 24px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.0015em;
  color: #FFFFFF;
}
#arrowRight
{
  position: absolute;
  left: 108px;
  top: 478px;
  width:40px;
  height:40px;
  /* Light/Secondary/50 */
  color:#2A84C6;
  
  box-sizing: border-box;
}
#intro
{
  position: absolute;
  width: 0px;
  height: 48px;
  left: 156px;
  top: 486px;
  
  /* Light/Gray/10 */
  border: 2px solid #E5E5E5;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 24px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;
  letter-spacing: 0.0125em;
  /* Light/Secondary/50 */
  color: #2A84C6;
  /* Inside Auto Layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}
</style>