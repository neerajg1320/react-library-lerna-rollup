"use strict";var e=require("react");function r(e,r,t){return(r=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(){return t=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){var r,t,n="";if(e)if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=o(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(t=o(r))&&(n&&(n+=" "),n+=t);else"boolean"==typeof e||e.call||(n&&(n+=" "),n+=e);return n}var a=".Button{background-color:#05b169;border:1px solid #05b169;border-radius:.25rem;color:#fff;cursor:pointer;font-size:1rem;outline:none;padding:.75rem 1rem;transition:all .1s ease-in-out;width:auto}.Button:focus,.Button:hover{background-color:#00a55e;border-color:#00a55e}.ButtonSecondary{background:transparent;border-color:#fff}.ButtonSecondary:focus,.ButtonSecondary:hover{background:#fff;border-color:#fff;color:#000}";!function(e,r){void 0===r&&(r={});var t=r.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(a);var i=["children","className","variant"];exports.Button=function(u){var c=u.children,l=u.className,f=u.variant,s=n(u,i),d=function(){for(var e,r=0,t="";r<arguments.length;)(e=o(arguments[r++]))&&(t&&(t+=" "),t+=e);return t}(a.Button,r({},a.ButtonSecondary,"secondary"===f),l);return e.createElement("button",t({},s,{className:d}),c)};
