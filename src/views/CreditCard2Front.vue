<template>
  <div class="CreditCard2FrontMainDiv">
    <HeaderTextBox title="ADD A NEW BANK" />
    <!-- <Card :msg="childData"/> -->
    <Card3 v-bind="activeCard"/>
    <CardStack />
    <CardForm /> <!-- <CardForm @inputData="updateMessage"/> -->
    
    <!-- <UsrMsg @inputData="updateMessage" /> <Results :msg="childData" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CardForm from "@/components/CredCard2.vue";
import HeaderTextBox from "@/components/Top.vue";

import Card3 from "@/components/Card3.vue";
import CardStack from "@/components/CardStack.vue";



export default {

  HeaderTag: "ADD A NEW BANK",
  components: {
    CardForm,
    HeaderTextBox,
    CardStack,
    Card3
  },
  computed: {
    activeCard: function(){

      /* return this.$root.$data.cardStack[this.$root.$data.activeCardIndex] */
      return this.$root.$data.cardStack[this.$root.$data.activeCardIndexCounter]
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
