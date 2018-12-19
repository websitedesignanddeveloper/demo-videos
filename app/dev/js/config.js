var config = {
  // config here
  videoUrl: './app/img/social-sher-t-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: 'greeting',
      class: 'charlie',
      animations: 'animate-greeting',
      times: '0.1',
      text: 'Hi'
    },
    {
      id: 'name',
      class: 'charlie',
      animations: 'animate-name',
      times: '0.1',
      target: 'name'
    },
    {
      id: 'availBtn',
      tag: 'a',
      class: 'charlie show-end',
      animations: 'hold',
      times: '70',
      href: 'https://socialsher.hdfcbank.com',
      newWindow: 'true'
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  pictor.myPlayer.on('ended', function () {
    pictor.myPlayer.controlBar.show();
    $('.vjs-replay-button').hide();
  });
});
