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
  
  $(document).on('click', 'a[href="#filters"]', function(e) {
    // console.log($('#filters').offset());
    e.preventDefault();
    $(document).scrollTo($('#filters'), 1000);
  });
  
});