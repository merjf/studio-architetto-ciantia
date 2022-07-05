<template>
  <div class="home">
    <Header />
    <About />
    <v-divider></v-divider>
    <Projects />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';
import projects from '../assets/data/project';

@Component({
  components: {
    Header,
    Footer,
    About,
    Projects
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
hr{
  margin: 20px 0px;
}
</style>