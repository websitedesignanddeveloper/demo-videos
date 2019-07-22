'use strict';
window.HELP_IMPROVE_VIDEOJS = false;

var includePiwik = false;
var piwikVideoTitle = "";
var piwikUrl = "";
var piwikSiteId = "";

function Pictor(config) {
  var videoElem = document.createElement('video');
  if (config) {
    this.config = config;
    // videoElem.setAttribute('src', config.videoUrl);
    videoElem.setAttribute('class', 'video-js vjs-fluid');
    videoElem.setAttribute('webkit-playsinline', '');
    videoElem.setAttribute('playsinline', '');
    videoElem.setAttribute('id', 'js--video-player');
    // if (config.startPoster) {
    //   videoElem.setAttribute('poster', config.startPoster);
    // }

    if(includePiwik){
      videoElem.setAttribute("data-matomo-title", piwikVideoTitle);
    }
    window.FB_APP_ID = config.FB_APP_ID;
    video = videoElem;
  }

  this.video = videoElem;
}

Pictor.prototype.animationStart = (function (el) {
  var animations = {
    animation: 'animationstart',
    OAnimation: 'oAnimationStart',
    MozAnimation: 'mozAnimationStart',
    WebkitAnimation: 'webkitAnimationStart',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

Pictor.prototype.animationEnd = (function (el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };
  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
  animateFinish();
})(document.createElement('div'));

Pictor.prototype.fetchData = function (uri, callback) {
  var self = this;
  // console.log('fetch', uri)
  fetch(uri)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      self.data = myJson;
      callback();
    });
};


Pictor.prototype.init = function () {
  var self = this,
    config = self.config;
  // var video = self.video;
  if (!self.config.fbLogin) {
  var pathArray = window.location.pathname.split( '/' );
  var id = pathArray[pathArray.length-1];
  if(id){
    var fetch_uri = '/data/'+id;
  }
  else{
    var fetch_uri = 'data.json';
  }
  console.log(fetch_uri);
    this.fetchData(fetch_uri, function callback() {
      new Promise(function (resolve, reject) {
        self._handleRules(config.rules);
        resolve('done');
      }).then(function () {
        // retargeting video element
        self._setup();

        var videoTarget = "./app/img/" + self.data.vcard + "/" + self.data.video + ".mp4";
        var startTarget = "./app/img/" + self.data.vcard + "/start-" + self.data.video + ".jpg";
        $("#js--video-player_html5_api").attr("src", videoTarget);
        $("#js--video-player_html5_api").attr("poster", startTarget);

        if(self.data.video === "generic") {
          $("#name").css({
            "top": "45%"
          }); 
          $(".animate2__text").css({
            "top": "43.3%",
            "left": "16%"
          });  
          $(".card__info").css({
            "width": "100%",
            "align-items": "center"
          });    
        } else if(self.data.video === "imperia") {
          $("#name").css({"color": "#000"}); 
          $(".animate2__text").css({"color": "#000"}); 
          $(".animate3").css({"color": "#000"});
          $(".animate4").css({"color": "#000"});
        }
        // else if(self.data.video === "preferred") {
        //   $("#animate2__text-line1").removeClass("display-none");
        //   $("#animate2__text-line2").removeClass("display-none");
        //   $("#animate2__text-line3").removeClass("display-none");
        //   $(".animate2__text").css({
        //     "top": "28%"
        //   }); 
        // }

        function adjustFont() {
          if(self.data.card1Name.length > 12) {
            if($(window).width() >= 854) {
              $(".info__name").css("font-size", "27px");
            }
            else {
              $(".info__name").css("font-size", "3.16vw");
            }
          }
        }
        adjustFont();

        $(window).resize(adjustFont);

        // var v = document.getElementsByClassName('vjs-tech')[0];
        // CHARLIE.setup(v);
        // $(document).trigger('pictorInit');
        // self.myPlayer.bigPlayButton.show();

        // $('.charlie').on(self.animationStart, function (el) {
        //   var $number = $(this).find('.number');
        //   // console.log('animate start', $number)
        //   if ($number.hasClass('shuffle') && !$number.hasClass('shuffled')) {
        //     $number.addClass('shuffled')
        //     self.numberAnimation(parseFloat($number.text()), this);

        //   }
        // });

      });
    });
  } else {
    if (!self.data) return;
    if (self.initialized) return;
    self.initialized = true;

    new Promise(function (resolve, reject) {
      self._handleRules(config.rules);
      resolve('done');
    }).then(function () {
      // retargeting video element
      self._setup();
      // var v = document.getElementsByClassName('vjs-tech')[0];
      // CHARLIE.setup(v);
      // $(document).trigger('pictorInit');
      //   self.myPlayer.bigPlayButton.show();

      // $('.charlie').on(self.animationStart, function (el) {
      //   var $number = $(this).find('.number');
      //   // console.log('animate start', $number)
      //   if ($number.hasClass('shuffle') && !$number.hasClass('shuffled')) {
      //     $number.addClass('shuffled')
      //     self.numberAnimation(parseFloat($number.text()), this);
      //   }
      // });
    });
  }

  $('#videoPlayerWrapper').append(self.video);
  self.myPlayer = videojs('js--video-player', {
    controls: true,
    autoplay: false,
    preload: true,
  });
  self.myPlayer.bigPlayButton.hide();

  // create restart button
  $('#js--video-player').append('<button class="vjs-icon-replay vjs-replay-button"></button>');

  if (self.isiOS() || self.isAndroid()) {
    $('.vjs-fullscreen-control').hide();
  }

  $('.vjs-fluid').append(textAnimationBlock);
  textAnimationBlock.classList.add('is-ready');

  var currentTime = 0;
  self.myPlayer.el_.addEventListener('webkitfullscreenchange', function () {
    self.handleFullScreen.call(this, event);
  });

  self.controlbarAtBottom();
  self.iOSHotFix();

  //This example allows users to seek backwards but not forwards.
  //To disable all seeking replace the if statements from the next
  //two functions with myPlayer.currentTime(currentTime);
  var timeout
  self.myPlayer.on('waiting', function () {
    if (!shouldWait) return;
    if (self.myPlayer.currentTime() < 1) return;
    self.myPlayer.pause();
    if (timeout) return;
    timeout = setTimeout(function () {
      self.myPlayer.play();
      timeout = '';
    }, 5000)
  })


  self.myPlayer.on('seeking', function (event) {
    console.log('seeking');
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });

  self.myPlayer.on('seeked', function (event) {
    console.log('seeked');
    if (currentTime < self.myPlayer.currentTime()) {
      self.myPlayer.currentTime(currentTime);
    }
  });
  self.myPlayer.on('ended', function () {
    $(".button").addClass("button-opacity");
    self.myPlayer.posterImage.show();
    $(this.posterImage.contentEl()).show();
    self.myPlayer.currentTime(0);
    // self.myPlayer.controlBar.hide();
    self.myPlayer.bigPlayButton.removeClass('video-paused');
    self.myPlayer.bigPlayButton.hide();
    $('.vjs-replay-button').removeClass('video-paused').show();
    $('.vjs-replay-button').hide();

    // if (self.config.endPoster) {
    //   self.myPlayer.poster(self.config.endPoster);
    // }

    var endTarget = "./app/img/" + self.data.vcard + "/end-" + self.data.video + ".jpg";
    self.myPlayer.poster(endTarget);

    // show end poster elements
    $('.show-end').addClass('show');

  });
  self.myPlayer.on('play', function () {
    $(".button").removeClass('button-opacity');
    self.myPlayer.posterImage.hide();
    self.myPlayer.controlBar.show();
    self.myPlayer.bigPlayButton.hide();
    if (self.myPlayer.bigPlayButton.hasClass('video-paused')) {
      self.myPlayer.bigPlayButton.removeClass('video-paused');
    }
    if ($('.vjs-replay-button').hasClass('video-paused')) {
      $('.vjs-replay-button').removeClass('video-paused');
    }
    $('.vjs-replay-button').hide();

    $('.shuffled').each(function () {
      $(this).removeClass('shuffled');
    })

    $('.show').removeClass('show');

  });

  self.myPlayer.on('timeupdate', function () {
    if (self.myPlayer.currentTime() > 0) {
      shouldWait = true;
    }
  });

  $('.vjs-replay-button').on('click', function () {
    shouldWait = false;
    self.myPlayer.currentTime(0);
    $(this).hide();
    self.myPlayer.play();
  });

  self.myPlayer.on('pause', function () {
    // console.log('video pause');
    self.myPlayer.bigPlayButton.addClass('video-paused');
    $('.vjs-replay-button').addClass('video-paused').show();
  });

};

Pictor.prototype._setup = function () {
  var self = this;
  // retargeting video element
  var v = document.getElementsByClassName('vjs-tech')[0];
  CHARLIE.setup(v);
  self.myPlayer.bigPlayButton.show();
  $(document).trigger('pictorInit');

  $('.charlie').on(self.animationStart, function (el) {
    var $number = $(this).find('.number');
    // console.log('animate start', $number)
    if ($number.hasClass('shuffle') && !$number.hasClass('shuffled')) {
      $number.addClass('shuffled')
      self.numberAnimation(parseFloat($number.text()), this);

    }
  });

}

var video,
  shouldWait = false,
  textAnimationBlock = document.getElementById('textAnimationBlock');

Pictor.prototype.handleFullScreen = function (event) {
  var self = this;
  // console.log('handleFullScreen', event);
  /* Fullscreen */
  lockScreenInLandscape();

  function requestFullscreenVideo() {
    if (videoPlayerWrapper.requestFullscreen) {
      videoPlayerWrapper.requestFullscreen();
    } else {
      video.webkitEnterFullscreen();
    }
  }

  if ('orientation' in screen) {
    screen.orientation.addEventListener('change', function () {
      // Let's automatically request fullscreen if user switches device in landscape mode.
      if (screen.orientation.type.startsWith('landscape')) {
        requestFullscreenVideo();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  }

  function lockScreenInLandscape() {
    if (!('orientation' in screen)) {
      return;
    }

    // Let's force landscape mode only if device is in portrait mode and can be held in one hand.
    if (
      matchMedia('(orientation: portrait) and (max-device-width: 768px)')
        .matches
    ) {
      screen.orientation.lock('landscape').then(function () {
        listenToDeviceOrientationChanges();
      });
    }
  }

  function listenToDeviceOrientationChanges() {
    if (!('DeviceOrientationEvent' in window)) {
      return;
    }

    var previousDeviceOrientation, currentDeviceOrientation;
    window.addEventListener(
      'deviceorientation',
      function onDeviceOrientationChange(event) {
        // event.beta represents a front to back motion of the device and
        // event.gamma a left to right motion.
        if (Math.abs(event.gamma) > 10 || Math.abs(event.beta) < 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          currentDeviceOrientation = 'landscape';
          return;
        }
        if (Math.abs(event.gamma) < 10 || Math.abs(event.beta) > 10) {
          previousDeviceOrientation = currentDeviceOrientation;
          // When device is rotated back to portrait, let's unlock screen orientation.
          if (previousDeviceOrientation == 'landscape') {
            screen.orientation.unlock();
            window.removeEventListener(
              'deviceorientation',
              onDeviceOrientationChange
            );
          }
        }
      }
    );
  }
};


Pictor.prototype._handleRules = function (rules) {

  var self = this;
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    self._createElem(rule);
  }
}

Pictor.prototype._createElem = function (elem) {
  var element;
  var self = this;

  if (elem.tag) {
    element = document.createElement(elem.tag);
  } else {
    element = document.createElement('div');
  }

  var textContainer = document.getElementById('textAnimationBlock');

  if (elem.id) {
    element.setAttribute('id', elem.id);
  }

  if (elem.href) {
    element.setAttribute('href', elem.href);
  }

  if (elem.hrefTarget) {
    element.setAttribute('href', self.data[elem.hrefTarget]);
  }

  if (elem.newWindow) {
    element.setAttribute('target', '_blank');
  }

  if (elem.animations) {
    element.setAttribute('data-animations', elem.animations);
  }

  if (elem.times) {
    element.setAttribute('data-times', elem.times);
  }

  if (elem.class) {
    element.setAttribute('class', elem.class);
  }

  if (elem.target && !elem.split) {
    var text = document.createTextNode(self.data[elem.target]);
    element.appendChild(text);
  }

  if (elem.text) {
    var text = document.createTextNode(elem.text);
    element.appendChild(text);
  }

  if (elem.bgImg) {
    element.style.background = "url(" + self.data[elem.bgImg] + ") center no-repeat";
    element.style.backgroundSize = "contain";
  }

  if (elem.parent) {
    // append to parent
    $(elem.parent).append(element);
  } else {
    $('#textAnimationBlock').append(element);
  }
  if (elem.split) {
    self.splitUp(self.data[elem.target], '#' + elem.id, elem.split.separator, elem.split.time)
  }
}

Pictor.prototype.isiOS = function () {
  return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}

Pictor.prototype.isAndroid = function () {
  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("android") > -1;
}

Pictor.prototype.controlbarAtBottom = function () {
  var self = this;
  var height = $('.vjs-control-bar').height();
  $('.vjs-control-bar').css('bottom', '-' + height + 'px');

  window.addEventListener('resize', self.controlbarAtBottom);
  window.addEventListener('orientationchange', self.controlbarAtBottom);
}

Pictor.prototype.iOSHotFix = function () {
  var self = this;

  self.myPlayer.on('pause', function () {

    if (self.isiOS()) {
      $('.charlie').each(function () {
        if ($(this).hasClass('animated')) {
          $(this).css('-webkit-transform', $(this).css('-webkit-transform'));
        }
      })
    }
  })
}
