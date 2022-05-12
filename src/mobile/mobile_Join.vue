<template>
<div>
  <mobile_Layout/>
  <v-img src="../pics/join us/Frame 4608.png" id="bg"></v-img>
      <!-- <v-row>
      <v-col cols="12"> -->
        <v-card-title id="title">Join us</v-card-title>
      <!-- </v-col> -->
      <v-card-text id="content" style="top:55%">From signing up for an account to choosing an identity</v-card-text>
      <v-card-text id="content" style="top:59%;left:4rem">-Student/Teacher/Collaborator</v-card-text>
      <!-- </v-row> -->

    

  
</div>
</template>

<script>
// import mobile_myFooter from "../components/mobile_myFooter"
// import mobile_myHeader from "../components/mobile_myHeader"
import mobile_Layout from "./mobile_Layout.vue"
export default {
  components:{mobile_Layout},
  methods:(
    {
         
    }
  )
}
</script>

<style scoped>

#bg
{
  width:90%;
  height:90%;
  left:1rem;
  top:20%;
}


#title
{
  font-family: Ubuntu;
  font-style:normal;
  font-weight: bold;
  color:#1A1A5E;
  line-height: 42px;
  font-size: 34px;
  position:absolute;
  left:10rem;
  top:40%;
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
  left:0;
}
</style>