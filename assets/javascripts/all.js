(function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,s=this,r=s.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,s=this.getListenersAsObject(t),r="object"==typeof i;for(n in s)s.hasOwnProperty(n)&&-1===e(s[n],i)&&s[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,s,r=this.getListenersAsObject(t);for(s in r)r.hasOwnProperty(s)&&(n=e(r[s],i),-1!==n&&r[s].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,s,r=t?this.removeListener:this.addListener,o=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(s=e[n])&&("function"==typeof s?r.call(this,n,s):o.call(this,n,s));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,s,r,o=this.getListenersAsObject(t);for(s in o)if(o.hasOwnProperty(s))for(n=o[s].length;n--;)i=o[s][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return s.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}).call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var s=function(){};i.removeEventListener?s=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(s=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:s};"function"==typeof define&&define.amd?define("eventie/eventie",r):t.eventie=r}(this),function(t,e){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function s(t){return"[object Array]"===f.call(t)}function r(t){var e=[];if(s(t))e=t;else if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,i){if(!(this instanceof o))return new o(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),l&&(this.jqDeferred=new l.Deferred);var s=this;setTimeout(function(){s.check()})}function a(t){this.img=t}function h(t){this.src=t,u[t]=this}var l=t.jQuery,c=t.console,d="undefined"!=typeof c,f=Object.prototype.toString;o.prototype=new e,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);var n=i.nodeType;if(n&&(1===n||9===n||11===n))for(var s=i.querySelectorAll("img"),r=0,o=s.length;o>r;r++){var a=s[r];this.addImage(a)}}},o.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},o.prototype.check=function(){function t(t,s){return e.options.debug&&d&&c.log("confirm",t,s),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var s=0;n>s;s++){var r=this.images[s];r.on("confirm",t),r.check()}},o.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},l&&(l.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(l(this))}),a.prototype=new e,a.prototype.check=function(){var t=u[this.img.src]||new h(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var u={};return h.prototype=new e,h.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},h.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},h.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},h.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},o}),function(t){t.fn.imagefill=function(e){function i(){a=0,h=0,s.each(function(){o=t(this).find("img").width()/t(this).find("img").height();var e=t(this).outerWidth(),i=t(this).outerHeight();a+=t(this).outerHeight(),h+=t(this).outerWidth();var n=e/i;t(this).find("img").css(o>n?{width:"auto",height:i,top:0,left:-(i*o-e)/2}:{width:e,height:"auto",top:-(e/o-i)/2,left:0})})}function n(){var e=0,r=0;s.each(function(){r+=t(this).outerHeight(),e+=t(this).outerWidth()}),(a!==r||h!==e)&&i(),setTimeout(n,c.throttle)}var s=this,r=s.find("img").addClass("loading").css({position:"absolute"}),o=1,a=0,h=0,l={runOnce:!1,throttle:200},c=t.extend({},l,e),d=s.css("position");return s.css({overflow:"hidden",position:"static"===d?"relative":d}),s.each(function(){a+=t(this).outerHeight(),h+=t(this).outerWidth()}),s.imagesLoaded().done(function(){o=r.width()/r.height(),r.removeClass("loading"),i(),c.runOnce||n()}),this}}(jQuery),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(t.jQuery)}(this,function(t){"use strict";function e(t,e){return typeof t===e}function i(t,e){return!!~(""+t).indexOf(e)}function n(t,e){for(var n in t){var s=t[n];if(!i(s,"-")&&void 0!==u[s])return"pfx"==e?s:!0}return!1}function s(t,i,n){for(var s in t){var r=i[t[s]];if(void 0!==r)return n===!1?t[s]:e(r,"function")?r.bind(n||i):r}return!1}function r(t,i,r){var o=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+g.join(o+" ")+o).split(" ");return e(i,"string")||e(i,"undefined")?n(a,i):(a=(t+" "+p.join(o+" ")+o).split(" "),s(a,i,r))}var o,a,h={image:null,imageAttribute:"image",holderClass:"imageHolder",container:t("body"),speed:.2,coverRatio:.75,holderMinHeight:200,extraHeight:0,mediaWidth:1600,mediaHeight:900,parallax:!0,touch:!1},l={},c=document.documentElement,d="imageScrollModernizr",f=document.createElement(d),u=f.style,m="Webkit Moz O ms",g=m.split(" "),p=m.toLowerCase().split(" "),v={},y=t(window),E=0,w="",H=function(t,e,i,n){var s,r,o,a,h=document.createElement("div"),l=document.body,f=l||document.createElement("body");if(parseInt(i,10))for(;i--;)o=document.createElement("div"),o.id=n?n[i]:d+(i+1),h.appendChild(o);return s=["&#173;",'<style id="s',d,'">',t,"</style>"].join(""),h.id=d,(l?h:f).innerHTML+=s,f.appendChild(h),l||(f.style.background="",f.style.overflow="hidden",a=c.style.overflow,c.style.overflow="hidden",c.appendChild(f)),r=e(h,t),l?h.parentNode.removeChild(h):(f.parentNode.removeChild(f),c.style.overflow=a),!!r};return v.csstransforms=function(){return!!r("transform")},v.csstransforms3d=function(){var t=!!r("perspective");return t&&"webkitPerspective"in c.style&&H("@media (transform-3d),(-webkit-transform-3d){#imageScrollModernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},l.prefixed=function(t,e,i){return e?r(t,e,i):r(t,"pfx")},window.requestAnimationFrame=l.prefixed("requestAnimationFrame",window)||function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-E)),n=window.setTimeout(function(){t(e+i)},i);return E=e+i,n},v.csstransforms3d()?w="csstransforms3d":v.csstransforms()&&(w="csstransforms"),""!==w&&(a=l.prefixed("transform")),o=function(e,i){return{init:function(){if(this.$imageHolder=t(e),this.settings=t.extend({},h,i),this.image=this.$imageHolder.data(this.settings.imageAttribute)||this.settings.image,this.mediaWidth=this.$imageHolder.data("width")||this.settings.mediaWidth,this.mediaHeight=this.$imageHolder.data("height")||this.settings.mediaHeight,this.coverRatio=this.$imageHolder.data("cover-ratio")||this.settings.coverRatio,this.extraHeight=this.$imageHolder.data("extra-height")||this.settings.extraHeight,this.additionalClasses=this.$imageHolder.data("add-classes")||"",this.ticking=!1,!this.image)throw new Error("You need to provide either a data-img attr or an image option");this.$scrollingElement=t("<img/>",{src:this.image}),this.settings.touch===!0?this.$scrollingElement.css({maxWidth:"100%"}).prependTo(this.$imageHolder):this.settings.parallax===!0?(this.$scrollerHolder=t("<div/>",{html:this.$imageHolder.html()}).css({top:0,visibility:"hidden",position:"fixed",overflow:"hidden"}).addClass(this.settings.holderClass).prependTo(this.settings.container),this.$imageHolder.css("visibility","hidden").empty(),this.$scrollingElement.css({position:"absolute",visibility:"hidden",maxWidth:"none"}).prependTo(this.$scrollerHolder)):(this.$scrollerHolder=this.$imageHolder.css({overflow:"hidden"}),this.$scrollingElement.css({position:"relative",overflow:"hidden"}).prependTo(this.$imageHolder)),this.settings.touch===!1&&(this._adjustImgHolderHeights(),this.settings.parallax===!0?this._updatePositions():this._updateFallbackPositions(),this._bindEvents())},_adjustImgHolderHeights:function(){var t,e,i,n,s,r,o,a,h,l=y.height(),c=y.width()-this.settings.container.offset().left,d=this.coverRatio*l;d=(this.settings.holderMinHeight<d?Math.floor(d):this.settings.holderMinHeight)+this.extraHeight,a=Math.floor(l-(l-d)*this.settings.speed),r=Math.round(this.mediaWidth*(a/this.mediaHeight)),r>=c?o=a:(r=c,o=Math.round(this.mediaHeight*(r/this.mediaWidth))),h=a-d,s=l+d,n=2*l*(1-this.settings.speed)-h,t=-(h/2+(o-a)/2),e=Math.round((r-c)*-.5),i=t-n/2,this.$scrollingElement.css({height:o,width:r}),this.$imageHolder.height(d),this.$scrollerHolder.css({height:d,width:r}),this.$scrollerHolder.addClass(this.additionalClasses),this.scrollingState={winHeight:l,fromY:i,imgTopPos:t,imgLeftPos:e,imgHolderHeight:d,imgScrollingDistance:n,travelDistance:s,holderDistanceFromTop:this.$imageHolder.offset().top-y.scrollTop()}},_bindEvents:function(){var t=this;y.on("resize",function(){t._adjustImgHolderHeights(),t.settings.parallax===!0?t._requestTick():t._updateFallbackPositions()}),this.settings.parallax===!0&&y.on("scroll",function(){t.scrollingState.holderDistanceFromTop=t.$imageHolder.offset().top-y.scrollTop(),t._requestTick()})},_requestTick:function(){var t=this;this.ticking||(this.ticking=!0,requestAnimationFrame(function(){t._updatePositions()}))},_updatePositions:function(){if(this.scrollingState.holderDistanceFromTop<=this.scrollingState.winHeight&&this.scrollingState.holderDistanceFromTop>=-this.scrollingState.imgHolderHeight){var t=this.scrollingState.holderDistanceFromTop+this.scrollingState.imgHolderHeight,e=t/this.scrollingState.travelDistance,i=Math.round(this.scrollingState.fromY+this.scrollingState.imgScrollingDistance*(1-e)),n=this.settings.container.offset().left;this.$scrollerHolder.css(this._getCSSObject({transform:a,left:n,x:Math.ceil(this.scrollingState.imgLeftPos)+(""===w&&n>0?n:0),y:Math.round(this.scrollingState.holderDistanceFromTop),visibility:"visible"})),this.$scrollingElement.css(this._getCSSObject({transform:a,x:0,y:i,visibility:"visible"}))}else this.$scrollerHolder.css({visibility:"hidden"}),this.$scrollingElement.css({visibility:"hidden"});this.ticking=!1},_updateFallbackPositions:function(){this.$scrollerHolder.css({width:"100%"}),this.$scrollingElement.css({top:this.scrollingState.imgTopPos,left:this.scrollingState.imgLeftPos})},_getCSSObject:function(t){return"csstransforms3d"===w?t.transform="translate3d("+t.x+"px, "+t.y+"px, 0)":"csstransforms"===w?t.transform="translate("+t.x+"px, "+t.y+"px)":(t.top=t.y,t.left=t.x),t}}},o.defaults=h,t.fn.imageScroll=function(t){return this.each(function(){new o(this,t).init()})},o}),$(function(){$(".img-holder").imageScroll(),$(".listing figure").imagefill()});