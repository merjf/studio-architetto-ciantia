<template>
  <v-footer absolute :padless="true" class="text-center">
    <v-card flat tile width="100%" class="text-center white--text">
      <!-- <v-divider></v-divider> -->
      <v-row justify="center" no-gutters>
        <router-link :to="{ name: 'home'}">
          <v-img eager src="@/assets/images/logo_simple.png" class="logo"/>
        </router-link>
        <!-- <span>{{ new Date().getFullYear() }} - Salvatore Ciantia Architetto</span> -->
      </v-row>
     </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components:{
  }
})
class Footer extends Vue {
  
}

export default Footer;
</script>

<style scoped lang="scss">
footer{
  .v-card{
    padding-top: 15px;
    padding-bottom: 15px;
    .v-divider{
      margin-bottom: 10px;
    }
    .row{
      align-items: center;
      .logo{
        max-width: 35px !important;
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
