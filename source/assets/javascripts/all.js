//= require 'imagesloaded.pkgd'
//= require 'jquery-imagefill'
//= require_tree .

$(function() {
  var touch = Modernizr.touch;
  $('.img-holder').imageScroll({
    imageAttribute: (touch === true) ? 'image-mobile' : 'image',
    touch: touch
  });
  $('.listing figure').imagefill(); 
});