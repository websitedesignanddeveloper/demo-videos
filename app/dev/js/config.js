var config = {
  // config here
  videoUrl: './app/img/ny-loan-cc-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      class: 'charlie animate__name',
      animations: 'animation-start, animation-end',
      times: '0.3, 3.2',
    },
    {
      tag: 'span',
      text: 'Hi ',
      parent: '.animate__name'
    },
    {
      tag: 'span',
      target: 'name',
      parent: '.animate__name'
    },

    {
      class: 'charlie animate2__line1',
      animations: 'animation2-start, animation2-end',
      times: '15, 17.2',
      text: 'with Loan against your',
    },{
      class: 'charlie animate2__line2',
      animations: 'animation2-start, animation2-end',
      times: '15.1, 17.2',
      text: 'HDFC Bank',
    },{
      class: 'charlie animate2__line3',
      animations: 'animation2-start, animation2-end',
      times: '15.2, 17.2',
      target: 'cardType',
    },{
      class: 'charlie animate2__line4',
      animations: 'animation2-start, animation2-end',
      times: '15.3, 17.2',
      text: 'Credit Card',
    },{
      class: 'charlie animate2__line5',
      animations: 'animation2-start, animation2-end',
      times: '15.4, 17.2',
      target: 'cardNumber',
    },{
      class: 'charlie animate3 show-end',
      animations: 'animation-start',
      times: '20.5'
    },
    {
      tag: 'span',
      text: '₹',
      parent: '.animate3'
    },
    {
      tag: 'span',
      target: 'amount',
      parent: '.animate3'
    },
    {
      tag: 'span',
      text: '*',
      parent: '.animate3'
    },{
      tag: 'a',
      class: 'charlie animate-btn show-end',
      animations: 'animation-start',
      times: '20.5',
      href: 'https://leads.hdfcbank.com/applications/webforms/apply/HDFC_InstaLoan_LandingPage/index.aspx?PromoCode=sms-lacc-insta&utm_tag=know_more&utm_campaign=lacc-insta&utm_medium=cpm&utm_source=facebook&utm_content=old-carousel1',
      newWindow: 'true'
    }

  ]
};
var pictor = new Pictor(config);

pictor.init();

// $(document).on('pictorInit', function() {
//   // project specific functions should here
// });
