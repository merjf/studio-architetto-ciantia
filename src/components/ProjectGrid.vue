<template>
    <v-container :key="group.name" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'" :id="group.id" class="project-grid">
        <v-card-title v-if="!isSubgroup" class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
            {{group.name}}
        </v-card-title>
        <v-card-subtitle v-else class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
            {{group.name}}
        </v-card-subtitle>
        <div>
            <v-row justify="center">
                <v-col v-for="project in getProject" :key="project.id" class="d-flex child-flex" cols="4">
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
import { GroupModel, SubProjectModel } from '@/models/models'

@Component
class ProjectGrid extends Vue {
    @Prop() public group!: GroupModel;
    @Prop() public isSubgroup!: boolean;

    windowWidth = window.innerWidth;

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })   
    }
    get getProject(): SubProjectModel[] | undefined {
        return this.group.projects ? this.group.projects as SubProjectModel[] : this.group.subprojects;
    }
}

export default ProjectGrid;
</script>

<style scoped lang="scss">
.project-grid{
    margin-bottom: 40px;
}
</style>
