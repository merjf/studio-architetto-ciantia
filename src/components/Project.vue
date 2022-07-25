 <template>
    <div :id="project.id">
        <div v-if="detailed" class="project-detailed"> <!-- PROJECT DETAILED PAGE -->
            <v-card class="mx-auto" elevation="0" :max-width="isMobileVersion ? '95vw' : '75vw'">
                <v-card-text class="project-card">
                    <div class="text-subtitle-1" >
                        {{project.place}}
                    </div>
                    <p class="description">{{project.description}}</p>
                </v-card-text>
                <v-sheet elevation="0">
                    <v-slide-group v-model="model" :show-arrows="isMobileVersion ? false : true">
                        <v-slide-item v-for="index in getImageNumber()" :key="index" class="ma-4">
                            <v-hover>
                                <template v-slot:default="{ hover }">
                                    <v-card :elevation="hover ? 6 : 1">
                                        <v-img height="300" width="300" class="image" :src="getProjectImage(project.mainFolder, index)" :lazy-src="getProjectImage(project.mainFolder, index)" @click="openOverlay(project.mainFolder, index)">
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
            <v-overlay :value="overlay" :z-index="100" opacity="0.9">
                <div >
                    <v-btn class="overlay-btn" fixed right style="top:50%" @click="nextImage()">
                        <v-icon large>
                            mdi-chevron-right
                        </v-icon>
                    </v-btn>
                    <v-btn class="overlay-btn" fixed left style="top:50%" @click="previousImage()">
                        <v-icon large>
                            mdi-chevron-left
                        </v-icon>
                    </v-btn>
                    <v-btn class="overlay-btn" fixed top right @click="overlay = false">
                        <v-icon large>
                            mdi-close
                        </v-icon>
                    </v-btn>
                    <v-img :src="getImageOverlay()" max-height="90vh" max-width="90vw">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center" >
                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                </div>
            </v-overlay>
        </div>
        <div v-else class="project-item"> <!-- PROJECT LIST PAGE -->
            <v-hover>
                <template v-slot:default="{ hover }">
                    <v-card class="mx-auto project-card" :max-width="isMobileVersion? '85vw' : '55vw'" :elevation="hover ? 6 : 0">
                        <router-link :to="{ name: 'project', params: getParams() }">
                            <v-card-title>{{project.title}}</v-card-title>
                            <v-row>
                                <v-col v-for="index in isMobileVersion ? 1 : 3" :key="index" class="d-flex child-flex" :cols="isMobileVersion ? 12 : 4">
                                    <v-img height="200" :src="getProjectImage(project.mainFolder, index)" aspect-ratio="1" class="grey lighten-2">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center">
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-col>
                            </v-row>
                        </router-link>
                    </v-card>
                </template>
            </v-hover>
            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ProjectModel } from '@/models/models'

@Component
class Project extends Vue {
    @Prop() public detailed!: boolean;
    @Prop() public project!: ProjectModel;

    windowWidth = window.innerWidth;
    model = null;
    overlay = false;
    imageOverlay = "";

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }

    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })
    }

    getImageOverlay() {
        return this.imageOverlay ? require("@/assets/images/work/" + this.imageOverlay + ".jpg") : "";
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
    openOverlay(mainFolder: string, imageNumber: number){
        this.overlay = true;
        this.imageOverlay = mainFolder + "/" + imageNumber;
    }
    nextImage(){
        const images = this.project.imageNumber ? new Array(this.project.imageNumber) : [];
        let index = images.indexOf(this.imageOverlay) > - 1 ? images.indexOf(this.imageOverlay) + 1 : 0;
        index = index > images.length-1 ? 0 : index;
        this.imageOverlay = images[index];
    }
}
export default Project;
</script>

<style scoped lang="scss">
.project-item{
    .v-card__actions{
        position: absolute;
        right: 10px;
        bottom: 15px;
    }
    .project-card{
        padding: 10px;
        .v-image{
            cursor: pointer;
        }
    }
    // .project-card:hover{
    //     // background-color: rgba($tertiary-color, 0.5) !important;
    //     border: 1px solid rgba($tertiary-color, 0.5);
    //     border-radius: 10px;
        
    //     // .v-card__title{
    //     //     color: $secondary-color !important;
    //     // }
    // }
    .v-card__title{
        word-break: break-word;
    }
}
.project-detailed{
    margin-top: 75px;
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
    .overlay-btn{
        min-width: auto !important;
        border-radius: 50%;
        height: 40px !important;
        width: 40px !important;
        background-color: $secondary-color !important;
        color: $primary-color !important;
    }
    .overlay-btn:hover{
        background-color: $tertiary-color !important;
        color: $secondary-color !important;
    }
}
</style>