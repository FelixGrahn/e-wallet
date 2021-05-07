<template>
  
  <div :class="'CardBack -' + vendor">
      <div class="ImageContainer">

          <div class="ChipImage">
              <img src="../assets/chip-light.svg" />
          </div>

          <div class="VendorLogo">
      <img v-if="vendor == 'Bitcoin'" src="../assets/vendor-bitcoin.svg"/>
      <img v-else-if="vendor == 'BlockChain'" src="../assets/vendor-blockchain.svg"/>
      <img v-if="vendor == 'Ninja'" src="../assets/vendor-ninja.svg"/>
      <img v-if="vendor == 'EvilCorp'" src="../assets/vendor-evil.svg"/>
          </div>

      </div>

      <div class="CardNumberContainer">
          <!-- <p>CARD NUMBER</p> -->
          <div class="CardNumber">
              {{number}}
          </div>

      </div>

      <div class="ValidNameHolder">
      <div class="Card_Holder_name">
          <p class="P_Tag_Header">CARD HOLDER</p>
          <p class="Card_Holder_name_Holder">{{holder}}</p>
          
      </div>
      <div class="Valid_throu">
          <p class="P_Tag_Header">VALID THRU</p>
          <p class="Card_Holder_name_Holder">{{validMonth + "/" + validYear}}</p>
          
      </div>
      </div>
  </div>
</template>
<!-- {{number}}{{vendor}} -->

<script>
export default {

props:{

    id: String,
    holder: String,
    vendor: String,
    number: String,
    validMonth: String,
    validYear: String,
    CCV: String
}
}
</script>

<style>
.CardBack {
    display: flex;
    width: 400px;
    height: 200px;
    background-color: rgb(194, 194, 194);
    flex-direction: column;
    margin: 3px;
    border-radius: 4%;
}
.CardBack.-Bitcoin {
background-color: rgba(185, 175, 36, 0.637);
}
.CardBack.-BlockChain {
background-color: rebeccapurple;
}
.CardBack.-Ninja {
  background-color: rgb(110, 110, 110);
  
}
.CardBack.-EvilCorp {
background-color: red;
}
.ValidNameHolder {
    display: flex;
    width: 95%;
    height: 25%;
    align-self: center;
    place-content: space-between;
    /* margin: 3% 5%; */
}

.Valid_throu {
    display: flex;
    /* background-color: chartreuse; */
    font-size: 60%;
    /* justify-content: center; */
    align-items: flex-end;
    flex-direction: column;
    /* align-self: flex-end; */
    
}
.Card_Holder_name {
    display: flex;
    /* background-color: rgba(95, 126, 65, 0.459); */
    font-size: 60%;
    /* justify-content: center; */
    align-items: flex-start;
    flex-direction: column;
    /* align-self: flex-end; */
}
.CardNumberContainer {
    display: flex;
    width: 95%;
    height: 30%;
    /* background-color: brown; */
    font-size: 229%;
    align-self: center;
    justify-content: center;
    /* align-items: flex-start; */
    flex-direction: column;   
}
.ImageContainer {
    display: flex;
    width: 95%;
    height: 40%;
    /* background-color: yellow; */
    align-self: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
}
.ChipImage {
    height: 100%;
    margin: 0 3%;
}
.CardNumber {
    margin: -2% 0;
}
.VendorLogo {
    display: flex;
    /* background-color: wheat; */
    /* font-size: 60%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column; */
    align-self: flex-end;
    margin-top: -20%;
}
.ChipImage {
    display: flex;
    /* background-color: goldenrod; */
    /* font-size: 60%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column; */
    align-self: flex-start;
    margin-top: -7%;
}
.Card_Holder_name_Holder {
/* background-color: goldenrod; */
    font-size: x-large;
    margin: 24% -2%;
}
.P_Tag_Header {
/* background-color: hotpink; */
    margin-bottom: -24%;
    font-weight: 900;
}


</style>