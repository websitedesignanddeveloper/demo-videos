var config = {
  // config here
  videoUrl: './app/img/regalia.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      tag: "a",
      id: "knowMore",
      class: "charlie",
      animations: "animate-knowMore",
      times: "32",
      hrefTarget: "knowMore",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "availNow",
      class: "charlie",
      animations: "animate-availNow",
      times: "58.5",
      hrefTarget: "availNow",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "pinGenerate",
      class: "charlie",
      animations: "animate-pinGenerate",
      times: "74",
      hrefTarget: "pinGenerate",
      newWindow: "true"
    },
    {
      tag: "a",
      id: "knowMore1",
      class: "charlie show-end",
      animations: "animate-knowMore1",
      times: "87.5",
      hrefTarget: "knowMore",
      newWindow: "true"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href','https://www.hdfcbank.com/personal/credit_card/regalia-card');
});