<template>
  <div class="CreditCard2FrontMainDiv">
    <HeaderTextBox title="E-WALLET" />
      <p>ACTIVE CARD</p>
    <Card3 v-bind="activeCard" />
    <CardStack />
    <Buttons />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTextBox from "@/components/Top.vue";
import Card3 from "@/components/Card3.vue";
import CardStack from "@/components/CardStack.vue";
import Buttons from "@/components/AddCard.vue";

export default {
  components: {
    HeaderTextBox,
    Card3,
    CardStack,
    Buttons
    /* Test */
  },
  computed: {

    activeCard: function(){

      /* return this.$root.$data.cardStack[this.$root.$data.activeCardIndex] */
      /* return this.$root.$data.cardStack[this.$root.$data.activeCardIndexCounter] */
      return this.$root.$data.activeCard
      
    }
  }
};
</script>

<style>
.CreditCard2FrontMainDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
