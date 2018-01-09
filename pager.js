var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

//window.alert("sometext");

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
  //window.alert("sometext");
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
  //window.alert("sometext");
});

/*$('.carousel').carousel({
  interval: 6000,
  pause: "false"
  //window.alert("sometext");
});*/