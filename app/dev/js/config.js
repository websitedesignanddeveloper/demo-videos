var config = {
  // config here
  videoUrl: './app/img/rlic-nippon-comp.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: []
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $("#input-name").attr("value","Divya");
  $("#input-num").attr("value","9876543210");
  $("#input-pin").attr("value","560074");

  $(".int_btn").click(function(){
    // if($('#g-option').is(":checked")) {
      window.location.href = "./thanks.html";
  //   }
  //   else {
  //     $('#g-option-label').addClass('animate-warning');
  //   }
  // });

  // $('#g-option').click(function(){
  //   $('#g-option-label').removeClass('animate-warning');
  });
});