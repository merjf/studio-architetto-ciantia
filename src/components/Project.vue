 <template>
    <div :id="project.id" class="project">
        <v-card class="mx-auto" elevation="0" :max-width="isMobileVersion ? '95vw' : '75vw'">
            <v-card-title v-if="!isMobileVersion">
                {{project.title}}
            </v-card-title>
            <v-card-text class="project-card">
                <div class="text-subtitle-1" >
                    {{project.place}}
                </div>
                <p class="description">{{project.description}}</p>
            </v-card-text>
            <!-- <v-sheet elevation="0"> -->
                <!-- <v-slide-group :show-arrows="isMobileVersion ? false : true" ref="projectSlideImages">
                    <v-slide-item v-for="index in getImageNumber()" :key="index" class="ma-4">
                        <v-hover>
                            <template v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 6 : 1">
                                    <v-img height="300" width="300" class="image" :src="getProjectImage(project.mainFolder, index)" :lazy-src="getProjectImage(project.mainFolder, index)" @click="openOverlay(index)">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center" >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-fade-transition>
                                            <v-overlay v-if="hover" absolute color="#cedee2de"/>
                                        </v-fade-transition>
                                    </v-img>
                                </v-card>
                            </template>
                        </v-hover>
                    </v-slide-item>
                </v-slide-group> -->
            <!-- </v-sheet> -->
            <div class="gallery">
                <div class="gallery-panel" v-for="index in getImageNumber()" :key="index">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card :elevation="hover ? 6 : 1">
                                <v-img class="image" :src="getProjectImage(project.mainFolder, index)" :lazy-src="getProjectImage(project.mainFolder, index)" @click="openOverlay(index)">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center" >
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                    <v-fade-transition>
                                        <v-overlay v-if="hover" absolute color="#cedee2de"/>
                                    </v-fade-transition>
                                </v-img>
                            </v-card>
                        </template>
                    </v-hover>
                </div>
            </div>
        </v-card>
        <OverlayImage :project="project" :overlay="overlay" :imageOverlay="imageOverlay" @set-overlay="setOverlay" @set-current-image="setCurrentImage" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import OverlayImage from '@/components/OverlayImage.vue';
import { ProjectModel } from '@/models/models'

@Component({
    components:{
        OverlayImage
    }
})
class Project extends Vue {
    @Prop() public detailed!: boolean;
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
        if(this.$refs.projectSlideImages){
            (this.$refs.projectSlideImages as any).scrollOffset = 0;
        }
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    }
    getProjectImage(mainFolder : string, imageNumber : number){
        return require("@/assets/images/work/" + mainFolder + "/" + imageNumber + ".jpg");
    }
    getImageNumber(){
        return this.project.imageNumber;
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
    margin-top: 50px;
    margin-bottom: 100px;
    .project-card{
        margin-top: 20px;
        margin-bottom: 25px;
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
    .project .gallery {
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        padding: 0 2rem;
    }
}
@media screen and (max-width: 600px) {
    .project .gallery {
        grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
        padding: 0 1rem;
    }
}
</style>