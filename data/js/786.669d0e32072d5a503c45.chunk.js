(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[786,878],{378:(e,t,a)=>{"use strict";function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}a.r(t),a.d(t,{default:()=>i});var n=a(1104),r=a(5878);a(9104),a(3071);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,o;return t=e,(i=[{key:"activateDefaultTab",value:function(){var e=window.localStorage.getItem("defaultTab");null!=e&&setTimeout("$('ul.resp-tabs-list ."+e+"').trigger('click');",100)}},{key:"storeDefaultTab",value:function(e){var t=window.localStorage,a=$(e.target).attr("class"),l=null;a.indexOf("tabMaven")>-1?l="tabMaven":a.indexOf("tabGradleKt")>-1?l="tabGradleKt":a.indexOf("tabGradle")>-1&&(l="tabGradle"),null!=l&&t.setItem("defaultTab",l)}},{key:"constructAccordionItem",value:function(e,t,a,l,i,o){var s=new r.default,c=this,d=t[6],p="";p+='<ul class="resp-tabs-list '+e+'">',p+='<li class="tabMaven">Maven</li>',p+='<li class="tabGradle">Gradle</li>',p+='<li class="tabGradleKt">Gradle (kt)</li>',p+="<li>Download</li>",null!=t[7]&&"null"!==t[7]&&(p+="<li>Parent</li>"),p+="<li onclick=\"App.dependencyTreeLoadTree('"+e+"', '"+t+"')\">",p+=t[10]+" dependencies","N"!==t[11]&&(p+=' <i class="fas fa-exclamation-triangle" style="color:#cc9933" title="There MAY be some issue with transitive dependencies."></i>'),p+="</li>",p+="<li>Module name ",p+=c.getFace(t[12],t[13]),p+="</li>",p+="</ul>",p+='<div class="resp-tabs-container '+e+'">',p+="<div>",p+='<textarea class="form-control autoselect" rows="5" wrap="off" onclick="App.copyToClipboard()">',p+="&lt;dependency&gt;\n",p+="   &lt;groupId&gt;"+l+"&lt;/groupId&gt;\n",p+="   &lt;artifactId&gt;"+i+"&lt;/artifactId&gt;\n",p+="   &lt;version&gt;"+t[0]+"&lt;/version&gt;\n",a&&(p+="   &lt;scope&gt;"+a+"&lt;/scope&gt;\n"),p+="&lt;/dependency&gt;",p+="</textarea>",p+="</div>",p+="<div>",p+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',p+="test"===a?"testImplementation '"+l+":"+i+":"+t[0]+"'":"provided"===a?"compileOnly '"+l+":"+i+":"+t[0]+"'":"implementation '"+l+":"+i+":"+t[0]+"'",p+="</textarea>",p+="</div>",p+="<div>",p+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',p+="test"===a?'testImplementation ("'+l+":"+i+":"+t[0]+'")':"provided"===a?'compileOnly ("'+l+":"+i+":"+t[0]+'")':'implementation ("'+l+":"+i+":"+t[0]+'")',p+="</textarea>",p+="</div>",p+="<div>";var u=function(e){var t=e.url;return t.endsWith("/")||(t+="/"),t}((new n.default).getRepository(o,d));return null!=t[2]&&("null"!==t[2]&&(p+='<a href="'+(u+l.split(".").join("/"))+"/"+i+"/"+t[0]+"/"+i+"-"+t[0]+"."+t[2]+'" class="btn btn-small btn-primary" style="color:white">'+t[2]+" ("+t[3]+")</a> "),p+='<a href="'+(u+l.split(".").join("/"))+"/"+i+"/"+t[0]+"/"+i+"-"+t[0]+'-sources.jar" class="btn btn-small btn-primary" style="color:white">source (if available)</a> ',p+='<a href="'+(u+l.split(".").join("/"))+"/"+i+"/"+t[0]+"/"+i+"-"+t[0]+'-javadoc.jar" class="btn btn-small btn-primary" style="color:white">javadoc (if available)</a> '),p+='<a href="'+(u+l.split(".").join("/"))+"/"+i+"/"+t[0]+"/"+i+"-"+t[0]+'.pom" class="btn btn-small btn-primary" style="color:white">pom</a> ',p+="</div>",null!=t[7]&&"null"!==t[7]&&(p+="<div>",p+='<a href="/artifact/'+t[7]+"/"+t[8]+'" style="color:#337ab7">',p+=t[7]+":"+t[8]+":"+t[9],p+="</a>",p+="</div>"),p+="<div class='dependency-tree-wrapper' id='dependency-tree-wrapper-"+e+"'>",p+="<div class='form-inline' style='position:absolute;z-index:1;'>",p+="<a href='?dependencyTree="+t[0]+"' class='btn btn-primary' style='color:white;margin-right:10px;' onclick='App.dependencyTreeToggleFullscreen(\""+e+'","'+t[0]+"\");return false;'>fullscreen <i class='fa fa-expand dependencyTreeToggleFullScreen'></i></a>",p+="<input type='text' class='form-control filterDependencyTree' placeholder='filter' style='margin-right:10px;' />",t[11]&&"N"!==t[11]&&(p+="<span>Dependencies include: ",p+="</span>",p+=s.getProblems(t[11])),p+="</div>",p+="<div id='dependency-tree-"+e+"'>",p+="</div>",p+="</div>",p+="<div>",null!=t[12]&&"null"!==t[12]?"MI"===t[13]?(p+=c.getFace(t[12],t[13]),p+=' name from module info: "',p+=t[12],p+='" '):(p+=c.getFace(t[12],t[13]),p+=' name from MANIFEST.MF: "',p+=t[12],p+='" '):(p+=c.getFace(t[12],t[13]),p+=" automatic name "),p+="</div>",p+="</div>"}},{key:"constructAccordionItemSB",value:function(e,t,a,l){var n="";return n+='<ul class="resp-tabs-list '+e+'">',n+='<li class="tabMaven">Maven</li>',n+='<li class="tabGradle">Gradle</li>',n+='<li class="tabGradleKt">Gradle (kt)</li>',"provided"===t&&(n+='<li class="tabExclude">Spring Boot JAR Exclude</li>'),n+="</ul>",n+='<div class="resp-tabs-container '+e+'">',n+="<div>",n+='<textarea class="form-control autoselect" rows="5" wrap="off" onclick="App.copyToClipboard()">',n+="&lt;dependency&gt;\n",n+="   &lt;groupId&gt;"+a+"&lt;/groupId&gt;\n",n+="   &lt;artifactId&gt;"+l+"&lt;/artifactId&gt;\n",t&&(n+="   &lt;scope&gt;"+t+"&lt;/scope&gt;\n"),n+="&lt;/dependency&gt;",n+="</textarea>",n+="</div>",n+="<div>",n+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',n+="test"===t?"testImplementation '"+a+":"+l+"'":"provided"===t?"compileOnly '"+a+":"+l+"'":"implementation '"+a+":"+l+"'",n+="</textarea>",n+="</div>",n+="<div>",n+='<textarea class="form-control autoselect" rows="1" wrap="off" onclick="App.copyToClipboard()">',n+="test"===t?'testImplementation ("'+a+":"+l+'")':"provided"===t?'compileOnly ("'+a+":"+l+'")':'implementation ("'+a+":"+l+'")',n+="</textarea>",n+="</div>",n+="<div>","provided"===t&&(n+="To exclude this artifact from Spring Boot JAR add this fragment to Spring Boot plugin configuration/excludes:",n+='<textarea class="form-control autoselect" rows="4" wrap="off" onclick="App.copyToClipboard()">',n+="&lt;exclude&gt;\n",n+="   &lt;groupId&gt;"+a+"&lt;/groupId&gt;\n",n+="   &lt;artifactId&gt;"+l+"&lt;/artifactId&gt;\n",n+="&lt;/exclude&gt;",n+="</textarea>",n+='For more information see <a style="text-decoration: underline" href="https://docs.spring.io/spring-boot/docs/current/maven-plugin/examples/exclude-dependency.html">documentation</a>'),n+="</div>",n+="</div>"}},{key:"constructAccordion",value:function(e,t,a,l,n,r,i,o){var s=this.getAccordionHtml(a,l,n,r,i,o);$(e).html(s);var c=this;$(e).accordion({heightStyle:"panel",beforeActivate:function(e,s){var d,p=$(s.newPanel).attr("id");d=a&&"item-0"===p?c.constructAccordionItemSB(p,r,i,o):a?c.constructAccordionItem(p,l[p.replace("item-","")-1],r,i,o,n):c.constructAccordionItem(p,l[p.replace("item-","")],r,i,o,n),$(s.newPanel).html(d);var u={tabidentify:p,activate:function(e){c.storeDefaultTab(e)}};"DARK"===t&&(u.activetab_bg="#00bc8c",u.inactive_bg="#222222"),$("#"+p).easyResponsiveTabs(u),App.autoselect(p),c.activateDefaultTab()},create:function(e,a){var l={tabidentify:"item-0",activate:function(e){c.storeDefaultTab(e)}};"DARK"===t&&(l.activetab_bg="#00bc8c",l.inactive_bg="#222222"),$("#item-0").easyResponsiveTabs(l),c.activateDefaultTab(),App.autoselect("item-0")}})}},{key:"getAccordionHtml",value:function(e,t,a,l,r,i){var o="";e&&t.length>0&&(o+="<h3>",o+='<span class="label label-primary" style="font-size:14px">',o+="Spring Boot",o+="</span>",o+="</h3>",o+='<div id="item-0">',o+=this.constructAccordionItemSB("item-0",l,r,i),o+="</div>");for(var s=0;s<t.length;s++){var c=s;e&&(c=s+1);var d=t[s],p=d[0],u=d[1],f=(d[2],d[5]),v=d[6];o+="<h3>",o+='<span class="label label-primary" style="font-size:14px">',o+=p,o+=' <span style="font-size:11px">('+u+")</span>",o+="</span>",o+=" ",o+=" ","release"===f?(o+='<span class="label label-success">',o+=f,o+="</span>"):(o+='<span class="label label-warning">',o+=f,o+="</span>"),o+=" ",o+='<span class="label label-default jsPanelButton" onclick="App.showRepositoryDetail(\''+v+'\')" style="float:right">',o+=v,o+="</span>",(new n.default).getRepository(a,v).failedPing>5&&(o+='<i class="fas fa-exclamation-triangle" style="float:right;margin-right:5px;color:#d9534f;" title="This repository has a temporary outage!"></i>'),o+="</h3>",0===c?(o+='<div id="item-0">',o+=this.constructAccordionItem("item-0",t[0],l,r,i,a),o+="</div>"):(o+='<div id="item-'+c+'">',o+="</div>")}return o}},{key:"getFace",value:function(e,t){return null!=e&&"null"!==e?"MI"===t?"<i class=\"far fa-smile\" style='color:darkgreen'></i>":"<i class=\"far fa-meh\" style='color:darkorange'></i>":'<i class="far fa-frown" style="color: red"></i>'}},{key:"constructBacklinkDependenciesTable",value:function(e,t){for(var a='<table class="table table-striped table-bordered table-hover"><thead><tr><th>group id</th><th>artifact id</th></tr></thead><tbody>',l=0;l<t.length;l++)a+="<tr><td>"+t[l].group_id+"</td><td>"+t[l].artifact_id+"</td></tr>";a+="</tbody></table>",$(e).html(a)}},{key:"constructBacklinkBomsTable",value:function(e,t){for(var a='<table class="table table-striped table-bordered table-hover"><thead><tr><th>group id</th><th>artifact id</th></tr></thead><tbody>',l=0;l<t.length;l++)a+="<tr><td>"+t[l].group_id+"</td><td>"+t[l].artifact_id+"</td></tr>";a+="</tbody></table>",$(e).html(a)}},{key:"initDetail",value:function(e,t){var l=!0,n=!0;a(1691),$("#fileupload").fileupload({dataType:"json",done:function(e,t){App.growl(t.result.message),!0===t.result.status&&$(".fileinput-button").hide()}}),$('[data-toggle="tooltip"]').tooltip(),$(".changeUrlIcon").click((function(){l?($(".artifactDetailUrl").hide(),$(".artifactDetailUrlForm").show(),l=!1):($(".artifactDetailUrl").show(),$(".artifactDetailUrlForm").hide(),l=!0)})),$(".changeStateIcon").click((function(){n?($(".artifactDetailStateForm").show(),n=!1):($(".artifactDetailStateForm").hide(),n=!0)})),$(".artifactDetailUrlFormSubmit").click((function(){var a=$(".artifactDetailUrlFormInput").val();$.post("/artifact/suggest/change/url",{url:a,groupId:e,artifactId:t},(function(e){$(".artifactDetailUrl").show(),$(".artifactDetailUrlForm").hide(),l=!0,App.growl("Thank you, new url has been saved successfully.")}))})),$(".artifactDetailStateFormSubmit").click((function(){var a=$("#selectArtifacts").val();$.post("/artifact/suggest/change/retired",{targetArtifact:a,groupId:e,artifactId:t},(function(e){$(".artifactDetailStateForm").hide(),n=!0,App.growl("Thank you, new artifact has been saved successfully.")}))}))}}])&&l(t.prototype,i),o&&l(t,o),e}()},5878:(e,t,a)=>{"use strict";function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var n;a.r(t),a.d(t,{default:()=>r});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,(r=[{key:"toggleFullscreen",value:function(e,t,a){if(n)this.hide();else{n=!0;var l=50+$(document).scrollTop(),r=$(window).height()-50;$("#dependency-tree-wrapper-"+e).css({position:"absolute",left:"0px",top:l+"px",width:"100%",height:r,"z-index":10001}),$("#dependency-tree-wrapper-"+e).css({"background-color":"white"}),this.loadTree(e,t,r-20,a),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-compress")}}},{key:"loadTree",value:function(e,t,a,l,n){var r=this;App.applyDebounce(".filterDependencyTree",(function(){var a=$(this).val();r.filter(a,e,t)}));var i=groupId,o=artifactId,s=t.split(",")[0],c=function(t){for(var l=0;l<t.nodes.length;l++){var i=t.nodes[l];i.label=i.id.split(":").join("\n"),i.errs&&"N"!==i.errs&&(i.label+="\nERRORS: "+r.getProblems(i.errs).replace(/<\/?[^>]+(>|$)/g,"")+"!!!")}if(n)for(var o=0;o<t.nodes.length;o++){var s=t.nodes[o];s.center?s.font="14px arial green":-1!==s.id.toLowerCase().indexOf(n.toLowerCase())?s.font="20px arial blue":s.font=void 0}else for(var c=0;c<t.nodes.length;c++){var d=t.nodes[c];d.center?d.font="14px arial green":d.font=void 0}$("#dependency-tree-"+e).html(""),a?$("#dependency-tree-"+e).css("height",a+"px"):$("#dependency-tree-"+e).css("height","400px");var p={physics:{enabled:!0},layout:{randomSeed:0},nodes:{shape:"text",mass:1.5},interaction:{navigationButtons:!0}};r.initVisNetwork((function(a){var l=document.getElementById("dependency-tree-"+e),n=new a.DataSet(t.nodes),r=new a.DataSet(t.edges);new a.Network(l,{nodes:n,edges:r},p).on("doubleClick",(function(e){var t=e.nodes[0].split(":");t.pop();var a="/artifact/"+t.join("/");window.location.href=a}))}))};l?c(l):$.post("/artifact/tree",{groupId:i,artifactId:o,version:s},(function(e){c(e)}))}},{key:"initVisNetwork",value:function(e){a.e(601).then(a.bind(a,5601)).then((function(t){e(t)}))}},{key:"getProblems",value:function(e){var t="",a=e.split(",");return $.inArray("R",a)>=0&&(t+="<span class='label label-warning'>version range</span> "),$.inArray("S",a)>=0&&(t+="<span class='label label-warning'>snapshot</span> "),$.inArray("O",a)>=0&&(t+="<span class='label label-warning'>retired artifact</span> "),($.inArray("V",a)>=0||$.inArray("C",a)>=0)&&(t+="<span class='label label-warning'>some unknown error</span> "),t}},{key:"filter",value:function(e,t,a){var l=e.trim();if(0===l.length||l.length>=3){var n=$(window).height()-50;this.loadTree(t,a,n-20,null,e)}}},{key:"hide",value:function(){$(".dependency-tree-wrapper").css({display:"none"}),n=!1,App.withArtifact((function(e){e.activateDefaultTab()})),$(".dependencyTreeToggleFullScreen").removeClass("fa-expand").removeClass("fa-compress").addClass("fa-expand")}}])&&l(t.prototype,r),i&&l(t,i),e}()}}]);