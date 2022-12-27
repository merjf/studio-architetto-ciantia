<template>
  <div class="about section">
    <v-card flat tile width="100%" class="text-center">
        <v-img class="me-img" eager src="@/assets/images/me.jpg"></v-img>
        <v-card-text style="white-space: pre-line; margin-top: 50px">
          <span>
            Il mio percorso formativo si orienta verso gli studi tecnici e si completa con il conseguimento della laurea in Architettura presso l’Università degli Studi di Enna “Kore”, trattando in tesi di laurea il tema del recupero e restauro di un rudere dell’archeologia industriale denominato “ex Istituto tecnico Industriale” nel Comune di Piazza Armerina e della valorizzazione delle tradizioni storiche, folcloristiche e culinarie della città.<br/><br/>
            Già all’interno della facoltà ho partecipato a diversi progetti e concorsi di progettazione trovandomi, inoltre, sempre a contatto con il mondo del lavoro collaborando con l’impresa edile di famiglia. Ho arricchito le mie conoscenze con viaggi di istruzione e corsi di formazione approfondendo i miei interessi nel campo della ricerca storica, nell’evoluzione architettonica contemporanea e nelle tecniche restauro. L’attività progettuale si sviluppa prevalentemente nel settore dell’abitativo, del restauro e del retail, oltre alla progettazione di installazioni temporanee e allestimenti per mostre, eventi culturali e spettacoli teatrali.<br/><br/>
            Le mie esperienze lavorative più rilevanti mi hanno visto coinvolto in collaborazioni con il Comune di Piazza Armerina nella progettazione e direzione dei lavori per il restauro della Basilica Cattedrale Maria SS delle Vittorie, progetto della Piazza Garibaldi e intervento di riqualificazione urbana di Via Misericordia. Ho collaborato con lo studio di architettura KWGroup di Catania per la progettazione del nuovo Hilton Hotel di Capomulini (riqualificando la struttura alberghiera dell’ex Perla Jonica), cooperando con professionisti che esercitano la loro professione nel settore del lusso come la stilista Marella Ferrera, l’architetto inglese Tom Russell e il landscape designer tedesco Knud Megerle. Un rilevante progetto è quello per il palco all’interno del Teatro Antico Odeon di Catania, realizzato in occasione degli spettacoli dell’Amenanos Festival del 2019. Dal 2021 ho intrapreso un’importante collaborazione per i refitting dei punti vendita FRETTE in Italia.
          </span>
        </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class Header extends Vue {
}

export default Header;
</script>

<style scoped lang="scss">
.about{
  max-width: 50rem;
  margin: auto;
  padding: 0px;
  margin-bottom: 100px;
  .v-card {
    margin-top: 100px;;
    > * {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
.me-img{
  width: 250px;
  border-radius: 50% !important;;
  margin: auto;
}
</style>
