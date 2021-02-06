<template>
  
  <div class="CardBack">
      <!-- <button v-on:click="handleColorChoice()">SubmitYourData</button> -->
      <div class="ImageContainer">

          <div class="ChipImage">
              <img src="../assets/chip-light.svg" />
          </div>

          <div class="VendorLogo"></div>

      </div>

      <div class="CardNumberContainer">
          <p>CARD NUMBER</p>
          <div class="CardNumber">
              {{number}}
          </div>

      </div>

      <div class="ValidNameHolder">
      <div class="Card_Holder_name">
          <p>CARD HOLDER</p>
          {{holder}}
      </div>
      <div class="Valid_throu">
          <p>VALID THRU</p>
          {{validMonth + "/" + validDay}}
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
    validDay: String,
    CCV: String
}/* ,
handleColorChoice() {
    this.color = this.colorChosen;
    document.body.className = this.color;
    this.$root.$emit('body-background-color', this.colorChosen);
    if (vendor == "Bitcoin") {
        this.color = 'bc-header-red';
    }
    else if(vendor == "Bitcoin")  {
        this.color = 'bc-header-red';
    }
    else if(vendor == "Bitcoin") {
        this.color = 'bc-header-red';
    }
    else if(vendor == "Bitcoin") {
        this.color = 'bc-header-red';
    }
    else {
        
    }
    this.color = 'bc-header-red';
    document.body.CardBack = this.color;
    
} */
}
</script>

<style>
.CardBack {
    display: flex;
    width: 400px;
    height: 200px;
    background-color: cadetblue;
    flex-direction: column;
    margin: 3px;

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
    background-color: chartreuse;
    font-size: 60%;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    /* align-self: flex-end; */
    
}
.Card_Holder_name {
    display: flex;
    background-color: rgba(95, 126, 65, 0.459);
    font-size: 60%;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* align-self: flex-end; */
}
.CardNumberContainer {
    display: flex;
    width: 95%;
    height: 30%;
    background-color: brown;
    font-size: 70%;
    align-self: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;   
}
.ImageContainer {
    display: flex;
    width: 95%;
    height: 40%;
    background-color: yellow;
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


</style>