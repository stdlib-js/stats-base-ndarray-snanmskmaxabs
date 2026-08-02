"use strict";var v=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=v(function(c,u){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),i=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/stats-strided-snanmskmaxabs/dist').ndarray;function d(a){var r=a[1],e=a[0];return q(m(e,0),s(e),t(e,0),i(e),s(r),t(r,0),i(r))}u.exports=d
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
