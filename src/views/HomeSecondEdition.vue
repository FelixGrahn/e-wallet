<template>
  <div class="CreditCard2FrontMainDiv">
    <HeaderTextBox title="E-WALLET" />
    <Card3 v-bind="activeCard" />
    <!-- <Test/> -->

  <p>
    card stack
  </p>

<CardStack />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTextBox from "@/components/Top.vue";
import Card3 from "@/components/Card3.vue";
import CardStack from "@/components/CardStack.vue";


export default {
  components: {
    HeaderTextBox,
    Card3,
    CardStack
    /* Test */
  },
  computed: {

    activeCard: function(){

      return this.$root.$data.cardStack[this.$root.$data.activeCardIndex]
      /* return this.$root.$data.cardStack[this.$root.$data.activeCardIndexCounter + 1] */
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
