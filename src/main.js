import Vue from "vue";
import App from "./App.vue";
import router from "./router";


Vue.config.productionTip = false;

new Vue({

  data: function () {


    return {
      activeCardIndex: 2,
      activeCardIndexCounter: "1",
      cardStack: [
        {
          id: "432984728397",
          holder: "Card 0",
          vendor: "bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5",
          CCV: "349"
        },
        {
          id: "432984728398",
          holder: "Card 1",
          vendor: "bitcoin",
          number: "98791651684ZZZZFFFF",
          validMonth: "12",
          validDay: "5",
          CCV: "359"
        }
      ]
    }

  },

  router,
  render: h => h(App)
}).$mount("#app");
