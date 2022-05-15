<template>
<div>
  <p id="title">Use Our APP</p>
  <p id="illustration">We already support in multiple platform to provide the best experiences</p>
  
  <v-btn id="ios"><v-icon>mdi-apple</v-icon>ios</v-btn>
  <v-btn id="android" @click="androidDownload()"><v-icon>mdi-android</v-icon>Android</v-btn>
  <v-img src="../pics/downloads/Mockup.png" id="mockup"></v-img>
  
</div>
</template>

<script>
export default {
  methods:{
    androidDownload(){
      window.open("https://apks-1306415420.cos.ap-nanjing.myqcloud.com/app-debug.apk");
    }
  }
}
</script>

<style>
.v-btn 
{
  text-transform: none;
}

#mockup 
{
    position: absolute;
    width: 568px;
    height: 648px;
    left: calc(50% - 568px/2 + 328px);
    top: calc(50% - 648px/2 + 20px);
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
  width: 153px;
  height: 56px;
  left: 112px;
  top: 484px;
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
  width: 153px;
  height: 56px;
  left: 281px;
  top: 484px;
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