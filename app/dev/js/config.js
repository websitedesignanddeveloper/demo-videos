var config = {
  // config here
  videoUrl: './app/img/digital-loan-mf-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".1"
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
      tag: "a",
      id: "link",
      class: "charlie show-end",
      animations: "animate-link",
      times: "55",
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