(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(n,t,e){e("74v/"),n.exports=e("nOHt")},"74v/":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("hUgY")}])},"8oxB":function(n,t){var e,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(n){if(e===setTimeout)return setTimeout(n,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:i}catch(n){e=i}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(n){r=u}}();var a,s=[],l=!1,f=-1;function p(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&h())}function h(){if(!l){var n=c(p);l=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,l=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function w(n,t){this.fun=n,this.array=t}function m(){}o.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new w(n,t)),1!==s.length||l||c(h)},w.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},hUgY:function(n,t,e){"use strict";e.r(t),function(n){var r=e("o0o1"),o=e.n(r),i=e("wx14"),u=e("q1tI"),c=e.n(u),a=e("qKvR"),s=(c.a.createElement,function(n){var t=n.Component,e=n.pageProps,r=n.appProps;return Object(a.a)(t,Object(i.a)({},r,e))});s.getInitialProps=function(){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{appProps:{appInitialProcessEnv:n.env.TEST_APP_PROP}});case 1:case"end":return t.stop()}}),null,null,null,Promise)},t.default=s}.call(this,e("8oxB"))},wx14:function(n,t,e){"use strict";function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,"a",(function(){return r}))}},[[0,0,1,3,2]]]);