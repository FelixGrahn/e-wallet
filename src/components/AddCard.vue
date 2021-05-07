<template>
<div class="buttonMainDiv">

  <button class="addCardButton" v-on:click="$router.push('/CreditCard')">ADD CARD</button>

</div>
</template>

<script>
</script>

<style>
.buttonMainDiv {
    margin-top: 30%;
}
.addCardButton {
    background-color: black;
    padding: 0.9375em 3.125em;
    border-radius: 10px;
    border-width: 1px;
    color: white;
}
</style>