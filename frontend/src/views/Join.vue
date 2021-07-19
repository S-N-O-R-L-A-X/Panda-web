<template>
<div>
  <v-img src="../pics/join us/Frame 4608.png" id="bg"></v-img>
  <v-card>
    <v-card-title>Join Us</v-card-title>
  </v-card>
  <myfooter></myfooter>
</div>
</template>

<script>
import myfooter from '../components/myFooter'
export default {
  components:{myfooter},
}
</script>

<style>

#bg
{
   width:1260px;
   height:365px;
   position:absolute;
   left:103px;
   top:67px;
}
</style>