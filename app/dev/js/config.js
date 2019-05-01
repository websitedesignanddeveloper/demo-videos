var config = {
  // config here
  videoUrl: './app/img/gold-promise-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: "greeting",
      class: "charlie",
      animations: "animate-name",
      times: "1.5",
      text: "Dear"
    },
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "1.5",
      target: "name",
      text: ","
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $("video").prop('muted', true);
  $(window).click(function(){
    $("video").prop('muted', false);
  });

  pictor.myPlayer.on("playing", function(){
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if(iOS) {
    $("#unmute-btn-container").show();
    $("#unmute-btn").click(function(){
      $("video").prop('muted', false);
      $("#unmute-btn-container").hide();
    });
  }
  });
});