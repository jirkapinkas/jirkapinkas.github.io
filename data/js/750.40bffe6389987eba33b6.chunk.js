(self.webpackChunkjavalibs=self.webpackChunkjavalibs||[]).push([[750],{9750:(e,t,a)=>{"use strict";function o(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}a.r(t),a.d(t,{default:()=>r});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,r;return t=e,(a=[{key:"setColorsForDarkTheme",value:function(e){"DARK"===e&&Highcharts.setOptions({colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],title:{style:{color:"#E0E0E3"}},xAxis:{labels:{style:{color:"#E0E0E3"}},title:{style:{color:"#A0A0A3"}}},yAxis:{labels:{style:{color:"#E0E0E3"}},title:{style:{color:"#A0A0A3"}}},labels:{style:{color:"#707073"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)",tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}}})}},{key:"generateChartUsage",value:function(e,t,a){var o=0;null!=t&&(o=t[t.length-1][1]),o<20&&($(".artifactUsageChart").css("display","none"),$(".artifactUsageChartAlternative").html("<div style='text-align:center'>Artifact usage chart disabled for this artifact. Reason: Less than 20 usages last year. Maybe it's because this library is used mostly in presentation layer, or because it just isn't that much popular.</div><br />"));var r={chart:{renderTo:a,type:"spline",backgroundColor:null},title:{style:{fontSize:"0px"}},series:[{name:"usage"}],yAxis:{min:0,title:{text:"used artifacts"}},xAxis:{labels:{formatter:function(){return this.value}}},legend:{enabled:!1},credits:{enabled:!1}};r.series[0].data=t,new Highcharts.Chart(r)}},{key:"generateScopePie",value:function(e,t){if(0!==e.length){for(var a=[],o=0,r=0;r<e.length;r++)a.push({name:e[r][0],y:e[r][1]}),o+=e[r][1];a.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),Highcharts.chart(t,{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",backgroundColor:null},title:{style:{fontSize:"0px"}},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},legend:{labelFormatter:function(){return this.name+" ("+Math.round(100*this.y/o)+"%)"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"",data:a}],credits:{enabled:!1}})}}},{key:"generateAndroidPie",value:function(e,t){if(0!==e.length){for(var a=[],o=0,r=0;r<e.length;r++)0===e[r][0]?a.push({name:"non-android",y:e[r][1]}):a.push({name:"android",y:e[r][1]}),o+=e[r][1];Highcharts.chart(t,{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",backgroundColor:null},title:{style:{fontSize:"0px"}},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},legend:{labelFormatter:function(){return this.name+" ("+Math.round(100*this.y/o)+"%)"}},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"",data:a}],credits:{enabled:!1}})}}},{key:"generateHeat",value:function(e,t){var a=[],o=[],r=0;$.each(e,(function(e,t){o.push(t[0]),a.push([r++,0,t[1]])})),$("#"+t).highcharts({chart:{type:"heatmap",height:85,backgroundColor:null,spacingBottom:5,spacingLeft:1,spacingRight:1},legend:{enabled:!1},credits:{enabled:!1},tooltip:{enabled:!1},title:{text:"Number of releases:",margin:0},xAxis:{categories:o},yAxis:{categories:[""],title:null},colorAxis:{min:0,minColor:"#FFFFFF",maxColor:Highcharts.getOptions().colors[0]},series:[{borderWidth:1,data:a,dataLabels:{enabled:!0,color:"#000000"}}]})}},{key:"initAllArtifactCharts",value:function(e,t,a,o,r,l,n,i,s,c){this.setColorsForDarkTheme(c),n&&this.generateChartUsage(r,n,t),this.generateHeat(l,e),i&&this.generateAndroidPie(i,a),s&&this.generateScopePie(s,o)}}])&&o(t.prototype,a),r&&o(t,r),e}()}}]);