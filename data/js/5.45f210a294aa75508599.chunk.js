(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,11],{22:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.r(t),a.d(t,"default",(function(){return i})),a(2),a(35);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,(i=[{key:"jsPanel",value:function(e,t){a.e(18).then(a.t.bind(null,40,7)).then((function(a){$.jsPanel(e),t()}))}},{key:"showDetail",value:function(e){var t="",a="";"DARK"===theme&&(t="background-color: #222222",a="override-resp-tab-content");var r="";r+="<div id='repository-"+e+"' style='padding:20px;"+t+"'>",r+="<ul class='resp-tabs-list repository-"+e+"'>",r+="<li class='"+a+"'>Maven</li>",r+="<li class='"+a+"'>Gradle</li>",r+="</ul>",r+="<div class='resp-tabs-container repository-"+e+"'>";var i=this.getRepository(repositories,e);r+=this.constructTabs(i),r+="</div>",r+="</div>";var n=500,o=$(window).height()-130;n>o&&(n=o);var l=740,s=$("body").innerWidth();l>s&&(l=s);var c="undefined";"DARK"===theme&&(c="#222222 filled"),this.jsPanel({closeOnEscape:!0,position:"center",panelSize:{width:l,height:n},headerTitle:"repository",content:r,headerControls:{controls:"closeonly"},theme:c},(function(){$("#repository-"+e).easyResponsiveTabs({tabidentify:"repository-"+e}),App.autoselect()}))}},{key:"showSpringBootJarExclude",value:function(e,t){var a,r="";"DARK"===theme&&(a="background-color:black;color:white;border:1px solid white"),r+="<div style='"+a+"'>",r+="<div style='padding:20px'>",r+="To exclude this artifact from Spring Boot JAR add this fragment to Spring Boot plugin configuration/excludes:",r+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+a+'">',r+="&lt;exclude&gt;\n",r+="   &lt;groupId&gt;"+e+"&lt;/groupId&gt;\n",r+="   &lt;artifactId&gt;"+t+"&lt;/artifactId&gt;\n",r+="&lt;/exclude&gt;",r+="</textarea>",r+='For more information see <a style="text-decoration: underline" href="https://docs.spring.io/spring-boot/docs/current/maven-plugin/examples/exclude-dependency.html">documentation</a>',r+="</div>",r+="</div>";var i=290,n=$(window).height()-130;i>n&&(i=n);var o=740,l=$("body").innerWidth();o>l&&(o=l);var s="undefined";"DARK"===theme&&(s="#222222 filled"),this.jsPanel({closeOnEscape:!0,position:"center",panelSize:{width:o,height:i},headerTitle:"repository",content:r,headerControls:{controls:"closeonly"},theme:s},(function(){App.autoselect()}))}},{key:"filter",value:function(e){var t=null,a=0;$("#accordion h3").each((function(){-1!==$(this).text().toLowerCase().indexOf(e.toLowerCase())?($(this).show(),t||(t=a)):$(this).hide(),a++})),e||(t=0),$("#accordion").accordion({active:t})}},{key:"getRepository",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a].shortName===t)return e[a]}},{key:"constructTabs",value:function(e){var t="";return t+='<div class="mavenRepositoryTab">',t+=function(e){if(e){var t;if("DARK"===theme&&(t="background-color:black;color:white;border:1px solid white"),"central"===e.shortName)return"no special steps required";var a="Add to pom.xml inside tag &lt;repositories&gt;:";return a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+t+'">',a+="&lt;repository&gt;\n",a+="    &lt;id&gt;"+e.shortName+"&lt;/id&gt;\n",a+="    &lt;name&gt;"+e.name+"&lt;/name&gt;\n",a+="    &lt;url&gt;"+e.url+"&lt;/url&gt;\n",a+="&lt;/repository&gt;\n",a+="</textarea>",a+="Add to pom.xml inside tag &lt;pluginRepositories&gt;:",a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+t+'">',a+="&lt;pluginRepository&gt;\n",a+="    &lt;id&gt;"+e.shortName+"&lt;/id&gt;\n",a+="    &lt;name&gt;"+e.name+"&lt;/name&gt;\n",a+="    &lt;url&gt;"+e.url+"&lt;/url&gt;\n",a+="&lt;/pluginRepository&gt;\n",a+="</textarea>"}}(e),t+="</div>",t+='<div class="gradleRepositoryTab">',t+=function(e){if(e){var t;"DARK"===theme&&(t="background-color:black;color:white;border:1px solid white");var a="Add to build.gradle:";return"central"===e.shortName?(a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+t+'">',a+="repositories {\n",a+="    maven {\n",a+="        mavenCentral()\n",a+="    }\n",a+="}\n",a+="</textarea>"):(a+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()" style="'+t+'">',a+="repositories {\n",a+="    maven {\n",a+="        url '"+e.url+"'\n",a+="    }\n",a+="}\n",a+="</textarea>"),a}}(e),t+="</div>"}}])&&r(t.prototype,i),n&&r(t,n),e}()},23:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i;a.r(t),a.d(t,"default",(function(){return n}));var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"toggleFullscreen",value:function(e,t,a){if(i)this.hide();else{i=!0;var r=50+$(document).scrollTop(),n=$(window).height()-50;$("#dependency-tree-wrapper-"+e).css({position:"absolute",left:"0px",top:r+"px",width:"100%",height:n,"z-index":10001}),$("#dependency-tree-wrapper-"+e).css({"background-color":"white"}),this.loadTree(e,t,n-20,a),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-compress")}}},{key:"loadTree",value:function(e,t,a,r,i){var n=this;App.applyDebounce(".filterDependencyTree",(function(){var a=$(this).val();n.filter(a,e,t)}));var o=groupId,l=artifactId,s=t.split(",")[0],c=function(t){for(var r=0;r<t.nodes.length;r++){var o=t.nodes[r];o.label=o.id.split(":").join("\n"),o.errs&&"N"!==o.errs&&(o.label+="\nERRORS: "+n.getProblems(o.errs).replace(/<\/?[^>]+(>|$)/g,"")+"!!!")}if(i)for(var l=0;l<t.nodes.length;l++){var s=t.nodes[l];s.center?s.font="14px arial green":-1!==s.id.toLowerCase().indexOf(i.toLowerCase())?s.font="20px arial blue":s.font=void 0}else for(var c=0;c<t.nodes.length;c++){var d=t.nodes[c];d.center?d.font="14px arial green":d.font=void 0}$("#dependency-tree-"+e).html(""),a?$("#dependency-tree-"+e).css("height",a+"px"):$("#dependency-tree-"+e).css("height","400px");var p={physics:{enabled:!0},layout:{randomSeed:0},nodes:{shape:"text",mass:1.5},interaction:{navigationButtons:!0}};n.initVisNetwork((function(a){var r=document.getElementById("dependency-tree-"+e),i=new a.DataSet(t.nodes),n=new a.DataSet(t.edges);new a.Network(r,{nodes:i,edges:n},p).on("doubleClick",(function(e){var t=e.nodes[0].split(":");t.pop();var a="/artifact/"+t.join("/");window.location.href=a}))}))};r?c(r):$.post("/artifact/tree",{groupId:o,artifactId:l,version:s},(function(e){c(e)}))}},{key:"initVisNetwork",value:function(e){a.e(8).then(a.bind(null,41)).then((function(t){e(t)}))}},{key:"getProblems",value:function(e){var t="",a=e.split(",");return $.inArray("R",a)>=0&&(t+="<span class='label label-warning'>version range</span> "),$.inArray("S",a)>=0&&(t+="<span class='label label-warning'>snapshot</span> "),$.inArray("O",a)>=0&&(t+="<span class='label label-warning'>retired artifact</span> "),($.inArray("V",a)>=0||$.inArray("C",a)>=0)&&(t+="<span class='label label-warning'>some unknown error</span> "),t}},{key:"filter",value:function(e,t,a){var r=e.trim();if(0===r.length||r.length>=3){var i=$(window).height()-50;this.loadTree(t,a,i-20,null,e)}}},{key:"hide",value:function(){$(".dependency-tree-wrapper").css({display:"none"}),i=!1,App.withArtifact((function(e){e.activateDefaultTab()})),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-expand")}}])&&r(t.prototype,n),o&&r(t,o),e}()},30:function(e,t,a){"use strict";function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}a.r(t),a.d(t,"default",(function(){return o}));var i=a(22),n=a(23);a(35),a(2);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o,l;return t=e,(o=[{key:"activateDefaultTab",value:function(){var e=window.localStorage.getItem("defaultTab");null!=e&&setTimeout("$('ul.resp-tabs-list ."+e+"').trigger('click');",100)}},{key:"storeDefaultTab",value:function(e){var t=window.localStorage,a=$(e.target).attr("class"),r=null;a.indexOf("tabMaven")>-1?r="tabMaven":a.indexOf("tabGradle")>-1?r="tabGradle":a.indexOf("tabIvy")>-1?r="tabIvy":a.indexOf("tabScala")>-1?r="tabScala":a.indexOf("tabGroovy")>-1?r="tabGroovy":a.indexOf("tabLeiningen")>-1&&(r="tabLeiningen"),null!=r&&t.setItem("defaultTab",r)}},{key:"constructAccordionItem",value:function(e,t,a,r,o,l){var s=new n.default,c=t[6],d="";d+='<ul class="resp-tabs-list '+e+'">',d+='<li class="tabMaven">Maven</li>',d+='<li class="tabIvy">Ivy</li>',d+='<li class="tabGradle">Gradle</li>',d+='<li class="tabScala">Scala</li>',d+='<li class="tabGroovy">Groovy</li>',d+='<li class="tabLeiningen">Leiningen</li>',d+="<li>Download</li>",null!=t[7]&&"null"!==t[7]&&(d+="<li>Parent</li>"),d+="<li onclick=\"App.dependencyTreeLoadTree('"+e+"', '"+t+"')\">",d+=t[10]+" dependencies","N"!==t[11]&&(d+=' <i class="fas fa-exclamation-triangle" style="color:#cc9933" title="There MAY be some issue with transitive dependencies."></i>'),d+="</li>",d+="<li>Module name ",d+=this.getFace(t[12],t[13]),d+="</li>",d+="</ul>",d+='<div class="resp-tabs-container '+e+'">',d+="<div>",d+='<textarea class="form-control autoselect" rows="5" wrap="off" onclick="App.copyToClipboard()">',d+="&lt;dependency&gt;\n",d+="   &lt;groupId&gt;"+r+"&lt;/groupId&gt;\n",d+="   &lt;artifactId&gt;"+o+"&lt;/artifactId&gt;\n",d+="   &lt;version&gt;"+t[0]+"&lt;/version&gt;\n",a&&(d+="   &lt;scope&gt;"+a+"&lt;/scope&gt;\n"),d+="&lt;/dependency&gt;",d+="</textarea>",d+="</div>",d+="<div>",d+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',d+='&lt;dependency org="'+r+'" name="'+o+'" rev="'+t[0]+'" /&gt;',d+="</textarea>",d+="</div>",d+="<div>",d+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',d+="test"===a?"testImplementation '"+r+":"+o+":"+t[0]+"'":"provided"===a?"compileOnly '"+r+":"+o+":"+t[0]+"'":"implementation '"+r+":"+o+":"+t[0]+"'",d+="</textarea>",d+="</div>",d+="<div>",d+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',d+='libraryDependencies += "'+r+'" % "'+o+'" % "'+t[0]+'"',d+="</textarea>",d+="</div>",d+="<div>",d+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',d+="@Grab(group='"+r+"', module='"+o+"', version='"+t[0]+"')",d+="</textarea>",d+="</div>",d+="<div>",d+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',d+="["+r+"/"+o+' "'+t[0]+'"]',d+="</textarea>",d+="</div>",d+="<div>";var p=function(e){var t=e.url;return t.endsWith("/")||(t+="/"),t}((new i.default).getRepository(l,c));return null!=t[2]&&("null"!==t[2]&&(d+='<a href="'+(p+r.split(".").join("/"))+"/"+o+"/"+t[0]+"/"+o+"-"+t[0]+"."+t[2]+'" class="btn btn-small btn-primary" style="color:white">'+t[2]+" ("+t[3]+")</a> "),d+='<a href="'+(p+r.split(".").join("/"))+"/"+o+"/"+t[0]+"/"+o+"-"+t[0]+'-sources.jar" class="btn btn-small btn-primary" style="color:white">source (if available)</a> ',d+='<a href="'+(p+r.split(".").join("/"))+"/"+o+"/"+t[0]+"/"+o+"-"+t[0]+'-javadoc.jar" class="btn btn-small btn-primary" style="color:white">javadoc (if available)</a> '),d+='<a href="'+(p+r.split(".").join("/"))+"/"+o+"/"+t[0]+"/"+o+"-"+t[0]+'.pom" class="btn btn-small btn-primary" style="color:white">pom</a> ',d+="</div>",null!=t[7]&&"null"!==t[7]&&(d+="<div>",d+='<a href="/artifact/'+t[7]+"/"+t[8]+'" style="color:#337ab7">',d+=t[7]+":"+t[8]+":"+t[9],d+="</a>",d+="</div>"),d+="<div class='dependency-tree-wrapper' id='dependency-tree-wrapper-"+e+"'>",d+="<div class='form-inline' style='position:absolute;z-index:1;'>",d+="<a href='?dependencyTree="+t[0]+"' class='btn btn-primary' style='color:white;margin-right:10px;' onclick='App.dependencyTreeToggleFullscreen(\""+e+'","'+t[0]+"\");return false;'>fullscreen <i class='fa fa-expand dependencyTreeToggleFullScreen'></i></a>",d+="<input type='text' class='form-control filterDependencyTree' placeholder='filter' style='margin-right:10px;' />",t[11]&&"N"!==t[11]&&(d+="<span>Dependencies include: ",d+="</span>",d+=s.getProblems(t[11])),d+="</div>",d+="<div id='dependency-tree-"+e+"'>",d+="</div>",d+="</div>",d+="<div>",null!=t[12]&&"null"!==t[12]?"MI"===t[13]?(d+=this.getFace(t[12],t[13]),d+=' name from module info: "',d+=t[12],d+='" '):(d+=this.getFace(t[12],t[13]),d+=' name from MANIFEST.MF: "',d+=t[12],d+='" '):(d+=this.getFace(t[12],t[13]),d+=" automatic name "),d+="</div>",d+="</div>"}},{key:"constructAccordionItemSB",value:function(e,t,a,r){var i="";return i+='<ul class="resp-tabs-list '+e+'">',i+='<li class="tabMaven">Maven</li>',i+='<li class="tabGradle">Gradle</li>',"provided"===t&&(i+='<li class="tabExclude">Spring Boot JAR Exclude</li>'),i+="</ul>",i+='<div class="resp-tabs-container '+e+'">',i+="<div>",i+='<textarea class="form-control autoselect" rows="5" wrap="off" onclick="App.copyToClipboard()">',i+="&lt;dependency&gt;\n",i+="   &lt;groupId&gt;"+a+"&lt;/groupId&gt;\n",i+="   &lt;artifactId&gt;"+r+"&lt;/artifactId&gt;\n",t&&(i+="   &lt;scope&gt;"+t+"&lt;/scope&gt;\n"),i+="&lt;/dependency&gt;",i+="</textarea>",i+="</div>",i+="<div>",i+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',i+="test"===t?"testImplementation '"+a+":"+r+"'":"provided"===t?"compileOnly '"+a+":"+r+"'":"implementation '"+a+":"+r+"'",i+="</textarea>",i+="</div>",i+="<div>","provided"===t&&(i+="To exclude this artifact from Spring Boot JAR add this fragment to Spring Boot plugin configuration/excludes:",i+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()">',i+="&lt;exclude&gt;\n",i+="   &lt;groupId&gt;"+a+"&lt;/groupId&gt;\n",i+="   &lt;artifactId&gt;"+r+"&lt;/artifactId&gt;\n",i+="&lt;/exclude&gt;",i+="</textarea>",i+='For more information see <a style="text-decoration: underline" href="https://docs.spring.io/spring-boot/docs/current/maven-plugin/examples/exclude-dependency.html">documentation</a>'),i+="</div>",i+="</div>"}},{key:"constructAccordion",value:function(e,t,a,r,i,n,o,l){var s=this.getAccordionHtml(a,r,i,n,o,l);$(e).html(s);var c=this;$(e).accordion({heightStyle:"panel",beforeActivate:function(e,s){var d,p=$(s.newPanel).attr("id");d=a&&"item-0"===p?c.constructAccordionItemSB(p,n,o,l):a?c.constructAccordionItem(p,r[p.replace("item-","")-1],n,o,l,i):c.constructAccordionItem(p,r[p.replace("item-","")],n,o,l,i),$(s.newPanel).html(d);var f={tabidentify:p,activate:function(e){c.storeDefaultTab(e)}};"DARK"===t&&(f.activetab_bg="#00bc8c",f.inactive_bg="#222222"),$("#"+p).easyResponsiveTabs(f),App.autoselect(p),c.activateDefaultTab()},create:function(e,a){var r={tabidentify:"item-0",activate:function(e){c.storeDefaultTab(e)}};"DARK"===t&&(r.activetab_bg="#00bc8c",r.inactive_bg="#222222"),$("#item-0").easyResponsiveTabs(r),c.activateDefaultTab(),App.autoselect("item-0")}})}},{key:"getAccordionHtml",value:function(e,t,a,r,n,o){var l="";e&&t.length>0&&(l+="<h3>",l+='<span class="label label-primary" style="font-size:14px">',l+="Spring Boot",l+="</span>",l+="</h3>",l+='<div id="item-0">',l+=this.constructAccordionItemSB("item-0",r,n,o),l+="</div>");for(var s=0;s<t.length;s++){var c=s;e&&(c=s+1);var d=t[s],p=d[0],f=d[1],u=(d[2],d[5]),b=d[6];l+="<h3>",l+='<span class="label label-primary" style="font-size:14px">',l+=p,l+=' <span style="font-size:11px">('+f+")</span>",l+="</span>",l+=" ",l+=" ","release"===u?(l+='<span class="label label-success">',l+=u,l+="</span>"):(l+='<span class="label label-warning">',l+=u,l+="</span>"),l+=" ",l+='<span class="label label-default jsPanelButton" onclick="App.showRepositoryDetail(\''+b+'\')" style="float:right">',l+=b,l+="</span>",(new i.default).getRepository(a,b).failedPing>5&&(l+='<i class="fas fa-exclamation-triangle" style="float:right;margin-right:5px;color:#d9534f;" title="This repository has a temporary outage!"></i>'),l+="</h3>",0===c?(l+='<div id="item-0">',l+=this.constructAccordionItem("item-0",t[0],r,n,o,a),l+="</div>"):(l+='<div id="item-'+c+'">',l+="</div>")}return l}},{key:"getFace",value:function(e,t){return null!=e&&"null"!==e?"MI"===t?"<i class=\"far fa-smile\" style='color:darkgreen'></i>":"<i class=\"far fa-meh\" style='color:darkorange'></i>":'<i class="far fa-frown" style="color: red"></i>'}},{key:"constructBacklinkDependenciesTable",value:function(e,t){for(var a='<table class="table table-striped table-bordered table-hover"><thead><tr><th>group id</th><th>artifact id</th></tr></thead><tbody>',r=0;r<t.length;r++)a+="<tr><td>"+t[r].group_id+"</td><td>"+t[r].artifact_id+"</td></tr>";a+="</tbody></table>",$(e).html(a)}},{key:"constructBacklinkBomsTable",value:function(e,t){for(var a='<table class="table table-striped table-bordered table-hover"><thead><tr><th>group id</th><th>artifact id</th></tr></thead><tbody>',r=0;r<t.length;r++)a+="<tr><td>"+t[r].group_id+"</td><td>"+t[r].artifact_id+"</td></tr>";a+="</tbody></table>",$(e).html(a)}},{key:"initDetail",value:function(e,t){var r=!0,i=!0;a(55),$("#fileupload").fileupload({dataType:"json",done:function(e,t){App.growl(t.result.message),!0===t.result.status&&$(".fileinput-button").hide()}}),$('[data-toggle="tooltip"]').tooltip(),$(".changeUrlIcon").click((function(){r?($(".artifactDetailUrl").hide(),$(".artifactDetailUrlForm").show(),r=!1):($(".artifactDetailUrl").show(),$(".artifactDetailUrlForm").hide(),r=!0)})),$(".changeStateIcon").click((function(){i?($(".artifactDetailStateForm").show(),i=!1):($(".artifactDetailStateForm").hide(),i=!0)})),$(".artifactDetailUrlFormSubmit").click((function(){var a=$(".artifactDetailUrlFormInput").val();$.post("/artifact/suggest/change/url",{url:a,groupId:e,artifactId:t},(function(e){$(".artifactDetailUrl").show(),$(".artifactDetailUrlForm").hide(),r=!0,App.growl("Thank you, new url has been saved successfully.")}))})),$(".artifactDetailStateFormSubmit").click((function(){var a=$("#selectArtifacts").val();$.post("/artifact/suggest/change/retired",{targetArtifact:a,groupId:e,artifactId:t},(function(e){$(".artifactDetailStateForm").hide(),i=!0,App.growl("Thank you, new artifact has been saved successfully.")}))}))}}])&&r(t.prototype,o),l&&r(t,l),e}()},35:function(e,t){!function(e){e.fn.extend({easyResponsiveTabs:function(t){var a=t=e.extend({type:"default",width:"auto",fit:!0,closed:!1,tabidentify:"",activetab_bg:"white",inactive_bg:"#F5F5F5",active_border_color:"#c1c1c1",active_content_border_color:"#c1c1c1",activate:function(){}},t),r=a.type,i=a.fit,n=a.width,o=window.location.hash;e(this).bind("tabactivate",(function(e,a){"function"==typeof t.activate&&t.activate.call(a,e)})),this.each((function(){var a,l=e(this),s=l.find("ul.resp-tabs-list."+t.tabidentify),c=l.attr("id");l.find("ul.resp-tabs-list."+t.tabidentify+" li").addClass("resp-tab-item").addClass(t.tabidentify),l.css({display:"block",width:n}),"vertical"==t.type&&s.css("margin-top","3px"),l.find(".resp-tabs-container."+t.tabidentify).css("border-color",t.active_content_border_color),l.find(".resp-tabs-container."+t.tabidentify+" > div").addClass("resp-tab-content").addClass(t.tabidentify),function(){"vertical"==r&&l.addClass("resp-vtabs").addClass(t.tabidentify);1==i&&l.css({width:"100%",margin:"0px"});"accordion"==r&&(l.addClass("resp-easy-accordion").addClass(t.tabidentify),l.find(".resp-tabs-list").css("display","none"))}(),l.find(".resp-tab-content."+t.tabidentify).before("<h2 class='resp-accordion "+t.tabidentify+"' role='tab'><span class='resp-arrow'></span></h2>"),l.find(".resp-tab-content."+t.tabidentify).prev("h2").css({"background-color":t.inactive_bg,"border-color":t.active_border_color});var d=0;l.find(".resp-accordion").each((function(){a=e(this);var r=l.find(".resp-tab-item:eq("+d+")"),i=l.find(".resp-accordion:eq("+d+")");i.append(r.html()),i.data(r.data()),a.attr("aria-controls",t.tabidentify+"_tab_item-"+d),d++}));var p=0;l.find(".resp-tab-item").each((function(){$tabItem=e(this),$tabItem.attr("aria-controls",t.tabidentify+"_tab_item-"+p),$tabItem.attr("role","tab"),$tabItem.css({"background-color":t.inactive_bg,"border-color":"none"});var a=0;l.find(".resp-tab-content."+t.tabidentify).each((function(){e(this).attr("aria-labelledby",t.tabidentify+"_tab_item-"+a).css({"border-color":t.active_border_color}),a++})),p++}));var f=0;if(""!=o){var u=o.match(new RegExp(c+"([0-9]+)"));null!==u&&2===u.length&&(f=parseInt(u[1],10)-1)>p&&(f=0)}e(l.find(".resp-tab-item."+t.tabidentify)[f]).addClass("resp-tab-active").css({"background-color":t.activetab_bg,"border-color":t.active_border_color}),!0===t.closed||"accordion"===t.closed&&!s.is(":visible")||"tabs"===t.closed&&s.is(":visible")||(e(l.find(".resp-accordion."+t.tabidentify)[f]).addClass("resp-tab-active").css({"background-color":t.activetab_bg+" !important","border-color":t.active_border_color,background:"none"}),e(l.find(".resp-tab-content."+t.tabidentify)[f]).addClass("resp-tab-content-active").addClass(t.tabidentify).attr("style","display:block")),l.find("[role=tab]").each((function(){e(this).click((function(){var a=e(this),r=a.attr("aria-controls");if(a.hasClass("resp-accordion")&&a.hasClass("resp-tab-active"))return l.find(".resp-tab-content-active."+t.tabidentify).slideUp("",(function(){e(this).addClass("resp-accordion-closed")})),a.removeClass("resp-tab-active").css({"background-color":t.inactive_bg,"border-color":"none"}),!1;!a.hasClass("resp-tab-active")&&a.hasClass("resp-accordion")?(l.find(".resp-tab-active."+t.tabidentify).removeClass("resp-tab-active").css({"background-color":t.inactive_bg,"border-color":"none"}),l.find(".resp-tab-content-active."+t.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"),l.find("[aria-controls="+r+"]").addClass("resp-tab-active").css({"background-color":t.activetab_bg,"border-color":t.active_border_color}),l.find(".resp-tab-content[aria-labelledby = "+r+"]."+t.tabidentify).slideDown().addClass("resp-tab-content-active")):(l.find(".resp-tab-active."+t.tabidentify).removeClass("resp-tab-active").css({"background-color":t.inactive_bg,"border-color":"none"}),l.find(".resp-tab-content-active."+t.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"),l.find("[aria-controls="+r+"]").addClass("resp-tab-active").css({"background-color":t.activetab_bg,"border-color":t.active_border_color}),l.find(".resp-tab-content[aria-labelledby = "+r+"]."+t.tabidentify).addClass("resp-tab-content-active").attr("style","display:block")),a.trigger("tabactivate",a)}))})),e(window).resize((function(){l.find(".resp-accordion-closed").removeAttr("style")}))}))}})}(jQuery)}}]);