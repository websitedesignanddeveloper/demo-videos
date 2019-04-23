
var config = {
  // config here
  videoUrl: "./app/img/easy-emi2-empty.mp4",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".1",
      target: "name",
      split: {
        separator: "",
        time: ".1",
        sepTime: ".05"
      }
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "18",
      hrefTarget: "link",
      newWindow: "true"
    },
    {
      id: "loan",
      class: "charlie",
      animations: "animate-loan",
      times: "19.1"
    },
    {
      tag: "span",
      text: "Rs. ",
      parent: "#loan"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#loan"
    },
    {
      id: "text1",
      class: "charlie",
      animations: "animate-text1",
      times: "20",
      text: "on your HDFC Bank",
      split: {
        separator: "",
        time: "20",
        sepTime: ".02"
      }
    },
    {
      id: "text2",
      class: "charlie",
      animations: "animate-text2",
      times: "20.1",
      text: "Debit Card",
      split: {
        separator: "",
        time: "20.1",
        sepTime: ".02"
      }
    },
    {
      id: "cardNumber",
      class: "charlie",
      animations: "animate-cardNumber",
      times: "20.2"
    },
    {
      id: "text3",
      tag: "span",
      text: "ending ",
      split: {
        separator: "",
        time: "20.2",
        sepTime: ".02"
      },
      parent: "#cardNumber"
    },
    {
      id: "cardNumberSpan",
      tag: "span",
      target: "cardNumber",
      split: {
        separator: "",
        time: "20.3",
        sepTime: ".02"
      },
      parent: "#cardNumber"
    },
    {
      id: "cashback1",
      class: "charlie",
      animations: "animate-cashback1",
      times: "33.5"
    },
    {
      tag: "span",
      text: "Up to ",
      parent: "#cashback1"
    },
    {
      id: "cashback1Span",
      tag: "span",
      target: "cashback1",
      parent: "#cashback1"
    },
    {
      id: "cashback2",
      class: "charlie",
      animations: "animate-cashback2",
      times: "35.5"
    },
    {
      tag: "span",
      text: "Up to ",
      parent: "#cashback2"
    },
    {
      id: "cashback2Span",
      tag: "span",
      target: "cashback2",
      parent: "#cashback2"
    }
  ]
};

var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });