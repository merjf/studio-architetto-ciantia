<template>
  <div>
    <Header :page="'projectList'" />
    <div class="section">
      <Project v-for="item in getProjects()" v-bind:key="item.id"
        :detailed="false"
        :project="item"
        class="project"
      />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProjectClass from '@/models/models'
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
  project : ProjectClass = {
    description: this.$route.params.description,
    title: this.$route.params.title,
    id: parseInt(this.$route.params.id),
    place: this.$route.params.place,
    images: this.$route.params.images as unknown as Array<string>
  };
  getProjects(){
    return projects;
  }
}
export default ProjectListView;
</script>

<style scoped lang="scss">
.project{
  margin-bottom: 40px;
}
</style>