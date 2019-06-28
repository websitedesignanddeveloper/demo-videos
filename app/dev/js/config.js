var config = {
  // config here
  videoUrl: "./app/img/cc-worldcup-empty.mp4",
  startPoster: "./app/img/startPoster.jpg",
  endPoster: "./app/img/endPoster.jpg",
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
      tag: "span",
      text: ",",
      parent: "#name"
    },
    {
      id: "text1",
      class: "charlie",
      animations: "animate-name",
      text: "You're getting closer to",
      times: ".1"
    },
    {
      id: "text2",
      class: "charlie",
      animations: "animate-name",
      text: "the Holiday to England with",
      times: ".1"
    },
    {
      id: "card",
      class: "charlie",
      animations: "animate-name",
      times: ".1"
    },
    {
      tag: "span",
      text: "your ",
      parent: "#card"
    },
    {
      tag: "span",
      target: "card",
      parent: "#card"
    },
    {
      tag: "span",
      text: " Card.",
      parent: "#card"
    },
    {
      id: "runs",
      class: "charlie",
      animations: "animate-runs",
      times: "4.5"
    },
    {
      tag: "span",
      target: "runs",
      parent: "#runs"
    },
    {
      tag: "span",
      text: " runs",
      parent: "#runs"
    },
    {
      tag: "a",
      id: "link",
      class: "charlie",
      animations: "animate-link",
      times: "19",
      hrefTarget: "link",
      newWindow: "true"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href',pictor.data.link);
});