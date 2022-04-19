<template>
  <v-overlay :value="overlay">
    请在下方输入验证码
    <v-text-field
      v-model="verifyCode"
      label="Verify Code"
      required
      outlined
    ></v-text-field>
    <v-btn>确认</v-btn>
  </v-overlay>
</template>

<script>
// import inputCode from "@/api/register.js";
export default {
  data() {
    return {
			verifyCode:"",
		};
  },
	methods:{
		register(){
			inputCode("register2/",verifyCode)
			.then(res => {

			})
			.catch(err => {
				
			})
		}
	}
};
</script>

<style>
</style>