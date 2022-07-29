 <template>
    <div :id="project.id">
        <div v-if="detailed" class="project-detailed">
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
                <v-sheet elevation="0">
                    <v-slide-group :show-arrows="isMobileVersion ? false : true" ref="projectSlideImages">
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
                    </v-slide-group>
                </v-sheet>
            </v-card>
            <OverlayImage :project="project" :overlay="overlay" :imageOverlay="imageOverlay" @set-overlay="setOverlay" @set-current-image="setCurrentImage" />
        </div>
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
.project-detailed{
    margin-top: 50px;
    .project-card{
        margin-top: 20px;
        margin-bottom: 25px;
    }
    .description{
        margin: 20px 0px;
        font-size: 18px;
    }
    .image{
        cursor: pointer;
    }
    .image:hover{
        cursor: pointer;
    }
}
</style>