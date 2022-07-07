<template>
    <v-menu left bottom :close-on-content-click="false" :close-on-click="true">
        <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="menu" v-bind:style="{position: positionMenu}">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </template>
        <v-list class="menu-list">
            <v-list-item-group>
                <router-link :to="{ name: pages.home.name }">
                    <v-list-item link :key="pages.home.number">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>

                        <v-list-item-title >{{pages.home.value}}</v-list-item-title>
                    </v-list-item>
                </router-link>
                <v-list-group prepend-icon="mdi-briefcase" active-class="active">
                    <template v-slot:activator>
                        <v-list-item-content >
                            <v-list-item-title>Work</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <div style="margin-left: 30px;">
                        <router-link :to="{ name: 'projects' }">
                            <v-list-item link>
                                <v-list-item-title>Projects List</v-list-item-title>
                            </v-list-item>
                        </router-link>
                        <v-divider style="margin: 5px 0px;"/>
                        <router-link v-for="project in projects" :key="project.id" :to="{ name: 'project', params: project }" @click="refresh()">
                            <v-list-item link>
                                <v-list-item-title v-text="project.title"></v-list-item-title>
                            </v-list-item>
                        </router-link>
                    </div>
                </v-list-group>
            </v-list-item-group>
        </v-list>
    </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import projects from '@/assets/data/project';

@Component({
    computed: {
        isPageSelected(){
            console.log(this.$route)
            return true;
        }
    },
    methods:{
        refresh(){
            console.log("dsnao")
            // this.$forceUpdate();
        }
    },
    data() {
        return {
            selectedPage: 1
        }
    }
})
export default class Menu extends Vue {
    @Prop() public positionMenu!: string;
    pages = {
        home: {
            value: "Home",
            name: "home",
            active: true,
            number: 1
        },
        projects: {
            value: "Projects",
            name: "projects",
            active: false,
            number: 2
        }
    };
    projects = projects;
}
</script>

<style scoped lang="scss">
.menu{
    top: 5px;
    left: 5px;
    z-index: 1;
    padding: 20px;
    background-color: $primary-color;
    color: $secondary-color !important;
}
.menu:hover{
    z-index: 1;
    color: $secondary-color !important;
    background-color: $tertiary-color;
}
.v-list-item__title{
    font-size: 1.1rem !important;
}
// .v-list-item:hover{
//     background-color: $tertiary-color !important;
//     color: $secondary-color !important;
//     i{
//         color: $secondary-color !important;
//     }
// }
// .active{
//     background-color: $tertiary-color !important;
//     color: $secondary-color !important;
// }
</style>