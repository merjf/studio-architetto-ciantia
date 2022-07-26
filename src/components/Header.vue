<template>
  <div class="header">
    <v-app-bar v-if="!isMobileVersion" id="app-bar" elevation="0" :class="['text-center', page == 'main' ? 'app-bar-dark' : 'app-bar-light']" :style="{position: 'fixed'}">
      <v-container fluid>
        <v-row justify="center">
          <v-toolbar-items>
            <template v-for="page in pages">
              <router-link v-if="page.simple" :key="page.number" :to="{ name: page.name }">
                <v-col>
                  <span>{{page.value}}</span>
                </v-col>
              </router-link>
              <template v-else>
                <v-menu open-on-hover :close-on-content-click="true" offset-y :key="page.number">
                  <template v-slot:activator="{ on, attrs }">
                    <v-col v-bind="attrs" v-on="on">
                      <span>{{page.value}}</span>
                    </v-col>
                  </template>
                  <v-card elevation="1" class="project-list-menu">
                    <v-list>
                      <router-link :to="{ name: 'projects'}">
                        <v-list-item link :class="{'highlighted' : getCurrentPath.includes('projects') }" class="sub-item">
                          <v-list-item-title>Project List</v-list-item-title>
                        </v-list-item>
                      </router-link>
                      <v-divider></v-divider>
                      <router-link v-for="project in getProjectList" :key="project.id" :to="{ name: 'project', params: project }">
                        <v-list-item link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                          <v-list-item-title v-text="project.title" class='project-item'></v-list-item-title>
                        </v-list-item>
                      </router-link>
                    </v-list>
                  </v-card>
                </v-menu>
              </template>
            </template>
          </v-toolbar-items>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-app-bar-nav-icon v-if="isMobileVersion" @click="drawer = true"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <template v-for="page in pages">
          <router-link v-if="page.simple" :key="page.number" :to="{ name: page.name }">
            <v-list-item :class="{'highlighted' : getCurrentPath.includes(page.name) }">
              <v-list-item-icon>
                <v-icon>{{page.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </v-list-item>
          </router-link>
          <v-list-group v-if="!page.simple" :value="isProjectItemSelected" :key="page.number" active-class="highlighted" prepend-icon="mdi-briefcase">
            <template v-slot:activator>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </template>
            <v-list-item-group active-class="highlighted" style="margin-left:20px;">
              <router-link :to="{ name: 'projects'}">
                <v-list-item link :class="{'highlighted' : getCurrentPath.includes('projects') }" class="sub-item">
                  <v-list-item-title>Project List</v-list-item-title>
                </v-list-item>
              </router-link>
              <v-divider></v-divider>
              <template v-for="group in getProjectList">
                <v-list-group :value="isProjectItemSelected" no-action sub-group :key="group.name" v-if="group.type==='group'" class="sub-group">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{group.name}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-if="group.projects">
                    <router-link v-for="project in group.projects" :key="project.id" :to="{ name: 'project', params: project }">
                      <v-list-item link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                        <v-list-item-title v-text="project.title"></v-list-item-title>
                      </v-list-item>
                    </router-link>
                  </template>
                  <template v-if="group.subgroup">
                    <v-divider class="divider-sub-group"></v-divider>
                    <router-link :key="group.subgroup.name" :to="{ name: 'projects', hash:'#'+group.subgroup.id}">
                      <v-list-item link :class="{'highlighted' : getCurrentPath.includes(group.subgroup.id)}" class="sub-item-in-group">
                        <v-list-item-title v-text="group.subgroup.name"></v-list-item-title>
                      </v-list-item>
                    </router-link>
                  </template>
                </v-list-group>
                <template v-if="group.type==='grid'">
                  <router-link :key="group.name" :to="{ name: 'projects', hash:'#'+group.id}">
                    <v-list-item link :class="{'highlighted' : getCurrentPath.includes(group.id) }" class="sub-item">
                      <v-list-item-title v-text="group.name"></v-list-item-title>
                    </v-list-item>
                  </router-link>
                </template>
              </template>
            </v-list-item-group>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-container v-if="isMobileVersion && getCurrentPage != 'Home'">
      <v-row justify="center" class="page-title">
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
import { GroupModel, ProjectModel } from '@/models/models'
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
    src: require("@/assets/images/1.jpg")
  },{
    src: require("@/assets/images/2.jpg")
  },{
    src: require("@/assets/images/3.jpg")
  }];
  pages = {
    home: {
      value: "Home",
      name: "home",
      number: 1,
      icon: 'mdi-home',
      simple: true
    },
    works: {
      value: "Works",
      name: "",
      number: 2,
      icon: 'mdi-briefcase',
      simple: false
    },
    contacts: {
      value: "Contacts",
      name: "contacts",
      number: 3,
      icon: 'mdi-account-box',
      simple: true
    }
  };
  drawer = false;
  windowWidth = window.innerWidth;
  get getCurrentPath(): string{
    return this.$route.fullPath ? this.$route.fullPath : "";
  }
  get isMobileVersion(): boolean{
    return this.windowWidth <= 800
  }
  get getCurrentPage(): string{
    var currentPageName = "";
    if(this.$route.params && this.$route.params.title){
      currentPageName = this.$route.params.title;
    } else if(this.$route.name){
      currentPageName = this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1);
    }
    return currentPageName;
  }
  get getProjectList(): GroupModel[]{
    return projects;
  }
  get isProjectItemSelected(): boolean{
    if(this.$route.name){
      return this.$route.name?.includes('project');
    }
    return false;
  }
  mounted(){
    if(this.page === 'main'){
      const sticky:any = $('#app-bar'), $window:any = $(window),
        mainCarouselHeight = $('#main-carousel').height(),
        offset = 250;
      var scrolled = false;

      $window.on('scroll', function(e:any) {
          scrolled = true;
      });

      let timeout = setInterval(() => {
        if (scrolled && mainCarouselHeight) {
          scrolled = false;
          if ($window && $window.scrollTop() > mainCarouselHeight - offset) {
            sticky.removeClass("app-bar-dark");
            sticky.addClass("app-bar-light");
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
.page-title{
  max-width: 70vw;
  margin: auto;
  text-align: center;
}
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
.sub-group{
  margin-left: -20px;
}
.sub-item{
  font-size: 1rem;
  padding-left: 20px;
}
.sub-item-in-group{
  margin-left: 20px !important;
  padding-left: 20px !important;
  > .v-list-item__title{
    font-size: 0.875rem !important;
  }
}
.divider-sub-group{
  margin-left: 40px;
}
.project-item{
  font-size: 0.875rem;
}
.v-toolbar__title{
  margin-right: 40px;
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
  .project-list-menu{
    position: absolute;
  }
}
.v-app-bar__nav-icon{
  background-color: $secondary-color;
  color: $primary-color !important;
  // border: 1px solid $primary-color;
  position: fixed;
  top: 12px;
  left: 5px;
  z-index: 2;
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
