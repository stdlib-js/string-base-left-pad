// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=void 0!==String.prototype.repeat,t=String.prototype.repeat,n=e?function(e,n){return t.call(e,n)}:function(e,t){var n,r;if(0===e.length||0===t)return"";for(n="",r=t;1==(1&r)&&(n+=e),0!=(r>>>=1);)e+=e;return n},r=Math.ceil;return function(e,t,o){var i=(t-e.length)/o.length;return i<=0?e:(i=r(i),n(o,i)+e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).lpad=t();
//# sourceMappingURL=index.js.map
