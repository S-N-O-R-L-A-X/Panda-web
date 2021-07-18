<template>
<div>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col v-for="item in titles" :key="n">
        <v-card tile>{{item}}</v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="item in content1" :key="n">
        <!-- <v-card class="pa-2" tile outlined> -->
          {{item}}
        <!-- </v-card> -->
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-btn block color="primary">Hello</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8">
        <v-btn block color="success">World 1</v-btn>
      </v-col>

      <v-col cols="12" sm="4">
        <v-btn block color="success">World 2</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-row height="50px">
          <v-col><v-card tile>col</v-card></v-col>
          <v-col cols="12" sm="3">Product</v-col>
          <v-col cols="12" sm="3">Classes</v-col>
          <v-col cols="12" sm="3">Company</v-col>
          <v-col cols="12" sm="3" >Subscribe to Panda</v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
          <v-col>Product</v-col>
          <v-col>Classes</v-col>
          <v-col>Company</v-col>
          <v-col>Subscribe to Panda</v-col>
        </v-row>
        
        
        <v-row>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
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
      row1:["Website","HSK","About","Subscribe to Panda"]
    }),
  }
</script>