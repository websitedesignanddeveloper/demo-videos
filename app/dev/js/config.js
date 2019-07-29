var config = {
  // config here
  videoUrl: "./app/img/quick-money-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".4"
    },
    {
      tag: "span",
      text: "Hi ",
      parent: "#name"
    },
    {
      tag: "span",
      target: "name",
      parent: "#name"
    },
    {
      tag: "span",
      text: ",",
      parent: "#name"
    },
    {
      id: "carModel",
      class: "charlie",
      animations: "animate-carModel",
      times: "3"
    },
    {
      tag: "span",
      text: "your ",
      parent: "#carModel"
    },
    {
      tag: "span",
      target: "carModel",
      parent: "#carModel"
    },
    {
      id: "loan",
      class: "charlie",
      animations: "animate-loan",
      times: "3"
    },
    {
      tag: "span",
      text: "can help get you Rs. ",
      parent: "#loan"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#loan"
    },
    {
      tag: "span",
      text: ",",
      parent: "#loan"
    },
    {
      id: "existingLoan",
      class: "charlie",
      animations: "animate-existingLoan",
      times: "20.5"
    },
    {
      tag: "span",
      text: "on your existing car loan of Rs. ",
      parent: "#existingLoan"
    },
    {
      tag: "span",
      target: "existingLoan",
      parent: "#existingLoan"
    },
    {
      id: "name1",
      class: "charlie",
      animations: "animate-name1",
      times: "30"
    },
    {
      tag: "span",
      text: "And ",
      parent: "#name1"
    },
    {
      tag: "span",
      target: "name",
      parent: "#name1"
    },
    {
      tag: "span",
      text: ", the best part is",
      parent: "#name1"
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "0.1",
      hrefTarget: "link",
      newWindow: "true"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $("#pageBtn").attr("href", pictor.data.link);
});