<template>
  <div class="about section">
    <v-card flat tile width="100%" class="text-center">
        <v-img class="me-img" src="@/assets/images/me.jpg"></v-img>
        <v-card-text style="white-space: pre-line;">
          <span>
          <!-- <pre> -->
            Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso l’Università degli Studi di Enna “kore”, trattando in tesi di laurea il tema del recupero dell’ex Istituto tecnico Industriale di Piazza Armerina e della valorizzazione delle tradizioni storiche, folcloristiche e culinarie della città.
            Già all’interno della facoltà ho partecipato a diversi progetti e concorsi di progettazione trovandomi, inoltre, sempre a contatto con il mondo del lavoro collaborando con l’impresa edile di famiglia. Ho arricchito le mie conoscenze con viaggi di istruzione e corsi di formazione approfondendo i miei interessi nel campo della ricerca storica, nell’evoluzione architettonica contemporanea e nelle tecniche restauro.
            Le mie esperienze lavorative più rilevanti mi hanno visto coinvolto in collaborazione con il Comune di Piazza Armerina nella direzione dei lavori per il restauro del monumento dedicato al “Calvario” e per la manutenzione straordinaria della scuola media Capuana sita all’interno dell’ex convento dei Gesuiti del 1600.
            Inoltre ho collaborato con lo studio di architettura KWGroup di Catania per la progettazione del nuovo Hilton Hotel di Capomulini (riqualificando la struttura alberghiera dell’ex Perla Jonica), cooperando con professionisti che esercitano la loro professione nel settore del lusso come la stilista Marella Ferrera, l’architetto inglese Tom Russell e il landscape designer tedesco Knud Megerle.
          <!-- </pre> -->
          </span>
        </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class Header extends Vue {
  @Prop() private msg!: string;
}

export default Header;
</script>

<style scoped lang="scss">
.about{
  margin-right: 15vw;
  margin-left: 15vw;
  padding: 0px;
  .v-card >*{
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.me-img{
  width: 250px;
  border-radius: 50% !important;;
  margin: auto;
}
</style>
