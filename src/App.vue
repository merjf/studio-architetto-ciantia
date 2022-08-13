<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style lang="scss">
.v-main{
  // min-height: 100vh;
  background-color: #1e1e1e;
  > * {
    // color: $primary-color !important;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
  }
}
a{
  color: unset !important;
  text-decoration: none;
}
</style>
