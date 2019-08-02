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
  // Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  console.log("executed");
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

// Restrict input to digits and '.' by using a regular expression filter.
setInputFilter(document.getElementById("input-num"), function(value) {
  return /^\d*$/.test(value);
});

setInputFilter(document.getElementById("input-pin"), function(value) {
  return /^\d*$/.test(value);
});

  $("#input-name").attr("value",pictor.data.name);
  $("#input-num").attr("value",pictor.data.number);
  $("#input-pin").attr("value",pictor.data.pin);

  $("video").prop('muted', true);
  $("video").get(0).play();
  $("#videoPlayerWrapper").on("click",function(){
    $("video").prop('muted', false);
  });

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