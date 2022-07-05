<template>
  <div class="project section">
    <Project
      :detailed="true"
      :id="getId()"
      :title="getTitle()"
      :description="getDescription()"
      :place="getPlace()"
      :images="getImages()"
    />
    <router-link :to="{ name: 'home' }">Back to Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Project from '../components/Project.vue';

@Component({
  components: {
    Project
  },
  methods:{
    getDescription() {
      return this.$route.params.description
    },
    getTitle() {
      return this.$route.params.title
    },
    getImages() {
      return this.$route.params.images
    },
    getPlace() {
      return this.$route.params.place
    },
    getId() {
      return this.$route.params.id
    }
  }
})
export default class ProjectView extends Vue {}
</script>
