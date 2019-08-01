var config = {
  // config here
  videoUrl: './app/img/rlic-nippon-comp.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    // {
    //   tag: "a",
    //   id: "link",
    //   class: "charlie",
    //   animations: "animate-link",
    //   times: "146",
    //   href: "https://www.reliancenipponlife.com/",
    //   newWindow: "true"
    // },
    {
      id: "name",
      class: "charlie",
      animations: "animate-name",
      times: "1.8"
    },
    {
      text: "Dear",
      parent: "#name"
    },
    {
      class: "bold",
      target: "name",
      parent: "#name"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $("#input-name").attr("value",pictor.data.name);
  $("#input-num").attr("value",pictor.data.number);
  $("#input-pin").attr("value",pictor.data.pin);

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