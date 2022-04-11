<template>
  <v-alert
    border="right"
    colored-border
    class="alert"
    dismissible
    type="error"
    elevation="4"
    :value="wrongAlert"
    >{{ alertContent }}
  </v-alert>
</template>

<script>

export default {
  props:[wrongAlert],
  data(){
    
  }
};
</script>

<style>
</style>