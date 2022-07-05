<template>
  <v-footer absolute :padless="true" class="text-center">
    <v-card flat tile width="100%" class="black text-center white--text">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon  >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-title style="justify-content: center;">
        Contacts
      </v-card-title>
      <v-card-text class="white--text">
        <span style="display: block;"> email: abce@efgd.com </span>
        <span style="display: block;"> phone: +39 123 45678 </span>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Salvatore Ciantia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
}
</script>

<style scoped lang="scss">
footer{
  bottom: -300px !important;
}
</style>
