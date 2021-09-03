<template>
<div>
  <mobile_myHeader/>
  <v-img src="../pics/join us/Frame 4608.png" id="bg"></v-img>
      <!-- <v-row>
      <v-col cols="12"> -->
        <v-card-title id="title">Join us</v-card-title>
      <!-- </v-col> -->
      <!-- <v-card-subtitle id="subtitle" class="">Getting started from here</v-card-subtitle> -->
      <v-card-text id="content" style="top:55%">From signing up for an account to choosing an identity</v-card-text>
      <v-card-text id="content" style="top:60%;left:4rem">-Student/Teacher/Collaborator</v-card-text>
      <!-- </v-row> -->

    

  <mobile_myFooter></mobile_myFooter>
</div>
</template>

<script>
import mobile_myFooter from "../components/mobile_myFooter"
import mobile_myHeader from "../components/mobile_myHeader"

export default {
  components:{mobile_myFooter,mobile_myHeader},
  methods:(
    {
         
    }
  )
}
</script>

<style scoped>

#bg
{
  width:100%;
  height:100%;
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
  left:13rem;
  top:40%;
}

#subtitle
{
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  /* line-height: 24px; */
  letter-spacing: 0.005em;
  font-size: 16px;
  color:#2B2796;
  position:absolute;
  left:8rem;
  top:50%;
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