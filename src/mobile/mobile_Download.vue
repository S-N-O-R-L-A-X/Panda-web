<template>
<div>
  <mobile_myHeader/>
  <p id="title">Use Our APP</p>
  <p id="illustration">We already support in multiple platform to provide the best experiences</p>

  <v-btn id="ios"><v-icon>mdi-apple</v-icon>ios</v-btn>
  <v-btn id="android"><v-icon>mdi-android</v-icon>Android</v-btn>
  <v-img src="../pics/downloads/Mockup.png" id="mockup"></v-img>
  
</div>
</template>

<script>
import mobile_myHeader from "./components/mobile_myHeader"

export default {
  components:{mobile_myHeader}
}
</script>

<style scoped>
#title
{
  position: absolute;
  width: 100%;
  /* height: 10%; */
  left: 0;
  top: 65%;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 60px;
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
  width: 100%;
  height: 24px;
  left: 0;
  top: 75%;
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

.v-btn 
{
  text-transform: none;
}

#mockup 
{
    position: absolute;
    width: 70%;
    height: 45%;
    left: 15%;
    top: 20%;
}

#ios 
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-transform: none;
  position: absolute;
  width: 30%;
  height: 8%;
  left: 10%;
  top: 90%;
  color: #2A84C6;
  /* Light/Gray/0 */

  background: #FFFFFF;
  border-radius: 8px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
}

#android
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;

  position: absolute;
  width: 30%;
  height: 8%;
  left: 50%;
  top: 90%;
  color:#FFFFFF;
  /* Button/Primary/Active */

  background: linear-gradient(0deg, rgba(13, 50, 145, 0.2) 0%, rgba(16, 54, 151, 0) 100%), #1443BD;
  border-radius: 8px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px;
}
</style>