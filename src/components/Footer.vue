<template>
  <v-footer absolute :padless="true" class="text-center">
    <!-- <v-card flat tile width="100%" class="text-center white--text">
      <v-row justify="center">
        <v-col cols="1" style="align-self: center;">
          <v-img src="@/assets/images/logo.png" class="logo"></v-img>
        </v-col>
        <v-col cols="2">
          <v-card-title style="justify-content: center;font-size:30px;">
            Contacts
          </v-card-title>
          <v-card-text class="white--text">
            <span style="display: block;">salvociantia@gmail.com</span>
            <span style="display: block;">+39 370 121 2833</span>
          </v-card-text>
        </v-col>
      </v-row>

    <v-divider></v-divider>

      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon.name" class="mx-4 white--text" icon @click="goToPage(icon.link)">
          <v-icon large>
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Salvatore Ciantia</strong>
      </v-card-text>
    </v-card> -->
     <v-card flat tile width="100%" class="text-center white--text">
      <v-row justify="center" no-gutters>
        <v-img src="@/assets/images/logo.png" class="logo"/>
        <strong class="subheading">Salvatore Ciantia Architetto</strong>
      </v-row>
     </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
class Footer extends Vue {
  
}

export default Footer;
</script>

<style scoped lang="scss">
footer{
  .v-card{
    background-color: $primary-color !important;
    padding-top: 15px;
    padding-bottom: 15px;
    .row{
      align-items: center;
      .logo{
        max-width: 70px !important;
      }
    }
  }
  hr{
    border-color: rgba(255, 255, 255, .55) !important;
    margin: auto;
    margin-top: 5px;
    width: 30vw;
  }
  .v-icon{
    border-radius: 50%;
    padding: 20px;
  }
  .v-icon:hover{
    padding: 25px;
    border-radius: 50%;
    background-color: $tertiary-color;
    color: $secondary-color !important;
  }
}
</style>
