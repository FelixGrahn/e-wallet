<template>
  <!-- <div>
      <Card3 v-for="card in cardStack" :key="card.id" v-bind="card" />
  </div> -->
  <div class="cardStack">
        <div 
        v-for="(card3, index) in cardList" :key="index" 
        v-on:click="activateCard(card3)"
        class="stackItems"> 
        <Card3 v-bind:number="card3.number" 
              v-bind:holder="card3.holder"
              v-bind:validMonth="card3.validMonth"
              v-bind:validYear="card3.validYear"
              v-bind:vendor="card3.vendor"
               />
        </div>
    </div>
    
</template>

<script>

import Card3 from "@/components/Card3"

export default {
    name: 'CardStack',
    components: {
      Card3
  },
  computed: {
    cardList() {
      return this.$root.$data.cardStack;
    }
  },
  methods: {
    activateCard(card3) {
/*       console.log("activateCard card fuction")
      console.log("card number " + card3.number)
      console.log("card holder " + card3.holder)
      console.log("card month " + card3.validMonth)
      console.log("card year " + card3.validYear)
      console.log("card vendor " + card3.vendor) */
      this.$root.$data.activeCard.push({number: card3.number, vendor: card3.vendor, holder: card3.holder, validMonth: card3.validMonth, validYear: card3.validYear})
    }
  },
props: {
  cardnumber: String,
  cardholder: String,
  month: String,
  year: String,
  ccv: String,
  vendor: String
},

}
</script>

<style>
.stackItems {
  z-index: 1;
  margin-bottom: -37%;
  backface-visibility: hidden;
}
</style>