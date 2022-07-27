<template>
  <div>
    <Header :page="'projectList'"/>
    <div class="section project-groups">
      <template v-for="(group, index) in getProjects()" >
        <v-container :key="group.name" v-if="group.type==='group'" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
          <v-card-title class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
            {{group.name}}
          </v-card-title>
          <div v-if="group.projects">
            <Project v-for="project in group.projects" :key="project.id"
              :detailed="false"
              :project="project"
              class="project"
            />
          </div>
          <v-container v-if="group.subgroup" :style="{maxWidth: isMobileVersion ? '85vw' : '55vw'}" :id="group.subgroup.id">
            <v-card-subtitle class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
              {{group.subgroup.name}}
            </v-card-subtitle>
            <v-row justify="center">
              <v-col v-for="subproject in group.subgroup.subprojects" :key="subproject.id" class="d-flex child-flex" cols="4">
                <v-img :src="require('@/assets/images/work/'+subproject.mainFolder+'/'+subproject.windowImage+'.jpg')" :lazy-src="require('@/assets/images/work/'+subproject.mainFolder+'/'+subproject.windowImage+'.jpg')" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-container>
          <v-divider v-if="index !== getProjects().length-1" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'"></v-divider>
        </v-container>
        <v-container :key="group.name" v-if="group.type==='grid'" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'" :id="group.id">
          <v-card-title class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
            {{group.name}}
          </v-card-title>
          <div v-if="group.projects">
            <v-row justify="center">
              <v-col v-for="project in group.projects" :key="project.id" class="d-flex child-flex" cols="4">
                <v-img :src="require('@/assets/images/work/'+project.mainFolder+'/'+project.windowImage+'.jpg')" :lazy-src="require('@/assets/images/work/'+project.mainFolder+'/'+project.windowImage+'.jpg')" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </div>
          <v-divider v-if="index !== getProjects().length-1" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'"></v-divider>
        </v-container>
      </template>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Project from '@/components/Project.vue';
import projects from '@/assets/data/project';

@Component({
  components: {
    Header,
    Footer,
    Project,
  }
})
class ProjectListView extends Vue {
  detailed = false;
  windowWidth = window.innerWidth;
  get isMobileVersion(): boolean{
    return this.windowWidth <= 800
  }
  mounted(){
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
  getProjects(){
    return projects;
  }
}
export default ProjectListView;
</script>

<style scoped lang="scss">
.project-groups{
  margin-top: 50px;
}
.project{
  margin-bottom: 40px;
}
.group-title{
  margin: auto;
  justify-content: flex-start;
  text-align: start;
}
.v-divider{
  margin: auto;
  margin-top: 50px !important;
}
</style>