var config = {
  // config here
  videoUrl: "./app/img/birthday-empty.mp4",
  rules: [
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "2.3"
    },
    {
      id: "greeting",
      text: "Dear",
      parent: "#name"
    },
    {
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