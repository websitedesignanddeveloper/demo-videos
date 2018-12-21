var config = {
  // config here
  videoUrl: './app/img/new-year-pl-empty.mp4',
  startPoster: './app/img/startPoster.jpg',
  endPoster: './app/img/endPoster.jpg',
  rules: [
    {
      id: 'greeting',
      class: 'charlie',
      animations: 'fade-in',
      times: '0.01',
      target: 'greeting',
      split: {
        separator: '',
        time: '1'
      },
    },
    {
      id: 'name',
      class: 'charlie',
      animations: 'fade-in',
      times: '0.01',
      target: 'name',
      split: {
        separator: '',
        time: '1'
      },
    },
    {
      id: 'loan',
      class: 'charlie show-end',
      animations: 'zoom-in',
      times: '16.9'
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
      tag: 'a',
      id: 'link',
      class: 'charlie show-end',
      animations: 'hold',
      times: '17.5',
      hrefTarget: 'link',
      newWindow: 'true'
    }
  ]
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
  $('#pageBtn').attr('href',pictor.data.link);
  if(pictor.data.name.length <= 8) {
    $('#greeting').css('left','11.5%');
    $('#name').css('left','11.5%');
  }
  if(pictor.data.name.length <= 6) {
    $('#greeting').css('left','13.5%');
    $('#name').css('left','13.5%');
  }
  if(pictor.data.name.length <= 4) {
    $('#greeting').css('left','16.5%');
    $('#name').css('left','16.5%');
  }
  pictor.myPlayer.on('ended', function(){
      pictor.myPlayer.controlBar.show();
      $('.vjs-replay-button').hide();
  });
});
