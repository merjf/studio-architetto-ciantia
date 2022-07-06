 <template>
    <div :id="project.id">
        <div v-if="detailed"> <!-- PROJECT PAGE -->
            <v-card class="mx-auto" elevation="0" max-width="75vw">
                <v-card-text>
                    <div class="text-subtitle-1" >
                        {{project.place}}
                    </div>
                    <p class="description">{{project.description}}</p>
                </v-card-text>
                <v-sheet elevation="8">
                    <v-slide-group v-model="model" class="pa-4" show-arrows>
                        <v-slide-item v-for="image in getImages()" :key="image" class="ma-4">
                            <v-hover>
                                <template v-slot:default="{ hover }">
                                    <v-img height="300" width="300" :src="getProjectImage(image)" :lazy-src="getProjectImage(image)" @click="openOverlay(image)">
                                        <template v-slot:placeholder>
                                            <v-row class="fill-height ma-0" align="center" justify="center" >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-row>
                                        </template>
                                        <v-fade-transition>
                                            <v-overlay v-if="hover" absolute color="#cedee2de"/>
                                        </v-fade-transition>
                                    </v-img>
                                </template>
                            </v-hover>
                        </v-slide-item>
                    </v-slide-group>
                </v-sheet>
            </v-card>
            <v-overlay :value="overlay" :z-index="100">
                <div >
                </div>
                <v-btn class="overlay-btn" relative right>
                    <v-icon>
                        mdi-chevron-right
                    </v-icon>
                </v-btn>
                <v-btn class="overlay-btn" relative left>
                    <v-icon>
                        mdi-chevron-left
                    </v-icon>
                </v-btn>
                <v-btn class="overlay-btn" fixed top right @click="overlay = false">
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                <v-img :src="getOverlayImage()" max-height="90vh" max-width="90vw">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center" >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-overlay>
        </div>
        <div v-else> <!-- MAIN PAGE -->
                <v-card class="mx-auto" elevation="0" max-width="55vw">
                    <router-link :to="{ name: 'project', params: getParams() }">
                        <v-card-title>{{project.title}}</v-card-title>
                        <v-row>
                            <v-col v-for="index in getImages().slice(0, 3)" :key="index" class="d-flex child-flex" cols="4">
                                <v-img height="200" :src="getProjectImage(index)" aspect-ratio="1" class="grey lighten-2">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                    </router-link>
                    <!-- <v-card-text>
                        <div class="text-subtitle-1">
                            {{project.place}}
                        </div>
                        <div>{{project.description}}</div>
                    </v-card-text> -->
                    <!-- <v-card-actions>
                        <router-link :to="{ name: 'project', params: getParams() }">
                            <v-icon large>
                                mdi-chevron-right
                            </v-icon>
                        </router-link>
                    </v-card-actions> -->
                </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProjectModel from '@/models/models'

@Component
export default class Project extends Vue {
    @Prop() public detailed!: boolean;
    @Prop() public project!: ProjectModel;

    model = null;
    overlay = false;
    imageOverlay = "";

    getOverlayImage() {
        return this.imageOverlay ? require("@/assets/images/" + this.imageOverlay + ".jpg") : "";
    }
    getProjectImage(index : string | number){
        return require("../assets/images/" + index + ".jpg");
    }
    getImages(){
        return this.project.images;
    }
    getParams(){
        return this.project;
    }
    openOverlay(image: string){
        this.overlay = true;
        this.imageOverlay = image;
    }
}

</script>

<style scoped lang="scss">
.v-card__actions{
    position: absolute;
    right: 10px;
    bottom: 15px;
}
.overlay-btn{
    min-width: auto !important;
    border-radius: 50%;
    height: 30px !important;
    width: 30px !important;
    background-color: white !important;
    color: #ae1026 !important;
}
.overlay-btn:hover{
    background-color: #ae1026 !important;
    color: white !important;
}
// .v-icon{
//     border-radius: 50%;
//     background-color: #ae1026;
//     color: white !important;
// }
// .v-icon:hover{
//     border-radius: 50%;
//     background-color: white;
//     color: #ae1026 !important;
//     border: 1px solid #ae1026;
// }
.description{
    margin: 20px 0px;
    font-size: 18px;
}
</style>