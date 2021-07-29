<template>
<div>
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
</div>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      titles:["Product","Classes","Company","Subscribe to Panda"],
      row1:["Website","HSK","About","Subscribe to Panda"],
      row2:["Mobile APP","Live Class","Students","newsletter with updates"],
      row3:["","KTV","Teachers",""],
      row4:["","","",""]
    }),
  }
</script>