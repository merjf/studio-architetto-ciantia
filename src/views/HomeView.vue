<template>
  <div class="home">
    <Header :page="'main'"/>
    <About />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import About from '@/components/About.vue';
import projects from '@/assets/data/project';

@Component({
  components: {
    Header,
    Footer,
    About,
  }
})
class Home extends Vue {
  getProjects(){
    return projects;
  }
}

export default Home;
</script>

<style scoped>
hr{
  margin: 20px 0px;
}
</style>