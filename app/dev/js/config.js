var config = {
  // config here
  videoTarget: "video" + "1",
  startTarget: "startPoster",
  endTarget: "endPoster",
  rules: [
    // {
    //   id: "name",
    //   class: "charlie",
    //   animations: "animate-name",
    //   times: ".5"
    // },
    // {
    //   tag: "span",
    //   text: "Dear ",
    //   parent: "#name"
    // },
    // {
    //   tag: "span",
    //   target: "name",
    //   parent: "#name"
    // },
    // {
    //   tag: 'div',
    //   class: 'animate2__text',
    //   parent: '#textAnimationBlock'
    // },{
    //   tag: 'div',
    //   id: 'animate2__text-line1',
    //   class: 'charlie display-none',
    //   parent: '.animate2__text',
    //   animations: 'animate-start,animate-finish',
    //   times: '5,8.6',
    //   text: 'custId'
    // },{
    //   tag: 'div',
    //   id: 'animate2__text-line2',
    //   class: 'charlie display-none',
    //   parent: '.animate2__text',
    //   animations: 'animate-start,animate-finish',
    //   times: '5.2,8.6',
    //   text: 'custId'
    // },{
    //   tag: 'div',
    //   id: 'animate2__text-line3',
    //   class: 'charlie display-none',
    //   parent: '.animate2__text',
    //   animations: 'animate-start,animate-finish',
    //   times: '5.4,8.6',
    //   text: 'custId'
    // },{
    //   tag: 'div',
    //   id: 'animate2__text-line4',
    //   class: 'charlie',
    //   parent: '.animate2__text',
    //   animations: 'animate-start,animate-finish',
    //   times: '5.6,8.6',
    //   target: 'custId'
    // },
    // {
    //   tag: 'div',
    //   class: 'animate3',
    //   parent: '#textAnimationBlock'
    // },
    // {
    //   tag: 'div',
    //   class: 'charlie',
    //   parent: '.animate3',
    //   // animations: 'animate3__card1, animate3__card2 ,animate3-finish',
    //   animations: 'animate3__card2 ,animate3-finish',
    //   id: 'animate3__card',
    //   // times: '9.7, 11,17.5'
    //   times: '11,17.5'
    // },
    // {
    //   tag: 'div',
    //   class: 'card__info',
    //   parent: '#animate3__card'
    // },
    // {
    //   tag: 'div',
    //   class: 'info__name',
    //   parent: '.card__info',
    //   target: 'card1Name'
    // },
    // {
    //   tag: 'div',
    //   class: 'info__position',
    //   parent: '.card__info'
    // },
    // {
    //   tag: 'span',
    //   text: 'Your ',
    //   parent: '.info__position'
    // },
    // {
    //   tag: 'span',
    //   target: 'card1Position',
    //   parent: '.info__position'
    // },
    // {
    //   tag: 'div',
    //   class: 'info__number',
    //   parent: '.card__info',
    //   target: 'card1Number'
    // },
    // {
    //   tag: 'div',
    //   id: 'animate__line',
    //   class: 'charlie',
    //   animations: 'animate-start,animate-finish',
    //   times: '17.2,22.1'
    // },
    // {
    //   tag: 'span',
    //   text: 'In case you are unable to reach ',
    //   parent: '#animate__line'
    // },
    // {
    //   tag: 'span',
    //   target: 'card1Firstname',
    //   parent: '#animate__line'
    // },
    // {
    //   tag: 'div',
    //   class: 'animate4',
    //   parent: '#textAnimationBlock'
    // },
    // {
    //   tag: 'div',
    //   id: 'animate4__name',
    //   class: 'charlie',
    //   parent: '.animate4',
    //   animations: 'animate-start,animate-finish',
    //   times: '18.7,22.1',
    //   target:'card2Name'
    // },
    // {
    //   tag: 'div',
    //   id: 'animate4__number',
    //   class: 'charlie',
    //   parent: '.animate4',
    //   animations: 'animate-start,animate-finish',
    //   times: '19.3,22.1',
    //   target:'card2Number'
    // },
    {
      tag: "a",
      id: "download-btn",
      class: "charlie show-end",
      animations: "hold",
      times: "25",
      newWindow: "true"
    },
    {
      id: "cancel-btn",
      class: "charlie",
      animations: "hold",
      times: "29"
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

function autoDownload() {
  var href = $('#download-btn').attr('href');
window.location.href = href;
return false;
}

$(document).on('pictorInit', function() {
  // project specific functions should here
  // if(pictor.data.vcard === "personal-banker") {
  //   $("#download-btn").attr("href", "./app/img/personal-banker/HDFC Bank Personal Banker.vcf");
  // }
  // else if(pictor.data.vcard === "relationship-manager") {
  //   $("#download-btn").attr("href", "./app/img/relationship-manager/HDFC Bank Relationship Manager.vcf");
  // }

  $("#download-btn").attr("href", pictor.data.vcardLink);

  var cancelClicked = false;

      $("#download-btn").click(function(){
        cancelClicked = true;
      });
    
      $("#cancel-btn").click(function(){
        cancelClicked = true;
      });

      pictor.myPlayer.on("ended", function(){
          if(!cancelClicked) {
            setTimeout(autoDownload, 1000);
          }
          else {
            cancelClicked = false;
          }
      });
});