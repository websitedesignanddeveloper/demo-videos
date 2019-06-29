var config = {
  // config here
  videoUrl: "./app/img/payzapp-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".4",
      target: "name",
      split: {
        separator: "",
        time: ".4",
        splitTime: ".04"
      }
    },
    {
      id: "text1",
      class: "charlie",
      animations: "animate-text1",
      times: "1",
      text: "this is your Electricity bill",
      split: {
        separator: "",
        time: "1",
        splitTime: ".04"
      }
    },
    {
      id: "text2",
      class: "charlie",
      animations: "animate-text2",
      times: "4.8",
      text: "who comes with a payment of",
      split: {
        separator: "",
        time: "4.8",
        splitTime: ".02"
      }
    },
    {
      id: "bill-text",
      class: "charlie",
      animations: "animate-bill-text",
      times: "5.8",
      target: "billText",
      split: {
        separator: "",
        time: "5.8",
        splitTime: ".02"
      }
    },
    {
      id: "text3",
      class: "charlie",
      animations: "animate-text3",
      times: "22.8",
      text: "Pay your Electricity bill with",
    },
    {
      id: "save-text",
      class: "charlie",
      animations: "animate-save-text",
      times: "22.8"
    },
    {
      tag: "div",
      class: "img-div",
      bgImg: "imgUrl",
      parent: "#save-text"
    },
    {
      tag: "span",
      class: "save-text-span",
      text: " and save Rs. ",
      parent: "#save-text"
    },
    {
      tag: "span",
      class: "save-text-span",
      target: "saveAmount",
      parent: "#save-text"
    },
    {
      id: "text4",
      class: "charlie",
      animations: "animate-text4",
      times: "29",
      text: "Your Electricity bill amount",
      split: {
        separator: "",
        time: "29",
        splitTime: ".02"
      }
    },
    {
      id: "bill-amount",
      class: "charlie",
      animations: "animate-bill-amount",
      times: "29.58",
      target: "billAmount",
      split: {
        separator: "",
        time: "29.58",
        splitTime: ".02"
      }
    },
    {
      id: "text5",
      class: "charlie",
      animations: "animate-text5",
      times: "29.68",
      text: "5% CashBack* ",
      split: {
        separator: "",
        time: "29.68",
        splitTime: ".02"
      }
    },
    {
      id: "text5a",
      class: "charlie",
      animations: "animate-text5a",
      times: "29.96",
      text: "via PayZapp",
      split: {
        separator: "",
        time: "29.96",
        splitTime: ".02"
      }
    },
    {
      id: "save-amount",
      class: "charlie",
      animations: "animate-save-amount",
      times: "30.2",
      target: "saveAmount",
      split: {
        separator: "",
        time: "30.2",
        splitTime: ".02"
      }
    },
    {
      id: "text6",
      class: "charlie",
      animations: "animate-text6",
      times: "30.26",
      text: "The amount you pay",
      split: {
        separator: "",
        time: "30.26",
        splitTime: ".02"
      }
    },
    {
      id: "pay-amount",
      class: "charlie",
      animations: "animate-pay-amount",
      times: "30.62",
      target: "payAmount",
      split: {
        separator: "",
        time: "30.62",
        splitTime: ".02"
      }
    },
    {
      id: "bill-type",
      class: "charlie",
      animations: "animate-bill-type",
      times: "33",
      target: "billTypeText1",
      split: {
        separator: "",
        time: "33",
        splitTime: ".02"
      }
    },
    {
      id: "text7",
      class: "charlie",
      animations: "animate-text7",
      times: "46"
    },
    {
      tag: "span",
      class: "save-text7",
      text: "Now use ",
      split: {
        separator: "",
        time: "46",
        splitTime: ".02"
      },
      parent: "#text7"
    },
    {
      tag: "div",
      class: "img-div1",
      bgImg: "imgUrl",
      parent: "#text7"
    },
    {
      tag: "span",
      class: "save-text7",
      text: " and",
      split: {
        separator: "",
        time: "46.18",
        splitTime: ".02"
      },
      parent: "#text7"
    },
    {
      id: "bill-type1",
      class: "charlie",
      animations: "animate-bill-type1",
      times: "46.28",
      target: "billTypeText2",
      split: {
        separator: "",
        time: "46.28",
        splitTime: ".02"
      }
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href',pictor.data.link);
});