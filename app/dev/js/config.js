var config = {
  // config here
  videoUrl: "./app/img/glanza-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "greeting",
      class: "charlie",
      animations: "animate-greeting",
      times: "0.1",
      text: "Dear"
    },
    {
      id: "name",
      class: "charlie",
      animations: "animate-greeting",
      times: "0.1",
      target: "name"
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "3.5",
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