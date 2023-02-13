<template>
  <div class="header">
    <v-app-bar v-if="true" id="app-bar" elevation="0" :class="['text-center', page == 'main' ? 'app-bar-dark' : 'app-bar-light']" style="position: fixed" :height="isMobileVersion ? 60 : 45">
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
                <v-menu open-on-hover :close-on-content-click="true" nudge-bottom="40" :key="page.number">
                  <template v-slot:activator="{ on, attrs }">
                    <v-col v-bind="attrs" v-on="on">
                      <span>{{page.value}}</span>
                    </v-col>
                  </template>
                  <v-card class="project-list-menu overflow-y-auto" max-height="90vh">
                    <v-list>
                      <router-link :to="{ name: 'works'}">
                        <v-list-item link :class="{'highlighted' : getCurrentPath.includes('works') }" class="sub-item">
                          <v-list-item-title style="font-size: 1.5rem !important; font-weight: bold;">Lavori</v-list-item-title>
                        </v-list-item>
                      </router-link>
                      <v-divider></v-divider>
                      <v-divider></v-divider>
                      <v-divider></v-divider>
                      <v-list subheader>
                        <template v-for="(group, index) in getProjectList">
                          <template v-if="group.projects && group.type==='group'">
                            <v-subheader :key="group.name" style="font-size: 0.775rem !important;">{{group.name}}</v-subheader>
                            <template v-for="project in group.projects">
                              <router-link v-if="project.type === 'grid'" :key="project.id" :to="{ name: 'works', hash:'#'+project.id}">
                                <v-list-item link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                                  <v-list-item-title v-text="project.name"></v-list-item-title>
                                </v-list-item>
                              </router-link>
                              <router-link v-else :key="project.id" :to="{ name: 'project', params: project }">
                                <v-list-item  link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                                  <v-list-item-title v-text="project.title"></v-list-item-title>
                                </v-list-item>
                              </router-link>
                            </template>
                          </template>
                          <v-divider v-if="index !== group.length-1" :key="group.id + 1"></v-divider>
                          <v-divider v-if="index !== group.length-1" :key="group.id + 2"></v-divider>
                        </template>
                      </v-list>
                    </v-list>
                  </v-card>
                </v-menu>
              </template>
            </template>
          </v-toolbar-items>
          <v-divider></v-divider>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-app-bar-nav-icon v-if="false" @click="drawer = true"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" fixed temporary right>
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
          <v-list-group v-if="!page.simple" :value="isPageItemSelected" :key="page.number" active-class="highlighted" prepend-icon="mdi-briefcase">
            <template v-slot:activator>
              <v-list-item-title>{{page.value}}</v-list-item-title>
            </template>
            <v-list-item-group active-class="highlighted" style="margin-left:20px;">
              <router-link :to="{ name: 'works'}">
                <v-list-item link :class="{'highlighted' : getCurrentPath.includes('works') }" class="sub-item">
                  <v-list-item-title>Lavori</v-list-item-title>
                </v-list-item>
              </router-link>
              <v-divider></v-divider>
              <template v-for="group in getProjectList">
                <v-list-group :value="isProjectItemSelected(group)" no-action sub-group :key="group.name" v-if="group.type==='group'" class="sub-group">
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>{{group.name}}</v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-if="group.projects">
                    <template v-for="project in group.projects">
                      <router-link v-if="project.type === 'grid'" :key="project.id" :to="{ name: 'works', hash:'#'+project.id}">
                        <v-list-item link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                          <v-list-item-title v-text="project.name"></v-list-item-title>
                        </v-list-item>
                      </router-link>
                      <router-link v-else :key="project.id" :to="{ name: 'project', params: project }">
                        <v-list-item  link :class="{'highlighted' : getCurrentPath.includes(project.id)}">
                          <v-list-item-title v-text="project.title"></v-list-item-title>
                        </v-list-item>
                      </router-link>
                    </template>
                  </template>
                </v-list-group>
              </template>
            </v-list-item-group>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-img v-if="page === 'main'" src="@/assets/images/logo.png" class="logo"></v-img>
    <v-carousel v-if="page === 'main'" id="main-carousel" hide-delimiters cycle :show-arrows="!isMobileVersion" :show-arrows-on-hover="true" height="90vh">
      <v-carousel-item
        v-for="i in imagesForMainPage"
        :key="i"
        :src="require('@/assets/images/home/'+i+'.webp')"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
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
  imagesForMainPage = Array.from({length:5},(v,k)=>k+1);
  pages = {
    home: {
      value: "Home",
      name: "home",
      number: 1,
      icon: 'mdi-home',
      simple: true
    },
    works: {
      value: "Portfolio",
      name: "",
      number: 2,
      icon: 'mdi-briefcase',
      simple: false
    },
    contacts: {
      value: "Contatti",
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
    } else if(this.$route.name && this.$route.name !== 'project'){
      currentPageName = this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1);
    }
    return currentPageName;
  }
  get getProjectList(): GroupModel[]{
    return projects;
  }
  get isPageItemSelected(): boolean{
    if(this.$route.name){
      return this.$route.name?.includes('work') || this.$route.name?.includes('project');
    }
    return false;
  }
  isProjectItemSelected(group : GroupModel): boolean {
    var currentProjectId = (/[0-9+]+/).exec(this.$route.fullPath);
    var currentTag = (/#.+/).exec(this.$route.fullPath);
    var result = false;
    if(currentTag && currentTag[0]){
      group.projects?.forEach((project) => {
        if(String(project.id) === currentTag[0].replace("#", "")){
          result = true;
        }
      })
    }
    else if(currentProjectId && currentProjectId[0] && currentProjectId !== null){
      group.projects?.forEach((project) => {
        if(project.id === parseInt(currentProjectId[0])){
          result = true;
        }
      })
    }
    return result;
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
  left: 40vw;
  top: 25vh;
  width: 20vw;
  z-index: 2;
}
.v-list-item__title{
  font-size: 0.875rem !important;
}
@media screen and (max-width: 1180px) {
  .logo{
    width: 30vw;
    top: 0;
    left: 50%;
    transform: translate(-50%, 75%);
  }
  .v-list-item__title{
    font-size: 0.875rem !important;
  }
}
@media screen and (max-width: 820px) {
  .logo{
    width: 50vw;
    top: 0;
    left: 50%;
    transform: translate(-50%, 70%);
  }
  .v-list-item__title{
    font-size: 0.875rem !important;
  }
}
@media screen and (max-width: 600px) {
  .logo{
    width: 70vw;
    top: 0;
    left: 50%;
    transform: translate(-50%, 80%);
  }
}
@media (max-height: 450px) and (max-width: 1000px){
  .logo{
    top: 0;
    transform: translate(-50%, 34%);
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
#app-bar{
  .v-divider{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.v-menu__content{
  box-shadow: rgba(81, 76, 76, 0.1) 4px 4px 1px 1px !important
}
.app-bar-light{
  background-color: #1e1e1e !important;
  span{
    color: $primary-color;
  }
}
.app-bar-dark{
  display: none;
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
  // background-color: $secondary-color;
  color: $primary-color !important;
  border: 1px solid $primary-color;
  position: fixed;
  top: 12px;
  right: 5px;
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
