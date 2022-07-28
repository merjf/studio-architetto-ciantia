<template>
    <v-container :key="group.name" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'" :id="group.id" class="project-grid">
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
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GroupModel } from '@/models/models'

@Component
class ProjectGrid extends Vue {
    @Prop() public group!: GroupModel;

    windowWidth = window.innerWidth;

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })   
    }
}

export default ProjectGrid;
</script>

<style scoped lang="scss">
.project-grid{
    margin-bottom: 40px;
}
</style>
