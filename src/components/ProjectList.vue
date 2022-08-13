<template>
    <v-container :key="group.name" v-if="group.type==='group'" class="project-list">
        <v-card-title class="group-title">
            {{group.name}}
        </v-card-title>
        <div v-if="group.projects">
            <div class="project-group-list" v-for="project in group.projects" :key="project.id">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card class="mx-auto project-card" :elevation="hover ? 6 : 0">
                            <router-link :to="{ name: 'project', params: project }">
                                <v-card-title>{{project.title}}</v-card-title>
                                <v-row width="100%">
                                    <v-col v-for="index in isMobileVersion ? 1 : 1" :key="index" class="d-flex child-flex" :cols="isMobileVersion ? 12 : 12">
                                        <v-img :src="getProjectImage(project.mainFolder, index)" aspect-ratio="1" class="grey lighten-2">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center" >
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                            <v-fade-transition>
                                                <v-overlay v-if="hover" absolute color="#cedee2de"/>
                                            </v-fade-transition>
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </router-link>
                        </v-card>
                    </template>
                </v-hover>
            </div>
        </div>
        <ProjectGrid v-if="group.subgroup" :group="group.subgroup" :isSubgroup="true" />
        <!-- <v-container v-if="group.subgroup" :style="{maxWidth: isMobileVersion ? '85vw' : '55vw'}" :id="group.subgroup.id" class="subgroup">
            <v-card-subtitle class="group-title" :style="isMobileVersion ? 'max-width:85vw' : 'max-width:55vw'">
                {{group.subgroup.name}}
            </v-card-subtitle>
            <v-row justify="center">
                <v-col v-for="subproject in group.subgroup.subprojects" :key="subproject.id" class="d-flex child-flex" cols="4">
                    <v-img :src="require('@/assets/images/work/'+subproject.mainFolder+'/'+subproject.windowImage+'.jpg')" :lazy-src="require('@/assets/images/work/'+subproject.mainFolder+'/'+subproject.windowImage+'.jpg')" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
        </v-container> -->
    </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ProjectGrid from '@/components/ProjectGrid.vue';
import { GroupModel } from '@/models/models'

@Component({
    components:{
        ProjectGrid
    }
})
class ProjectList extends Vue {
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
    getProjectImage(mainFolder : string, imageNumber : number){
        return require("@/assets/images/work/" + mainFolder + "/" + imageNumber + ".jpg");
    }
}

export default ProjectList;
</script>

<style scoped lang="scss">
.project-list{
    max-width: 55vw;
}
.project-group-list{
    max-width: 50vw;
    margin: auto;
    margin-bottom: 40px;
    .v-card__actions{
        position: absolute;
        right: 10px;
        bottom: 15px;
    }
    
    .project-card{
        padding: 10px;
        .v-image{
            cursor: pointer;
            height: 70vh;
        }
    }
    .v-card__title{
        word-break: break-word;
    }
}
.subgroup{
    margin-bottom: 40px !important;
}
.group-title{
    font-size: 2rem !important;
}
@media screen and (max-width: 1180px) {
    .project-list{
        max-width: 85vw;
        .project-group-list{
            max-width: 75vw;
        }
    }
}
@media screen and (max-width: 820px) {
    .project-list{
        max-width: 85vw;
        .project-group-list{
            max-width: 75vw;
        }
    }
}
@media screen and (max-width: 600px) {
    .project-list{
        max-width: 95vw;
        .project-group-list{
            max-width: 90vw;
            .project-card .v-image{
                height: 50vh !important;
            }
        }
    }
}
</style>
