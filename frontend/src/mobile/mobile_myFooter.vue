<template>
<div>
      <v-card color="#F2F2F2" class="pink--text" min-height="10%" max-height="35%" id="card1">
            <v-row  no-gutters>
                  <v-col v-for="(item,index) in titles" :key="index" id="content">
                  <strong>{{item}}</strong>
                  </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row1" :key="index" id="content">
                  {{item}}
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row2" :key="index" id="content">
                  {{item}}
                  </v-col>
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row3" :key="index" :cols="4" id="content">
                  {{item}}
                  </v-col>
                  
            </v-row>
            <v-row no-gutters>
                  <v-col v-for="(item,index) in row4" :key="index" :cols="4" id="content">
                  {{item}}
                  </v-col>
                  
            </v-row>
  
            <v-row>
                  <v-col col="6" >
                        Copyright <v-icon color="#F56D7E">mdi-alpha-c-circle-outline</v-icon> 2021 Panda Singing Chinese,Inc.
                  </v-col>
                  
                  <v-col col="6">
                        <v-btn v-for="icon in icons" :key="icon" icon>
                              <v-icon size="1.5rem" color="#F56D7E">{{ icon }}</v-icon>
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
      titles:["Product","Classes","Company"],
      row1:["Website","HSK","About"],
      row2:["Mobile APP","Live Class","Students"],
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
#but
{
      background-color:#ffffff;
      color:#204062;
}

#card1
{
      position: absolute;
      bottom:0;
      width:100%;
}


</style>