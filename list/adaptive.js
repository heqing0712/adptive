/*! adaptive@0.0.1 | https://github.com/heqing0712/adaptive */
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){var n,r,o=window.document,i=o.querySelector("[name=viewport]"),u=function(){var e="",t=navigator.userAgent.match(/mobile/i);r=t?window.screen.availWidth/640:1,e+="width=640,",e+="maximum-scale="+r+",",e+="user-scalable=no",i.setAttribute("content",e)};i||(i=o.createElement("meta"),o.querySelector("head").appendChild(i)),i.setAttribute("name","viewport"),window.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(u,1)}),u()}]);