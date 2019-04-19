var config = {
  // config here
  videoUrl: "./app/img/easy-emi-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "greeting",
      class: "charlie",
      animations: "animate-greeting",
      times: "3",
      text: "Dear",
      split: {
        separator: "",
        time: "3",
        sepTime: ".1"
      }
    }, 
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "3",
      target: "name",
      split: {
        separator: "",
        time: "3",
        sepTime: ".1"
      }
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "32",
      hrefTarget: "link",
      newWindow: "true"
    },
    {
      id: "text1",
      class: "charlie",
      animations: "animate-text1",
      times: "32",
      text: "Avail your pre-approved",
      split: {
        separator: "",
        time: "32",
        sepTime: ".05"
      }
    },
    {
      id: "text2",
      class: "charlie",
      animations: "animate-text2",
      times: "33",
      text: "loan amount of",
      split: {
        separator: "",
        time: "33",
        sepTime: ".05"
      }
    },
    {
      id: "text3",
      class: "charlie",
      animations: "animate-text3",
      times: "33.8",
      target: "loan",
      split: {
        separator: "",
        time: "33.8",
        sepTime: ".05"
      }
    },
    {
      id: "text4",
      class: "charlie",
      animations: "animate-text4",
      times: "34.5",
      text: "on your HDFC Bank",
      split: {
        separator: "",
        time: "34.5",
        sepTime: ".03"
      }
    },
    {
      id: "text5",
      class: "charlie",
      animations: "animate-text5",
      times: "34.6",
      target: "cardType",
      split: {
        separator: "",
        time: "34.6",
        sepTime: ".03"
      }
    },
    {
      id: "text6",
      class: "charlie",
      animations: "animate-text6",
      times: "34.7",
      text: "ending ",
      split: {
        separator: "",
        time: "34.7",
        sepTime: ".03"
      }
    },
    {
      tag: "span",
      id: "text6a",
      target: "cardNumber",
      split: {
        separator: "",
        time: "34.75",
        sepTime: ".03"
      },
      parent: "#text6"
    },
    {
      id: "text7",
      class: "charlie",
      animations: "animate-text7",
      times: "34.8",
      text: "with ",
      split: {
        separator: "",
        time: "34.8",
        sepTime: ".03"
      }
    },
    {
      tag: "span",
      id: "text8",
      text: "E a s y",
      split: {
        separator: "",
        time: "34.85",
        sepTime: ".03"
      },
      parent: "#text7"
    },
    {
      tag: "span",
      id: "text9",
      text: "EMI",
      split: {
        separator: "",
        time: "34.9",
        sepTime: ".03"
      },
      parent: "#text7"
    },
    {
      id: "cashback1",
      class: "charlie",
      animations: "animate-cashback1",
      times: "43.5",
      target: "cashback1"
    },
    {
      id: "cashback2",
      class: "charlie",
      animations: "animate-cashback2",
      times: "45.5",
      target: "cashback2"
    },
    {
      id: "cashback3",
      class: "charlie",
      animations: "animate-cashback3",
      times: "47.5",
      target: "cashback3"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });