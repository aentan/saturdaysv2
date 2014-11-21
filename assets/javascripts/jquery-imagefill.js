/**
 * imagefill.js
 * Author & copyright (c) 2013: John Polacek
 * johnpolacek.com
 * https://twitter.com/johnpolacek
 *
 * Dual MIT & GPL license
 *
 * Project Page: http://johnpolacek.github.io/imagefill.js
 *
 * The jQuery plugin for making images fill their containers (and be centered)
 *
 * EXAMPLE
 * Given this html:
 * <div class="container"><img src="myawesomeimage" /></div>
 * $('.container').imagefill(); // image stretches to fill container
 *
 * REQUIRES:
 * imagesLoaded - https://github.com/desandro/imagesloaded
 *
 */
!function(t){t.fn.imagefill=function(i){function e(){u=0,d=0,o.each(function(){s=t(this).find("img").width()/t(this).find("img").height();var i=t(this).outerWidth(),e=t(this).outerHeight();u+=t(this).outerHeight(),d+=t(this).outerWidth();var h=i/e;t(this).find("img").css(s>h?{width:"auto",height:e,top:0,left:-(e*s-i)/2}:{width:i,height:"auto",top:-(i/s-e)/2,left:0})})}function h(){var i=0,n=0;o.each(function(){n+=t(this).outerHeight(),i+=t(this).outerWidth()}),(u!==n||d!==i)&&e(),setTimeout(h,a.throttle)}var o=this,n=o.find("img").addClass("loading").css({position:"absolute"}),s=1,u=0,d=0,r={runOnce:!1,throttle:200},a=t.extend({},r,i),c=o.css("position");return o.css({overflow:"hidden",position:"static"===c?"relative":c}),o.each(function(){u+=t(this).outerHeight(),d+=t(this).outerWidth()}),o.imagesLoaded().done(function(){s=n.width()/n.height(),n.removeClass("loading"),e(),a.runOnce||h()}),this}}(jQuery);