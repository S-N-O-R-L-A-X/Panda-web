<template>
<div>
  <!-- <v-snackbar class="text-center ma-2" top v-model="snackbar" :timeout="3000" color="success">{{snackbar_text}}
    <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
  </v-snackbar> -->
  <div class="container">
    <v-img src="../pics/sign in1.jpg" height="100%" width="100%"></v-img>
  </div>
  
</div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
      snackbar:false,
      snackbar_text:'',
      valid: false,
      
      username:'',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8  || 'Password must be more than 8 characters and less than 20 characters',
      ],
      
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      checkbox: true,
      select: null,
      identities:["Teacher","Student"]
    }),
    methods:
    {
      createUser(){
        let user = this.new_user,formdata=new FormData();
        Object.keys(user).forEach((key) => {
          formdata.append(key, user[key]);
        });
        axios.post('http://1.117.107.95:8000/register/',formdata)
          .then(response => {
            console.log(response);
            console.log(response.status);
            if(response.status===200) {
              this.$emit('change', 'Created!');
              this.snackbar_text = "成功创建用户";
              this.snackbar = true;
            }
            else{
              throw new Error((response.message));
            }
          })
          .catch(error => {
            alert("新建用户失败：" + error.message);
          })
          .finally(e => {
            
          })
      }
    },
    computed: {
      new_user() {
        return {
          email:this.email,
          username:this.username,
          password: this.password,
          // identity:this.select,
          repeat_password:this.password
        }
      }
    },
    

}
</script>

<style scoped>
*
{
  padding:0;
}

#container1
{
    width:50%;
    margin:0 auto;
    left:0;
}

#card
{
  width:50%;
  height:100%;
  position:absolute;
  right:0;
  top:0;
}

#v-card-title
{
  /* width:74px; */
  height:2.4%;
  position:absolute;
  top:17%;
  left:45%; 

  font-size:16px;
}

#logo
{
    width: 18%;
    height:6%;
    position: absolute;
    left:344px;
    top:101px;
}

#form
{
  width:44.6%;
  position: absolute;
  left:232px;
  top:281px;
}

#signup
{
  
  width: 375px;
  height:50px;
  position: absolute;
  background-color:#1443BD;
  color:#ffffff;
  top:620px;
  left:232px;
}

#hint
{
  position: absolute;
  width: 247px;
  height: 20px;
  left: 350px;
  top: 750px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: center;

  /* Black 60 */

  color: rgba(17, 17, 19, 0.6);

}
</style>