<template>
  <div class="header">
    <div v-if="mainPage">
      <!-- <v-img src="@/assets/images/logo.png" class="logo"></v-img> -->
      <v-carousel hide-delimiters cycle :show-arrows-on-hover="true" height="95vh">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div v-else>
      <v-app-bar color="white" dense light>
      <router-link :to="{ path: '/', hash: '#'+ project.id}">
        <v-icon large>
          mdi-chevron-left
        </v-icon>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-title>{{project.title}}</v-toolbar-title>
    </v-app-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectModel from '@/models/models'

@Component
export default class Header extends Vue {
  @Prop() public mainPage!: boolean;
  @Prop() public project!: ProjectModel;
  items = [{
    src: require("@/assets/images/13.jpg")
  },{
    src: require("@/assets/images/14.jpg")
  },{
    src: require("@/assets/images/7.jpg")
  }];
}
</script>

<style scoped lang="scss">
.logo{
  position: fixed;
  right: 15px;
  top: 15px;
  width: 50px;
  z-index: 100;
  border-radius: 50%;
}
.v-icon{
  color: #ae1026 !important;
  border-radius: 50%;
}
.v-icon:hover{
  border-radius: 50%;
  color: white !important;
  background-color: #ae1026;
}
.v-toolbar__title{
  margin-right: 40px;
}
</style>
