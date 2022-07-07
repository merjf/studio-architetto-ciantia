<template>
  <div class="header">
    <div v-if="page === 'main'">
      <Menu :positionMenu="'fixed'"/>
      <v-img src="@/assets/images/logo.png" class="logo"></v-img>
      <v-carousel hide-delimiters cycle :show-arrows-on-hover="true" height="95vh">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div v-else-if="page === 'projectList'">
      <Menu :positionMenu="'absolute'"/>
      <v-app-bar color="white" dense light height="60">
        <v-spacer></v-spacer>

        <v-toolbar-title>Projects</v-toolbar-title>
      </v-app-bar>
    </div>
    <div v-else-if="page === 'project'">
      <Menu :positionMenu="'absolute'"/>
      <v-app-bar color="white" dense light>
        <v-spacer></v-spacer>
        <v-toolbar-title>{{project.title}}</v-toolbar-title>
      </v-app-bar>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectModel from '@/models/models'
import Menu from '@/components/Menu.vue'

@Component({
  components:{
    Menu
  }
})
export default class Header extends Vue {
  @Prop() public page!: string;
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
  position: absolute;
  left: 35vw;
  top: 15vh;
  width: 30vw;
  z-index: 100;
}
.v-toolbar__title{
  // margin-top: 10px;
  margin-right: 40px;
  // text-align: right;
}
</style>
