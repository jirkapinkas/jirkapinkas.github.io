(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[878],{5878:(e,n,a)=>{"use strict";function r(e,n){for(var a=0;a<n.length;a++){var r=n[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t;a.r(n),a.d(n,{default:()=>o});var o=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,o,s;return n=e,(o=[{key:"toggleFullscreen",value:function(e,n,a){if(t)this.hide();else{t=!0;var r=50+$(document).scrollTop(),o=$(window).height()-50;$("#dependency-tree-wrapper-"+e).css({position:"absolute",left:"0px",top:r+"px",width:"100%",height:o,"z-index":10001}),$("#dependency-tree-wrapper-"+e).css({"background-color":"white"}),this.loadTree(e,n,o-20,a),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-compress")}}},{key:"loadTree",value:function(e,n,a,r,t){var o=this;App.applyDebounce(".filterDependencyTree",(function(){var a=$(this).val();o.filter(a,e,n)}));var s=groupId,i=artifactId,l=n.split(",")[0],c=function(n){for(var r=0;r<n.nodes.length;r++){var s=n.nodes[r];s.label=s.id.split(":").join("\n"),s.errs&&"N"!==s.errs&&(s.label+="\nERRORS: "+o.getProblems(s.errs).replace(/<\/?[^>]+(>|$)/g,"")+"!!!")}if(t)for(var i=0;i<n.nodes.length;i++){var l=n.nodes[i];l.center?l.font="14px arial green":-1!==l.id.toLowerCase().indexOf(t.toLowerCase())?l.font="20px arial blue":l.font=void 0}else for(var c=0;c<n.nodes.length;c++){var d=n.nodes[c];d.center?d.font="14px arial green":d.font=void 0}$("#dependency-tree-"+e).html(""),a?$("#dependency-tree-"+e).css("height",a+"px"):$("#dependency-tree-"+e).css("height","400px");var p={physics:{enabled:!0},layout:{randomSeed:0},nodes:{shape:"text",mass:1.5},interaction:{navigationButtons:!0}};o.initVisNetwork((function(a){var r=document.getElementById("dependency-tree-"+e),t=new a.DataSet(n.nodes),o=new a.DataSet(n.edges);new a.Network(r,{nodes:t,edges:o},p).on("doubleClick",(function(e){var n=e.nodes[0].split(":");n.pop();var a="/artifact/"+n.join("/");window.location.href=a}))}))};r?c(r):$.post("/artifact/tree",{groupId:s,artifactId:i,version:l},(function(e){c(e)}))}},{key:"initVisNetwork",value:function(e){a.e(601).then(a.bind(a,5601)).then((function(n){e(n)}))}},{key:"getProblems",value:function(e){var n="",a=e.split(",");return $.inArray("R",a)>=0&&(n+="<span class='label label-warning'>version range</span> "),$.inArray("S",a)>=0&&(n+="<span class='label label-warning'>snapshot</span> "),$.inArray("O",a)>=0&&(n+="<span class='label label-warning'>retired artifact</span> "),($.inArray("V",a)>=0||$.inArray("C",a)>=0)&&(n+="<span class='label label-warning'>some unknown error</span> "),n}},{key:"filter",value:function(e,n,a){var r=e.trim();if(0===r.length||r.length>=3){var t=$(window).height()-50;this.loadTree(n,a,t-20,null,e)}}},{key:"hide",value:function(){$(".dependency-tree-wrapper").css({display:"none"}),t=!1,App.withArtifact((function(e){e.activateDefaultTab()})),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-expand")}}])&&r(n.prototype,o),s&&r(n,s),e}()}}]);