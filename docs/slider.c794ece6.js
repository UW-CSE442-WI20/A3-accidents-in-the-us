parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Nwn9":[function(require,module,exports) {
var t=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],e=d3.sliderBottom().min(d3.min(t)).max(d3.max(t)).width(300).tickFormat(d3.format("")).ticks(12).step(1).default(12).on("onchange",function(t){d3.select("p#value-step").text(d3.format("")(t))}),a=d3.select("div#slider-step").append("svg").attr("width",500).attr("height",100).append("g").attr("transform","translate(30,30)");a.call(e),d3.select("p#value-step").text(d3.format("")(e.value()));var d=[0,100],r=d3.sliderBottom().min(d3.min(d)).max(d3.max(d)).width(300).tickFormat(d3.format("")).ticks(20).step(10).default(60).on("onchange",function(t){d3.select("p#value-step2").text(d3.format("")(t))}),s=d3.select("div#slider-step2").append("svg").attr("width",500).attr("height",100).append("g").attr("transform","translate(30,30)");s.call(r),d3.select("p#value-step2").text(d3.format("")(r.value()));
},{}]},{},["Nwn9"], null)
//# sourceMappingURL=/slider.c794ece6.js.map