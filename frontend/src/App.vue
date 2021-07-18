<template>
  <v-app>
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/about">a</router-link>
      <router-link to="/classes"></router-link>
      <router-link to="/join"></router-link>
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
};
</script>
