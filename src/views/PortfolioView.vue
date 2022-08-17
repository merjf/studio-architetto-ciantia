<template>
  <div class="portfolio-view">
    <Header :page="'projectList'"/>
    <div class="section project-groups">
      <template v-for="(group, index) in getProjects()">
        <ProjectList v-if="group.type==='group'" :key="group.name" :group="group"/>
        <!-- <ProjectGrid v-if="group.type==='grid'" :key="group.name" :group="group" :isSubgroup="false"/> -->
        <v-divider :key="index" v-if="index !== getProjects().length-1" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'"></v-divider>
      </template>
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
import projects from '@/assets/data/project';

@Component({
  components: {
    Header,
    Footer,
    ProjectList,
    ProjectGrid
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