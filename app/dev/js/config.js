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
    {
      text: "Dear ",
      parent: "#name"
    },
    {
      target: "name",
      parent: "#name"
    },
    {
      id: "loan",
      class: "charlie",
      animations: "animate-loan",
      times: "4",
    },
    {
      id: "text1",
      tag: "span",
      text: "Click to avail your pre-approved car loan of ₹",
      parent: "#loan"
    },
    {
      id: "text2",
      tag: "span",
      target: "loan",
      parent: "#loan"
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "4",
      hrefTarget: "link",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "link1",
      class: "charlie show-end",
      animations: "animate-link",
      times: "69.5",
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
  if(!pictor.data.loan) {
    $("#text1").text("Check your Car Loan eligibility");
    $("#text2").text("");
  }
});