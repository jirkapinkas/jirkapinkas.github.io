(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[104],{1104:(t,e,a)=>{"use strict";function o(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}a.r(e),a.d(e,{default:()=>r}),a(3071),a(9104);var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,i;return e=t,(r=[{key:"jsPanel",value:function(t,e){a.e(964).then(a.bind(a,3757)).then((function(a){(new a.default).init(t,e)}))}},{key:"showDetail",value:function(t){var e="",a="";"DARK"===theme&&(e="background-color: #222222",a="override-resp-tab-content");var o="";o+="<div id='repository-"+t+"' style='padding:20px;"+e+"'>",o+="<ul class='resp-tabs-list repository-"+t+"'>",o+="<li class='"+a+"'>Maven</li>",o+="<li class='"+a+"'>Gradle</li>",o+="</ul>",o+="<div class='resp-tabs-container repository-"+t+"'>";var r=this.getRepository(repositories,t);o+=this.constructTabs(r),o+="</div>",o+="</div>";var i=500,n=$(window).height()-130;i>n&&(i=n);var s=740,c=$("body").innerWidth();s>c&&(s=c);var l="undefined";"DARK"===theme&&(l="#222222 filled"),this.jsPanel({closeOnEscape:!0,position:"center",panelSize:{width:s,height:i},headerTitle:"repository",content:o,headerControls:{controls:"closeonly"},theme:l},(function(){$("#repository-"+t).easyResponsiveTabs({tabidentify:"repository-"+t}),App.autoselect()}))}},{key:"showSpringBootJarExclude",value:function(t,e){var a,o="";"DARK"===theme&&(a="background-color:black;color:white;border:1px solid white"),o+="<div style='"+a+"'>",o+="<div style='padding:20px'>",o+="To exclude this artifact from Spring Boot JAR add this fragment to Spring Boot plugin configuration/excludes:",o+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+a+'">',o+="&lt;exclude&gt;\n",o+="   &lt;groupId&gt;"+t+"&lt;/groupId&gt;\n",o+="   &lt;artifactId&gt;"+e+"&lt;/artifactId&gt;\n",o+="&lt;/exclude&gt;",o+="</textarea>",o+='For more information see <a style="text-decoration: underline" href="https://docs.spring.io/spring-boot/docs/current/maven-plugin/examples/exclude-dependency.html">documentation</a>',o+="</div>",o+="</div>";var r=290,i=$(window).height()-130;r>i&&(r=i);var n=740,s=$("body").innerWidth();n>s&&(n=s);var c="undefined";"DARK"===theme&&(c="#222222 filled"),this.jsPanel({closeOnEscape:!0,position:"center",panelSize:{width:n,height:r},headerTitle:"repository",content:o,headerControls:{controls:"closeonly"},theme:c},(function(){App.autoselect()}))}},{key:"filter",value:function(t){var e=null,a=0;$("#accordion h3").each((function(){-1!==$(this).text().toLowerCase().indexOf(t.toLowerCase())?($(this).show(),e||(e=a)):$(this).hide(),a++})),t||(e=0),$("#accordion").accordion({active:e})}},{key:"getRepository",value:function(t,e){for(var a=0;a<t.length;a++)if(t[a].shortName===e)return t[a]}},{key:"constructTabs",value:function(t){var e="";return e+='<div class="mavenRepositoryTab">',e+=function(t){if(t){var e;if("DARK"===theme&&(e="background-color:black;color:white;border:1px solid white"),"central"===t.shortName)return"no special steps required";var a="Add to pom.xml inside tag &lt;repositories&gt;:";return a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+e+'">',a+="&lt;repository&gt;\n",a+="    &lt;id&gt;"+t.shortName+"&lt;/id&gt;\n",a+="    &lt;name&gt;"+t.name+"&lt;/name&gt;\n",a+="    &lt;url&gt;"+t.url+"&lt;/url&gt;\n",a+="&lt;/repository&gt;\n",a+="</textarea>",a+="Add to pom.xml inside tag &lt;pluginRepositories&gt;:",a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+e+'">',a+="&lt;pluginRepository&gt;\n",a+="    &lt;id&gt;"+t.shortName+"&lt;/id&gt;\n",a+="    &lt;name&gt;"+t.name+"&lt;/name&gt;\n",a+="    &lt;url&gt;"+t.url+"&lt;/url&gt;\n",a+="&lt;/pluginRepository&gt;\n",a+="</textarea>"}}(t),e+="</div>",e+='<div class="gradleRepositoryTab">',e+=function(t){if(t){var e;"DARK"===theme&&(e="background-color:black;color:white;border:1px solid white");var a="Add to build.gradle:";return"central"===t.shortName?(a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+e+'">',a+="repositories {\n",a+="    maven {\n",a+="        mavenCentral()\n",a+="    }\n",a+="}\n",a+="</textarea>"):(a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+e+'">',a+="repositories {\n",a+="    maven {\n",a+="        url '"+t.url+"'\n",a+="    }\n",a+="}\n",a+="</textarea>"),a}}(t),e+="</div>"}}])&&o(e.prototype,r),i&&o(e,i),t}()},9104:()=>{!function(t){t.fn.extend({easyResponsiveTabs:function(e){var a=e=t.extend({type:"default",width:"auto",fit:!0,closed:!1,tabidentify:"",activetab_bg:"white",inactive_bg:"#F5F5F5",active_border_color:"#c1c1c1",active_content_border_color:"#c1c1c1",activate:function(){}},e),o=a.type,r=a.fit,i=a.width,n=window.location.hash;t(this).bind("tabactivate",(function(t,a){"function"==typeof e.activate&&e.activate.call(a,t)})),this.each((function(){var a,s=t(this),c=s.find("ul.resp-tabs-list."+e.tabidentify),l=s.attr("id");s.find("ul.resp-tabs-list."+e.tabidentify+" li").addClass("resp-tab-item").addClass(e.tabidentify),s.css({display:"block",width:i}),"vertical"==e.type&&c.css("margin-top","3px"),s.find(".resp-tabs-container."+e.tabidentify).css("border-color",e.active_content_border_color),s.find(".resp-tabs-container."+e.tabidentify+" > div").addClass("resp-tab-content").addClass(e.tabidentify),function(){"vertical"==o&&s.addClass("resp-vtabs").addClass(e.tabidentify);1==r&&s.css({width:"100%",margin:"0px"});"accordion"==o&&(s.addClass("resp-easy-accordion").addClass(e.tabidentify),s.find(".resp-tabs-list").css("display","none"))}(),s.find(".resp-tab-content."+e.tabidentify).before("<h2 class='resp-accordion "+e.tabidentify+"' role='tab'><span class='resp-arrow'></span></h2>"),s.find(".resp-tab-content."+e.tabidentify).prev("h2").css({"background-color":e.inactive_bg,"border-color":e.active_border_color});var d=0;s.find(".resp-accordion").each((function(){a=t(this);var o=s.find(".resp-tab-item:eq("+d+")"),r=s.find(".resp-accordion:eq("+d+")");r.append(o.html()),r.data(o.data()),a.attr("aria-controls",e.tabidentify+"_tab_item-"+d),d++}));var b=0;s.find(".resp-tab-item").each((function(){$tabItem=t(this),$tabItem.attr("aria-controls",e.tabidentify+"_tab_item-"+b),$tabItem.attr("role","tab"),$tabItem.css({"background-color":e.inactive_bg,"border-color":"none"});var a=0;s.find(".resp-tab-content."+e.tabidentify).each((function(){t(this).attr("aria-labelledby",e.tabidentify+"_tab_item-"+a).css({"border-color":e.active_border_color}),a++})),b++}));var p=0;if(""!=n){var f=n.match(new RegExp(l+"([0-9]+)"));null!==f&&2===f.length&&(p=parseInt(f[1],10)-1)>b&&(p=0)}t(s.find(".resp-tab-item."+e.tabidentify)[p]).addClass("resp-tab-active").css({"background-color":e.activetab_bg,"border-color":e.active_border_color}),!0===e.closed||"accordion"===e.closed&&!c.is(":visible")||"tabs"===e.closed&&c.is(":visible")||(t(s.find(".resp-accordion."+e.tabidentify)[p]).addClass("resp-tab-active").css({"background-color":e.activetab_bg+" !important","border-color":e.active_border_color,background:"none"}),t(s.find(".resp-tab-content."+e.tabidentify)[p]).addClass("resp-tab-content-active").addClass(e.tabidentify).attr("style","display:block")),s.find("[role=tab]").each((function(){t(this).click((function(){var a=t(this),o=a.attr("aria-controls");if(a.hasClass("resp-accordion")&&a.hasClass("resp-tab-active"))return s.find(".resp-tab-content-active."+e.tabidentify).slideUp("",(function(){t(this).addClass("resp-accordion-closed")})),a.removeClass("resp-tab-active").css({"background-color":e.inactive_bg,"border-color":"none"}),!1;!a.hasClass("resp-tab-active")&&a.hasClass("resp-accordion")?(s.find(".resp-tab-active."+e.tabidentify).removeClass("resp-tab-active").css({"background-color":e.inactive_bg,"border-color":"none"}),s.find(".resp-tab-content-active."+e.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),s.find("[aria-controls="+o+"]").addClass("resp-tab-active").css({"background-color":e.activetab_bg,"border-color":e.active_border_color}),s.find(".resp-tab-content[aria-labelledby = "+o+"]."+e.tabidentify).slideDown().addClass("resp-tab-content-active")):(s.find(".resp-tab-active."+e.tabidentify).removeClass("resp-tab-active").css({"background-color":e.inactive_bg,"border-color":"none"}),s.find(".resp-tab-content-active."+e.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),s.find("[aria-controls="+o+"]").addClass("resp-tab-active").css({"background-color":e.activetab_bg,"border-color":e.active_border_color}),s.find(".resp-tab-content[aria-labelledby = "+o+"]."+e.tabidentify).addClass("resp-tab-content-active").attr("style","display:block")),a.trigger("tabactivate",a)}))})),t(window).resize((function(){s.find(".resp-accordion-closed").removeAttr("style")}))}))}})}(jQuery)}}]);