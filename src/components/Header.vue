<template>
  <div class="header">
    <v-app-bar v-if="!isMobileVersion" id="app-bar" elevation="0" :class="['text-center', page == 'main' ? 'app-bar-dark' : 'app-bar-light']" :style="{position: 'fixed'}">
      <v-container fluid>
          <v-row justify="center">
              <v-toolbar-items>
                <router-link v-for="page in pages" :key="page.number" :to="{ name: page.name }">
                  <v-col>
                    <span>{{page.value}}</span>
                  </v-col>
                </router-link>
              </v-toolbar-items>
          </v-row>
      </v-container>
    </v-app-bar>
    <v-app-bar-nav-icon v-if="isMobileVersion" @click="drawer = true"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <template v-for="page in pages">
          <router-link v-if="page.simple" :key="page.number" :to="{ name: page.name }">
            <v-list-item :class="{'highlighted' : getCurrentPath === page.name }" link>
              <v-list-item-icon>
                <v-icon>{{page.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-group v-if="!page.simple" v-model="model" :key="page.number" active-class="highlighted" prepend-icon="mdi-briefcase" :value="false">
            <template v-slot:activator>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </template>
            <v-list-item-group active-class="highlighted" style="margin-left:20px;">
              <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                <v-list-item-title v-text="title"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
        </template>
        <!-- <v-list-item-group v-model="group" active-class="text--accent-4">
          <router-link v-for="page in pages" :key="page.number" :to="{ name: page.name }">
            <v-list-item :class="{'highlighted' : getCurrentPath === page.name }">
              <v-list-item-icon>
                <v-icon>{{page.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
    <v-container v-if="isMobileVersion && getCurrentPage != 'Home'">
      <v-row justify="center" no-gutters>
        <h2>
          {{getCurrentPage}}
        </h2>
      </v-row>
    </v-container>
    <v-img v-if="page === 'main'" src="@/assets/images/logo.png" class="logo"></v-img>
    <v-carousel v-if="page === 'main'" id="main-carousel" hide-delimiters cycle :show-arrows="!isMobileVersion" :show-arrows-on-hover="true" height="90vh">
      <v-carousel-item
        v-for="(image, i) in imagesForMainPage"
        :key="i"
        :src="image.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectModel from '@/models/models'
import projects from '@/assets/data/project';
import $ from 'jquery'

@Component({
  components:{
  }
})
class Header extends Vue {
  @Prop() public page!: string;
  @Prop() public project!: ProjectModel;
  imagesForMainPage = [{
    src: require("@/assets/images/13.jpg")
  },{
    src: require("@/assets/images/14.jpg")
  },{
    src: require("@/assets/images/7.jpg")
  }];
  pages = {
    home: {
      value: "Home",
      name: "home",
      active: true,
      number: 1,
      icon: 'mdi-home',
      simple: true
    },
    works: {
      value: "Works",
      number: 2,
      icon: 'mdi-briefcase',
      simple: false,

    },
    contacts: {
      value: "Contacts",
      name: "contacts",
      active: true,
      number: 3,
      icon: 'mdi-account-box',
      simple: true
    }
  };
  admins= [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ]
  drawer = false;
  group = null;
  windowWidth = window.innerWidth;
  model = 1;
  data() {
    return {
      
    }
  }
  get getCurrentPath(): string | undefined | null{
    console.log(this.$route);
    return this.$route.name;
  }
  get isMobileVersion(): boolean{
    return this.windowWidth <= 800
  }
  get getCurrentPage(): string | undefined | null{
    if(this.getCurrentPath){
      return this.getCurrentPath.charAt(0).toUpperCase() + this.getCurrentPath.slice(1);
    }
    return "";
  }
  mounted(){
    if(this.page === 'main'){
      const sticky:any = $('#app-bar'), $window:any = $(window),
        mainCarouselHeight = $('#main-carousel').height(),
        offset = 250;
      var scrolled = false;
      
      /* Bind the scroll Event */
      $window.on('scroll', function(e:any) {
          scrolled = true;
      });

      let timeout = setInterval(() => {
        /* If the page was scrolled, handle the scroll */
        if (scrolled && mainCarouselHeight) {
          scrolled = false;
          if ($window && $window.scrollTop() > mainCarouselHeight - offset) {
            sticky.removeClass("app-bar-dark");
            sticky.addClass("app-bar-light");
            // this.opacity = sticky.offset().top/(mainCarouselHeight-200) <= 1 ? sticky.offset().top/(mainCarouselHeight-200) :
                                // sticky.offset().top/(mainCarouselHeight-200) <= 0.09 ? 0.001 : sticky.offset().top/(mainCarouselHeight-200);
          } else {
            sticky.removeClass("app-bar-light");
            sticky.addClass("app-bar-dark");
          }
        }
      }, 1);
    }
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}

export default Header;
</script>

<style scoped lang="scss">
.logo{
  position: absolute;
  left: 35vw;
  top: 20vh;
  width: 25vw;
  z-index: 2;
}
@media screen and (max-width: 1180px) {
  .logo{
    width: 30vw;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -75%);
  }
}
@media screen and (max-width: 820px) {
  .logo{
    width: 50vw;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
}
@media screen and (max-width: 600px) {
  .logo{
    width: 70vw;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -80%);
  }
}
.v-toolbar__title{
  margin-right: 40px;
}
.vertical {
  border-left: 1px solid v-bind(color);
  height: 90%;
  margin: auto;
}
.app-bar-light{
  background-color: white !important;
  span{
    color: $primary-color;
  }
}
.app-bar-dark{
  background-color: unset !important;
  span{
    color: white;
  }
}
.v-app-bar{
  top: 0;
  z-index: 100;
  .v-toolbar__content{
    justify-content: center !important;
    span{
      margin: 15px;
      font-size: 1.1rem;
      font-weight: bold;
      padding: 10px;
      text-decoration: underline 0.15em rgba(255, 255, 255, 0);
      transition: text-decoration-color 300ms;
      text-underline-offset: 0.2em;
    }
    span:hover {
      text-decoration-color: $primary-color;
    }
  }
}
.v-app-bar__nav-icon{
  background-color: $secondary-color;
  color: $primary-color !important;
  // border: 1px solid $primary-color;
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 2;
}
.v-navigation-drawer__content{
  .v-list-item__title{
    font-size: 1rem !important;
  }
}
.highlighted{
  background-color: $primary-color !important;
  color: $secondary-color !important;
  caret-color: $secondary-color !important;
  i{
    color: $secondary-color !important;
  }
}
</style>
