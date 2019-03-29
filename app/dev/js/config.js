var config = {
  // config here
  videoUrl: "./app/img/loan-cc1-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    // {
    //   id: "greeting",
    //   class: "charlie",
    //   animations: "animate-greeting",
    //   times: "0.2",
    //   text: "Dear"
    // },
    {
      tag: "a",
      id: "link",
      class: "charlie show-end",
      animations: "hold",
      times: "0.2",
      href: "http://mailer.hdfcbank.com/Aug18/Coding/Insta_Jumbo_lp/index.html",
      newWindow: "true"
    },
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "0.3"
    },
    {
      tag: "span",
      text: "Dear ",
      parent: "#name"
    },
    {
      tag: "span",
      target: "name",
      text: ",",
      parent: "#name"
    },
    {
      id: "text1",
      class: "charlie",
      animations: "animate-text1",
      times: "0.4",
      text: "meet Rahul"
    },
    {
      id: "text2",
      class: "charlie",
      animations: "animate-text2",
      times: "49.8",
      text: "So"
    },
    {
      id: "name1",
      class: "charlie",
      animations: "animate-name1",
      times: "49.8",
      target: "name",
      text: ","
    },
    {
      id: "loan",
      class: "charlie",
      animations: "animate-loan",
      times: "53.3",
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
      id: "card",
      class: "charlie",
      animations: "animate-card",
      times: "53.3",
    },
    {
      tag: "span",
      text: "ending with ",
      parent: "#card"
    },
    {
      tag: "span",
      target: "card",
      parent: "#card"
    },
    {
      tag: "a",
      id: "link1",
      class: "charlie show-end",
      animations: "hold",
      times: "67",
      href: "http://mailer.hdfcbank.com/Aug18/Coding/Insta_Jumbo_lp/index.html",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "phone",
      class: "charlie show-end",
      animations: "hold",
      times: "67",
      href: "tel:18002676161",
      newWindow: "true"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });