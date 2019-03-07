var config = {
  // config here
  videoUrl: "./app/img/skoda-rapid-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "1.8",
      target: "name"
    },
    {
      id: "loan",
      class: "charlie show-end",
      animations: "animate-loan",
      times: "47.5"
    },
    {
      tag: "span",
      text: "₹",
      parent: "#loan"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#loan"
    },
    {
      tag: "span",
      text: " lacs",
      parent: "#loan"
    },
    {
      tag: "a",
      id: "link",
      class: "charlie show-end",
      animations: "animate-link",
      times: "47.8",
      hrefTarget: "link",
      newWindow: "true"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });