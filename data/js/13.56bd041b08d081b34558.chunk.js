(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{339:function(a,e,t){"use strict";function n(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}t.r(e),t.d(e,"default",(function(){return i}));var i=function(){function a(){!function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a)}var e,t,i;return e=a,(t=[{key:"selectVersion",value:function(a,e,t,n){var i="/plugin/"+a+"/"+e+"/"+t;$.getJSON(i,(function(i){var s="";s+="<plugin>\n",s+="   <groupId>"+a+"</groupId>\n",s+="   <artifactId>"+e+"</artifactId>\n",s+="   <version>"+t+"</version>\n",s+="</plugin>",$("#textArea").val(s);var r="";$.each(i.mojos,(function(a,e){r+="<tr>",r+="<td>",r+='<i class="fa fa-eye fa-2x" style="float:left;padding-right:5px;cursor:pointer" onclick="showMojoParameters(this)" id="'+t+'" data="'+e.goal+'" title="Parameters"></i>',r+='<span class="label label-default" style="font-size:14px;">',r+=n+":"+e.goal,r+="</span>",null!=e.phase&&(r+=" (phase: ",r+=e.phase,r+=")"),null!=e.description&&(r+='<p style="padding-top:5px;">',r+=e.description,r+="</p>"),r+="</td>",r+="</tr>"})),$("#goals").html(r)}))}},{key:"constructVersions",value:function(a){var e="",t=0;return $.each(a,(function(a,n){if("maven-plugin"===n[4]){var i="odd";t%2==0&&(i=""),t++,e+='<option class="'+i+"\" data-content=\"<div style='padding-top:5px'></div><span class='label label-primary' style='padding-top:5px;'><span style='font-size:14px'>"+n[0]+"</span> ("+n[1]+") </span><div style='padding-top:5px'></div>","release"===n[5]?e+="<span class='label label-success'>"+n[5]+"</span> ":e+="<span class='label label-warning'>"+n[5]+"</span> ",e+="<span class='label label-default'>"+n[6]+"</span> <div style='padding-bottom:5px'></div>\" id=\""+n[0]+'" value="'+n[0]+'">',e+="</option>"}})),e}},{key:"showMojoParameters",value:function(a){var e=$(a).attr("id"),t=$(a).attr("data"),n="/plugin/"+groupId+"/"+artifactId+"/"+e+"/"+t;$.getJSON(n,(function(a){var e="";e+='<div class="list" style="padding-top:10px;height:200px;overflow:auto">',$.each(a.parameters,(function(a,t){e+="<span class='parameterDetailLink' style='display:block;font-size:16px;cursor:pointer' onclick='showParameterDetail(\""+n+"\", this)' id='"+t.name+"'>",1==t.required&&(e+="<i class='fa fa-asterisk' label='required'></i> "),e+=t.name,e+=" ("+t.type+")",e+="</span>"})),e+="</div>",e+='<div class="parameterDescription" style="border:1px solid grey;margin-top:10px;padding:10px;">',e+="parameter description",e+="</div>",App.initBootstrapDialog((function(a){a.show({title:"Parameters",message:e})}))}))}},{key:"showParameterDetail",value:function(a,e){var t=a+"/"+$(e).attr("id");$.getJSON(t,(function(a){""!==a.description?$(".parameterDescription").html(a.description):$(".parameterDescription").html("No description available")}))}}])&&n(e.prototype,t),i&&n(e,i),a}()}}]);