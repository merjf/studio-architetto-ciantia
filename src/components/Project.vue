<template>
    <div :id="id">
        <div v-if="detailed">
            <v-card class="mx-auto" elevation="0" max-width="70vw">
                <v-card-title>{{title}}</v-card-title>
                <v-card-text>
                    <div class="text-subtitle-1">
                        {{place}}
                    </div>
                    <div>{{description}}</div>
                </v-card-text>
            </v-card>
        </div>
        <div v-else>
            <v-card class="mx-auto" elevation="0" max-width="55vw">
                <v-row no-gutters>
                    <v-col v-for="index in getImages()" :key="index" cols="12" sm="4">
                        <v-card class="pa-2" outlined tile>
                            <v-img height="200" :src="getProjectImage(index)"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
                <v-card-title>{{title}}</v-card-title>
                <v-card-text>
                    <div class="text-subtitle-1">
                        {{place}}
                    </div>
                    <div>{{description}}</div>
                </v-card-text>
                <v-card-actions>
                    <router-link :to="{ name: 'project', params: getParams() }">
                        <v-icon large color="blue">
                            mdi-chevron-right
                        </v-icon>
                    </router-link>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: {
        id: Number,
        detailed: Boolean,
        title: String,
        description: String,
        place: String,
        images: Array
    },
    methods: {
        getProjectImage(index){
            console.log("../assets/images/" + index + ".jpg");
            return require("../assets/images/" + index + ".jpg");
        },
        getImages(){
            return this.$props.images;
        },
        getParams(){
            return {
                id: this.$props.id,
                title: this.$props.title,
                description: this.$props.description,
                place: this.$props.place,
                images: this.$props.images
            }
        }
    },
})
export default class Project extends Vue {}
</script>

<style scoped lang="scss">
.v-card__actions{
    position: absolute;
    right: 10px;
    bottom: 5px;
}
a{
    text-decoration: none;
    
}
.v-icon{
    border-radius: 50%;
}
.v-icon:hover{
    border-radius: 50%;
    background-color: #2196f3;
    color:white !important;
}
</style>