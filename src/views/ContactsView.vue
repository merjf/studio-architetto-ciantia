<template>
  <div class="contacts">
    <Header :page="'contacts'" />
    <v-container class="section">
        <v-row>
            <v-card class="mx-auto my-12" max-width="90vw" elevation="0">
            <v-img src="@/assets/images/15.jpg" class="contact-img"/>
            <v-card-text>
                <div><a href="mailto:salvatore.ciantia@gmail.com">salvatore.ciantia@gmail.com</a></div>
                <div>+39 340 12345678</div>
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
    goToPage(link : string){
        window.open(link);
    }
}

export default Contacts;
</script>

<style scoped lang="scss">
.v-card__actions{
    justify-content: center;
}
.v-card__text{
    text-align: center;
    margin-top: 25px;
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: .0071428571em;
}
hr{
    margin: 15px 0px;
}
.contact-img{
    width: 40vw;
}
.v-btn:hover{
    background-color: $secondary-color !important;
    color: $tertiary-color !important;
}
@media screen and (max-width: 1180px) {
  .contact-img{
    width: 60vw;
  }
}
@media screen and (max-width: 820px) {
  .contact-img{
    width: 90vw;
  }
}
@media screen and (max-width: 600px) {
  .contact-img{
    width: 90vw;
  }
}
</style>