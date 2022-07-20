<template>
  <div class="contacts">
    <Header :page="'contacts'" />
    <div class="section">
        <v-card class="mx-auto my-12" max-width="50vw" elevation="0">
            <v-img  src="@/assets/images/16.jpg" />
            <v-card-text>
                <div>salvatore.ciantia@gmail.com</div>
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
    </div>
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
.section{
    .v-card__actions{
        justify-content: center;
    }
}
</style>