<template>
<div>
  <v-footer dark padless absolute color="#F8527D" id="foot">
      <v-container>
            <v-row class="mb-6" no-gutters>
                  <v-col v-for="item in titles" :key="n">
                  <v-card tile>{{item}}</v-card>
                  </v-col>
            </v-row>

            <v-row no-gutters>
                  <v-col v-for="item in row1" :key="n">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="item in row2" :key="n">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="item in row3" :key="n" :cols="3">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
                  <v-col><v-btn>sign up</v-btn></v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="item in row4" :key="n">
                  <!-- <v-card class="pa-2" tile outlined> -->
                  {{item}}
                  <!-- </v-card> -->
                  </v-col>
            </v-row>
      </v-container>
      <!--
      <v-container id="title">
      <v-row id="content">
            <v-col cols="3">Product</v-col>
            <v-col cols="3">Classes</v-col>
            <v-col cols="3">Company</v-col>
            <v-col cols="3">Subscribe to Panda</v-col>
      </v-row>
      
      <v-row>
            <v-col cols="3">Website</v-col>
            <v-col cols="3">HSK</v-col>
            <v-col cols="3">About us</v-col>
            <v-col cols="3">Subscribe to Panda</v-col>
      </v-row>

      <v-row>
            <v-card-text>
                  <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                  >
                  <v-icon size="24px">{{ icon }}</v-icon>
                  </v-btn>
            </v-card-text>
      </v-row>
      </v-container> -->
  </v-footer>

</div>
</template>

<script>
export default {
      data()
      {
            return{icons: ['mdi-facebook','mdi-twitter','mdi-linkedin','mdi-instagram'],
                  titles:["Product","Classes","Company","Subscribe to Panda"],
                  row1:["Website","HSK","About","Subscribe to Panda"],
                  row2:["Mobile APP","Live Class","Students","newsletter with updates"],
                  row3:["","KTV","Teachers"],
                  row4:["","",""]
            }
      }
      
}
</script>

<style scoped>
#foot
{
      width: 100%;
      height:440px;
}

#title
{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 4px;

      /* identical to box height, or 140% */
      /* Light/Gray/0 */

      color: #FFFFFF;

}

#content 
{
      
      width: 68px;
      height: 24px;
    

      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: center;
      letter-spacing: 0.0125em;

      /* Light/Gray/0 */

      color: #FFFFFF;


      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 8px 0px;
}
</style>