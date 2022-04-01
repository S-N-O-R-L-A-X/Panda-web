<template>
  <v-app>
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/about"></router-link>
      <router-link to="/classes"></router-link>
      <router-link to="/join"></router-link>
      <router-link to="/test"></router-link>
    </div>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  mounted(){
      if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
) 
        this.$router.replace('/M_home');
      
      else
        this.$router.replace('/');

      window.addEventListener('hashchange',()=>{
          var currentPath = window.location.hash.slice(1); // 获取输入的路由
          if(this.$router.path !== currentPath){
              this.$router.push(currentPath); // 动态跳转
          }
      },false);

  }
};
  
</script>

<style>
/* public */
a {
  text-decoration: none;
}
 
.router-link-active {
  text-decoration: none;
}
</style>