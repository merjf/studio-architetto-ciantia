<template>
    <v-overlay :value="overlay" :z-index="100" opacity="0.9">
        <div>
            <v-carousel continuous :show-arrows="!isMobileVersion" :show-arrows-on-hover="true" v-click-outside="closeOverlay" hide-delimiter-background v-model="getImageOverlay" height="100vh">
                <v-carousel-item v-for="(item, i) in getImages()" :key="i">
                    <v-img :src="require('@/assets/images/work/' + getMainFolder() + '/' + item + '.webp')" contain></v-img>
                </v-carousel-item>
            </v-carousel>
        </div>
    </v-overlay>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ProjectModel, SubProjectModel } from '@/models/models'

@Component
class OverlayImage extends Vue {
    @Prop() public overlay!: boolean;
    @Prop() public project!: ProjectModel;
    @Prop() public projects!: SubProjectModel[];
    @Prop() public imageOverlay!: number;

    windowWidth = window.innerWidth;

    get isMobileVersion(): boolean{
        return this.windowWidth <= 800
    }
    get getImageOverlay(): number{
        if(this.project){
            return this.imageOverlay-1;
        }
        if(this.projects){
            return this.imageOverlay/2-1;
        }
        return 0;
    }
    set getImageOverlay(value: number){
        if(value < 0)
            this.getImageOverlay = value;
    }
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeOverlay();
            }
            if (e.key === 'ArrowRight') {
                this.nextImage();
            }
            if (e.key === 'ArrowLeft') {
                this.previousImage();
            }
        });
    }
    mounted(){
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth
        })   
    }
    closeOverlay(){
        this.$emit('set-overlay', false);
    }
    getImages(){
        if(this.project){
            return Array.from({length:this.project.imageNumber},(v,k)=>k+1)
        }
        if(this.projects){
            return Array.from({length:this.projects.length},(v,k)=>(k+1)*2)
        }
    }
    getMainFolder(){
        if(this.project){
            return this.project.mainFolder
        }
        if(this.projects && this.projects.length > 0){
            return this.projects[0].mainFolder
        }
    }
    nextImage(){
        const nextButton = document.querySelector('.v-window__next button') as HTMLElement | null;
        if(nextButton){
            nextButton.click();
        }
    }
    previousImage(){
        const prevButton = document.querySelector('.v-window__prev button') as HTMLElement | null;
        if(prevButton){
            prevButton.click();
        }
    }
}

export default OverlayImage;
</script>

<style scoped lang="scss">
.v-carousel{
    max-width: 100vw;
    margin: auto;
}
.v-image{
    max-width: 100%;
    max-height: 95vh;
    margin: auto;
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
@media screen and (max-height: 460px) {
    .v-carousel{
        height: 400px !important;
        max-width: 90%;
    }
}
@media screen and (max-width: 600px){
    .v-carousel{
        height: 650px !important;
    }
}
</style>
