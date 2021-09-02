<template>
<div>
      <v-card color="#F2F2F2" class="pink--text" min-height="160px" id="card1">
            <v-row  no-gutters>
                  <v-col v-for="(item,index) in titles" :key="index" id="content">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  <strong>{{item}}</strong>
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row1" :key="index" id="content">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row2" :key="index" id="content">
                  
                  {{item}}
                  
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row3" :key="index" :cols="3" id="content">
                  {{item}}
                  </v-col>
                  
            </v-row>

            <v-row no-gutters>
                  <v-col v-for="(item,index) in row4" :key="index" :cols="3" id="content">
                  {{item}}
                  </v-col>
                  <v-col cols="3"><v-btn id="but" @click="toSignUp()">sign up</v-btn></v-col>
            </v-row>
      </v-card>
      
      <v-card color="#F2F2F2" class="pink--text" min-height="80px" id="card2">
            <v-row>
                  <v-col col="3">
                        <v-img src="../pics/LOGO.png" id="logo"></v-img>
                  </v-col>
                  <v-divider vertical inset></v-divider>

                  <v-col col="4" >
                        Copyright <v-icon color="#F56D7E">mdi-alpha-c-circle-outline</v-icon> 2021 Panda Singing Chinese,Inc.
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col col="5">
                  <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                        <v-icon size="20px" color="#F56D7E">{{ icon }}</v-icon>
                  </v-btn>
                  </v-col>
            </v-row>

      </v-card>
</div>
</template>



<script>
  export default {
    data: () => ({
      icons: ['mdi-wechat',
        'mdi-youtube',
        
        'mdi-instagram',
        'mdi-facebook',],
      titles:["Product","Classes","Company","Subscribe to Panda"],
      row1:["Website","HSK","About","Sign up to receive our"],
      row2:["Mobile APP","Live Class","Students","newsletter with updates"],
      row3:["","KTV","Teachers"],
      row4:["","","Collaborator"]
    }),
    methods:
    ({
            toSignUp()
            {
                  this.$router.push('/M_signup');
            },
      })
  }
</script>

<style scoped>
#logo
{
      position:absolute;
      top:0px;
  width:156px; 
  height:65px;
}

#but
{
      background-color:#ffffff;
      color:#204062;
}

#card1
{
      position: absolute;
      bottom:80px;
      width:100%;
}

#card2
{
      position:absolute;
      bottom:0px;
      width:100%;
}
</style>