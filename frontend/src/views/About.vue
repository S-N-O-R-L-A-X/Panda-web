<template>
  <v-footer
    dark
    padless
    absolute
    color="#F2F2F2"
  >
    <v-card
      flat
      tile
      id="cardTitle"
    >
      <v-card-title>
        
        <v-img src="../pics/LOGO.png" id="logo"></v-img>
        aa 
        <v-divider vertical inset></v-divider>
        <p>Copyright <v-icon>mdi-alpha-c-circle-outline</v-icon> 2021 Panda Singing Chinese,Inc.</p>

        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="20px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <!-- <v-card-text>
        
      </v-card-text> -->
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
    }),
  }
</script>

<style scoped>
#logo
{
  position:absolute;
  width:156px;
  height:65px;
}

#cardTitle
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

      color: #F56D7E;

}
</style>