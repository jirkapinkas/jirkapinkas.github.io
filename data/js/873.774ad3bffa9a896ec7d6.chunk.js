(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[873],{8873:(t,e,i)=>{var o,n,a;!function(l){"use strict";n=[i(9755)],void 0===(a="function"==typeof(o=function(t){var e="unveil",i="."+e,o="src",n="placeholder";t.fn.unveil=function(a){a=a||{};var l=t(window),r=(l.height(),{placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",offset:0,breakpoints:[],throttle:250,debug:!1,attribute:o,container:l,retina:window.devicePixelRatio>1,loading:null,loaded:null}),s=t.extend(!0,{},r,a);s.debug&&console.log("Called unveil on",this.length,"elements with the following options:",s),s.breakpoints.sort((function(t,e){return e.minWidth-t.minWidth}));var d=s.container.data(e);function g(t){t.removeClass(e+"-"+n+" "+e+"-loading"),t.addClass(e+"-loaded")}function u(){if(!t(this).is(":hidden")){var e={top:0-s.offset,bottom:l.height()+s.offset},i=s.container[0]!==l[0],o=this.getBoundingClientRect();if(i){var n=s.container[0].getBoundingClientRect();if(c(e,n)){var a=n.top-s.offset,r=n.bottom+s.offset;return c({top:a>e.top?a:e.top,bottom:r<e.bottom?r:e.bottom},o)}return!1}return c(e,o)}}function c(t,e){return e.bottom>=t.top&&e.top<=t.bottom}function f(){l.height(),m()}function h(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){t(),e=!1}),s.throttle))}}function m(){if(s.debug&&console.log("Unveiling"),d.images){var t=d.images.filter(u);t.trigger(e+i),d.images=d.images.not(t),t.length&&s.debug&&console.log("New images in view",t.length,", leaves",d.length,"in collection")}}function p(){s.container.off(i).removeData(e),d.images.off(i).removeData(e),d.initialized=!1,d.images=null}return d||(d={images:t(),initialized:!1},s.container.data(e,d)),this.one(e+i,(function(){var n,a,r,d,u=t(this),c=l.width(),f=s.attribute;for(n=0;n<s.breakpoints.length;n++){var h=s.breakpoints[n].attribute.replace(/^data-/,"");if(c>=s.breakpoints[n].minWidth&&u.data(h)){f=h;break}}(r=d=u.data(f))&&-1!==r.indexOf("|")&&(d=r.split("|")[1],r=r.split("|")[0]),r&&(a=s.retina&&d?d:r,s.debug&&console.log("Unveiling image",{attribute:f,retina:s.retina,defaultSrc:r,retinaSrc:d,targetSrc:a}),u.addClass(e+"-loading"),"function"==typeof s.loading&&s.loading.call(this),u.trigger("loading"+i),u.one("load"+i,(function(){g(u),"function"==typeof s.loaded&&s.loaded.call(this),u.trigger("loaded"+i),m()})),"IMG"===this.nodeName?u.prop(o,a):t("<img/>").attr(o,a).one("load"+i,(function(){t(this).remove(),u.css("backgroundImage","url("+a+")").trigger("load"+i)})),this.complete&&g(u))})),this.one("destroy"+i,(function(){t(this).off(i).removeData(e),d.images&&(d.images=d.images.not(this),d.images.length||p())})),this.each((function(){var a=t(this),l=a.data(o+"-"+n)||s.placeholder;a.data(e)||(d.images=t(d.images).add(this),a.data(e,!0),a.data(s.attribute)||a.data(s.attribute,a.prop(s.attribute)),a.one("load"+i,(function(){var i=t(this);i.hasClass(e+"-loaded")||(i.addClass(e+"-"+n),m())})).prop(o,"").prop(o,l))})),s.debug&&console.log("Images now in collection",d.images.length),d.initialized||(s.container.on("resize"+i,h(f)).on("scroll"+i,h(m)).on("lookup"+i,m).on("destroy"+i,p),d.initialized=!0),setTimeout(m,0),this}})?o.apply(e,n):o)||(t.exports=a)}()}}]);