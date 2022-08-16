<template>
    <v-overlay :value="overlay" :z-index="100" opacity="0.9">
        <div>
            <v-carousel continuous show-arrows-on-hover v-click-outside="closeOverlay" hide-delimiter-background>
                <v-carousel-item v-for="(item, i) in getImages()" :key="i" :src="require('@/assets/images/work/' + getMainFolder() + '/' + item + '.jpg')"></v-carousel-item>
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
    created() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeOverlay();
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
}

export default OverlayImage;
</script>

<style scoped lang="scss">
.v-carousel{
    max-height: 90vh !important;
    max-width: 90vw !important;
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
.indexing{
    position: fixed;
    bottom: 0px;
    left: 48%;
}
</style>
