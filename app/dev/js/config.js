var config = {
  // config here
  videoUrl: './app/img/christmas-al-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: 'name',
      class: 'charlie',
      animations: 'animate-name',
      times: '0.39',
      target: 'name'
    },
    {
      id: 'name1',
      class: 'charlie',
      animations: 'animate-name1',
      times: '11',
      target: 'name',
      text: ','
    },
    {
      id: 'loan',
      class: 'charlie',
      animations: 'animate-loan',
      times: '11'
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
      animations: 'hold',
      times: '15.9'
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
    },{
      tag: 'a',
      id: 'link',
      class: 'charlie show-end',
      animations: 'hold',
      times: '15.8',
      hrefTarget: 'link',
      newWindow: 'true'
    },{
      tag: 'a',
      id: 'link1',
      class: 'charlie show-end',
      animations: 'hold',
      times: '15.8',
      href: 'http://hdfcbank.gaadi.com/customfitloan',
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
    if(video.currentTime > 3.68) {
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
