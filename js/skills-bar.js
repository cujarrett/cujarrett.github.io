$.fn.isOnScreen = function(){

  var win = $(window);

  var viewport = {
    top : win.scrollTop(),
    left : win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

$(document).ready(function(){
  $(window).scroll(function(){
    if ($('#about').isOnScreen()) {
      jQuery(document).ready(function(){
        jQuery('.skillbar').each(function(){
          jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
          },6000);
        });
      });
    }
  });
});
