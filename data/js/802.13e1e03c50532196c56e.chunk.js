(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[802],{2802:(a,t,e)=>{"use strict";function r(a,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}e.r(t),e.d(t,{default:()=>n});var n=function(){function a(){!function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a)}var t,e,n;return t=a,(e=[{key:"filterDependencies",value:function(a,t,e){var r=$("#"+a).val();$.ajax({url:"/charts/mostUsed",method:"post",data:{contains:r,type:t}}).done((function(a){for(var r="",n=0;n<a.length;n++){r+="<tr>",r+="<td>",r+=n+1,r+="</td>",r+="<td>",r+="<img alt='logo' class='lazy' data-src='/icon/"+a[n].id.groupId+":"+a[n].id.artifactId+"' />",r+="</td>",r+="<td>";var i="artifact";"plugins"===t?i="plugin":"android"===t&&(i="artifact"),r+="<a href='/"+i+"/"+a[n].id.groupId+"/"+a[n].id.artifactId+"'>",r+=a[n].realName,r+="</a> ","retired"===a[n].state&&(r+="<span class='label label-danger'>retired</span>"),r+="<br />",r+=a[n].id.groupId+":"+a[n].id.artifactId,r+="</td>",r+="<td>",r+=a[n].depCount,r+="</td>",r+="</tr>"}$("#"+e).html(r),setTimeout((function(){$("img.lazy").unveil(200)}))}))}}])&&r(t.prototype,e),n&&r(t,n),a}()}}]);