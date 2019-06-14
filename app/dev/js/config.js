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
    // {
    //   id: "text1",
    //   class: "charlie",
    //   animations: "animate-text1",
    //   times: "32",
    //   text: "Avail your pre-approved",
    //   split: {
    //     separator: "",
    //     time: "32",
    //     sepTime: ".05"
    //   }
    // },
    // {
    //   id: "text2",
    //   class: "charlie",
    //   animations: "animate-text2",
    //   times: "32",
    //   text: "loan amount of",
    //   split: {
    //     separator: "",
    //     time: "32",
    //     sepTime: ".05"
    //   }
    // },
    {
      id: "text3",
      class: "charlie",
      animations: "animate-text3-6",
      times: "32.2"
    },
    {
      tag: "span",
      text: "Rs. ",
      parent: "#text3"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#text3"
    },
    {
      id: "text4",
      class: "charlie",
      animations: "animate-text3-6",
      times: "32.2",
      text: "on your HDFC Bank"
    },
    {
      id: "text5",
      class: "charlie",
      animations: "animate-text3-6",
      times: "32.2",
      target: "cardType"
    },
    {
      id: "text6",
      class: "charlie",
      animations: "animate-text3-6",
      times: "32.2",
      text: "ending "
    },
    {
      tag: "span",
      id: "text6a",
      target: "cardNumber",
      parent: "#text6"
    },
    // {
    //   id: "text7",
    //   class: "charlie",
    //   animations: "animate-text7",
    //   times: "34.8",
    //   text: "with ",
    //   split: {
    //     separator: "",
    //     time: "34.8",
    //     sepTime: ".03"
    //   }
    // },
    // {
    //   tag: "span",
    //   id: "text8",
    //   text: "E a s y",
    //   split: {
    //     separator: "",
    //     time: "34.85",
    //     sepTime: ".03"
    //   },
    //   parent: "#text7"
    // },
    // {
    //   tag: "span",
    //   id: "text9",
    //   text: "EMI",
    //   split: {
    //     separator: "",
    //     time: "34.9",
    //     sepTime: ".03"
    //   },
    //   parent: "#text7"
    // },
    // {
    //   id: "cashback1upto",
    //   class: "charlie",
    //   animations: "animate-cashback1",
    //   times: "43.5",
    //   text: "up to"
    // },
    // {
    //   id: "cashback1",
    //   class: "charlie",
    //   animations: "animate-cashback1",
    //   times: "43.5",
    //   target: "cashback1"
    // },
    // {
    //   id: "cashback2upto",
    //   class: "charlie",
    //   animations: "animate-cashback2",
    //   times: "45.5",
    //   text: "up to"
    // },
    // {
    //   id: "cashback2",
    //   class: "charlie",
    //   animations: "animate-cashback2",
    //   times: "45.5",
    //   target: "cashback2"
    // },
    {
      id: "cashback3upto",
      class: "charlie",
      animations: "animate-cashback3",
      times: "47.5",
      text: "up to"
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

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href',pictor.data.link);
});