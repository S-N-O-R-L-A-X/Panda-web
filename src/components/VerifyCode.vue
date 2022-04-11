<template>
  <v-overlay :value="showCode">
    <ErrorAlert :wrong-alert="wrongAlert" :content="alertContent" />
    请在下方输入验证码
    <v-text-field
      v-model="verifyCode"
      label="Verify Code"
      required
      outlined
    ></v-text-field>
    <v-btn @click="cancelVerify()">取消</v-btn>
    <v-btn @click="register()">确认</v-btn>
  </v-overlay>
</template>

<script>
import { inputCode } from "@/api/register.js";
import ErrorAlert from "./ErrorAlert.vue"
export default {
  components:{ErrorAlert},
  props: { showCode: { type: Boolean }, user: { type: Object } },
  data() {
    return {
      verifyCode: "",
      alertContent: "",
      wrongAlert:false,
    };
  },
  methods: {
    register() {
      let userInfo = new FormData();
      for(let key in this.user){
        userInfo.append(key,this.user[key]);
      }
      
      userInfo.append("code", this.verifyCode);
      console.log(userInfo);
      inputCode("register2/", userInfo)
        .then((res) => {
          this.cancelVerify();
          
        })
        .catch((err) => {
          this.wrongAlert=true;
          this.alertContent=err;
        });
    },
    cancelVerify() {
      this.$emit("closeVerify");
    },
  },

};
</script>

<style>
</style>