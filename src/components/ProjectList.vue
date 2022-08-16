<template>
    <v-container :key="group.name" v-if="group.type==='group'" class="project-list">
        <v-card-title class="group-title">
            {{group.name}}
        </v-card-title>
        <div v-if="group.projects">
            <div class="project-group-list" v-for="project in group.projects" :key="project.id">
                <v-card class="mx-auto project-card" :elevation="0">
                    <router-link :to="{ name: 'project', params: project }">
                        <v-card-title>{{project.title}}</v-card-title>
                    </router-link>
                    <v-row width="100%">
                        <v-col :key="project.cover" class="d-flex child-flex" :cols="isMobileVersion ? 12 : 12">
                            <!-- <v-lazy :options="{threshold: .5}" min-height="200" transition="fade-transition"> -->
                                <router-link :to="{ name: 'project', params: project }">
                                    <v-hover>
                                        <template v-slot:default="{ hover }">
                                            <v-img :src="getProjectImage(project.mainFolder, project.cover)" aspect-ratio="1">
                                                <template v-slot:placeholder>
                                                    <v-row class="fill-height ma-0" align="center" justify="center" >
                                                        <v-progress-circular indeterminate color="grey lighten-9"></v-progress-circular>
                                                    </v-row>
                                                </template>
                                                <v-fade-transition>
                                                    <v-overlay v-if="hover" absolute color="#1e1e1e8a"/>
                                                </v-fade-transition>
                                            </v-img>
                                        </template>
                                    </v-hover>
                                </router-link>
                            <!-- </v-lazy> -->
                        </v-col>
                    </v-row>
                </v-card>
            </div>
        </div>
        <ProjectGrid v-if="group.subgroup" :group="group.subgroup" :isSubgroup="true" />
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
