<template>
  <div class="CardFormMainDiv">


<p>Card_Number is: {{ Card_Number }}</p>
<p>CardHolder_Name is: {{ CardHolder_Name }}</p>
<!-- <p>Valid_thru is: {{ Valid_thru }}</p> -->
<p>CCV is: {{ CCV }}</p>
<!-- <p>Vendor is: {{ selected }}</p> -->
    
    
    
    
  <label for="Card_Number">Card_Number:</label>
  <input type="number" onKeyPress="if(this.value.length==16) return false;"  v-model="Card_Number" />

    <label for="CardHolder_Name">CardHolder_Name:</label>
    <input type="text" v-model="CardHolder_Name" />
    
    <div class="Valid_thru/CCV">
    
    <!-- <input type="number" onKeyPress="if(this.value.length==4) return false;" v-model="Valid_thru" /> -->
    <p>
      <label for="Valid_thru">Valid_thru:</label>
    
    <select v-model="Valid_thruMonth">
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
    <select v-model="Valid_thruDay">
      <option value="01">01</option>
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
      <option value="20">20</option>
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
    {{Valid_thruMonth + "/" + Valid_thruDay}}
  </p>

    <label for="CCV">CCV:</label>
    <input type="number" onKeyPress="if(this.value.length==3) return false;" v-model="CCV" />
    </div>

    
 <p>
   <label for="Vendor">Vendor:</label>
    <select v-model="selected">
      <option value="Bitcoin">Bitcoin Inc</option>
      <option value="Ninja">Ninja Bank</option>
      <option value="BlockChain">Block Chain Inc</option>
      <option value="EvilCorp">Evil Corp</option>
    </select>
    {{selected}}
  </p>
  


    <button v-on:click="SubmitYourData()">SubmitYourData</button>
    <!-- <button v-on:click="Submit()">Submit</button> -->


  </div>
</template>

<script>


/* import ArryayCount from  "@/App.vue"; */

export default {
  data() {
    return {
      /* CarInfo: {
        Card_Number: "",
      CardHolder_Name: "",
      Valid_thru: "",
      CCV: "",
      selected: "",
      }, */
      /* tempMessage: "", */
      Card_Number: "",
      CardHolder_Name: "",
      Valid_thruMonth: "",
      Valid_thruDay: "",
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
        this.$root.$data.cardStack.push({number: this.Card_Number, vendor: this.selected, holder: this.CardHolder_Name, validMonth: this.Valid_thruMonth, validDay: this.Valid_thruDay, CCV: this.CCV,})
        this.$root.$data.activeCardIndex= this.$root.$data.activeCardIndex + 1;
    }/* ,activeCardIndexCounter */
  },
};
</script>

<style>
.Header {
color: brown;
}

</style>
