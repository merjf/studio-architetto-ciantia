<template>
  <div class="header">
    <v-app-bar id="app-bar" elevation="0" :class="['text-center', page == 'main' ? 'app-bar-dark' : 'app-bar-light']" :style="{position: 'fixed',}">
      <v-container fluid>
          <v-row justify="center" >
              <v-toolbar-items>
                  <router-link :to="{ name: 'home' }">
                      <v-col>
                          <span>Home</span>
                      </v-col>
                  </router-link>
                  <div class = "vertical"></div>
                  <router-link :to="{ name: 'projects' }">
                      <v-col>
                          <span>Works</span>
                      </v-col>
                  </router-link>
                  <div class = "vertical"></div>
                  <router-link :to="{ name: 'contacts' }">
                      <v-col>
                          <span>Contacts</span>
                      </v-col>
                  </router-link>
              </v-toolbar-items>
          </v-row>
      </v-container>
    </v-app-bar>
    <v-img v-if="page === 'main'" src="@/assets/images/logo.png" class="logo"></v-img>
    <v-carousel v-if="page === 'main'" id="main-carousel" hide-delimiters cycle :show-arrows-on-hover="true" height="95vh">
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
      number: 1
    },
    projects: {
      value: "Projects",
      name: "projects",
      active: false,
      number: 2
    }
  };
  projects = projects;
  public color = "rgb(30,30,30)";
  data() {
    return {
      color: "rgb(30,30,30)",
    }
  }
  get getColor(): string {
    return this.color;
  }
  mounted(){
    if(this.page === 'main'){
      const sticky:any = $('#app-bar'), $window:any = $(window),
        mainCarouselHeight = $('#main-carousel').height(),
        offset = 80;
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
  }
}

export default Header;
</script>

<style scoped lang="scss">
.logo{
  position: absolute;
  left: 35vw;
  top: 15vh;
  width: 30vw;
  z-index: 80;
}
.v-toolbar__title{
  // margin-top: 10px;
  margin-right: 40px;
  // text-align: right;
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
  // box-shadow: unset !important;
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
</style>
