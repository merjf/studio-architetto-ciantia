<template>
  <div>
    <Header :mainPage="false" :project="project" />
    <div class="section">
      <Project
        :detailed="true"
        :project="project"
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

@Component({
  components: {
    Header,
    Footer,
    Project
  },
})
export default class ProjectView extends Vue {
  
  project : ProjectClass = {
    description: this.$route.params.description,
    title: this.$route.params.title,
    id: parseInt(this.$route.params.id),
    place: this.$route.params.place,
    images: this.$route.params.images as unknown as Array<string | number>
  };
}
</script>

<style scoped lang="scss">

</style>