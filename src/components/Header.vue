<template>
  <div class="header">
    <v-carousel hide-delimiters cycle :show-arrows-on-hover="true" height="95vh">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  items = [{
    src: require("@/assets/images/1.jpg")
  },{
    src: require("@/assets/images/2.jpg")
  },{
    src: require("@/assets/images/3.jpg")
  }];
}
</script>

<style scoped lang="scss">

</style>
