var config = {
  // config here
  videoUrl: "./app/img/pnb-metlife-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: ".9"
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
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });