var config = {
  // config here
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  videoUrl: './app/img/pl-070619-empty.mp4',
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".1",
    },
    {
      tag: "span",
      text: "Dear ",
      parent: "#name"
    },
    {
      tag: "span",
      target: "name",
      parent: "#name"
    },
    {
      id: "loan1",
      class: "charlie",
      animations: "animate-loan1",
      times: "4",
    },
    {
      tag: "span",
      text: "of ₹",
      parent: "#loan1"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#loan1"
    },
    {
      id: "loan2",
      class: "charlie",
      animations: "animate-loan2",
      times: "34",
    },
    {
      tag: "span",
      text: "of Rs. ",
      parent: "#loan2"
    },
    {
      tag: "span",
      target: "loan",
      parent: "#loan2"
    },
    {
      tag: "span",
      text: " in just 10 seconds",
      parent: "#loan2"
    },
    {
      tag: "a",
      id: "link1",
      class: "charlie",
      animations: "animate-link",
      times: "4",
      hrefTarget: "link",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "link2",
      class: "charlie show-end",
      animations: "animate-link",
      times: "44.5",
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