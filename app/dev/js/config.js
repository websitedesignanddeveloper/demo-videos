var config = {
  // config here
  videoUrl: "./app/img/absli-tax-certificate-empty.mp4",
  rules: [
    {
      id: "policy",
      class: "charlie",
      animations: "animate-policy",
      times: ".9",
      target: "policyNumber",
      split: {
        separator: "",
        time: ".9",
        sepTime: ".03"
      }
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });