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
  }).trigger('click');
});

function MM_changeProp(objId,x,theProp,theValue) { //v9.0
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}

function focusField(fieldname) {
  fields = ['anrede', 'titel', 'name', 'unternehmen', 'position',
    'telefon', 'email', 'mitteilung'];
  for(i = 0; i < fields.length; i++) {
    MM_changeProp(fields[i], '', 'backgroundColor', '#fccd7f');
    $('#' + fields[i]).value = '';
  }
  MM_changeProp(fieldname, '', 'backgroundColor', '#fff');
}
