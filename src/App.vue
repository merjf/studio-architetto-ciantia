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

<style>
.section{
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 250px;
}
a{
  color: black !important;
  text-decoration: none;
}
</style>
