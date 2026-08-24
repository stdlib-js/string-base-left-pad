// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==String.prototype.repeat;var t=String.prototype.repeat;var e=r?function(r,e){return t.call(r,e)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},n=Math.ceil;function a(r,t,a){var o=(t-r.length)/a.length;return o<=0?r:(o=n(o),e(a,o)+r)}export{a as default};
//# sourceMappingURL=mod.js.map
