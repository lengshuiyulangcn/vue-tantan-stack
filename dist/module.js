!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-tantan-stack",[],e):"object"==typeof exports?exports["vue-tantan-stack"]=e():t["vue-tantan-stack"]=e()}(this,function(){return function(t){function e(i){if(a[i])return a[i].exports;var r=a[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(7),o=i(r);e.default=o.default},,,,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var a=this[e];a[2]?t.push("@media "+a[2]+"{"+a[1]+"}"):t.push(a[1])}return t.join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(a&&!s[2]?s[2]=a:a&&(s[2]="("+s[2]+") and ("+a+")"),t.push(s))}},t}},function(t,e,a){function i(t,e){for(var a=0;a<t.length;a++){var i=t[a],r=u[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(p(i.parts[o],e))}else{for(var s=[],o=0;o<i.parts.length;o++)s.push(p(i.parts[o],e));u[i.id]={id:i.id,refs:1,parts:s}}}}function r(t){for(var e=[],a={},i=0;i<t.length;i++){var r=t[i],o=r[0],s=r[1],n=r[2],p=r[3],h={css:s,media:n,sourceMap:p};a[o]?a[o].parts.push(h):e.push(a[o]={id:o,parts:[h]})}return e}function o(t,e){var a=m(),i=v[v.length-1];if("top"===t.insertAt)i?i.nextSibling?a.insertBefore(e,i.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function n(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function p(t,e){var a,i,r;if(e.singleton){var o=y++;a=l||(l=n(e)),i=h.bind(null,a,o,!1),r=h.bind(null,a,o,!0)}else a=n(e),i=c.bind(null,a),r=function(){s(a)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}function h(t,e,a,i){var r=a?"":i.css;if(t.styleSheet)t.styleSheet.cssText=D(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function c(t,e){var a=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(a+="\n/*# sourceURL="+r.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var u={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},f=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),l=null,y=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var a=r(t);return i(a,e),function(t){for(var o=[],s=0;s<a.length;s++){var n=a[s],p=u[n.id];p.refs--,o.push(p)}if(t){var h=r(t);i(h,e)}for(var s=0;s<o.length;s++){var p=o[s];if(0===p.refs){for(var c=0;c<p.parts.length;c++)p.parts[c]();delete u[p.id]}}}};var D=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},,function(t,e,a){var i,r,o={};a(8),i=a(10),r=a(12),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;r&&(s.template=r),s.computed||(s.computed={}),Object.keys(o).forEach(function(t){var e=o[t];s.computed[t]=function(){return e}})},function(t,e,a){var i=a(9);"string"==typeof i&&(i=[[t.id,i,""]]);a(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,a){e=t.exports=a(4)(),e.push([t.id,".stack{position:relative;perspective:1000px;perspective-origin:50% 150%;-webkit-perspective:1000px;-webkit-perspective-origin:50% 150%;margin:0;padding:0}.stack,.stack-item{width:100%;height:100%}.stack-item{ackground:#fff;border-radius:4px;text-align:center;overflow:hidden;position:absolute;opacity:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:auto}.stack-item img{width:100%;display:block;pointer-events:none}.stack-container li.move-back{transition-timing-function:cubic-bezier(.175,.885,.47,1.515)}",""])},function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(11),o=i(r);e.default={props:{stackinit:{type:Object,default:[]},pages:{type:Array,default:{}}},data:function(){return{basicdata:{start:{},end:{}},temporaryData:{prefixes:(0,o.default)(),offsetY:"",poswidth:0,posheight:0,lastPosWidth:"",lastPosHeight:"",rotate:0,lastRotate:0,visible:this.stackinit.visible||3,tracking:!1,animation:!1,currentPage:this.stackinit.currentPage||0,opacity:1,lastOpacity:0,swipe:!1,zIndex:10}}},computed:{offsetRatio:function(){var t=this.$el.offsetWidth,e=this.$el.offsetHeight,a=t-Math.abs(this.temporaryData.poswidth),i=e-Math.abs(this.temporaryData.posheight),r=1-a*i/(t*e)||0;return r>1?1:r},offsetWidthRatio:function(){var t=this.$el.offsetWidth,e=t-Math.abs(this.temporaryData.poswidth),a=1-e/t||0;return a}},mounted:function(){var t=this;this.$on("next",function(){t.next()}),this.$on("prev",function(){t.prev()})},methods:{preventDefault:function(t){t.preventDefault()},touchstart:function(t){if(!this.temporaryData.tracking){if(document.addEventListener("touchmove",this.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY,this.temporaryData.offsetY=t.targetTouches[0].pageY-this.$el.offsetParent.offsetTop}else this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY,this.temporaryData.offsetY=t.offsetY;this.temporaryData.tracking=!0,this.temporaryData.animation=!1}},touchmove:function(t){if(this.temporaryData.tracking&&!this.temporaryData.animation){"touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),this.temporaryData.poswidth=this.basicdata.end.x-this.basicdata.start.x,this.temporaryData.posheight=this.basicdata.end.y-this.basicdata.start.y;var e=this.rotateDirection(),a=this.angleRatio();this.temporaryData.rotate=e*this.offsetWidthRatio*15*a}},touchend:function(t){if(this.temporaryData.tracking=!1,this.temporaryData.animation=!0,document.removeEventListener("touchmove",this.preventDefault(t)),this.offsetRatio>=.5){var e=Math.abs(this.temporaryData.posheight/this.temporaryData.poswidth);this.temporaryData.poswidth=this.temporaryData.poswidth>=0?this.temporaryData.poswidth+200:this.temporaryData.poswidth-200,this.temporaryData.posheight=this.temporaryData.posheight>=0?Math.abs(this.temporaryData.poswidth*e):-Math.abs(this.temporaryData.poswidth*e),this.temporaryData.opacity=0,this.temporaryData.swipe=!0,this.nextTick()}else this.temporaryData.poswidth=0,this.temporaryData.posheight=0,this.temporaryData.swipe=!1,this.temporaryData.rotate=0},nextTick:function(){var t=this;this.temporaryData.lastPosWidth=this.temporaryData.poswidth,this.temporaryData.lastPosHeight=this.temporaryData.posheight,this.temporaryData.lastRotate=this.temporaryData.rotate,this.temporaryData.currentPage=this.temporaryData.currentPage===this.pages.length-1?0:this.temporaryData.currentPage+1,this.$nextTick(function(){t.temporaryData.poswidth=0,t.temporaryData.posheight=0,t.temporaryData.opacity=1,t.temporaryData.rotate=0})},onTransitionEnd:function(t){var e=0===this.temporaryData.currentPage?this.pages.length-1:this.temporaryData.currentPage-1;this.temporaryData.swipe&&t===e&&(this.temporaryData.animation=!0,this.temporaryData.lastPosWidth=0,this.temporaryData.lastPosHeight=0,this.temporaryData.lastOpacity=0,this.temporaryData.lastRotate=0,this.temporaryData.swipe=!1)},prev:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=-t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="-3",this.temporaryData.swipe=!0,this.nextTick()},next:function(){this.temporaryData.tracking=!1,this.temporaryData.animation=!0;var t=this.$el.offsetWidth;this.temporaryData.poswidth=t,this.temporaryData.posheight=0,this.temporaryData.opacity=0,this.temporaryData.rotate="3",this.temporaryData.swipe=!0,this.nextTick()},rotateDirection:function(){return this.temporaryData.poswidth<=0?-1:1},angleRatio:function(){var t=this.$el.offsetHeight,e=this.temporaryData.offsetY,a=-1*(2*e/t-1);return a||0},inStack:function(t,e){for(var a=[],i=this.temporaryData.visible,r=this.pages.length,o=0;o<i;o++)e+o<r?a.push(e+o):a.push(e+o-r);return a.indexOf(t)>=0},transform:function(t){var e=this.temporaryData.currentPage,a=this.pages.length,i=0===e?this.pages.length-1:e-1,r={},o=this.temporaryData.visible;if(t!==this.temporaryData.currentPage){if(this.inStack(t,e)){var s=t-e>0?t-e:t-e+a;r.opacity="1",r.transform="translate3D(0,0,"+-60*(s-this.offsetRatio)+"px)",r.zIndex=o-s,this.temporaryData.tracking||(r[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",r[this.temporaryData.prefixes.transition+"Duration"]="300ms")}else t===i?(r.transform="translate3D("+this.temporaryData.lastPosWidth+"px,"+this.temporaryData.lastPosHeight+"px,0px) rotate("+this.temporaryData.lastRotate+"deg)",r.opacity=this.temporaryData.lastOpacity,r.zIndex=-1,r[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",r[this.temporaryData.prefixes.transition+"Duration"]="300ms"):(r.zIndex="-1",r.transform="translate3D(0,0,"+-1*o*60+"px)");return r}},transformIndex:function(t){if(t===this.temporaryData.currentPage){var e={};return e.transform="translate3D("+this.temporaryData.poswidth+"px,"+this.temporaryData.posheight+"px,0px) rotate("+this.temporaryData.rotate+"deg)",e.opacity=this.temporaryData.opacity,e.zIndex=10,this.temporaryData.animation&&(e[this.temporaryData.prefixes.transition+"TimingFunction"]="ease",e[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?300:0)+"ms"),e}}}}},function(t,e){(function(t){"use strict";function a(){var e=void 0,a=void 0,i=void 0,r=void 0;return function(){var o=document.createElement("_"),s=o.style,n=void 0;""===s[n="webkitTransition"]&&(i="webkitTransitionEnd",a=n),""===s[n="transition"]&&(i="transitionend",a=n),""===s[n="webkitTransform"]&&(e=n),""===s[n="msTransform"]&&(e=n),""===s[n="transform"]&&(e=n),document.body.insertBefore(o,null),s[e]="translate3d(0, 0, 0)",r=!!t.getComputedStyle(o).getPropertyValue(e),document.body.removeChild(o)}(),{transform:e,transition:a,transitionEnd:i,hasTranslate3d:r}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a}).call(e,function(){return this}())},function(t,e){t.exports=' <ul class=stack> <li class=stack-item v-for="(item, index) in pages" :style=[transformIndex(index),transform(index)] @touchmove=touchmove @touchstart=touchstart @touchend=touchend @touchcancel=touchend @mousedown=touchstart @mouseup=touchend @mousemove=touchmove @mouseout=touchend @webkit-transition-end=onTransitionEnd(index) @transitionend=onTransitionEnd(index)> <div v-html=item.html></div> </li> </ul> '}])});