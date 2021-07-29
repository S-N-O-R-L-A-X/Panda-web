<template>
  <v-footer
  
    padless
    absolute
    id="cardTitle"
  >
    <v-card
      flat
      tile
      id="cardTitle"
    >
      <v-card-title id="cardTitle">
        <v-row>
          <v-col col="3">
          <v-img src="../pics/LOGO.png" id="logo"></v-img>
          </v-col>
          <v-divider vertical inset></v-divider>
          <v-col col="6">
          Copyright <v-icon>mdi-alpha-c-circle-outline</v-icon> 2021 Panda Singing Chinese,Inc.
          </v-col>
          <v-spacer></v-spacer>
          <v-col col="3">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
          >
            <v-icon size="20px">{{ icon }}</v-icon>
          </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      
      <v-card-text>
        <v-row class="mb-6" no-gutters>
                  <v-col v-for="(item,index) in titles" :key="index" id="title">
                  <v-card tile>{{item}}</v-card>
                  </v-col>
            </v-row>

            <v-row no-gutters>
                  <v-col v-for="(item,index) in row1" :key="index" id="content">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row2" :key="index" id="content">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row3" :key="index" :cols="3" id="content">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
                  <v-col><v-btn>sign up</v-btn></v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row4" :key="index" >
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
      </v-card-text> 
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-wechat',
        'mdi-youtube',
        'mdi-bilibili',
        'mdi-instagram',
        'mdi-facebook',
      ],
      titles:["Product","Classes","Company","Subscribe to Panda"],
      row1:["Website","HSK","About","Subscribe to Panda"],
      row2:["Mobile APP","Live Class","Students","newsletter with updates"],
      row3:["","KTV","Teachers",""],
      row4:["","","",""]
    }),
  }
</script>

<style scoped>
#logo
{
  /* position:absolute;
  width:156px; */
  height:65px;
}

#cardTitle
{
  width: 100%;
  height:30%;
  background-color:"#ffffff";
}

#title
{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 4px;
      /* identical to box height, or 140% */
      /* Light/Gray/0 */

      color: #F56D7E;

}
</style>