!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function m(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==d.call(n)}(n))return NaN;if(m(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=m(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var a=u.test(n);return a||c.test(n)?f(n.slice(2),a?2:8):i.test(n)?NaN:+n}e=function(t,n,e){var o,r,i,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,i=r;return o=r=void 0,a=n,u=t.apply(i,e)}function h(t){return a=t,c=setTimeout(w,n),l?g(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-a>=i}function w(){var t=y();if(j(t))return T(t);c=setTimeout(w,function(t){var e=n-(t-f);return s?p(e,i-(t-a)):e}(t))}function T(t){return c=void 0,d&&o?g(t):(o=r=void 0,u)}function x(){var t=y(),e=j(t);if(o=arguments,r=this,f=t,e){if(void 0===c)return h(f);if(s)return c=setTimeout(w,n),g(f)}return void 0===c&&(c=setTimeout(w,n)),u}return n=b(n)||0,m(e)&&(l=!!e.leading,i=(s="maxWait"in e)?v(b(e.maxWait)||0,n):i,d="trailing"in e?!!e.trailing:d),x.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},x.flush=function(){return void 0===c?u:T(y())},x};var g=document.querySelector("input#search-box"),h=document.querySelector(".country-list");document.querySelector(".country-info");g.addEventListener("input",t(e)((function(t){(n=g.value.trim(),fetch("".concat("https://restcountries.com/v3.1/name/").concat(n,"?fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((function(t){return h.innerHTML=t.map((function(t){var n=t.name.official,e=t.flags,o=e.svg,r=e.alt;return'<li>\n      <img src="'.concat(o,'" alt="').concat(r,'" width="50px">\n      <p>').concat(n,"</p>\n  </li>")})).join("")})).catch((function(t){return console.log(t)}));var n}),300))}();
//# sourceMappingURL=index.63deb335.js.map
