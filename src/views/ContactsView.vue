<template>
  <div>
    <Header :page="'contacts'" />
    <v-container class="section contacts">
        <v-img src="@/assets/images/contatti.jpg" class="contact-img"/>
        <v-row>
            <v-card class="mx-auto my-12" elevation="0">
                <v-card-text>
                    <div><a :href="'mailto:'+ email" class="contact-info">{{email}}</a></div>
                    <div><a href="tel:+393701212833" class="contact-info">+39 370 1212833</a></div>
                </v-card-text>
                <v-divider class="mx-4"></v-divider>
                <v-card-actions center="true">
                    <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" icon @click="goToPage(icon.link)">
                        <v-icon large>
                            {{ icon.name }}
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
    components:{
        Header,
        Footer
    }
})
class Contacts extends Vue {
    icons = [{
        name: 'mdi-facebook',
        link: 'https://www.facebook.com/salvatore.ciantia.3'
    }, {
    //   name: 'mdi-twitter',
    //   link: ''
    // }, {
        name: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/salvatore-ciantia-6a904699/'
    }, {
        name: 'mdi-instagram',
        link: 'https://www.instagram.com/salvatore_ciantia_architetto/'
    }]
    email = 'studioarchitettociantia@gmail.com'
    goToPage(link : string){
        window.open(link);
    }
}

export default Contacts;
</script>

<style scoped lang="scss">
.contacts{
    margin-top: 50px;
}
.v-card__actions{
    justify-content: center;
    margin-bottom: 30px;
}
.v-card{
    width: 45vw;
    min-height: 40vh;
}
.v-card__text{
    text-align: center;
    margin-top: 25px;
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: .0071428571em;
    white-space: nowrap;
}
hr{
    margin: 15px 0px;
}
.contact-info:hover{
    color: white !important;
}
.row{
    margin-top: 55vh;
}
.contact-img{
    position: absolute;
    top: 50px;
    left: 10%;
    width: 80%;
    height: 60vh;
}
.v-btn:hover{
    background-color: $secondary-color !important;
    color: $tertiary-color !important;
}
@media screen and (max-width: 1180px) {
    .contact-img{
        height: 45vh;
        top: 100px;
    }
    .row{
        margin-top: 50vh;
    }
    .v-card{
        width: 50vw;
    }
}
@media screen and (max-width: 820px) {
    .contact-img{
        height: auto;
        top: 100px;
    }
    .row{
        margin-top: 45vh;
    }
    .v-card{
        width: 90vw;
    }
}
@media screen and (max-width: 600px) {
  .contact-img{
        height: auto;
        top: 100px;
        left: 2%;
        width: 96%;
    }
    .row{
        margin-top: 35vh;
    }
    .v-card{
        width: 90vw;
    }
}
</style>