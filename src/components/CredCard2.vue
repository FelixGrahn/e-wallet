<template>
  <div class="CardFormMainDiv">

<!-- <p>Card_Number is: {{ Card_Number }}</p>
<p>CardHolder_Name is: {{ CardHolder_Name }}</p> -->
<!-- <p>Valid_thru is: {{ Valid_thru }}</p> -->
<!-- <p>CCV is: {{ CCV }}</p> -->
<!-- <p>Vendor is: {{ selected }}</p> -->
    
    
    <!-- "'CardBack -' + vendor" -->

    <div class="Cardnumber_CardholderFlexContainer">
    <div class="FormHeaderPlacer">
  <label for="Card_Number">CARD NUMBER</label>
  <input type="number" onKeyPress="if(this.value.length==16) return false;"  v-model="Card_Number" v-on:input="updateCardnumber()"/></div>

    <div class="FormHeaderPlacer">
    <label for="CardHolder_Name" >CARDHOLDER NAME</label>
    <input type="text" onKeyPress="if(this.value.length==21) return false;" v-model="CardHolder_Name" v-on:input="updateCardholder()"/></div>
    </div>

    <div class="Cardnumber_CardholderFlexContainer">
    <div class="FormHeaderPlacer">
    <label for="Valid_thru">VALID THRU</label>
    <p class="Valid_thruFlex_Fixer">
    <select v-model="Valid_thruMonth" v-on:change="updateCardvalidMonth()">
      <option value="01">Januari</option>
      <option value="02">Februari</option>
      <option value="03">Mars</option>
      <option value="04">April</option>
      <option value="05">Maj</option>
      <option value="06">Juni</option>
      <option value="07">Juli</option>
      <option value="08">Augusti</option>
      <option value="09">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
    <select v-model="Valid_thruYear" v-on:change="updateCardvalidYear()">
<!--       <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option> -->
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
    </select>
    <!-- {{Valid_thruMonth + "/" + Valid_thruYear}} -->
  </p>
  </div>

<div class="FormHeaderPlacer">
    <label for="CCV">CCV</label>
    <input type="number" onKeyPress="if(this.value.length==3) return false;" v-model="CCV" v-on:input="updateCardCCV()"/>
    </div></div>

 <div class="VendorFlexPlacer"> 
 <p class="FormHeaderPlacer">
   <label for="Vendor">VENDOR</label>
    <select v-model="selected" v-on:change="updateCardvendor()">
      <option value="Bitcoin">Bitcoin Inc</option>
      <option value="Ninja">Ninja Bank</option>
      <option value="BlockChain">Block Chain Inc</option>
      <option value="EvilCorp">Evil Corp</option>
    </select>
  </p>
  </div>  
  


    <button v-on:click="SubmitYourData()" class="SubmitButton">ADD CARD</button>
    <!-- <button v-on:click="Submit()">Submit</button> -->


  </div>
</template>

<script>


export default {
  data() {
    return {
      Card_Number: "",
      CardHolder_Name: "",
      Valid_thruMonth: "",
      Valid_thruYear: "",
      CCV: "",
      selected: "",
    } 
  },
  props: {
    
    
  },
  methods: {
    SubmitYourData: function() {
      /* alert(`
        ${this.Card_Number}
        ${this.CardHolder_Name}
        ${this.Valid_thruMonth}
        ${this.CCV}
        ${this.selected}
        `), */
        this.$root.$data.cardStack.push({number: this.Card_Number, vendor: this.selected, holder: this.CardHolder_Name, validMonth: this.Valid_thruMonth, validYear: this.Valid_thruYear, CCV: this.CCV,})
        this.$root.$data.activeCardIndex= this.$root.$data.activeCardIndex + 1;
        this.$router.push('/Test')
    },
    updateCardnumber: function() {
      this.$root.$data.activeCard.push({number: this.Card_Number})
      console.log("reached updateCardnumber");
    },
    updateCardvendor: function() {
      console.log("reached updateCardvendor " + this.selected);
      this.$root.$data.activeCard.push({vendor: this.selected})
    },
    updateCardholder: function() {
      console.log("reached updateCardholder");
      this.$root.$data.activeCard.push({holder: this.CardHolder_Name})
    },
    updateCardvalidMonth: function() {
      console.log("reached updateCardvalidMonth");
      this.$root.$data.activeCard.push({validMonth: this.Valid_thruMonth})
    },
    updateCardvalidYear: function() {
      console.log("reached updateCardvalidYear");
      this.$root.$data.activeCard.push({validYear: this.Valid_thruYear,})
    },
    updateCardCCV: function() {
      console.log("reached updateCardCCV");
      this.$root.$data.activeCard.push({CCV: this.CCV,})
    }
  },
  components: {
    /* Card3 */

  }
};
</script>

<style>
.Header {
color: black;
}
.SubmitButton {
    background-color: white;
    border-radius: 5px;
    width: 41%;
    padding: 0.9375em 3.125em;
}
input, textarea, select {
  padding: 14px 10px;
  border-radius: 10px;
  border-width: 1px;
}
.CardFormMainDiv {
  border: 2px solid black;
  width: 95%;
  padding: 1%;
}
.FormHeaderPlacer {
  display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2%;
}
.Valid_thruFlex_Fixer {
  display: flex;
}
.Cardnumber_CardholderFlexContainer {
    display: flex;
    justify-content: space-evenly
}
.VendorFlexPlacer {
  display: flex;
    justify-content: center;
}

</style>
