<template>
  <div class="portfolio-view">
    <Header :page="'projectList'"/>
    <div class="section project-groups">
      <ProjectRandomGrid :projects="getProjects()" /> 
      <!-- <template v-for="(group, index) in getProjects()">
        <ProjectList v-if="group.type==='group'" :key="group.name" :group="group"/>
        <v-divider :key="index" v-if="index !== getProjects().length-1" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'"></v-divider>
      </template> -->
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectList from '@/components/ProjectList.vue';
import ProjectGrid from '@/components/ProjectGrid.vue';
import ProjectRandomGrid from '@/components/ProjectRandomGrid.vue'
import projects from '@/assets/data/project';
import { GroupModel, ProjectRandomGridModel } from '@/models/models';

@Component({
  components: {
    Header,
    Footer,
    ProjectList,
    ProjectGrid,
    ProjectRandomGrid,
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
    var groups:GroupModel[] = projects;
    var randomProjects: ProjectRandomGridModel[] = [], i = 0;
    for(let group of groups){
      for(let project of group.projects){
        if(project.projects){
          randomProjects.push({
            id: i++,
            mainFolder: project.projects[0].mainFolder,
            cover: project.cover,
            title: group.name,
            description: project.name,
            orientation: project.orientation,
            order: project.order,
          })
        } else {
          randomProjects.push({
            id: i++,
            mainFolder: project.mainFolder,
            cover: project.cover,
            title: project.title,
            description: project.description,
            orientation: project.orientation,
            order: project.order,
          })
        }
      }
    }
    randomProjects = randomProjects.sort((a, b) => a.order - b.order)
    return randomProjects;
  }
}
export default ProjectListView;
</script>

<style scoped lang="scss">
.portfolio-view{
  margin-bottom: 150px;
}
.project-groups{
  margin-top: 75px;
}
.v-divider{
  margin: auto;
}
</style>