var config = {
  // config here
  videoUrl: "./app/img/glanza-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "0.1",
    },
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });
