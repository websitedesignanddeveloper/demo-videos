var config = {
  // config here
  videoUrl: './app/img/dental-clinic30.mp4',
  rules: []
};
var pictor = new Pictor(config);

pictor.init();

$(document).on('pictorInit', function() {
  // project specific functions should here
});