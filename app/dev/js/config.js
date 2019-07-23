var config = {
  // config here
  videoTarget: 'videoLink',
  endposterTarget: 'endposter',
  startPoster: './app/img/onam_start.jpg',
  rules: [
    {
      id: 'animate1',
      class: 'charlie',
      animations: 'animate-line1',
      times: '0'
    },
    {
      id: 'animate1__line1',
      class: 'charlie',
      animations: 'animate-start',
      times: '1',
      parent: '#animate1',
      text: 'Hi '
    },
    {
      id: 'animate1__line2',
      class: 'charlie',
      animations: 'animate-start',
      times: '1',
      parent: '#animate1',
      target: 'name'
    },
    // {
    //   id: 'animate1__line2',
    //   class: 'charlie',
    //   animations: 'animate-start',
    //   times: '2',
    //   parent: '#animate1',
    //   target: 'animate1__line2'
    // },
    // {
    //   id: 'animate1__line3',
    //   class: 'charlie',
    //   animations: 'animate-start',
    //   times: '3',
    //   parent: '#animate1',
    //   target: 'animate1__line3'
    // },
    {
      id: 'animate2'
    },
    {
      id: 'animate2__line1',
      animations: 'fadeIn-right, animate-end',
      times: '10.5, 13.5',
      parent: '#animate2',
      target: 'name1',
      class: 'charlie'
    },
    // {
    //   id: 'animate2__line2',
    //   animations: 'animate-start, animate-end',
    //   times: '10.5, 14',
    //   parent: '#animate2',
    //   text: 'This Onam,',
    //   class: 'charlie'
    // },
    // {
    //   id: 'animate2__line3',
    //   animations: 'animate-start, animate-end',
    //   times: '10.5, 14',
    //   parent: '#animate2',
    //   text: 'get the perfect car and',
    //   class: 'charlie'
    // },
    // {
    //   id: 'animate2__line4',
    //   animations: 'animate-start, animate-end',
    //   times: '10.5, 14',
    //   parent: '#animate2',
    //   text: 'perfect loan.',
    //   class: 'charlie'
    // },
    // {
    //   id: 'animate2__line5',
    //   animations: 'animate-start, animate-end',
    //   times: '11, 14',
    //   parent: '#animate2',
    //   text: 'The way you want it.',
    //   class: 'charlie'
    // },
    {
      id: 'animate3'
    },
    {
      id: 'animate3__line1',
      animations: 'animate-start, animate-end',
      times: '15, 19.5',
      parent: '#animate2',
      text: 'Introducing HDFC Bank',
      class: 'charlie'
    },
    {
      id: 'animate3__line2',
      animations: 'animate-start, animate-end',
      times: '15, 19.5',
      parent: '#animate2',
      text: 'Custom-fit Car Loans',
      class: 'charlie'
    },
    {
      id: 'animate3__line3',
      animations: 'animate-start, animate-end',
      times: '15.5, 19.5',
      parent: '#animate2',
      text: 'Avail your pre-approved Car Loan of',
      class: 'charlie'
    },
    {
      id: 'animate3__line4',
      animations: 'animate-start, animate-end',
      times: '15.5, 19.5',
      parent: '#animate2',
      text: '₹',
      target: 'loan',
      class: 'charlie'
    },
    {
      tag: 'span',
      id: 'span_animate3__line4',
      text: ' instantly',
      parent: '#animate3__line4'
    },
    // {
    //   id: 'animate2__line6',
    //   animations: 'animate-start, animate-end',
    //   times: '11, 18',
    //   parent: '#animate2',
    //   target: 'animate2__line6',
    //   class: 'charlie'
    // },
    {
      id: 'button',
      tag: 'a',
      href: 'https://leads.hdfcbank.com/applications/webforms/apply/Generic/Generic_Mobile_submit.asp?tbcustid=123&tbcustname=ABC&tbproduct=Car_Loan_TYaris&tbGType=Generic&tbSourceCode=Car_Offering_Mailer_CSA_src_March18&tbPromoCode=Car_Loan_Yaris_Mailer_CSA_March18&EMB=N&flgMobile=N&tbDestination=NetBanking&utm_tag=Avail_Now&utm_campaign=Car_Offering_Mailer&utm_medium=VSMS&utm_source=March18_LB_Car_Offering_Mailer_CSA_CG&utm_content=Avail_Now',
      class: 'charlie',
      animations: 'animate-button',
      times: '16',
      newWindow: 'true'
    },
    {
      id: 'button1',
      tag: 'a',
      hrefTarget: 'link1',
      class: 'charlie',
      animations: 'animate-button',
      times: '16',
      newWindow: 'true'
    }
  ]
};


var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  pictor.myPlayer.on('ended', function() {
    $('#animate3__line1').removeClass('charlie').addClass('show-end');
    $('#animate3__line2').removeClass('charlie').addClass('show-end');
    $('#animate3__line3').removeClass('charlie').addClass('show-end');
    $('#animate3__line4').removeClass('charlie').addClass('show-end');
    $('#button').removeClass('charlie').addClass('show-end');
    if(showBtn1) {
      $('#button1').removeClass('charlie').addClass('show-end');
    }
  });

  pictor.myPlayer.on('play', function() {
    $('#animate3__line1').removeClass('show-end').addClass('charlie');
    $('#animate3__line2').removeClass('show-end').addClass('charlie');
    $('#animate3__line3').removeClass('show-end').addClass('charlie');
    $('#animate3__line4').removeClass('show-end').addClass('charlie');
    $('#button').removeClass('show-end').addClass('charlie');
    if(showBtn1) {
      $('#button1').removeClass('show-end').addClass('charlie');
    }
  });


});
