(function($) {
 "use strict";

$(window).load(function(){
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 1170,
    itemMargin: 5,
    pausePlay: false,
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
});

})(jQuery);
