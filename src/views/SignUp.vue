<template>
  <div>
    <v-snackbar
      class="text-center ma-2"
      top
      v-model="snackbar"
      :timeout="3000"
      color="success"
      >{{ snackbar_text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div>
      <v-img src="../pics/sign in1.jpg" height="100%" width="100%"></v-img>
    </div>
    <!-- <v-img src="../pics/sign in1.jpg"></v-img> -->
    <SignupCard/>
  </div>
</template>

<script>

import SignupCard from '@/components/signupCard';
export default {
  components:{SignupCard},
  data: () => ({
    snackbar: false,
    snackbar_text: "",

    
  }),
};
</script>

<style scoped>
</style>