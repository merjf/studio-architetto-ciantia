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
  min-height: 100vh;
  > * {
    color: $primary-color !important;
  }
}
.section{
  margin-top: 100px;
  margin-bottom: 150px;
}
a{
  color: unset !important;
  text-decoration: none;
}
</style>
