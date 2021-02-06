<template>
  <div>
      <Card3 v-for="card in cardStack" :key="card.id" v-bind="card" />
  </div>
</template>

<script>

import Card3 from "@/components/Card3"

export default {
    components: {
        Card3
    },
    computed: {

        cardStack: function() {
            return  this.$root.$data.cardStack;
        }
    },

}
</script>

<style>

</style>