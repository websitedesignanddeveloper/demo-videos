var config = {
  // config here
  videoUrl: './app/img/christmas-loan-cc-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      class: 'charlie animate__name',
      animations: 'animation-start, animation-end',
      times: '0.3, 3.3',
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
      times: '16, 18.4',
      text: 'with Loan against your',
    },{
      class: 'charlie animate2__line2',
      animations: 'animation2-start, animation2-end',
      times: '16.1, 18.4',
      text: 'HDFC Bank',
    },{
      class: 'charlie animate2__line3',
      animations: 'animation2-start, animation2-end',
      times: '16.2, 18.4',
      target: 'cardType',
    },{
      class: 'charlie animate2__line4',
      animations: 'animation2-start, animation2-end',
      times: '16.3, 18.4',
      text: 'Credit Card',
    },{
      class: 'charlie animate2__line5',
      animations: 'animation2-start, animation2-end',
      times: '16.4, 18.4',
      target: 'cardNumber',
    },{
      class: 'charlie animate3 show-end',
      animations: 'animation-start',
      times: '22.1'
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
      times: '22.1',
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
