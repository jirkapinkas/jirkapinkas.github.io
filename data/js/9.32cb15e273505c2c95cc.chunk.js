(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{34:function(e,a,s){"use strict";function t(e,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}s.r(a),s.d(a,"default",(function(){return c})),s(56);var o=!1,r=!1,c=function(){function e(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e)}var a,s,c;return a=e,(s=[{key:"getState",value:function(e){var a="";return"retired"===e?(a='<span title="Reallocated to different artifact." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/retired.png" />':'<img src="/img/freshness/retired.png" />',a+="</span>"):"dead"===e?(a='<span title="No release in last two years." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/dead.png" />':'<img src="/img/freshness/dead.png" />',a+="</span>"):"ok"===e?(a='<span title="In good shape." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/ok.png" />':'<img src="/img/freshness/ok.png" />',a+="</span>"):"stale"===e?(a='<span title="No release in last year." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/stale.png" />':'<img src="/img/freshness/stale.png" />',a+="</span>"):"new"===e?(a='<span title="Less than one year old." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/new.png" />':'<img src="/img/freshness/new.png" />',a+="</span>"):"unstable"===e&&(a='<span title="Updated too much in the last year." data-toggle="tooltip" data-placement="right">',a+=r?'<img src="//jirkapinkas.github.io/javalibs/img/freshness/unstable.png" />':'<img src="/img/freshness/unstable.png" />',a+="</span>"),a}},{key:"constructOmnibox",value:function(){var e=this;$("#artifacts").autocomplete({source:"/search/autocomplete/everything",minLength:2,close:function(e,a){o&&(o=!1,$(this).autocomplete("search"))},select:function(e,a){var s=a.item.searchFor;if("dependencies"===s)window.location.href="/artifact/"+a.item.groupAndArtifactId.replace(":","/");else if("classes"===s)window.location.href="/artifact/"+a.item.groupAndArtifactId.replace(":","/")+"?className="+a.item.className;else if("plugins"===s)window.location.href="/plugin/"+a.item.groupAndArtifactId.replace(":","/");else if("archetypes"===s)window.location.href="/archetype/"+a.item.groupAndArtifactId.replace(":","/");else if("boms"===s)window.location.href="/bom/"+a.item.groupAndArtifactId.replace(":","/");else if("java_classes"===s)window.location.href="/artifact/"+a.item.groupAndArtifactId.replace(":","/");else if(null==s)return-1==a.item.groupAndArtifactId.toLowerCase().indexOf("did you mean")&&-1==a.item.groupAndArtifactId.toLowerCase().indexOf("reindexing search")&&($(this).val(a.item.groupAndArtifactId),o=!0,!1)}}).focus((function(){$(this).autocomplete("search")})).autocomplete("instance")._renderItem=function(a,s){var t="";return t+="<div style='clear:both;'></div><div style='padding:10px;'>",null!=s.state&&(t+="<img src='"+s.iconUrl+"' alt='logo' style='padding-right:10px;float:left;' />"),null!=s.state&&(t+='<div style="float:right;">',t+=e.getState(s.state),t+="</div>"),t+="<a style=''>"+s.groupAndArtifactId,null!=s.state&&(t+="<br />","dependencies"===s.searchFor?t+="<i class='fa fa-cubes' style='padding-right:5px;'></i>":"plugins"===s.searchFor?t+="<i class='fa fa-plug' style='padding-right:5px;'></i>":"archetypes"===s.searchFor?t+="<i class='fas fa-code-branch' style='padding-right:5px;'></i>":"boms"===s.searchFor?t+="<i class='fa fa-magic' style='padding-right:5px;'></i>":"classes"===s.searchFor?t+="<i class='far fa-file' style='padding-right:5px;'></i>":"java_classes"===s.searchFor&&(t+="<i class='far fa-file' style='padding-right:5px;'></i>")),null!=s.className&&(t+="<br />",t+="<span style=''>"+s.className+"</span>"),null!=s.description&&(t+="<br />",t+="<span style=''>"+s.description+"</span>"),t+="</a>",t+="</div>",$("<li style='border-bottom:1px solid grey;padding:0;margin:0'>").append(t).appendTo(a)}}},{key:"constructBasic",value:function(){$("#selectArtifacts").autocomplete({source:"/search/autocomplete/dependencies",select:function(e,a){return $("#selectArtifacts").val(a.item.groupAndArtifactId),!1},minLength:2}).autocomplete("instance")._renderItem=function(e,a){return $("<li>").append(a.groupAndArtifactId).appendTo(e)}}},{key:"init",value:function(e,a){r=a,"true"!==localStorage.getItem("hideTooltip1")&&($("#artifacts").tooltip({placement:"left",trigger:"manual",title:"TIP: click on this icon to narrow down search"}).tooltip("show"),localStorage.setItem("hideTooltip1","true"));var s=function(){console.log("focus everything"),$(".searchFor").val("everything"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/everything"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectEverything").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-angle-down"),$("#artifacts").attr("placeholder","groupId, artifactId or classname"),$(".search-box-input").focus()},t=function(){console.log("focus dependencies"),$(".searchFor").val("dependencies"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/dependencies"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectDependencies").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-cubes"),$("#artifacts").attr("placeholder","groupId or artifactId"),$(".search-box-input").focus()},o=function(){console.log("focus plugins"),$(".searchFor").val("plugins"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/plugins"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectPlugins").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-plug"),$("#artifacts").attr("placeholder","groupId or artifactId"),$(".search-box-input").focus()},c=function(){console.log("focus archetypes"),$(".searchFor").val("archetypes"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/archetypes"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectArchetypes").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-code-branch"),$("#artifacts").attr("placeholder","groupId or artifactId"),$(".search-box-input").focus()},i=function(){console.log("focus boms"),$(".searchFor").val("boms"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/boms"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectBoms").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-code-branch").addClass("fa-magic"),$("#artifacts").attr("placeholder","groupId or artifactId"),$(".search-box-input").focus()},l=function(){console.log("focus classes"),$(".searchFor").val("classes"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/classes"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectClasses").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-file"),$("#artifacts").attr("placeholder","class name"),$(".search-box-input").focus()},n=function(){console.log("focus java classes"),$(".searchFor").val("javaClasses"),$("#artifacts").autocomplete("option",{source:"/search/autocomplete/java_classes"}),$(".searchForBox").removeClass("searchForActive").addClass("searchForInactive"),$(".selectJavaClasses").removeClass("searchForInactive").addClass("searchForActive"),$(".searchMoreOptions").removeClass("fa-angle-down").removeClass("fa-plug").removeClass("fa-code-branch").removeClass("fa-cubes").removeClass("fa-file").removeClass("fa-magic").addClass("fa-file"),$("#artifacts").attr("placeholder","text"),$(".search-box-input").focus()},d=$(".searchFormDetail"),p=!1;function f(){d.hide(),p=!1}e&&$("#artifacts").focus(),$(".searchMoreOptions").click((function(){p?f():function(e){d.show({duration:0,complete:e}),p=!0}((function(){$(".selectEverything").unbind("click").on("click",s),$(".selectDependencies").unbind("click").on("click",t),$(".selectPlugins").unbind("click").on("click",o),$(".selectArchetypes").unbind("click").on("click",c),$(".selectBoms").unbind("click").on("click",i),$(".selectClasses").unbind("click").on("click",l),$(".selectJavaClasses").unbind("click").on("click",n)}))})),$(".searchMoreOptions").attr("tabIndex",-1),$(".searchMoreOptions").focusout((function(){setTimeout((function(){f()}),100)}));var u=$(".searchFor").val();"dependencies"==u&&t(),"plugins"==u&&o(),"archetypes"==u&&c(),"boms"==u&&i(),"classes"==u&&l(),$(document).on("keyup",(function(e){83===e.keyCode&&($(e.target).is("input")||$(e.target).is("textarea")||$(".search-box-input").focus())}))}}])&&t(a.prototype,s),c&&t(a,c),e}()}}]);