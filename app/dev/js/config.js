var config = {
  // config here
  videoUrl: './app/img/ganpati_carloan_v1.mp4',
  startPoster: './app/img/start.jpg',
  endPoster: './app/img/end.jpg',
  rules: [
    {
      id: 'animate1',
      class: 'charlie',
      animations: 'animate-line1',
      times: '0.1'
    },
    {
      id: 'animate1__line1',
      class: 'charlie',
      animations: 'animate-start',
      times: '0.1',
      parent: '#animate1',
      text: 'Hi '
    },
    {
      id: 'animate1__line2',
      class: 'charlie',
      animations: 'animate-start',
      times: '0.7',
      parent: '#animate1',
      target: 'name'
    },
    {
      id: 'animate3'
    },
    {
      id: 'animate3__line3',
      animations: 'animate-zoom',
      times: '17.5',
      parent: '#animate3',
      text: 'You are pre-approved for Car Loan of',
      class: 'charlie'
    },
    {
      id: 'animate3__line4',
      animations: 'animate-zoom',
      times: '17.5',
      parent: '#animate3',
      text: '₹',
      target: 'loan',
      class: 'charlie'
    },
    // {
    //   tag: 'span',
    //   id: 'span_animate3__line4',
    //   text: ' instantly',
    //   parent: '#animate3__line4'
    // },
    {
      id: 'button',
      tag: 'a',
      // href: 'https://leads.hdfcbank.com/applications/webforms/apply/Generic/Generic_Mobile_submit.asp?tbcustid=123&tbcustname=ABC&tbproduct=Car_Loan_TYaris&tbGType=Generic&tbSourceCode=Car_Offering_Mailer_CSA_src_March18&tbPromoCode=Car_Loan_Yaris_Mailer_CSA_March18&EMB=N&flgMobile=N&tbDestination=NetBanking&utm_tag=Avail_Now&utm_campaign=Car_Offering_Mailer&utm_medium=VSMS&utm_source=March18_LB_Car_Offering_Mailer_CSA_CG&utm_content=Avail_Now',
      hrefTarget: 'cta',
      class: 'charlie',
      animations: 'animate-button',
      times: '18',
      newWindow: 'true'
    },
    {
      id: 'button1',
      tag: 'a',
      href: 'http://bit.ly/2wZ6shf',
      class: 'charlie',
      animations: 'animate-button',
      times: '18',
      newWindow: 'true'
    }
  ]
};


var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  console.log(pictor.data.cta);
  $("#homepage_cta").attr("href", pictor.data.cta);

  pictor.myPlayer.on('ended', function() {
    $('#animate3__line3').removeClass('charlie').addClass('show-end');
    $('#animate3__line4').removeClass('charlie').addClass('show-end');
    $('#button').removeClass('charlie').addClass('show-end');
    $('#button1').removeClass('charlie').addClass('show-end');
  });

  pictor.myPlayer.on('play', function() {
    $('#animate3__line3').removeClass('show-end').addClass('charlie');
    $('#animate3__line4').removeClass('show-end').addClass('charlie');
    $('#button').removeClass('show-end').addClass('charlie');
    $('#button1').removeClass('show-end').addClass('charlie');
  });


});
