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
                <v-col v-for="project in getProjects" :key="project.id" class="d-flex child-flex" cols="4">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card class="mx-auto" :elevation="hover ? 8 : 0">
                                <v-img :src="require('@/assets/images/work/'+project.mainFolder+'/'+project.windowImage+'.jpg')" :lazy-src="require('@/assets/images/work/'+project.mainFolder+'/'+project.windowImage+'.jpg')" aspect-ratio="1" class="grey lighten-2 image" @click="openOverlay(project.zoomedImage)">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </div>
        <OverlayImage :projects="getProjects" :overlay="overlay" :imageOverlay="imageOverlay" @set-overlay="setOverlay" @set-current-image="setCurrentImage" />
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import OverlayImage from '@/components/OverlayImage.vue';
import { GroupModel, SubProjectModel } from '@/models/models';

@Component({
    components:{
        OverlayImage
    }
})
class ProjectGrid extends Vue {
    @Prop() public group!: GroupModel;
    @Prop() public isSubgroup!: boolean;

    windowWidth = window.innerWidth;
    overlay = false;
    imageOverlay = 0;

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    get getProjects(): SubProjectModel[] | undefined {
        return this.group.projects ? this.group.projects as SubProjectModel[] : this.group.subprojects;
    }

    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })   
    }

    setOverlay(value:boolean){
        this.overlay = value;
    }
    setCurrentImage(imageNumber:number){
        this.imageOverlay = imageNumber;
    }
    openOverlay(imageNumber: string){
        this.overlay = true;
        this.imageOverlay = parseInt(imageNumber);
    }
}

export default ProjectGrid;
</script>

<style scoped lang="scss">
.project-grid{
    margin-bottom: 40px;
}
.image{
    cursor: pointer;
}
.image:hover{
    cursor: pointer;
}
</style>
