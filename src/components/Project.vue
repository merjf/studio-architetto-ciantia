 <template>
    <div :id="project?.id" class="project">
        <v-card class="mx-auto" elevation="0" :max-width="isMobileVersion ? '95vw' : '75vw'">
            <v-card-title>
                {{project?.title}}
            </v-card-title>
            <v-card-text class="project-card">
                <div class="text-subtitle-1" >
                    <a :href="'https://www.google.com/maps/search/?api=1&query='+project?.place">
                        <v-icon>mdi-map-marker</v-icon>{{project?.place}}
                    </a>
                </div>
                <p class="description" style="font-size: 0.875rem">{{project?.description}}</p>
            </v-card-text>
            <div class="gallery">
                <div class="gallery-panel" v-for="index in getImageNumber()" :key="index">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 6 : 1">
                                <v-lazy :options="{threshold: .5}">
                                    <v-img class="image" :src="getProjectImage(project.mainFolder, index)" @click="openOverlay(index)">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center" >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-fade-transition>
                                            <v-overlay v-if="hover" absolute color="#1e1e1e8a"/>
                                        </v-fade-transition>
                                    </v-img>
                                </v-lazy>
                            </v-card>
                        </template>
                    </v-hover>
                </div>
            </div>
        </v-card>
        <OverlayImage :project="project" :overlay="overlay" :imageOverlay="imageOverlay" @set-overlay="setOverlay"/>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import OverlayImage from '@/components/OverlayImage.vue';
import { GroupModel, ProjectModel } from '@/models/models'
import projects from '@/assets/data/project';

@Component({
    components:{
        OverlayImage
    }
})
class Project extends Vue {
    @Prop() public project!: ProjectModel;

    windowWidth = window.innerWidth;
    overlay = false;
    imageOverlay = 0;

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    setOverlay(value:boolean){
        this.overlay = value;
    }
    setCurrentImage(imageNumber:number){
        this.imageOverlay = imageNumber;
    }

    @Watch('project')
    public (newProject: ProjectModel, oldProject: ProjectModel) {
        var result = /[0-9]+/.exec(this.$route.path);
        if(result && result.length > 0){
            var currentProjectId = parseInt(result[0]);
            projects.forEach((group: GroupModel) => {
                group.projects?.forEach(project => {
                    if(project.id === currentProjectId){
                        this.project = project as ProjectModel;
                    }
                })
            })
        }
        if(this.$refs.projectSlideImages){
            (this.$refs.projectSlideImages as any).scrollOffset = 0;
        }
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
        var result = /[0-9]+/.exec(this.$route.path);
        if(result && result.length > 0){
            var currentProjectId = parseInt(result[0]);
            projects.forEach((group: GroupModel) => {
                group.projects?.forEach(project => {
                    if(project.id === currentProjectId){
                        this.project = project as ProjectModel;
                    }
                })
            })
        }
    }
    getProjectImage(mainFolder : string, imageNumber : number){
        if(mainFolder && imageNumber){
            return require("@/assets/images/work/" + mainFolder + "/" + imageNumber + ".webp");
        }
        return "";
    }
    getImageNumber(){
        return this.project?.imageNumber ? this.project?.imageNumber : 0;
    }
    getParams(){
        return this.project;
    }
    openOverlay(imageNumber: number){
        this.overlay = true;
        this.imageOverlay = imageNumber;
    }
}
export default Project;
</script>

<style scoped lang="scss">
.project{
    margin-top: 70px;
    margin-bottom: 100px;
    .project-card{
        margin-top: 20px;
        margin-bottom: 25px;
    }
    .v-card__title{
        font-size: 1.9rem;
        font-weight: 600;
    }
    .description{
        margin: 20px 0px;
        font-size: 18px;
    }
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-gap: 1rem;
        max-width: 95vw;
        margin: 5rem auto;
        margin-top: 0px;
        padding: 0 5rem;
    }
    .gallery-panel{
        .image {
            cursor: pointer;
            width: 100%;
            height: 22vw;
            object-fit: cover;
            border-radius: 0.75rem;
        }
    }
}
@media screen and (max-width: 1180px) {
    .project .gallery {
        grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
        padding: 0 2rem;
    }
}
@media screen and (max-width: 820px) {
    .project{
        margin-top: 25px;
    }
    .project .gallery {
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        padding: 0 2rem;
    }
}
@media screen and (max-width: 600px) {
    .project{
        margin-top: 50px;
    }
    .project .gallery {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 2fr));
        padding: 0 1rem;
        .gallery-panel .image{
            height: 40vw;
        }
    }
}
</style>