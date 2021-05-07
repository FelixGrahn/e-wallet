import Vue from "vue";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;

new Vue({

  data: function () {


    return {
      activeCardIndex: 0,
      activeCard: [
        {
          id: "",
          holder: "FIRSTNAME LASTNAME",
          vendor: "Bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "MM",
          validYear: "YY",
          CCV: ""
        }
      ],
      activeCardIndexCounter: "1",
      cardStack: [
        {
          id: "432984728397",
          holder: "Card 0",
          vendor: "Bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validYear: "5",
          CCV: "349"
        },
        {
          id: "432984728398",
          holder: "Card 1",
          vendor: "Ninja",
          number: "1234567891012134",
          validMonth: "11",
          validYear: "32",
          CCV: "359"
        },
        {
          id: "432984728399",
          holder: "Card 3",
          vendor: "BlockChain",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "10",
          validYear: "18",
          CCV: "367"
        },
        {
          id: "432984728340",
          holder: "Card 4",
          vendor: "EvilCorp",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "09",
          validYear: "12",
          CCV: "888"
        }
      ]
    }

  },

  router,
  render: h => h(App)
}).$mount("#app");
