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
      <v-col cols="4"><router-link to="/classes" >Classes</router-link></v-col>
      <v-col cols="4"><router-link to="/download" >Download</router-link></v-col>
      <v-col cols="4"><router-link to="/join">Join us</router-link></v-col>
    </v-app-bar>
  </v-row>
  
  <v-row>
    <v-col cols="12">
      <v-card height="100%">
        <v-img height="30%" src="../pics/Banner.png"></v-img>
        <v-card-title style="color:#1A1A5E;">Learning Chinese with Panda!</v-card-title>
        <v-card-subtitle>Professional and interesting Chinese learning community.</v-card-subtitle>

        <v-card-actions>
          <v-row>
            <v-col cols="3">
              <v-icon class="blue--text">mdi-arrow-right-drop-circle-outline</v-icon><span class="blue--text">Intro</span>
            </v-col>
            <v-col cols="3">
              <v-btn class="indigo accent-4 white--text">Get Started ></v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>  
  </v-row>
  
  <mobile_myFooter></mobile_myFooter>
</div>
  
</template>

<script>
import mobile_myFooter from "./mobile_myFooter"
export default {
  components:{mobile_myFooter},
  data () {
      return {
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      }
    },
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

#classes
{
  position: absolute;
  width: 0.75rem;
  height: 28px;
  left: 6.335rem;
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
  /* position: absolute; */
  /* width: 1rem;
  height: 5%;
  left: 11.75rem;
  top: 36px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 4px;
  color: #2A84C6;
  background-color: #ffffff;
  /* Inside Auto Layout */
  /* flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px; */
}

#signUp
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  width: 1rem;
  height: 5%;
  left: 16rem;
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
  color:#1A1A5E;
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
  width: 4.96rem;
  height: 420px;
  right: 1.08rem;
  top: 182px;
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

</style>