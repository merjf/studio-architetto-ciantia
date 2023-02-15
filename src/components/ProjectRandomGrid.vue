<template>
    <div class="project-grid">
        <div class="item" v-for="project in projects" :key="project.id" v-bind:style="assignGridItemStyle(project)">
            <router-link :to="{ name: 'project', params: project }" >
                <div v-bind:style="assignGridImageStyle(project)">
                </div>
                <!-- <v-img :src="require('@/assets/images/work/'+project.mainFolder+'/'+project.cover+'.webp')"
                    :lazy-src="require('@/assets/images/work/'+project.mainFolder+'/'+project.cover+'.webp')"
                    aspect-ratio="1"
                    cover
                    class="item"
                    >   
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey-lighten-5" />
                            </v-row>
                        </template>
                </v-img> -->
            </router-link>
        </div>
       
    </div>
</template>

<script lang="ts">
import { ProjectModel } from '@/models/models';
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
    components:{
    }
})
class ProjectRandomGrid extends Vue {
    @Prop() public projects!: ProjectRandomGrid[];

    mounted(){
        console.log(this.projects)
    }
    assignGridItemStyle(project:ProjectModel){
        switch(project.orientation) { 
            case "square": { 
                return {
                    gridColumn: "auto/span 1",
                    gridRow: "auto/span 1"
                }
            } 
            case "horizontal": { 
               return {
                    gridColumn: "auto/span 2",
                    gridRow: "auto/span 1"
                }
            }
            case "vertical": { 
                return {
                    gridColumn: "auto/span 1",
                    gridRow: "auto/span 2"
                }
            }
        }
    }
    assignGridImageStyle(project:ProjectModel){
        return {"background-image": require('@/assets/images/work/'+project.mainFolder+'/'+project.cover+'.webp')}
    }
}

export default ProjectRandomGrid;
</script>

<style scoped lang="scss">
.project-grid{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding-right: 10px;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 1280px;
    .item{
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        height: 30%;
        a div{
            text-decoration: none;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            display: block;
            position: relative;
        }
    }
}
</style>