<template>
  <v-footer absolute :padless="true" class="text-center">
    <v-card flat tile width="100%" class="text-center white--text">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon.name" class="mx-4 white--text" icon>
          <v-icon large>
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-title style="justify-content: center;">
        Contacts
      </v-card-title>
      <v-card-text class="white--text">
        <span style="display: block;"> e-mail: <b>salvociantia@gmail.com</b> </span>
        <span style="display: block;"> phone: <b>+39 370 121 2833</b> </span>
      </v-card-text>

      <!-- <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Salvatore Ciantia</strong>
      </v-card-text> -->
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  icons = [{
    name: 'mdi-facebook',
    link: ''
  }, {
    name: 'mdi-twitter',
    link: ''
  }, {
    name: 'mdi-linkedin',
    link: ''
  }, {
    name: 'mdi-instagram',
    link: ''
  }]
}
</script>

<style scoped lang="scss">
footer{
  .v-card{
    background-color: #ae1026 !important;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  hr{
    border-color: rgba(255, 255, 255, .55) !important;
    margin: auto;
    width: 35vw;
  }
  .v-icon{
    border-radius: 50%;
    padding: 20px;
  }
  .v-icon:hover{
    padding: 20px;
    border-radius: 50%;
    background-color: white;
    color: #ae1026 !important;
  }
}
</style>
