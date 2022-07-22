<template>
  <v-footer absolute :padless="true" class="text-center">
     <v-card flat tile width="100%" class="text-center white--text">
      <v-row justify="center" no-gutters>
        <v-img src="@/assets/images/logo_simple.png" class="logo"/>
        <span>{{ new Date().getFullYear() }} - Salvatore Ciantia Architetto</span>
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
        max-width: 60px !important;
        margin-right: 10px;
      }
      span{
        font-size: .875rem;
        font-weight: bold;
        line-height: 1.375rem;
        letter-spacing: .0071428571em;
      }
    }
  }
}
</style>
