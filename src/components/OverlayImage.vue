<template>
    <v-overlay :value="overlay" :z-index="100" opacity="0.9">
        <div>
            <v-btn class="overlay-btn" fixed right :style="isMobileVersion ? 'bottom:10%' : 'top:50%'" @click="nextImage()">
                <v-icon large>
                    mdi-chevron-right
                </v-icon>
            </v-btn>
            <v-btn class="overlay-btn" fixed left :style="isMobileVersion ? 'bottom:10%' : 'top:50%'" @click="previousImage()">
                <v-icon large>
                    mdi-chevron-left
                </v-icon>
            </v-btn>
            <v-btn class="overlay-btn" fixed top right @click="closeOverlay()">
                <v-icon large>
                    mdi-close
                </v-icon>
            </v-btn>
            <span class="indexing">
                {{getIndexing}}
            </span>
            <v-img :src="getCurrentImage()" max-height="90vh" max-width="90vw">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center" >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </div>
    </v-overlay>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ProjectModel } from '@/models/models'

@Component
class OverlayImage extends Vue {
    @Prop() public overlay!: boolean;
    @Prop() public project!: ProjectModel;
    @Prop() public imageOverlay!: number;

    windowWidth = window.innerWidth;

    get getIndexing(): string{
        return this.imageOverlay + "/" + this.project.imageNumber;
    }
    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })   
    }
    closeOverlay(){
        this.$emit('set-overlay', false);
    }
    getCurrentImage() {
        return this.imageOverlay ? require("@/assets/images/work/" + this.project.mainFolder + "/" + this.imageOverlay + ".jpg") : "";
    }
    nextImage(){
        const images = this.project.imageNumber ? Array.from({length:this.project.imageNumber},(v,k)=>k+1) : [];
        let index = images.indexOf(this.imageOverlay) > - 1 ? images.indexOf(this.imageOverlay) + 1 : 0;
        index = index > images.length-1 ? 0 : index;
        this.$emit('set-current-image', images[index]);
    }
    previousImage(){
        const images = this.project.imageNumber ? Array.from({length:this.project.imageNumber},(v,k)=>k+1) : [];
        let index = images.indexOf(this.imageOverlay) > - 1 ? images.indexOf(this.imageOverlay) - 1 : 0;
        index = index < 0 ? images.length-1 : index;
        this.$emit('set-current-image', images[index]);
    }
}

export default OverlayImage;
</script>

<style scoped lang="scss">
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
.indexing{
    position: fixed;
    bottom: 10px;
    left: 48%;
}
</style>
