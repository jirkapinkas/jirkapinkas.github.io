(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{26:function(e,i,t){var n,o,a;!function(l){"use strict";o=[t(0)],void 0===(a="function"==typeof(n=function(e){e.fn.unveil=function(i){i=i||{};var t=e(window),n=(t.height(),{placeholder:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",offset:0,breakpoints:[],throttle:250,debug:!1,attribute:"src",container:t,retina:window.devicePixelRatio>1,loading:null,loaded:null}),o=e.extend(!0,{},n,i);o.debug&&console.log("Called unveil on",this.length,"elements with the following options:",o),o.breakpoints.sort((function(e,i){return i.minWidth-e.minWidth}));var a=o.container.data("unveil");function l(e){e.removeClass("unveil-placeholder unveil-loading"),e.addClass("unveil-loaded")}function r(){if(!e(this).is(":hidden")){var i={top:0-o.offset,bottom:t.height()+o.offset},n=o.container[0]!==t[0],a=this.getBoundingClientRect();if(n){var l=o.container[0].getBoundingClientRect();if(u(i,l)){var r=l.top-o.offset,s=l.bottom+o.offset;return u({top:r>i.top?r:i.top,bottom:s<i.bottom?s:i.bottom},a)}return!1}return u(i,a)}}function u(e,i){return i.bottom>=e.top&&i.top<=e.bottom}function s(e){var i=!1;return function(){i||(i=!0,setTimeout((function(){e(),i=!1}),o.throttle))}}function d(){if(o.debug&&console.log("Unveiling"),a.images){var e=a.images.filter(r);e.trigger("unveil.unveil"),a.images=a.images.not(e),e.length&&o.debug&&console.log("New images in view",e.length,", leaves",a.length,"in collection")}}function c(){o.container.off(".unveil").removeData("unveil"),a.images.off(".unveil").removeData("unveil"),a.initialized=!1,a.images=null}return a||(a={images:e(),initialized:!1},o.container.data("unveil",a)),this.one("unveil.unveil",(function(){var i,n,a,r,u=e(this),s=t.width(),c=o.attribute;for(i=0;i<o.breakpoints.length;i++){var g=o.breakpoints[i].attribute.replace(/^data-/,"");if(s>=o.breakpoints[i].minWidth&&u.data(g)){c=g;break}}(a=r=u.data(c))&&-1!==a.indexOf("|")&&(r=a.split("|")[1],a=a.split("|")[0]),a&&(n=o.retina&&r?r:a,o.debug&&console.log("Unveiling image",{attribute:c,retina:o.retina,defaultSrc:a,retinaSrc:r,targetSrc:n}),u.addClass("unveil-loading"),"function"==typeof o.loading&&o.loading.call(this),u.trigger("loading.unveil"),u.one("load.unveil",(function(){l(u),"function"==typeof o.loaded&&o.loaded.call(this),u.trigger("loaded.unveil"),d()})),"IMG"===this.nodeName?u.prop("src",n):e("<img/>").attr("src",n).one("load.unveil",(function(){e(this).remove(),u.css("backgroundImage","url("+n+")").trigger("load.unveil")})),this.complete&&l(u))})),this.one("destroy.unveil",(function(){e(this).off(".unveil").removeData("unveil"),a.images&&(a.images=a.images.not(this),a.images.length||c())})),this.each((function(){var i=e(this),t=i.data("src-placeholder")||o.placeholder;i.data("unveil")||(a.images=e(a.images).add(this),i.data("unveil",!0),i.data(o.attribute)||i.data(o.attribute,i.prop(o.attribute)),i.one("load.unveil",(function(){var i=e(this);i.hasClass("unveil-loaded")||(i.addClass("unveil-placeholder"),d())})).prop("src","").prop("src",t))})),o.debug&&console.log("Images now in collection",a.images.length),a.initialized||(o.container.on("resize.unveil",s((function(){t.height(),d()}))).on("scroll.unveil",s(d)).on("lookup.unveil",d).on("destroy.unveil",c),a.initialized=!0),setTimeout(d,0),this}})?n.apply(i,o):n)||(e.exports=a)}()}}]);