<template>
    <div class="section">
        <h1>
            Projects
        </h1>
        <Project v-for="item in getProjects()" v-bind:key="item.id"
            :detailed="false"
            :id="item.id"
            :title="item.title"
            :description="item.description"
            :place="item.place"
            :images="item.images"
            class="project"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Project from '../components/Project.vue';
import projects from '../assets/data/project';

@Component({
  components: {
    Header,
    Footer,
    Project,
  },
  methods: {
    getProjects(){
      return projects;
    }
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
h1{
    text-align:center;
    margin-bottom: 50px;
}
.project{
    margin-bottom: 20px;
}
</style>