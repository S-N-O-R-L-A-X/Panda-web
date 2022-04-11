<template>
  <v-alert
    border="right" colored-border
    class="alert" dismissible
    type="error"  elevation="4"
    :value="wrongAlert"
    >{{ content }}
  </v-alert>
</template>

<script>

export default {
  props: { wrongAlert: { type: Boolean }, content: { type: String } },
};
</script>

<style>
</style>