// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  $("#various1").fancybox({
    'overlayColor'      : '#000',
    'overlayOpacity'  : 0.9
  });

  $("#various2").fancybox({
    'overlayColor'      : '#000',
    'hideOnOverlayClick': false,
    'overlayOpacity'  : 0.9
  });

  $("#various3").fancybox({
    'width'        : '60%',
    'height'      : '105%',
    'autoScale'      : false,
    'transitionIn'    : 'none',
    'transitionOut'    : 'none',
    'type'        : 'iframe'
  });

  $("#various4").fancybox({
    'padding'      : 0,
    'autoScale'      : false,
    'transitionIn'    : 'none',
    'transitionOut'    : 'none'
  });

  $("#hidden_link").fancybox().trigger('click');

  $("#autostart").fancybox({
    'overlayShow': true,
    frameWidth: 838,
    frameHeight:540
  });
});
