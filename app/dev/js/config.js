var config = {
  // config here
  videoUrl: './app/img/nexa-cl-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: 'name',
      class: 'charlie',
      animations: 'hold',
      times: '0.1'
    },
    {
      text: 'Dear',
      parent: '#name'
    },
    {
      target: 'name',
      parent: '#name'
    },
    {
      id: 'loan',
      class: 'charlie',
      animations: 'hold',
      times: '5.6'
    },
    {
      tag: 'span',
      text: '₹',
      parent: '#loan'
    },
    {
      tag: 'span',
      target: 'loan',
      parent: '#loan'
    },
    {
      id: 'loan1',
      class: 'charlie show-end',
      animations: 'fade-in',
      times: '15.4'
    },
    {
      tag: 'span',
      text: '₹',
      parent: '#loan1'
    },
    {
      tag: 'span',
      target: 'loan',
      parent: '#loan1'
    },
    {
      tag: 'a',
      id: 'link',
      class: 'charlie show-end',
      animations: 'hold',
      times: '15.5',
      hrefTarget: 'link',
      newWindow: 'true'
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

var video = document.getElementById('js--video-player_html5_api');

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href',pictor.data.link);
  pictor.myPlayer.on('play', function(){
    $('#name').show();
  });
  pictor.myPlayer.on('timeupdate', function(){
    if(video.currentTime > 1.2) {
      $('#name').css('opacity','0');
    }
    else {
      $('#name').css('opacity','1');
    }
  });
  pictor.myPlayer.on('ended', function(){
    $('#name').hide();
      pictor.myPlayer.controlBar.show();
      $('.vjs-replay-button').hide();
  });
});
