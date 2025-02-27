(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var md={exports:{}},Oo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function xx(){if(O_)return Oo;O_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Oo.Fragment=e,Oo.jsx=i,Oo.jsxs=i,Oo}var P_;function Mx(){return P_||(P_=1,md.exports=xx()),md.exports}var V=Mx(),gd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function Ex(){if(B_)return lt;B_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function x(P,ie,Te){this.props=P,this.context=ie,this.refs=b,this.updater=Te||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,ie){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ie,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=x.prototype;function L(P,ie,Te){this.props=P,this.context=ie,this.refs=b,this.updater=Te||S}var w=L.prototype=new _;w.constructor=L,M(w,x.prototype),w.isPureReactComponent=!0;var C=Array.isArray,z={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function N(P,ie,Te,Re,Y,he){return Te=he.ref,{$$typeof:s,type:P,key:ie,ref:Te!==void 0?Te:null,props:he}}function G(P,ie){return N(P.type,ie,void 0,void 0,void 0,P.props)}function A(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function T(P){var ie={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Te){return ie[Te]})}var O=/\/+/g;function H(P,ie){return typeof P=="object"&&P!==null&&P.key!=null?T(""+P.key):ie.toString(36)}function q(){}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(q,q):(P.status="pending",P.then(function(ie){P.status==="pending"&&(P.status="fulfilled",P.value=ie)},function(ie){P.status==="pending"&&(P.status="rejected",P.reason=ie)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ce(P,ie,Te,Re,Y){var he=typeof P;(he==="undefined"||he==="boolean")&&(P=null);var Se=!1;if(P===null)Se=!0;else switch(he){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(P.$$typeof){case s:case e:Se=!0;break;case g:return Se=P._init,ce(Se(P._payload),ie,Te,Re,Y)}}if(Se)return Y=Y(P),Se=Re===""?"."+H(P,0):Re,C(Y)?(Te="",Se!=null&&(Te=Se.replace(O,"$&/")+"/"),ce(Y,ie,Te,"",function(Ve){return Ve})):Y!=null&&(A(Y)&&(Y=G(Y,Te+(Y.key==null||P&&P.key===Y.key?"":(""+Y.key).replace(O,"$&/")+"/")+Se)),ie.push(Y)),1;Se=0;var be=Re===""?".":Re+":";if(C(P))for(var Me=0;Me<P.length;Me++)Re=P[Me],he=be+H(Re,Me),Se+=ce(Re,ie,Te,he,Y);else if(Me=y(P),typeof Me=="function")for(P=Me.call(P),Me=0;!(Re=P.next()).done;)Re=Re.value,he=be+H(Re,Me++),Se+=ce(Re,ie,Te,he,Y);else if(he==="object"){if(typeof P.then=="function")return ce($(P),ie,Te,Re,Y);throw ie=String(P),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return Se}function W(P,ie,Te){if(P==null)return P;var Re=[],Y=0;return ce(P,Re,"","",function(he){return ie.call(Te,he,Y++)}),Re}function ae(P){if(P._status===-1){var ie=P._result;ie=ie(),ie.then(function(Te){(P._status===0||P._status===-1)&&(P._status=1,P._result=Te)},function(Te){(P._status===0||P._status===-1)&&(P._status=2,P._result=Te)}),P._status===-1&&(P._status=0,P._result=ie)}if(P._status===1)return P._result.default;throw P._result}var Q=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function ye(){}return lt.Children={map:W,forEach:function(P,ie,Te){W(P,function(){ie.apply(this,arguments)},Te)},count:function(P){var ie=0;return W(P,function(){ie++}),ie},toArray:function(P){return W(P,function(ie){return ie})||[]},only:function(P){if(!A(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=r,lt.Suspense=p,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.act=function(){throw Error("act(...) is not supported in production builds of React.")},lt.cache=function(P){return function(){return P.apply(null,arguments)}},lt.cloneElement=function(P,ie,Te){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=M({},P.props),Y=P.key,he=void 0;if(ie!=null)for(Se in ie.ref!==void 0&&(he=void 0),ie.key!==void 0&&(Y=""+ie.key),ie)!F.call(ie,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ie.ref===void 0||(Re[Se]=ie[Se]);var Se=arguments.length-2;if(Se===1)Re.children=Te;else if(1<Se){for(var be=Array(Se),Me=0;Me<Se;Me++)be[Me]=arguments[Me+2];Re.children=be}return N(P.type,Y,void 0,void 0,he,Re)},lt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},lt.createElement=function(P,ie,Te){var Re,Y={},he=null;if(ie!=null)for(Re in ie.key!==void 0&&(he=""+ie.key),ie)F.call(ie,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Y[Re]=ie[Re]);var Se=arguments.length-2;if(Se===1)Y.children=Te;else if(1<Se){for(var be=Array(Se),Me=0;Me<Se;Me++)be[Me]=arguments[Me+2];Y.children=be}if(P&&P.defaultProps)for(Re in Se=P.defaultProps,Se)Y[Re]===void 0&&(Y[Re]=Se[Re]);return N(P,he,void 0,void 0,null,Y)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(P){return{$$typeof:f,render:P}},lt.isValidElement=A,lt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ae}},lt.memo=function(P,ie){return{$$typeof:h,type:P,compare:ie===void 0?null:ie}},lt.startTransition=function(P){var ie=z.T,Te={};z.T=Te;try{var Re=P(),Y=z.S;Y!==null&&Y(Te,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(ye,Q)}catch(he){Q(he)}finally{z.T=ie}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(P){return z.H.use(P)},lt.useActionState=function(P,ie,Te){return z.H.useActionState(P,ie,Te)},lt.useCallback=function(P,ie){return z.H.useCallback(P,ie)},lt.useContext=function(P){return z.H.useContext(P)},lt.useDebugValue=function(){},lt.useDeferredValue=function(P,ie){return z.H.useDeferredValue(P,ie)},lt.useEffect=function(P,ie){return z.H.useEffect(P,ie)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(P,ie,Te){return z.H.useImperativeHandle(P,ie,Te)},lt.useInsertionEffect=function(P,ie){return z.H.useInsertionEffect(P,ie)},lt.useLayoutEffect=function(P,ie){return z.H.useLayoutEffect(P,ie)},lt.useMemo=function(P,ie){return z.H.useMemo(P,ie)},lt.useOptimistic=function(P,ie){return z.H.useOptimistic(P,ie)},lt.useReducer=function(P,ie,Te){return z.H.useReducer(P,ie,Te)},lt.useRef=function(P){return z.H.useRef(P)},lt.useState=function(P){return z.H.useState(P)},lt.useSyncExternalStore=function(P,ie,Te){return z.H.useSyncExternalStore(P,ie,Te)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.0.0",lt}var F_;function fa(){return F_||(F_=1,gd.exports=Ex()),gd.exports}var pe=fa(),_d={exports:{}},Po={},vd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function bx(){return z_||(z_=1,function(s){function e(W,ae){var Q=W.length;W.push(ae);e:for(;0<Q;){var ye=Q-1>>>1,P=W[ye];if(0<l(P,ae))W[ye]=ae,W[Q]=P,Q=ye;else break e}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ae=W[0],Q=W.pop();if(Q!==ae){W[0]=Q;e:for(var ye=0,P=W.length,ie=P>>>1;ye<ie;){var Te=2*(ye+1)-1,Re=W[Te],Y=Te+1,he=W[Y];if(0>l(Re,Q))Y<P&&0>l(he,Re)?(W[ye]=he,W[Y]=Q,ye=Y):(W[ye]=Re,W[Te]=Q,ye=Te);else if(Y<P&&0>l(he,Q))W[ye]=he,W[Y]=Q,ye=Y;else break e}}return ae}function l(W,ae){var Q=W.sortIndex-ae.sortIndex;return Q!==0?Q:W.id-ae.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],h=[],g=1,v=null,y=3,S=!1,M=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(W){for(var ae=i(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=W)r(h),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=i(h)}}function C(W){if(b=!1,w(W),!M)if(i(p)!==null)M=!0,$();else{var ae=i(h);ae!==null&&ce(C,ae.startTime-W)}}var z=!1,F=-1,N=5,G=-1;function A(){return!(s.unstable_now()-G<N)}function T(){if(z){var W=s.unstable_now();G=W;var ae=!0;try{e:{M=!1,b&&(b=!1,_(F),F=-1),S=!0;var Q=y;try{t:{for(w(W),v=i(p);v!==null&&!(v.expirationTime>W&&A());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,y=v.priorityLevel;var P=ye(v.expirationTime<=W);if(W=s.unstable_now(),typeof P=="function"){v.callback=P,w(W),ae=!0;break t}v===i(p)&&r(p),w(W)}else r(p);v=i(p)}if(v!==null)ae=!0;else{var ie=i(h);ie!==null&&ce(C,ie.startTime-W),ae=!1}}break e}finally{v=null,y=Q,S=!1}ae=void 0}}finally{ae?O():z=!1}}}var O;if(typeof L=="function")O=function(){L(T)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,q=H.port2;H.port1.onmessage=T,O=function(){q.postMessage(null)}}else O=function(){x(T,0)};function $(){z||(z=!0,O())}function ce(W,ae){F=x(function(){W(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,$())},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return i(p)},s.unstable_next=function(W){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var Q=y;y=ae;try{return W()}finally{y=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,ae){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Q=y;y=W;try{return ae()}finally{y=Q}},s.unstable_scheduleCallback=function(W,ae,Q){var ye=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ye+Q:ye):Q=ye,W){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Q+P,W={id:g++,callback:ae,priorityLevel:W,startTime:Q,expirationTime:P,sortIndex:-1},Q>ye?(W.sortIndex=Q,e(h,W),i(p)===null&&W===i(h)&&(b?(_(F),F=-1):b=!0,ce(C,Q-ye))):(W.sortIndex=P,e(p,W),M||S||(M=!0,$())),W},s.unstable_shouldYield=A,s.unstable_wrapCallback=function(W){var ae=y;return function(){var Q=y;y=ae;try{return W.apply(this,arguments)}finally{y=Q}}}}(yd)),yd}var I_;function Tx(){return I_||(I_=1,vd.exports=bx()),vd.exports}var Sd={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Ax(){if(H_)return Tn;H_=1;var s=fa();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:h,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(p,h,null,g)},Tn.flushSync=function(p){var h=d.T,g=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=h,r.p=g,r.d.f()}},Tn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Tn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Tn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=f(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Tn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=f(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=f(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Tn.requestFormReset=function(p){r.d.r(p)},Tn.unstable_batchedUpdates=function(p,h){return p(h)},Tn.useFormState=function(p,h,g){return d.H.useFormState(p,h,g)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var V_;function Kh(){if(V_)return Sd.exports;V_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sd.exports=Ax(),Sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Rx(){if(G_)return Po;G_=1;var s=Tx(),e=fa(),i=Kh();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),S=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),w=Symbol.for("react.offscreen"),C=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function G(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case f:return"Portal";case g:return"Profiler";case h:return"StrictMode";case b:return"Suspense";case x:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S:return(t.displayName||"Context")+".Provider";case y:return(t._context.displayName||"Context")+".Consumer";case M:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:G(t.type)||"Memo";case L:n=t._payload,t=t._init;try{return G(t(n))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Object.assign,O,H;function q(t){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+O+t+H}var $=!1;function ce(t,n){if(!t||$)return"";$=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(fe){var oe=fe}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(fe){oe=fe}t.call(xe.prototype)}}else{try{throw Error()}catch(fe){oe=fe}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(fe){if(fe&&oe&&typeof fe.stack=="string")return[fe.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),E=m[0],D=m[1];if(E&&D){var I=E.split(`
`),j=D.split(`
`);for(c=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(o===I.length||c===j.length)for(o=I.length-1,c=j.length-1;1<=o&&0<=c&&I[o]!==j[c];)c--;for(;1<=o&&0<=c;o--,c--)if(I[o]!==j[c]){if(o!==1||c!==1)do if(o--,c--,0>c||I[o]!==j[c]){var de=`
`+I[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=c);break}}}finally{$=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?q(a):""}function W(t){switch(t.tag){case 26:case 27:case 5:return q(t.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function ae(t){try{var n="";do n+=W(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Q(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function ye(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function P(t){if(Q(t)!==t)throw Error(r(188))}function ie(t){var n=t.alternate;if(!n){if(n=Q(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var m=c.alternate;if(m===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===m.child){for(m=c.child;m;){if(m===a)return P(c),t;if(m===o)return P(c),n;m=m.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=m;else{for(var E=!1,D=c.child;D;){if(D===a){E=!0,a=c,o=m;break}if(D===o){E=!0,o=c,a=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===a){E=!0,a=m,o=c;break}if(D===o){E=!0,o=m,a=c;break}D=D.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function Te(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=Te(t),n!==null)return n;t=t.sibling}return null}var Re=Array.isArray,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},Se=[],be=-1;function Me(t){return{current:t}}function Ve(t){0>be||(t.current=Se[be],Se[be]=null,be--)}function De(t,n){be++,Se[be]=t.current,t.current=n}var dt=Me(null),wt=Me(null),rt=Me(null),k=Me(null);function vn(t,n){switch(De(rt,n),De(wt,t),De(dt,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?u_(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=u_(t),n=c_(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Ve(dt),De(dt,n)}function ot(){Ve(dt),Ve(wt),Ve(rt)}function ht(t){t.memoizedState!==null&&De(k,t);var n=dt.current,a=c_(n,t.type);n!==a&&(De(wt,t),De(dt,a))}function qe(t){wt.current===t&&(Ve(dt),Ve(wt)),k.current===t&&(Ve(k),Co._currentValue=he)}var Ut=Object.prototype.hasOwnProperty,je=s.unstable_scheduleCallback,B=s.unstable_cancelCallback,R=s.unstable_shouldYield,se=s.unstable_requestPaint,me=s.unstable_now,Ee=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,ke=s.unstable_UserBlockingPriority,Le=s.unstable_NormalPriority,ze=s.unstable_LowPriority,gt=s.unstable_IdlePriority,we=s.log,Ie=s.unstable_setDisableYieldValue,Je=null,We=null;function He(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}function st(t){if(typeof we=="function"&&Ie(t),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Je,t)}catch{}}var Ke=Math.clz32?Math.clz32:Pe,Lt=Math.log,Z=Math.LN2;function Pe(t){return t>>>=0,t===0?32:31-(Lt(t)/Z|0)|0}var ue=128,ve=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ne(t,n){var a=t.pendingLanes;if(a===0)return 0;var o=0,c=t.suspendedLanes,m=t.pingedLanes,E=t.warmLanes;t=t.finishedLanes!==0;var D=a&134217727;return D!==0?(a=D&~c,a!==0?o=Ue(a):(m&=D,m!==0?o=Ue(m):t||(E=D&~E,E!==0&&(o=Ue(E))))):(D=a&~c,D!==0?o=Ue(D):m!==0?o=Ue(m):t||(E=a&~E,E!==0&&(o=Ue(E)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,E=n&-n,c>=E||c===32&&(E&4194176)!==0)?n:o}function et(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Vt(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rn(){var t=ue;return ue<<=1,(ue&4194176)===0&&(ue=128),t}function Et(){var t=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),t}function Dn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function il(t,n,a,o,c,m){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,I=t.expirationTimes,j=t.hiddenUpdates;for(a=E&~a;0<a;){var de=31-Ke(a),xe=1<<de;D[de]=0,I[de]=-1;var oe=j[de];if(oe!==null)for(j[de]=null,de=0;de<oe.length;de++){var fe=oe[de];fe!==null&&(fe.lane&=-536870913)}a&=~xe}o!==0&&Is(t,o,0),m!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~n))}function Is(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194218}function bi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ke(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Lr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Hs(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:w_(t.type))}function al(t,n){var a=Y.p;try{return Y.p=t,n()}finally{Y.p=a}}var Wn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Wn,on="__reactProps$"+Wn,Bi="__reactContainer$"+Wn,Nr="__reactEvents$"+Wn,dc="__reactListeners$"+Wn,hc="__reactHandles$"+Wn,rl="__reactResources$"+Wn,qa="__reactMarker$"+Wn;function Vs(t){delete t[sn],delete t[on],delete t[Nr],delete t[dc],delete t[hc]}function Fi(t){var n=t[sn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Bi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=h_(t);t!==null;){if(a=t[sn])return a;t=h_(t)}return n}t=a,a=t.parentNode}return null}function U(t){if(t=t[sn]||t[Bi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function K(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function re(t){var n=t[rl];return n||(n=t[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function te(t){t[qa]=!0}var J=new Set,Ae={};function Ce(t,n){Fe(t,n),Fe(t+"Capture",n)}function Fe(t,n){for(Ae[t]=n,t=0;t<n.length;t++)J.add(n[t])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},Ze={};function _t(t){return Ut.call(Ze,t)?!0:Ut.call(nt,t)?!1:tt.test(t)?Ze[t]=!0:(nt[t]=!0,!1)}function vt(t,n,a){if(_t(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ht(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function bt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ln(t){var n=Qe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,m=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,m.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function yt(t){t._valueTracker||(t._valueTracker=ln(t))}function Fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Qe(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function fi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ln=/[\n"\\]/g;function hn(t){return t.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nt(t,n,a,o,c,m,E,D){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?En(t,E,it(n)):a!=null?En(t,E,it(a)):o!=null&&t.removeAttribute("value"),c==null&&m!=null&&(t.defaultChecked=!!m),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+it(D):t.removeAttribute("name")}function Nn(t,n,a,o,c,m,E,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),n!=null||a!=null){if(!(m!=="submit"&&m!=="reset"||n!=null))return;a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=D?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function En(t,n,a){n==="number"&&fi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qt(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function yn(t,n,a){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+it(a):""}function Or(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Re(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=it(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function zn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var _y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _p(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||_y.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&_p(t,c,o)}else for(var m in n)n.hasOwnProperty(m)&&_p(t,m,n[m])}function pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return yy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mc=null;function gc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pr=null,Br=null;function yp(t){var n=U(t);if(n&&(t=n.stateNode)){var a=t[on]||null;e:switch(t=n.stateNode,n.type){case"input":if(Nt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[on]||null;if(!c)throw Error(r(90));Nt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Fn(o)}break e;case"textarea":yn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&qt(t,!!a.multiple,n,!1)}}}var _c=!1;function Sp(t,n,a){if(_c)return t(n,a);_c=!0;try{var o=t(n);return o}finally{if(_c=!1,(Pr!==null||Br!==null)&&(kl(),Pr&&(n=Pr,t=Br,Br=Pr=null,yp(n),t)))for(n=0;n<t.length;n++)yp(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[on]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var vc=!1;if(Be)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){vc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{vc=!1}var ha=null,yc=null,ol=null;function xp(){if(ol)return ol;var t,n=yc,a=n.length,o,c="value"in ha?ha.value:ha.textContent,m=c.length;for(t=0;t<a&&n[t]===c[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===c[m-o];o++);return ol=c.slice(t,1<o?1-o:void 0)}function ll(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Mp(){return!1}function In(t){function n(a,o,c,m,E){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ul:Mp,this.isPropagationStopped=Mp,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=In(ja),Ws=T({},ja,{view:0,detail:0}),Sy=In(Ws),Sc,xc,Xs,fl=T({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Sc=t.screenX-Xs.screenX,xc=t.screenY-Xs.screenY):xc=Sc=0,Xs=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Ep=In(fl),xy=T({},fl,{dataTransfer:0}),My=In(xy),Ey=T({},Ws,{relatedTarget:0}),Mc=In(Ey),by=T({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=In(by),Ay=T({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ry=In(Ay),wy=T({},ja,{data:0}),bp=In(wy),Cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Uy[t])?!!n[t]:!1}function Ec(){return Ly}var Ny=T({},Ws,{key:function(t){if(t.key){var n=Cy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Oy=In(Ny),Py=T({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=In(Py),By=T({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Fy=In(By),zy=T({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=In(zy),Hy=T({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=In(Hy),Gy=T({},ja,{newState:0,oldState:0}),ky=In(Gy),Wy=[9,13,27,32],bc=Be&&"CompositionEvent"in window,qs=null;Be&&"documentMode"in document&&(qs=document.documentMode);var Xy=Be&&"TextEvent"in window&&!qs,Ap=Be&&(!bc||qs&&8<qs&&11>=qs),Rp=" ",wp=!1;function Cp(t,n){switch(t){case"keyup":return Wy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fr=!1;function qy(t,n){switch(t){case"compositionend":return Dp(n);case"keypress":return n.which!==32?null:(wp=!0,Rp);case"textInput":return t=n.data,t===Rp&&wp?null:t;default:return null}}function jy(t,n){if(Fr)return t==="compositionend"||!bc&&Cp(t,n)?(t=xp(),ol=yc=ha=null,Fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var Yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Yy[t.type]:n==="textarea"}function Lp(t,n,a,o){Pr?Br?Br.push(o):Br=[o]:Pr=o,n=Yl(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var js=null,Ys=null;function Zy(t){a_(t,0)}function dl(t){var n=K(t);if(Fn(n))return t}function Np(t,n){if(t==="change")return n}var Op=!1;if(Be){var Tc;if(Be){var Ac="oninput"in document;if(!Ac){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Ac=typeof Pp.oninput=="function"}Tc=Ac}else Tc=!1;Op=Tc&&(!document.documentMode||9<document.documentMode)}function Bp(){js&&(js.detachEvent("onpropertychange",Fp),Ys=js=null)}function Fp(t){if(t.propertyName==="value"&&dl(Ys)){var n=[];Lp(n,Ys,t,gc(t)),Sp(Zy,n)}}function Ky(t,n,a){t==="focusin"?(Bp(),js=n,Ys=a,js.attachEvent("onpropertychange",Fp)):t==="focusout"&&Bp()}function Qy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Ys)}function Jy(t,n){if(t==="click")return dl(n)}function $y(t,n){if(t==="input"||t==="change")return dl(n)}function eS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Xn=typeof Object.is=="function"?Object.is:eS;function Zs(t,n){if(Xn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ut.call(n,c)||!Xn(t[c],n[c]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ip(t,n){var a=zp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zp(a)}}function Hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fi(t.document)}return n}function Rc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function tS(t,n){var a=Vp(n);n=t.focusedElem;var o=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&Hp(n.ownerDocument.documentElement,n)){if(o!==null&&Rc(n)){if(t=o.start,a=o.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,m=Math.min(o.start,c);o=o.end===void 0?m:Math.min(o.end,c),!a.extend&&m>o&&(c=o,o=m,m=c),c=Ip(n,m);var E=Ip(n,o);c&&E&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==E.node||a.focusOffset!==E.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),m>o?(a.addRange(t),a.extend(E.node,E.offset)):(t.setEnd(E.node,E.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var nS=Be&&"documentMode"in document&&11>=document.documentMode,zr=null,wc=null,Ks=null,Cc=!1;function Gp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||zr==null||zr!==fi(o)||(o=zr,"selectionStart"in o&&Rc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Yl(wc,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=zr)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ir={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Dc={},kp={};Be&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Za(t){if(Dc[t])return Dc[t];if(!Ir[t])return t;var n=Ir[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return Dc[t]=n[a];return t}var Wp=Za("animationend"),Xp=Za("animationiteration"),qp=Za("animationstart"),iS=Za("transitionrun"),aS=Za("transitionstart"),rS=Za("transitioncancel"),jp=Za("transitionend"),Yp=new Map,Zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function di(t,n){Yp.set(t,n),Ce(n,[t])}var Jn=[],Hr=0,Uc=0;function hl(){for(var t=Hr,n=Uc=Hr=0;n<t;){var a=Jn[n];Jn[n++]=null;var o=Jn[n];Jn[n++]=null;var c=Jn[n];Jn[n++]=null;var m=Jn[n];if(Jn[n++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}m!==0&&Kp(a,c,m)}}function pl(t,n,a,o){Jn[Hr++]=t,Jn[Hr++]=n,Jn[Hr++]=a,Jn[Hr++]=o,Uc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Lc(t,n,a,o){return pl(t,n,a,o),ml(t)}function pa(t,n){return pl(t,null,null,n),ml(t)}function Kp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,m=t.return;m!==null;)m.childLanes|=a,o=m.alternate,o!==null&&(o.childLanes|=a),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(c=!0)),t=m,m=m.return;c&&n!==null&&t.tag===3&&(m=t.stateNode,c=31-Ke(a),m=m.hiddenUpdates,t=m[c],t===null?m[c]=[n]:t.push(n),n.lane=a|536870912)}function ml(t){if(50<Mo)throw Mo=0,If=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Vr={},Qp=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=Qp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:ae(n)},Qp.set(t,n),n)}return{value:t,source:n,stack:ae(n)}}var Gr=[],kr=0,gl=null,_l=0,ei=[],ti=0,Ka=null,zi=1,Ii="";function Qa(t,n){Gr[kr++]=_l,Gr[kr++]=gl,gl=t,_l=n}function Jp(t,n,a){ei[ti++]=zi,ei[ti++]=Ii,ei[ti++]=Ka,Ka=t;var o=zi;t=Ii;var c=32-Ke(o)-1;o&=~(1<<c),a+=1;var m=32-Ke(n)+c;if(30<m){var E=c-c%5;m=(o&(1<<E)-1).toString(32),o>>=E,c-=E,zi=1<<32-Ke(n)+c|a<<c|o,Ii=m+t}else zi=1<<m|a<<c|o,Ii=t}function Nc(t){t.return!==null&&(Qa(t,1),Jp(t,1,0))}function Oc(t){for(;t===gl;)gl=Gr[--kr],Gr[kr]=null,_l=Gr[--kr],Gr[kr]=null;for(;t===Ka;)Ka=ei[--ti],ei[ti]=null,Ii=ei[--ti],ei[ti]=null,zi=ei[--ti],ei[ti]=null}var On=null,Sn=null,Tt=!1,hi=null,Ti=!1,Pc=Error(r(519));function Ja(t){var n=Error(r(418,""));throw $s($n(n,t)),Pc}function $p(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[sn]=t,n[on]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)St(bo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),yt(n);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Or(n,o.value,o.defaultValue,o.children),yt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||l_(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||Ja(t)}function em(t){for(On=t.return;On;)switch(On.tag){case 3:case 27:Ti=!0;return;case 5:case 13:Ti=!1;return;default:On=On.return}}function Qs(t){if(t!==On)return!1;if(!Tt)return em(t),Tt=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||nd(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&Sn&&Ja(t),em(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Sn=mi(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Sn=null}}else Sn=On?mi(t.stateNode.nextSibling):null;return!0}function Js(){Sn=On=null,Tt=!1}function $s(t){hi===null?hi=[t]:hi.push(t)}var eo=Error(r(460)),tm=Error(r(474)),Bc={then:function(){}};function nm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vl(){}function im(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(vl,vl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===eo?Error(r(483)):t;default:if(typeof n.status=="string")n.then(vl,vl);else{if(t=zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===eo?Error(r(483)):t}throw to=n,eo}}var to=null;function am(){if(to===null)throw Error(r(459));var t=to;return to=null,t}var Wr=null,no=0;function yl(t){var n=no;return no+=1,Wr===null&&(Wr=[]),im(Wr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function rm(t){var n=t._init;return n(t._payload)}function sm(t){function n(ee,X){if(t){var ne=ee.deletions;ne===null?(ee.deletions=[X],ee.flags|=16):ne.push(X)}}function a(ee,X){if(!t)return null;for(;X!==null;)n(ee,X),X=X.sibling;return null}function o(ee){for(var X=new Map;ee!==null;)ee.key!==null?X.set(ee.key,ee):X.set(ee.index,ee),ee=ee.sibling;return X}function c(ee,X){return ee=Aa(ee,X),ee.index=0,ee.sibling=null,ee}function m(ee,X,ne){return ee.index=ne,t?(ne=ee.alternate,ne!==null?(ne=ne.index,ne<X?(ee.flags|=33554434,X):ne):(ee.flags|=33554434,X)):(ee.flags|=1048576,X)}function E(ee){return t&&ee.alternate===null&&(ee.flags|=33554434),ee}function D(ee,X,ne,_e){return X===null||X.tag!==6?(X=Uf(ne,ee.mode,_e),X.return=ee,X):(X=c(X,ne),X.return=ee,X)}function I(ee,X,ne,_e){var Ge=ne.type;return Ge===p?de(ee,X,ne.props.children,_e,ne.key):X!==null&&(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===L&&rm(Ge)===X.type)?(X=c(X,ne.props),io(X,ne),X.return=ee,X):(X=zl(ne.type,ne.key,ne.props,null,ee.mode,_e),io(X,ne),X.return=ee,X)}function j(ee,X,ne,_e){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Lf(ne,ee.mode,_e),X.return=ee,X):(X=c(X,ne.children||[]),X.return=ee,X)}function de(ee,X,ne,_e,Ge){return X===null||X.tag!==7?(X=lr(ne,ee.mode,_e,Ge),X.return=ee,X):(X=c(X,ne),X.return=ee,X)}function xe(ee,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Uf(""+X,ee.mode,ne),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case d:return ne=zl(X.type,X.key,X.props,null,ee.mode,ne),io(ne,X),ne.return=ee,ne;case f:return X=Lf(X,ee.mode,ne),X.return=ee,X;case L:var _e=X._init;return X=_e(X._payload),xe(ee,X,ne)}if(Re(X)||F(X))return X=lr(X,ee.mode,ne,null),X.return=ee,X;if(typeof X.then=="function")return xe(ee,yl(X),ne);if(X.$$typeof===S)return xe(ee,Pl(ee,X),ne);Sl(ee,X)}return null}function oe(ee,X,ne,_e){var Ge=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return Ge!==null?null:D(ee,X,""+ne,_e);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case d:return ne.key===Ge?I(ee,X,ne,_e):null;case f:return ne.key===Ge?j(ee,X,ne,_e):null;case L:return Ge=ne._init,ne=Ge(ne._payload),oe(ee,X,ne,_e)}if(Re(ne)||F(ne))return Ge!==null?null:de(ee,X,ne,_e,null);if(typeof ne.then=="function")return oe(ee,X,yl(ne),_e);if(ne.$$typeof===S)return oe(ee,X,Pl(ee,ne),_e);Sl(ee,ne)}return null}function fe(ee,X,ne,_e,Ge){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return ee=ee.get(ne)||null,D(X,ee,""+_e,Ge);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case d:return ee=ee.get(_e.key===null?ne:_e.key)||null,I(X,ee,_e,Ge);case f:return ee=ee.get(_e.key===null?ne:_e.key)||null,j(X,ee,_e,Ge);case L:var pt=_e._init;return _e=pt(_e._payload),fe(ee,X,ne,_e,Ge)}if(Re(_e)||F(_e))return ee=ee.get(ne)||null,de(X,ee,_e,Ge,null);if(typeof _e.then=="function")return fe(ee,X,ne,yl(_e),Ge);if(_e.$$typeof===S)return fe(ee,X,ne,Pl(X,_e),Ge);Sl(X,_e)}return null}function Xe(ee,X,ne,_e){for(var Ge=null,pt=null,Ye=X,$e=X=0,gn=null;Ye!==null&&$e<ne.length;$e++){Ye.index>$e?(gn=Ye,Ye=null):gn=Ye.sibling;var At=oe(ee,Ye,ne[$e],_e);if(At===null){Ye===null&&(Ye=gn);break}t&&Ye&&At.alternate===null&&n(ee,Ye),X=m(At,X,$e),pt===null?Ge=At:pt.sibling=At,pt=At,Ye=gn}if($e===ne.length)return a(ee,Ye),Tt&&Qa(ee,$e),Ge;if(Ye===null){for(;$e<ne.length;$e++)Ye=xe(ee,ne[$e],_e),Ye!==null&&(X=m(Ye,X,$e),pt===null?Ge=Ye:pt.sibling=Ye,pt=Ye);return Tt&&Qa(ee,$e),Ge}for(Ye=o(Ye);$e<ne.length;$e++)gn=fe(Ye,ee,$e,ne[$e],_e),gn!==null&&(t&&gn.alternate!==null&&Ye.delete(gn.key===null?$e:gn.key),X=m(gn,X,$e),pt===null?Ge=gn:pt.sibling=gn,pt=gn);return t&&Ye.forEach(function(Na){return n(ee,Na)}),Tt&&Qa(ee,$e),Ge}function at(ee,X,ne,_e){if(ne==null)throw Error(r(151));for(var Ge=null,pt=null,Ye=X,$e=X=0,gn=null,At=ne.next();Ye!==null&&!At.done;$e++,At=ne.next()){Ye.index>$e?(gn=Ye,Ye=null):gn=Ye.sibling;var Na=oe(ee,Ye,At.value,_e);if(Na===null){Ye===null&&(Ye=gn);break}t&&Ye&&Na.alternate===null&&n(ee,Ye),X=m(Na,X,$e),pt===null?Ge=Na:pt.sibling=Na,pt=Na,Ye=gn}if(At.done)return a(ee,Ye),Tt&&Qa(ee,$e),Ge;if(Ye===null){for(;!At.done;$e++,At=ne.next())At=xe(ee,At.value,_e),At!==null&&(X=m(At,X,$e),pt===null?Ge=At:pt.sibling=At,pt=At);return Tt&&Qa(ee,$e),Ge}for(Ye=o(Ye);!At.done;$e++,At=ne.next())At=fe(Ye,ee,$e,At.value,_e),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?$e:At.key),X=m(At,X,$e),pt===null?Ge=At:pt.sibling=At,pt=At);return t&&Ye.forEach(function(yx){return n(ee,yx)}),Tt&&Qa(ee,$e),Ge}function Zt(ee,X,ne,_e){if(typeof ne=="object"&&ne!==null&&ne.type===p&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case d:e:{for(var Ge=ne.key;X!==null;){if(X.key===Ge){if(Ge=ne.type,Ge===p){if(X.tag===7){a(ee,X.sibling),_e=c(X,ne.props.children),_e.return=ee,ee=_e;break e}}else if(X.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===L&&rm(Ge)===X.type){a(ee,X.sibling),_e=c(X,ne.props),io(_e,ne),_e.return=ee,ee=_e;break e}a(ee,X);break}else n(ee,X);X=X.sibling}ne.type===p?(_e=lr(ne.props.children,ee.mode,_e,ne.key),_e.return=ee,ee=_e):(_e=zl(ne.type,ne.key,ne.props,null,ee.mode,_e),io(_e,ne),_e.return=ee,ee=_e)}return E(ee);case f:e:{for(Ge=ne.key;X!==null;){if(X.key===Ge)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(ee,X.sibling),_e=c(X,ne.children||[]),_e.return=ee,ee=_e;break e}else{a(ee,X);break}else n(ee,X);X=X.sibling}_e=Lf(ne,ee.mode,_e),_e.return=ee,ee=_e}return E(ee);case L:return Ge=ne._init,ne=Ge(ne._payload),Zt(ee,X,ne,_e)}if(Re(ne))return Xe(ee,X,ne,_e);if(F(ne)){if(Ge=F(ne),typeof Ge!="function")throw Error(r(150));return ne=Ge.call(ne),at(ee,X,ne,_e)}if(typeof ne.then=="function")return Zt(ee,X,yl(ne),_e);if(ne.$$typeof===S)return Zt(ee,X,Pl(ee,ne),_e);Sl(ee,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,X!==null&&X.tag===6?(a(ee,X.sibling),_e=c(X,ne),_e.return=ee,ee=_e):(a(ee,X),_e=Uf(ne,ee.mode,_e),_e.return=ee,ee=_e),E(ee)):a(ee,X)}return function(ee,X,ne,_e){try{no=0;var Ge=Zt(ee,X,ne,_e);return Wr=null,Ge}catch(Ye){if(Ye===eo)throw Ye;var pt=ri(29,Ye,null,ee.mode);return pt.lanes=_e,pt.return=ee,pt}finally{}}}var $a=sm(!0),om=sm(!1),Xr=Me(null),xl=Me(0);function lm(t,n){t=Ki,De(xl,t),De(Xr,n),Ki=t|n.baseLanes}function Fc(){De(xl,Ki),De(Xr,Xr.current)}function zc(){Ki=xl.current,Ve(Xr),Ve(xl)}var ni=Me(null),Ai=null;function ma(t){var n=t.alternate;De(un,un.current&1),De(ni,t),Ai===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Ai=t)}function um(t){if(t.tag===22){if(De(un,un.current),De(ni,t),Ai===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Ai=t)}}else ga()}function ga(){De(un,un.current),De(ni,ni.current)}function Hi(t){Ve(ni),Ai===t&&(Ai=null),Ve(un)}var un=Me(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},oS=s.unstable_scheduleCallback,lS=s.unstable_NormalPriority,cn={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ic(){return{controller:new sS,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&oS(lS,function(){t.controller.abort()})}var ro=null,Hc=0,qr=0,jr=null;function uS(t,n){if(ro===null){var a=ro=[];Hc=0,qr=jf(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Hc++,n.then(cm,cm),n}function cm(){if(--Hc===0&&ro!==null){jr!==null&&(jr.status="fulfilled");var t=ro;ro=null,qr=0,jr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var fm=A.S;A.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(t,n),fm!==null&&fm(t,n)};var er=Me(null);function Vc(){var t=er.current;return t!==null?t:zt.pooledCache}function El(t,n){n===null?De(er,er.current):De(er,n.pool)}function dm(){var t=Vc();return t===null?null:{parent:cn._currentValue,pool:t}}var _a=0,ft=null,Ot=null,$t=null,bl=!1,Yr=!1,tr=!1,Tl=0,so=0,Zr=null,fS=0;function Jt(){throw Error(r(321))}function Gc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Xn(t[a],n[a]))return!1;return!0}function kc(t,n,a,o,c,m){return _a=m,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=t===null||t.memoizedState===null?nr:va,tr=!1,m=a(o,c),tr=!1,Yr&&(m=pm(n,a,o,c)),hm(t),m}function hm(t){A.H=Ri;var n=Ot!==null&&Ot.next!==null;if(_a=0,$t=Ot=ft=null,bl=!1,so=0,Zr=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Ol(t)&&(pn=!0))}function pm(t,n,a,o){ft=t;var c=0;do{if(Yr&&(Zr=null),so=0,Yr=!1,25<=c)throw Error(r(301));if(c+=1,$t=Ot=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}A.H=ir,m=n(a,o)}while(Yr);return m}function dS(){var t=A.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Ot!==null?Ot.memoizedState:null)!==t&&(ft.flags|=1024),n}function Wc(){var t=Tl!==0;return Tl=0,t}function Xc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function qc(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}_a=0,$t=Ot=ft=null,Yr=!1,so=Tl=0,Zr=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?ft.memoizedState=$t=t:$t=$t.next=t,$t}function en(){if(Ot===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var n=$t===null?ft.memoizedState:$t.next;if(n!==null)$t=n,Ot=t;else{if(t===null)throw ft.alternate===null?Error(r(467)):Error(r(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},$t===null?ft.memoizedState=$t=t:$t=$t.next=t}return $t}var Al;Al=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function oo(t){var n=so;return so+=1,Zr===null&&(Zr=[]),t=im(Zr,t,n),n=ft,($t===null?n.memoizedState:$t.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?nr:va),t}function Rl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===S)return bn(t)}throw Error(r(438,String(t)))}function jc(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function wl(t){var n=en();return Yc(n,Ot,t)}function Yc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,m=o.pending;if(m!==null){if(c!==null){var E=c.next;c.next=m.next,m.next=E}n.baseQueue=c=m,o.pending=null}if(m=t.baseState,c===null)t.memoizedState=m;else{n=c.next;var D=E=null,I=null,j=n,de=!1;do{var xe=j.lane&-536870913;if(xe!==j.lane?(Mt&xe)===xe:(_a&xe)===xe){var oe=j.revertLane;if(oe===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),xe===qr&&(de=!0);else if((_a&oe)===oe){j=j.next,oe===qr&&(de=!0);continue}else xe={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(D=I=xe,E=m):I=I.next=xe,ft.lanes|=oe,Ra|=oe;xe=j.action,tr&&a(m,xe),m=j.hasEagerState?j.eagerState:a(m,xe)}else oe={lane:xe,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(D=I=oe,E=m):I=I.next=oe,ft.lanes|=xe,Ra|=xe;j=j.next}while(j!==null&&j!==n);if(I===null?E=m:I.next=D,!Xn(m,t.memoizedState)&&(pn=!0,de&&(a=jr,a!==null)))throw a;t.memoizedState=m,t.baseState=E,t.baseQueue=I,o.lastRenderedState=m}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Zc(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,m=n.memoizedState;if(c!==null){a.pending=null;var E=c=c.next;do m=t(m,E.action),E=E.next;while(E!==c);Xn(m,n.memoizedState)||(pn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),a.lastRenderedState=m}return[m,o]}function mm(t,n,a){var o=ft,c=en(),m=Tt;if(m){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!Xn((Ot||c).memoizedState,a);if(E&&(c.memoizedState=a,pn=!0),c=c.queue,Jc(vm.bind(null,o,c,t),[t]),c.getSnapshot!==n||E||$t!==null&&$t.memoizedState.tag&1){if(o.flags|=2048,Kr(9,_m.bind(null,o,c,a,n),{destroy:void 0},null),zt===null)throw Error(r(349));m||(_a&60)!==0||gm(o,n,a)}return a}function gm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Al(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function _m(t,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Sm(t)}function vm(t,n,a){return a(function(){ym(n)&&Sm(t)})}function ym(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Xn(t,a)}catch{return!0}}function Sm(t){var n=pa(t,2);n!==null&&Pn(n,t,2)}function Kc(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),tr){st(!0);try{a()}finally{st(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function xm(t,n,a,o){return t.baseState=a,Yc(t,Ot,typeof o=="function"?o:Vi)}function hS(t,n,a,o,c){if(Ul(t))throw Error(r(485));if(t=n.action,t!==null){var m={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};A.T!==null?a(!0):m.isTransition=!1,o(m),a=n.pending,a===null?(m.next=n.pending=m,Mm(n,m)):(m.next=a.next,n.pending=a.next=m)}}function Mm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var m=A.T,E={};A.T=E;try{var D=a(c,o),I=A.S;I!==null&&I(E,D),Em(t,n,D)}catch(j){Qc(t,n,j)}finally{A.T=m}}else try{m=a(c,o),Em(t,n,m)}catch(j){Qc(t,n,j)}}function Em(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bm(t,n,o)},function(o){return Qc(t,n,o)}):bm(t,n,a)}function bm(t,n,a){n.status="fulfilled",n.value=a,Tm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Mm(t,a)))}function Qc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Tm(n),n=n.next;while(n!==o)}t.action=null}function Tm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Am(t,n){return n}function Rm(t,n){if(Tt){var a=zt.formState;if(a!==null){e:{var o=ft;if(Tt){if(Sn){t:{for(var c=Sn,m=Ti;c.nodeType!==8;){if(!m){c=null;break t}if(c=mi(c.nextSibling),c===null){c=null;break t}}m=c.data,c=m==="F!"||m==="F"?c:null}if(c){Sn=mi(c.nextSibling),o=c.data==="F!";break e}}Ja(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Am,lastRenderedState:n},a.queue=o,a=Xm.bind(null,ft,o),o.dispatch=a,o=Kc(!1),m=af.bind(null,ft,!1,o.queue),o=Hn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=hS.bind(null,ft,c,m,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function wm(t){var n=en();return Cm(n,Ot,t)}function Cm(t,n,a){n=Yc(t,n,Am)[0],t=wl(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?oo(n):n;var o=en(),c=o.queue,m=c.dispatch;return a!==o.memoizedState&&(ft.flags|=2048,Kr(9,pS.bind(null,c,a),{destroy:void 0},null)),[n,m,t]}function pS(t,n){t.action=n}function Dm(t){var n=en(),a=Ot;if(a!==null)return Cm(n,a,t);en(),n=n.memoizedState,a=en();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Kr(t,n,a,o){return t={tag:t,create:n,inst:a,deps:o,next:null},n=ft.updateQueue,n===null&&(n=Al(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Um(){return en().memoizedState}function Cl(t,n,a,o){var c=Hn();ft.flags|=t,c.memoizedState=Kr(1|n,a,{destroy:void 0},o===void 0?null:o)}function Dl(t,n,a,o){var c=en();o=o===void 0?null:o;var m=c.memoizedState.inst;Ot!==null&&o!==null&&Gc(o,Ot.memoizedState.deps)?c.memoizedState=Kr(n,a,m,o):(ft.flags|=t,c.memoizedState=Kr(1|n,a,m,o))}function Lm(t,n){Cl(8390656,8,t,n)}function Jc(t,n){Dl(2048,8,t,n)}function Nm(t,n){return Dl(4,2,t,n)}function Om(t,n){return Dl(4,4,t,n)}function Pm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Bm(t,n,a){a=a!=null?a.concat([t]):null,Dl(4,4,Pm.bind(null,n,t),a)}function $c(){}function Fm(t,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function zm(t,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gc(n,o[1]))return o[0];if(o=t(),tr){st(!0);try{t()}finally{st(!1)}}return a.memoizedState=[o,n],o}function ef(t,n,a){return a===void 0||(_a&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Hg(),ft.lanes|=t,Ra|=t,a)}function Im(t,n,a,o){return Xn(a,n)?a:Xr.current!==null?(t=ef(t,a,o),Xn(t,n)||(pn=!0),t):(_a&42)===0?(pn=!0,t.memoizedState=a):(t=Hg(),ft.lanes|=t,Ra|=t,n)}function Hm(t,n,a,o,c){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=A.T,D={};A.T=D,af(t,!1,n,a);try{var I=c(),j=A.S;if(j!==null&&j(D,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=cS(I,o);lo(t,n,de,Zn(t))}else lo(t,n,o,Zn(t))}catch(xe){lo(t,n,{then:function(){},status:"rejected",reason:xe},Zn())}finally{Y.p=m,A.T=E}}function mS(){}function tf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Vm(t).queue;Hm(t,c,n,he,a===null?mS:function(){return Gm(t),a(o)})}function Vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:he},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Gm(t){var n=Vm(t).next.queue;lo(t,n,{},Zn())}function nf(){return bn(Co)}function km(){return en().memoizedState}function Wm(){return en().memoizedState}function gS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=xa(a);var o=Ma(n,t,a);o!==null&&(Pn(o,n,a),fo(o,n,a)),n={cache:Ic()},t.payload=n;return}n=n.return}}function _S(t,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(t)?qm(n,a):(a=Lc(t,n,a,o),a!==null&&(Pn(a,t,o),jm(a,n,o)))}function Xm(t,n,a){var o=Zn();lo(t,n,a,o)}function lo(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(t))qm(n,c);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var E=n.lastRenderedState,D=m(E,a);if(c.hasEagerState=!0,c.eagerState=D,Xn(D,E))return pl(t,n,c,0),zt===null&&hl(),!1}catch{}finally{}if(a=Lc(t,n,c,o),a!==null)return Pn(a,t,o),jm(a,n,o),!0}return!1}function af(t,n,a,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(t)){if(n)throw Error(r(479))}else n=Lc(t,a,o,2),n!==null&&Pn(n,t,2)}function Ul(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function qm(t,n){Yr=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jm(t,n,a){if((a&4194176)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,bi(t,a)}}var Ri={readContext:bn,use:Rl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt};Ri.useCacheRefresh=Jt,Ri.useMemoCache=Jt,Ri.useHostTransitionStatus=Jt,Ri.useFormState=Jt,Ri.useActionState=Jt,Ri.useOptimistic=Jt;var nr={readContext:bn,use:Rl,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,Pm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var o=t();if(tr){st(!0);try{t()}finally{st(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Hn();if(a!==void 0){var c=a(n);if(tr){st(!0);try{a(n)}finally{st(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=_S.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Kc(t);var n=t.queue,a=Xm.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:$c,useDeferredValue:function(t,n){var a=Hn();return ef(a,t,n)},useTransition:function(){var t=Kc(!1);return t=Hm.bind(null,ft,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,c=Hn();if(Tt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),zt===null)throw Error(r(349));(Mt&60)!==0||gm(o,n,a)}c.memoizedState=a;var m={value:a,getSnapshot:n};return c.queue=m,Lm(vm.bind(null,o,m,t),[t]),o.flags|=2048,Kr(9,_m.bind(null,o,m,a,n),{destroy:void 0},null),a},useId:function(){var t=Hn(),n=zt.identifierPrefix;if(Tt){var a=Ii,o=zi;a=(o&~(1<<32-Ke(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=fS++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=gS.bind(null,ft)}};nr.useMemoCache=jc,nr.useHostTransitionStatus=nf,nr.useFormState=Rm,nr.useActionState=Rm,nr.useOptimistic=function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,ft,!0,a),a.dispatch=n,[t,n]};var va={readContext:bn,use:Rl,useCallback:Fm,useContext:bn,useEffect:Jc,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:zm,useReducer:wl,useRef:Um,useState:function(){return wl(Vi)},useDebugValue:$c,useDeferredValue:function(t,n){var a=en();return Im(a,Ot.memoizedState,t,n)},useTransition:function(){var t=wl(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:mm,useId:km};va.useCacheRefresh=Wm,va.useMemoCache=jc,va.useHostTransitionStatus=nf,va.useFormState=wm,va.useActionState=wm,va.useOptimistic=function(t,n){var a=en();return xm(a,Ot,t,n)};var ir={readContext:bn,use:Rl,useCallback:Fm,useContext:bn,useEffect:Jc,useImperativeHandle:Bm,useInsertionEffect:Nm,useLayoutEffect:Om,useMemo:zm,useReducer:Zc,useRef:Um,useState:function(){return Zc(Vi)},useDebugValue:$c,useDeferredValue:function(t,n){var a=en();return Ot===null?ef(a,t,n):Im(a,Ot.memoizedState,t,n)},useTransition:function(){var t=Zc(Vi)[0],n=en().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:mm,useId:km};ir.useCacheRefresh=Wm,ir.useMemoCache=jc,ir.useHostTransitionStatus=nf,ir.useFormState=Dm,ir.useActionState=Dm,ir.useOptimistic=function(t,n){var a=en();return Ot!==null?xm(a,Ot,t,n):(a.baseState=t,[t,a.queue.dispatch])};function rf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:T({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var sf={isMounted:function(t){return(t=t._reactInternals)?Q(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Zn(),c=xa(o);c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Pn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Zn(),c=xa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(t,c,o),n!==null&&(Pn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,a),n!==null&&(Pn(n,t,a),fo(n,t,a))}};function Ym(t,n,a,o,c,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,m,E):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,m):!0}function Zm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&sf.enqueueReplaceState(n,n.state,null)}function ar(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=T({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Km(t){Ll(t)}function Qm(t){console.error(t)}function Jm(t){Ll(t)}function Nl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $m(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function of(t,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(t,n)},a}function eg(t){return t=xa(t),t.tag=3,t}function tg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var m=o.value;t.payload=function(){return c(m)},t.callback=function(){$m(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){$m(n,a,o),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function vS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return Ai===null?Gf():a.alternate===null&&Yt===0&&(Yt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Bc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,c)),!1;case 22:return a.flags|=65536,o===Bc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,c)),!1}throw Error(r(435,a.tag))}return Wf(t,o,c),Gf(),!1}if(Tt)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Pc&&(t=Error(r(422),{cause:o}),$s($n(t,a)))):(o!==Pc&&(n=Error(r(423),{cause:o}),$s($n(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=$n(o,a),c=of(t.stateNode,o,c),Mf(t,c),Yt!==4&&(Yt=2)),!1;var m=Error(r(520),{cause:o});if(m=$n(m,a),So===null?So=[m]:So.push(m),Yt!==4&&(Yt=2),n===null)return!0;o=$n(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=of(a.stateNode,o,t),Mf(a,t),!1;case 1:if(n=a.type,m=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wa===null||!wa.has(m))))return a.flags|=65536,c&=-c,a.lanes|=c,c=eg(c),tg(c,t,a,o),Mf(a,c),!1}a=a.return}while(a!==null);return!1}var ng=Error(r(461)),pn=!1;function xn(t,n,a,o){n.child=t===null?om(n,null,a,o):$a(n,t.child,a,o)}function ig(t,n,a,o,c){a=a.render;var m=n.ref;if("ref"in o){var E={};for(var D in o)D!=="ref"&&(E[D]=o[D])}else E=o;return sr(n),o=kc(t,n,a,E,m,c),D=Wc(),t!==null&&!pn?(Xc(t,n,c),Gi(t,n,c)):(Tt&&D&&Nc(n),n.flags|=1,xn(t,n,o,c),n.child)}function ag(t,n,a,o,c){if(t===null){var m=a.type;return typeof m=="function"&&!Df(m)&&m.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=m,rg(t,n,m,o,c)):(t=zl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(m=t.child,!gf(t,c)){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(E,o)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Aa(m,o),t.ref=n.ref,t.return=n,n.child=t}function rg(t,n,a,o,c){if(t!==null){var m=t.memoizedProps;if(Zs(m,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=m,gf(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return lf(t,n,a,o,c)}function sg(t,n,a){var o=n.pendingProps,c=o.children,m=(n.stateNode._pendingVisibility&2)!==0,E=t!==null?t.memoizedState:null;if(uo(t,n),o.mode==="hidden"||m){if((n.flags&128)!==0){if(o=E!==null?E.baseLanes|a:a,t!==null){for(c=n.child=t.child,m=0;c!==null;)m=m|c.lanes|c.childLanes,c=c.sibling;n.childLanes=m&~o}else n.childLanes=0,n.child=null;return og(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,E!==null?E.cachePool:null),E!==null?lm(n,E):Fc(),um(n);else return n.lanes=n.childLanes=536870912,og(t,n,E!==null?E.baseLanes|a:a,a)}else E!==null?(El(n,E.cachePool),lm(n,E),ga(),n.memoizedState=null):(t!==null&&El(n,null),Fc(),ga());return xn(t,n,c,a),n.child}function og(t,n,a,o){var c=Vc();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&El(n,null),Fc(),um(n),t!==null&&co(t,n,o,!0),null}function uo(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function lf(t,n,a,o,c){return sr(n),a=kc(t,n,a,o,void 0,c),o=Wc(),t!==null&&!pn?(Xc(t,n,c),Gi(t,n,c)):(Tt&&o&&Nc(n),n.flags|=1,xn(t,n,a,c),n.child)}function lg(t,n,a,o,c,m){return sr(n),n.updateQueue=null,a=pm(n,o,a,c),hm(t),o=Wc(),t!==null&&!pn?(Xc(t,n,m),Gi(t,n,m)):(Tt&&o&&Nc(n),n.flags|=1,xn(t,n,a,m),n.child)}function ug(t,n,a,o,c){if(sr(n),n.stateNode===null){var m=Vr,E=a.contextType;typeof E=="object"&&E!==null&&(m=bn(E)),m=new a(o,m),n.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=sf,n.stateNode=m,m._reactInternals=n,m=n.stateNode,m.props=o,m.state=n.memoizedState,m.refs={},Sf(n),E=a.contextType,m.context=typeof E=="object"&&E!==null?bn(E):Vr,m.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(rf(n,a,E,o),m.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&sf.enqueueReplaceState(m,m.state,null),po(n,o,m,c),ho(),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){m=n.stateNode;var D=n.memoizedProps,I=ar(a,D);m.props=I;var j=m.context,de=a.contextType;E=Vr,typeof de=="object"&&de!==null&&(E=bn(de));var xe=a.getDerivedStateFromProps;de=typeof xe=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,de||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||j!==E)&&Zm(n,m,o,E),Sa=!1;var oe=n.memoizedState;m.state=oe,po(n,o,m,c),ho(),j=n.memoizedState,D||oe!==j||Sa?(typeof xe=="function"&&(rf(n,a,xe,o),j=n.memoizedState),(I=Sa||Ym(n,a,I,o,oe,j,E))?(de||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(n.flags|=4194308)):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=j),m.props=o,m.state=j,m.context=E,o=I):(typeof m.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{m=n.stateNode,xf(t,n),E=n.memoizedProps,de=ar(a,E),m.props=de,xe=n.pendingProps,oe=m.context,j=a.contextType,I=Vr,typeof j=="object"&&j!==null&&(I=bn(j)),D=a.getDerivedStateFromProps,(j=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==xe||oe!==I)&&Zm(n,m,o,I),Sa=!1,oe=n.memoizedState,m.state=oe,po(n,o,m,c),ho();var fe=n.memoizedState;E!==xe||oe!==fe||Sa||t!==null&&t.dependencies!==null&&Ol(t.dependencies)?(typeof D=="function"&&(rf(n,a,D,o),fe=n.memoizedState),(de=Sa||Ym(n,a,de,o,oe,fe,I)||t!==null&&t.dependencies!==null&&Ol(t.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,fe,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,fe,I)),typeof m.componentDidUpdate=="function"&&(n.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=fe),m.props=o,m.state=fe,m.context=I,o=de):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return m=o,uo(t,n),o=(n.flags&128)!==0,m||o?(m=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:m.render(),n.flags|=1,t!==null&&o?(n.child=$a(n,t.child,null,c),n.child=$a(n,null,a,c)):xn(t,n,a,c),n.memoizedState=m.state,t=n.child):t=Gi(t,n,c),t}function cg(t,n,a,o){return Js(),n.flags|=256,xn(t,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0};function cf(t){return{baseLanes:t,cachePool:dm()}}function ff(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=si),t}function fg(t,n,a){var o=n.pendingProps,c=!1,m=(n.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),E&&(c=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(c?ma(n):ga(),Tt){var D=Sn,I;if(I=D){e:{for(I=D,D=Ti;I.nodeType!==8;){if(!D){D=null;break e}if(I=mi(I.nextSibling),I===null){D=null;break e}}D=I}D!==null?(n.memoizedState={dehydrated:D,treeContext:Ka!==null?{id:zi,overflow:Ii}:null,retryLane:536870912},I=ri(18,null,null,0),I.stateNode=D,I.return=n,n.child=I,On=n,Sn=null,I=!0):I=!1}I||Ja(n)}if(D=n.memoizedState,D!==null&&(D=D.dehydrated,D!==null))return D.data==="$!"?n.lanes=16:n.lanes=536870912,null;Hi(n)}return D=o.children,o=o.fallback,c?(ga(),c=n.mode,D=hf({mode:"hidden",children:D},c),o=lr(o,c,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,c=n.child,c.memoizedState=cf(a),c.childLanes=ff(t,E,a),n.memoizedState=uf,o):(ma(n),df(n,D))}if(I=t.memoizedState,I!==null&&(D=I.dehydrated,D!==null)){if(m)n.flags&256?(ma(n),n.flags&=-257,n=pf(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),c=o.fallback,D=n.mode,o=hf({mode:"visible",children:o.children},D),c=lr(c,D,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,$a(n,t.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=ff(t,E,a),n.memoizedState=uf,n=c);else if(ma(n),D.data==="$!"){if(E=D.nextSibling&&D.nextSibling.dataset,E)var j=E.dgst;E=j,o=Error(r(419)),o.stack="",o.digest=E,$s({value:o,source:null,stack:null}),n=pf(t,n,a)}else if(pn||co(t,n,a,!1),E=(a&t.childLanes)!==0,pn||E){if(E=zt,E!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane)throw I.retryLane=o,pa(t,o),Pn(E,t,o),ng}D.data==="$?"||Gf(),n=pf(t,n,a)}else D.data==="$?"?(n.flags|=128,n.child=t.child,n=NS.bind(null,t),D._reactRetry=n,n=null):(t=I.treeContext,Sn=mi(D.nextSibling),On=n,Tt=!0,hi=null,Ti=!1,t!==null&&(ei[ti++]=zi,ei[ti++]=Ii,ei[ti++]=Ka,zi=t.id,Ii=t.overflow,Ka=n),n=df(n,o.children),n.flags|=4096);return n}return c?(ga(),c=o.fallback,D=n.mode,I=t.child,j=I.sibling,o=Aa(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&31457280,j!==null?c=Aa(j,c):(c=lr(c,D,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,D=t.child.memoizedState,D===null?D=cf(a):(I=D.cachePool,I!==null?(j=cn._currentValue,I=I.parent!==j?{parent:j,pool:j}:I):I=dm(),D={baseLanes:D.baseLanes|a,cachePool:I}),c.memoizedState=D,c.childLanes=ff(t,E,a),n.memoizedState=uf,o):(ma(n),a=t.child,t=a.sibling,a=Aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function df(t,n){return n=hf({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hf(t,n){return Fg(t,n,0,null)}function pf(t,n,a){return $a(n,t.child,null,a),t=df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function dg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),vf(t.return,n,a)}function mf(t,n,a,o,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=o,m.tail=a,m.tailMode=c)}function hg(t,n,a){var o=n.pendingProps,c=o.revealOrder,m=o.tail;if(xn(t,n,o.children,a),o=un.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&dg(t,a,n);else if(t.tag===19)dg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(De(un,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),mf(n,!1,c,a,m);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Ml(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}mf(n,!0,a,null,m);break;case"together":mf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(co(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Aa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Aa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ol(t)))}function yS(t,n,a){switch(n.tag){case 3:vn(n,n.stateNode.containerInfo),ya(n,cn,t.memoizedState.cache),Js();break;case 27:case 5:ht(n);break;case 4:vn(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?fg(t,n,a):(ma(n),t=Gi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return hg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),De(un,un.current),o)break;return null;case 22:case 23:return n.lanes=0,sg(t,n,a);case 24:ya(n,cn,t.memoizedState.cache)}return Gi(t,n,a)}function pg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!gf(t,a)&&(n.flags&128)===0)return pn=!1,yS(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Tt&&(n.flags&1048576)!==0&&Jp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Df(o)?(t=ar(o,t),n.tag=1,n=ug(null,n,o,t,a)):(n.tag=0,n=lf(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===M){n.tag=11,n=ig(null,n,o,t,a);break e}else if(c===_){n.tag=14,n=ag(null,n,o,t,a);break e}}throw n=G(o)||o,Error(r(306,n,""))}}return n;case 0:return lf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ar(o,n.pendingProps),ug(t,n,o,c,a);case 3:e:{if(vn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var m=n.pendingProps;c=n.memoizedState,o=c.element,xf(t,n),po(n,m,null,a);var E=n.memoizedState;if(m=E.cache,ya(n,cn,m),m!==c.cache&&yf(n,[cn],a,!0),ho(),m=E.element,c.isDehydrated)if(c={element:m,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=cg(t,n,m,a);break e}else if(m!==o){o=$n(Error(r(424)),n),$s(o),n=cg(t,n,m,a);break e}else for(Sn=mi(n.stateNode.containerInfo.firstChild),On=n,Tt=!0,hi=null,Ti=!0,a=om(n,null,m,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Js(),m===o){n=Gi(t,n,a);break e}xn(t,n,m,a)}n=n.child}return n;case 26:return uo(t,n),t===null?(a=__(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=Kl(rt.current).createElement(a),o[sn]=n,o[on]=t,Mn(o,a,t),te(o),n.stateNode=o):n.memoizedState=__(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ht(n),t===null&&Tt&&(o=n.stateNode=p_(n.type,n.pendingProps,rt.current),On=n,Ti=!0,Sn=mi(o.firstChild)),o=n.pendingProps.children,t!==null||Tt?xn(t,n,o,a):n.child=$a(n,null,o,a),uo(t,n),n.child;case 5:return t===null&&Tt&&((c=o=Sn)&&(o=ZS(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,On=n,Sn=mi(o.firstChild),Ti=!1,c=!0):c=!1),c||Ja(n)),ht(n),c=n.type,m=n.pendingProps,E=t!==null?t.memoizedProps:null,o=m.children,nd(c,m)?o=null:E!==null&&nd(c,E)&&(n.flags|=32),n.memoizedState!==null&&(c=kc(t,n,dS,null,null,a),Co._currentValue=c),uo(t,n),xn(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Sn)&&(a=KS(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,On=n,Sn=null,t=!0):t=!1),t||Ja(n)),null;case 13:return fg(t,n,a);case 4:return vn(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=$a(n,null,o,a):xn(t,n,o,a),n.child;case 11:return ig(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),xn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,sr(n),c=bn(c),o=o(c),n.flags|=1,xn(t,n,o,a),n.child;case 14:return ag(t,n,n.type,n.pendingProps,a);case 15:return rg(t,n,n.type,n.pendingProps,a);case 19:return hg(t,n,a);case 22:return sg(t,n,a);case 24:return sr(n),o=bn(cn),t===null?(c=Vc(),c===null&&(c=zt,m=Ic(),c.pooledCache=m,m.refCount++,m!==null&&(c.pooledCacheLanes|=a),c=m),n.memoizedState={parent:o,cache:c},Sf(n),ya(n,cn,c)):((t.lanes&a)!==0&&(xf(t,n),po(n,null,null,a),ho()),c=t.memoizedState,m=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ya(n,cn,o)):(o=m.cache,ya(n,cn,o),o!==c.cache&&yf(n,[cn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var _f=Me(null),rr=null,ki=null;function ya(t,n,a){De(_f,n._currentValue),n._currentValue=a}function Wi(t){t._currentValue=_f.current,Ve(_f)}function vf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function yf(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var m=c.dependencies;if(m!==null){var E=c.child;m=m.firstContext;e:for(;m!==null;){var D=m;m=c;for(var I=0;I<n.length;I++)if(D.context===n[I]){m.lanes|=a,D=m.alternate,D!==null&&(D.lanes|=a),vf(m.return,a,t),o||(E=null);break e}m=D.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(r(341));E.lanes|=a,m=E.alternate,m!==null&&(m.lanes|=a),vf(E,a,t),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===t){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function co(t,n,a,o){t=null;for(var c=n,m=!1;c!==null;){if(!m){if((c.flags&524288)!==0)m=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var D=c.type;Xn(c.pendingProps.value,E.value)||(t!==null?t.push(D):t=[D])}}else if(c===k.current){if(E=c.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}c=c.return}t!==null&&yf(n,t,a,o),n.flags|=262144}function Ol(t){for(t=t.firstContext;t!==null;){if(!Xn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function sr(t){rr=t,ki=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return mg(rr,t)}function Pl(t,n){return rr===null&&sr(t),mg(t,n)}function mg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(t===null)throw Error(r(308));ki=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ki=ki.next=n;return a}var Sa=!1;function Sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Wt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ml(t),Kp(t,null,a),n}return pl(t,o,n,a),ml(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,bi(t,a)}}function Mf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};m===null?c=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?c=m=n:m=m.next=n}else c=m=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Ef=!1;function ho(){if(Ef){var t=jr;if(t!==null)throw t}}function po(t,n,a,o){Ef=!1;var c=t.updateQueue;Sa=!1;var m=c.firstBaseUpdate,E=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var I=D,j=I.next;I.next=null,E===null?m=j:E.next=j,E=I;var de=t.alternate;de!==null&&(de=de.updateQueue,D=de.lastBaseUpdate,D!==E&&(D===null?de.firstBaseUpdate=j:D.next=j,de.lastBaseUpdate=I))}if(m!==null){var xe=c.baseState;E=0,de=j=I=null,D=m;do{var oe=D.lane&-536870913,fe=oe!==D.lane;if(fe?(Mt&oe)===oe:(o&oe)===oe){oe!==0&&oe===qr&&(Ef=!0),de!==null&&(de=de.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var Xe=t,at=D;oe=n;var Zt=a;switch(at.tag){case 1:if(Xe=at.payload,typeof Xe=="function"){xe=Xe.call(Zt,xe,oe);break e}xe=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=at.payload,oe=typeof Xe=="function"?Xe.call(Zt,xe,oe):Xe,oe==null)break e;xe=T({},xe,oe);break e;case 2:Sa=!0}}oe=D.callback,oe!==null&&(t.flags|=64,fe&&(t.flags|=8192),fe=c.callbacks,fe===null?c.callbacks=[oe]:fe.push(oe))}else fe={lane:oe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},de===null?(j=de=fe,I=xe):de=de.next=fe,E|=oe;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;fe=D,D=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);de===null&&(I=xe),c.baseState=I,c.firstBaseUpdate=j,c.lastBaseUpdate=de,m===null&&(c.shared.lanes=0),Ra|=E,t.lanes=E,t.memoizedState=xe}}function gg(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function _g(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gg(a[t],n)}function mo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var m=a.create,E=a.inst;o=m(),E.destroy=o}a=a.next}while(a!==c)}}catch(D){Ft(n,n.return,D)}}function Ea(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var m=c.next;o=m;do{if((o.tag&t)===t){var E=o.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,c=n;var I=a;try{D()}catch(j){Ft(c,I,j)}}}o=o.next}while(o!==m)}}catch(j){Ft(n,n.return,j)}}function vg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{_g(n,a)}catch(o){Ft(t,t.return,o)}}}function yg(t,n,a){a.props=ar(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function or(t,n){try{var a=t.ref;if(a!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(m){Ft(t,n,m)}}function qn(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ft(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(t,n,c)}else a.current=null}function Sg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ft(t,t.return,c)}}function xg(t,n,a){try{var o=t.stateNode;WS(o,t.type,a,n),o[on]=n}catch(c){Ft(t,t.return,c)}}function Mg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(Tf(t,n,a),t=t.sibling;t!==null;)Tf(t,n,a),t=t.sibling}function Bl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(Bl(t,n,a),t=t.sibling;t!==null;)Bl(t,n,a),t=t.sibling}var Xi=!1,jt=!1,Af=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,mn=null,bg=!1;function SS(t,n){if(t=t.containerInfo,ed=nu,t=Vp(t),Rc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,D=-1,I=-1,j=0,de=0,xe=t,oe=null;t:for(;;){for(var fe;xe!==a||c!==0&&xe.nodeType!==3||(D=E+c),xe!==m||o!==0&&xe.nodeType!==3||(I=E+o),xe.nodeType===3&&(E+=xe.nodeValue.length),(fe=xe.firstChild)!==null;)oe=xe,xe=fe;for(;;){if(xe===t)break t;if(oe===a&&++j===c&&(D=E),oe===m&&++de===o&&(I=E),(fe=xe.nextSibling)!==null)break;xe=oe,oe=xe.parentNode}xe=fe}a=D===-1||I===-1?null:{start:D,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(td={focusedElem:t,selectionRange:a},nu=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,m=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,a=n,c=m.memoizedProps,m=m.memoizedState,o=a.stateNode;try{var Xe=ar(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(Xe,m),o.__reactInternalSnapshotBeforeUpdate=t}catch(at){Ft(a,a.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}return Xe=bg,bg=!1,Xe}function Tg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),o&4&&mo(5,a);break;case 1:if(ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(D){Ft(a,a.return,D)}else{var c=ar(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(D){Ft(a,a.return,D)}}o&64&&vg(a),o&512&&or(a,a.return);break;case 3:if(ji(t,a),o&64&&(o=a.updateQueue,o!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_g(o,t)}catch(D){Ft(a,a.return,D)}}break;case 26:ji(t,a),o&512&&or(a,a.return);break;case 27:case 5:ji(t,a),n===null&&o&4&&Sg(a),o&512&&or(a,a.return);break;case 12:ji(t,a);break;case 13:ji(t,a),o&4&&wg(t,a);break;case 22:if(c=a.memoizedState!==null||Xi,!c){n=n!==null&&n.memoizedState!==null||jt;var m=Xi,E=jt;Xi=c,(jt=n)&&!E?ba(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Xi=m,jt=E}o&512&&(a.memoizedProps.mode==="manual"?or(a,a.return):qn(a,a.return));break;default:ji(t,a)}}function Ag(t){var n=t.alternate;n!==null&&(t.alternate=null,Ag(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Vs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,jn=!1;function qi(t,n,a){for(a=a.child;a!==null;)Rg(t,n,a),a=a.sibling}function Rg(t,n,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:jt||qn(a,n),qi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:jt||qn(a,n);var o=tn,c=jn;for(tn=a.stateNode,qi(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Vs(a),tn=o,jn=c;break;case 5:jt||qn(a,n);case 6:c=tn;var m=jn;if(tn=null,qi(t,n,a),tn=c,jn=m,tn!==null)if(jn)try{t=tn,o=a.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(E){Ft(a,n,E)}else try{tn.removeChild(a.stateNode)}catch(E){Ft(a,n,E)}break;case 18:tn!==null&&(jn?(n=tn,a=a.stateNode,n.nodeType===8?ad(n.parentNode,a):n.nodeType===1&&ad(n,a),No(n)):ad(tn,a.stateNode));break;case 4:o=tn,c=jn,tn=a.stateNode.containerInfo,jn=!0,qi(t,n,a),tn=o,jn=c;break;case 0:case 11:case 14:case 15:jt||Ea(2,a,n),jt||Ea(4,a,n),qi(t,n,a);break;case 1:jt||(qn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&yg(a,n,o)),qi(t,n,a);break;case 21:qi(t,n,a);break;case 22:jt||qn(a,n),jt=(o=jt)||a.memoizedState!==null,qi(t,n,a),jt=o;break;default:qi(t,n,a)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{No(t)}catch(a){Ft(n,n.return,a)}}function xS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Eg),n;default:throw Error(r(435,t.tag))}}function Rf(t,n){var a=xS(t);n.forEach(function(o){var c=OS.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function ii(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],m=t,E=n,D=E;e:for(;D!==null;){switch(D.tag){case 27:case 5:tn=D.stateNode,jn=!1;break e;case 3:tn=D.stateNode.containerInfo,jn=!0;break e;case 4:tn=D.stateNode.containerInfo,jn=!0;break e}D=D.return}if(tn===null)throw Error(r(160));Rg(m,E,c),tn=null,jn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Cg(n,t),n=n.sibling}var pi=null;function Cg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(n,t),ai(t),o&4&&(Ea(3,t,t.return),mo(3,t),Ea(5,t,t.return));break;case 1:ii(n,t),ai(t),o&512&&(jt||a===null||qn(a,a.return)),o&64&&Xi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(ii(n,t),ai(t),o&512&&(jt||a===null||qn(a,a.return)),o&4){var m=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":m=c.getElementsByTagName("title")[0],(!m||m[qa]||m[sn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=c.createElement(o),c.head.insertBefore(m,c.querySelector("head > title"))),Mn(m,o,a),m[sn]=t,te(m),o=m;break e;case"link":var E=S_("link","href",c).get(o+(a.href||""));if(E){for(var D=0;D<E.length;D++)if(m=E[D],m.getAttribute("href")===(a.href==null?null:a.href)&&m.getAttribute("rel")===(a.rel==null?null:a.rel)&&m.getAttribute("title")===(a.title==null?null:a.title)&&m.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(D,1);break t}}m=c.createElement(o),Mn(m,o,a),c.head.appendChild(m);break;case"meta":if(E=S_("meta","content",c).get(o+(a.content||""))){for(D=0;D<E.length;D++)if(m=E[D],m.getAttribute("content")===(a.content==null?null:""+a.content)&&m.getAttribute("name")===(a.name==null?null:a.name)&&m.getAttribute("property")===(a.property==null?null:a.property)&&m.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&m.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(D,1);break t}}m=c.createElement(o),Mn(m,o,a),c.head.appendChild(m);break;default:throw Error(r(468,o))}m[sn]=t,te(m),o=m}t.stateNode=o}else x_(c,t.type,t.stateNode);else t.stateNode=y_(c,o,t.memoizedProps);else m!==o?(m===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):m.count--,o===null?x_(c,t.type,t.stateNode):y_(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&xg(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){c=t.stateNode,m=t.memoizedProps;try{for(var I=c.firstChild;I;){var j=I.nextSibling,de=I.nodeName;I[qa]||de==="HEAD"||de==="BODY"||de==="SCRIPT"||de==="STYLE"||de==="LINK"&&I.rel.toLowerCase()==="stylesheet"||c.removeChild(I),I=j}for(var xe=t.type,oe=c.attributes;oe.length;)c.removeAttributeNode(oe[0]);Mn(c,xe,m),c[sn]=t,c[on]=m}catch(Xe){Ft(t,t.return,Xe)}}case 5:if(ii(n,t),ai(t),o&512&&(jt||a===null||qn(a,a.return)),t.flags&32){c=t.stateNode;try{zn(c,"")}catch(Xe){Ft(t,t.return,Xe)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,xg(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Af=!0);break;case 6:if(ii(n,t),ai(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Xe){Ft(t,t.return,Xe)}}break;case 3:if($l=null,c=pi,pi=Ql(n.containerInfo),ii(n,t),pi=c,ai(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{No(n.containerInfo)}catch(Xe){Ft(t,t.return,Xe)}Af&&(Af=!1,Dg(t));break;case 4:o=pi,pi=Ql(t.stateNode.containerInfo),ii(n,t),ai(t),pi=o;break;case 12:ii(n,t),ai(t);break;case 13:ii(n,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=me()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Rf(t,o)));break;case 22:if(o&512&&(jt||a===null||qn(a,a.return)),I=t.memoizedState!==null,j=a!==null&&a.memoizedState!==null,de=Xi,xe=jt,Xi=de||I,jt=xe||j,ii(n,t),jt=xe,Xi=de,ai(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=I?n._visibility&-2:n._visibility|1,I&&(n=Xi||jt,a===null||j||n||Qr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){j=a=n;try{if(c=j.stateNode,I)m=c.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{E=j.stateNode,D=j.memoizedProps.style;var fe=D!=null&&D.hasOwnProperty("display")?D.display:null;E.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Xe){Ft(j,j.return,Xe)}}}else if(n.tag===6){if(a===null){j=n;try{j.stateNode.nodeValue=I?"":j.memoizedProps}catch(Xe){Ft(j,j.return,Xe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Rf(t,a))));break;case 19:ii(n,t),ai(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Rf(t,o)));break;case 21:break;default:ii(n,t),ai(t)}}function ai(t){var n=t.flags;if(n&2){try{if(t.tag!==27){e:{for(var a=t.return;a!==null;){if(Mg(a)){var o=a;break e}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var c=o.stateNode,m=bf(t);Bl(t,m,c);break;case 5:var E=o.stateNode;o.flags&32&&(zn(E,""),o.flags&=-33);var D=bf(t);Bl(t,D,E);break;case 3:case 4:var I=o.stateNode.containerInfo,j=bf(t);Tf(t,j,I);break;default:throw Error(r(161))}}}catch(de){Ft(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Dg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Dg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tg(t,n.alternate,n),n=n.sibling}function Qr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),Qr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&yg(n,n.return,a),Qr(n);break;case 26:case 27:case 5:qn(n,n.return),Qr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Qr(n);break;default:Qr(n)}t=t.sibling}}function ba(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,m=n,E=m.flags;switch(m.tag){case 0:case 11:case 15:ba(c,m,a),mo(4,m);break;case 1:if(ba(c,m,a),o=m,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(j){Ft(o,o.return,j)}if(o=m,c=o.updateQueue,c!==null){var D=o.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)gg(I[c],D)}catch(j){Ft(o,o.return,j)}}a&&E&64&&vg(m),or(m,m.return);break;case 26:case 27:case 5:ba(c,m,a),a&&o===null&&E&4&&Sg(m),or(m,m.return);break;case 12:ba(c,m,a);break;case 13:ba(c,m,a),a&&E&4&&wg(c,m);break;case 22:m.memoizedState===null&&ba(c,m,a),or(m,m.return);break;default:ba(c,m,a)}n=n.sibling}}function wf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ta(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ug(t,n,a,o),n=n.sibling}function Ug(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ta(t,n,a,o),c&2048&&mo(9,n);break;case 3:Ta(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(c&2048){Ta(t,n,a,o),t=n.stateNode;try{var m=n.memoizedProps,E=m.id,D=m.onPostCommit;typeof D=="function"&&D(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ft(n,n.return,I)}}else Ta(t,n,a,o);break;case 23:break;case 22:m=n.stateNode,n.memoizedState!==null?m._visibility&4?Ta(t,n,a,o):go(t,n):m._visibility&4?Ta(t,n,a,o):(m._visibility|=4,Jr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&wf(n.alternate,n);break;case 24:Ta(t,n,a,o),c&2048&&Cf(n.alternate,n);break;default:Ta(t,n,a,o)}}function Jr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var m=t,E=n,D=a,I=o,j=E.flags;switch(E.tag){case 0:case 11:case 15:Jr(m,E,D,I,c),mo(8,E);break;case 23:break;case 22:var de=E.stateNode;E.memoizedState!==null?de._visibility&4?Jr(m,E,D,I,c):go(m,E):(de._visibility|=4,Jr(m,E,D,I,c)),c&&j&2048&&wf(E.alternate,E);break;case 24:Jr(m,E,D,I,c),c&&j&2048&&Cf(E.alternate,E);break;default:Jr(m,E,D,I,c)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:go(a,o),c&2048&&wf(o.alternate,o);break;case 24:go(a,o),c&2048&&Cf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function $r(t){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Lg(t),t=t.sibling}function Lg(t){switch(t.tag){case 26:$r(t),t.flags&_o&&t.memoizedState!==null&&ux(pi,t.memoizedState,t.memoizedProps);break;case 5:$r(t);break;case 3:case 4:var n=pi;pi=Ql(t.stateNode.containerInfo),$r(t),pi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,$r(t),_o=n):$r(t));break;default:$r(t)}}function Ng(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Pg(o,t)}Ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Og(t),t=t.sibling}function Og(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,Fl(t)):vo(t);break;default:vo(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,Pg(o,t)}Ng(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Fl(n));break;default:Fl(n)}t=t.sibling}}function Pg(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ao(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else e:for(a=t;mn!==null;){o=mn;var c=o.sibling,m=o.return;if(Ag(o),o===a){mn=null;break e}if(c!==null){c.return=m,mn=c;break e}mn=m}}}function MS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new MS(t,n,a,o)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aa(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bg(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function zl(t,n,a,o,c,m){var E=0;if(o=t,typeof t=="function")Df(t)&&(E=1);else if(typeof t=="string")E=ox(t,a,dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return lr(a.children,c,m,n);case h:E=8,c|=24;break;case g:return t=ri(12,a,n,c|2),t.elementType=g,t.lanes=m,t;case b:return t=ri(13,a,n,c),t.elementType=b,t.lanes=m,t;case x:return t=ri(19,a,n,c),t.elementType=x,t.lanes=m,t;case w:return Fg(a,c,m,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case S:E=10;break e;case y:E=9;break e;case M:E=11;break e;case _:E=14;break e;case L:E=16,o=null;break e}E=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ri(E,a,n,c),n.elementType=t,n.type=o,n.lanes=m,n}function lr(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Fg(t,n,a,o){t=ri(22,t,o,n),t.elementType=w,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=c._current;if(m===null)throw Error(r(456));if((c._pendingVisibility&2)===0){var E=pa(m,2);E!==null&&(c._pendingVisibility|=2,Pn(E,m,2))}},attach:function(){var m=c._current;if(m===null)throw Error(r(456));if((c._pendingVisibility&2)!==0){var E=pa(m,2);E!==null&&(c._pendingVisibility&=-3,Pn(E,m,2))}}};return t.stateNode=c,t}function Uf(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function Lf(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Yi(t){t.flags|=4}function zg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!M_(n)){if(n=ni.current,n!==null&&((Mt&4194176)===Mt?Ai!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Ai))throw to=Bc,tm;t.flags|=8192}}function Il(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Et():536870912,t.lanes|=n,ts|=n)}function yo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ES(t,n,a){var o=n.pendingProps;switch(Oc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(n),null;case 1:return kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(cn),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qs(n)?Yi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,hi!==null&&(Hf(hi),hi=null))),kt(n),null;case 26:return a=n.memoizedState,t===null?(Yi(n),a!==null?(kt(n),zg(n,a)):(kt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Yi(n),kt(n),zg(n,a)):(kt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Yi(n),kt(n),n.flags&=-16777217),null;case 27:qe(n),a=rt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return kt(n),null}t=dt.current,Qs(n)?$p(n):(t=p_(c,o,a),n.stateNode=t,Yi(n))}return kt(n),null;case 5:if(qe(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return kt(n),null}if(t=dt.current,Qs(n))$p(n);else{switch(c=Kl(rt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[sn]=n,t[on]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(Mn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Yi(n)}}return kt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=rt.current,Qs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=On,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[sn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||l_(t.nodeValue,a)),t||Ja(n)}else t=Kl(t).createTextNode(o),t[sn]=n,n.stateNode=t}return kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Qs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else Js(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;kt(n),c=!1}else hi!==null&&(Hf(hi),hi=null),c=!0;if(!c)return n.flags&256?(Hi(n),n):(Hi(n),null)}if(Hi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var m=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Il(n,n.updateQueue),kt(n),null;case 4:return ot(),t===null&&Qf(n.stateNode.containerInfo),kt(n),null;case 10:return Wi(n.type),kt(n),null;case 19:if(Ve(un),c=n.memoizedState,c===null)return kt(n),null;if(o=(n.flags&128)!==0,m=c.rendering,m===null)if(o)yo(c,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(m=Ml(t),m!==null){for(n.flags|=128,yo(c,!1),t=m.updateQueue,n.updateQueue=t,Il(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bg(a,t),a=a.sibling;return De(un,un.current&1|2),n.child}t=t.sibling}c.tail!==null&&me()>Hl&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Ml(m),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Il(n,t),yo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Tt)return kt(n),null}else 2*me()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,o=!0,yo(c,!1),n.lanes=4194304);c.isBackwards?(m.sibling=n.child,n.child=m):(t=c.last,t!==null?t.sibling=m:n.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=me(),n.sibling=null,t=un.current,De(un,o?t&1|2:t&1),n):(kt(n),null);case 22:case 23:return Hi(n),zc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(kt(n),n.subtreeFlags&6&&(n.flags|=8192)):kt(n),a=n.updateQueue,a!==null&&Il(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Ve(er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(cn),kt(n),null;case 25:return null}throw Error(r(156,n.tag))}function bS(t,n){switch(Oc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Wi(cn),ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qe(n),null;case 13:if(Hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Js()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ve(un),null;case 4:return ot(),null;case 10:return Wi(n.type),null;case 22:case 23:return Hi(n),zc(),t!==null&&Ve(er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Wi(cn),null;case 25:return null;default:return null}}function Ig(t,n){switch(Oc(n),n.tag){case 3:Wi(cn),ot();break;case 26:case 27:case 5:qe(n);break;case 4:ot();break;case 13:Hi(n);break;case 19:Ve(un);break;case 10:Wi(n.type);break;case 22:case 23:Hi(n),zc(),t!==null&&Ve(er);break;case 24:Wi(cn)}}var TS={getCacheForType:function(t){var n=bn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},AS=typeof WeakMap=="function"?WeakMap:Map,Wt=0,zt=null,mt=null,Mt=0,It=0,Yn=null,Zi=!1,es=!1,Nf=!1,Ki=0,Yt=0,Ra=0,ur=0,Of=0,si=0,ts=0,So=null,wi=null,Pf=!1,Bf=0,Hl=1/0,Vl=null,wa=null,Gl=!1,cr=null,xo=0,Ff=0,zf=null,Mo=0,If=null;function Zn(){if((Wt&2)!==0&&Mt!==0)return Mt&-Mt;if(A.T!==null){var t=qr;return t!==0?t:jf()}return Hs()}function Hg(){si===0&&(si=(Mt&536870912)===0||Tt?rn():536870912);var t=ni.current;return t!==null&&(t.flags|=32),si}function Pn(t,n,a){(t===zt&&It===2||t.cancelPendingCommit!==null)&&(ns(t,0),Qi(t,Mt,si,!1)),Un(t,a),((Wt&2)===0||t!==zt)&&(t===zt&&((Wt&2)===0&&(ur|=a),Yt===4&&Qi(t,Mt,si,!1)),Ci(t))}function Vg(t,n,a){if((Wt&6)!==0)throw Error(r(327));var o=!a&&(n&60)===0&&(n&t.expiredLanes)===0||et(t,n),c=o?CS(t,n):kf(t,n,!0),m=o;do{if(c===0){es&&!o&&Qi(t,n,0,!1);break}else if(c===6)Qi(t,n,0,!Zi);else{if(a=t.current.alternate,m&&!RS(a)){c=kf(t,n,!1),m=!1;continue}if(c===2){if(m=n,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var D=t;c=So;var I=D.current.memoizedState.isDehydrated;if(I&&(ns(D,E).flags|=256),E=kf(D,E,!1),E!==2){if(Nf&&!I){D.errorRecoveryDisabledLanes|=m,ur|=m,c=4;break e}m=wi,wi=c,m!==null&&Hf(m)}c=E}if(m=!1,c!==2)continue}}if(c===1){ns(t,0),Qi(t,n,0,!0);break}e:{switch(o=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Qi(o,n,si,!Zi);break e}break;case 2:wi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(m=Bf+300-me(),10<m)){if(Qi(o,n,si,!Zi),Ne(o,0)!==0)break e;o.timeoutHandle=f_(Gg.bind(null,o,a,wi,Vl,Pf,n,si,ur,ts,Zi,2,-0,0),m);break e}Gg(o,a,wi,Vl,Pf,n,si,ur,ts,Zi,0,-0,0)}}break}while(!0);Ci(t)}function Hf(t){wi===null?wi=t:wi.push.apply(wi,t)}function Gg(t,n,a,o,c,m,E,D,I,j,de,xe,oe){var fe=n.subtreeFlags;if((fe&8192||(fe&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:lx},Lg(n),n=cx(),n!==null)){t.cancelPendingCommit=n(Zg.bind(null,t,a,o,c,E,D,I,1,xe,oe)),Qi(t,m,E,!j);return}Zg(t,a,o,c,E,D,I,de,xe,oe)}function RS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],m=c.getSnapshot;c=c.value;try{if(!Xn(m(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qi(t,n,a,o){n&=~Of,n&=~ur,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var m=31-Ke(c),E=1<<m;o[m]=-1,c&=~E}a!==0&&Is(t,a,n)}function kl(){return(Wt&6)===0?(Eo(0),!1):!0}function Vf(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,ki=rr=null,qc(t),Wr=null,no=0,t=mt;for(;t!==null;)Ig(t.alternate,t),t=t.return;mt=null}}function ns(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Vf(),zt=t,mt=a=Aa(t.current,null),Mt=n,It=0,Yn=null,Zi=!1,es=et(t,n),Nf=!1,ts=si=Of=ur=Ra=Yt=0,wi=So=null,Pf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ke(o),m=1<<c;n|=t[c],o&=~m}return Ki=n,hl(),a}function kg(t,n){ft=null,A.H=Ri,n===eo?(n=am(),It=3):n===tm?(n=am(),It=4):It=n===ng?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,mt===null&&(Yt=1,Nl(t,$n(n,t.current)))}function Wg(){var t=A.H;return A.H=Ri,t===null?Ri:t}function Xg(){var t=A.A;return A.A=TS,t}function Gf(){Yt=4,Zi||(Mt&4194176)!==Mt&&ni.current!==null||(es=!0),(Ra&134217727)===0&&(ur&134217727)===0||zt===null||Qi(zt,Mt,si,!1)}function kf(t,n,a){var o=Wt;Wt|=2;var c=Wg(),m=Xg();(zt!==t||Mt!==n)&&(Vl=null,ns(t,n)),n=!1;var E=Yt;e:do try{if(It!==0&&mt!==null){var D=mt,I=Yn;switch(It){case 8:Vf(),E=6;break e;case 3:case 2:case 6:ni.current===null&&(n=!0);var j=It;if(It=0,Yn=null,is(t,D,I,j),a&&es){E=0;break e}break;default:j=It,It=0,Yn=null,is(t,D,I,j)}}wS(),E=Yt;break}catch(de){kg(t,de)}while(!0);return n&&t.shellSuspendCounter++,ki=rr=null,Wt=o,A.H=c,A.A=m,mt===null&&(zt=null,Mt=0,hl()),E}function wS(){for(;mt!==null;)qg(mt)}function CS(t,n){var a=Wt;Wt|=2;var o=Wg(),c=Xg();zt!==t||Mt!==n?(Vl=null,Hl=me()+500,ns(t,n)):es=et(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var m=Yn;t:switch(It){case 1:It=0,Yn=null,is(t,n,m,1);break;case 2:if(nm(m)){It=0,Yn=null,jg(n);break}n=function(){It===2&&zt===t&&(It=7),Ci(t)},m.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:nm(m)?(It=0,Yn=null,jg(n)):(It=0,Yn=null,is(t,n,m,7));break;case 5:var E=null;switch(mt.tag){case 26:E=mt.memoizedState;case 5:case 27:var D=mt;if(!E||M_(E)){It=0,Yn=null;var I=D.sibling;if(I!==null)mt=I;else{var j=D.return;j!==null?(mt=j,Wl(j)):mt=null}break t}}It=0,Yn=null,is(t,n,m,5);break;case 6:It=0,Yn=null,is(t,n,m,6);break;case 8:Vf(),Yt=6;break e;default:throw Error(r(462))}}DS();break}catch(de){kg(t,de)}while(!0);return ki=rr=null,A.H=o,A.A=c,Wt=a,mt!==null?0:(zt=null,Mt=0,hl(),Yt)}function DS(){for(;mt!==null&&!R();)qg(mt)}function qg(t){var n=pg(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Wl(t):mt=n}function jg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=lg(a,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=lg(a,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:qc(n);default:Ig(a,n),n=mt=Bg(n,Ki),n=pg(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Wl(t):mt=n}function is(t,n,a,o){ki=rr=null,qc(n),Wr=null,no=0;var c=n.return;try{if(vS(t,c,n,a,Mt)){Yt=1,Nl(t,$n(a,t.current)),mt=null;return}}catch(m){if(c!==null)throw mt=c,m;Yt=1,Nl(t,$n(a,t.current)),mt=null;return}n.flags&32768?(Tt||o===1?t=!0:es||(Mt&536870912)!==0?t=!1:(Zi=t=!0,(o===2||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Yg(n,t)):Wl(n)}function Wl(t){var n=t;do{if((n.flags&32768)!==0){Yg(n,Zi);return}t=n.return;var a=ES(n.alternate,n,Ki);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);Yt===0&&(Yt=5)}function Yg(t,n){do{var a=bS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);Yt=6,mt=null}function Zg(t,n,a,o,c,m,E,D,I,j){var de=A.T,xe=Y.p;try{Y.p=2,A.T=null,US(t,n,a,o,xe,c,m,E,D,I,j)}finally{A.T=de,Y.p=xe}}function US(t,n,a,o,c,m,E,D){do as();while(cr!==null);if((Wt&6)!==0)throw Error(r(327));var I=t.finishedWork;if(o=t.finishedLanes,I===null)return null;if(t.finishedWork=null,t.finishedLanes=0,I===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var j=I.lanes|I.childLanes;if(j|=Uc,il(t,o,j,m,E,D),t===zt&&(mt=zt=null,Mt=0),(I.subtreeFlags&10256)===0&&(I.flags&10256)===0||Gl||(Gl=!0,Ff=j,zf=a,PS(Le,function(){return as(),null})),a=(I.flags&15990)!==0,(I.subtreeFlags&15990)!==0||a?(a=A.T,A.T=null,m=Y.p,Y.p=2,E=Wt,Wt|=4,SS(t,I),Cg(I,t),tS(td,t.containerInfo),nu=!!ed,td=ed=null,t.current=I,Tg(t,I.alternate,I),se(),Wt=E,Y.p=m,A.T=a):t.current=I,Gl?(Gl=!1,cr=t,xo=o):Kg(t,j),j=t.pendingLanes,j===0&&(wa=null),He(I.stateNode),Ci(t),n!==null)for(c=t.onRecoverableError,I=0;I<n.length;I++)j=n[I],c(j.value,{componentStack:j.stack});return(xo&3)!==0&&as(),j=t.pendingLanes,(o&4194218)!==0&&(j&42)!==0?t===If?Mo++:(Mo=0,If=t):Mo=0,Eo(0),null}function Kg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function as(){if(cr!==null){var t=cr,n=Ff;Ff=0;var a=Lr(xo),o=A.T,c=Y.p;try{if(Y.p=32>a?32:a,A.T=null,cr===null)var m=!1;else{a=zf,zf=null;var E=cr,D=xo;if(cr=null,xo=0,(Wt&6)!==0)throw Error(r(331));var I=Wt;if(Wt|=4,Og(E.current),Ug(E,E.current,D,a),Wt=I,Eo(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Je,E)}catch{}m=!0}return m}finally{Y.p=c,A.T=o,Kg(t,n)}}return!1}function Qg(t,n,a){n=$n(a,n),n=of(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(Un(t,2),Ci(t))}function Ft(t,n,a){if(t.tag===3)Qg(t,t,a);else for(;n!==null;){if(n.tag===3){Qg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){t=$n(a,t),a=eg(2),o=Ma(n,a,2),o!==null&&(tg(a,o,n,t),Un(o,2),Ci(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new AS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Nf=!0,c.add(a),t=LS.bind(null,t,n,a),n.then(t,t))}function LS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,zt===t&&(Mt&a)===a&&(Yt===4||Yt===3&&(Mt&62914560)===Mt&&300>me()-Bf?(Wt&2)===0&&ns(t,0):Of|=a,ts===Mt&&(ts=0)),Ci(t)}function Jg(t,n){n===0&&(n=Et()),t=pa(t,n),t!==null&&(Un(t,n),Ci(t))}function NS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(t,a)}function OS(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Jg(t,a)}function PS(t,n){return je(t,n)}var Xl=null,rs=null,Xf=!1,ql=!1,qf=!1,fr=0;function Ci(t){t!==rs&&t.next===null&&(rs===null?Xl=rs=t:rs=rs.next=t),ql=!0,Xf||(Xf=!0,FS(BS))}function Eo(t,n){if(!qf&&ql){qf=!0;do for(var a=!1,o=Xl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var m=0;else{var E=o.suspendedLanes,D=o.pingedLanes;m=(1<<31-Ke(42|t)+1)-1,m&=c&~(E&~D),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(a=!0,t_(o,m))}else m=Mt,m=Ne(o,o===zt?m:0),(m&3)===0||et(o,m)||(a=!0,t_(o,m));o=o.next}while(a);qf=!1}}function BS(){ql=Xf=!1;var t=0;fr!==0&&(XS()&&(t=fr),fr=0);for(var n=me(),a=null,o=Xl;o!==null;){var c=o.next,m=$g(o,n);m===0?(o.next=null,a===null?Xl=c:a.next=c,c===null&&(rs=a)):(a=o,(t!==0||(m&3)!==0)&&(ql=!0)),o=c}Eo(t)}function $g(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Ke(m),D=1<<E,I=c[E];I===-1?((D&a)===0||(D&o)!==0)&&(c[E]=Vt(D,n)):I<=n&&(t.expiredLanes|=D),m&=~D}if(n=zt,a=Mt,a=Ne(t,t===n?a:0),o=t.callbackNode,a===0||t===n&&It===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&B(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||et(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&B(o),Lr(a)){case 2:case 8:a=ke;break;case 32:a=Le;break;case 268435456:a=gt;break;default:a=Le}return o=e_.bind(null,t),a=je(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&B(o),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,n){var a=t.callbackNode;if(as()&&t.callbackNode!==a)return null;var o=Mt;return o=Ne(t,t===zt?o:0),o===0?null:(Vg(t,o,n),$g(t,me()),t.callbackNode!=null&&t.callbackNode===a?e_.bind(null,t):null)}function t_(t,n){if(as())return null;Vg(t,n,!0)}function FS(t){jS(function(){(Wt&6)!==0?je(ge,t):t()})}function jf(){return fr===0&&(fr=rn()),fr}function n_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function i_(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function zS(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var m=n_((c[on]||null).action),E=o.submitter;E&&(n=(n=E[on]||null)?n_(n.formAction):E.getAttribute("formAction"),n!==null&&(m=n,E=null));var D=new cl("action","action",null,o,c);t.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var I=E?i_(c,E):new FormData(c);tf(a,{pending:!0,data:I,method:c.method,action:m},null,I)}}else typeof m=="function"&&(D.preventDefault(),I=E?i_(c,E):new FormData(c),tf(a,{pending:!0,data:I,method:c.method,action:m},m,I))},currentTarget:c}]})}}for(var Yf=0;Yf<Zp.length;Yf++){var Zf=Zp[Yf],IS=Zf.toLowerCase(),HS=Zf[0].toUpperCase()+Zf.slice(1);di(IS,"on"+HS)}di(Wp,"onAnimationEnd"),di(Xp,"onAnimationIteration"),di(qp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(iS,"onTransitionRun"),di(aS,"onTransitionStart"),di(rS,"onTransitionCancel"),di(jp,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function a_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var m=void 0;if(n)for(var E=o.length-1;0<=E;E--){var D=o[E],I=D.instance,j=D.currentTarget;if(D=D.listener,I!==m&&c.isPropagationStopped())break e;m=D,c.currentTarget=j;try{m(c)}catch(de){Ll(de)}c.currentTarget=null,m=I}else for(E=0;E<o.length;E++){if(D=o[E],I=D.instance,j=D.currentTarget,D=D.listener,I!==m&&c.isPropagationStopped())break e;m=D,c.currentTarget=j;try{m(c)}catch(de){Ll(de)}c.currentTarget=null,m=I}}}}function St(t,n){var a=n[Nr];a===void 0&&(a=n[Nr]=new Set);var o=t+"__bubble";a.has(o)||(r_(n,t,2,!1),a.add(o))}function Kf(t,n,a){var o=0;n&&(o|=4),r_(a,t,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Qf(t){if(!t[jl]){t[jl]=!0,J.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||Kf(a,!1,t),Kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,Kf("selectionchange",!1,n))}}function r_(t,n,a,o){switch(w_(n)){case 2:var c=hx;break;case 8:c=px;break;default:c=cd}a=c.bind(null,n,a,t),c=void 0,!vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Jf(t,n,a,o,c){var m=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var D=o.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(E===4)for(E=o.return;E!==null;){var I=E.tag;if((I===3||I===4)&&(I=E.stateNode.containerInfo,I===c||I.nodeType===8&&I.parentNode===c))return;E=E.return}for(;D!==null;){if(E=Fi(D),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){o=m=E;continue e}D=D.parentNode}}o=o.return}Sp(function(){var j=m,de=gc(a),xe=[];e:{var oe=Yp.get(t);if(oe!==void 0){var fe=cl,Xe=t;switch(t){case"keypress":if(ll(a)===0)break e;case"keydown":case"keyup":fe=Oy;break;case"focusin":Xe="focus",fe=Mc;break;case"focusout":Xe="blur",fe=Mc;break;case"beforeblur":case"afterblur":fe=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Fy;break;case Wp:case Xp:case qp:fe=Ty;break;case jp:fe=Iy;break;case"scroll":case"scrollend":fe=Sy;break;case"wheel":fe=Vy;break;case"copy":case"cut":case"paste":fe=Ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Tp;break;case"toggle":case"beforetoggle":fe=ky}var at=(n&4)!==0,Zt=!at&&(t==="scroll"||t==="scrollend"),ee=at?oe!==null?oe+"Capture":null:oe;at=[];for(var X=j,ne;X!==null;){var _e=X;if(ne=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ne===null||ee===null||(_e=Gs(X,ee),_e!=null&&at.push(To(X,_e,ne))),Zt)break;X=X.return}0<at.length&&(oe=new fe(oe,Xe,null,a,de),xe.push({event:oe,listeners:at}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",oe&&a!==mc&&(Xe=a.relatedTarget||a.fromElement)&&(Fi(Xe)||Xe[Bi]))break e;if((fe||oe)&&(oe=de.window===de?de:(oe=de.ownerDocument)?oe.defaultView||oe.parentWindow:window,fe?(Xe=a.relatedTarget||a.toElement,fe=j,Xe=Xe?Fi(Xe):null,Xe!==null&&(Zt=Q(Xe),at=Xe.tag,Xe!==Zt||at!==5&&at!==27&&at!==6)&&(Xe=null)):(fe=null,Xe=j),fe!==Xe)){if(at=Ep,_e="onMouseLeave",ee="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(at=Tp,_e="onPointerLeave",ee="onPointerEnter",X="pointer"),Zt=fe==null?oe:K(fe),ne=Xe==null?oe:K(Xe),oe=new at(_e,X+"leave",fe,a,de),oe.target=Zt,oe.relatedTarget=ne,_e=null,Fi(de)===j&&(at=new at(ee,X+"enter",Xe,a,de),at.target=ne,at.relatedTarget=Zt,_e=at),Zt=_e,fe&&Xe)t:{for(at=fe,ee=Xe,X=0,ne=at;ne;ne=ss(ne))X++;for(ne=0,_e=ee;_e;_e=ss(_e))ne++;for(;0<X-ne;)at=ss(at),X--;for(;0<ne-X;)ee=ss(ee),ne--;for(;X--;){if(at===ee||ee!==null&&at===ee.alternate)break t;at=ss(at),ee=ss(ee)}at=null}else at=null;fe!==null&&s_(xe,oe,fe,at,!1),Xe!==null&&Zt!==null&&s_(xe,Zt,Xe,at,!0)}}e:{if(oe=j?K(j):window,fe=oe.nodeName&&oe.nodeName.toLowerCase(),fe==="select"||fe==="input"&&oe.type==="file")var Ge=Np;else if(Up(oe))if(Op)Ge=$y;else{Ge=Qy;var pt=Ky}else fe=oe.nodeName,!fe||fe.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?j&&pc(j.elementType)&&(Ge=Np):Ge=Jy;if(Ge&&(Ge=Ge(t,j))){Lp(xe,Ge,a,de);break e}pt&&pt(t,oe,j),t==="focusout"&&j&&oe.type==="number"&&j.memoizedProps.value!=null&&En(oe,"number",oe.value)}switch(pt=j?K(j):window,t){case"focusin":(Up(pt)||pt.contentEditable==="true")&&(zr=pt,wc=j,Ks=null);break;case"focusout":Ks=wc=zr=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Gp(xe,a,de);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":Gp(xe,a,de)}var Ye;if(bc)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Fr?Cp(t,a)&&($e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($e="onCompositionStart");$e&&(Ap&&a.locale!=="ko"&&(Fr||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Fr&&(Ye=xp()):(ha=de,yc="value"in ha?ha.value:ha.textContent,Fr=!0)),pt=Yl(j,$e),0<pt.length&&($e=new bp($e,t,null,a,de),xe.push({event:$e,listeners:pt}),Ye?$e.data=Ye:(Ye=Dp(a),Ye!==null&&($e.data=Ye)))),(Ye=Xy?qy(t,a):jy(t,a))&&($e=Yl(j,"onBeforeInput"),0<$e.length&&(pt=new bp("onBeforeInput","beforeinput",null,a,de),xe.push({event:pt,listeners:$e}),pt.data=Ye)),zS(xe,t,j,a,de)}a_(xe,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,m=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||m===null||(c=Gs(t,a),c!=null&&o.unshift(To(t,c,m)),c=Gs(t,n),c!=null&&o.push(To(t,c,m))),t=t.return}return o}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s_(t,n,a,o,c){for(var m=n._reactName,E=[];a!==null&&a!==o;){var D=a,I=D.alternate,j=D.stateNode;if(D=D.tag,I!==null&&I===o)break;D!==5&&D!==26&&D!==27||j===null||(I=j,c?(j=Gs(a,m),j!=null&&E.unshift(To(a,j,I))):c||(j=Gs(a,m),j!=null&&E.push(To(a,j,I)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var GS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function o_(t){return(typeof t=="string"?t:""+t).replace(GS,`
`).replace(kS,"")}function l_(t,n){return n=o_(n),o_(t)===n}function Zl(){}function Pt(t,n,a,o,c,m){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(t,""+o);break;case"className":Ht(t,"class",o);break;case"tabIndex":Ht(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ht(t,a,o);break;case"style":vp(t,o,m);break;case"data":if(n!=="object"){Ht(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(a==="formAction"?(n!=="input"&&Pt(t,n,"name",c.name,c,null),Pt(t,n,"formEncType",c.formEncType,c,null),Pt(t,n,"formMethod",c.formMethod,c,null),Pt(t,n,"formTarget",c.formTarget,c,null)):(Pt(t,n,"encType",c.encType,c,null),Pt(t,n,"method",c.method,c,null),Pt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zl);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),vt(t,"popover",o);break;case"xlinkActuate":bt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":vt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vy.get(a)||a,vt(t,a,o))}}function $f(t,n,a,o,c,m){switch(a){case"style":vp(t,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?zn(t,o):(typeof o=="number"||typeof o=="bigint")&&zn(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),m=t[on]||null,m=m!=null?m[a]:null,typeof m=="function"&&t.removeEventListener(n,m,c),typeof o=="function")){typeof m!="function"&&m!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):vt(t,a,o)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,c=!1,m;for(m in a)if(a.hasOwnProperty(m)){var E=a[m];if(E!=null)switch(m){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pt(t,n,m,E,a,null)}}c&&Pt(t,n,"srcSet",a.srcSet,a,null),o&&Pt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var D=m=E=c=null,I=null,j=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":E=de;break;case"checked":I=de;break;case"defaultChecked":j=de;break;case"value":m=de;break;case"defaultValue":D=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Pt(t,n,o,de,a,null)}}Nn(t,m,D,I,j,E,c,!1),yt(t);return;case"select":St("invalid",t),o=E=m=null;for(c in a)if(a.hasOwnProperty(c)&&(D=a[c],D!=null))switch(c){case"value":m=D;break;case"defaultValue":E=D;break;case"multiple":o=D;default:Pt(t,n,c,D,a,null)}n=m,a=E,t.multiple=!!o,n!=null?qt(t,!!o,n,!1):a!=null&&qt(t,!!o,a,!0);return;case"textarea":St("invalid",t),m=c=o=null;for(E in a)if(a.hasOwnProperty(E)&&(D=a[E],D!=null))switch(E){case"value":o=D;break;case"defaultValue":c=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(r(91));break;default:Pt(t,n,E,D,a,null)}Or(t,o,c,m),yt(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pt(t,n,I,o,a,null)}return;case"dialog":St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)St(bo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pt(t,n,j,o,a,null)}return;default:if(pc(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&$f(t,n,de,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Pt(t,n,D,o,a,null))}function WS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,m=null,E=null,D=null,I=null,j=null,de=null;for(fe in a){var xe=a[fe];if(a.hasOwnProperty(fe)&&xe!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":I=xe;default:o.hasOwnProperty(fe)||Pt(t,n,fe,null,o,xe)}}for(var oe in o){var fe=o[oe];if(xe=a[oe],o.hasOwnProperty(oe)&&(fe!=null||xe!=null))switch(oe){case"type":m=fe;break;case"name":c=fe;break;case"checked":j=fe;break;case"defaultChecked":de=fe;break;case"value":E=fe;break;case"defaultValue":D=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(r(137,n));break;default:fe!==xe&&Pt(t,n,oe,fe,o,xe)}}Nt(t,E,D,I,j,de,m,c);return;case"select":fe=E=D=oe=null;for(m in a)if(I=a[m],a.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":fe=I;default:o.hasOwnProperty(m)||Pt(t,n,m,null,o,I)}for(c in o)if(m=o[c],I=a[c],o.hasOwnProperty(c)&&(m!=null||I!=null))switch(c){case"value":oe=m;break;case"defaultValue":D=m;break;case"multiple":E=m;default:m!==I&&Pt(t,n,c,m,o,I)}n=D,a=E,o=fe,oe!=null?qt(t,!!a,oe,!1):!!o!=!!a&&(n!=null?qt(t,!!a,n,!0):qt(t,!!a,a?[]:"",!1));return;case"textarea":fe=oe=null;for(D in a)if(c=a[D],a.hasOwnProperty(D)&&c!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Pt(t,n,D,null,o,c)}for(E in o)if(c=o[E],m=a[E],o.hasOwnProperty(E)&&(c!=null||m!=null))switch(E){case"value":oe=c;break;case"defaultValue":fe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==m&&Pt(t,n,E,c,o,m)}yn(t,oe,fe);return;case"option":for(var Xe in a)if(oe=a[Xe],a.hasOwnProperty(Xe)&&oe!=null&&!o.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Pt(t,n,Xe,null,o,oe)}for(I in o)if(oe=o[I],fe=a[I],o.hasOwnProperty(I)&&oe!==fe&&(oe!=null||fe!=null))switch(I){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Pt(t,n,I,oe,o,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)oe=a[at],a.hasOwnProperty(at)&&oe!=null&&!o.hasOwnProperty(at)&&Pt(t,n,at,null,o,oe);for(j in o)if(oe=o[j],fe=a[j],o.hasOwnProperty(j)&&oe!==fe&&(oe!=null||fe!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:Pt(t,n,j,oe,o,fe)}return;default:if(pc(n)){for(var Zt in a)oe=a[Zt],a.hasOwnProperty(Zt)&&oe!==void 0&&!o.hasOwnProperty(Zt)&&$f(t,n,Zt,void 0,o,oe);for(de in o)oe=o[de],fe=a[de],!o.hasOwnProperty(de)||oe===fe||oe===void 0&&fe===void 0||$f(t,n,de,oe,o,fe);return}}for(var ee in a)oe=a[ee],a.hasOwnProperty(ee)&&oe!=null&&!o.hasOwnProperty(ee)&&Pt(t,n,ee,null,o,oe);for(xe in o)oe=o[xe],fe=a[xe],!o.hasOwnProperty(xe)||oe===fe||oe==null&&fe==null||Pt(t,n,xe,oe,o,fe)}var ed=null,td=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function u_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function nd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var id=null;function XS(){var t=window.event;return t&&t.type==="popstate"?t===id?!1:(id=t,!0):(id=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,jS=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(t){return d_.resolve(null).then(t).catch(YS)}:f_;function YS(t){setTimeout(function(){throw t})}function ad(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){t.removeChild(c),No(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);No(n)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ZS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var m=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function KS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mi(t.nextSibling),t===null))return null;return t}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function h_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function p_(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var oi=new Map,m_=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Ji=Y.d;Y.d={f:QS,r:JS,D:$S,C:ex,L:tx,m:nx,X:ax,S:ix,M:rx};function QS(){var t=Ji.f(),n=kl();return t||n}function JS(t){var n=U(t);n!==null&&n.tag===5&&n.type==="form"?Gm(n):Ji.r(t)}var os=typeof document>"u"?null:document;function g_(t,n,a){var o=os;if(o&&typeof n=="string"&&n){var c=hn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),m_.has(c)||(m_.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Mn(n,"link",t),te(n),o.head.appendChild(n)))}}function $S(t){Ji.D(t),g_("dns-prefetch",t,null)}function ex(t,n){Ji.C(t,n),g_("preconnect",t,n)}function tx(t,n,a){Ji.L(t,n,a);var o=os;if(o&&t&&n){var c='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+hn(a.imageSizes)+'"]')):c+='[href="'+hn(t)+'"]';var m=c;switch(n){case"style":m=ls(t);break;case"script":m=us(t)}oi.has(m)||(t=T({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(m,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ao(m))||n==="script"&&o.querySelector(Ro(m))||(n=o.createElement("link"),Mn(n,"link",t),te(n),o.head.appendChild(n)))}}function nx(t,n){Ji.m(t,n);var a=os;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+hn(o)+'"][href="'+hn(t)+'"]',m=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=us(t)}if(!oi.has(m)&&(t=T({rel:"modulepreload",href:t},n),oi.set(m,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(m)))return}o=a.createElement("link"),Mn(o,"link",t),te(o),a.head.appendChild(o)}}}function ix(t,n,a){Ji.S(t,n,a);var o=os;if(o&&t){var c=re(o).hoistableStyles,m=ls(t);n=n||"default";var E=c.get(m);if(!E){var D={loading:0,preload:null};if(E=o.querySelector(Ao(m)))D.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(m))&&sd(t,a);var I=E=o.createElement("link");te(I),Mn(I,"link",t),I._p=new Promise(function(j,de){I.onload=j,I.onerror=de}),I.addEventListener("load",function(){D.loading|=1}),I.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Jl(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:D},c.set(m,E)}}}function ax(t,n){Ji.X(t,n);var a=os;if(a&&t){var o=re(a).hoistableScripts,c=us(t),m=o.get(c);m||(m=a.querySelector(Ro(c)),m||(t=T({src:t,async:!0},n),(n=oi.get(c))&&od(t,n),m=a.createElement("script"),te(m),Mn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(c,m))}}function rx(t,n){Ji.M(t,n);var a=os;if(a&&t){var o=re(a).hoistableScripts,c=us(t),m=o.get(c);m||(m=a.querySelector(Ro(c)),m||(t=T({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&od(t,n),m=a.createElement("script"),te(m),Mn(m,"link",t),a.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(c,m))}}function __(t,n,a,o){var c=(c=rt.current)?Ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ls(a.href),a=re(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ls(a.href);var m=re(c).hoistableStyles,E=m.get(t);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=c.querySelector(Ao(t)))&&!m._p&&(E.instance=m,E.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),m||sx(c,t,a,E.state))),n&&o===null)throw Error(r(528,""));return E}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=re(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ls(t){return'href="'+hn(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function v_(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function sx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),te(n),t.head.appendChild(n))}function us(t){return'[src="'+hn(t)+'"]'}function Ro(t){return"script[async]"+t}function y_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+hn(a.href)+'"]');if(o)return n.instance=o,te(o),o;var c=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),te(o),Mn(o,"style",c),Jl(o,a.precedence,t),n.instance=o;case"stylesheet":c=ls(a.href);var m=t.querySelector(Ao(c));if(m)return n.state.loading|=4,n.instance=m,te(m),m;o=v_(a),(c=oi.get(c))&&sd(o,c),m=(t.ownerDocument||t).createElement("link"),te(m);var E=m;return E._p=new Promise(function(D,I){E.onload=D,E.onerror=I}),Mn(m,"link",o),n.state.loading|=4,Jl(m,a.precedence,t),n.instance=m;case"script":return m=us(a.src),(c=t.querySelector(Ro(m)))?(n.instance=c,te(c),c):(o=a,(c=oi.get(m))&&(o=T({},a),od(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),te(c),Mn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,t));return n.instance}function Jl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,m=c,E=0;E<o.length;E++){var D=o[E];if(D.dataset.precedence===n)m=D;else if(m!==c)break}m?m.parentNode.insertBefore(t,m.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function od(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function S_(t,n,a){if($l===null){var o=new Map,c=$l=new Map;c.set(a,o)}else c=$l,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var m=a[c];if(!(m[qa]||m[sn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(n)||"";E=t+E;var D=o.get(E);D?D.push(m):o.set(E,[m])}}return o}function x_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ox(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function lx(){}function ux(t,n,a){if(wo===null)throw Error(r(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=ls(a.href),m=t.querySelector(Ao(c));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=eu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=m,te(m);return}m=t.ownerDocument||t,a=v_(a),(c=oi.get(c))&&sd(a,c),m=m.createElement("link"),te(m);var E=m;E._p=new Promise(function(D,I){E.onload=D,E.onerror=I}),Mn(m,"link",a),n.instance=m}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=eu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function cx(){if(wo===null)throw Error(r(475));var t=wo;return t.stylesheets&&t.count===0&&ld(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ld(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function eu(){if(this.count--,this.count===0){if(this.stylesheets)ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tu=null;function ld(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tu=new Map,n.forEach(fx,t),tu=null,eu.call(t))}function fx(t,n){if(!(n.state.loading&4)){var a=tu.get(t);if(a)var o=a.get(null);else{a=new Map,tu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<c.length;m++){var E=c[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}c=n.instance,E=c.getAttribute("data-precedence"),m=a.get(E)||o,m===o&&a.set(null,c),a.set(E,c),this.count++,o=eu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),m?m.parentNode.insertBefore(c,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:S,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function dx(t,n,a,o,c,m,E,D){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function E_(t,n,a,o,c,m,E,D,I,j,de,xe){return t=new dx(t,n,a,E,D,I,j,xe),n=1,m===!0&&(n|=24),m=ri(3,null,null,n),t.current=m,m.stateNode=t,n=Ic(),n.refCount++,t.pooledCache=n,n.refCount++,m.memoizedState={element:o,isDehydrated:a,cache:n},Sf(m),t}function b_(t){return t?(t=Vr,t):Vr}function T_(t,n,a,o,c,m){c=b_(c),o.context===null?o.context=c:o.pendingContext=c,o=xa(n),o.payload={element:a},m=m===void 0?null:m,m!==null&&(o.callback=m),a=Ma(t,o,n),a!==null&&(Pn(a,t,n),fo(a,t,n))}function A_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ud(t,n){A_(t,n),(t=t.alternate)&&A_(t,n)}function R_(t){if(t.tag===13){var n=pa(t,67108864);n!==null&&Pn(n,t,67108864),ud(t,67108864)}}var nu=!0;function hx(t,n,a,o){var c=A.T;A.T=null;var m=Y.p;try{Y.p=2,cd(t,n,a,o)}finally{Y.p=m,A.T=c}}function px(t,n,a,o){var c=A.T;A.T=null;var m=Y.p;try{Y.p=8,cd(t,n,a,o)}finally{Y.p=m,A.T=c}}function cd(t,n,a,o){if(nu){var c=fd(o);if(c===null)Jf(t,n,o,iu,a),C_(t,o);else if(gx(c,t,n,a,o))o.stopPropagation();else if(C_(t,o),n&4&&-1<mx.indexOf(t)){for(;c!==null;){var m=U(c);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ue(m.pendingLanes);if(E!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var I=1<<31-Ke(E);D.entanglements[1]|=I,E&=~I}Ci(m),(Wt&6)===0&&(Hl=me()+500,Eo(0))}}break;case 13:D=pa(m,2),D!==null&&Pn(D,m,2),kl(),ud(m,2)}if(m=fd(o),m===null&&Jf(t,n,o,iu,a),m===c)break;c=m}c!==null&&o.stopPropagation()}else Jf(t,n,o,null,a)}}function fd(t){return t=gc(t),dd(t)}var iu=null;function dd(t){if(iu=null,t=Fi(t),t!==null){var n=Q(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=ye(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return iu=t,null}function w_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ee()){case ge:return 2;case ke:return 8;case Le:case ze:return 32;case gt:return 268435456;default:return 32}default:return 32}}var hd=!1,Ca=null,Da=null,Ua=null,Do=new Map,Uo=new Map,La=[],mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function C_(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,c,m){return t===null||t.nativeEvent!==m?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:m,targetContainers:[c]},n!==null&&(n=U(n),n!==null&&R_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function gx(t,n,a,o,c){switch(n){case"focusin":return Ca=Lo(Ca,t,n,a,o,c),!0;case"dragenter":return Da=Lo(Da,t,n,a,o,c),!0;case"mouseover":return Ua=Lo(Ua,t,n,a,o,c),!0;case"pointerover":var m=c.pointerId;return Do.set(m,Lo(Do.get(m)||null,t,n,a,o,c)),!0;case"gotpointercapture":return m=c.pointerId,Uo.set(m,Lo(Uo.get(m)||null,t,n,a,o,c)),!0}return!1}function D_(t){var n=Fi(t.target);if(n!==null){var a=Q(n);if(a!==null){if(n=a.tag,n===13){if(n=ye(a),n!==null){t.blockedOn=n,al(t.priority,function(){if(a.tag===13){var o=Zn(),c=pa(a,o);c!==null&&Pn(c,a,o),ud(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=fd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);mc=o,a.target.dispatchEvent(o),mc=null}else return n=U(a),n!==null&&R_(n),t.blockedOn=a,!1;n.shift()}return!0}function U_(t,n,a){au(t)&&a.delete(n)}function _x(){hd=!1,Ca!==null&&au(Ca)&&(Ca=null),Da!==null&&au(Da)&&(Da=null),Ua!==null&&au(Ua)&&(Ua=null),Do.forEach(U_),Uo.forEach(U_)}function ru(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_x)))}var su=null;function L_(t){su!==t&&(su=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){su===t&&(su=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(dd(o||a)===null)continue;break}var m=U(a);m!==null&&(t.splice(n,3),n-=3,tf(m,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function No(t){function n(I){return ru(I,t)}Ca!==null&&ru(Ca,t),Da!==null&&ru(Da,t),Ua!==null&&ru(Ua,t),Do.forEach(n),Uo.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)D_(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],m=a[o+1],E=c[on]||null;if(typeof m=="function")E||L_(a);else if(E){var D=null;if(m&&m.hasAttribute("formAction")){if(c=m,E=m[on]||null)D=E.formAction;else if(dd(c)!==null)continue}else D=E.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),L_(a)}}}function pd(t){this._internalRoot=t}ou.prototype.render=pd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();T_(a,o,t,n,null,null)},ou.prototype.unmount=pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&as(),T_(t.current,2,null,t,null,null),kl(),n[Bi]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var n=Hs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&D_(t)}};var N_=e.version;if(N_!=="19.0.0")throw Error(r(527,N_,"19.0.0"));Y.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=ie(n),t=t!==null?Te(t):null,t=t===null?null:t.stateNode,t};var vx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:Fi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Je=lu.inject(vx),We=lu}catch{}}return Po.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Km,m=Qm,E=Jm,D=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(m=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(D=n.unstable_transitionCallbacks)),n=E_(t,1,!1,null,null,a,o,c,m,E,D,null),t[Bi]=n.current,Qf(t.nodeType===8?t.parentNode:t),new pd(n)},Po.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",m=Km,E=Qm,D=Jm,I=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(m=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),n=E_(t,1,!0,n,a??null,o,c,m,E,D,I,j),n.context=b_(null),a=n.current,o=Zn(),c=xa(o),c.callback=null,Ma(a,c,o),n.current.lanes=o,Un(n,o),Ci(n),t[Bi]=n.current,Qf(t),new ou(n)},Po.version="19.0.0",Po}var k_;function wx(){if(k_)return _d.exports;k_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_d.exports=Rx(),_d.exports}var Cx=wx(),Bo={},W_;function Dx(){if(W_)return Bo;W_=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.parse=d,Bo.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function d(y,S){const M=new u,b=y.length;if(b<2)return M;const x=(S==null?void 0:S.decode)||g;let _=0;do{const L=y.indexOf("=",_);if(L===-1)break;const w=y.indexOf(";",_),C=w===-1?b:w;if(L>C){_=y.lastIndexOf(";",L-1)+1;continue}const z=f(y,_,L),F=p(y,L,z),N=y.slice(z,F);if(M[N]===void 0){let G=f(y,L+1,C),A=p(y,C,G);const T=x(y.slice(G,A));M[N]=T}_=C+1}while(_<b);return M}function f(y,S,M){do{const b=y.charCodeAt(S);if(b!==32&&b!==9)return S}while(++S<M);return M}function p(y,S,M){for(;S>M;){const b=y.charCodeAt(--S);if(b!==32&&b!==9)return S+1}return M}function h(y,S,M){const b=(M==null?void 0:M.encode)||encodeURIComponent;if(!s.test(y))throw new TypeError(`argument name is invalid: ${y}`);const x=b(S);if(!e.test(x))throw new TypeError(`argument val is invalid: ${S}`);let _=y+"="+x;if(!M)return _;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);_+="; Max-Age="+M.maxAge}if(M.domain){if(!i.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);_+="; Domain="+M.domain}if(M.path){if(!r.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);_+="; Path="+M.path}if(M.expires){if(!v(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);_+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(_+="; HttpOnly"),M.secure&&(_+="; Secure"),M.partitioned&&(_+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return _}function g(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return l.call(y)==="[object Date]"}return Bo}Dx();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var X_="popstate";function Ux(s={}){function e(l,u){let{pathname:d="/",search:f="",hash:p=""}=Cr(l.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),rh("",{pathname:d,search:f,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let d=l.document.querySelector("base"),f="";if(d&&d.getAttribute("href")){let p=l.location.href,h=p.indexOf("#");f=h===-1?p:p.slice(0,h)}return f+"#"+(typeof u=="string"?u:qo(u))}function r(l,u){Ei(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Nx(e,i,r,s)}function Xt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ei(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Lx(){return Math.random().toString(36).substring(2,10)}function q_(s,e){return{usr:s.state,key:s.key,idx:e}}function rh(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Cr(e):e,state:i,key:e&&e.key||r||Lx()}}function qo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Cr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function Nx(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,f="POP",p=null,h=g();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function g(){return(d.state||{idx:null}).idx}function v(){f="POP";let x=g(),_=x==null?null:x-h;h=x,p&&p({action:f,location:b.location,delta:_})}function y(x,_){f="PUSH";let L=rh(b.location,x,_);i&&i(L,x),h=g()+1;let w=q_(L,h),C=b.createHref(L);try{d.pushState(w,"",C)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(C)}u&&p&&p({action:f,location:b.location,delta:1})}function S(x,_){f="REPLACE";let L=rh(b.location,x,_);i&&i(L,x),h=g();let w=q_(L,h),C=b.createHref(L);d.replaceState(w,"",C),u&&p&&p({action:f,location:b.location,delta:0})}function M(x){let _=l.location.origin!=="null"?l.location.origin:l.location.href,L=typeof x=="string"?x:qo(x);return L=L.replace(/ $/,"%20"),Xt(_,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,_)}let b={get action(){return f},get location(){return s(l,d)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(X_,v),p=x,()=>{l.removeEventListener(X_,v),p=null}},createHref(x){return e(l,x)},createURL:M,encodeLocation(x){let _=M(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return d.go(x)}};return b}function m0(s,e,i="/"){return Ox(s,e,i,!1)}function Ox(s,e,i,r){let l=typeof e=="string"?Cr(e):e,u=ka(l.pathname||"/",i);if(u==null)return null;let d=g0(s);Px(d);let f=null;for(let p=0;f==null&&p<d.length;++p){let h=qx(u);f=Wx(d[p],h,r)}return f}function g0(s,e=[],i=[],r=""){let l=(u,d,f)=>{let p={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};p.relativePath.startsWith("/")&&(Xt(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let h=la([r,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Xt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),g0(u.children,e,g,h)),!(u.path==null&&!u.index)&&e.push({path:h,score:Gx(h,u.index),routesMeta:g})};return s.forEach((u,d)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))l(u,d);else for(let p of _0(u.path))l(u,d,p)}),e}function _0(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=_0(r.join("/")),f=[];return f.push(...d.map(p=>p===""?u:[u,p].join("/"))),l&&f.push(...d),f.map(p=>s.startsWith("/")&&p===""?"/":p)}function Px(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:kx(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Bx=/^:[\w-]+$/,Fx=3,zx=2,Ix=1,Hx=10,Vx=-2,j_=s=>s==="*";function Gx(s,e){let i=s.split("/"),r=i.length;return i.some(j_)&&(r+=Vx),e&&(r+=zx),i.filter(l=>!j_(l)).reduce((l,u)=>l+(Bx.test(u)?Fx:u===""?Ix:Hx),r)}function kx(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function Wx(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let f=0;f<r.length;++f){let p=r[f],h=f===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=tc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),y=p.route;if(!v&&h&&i&&!r[r.length-1].route.index&&(v=tc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),d.push({params:l,pathname:la([u,v.pathname]),pathnameBase:Kx(la([u,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(u=la([u,v.pathnameBase]))}return d}function tc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Xx(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:v},y)=>{if(g==="*"){let M=f[y]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const S=f[y];return v&&!S?h[g]=void 0:h[g]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:d,pattern:s}}function Xx(s,e=!1,i=!0){Ei(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,f,p)=>(r.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function qx(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ei(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ka(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function jx(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Cr(s):s;return{pathname:i?i.startsWith("/")?i:Yx(i,e):e,search:Qx(r),hash:Jx(l)}}function Yx(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function xd(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zx(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function v0(s){let e=Zx(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function y0(s,e,i,r=!1){let l;typeof s=="string"?l=Cr(s):(l={...s},Xt(!l.pathname||!l.pathname.includes("?"),xd("?","pathname","search",l)),Xt(!l.pathname||!l.pathname.includes("#"),xd("#","pathname","hash",l)),Xt(!l.search||!l.search.includes("#"),xd("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,f;if(d==null)f=i;else{let v=e.length-1;if(!r&&d.startsWith("..")){let y=d.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}f=v>=0?e[v]:"/"}let p=jx(l,f),h=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var la=s=>s.join("/").replace(/\/\/+/g,"/"),Kx=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Qx=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Jx=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function $x(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var S0=["POST","PUT","PATCH","DELETE"];new Set(S0);var eM=["GET",...S0];new Set(eM);var Ps=pe.createContext(null);Ps.displayName="DataRouter";var rc=pe.createContext(null);rc.displayName="DataRouterState";var x0=pe.createContext({isTransitioning:!1});x0.displayName="ViewTransition";var tM=pe.createContext(new Map);tM.displayName="Fetchers";var nM=pe.createContext(null);nM.displayName="Await";var Pi=pe.createContext(null);Pi.displayName="Navigation";var Yo=pe.createContext(null);Yo.displayName="Location";var da=pe.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var Qh=pe.createContext(null);Qh.displayName="RouteError";function iM(s,{relative:e}={}){Xt(Zo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=pe.useContext(Pi),{hash:l,pathname:u,search:d}=Ko(s,{relative:e}),f=u;return i!=="/"&&(f=u==="/"?i:la([i,u])),r.createHref({pathname:f,search:d,hash:l})}function Zo(){return pe.useContext(Yo)!=null}function Dr(){return Xt(Zo(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext(Yo).location}var M0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E0(s){pe.useContext(Pi).static||pe.useLayoutEffect(s)}function aM(){let{isDataRoute:s}=pe.useContext(da);return s?_M():rM()}function rM(){Xt(Zo(),"useNavigate() may be used only in the context of a <Router> component.");let s=pe.useContext(Ps),{basename:e,navigator:i}=pe.useContext(Pi),{matches:r}=pe.useContext(da),{pathname:l}=Dr(),u=JSON.stringify(v0(r)),d=pe.useRef(!1);return E0(()=>{d.current=!0}),pe.useCallback((p,h={})=>{if(Ei(d.current,M0),!d.current)return;if(typeof p=="number"){i.go(p);return}let g=y0(p,JSON.parse(u),l,h.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:la([e,g.pathname])),(h.replace?i.replace:i.push)(g,h.state,h)},[e,i,u,l,s])}pe.createContext(null);function Ko(s,{relative:e}={}){let{matches:i}=pe.useContext(da),{pathname:r}=Dr(),l=JSON.stringify(v0(i));return pe.useMemo(()=>y0(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function sM(s,e){return b0(s,e)}function b0(s,e,i,r){var L;Xt(Zo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=pe.useContext(Pi),{matches:d}=pe.useContext(da),f=d[d.length-1],p=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let w=v&&v.path||"";T0(h,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let y=Dr(),S;if(e){let w=typeof e=="string"?Cr(e):e;Xt(g==="/"||((L=w.pathname)==null?void 0:L.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),S=w}else S=y;let M=S.pathname||"/",b=M;if(g!=="/"){let w=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(w.length).join("/")}let x=!u&&i&&i.matches&&i.matches.length>0?i.matches:m0(s,{pathname:b});Ei(v||x!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ei(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=fM(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},p,w.params),pathname:la([g,l.encodeLocation?l.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:la([g,l.encodeLocation?l.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),d,i,r);return e&&_?pe.createElement(Yo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function oM(){let s=gM(),e=$x(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:u},"ErrorBoundary")," or"," ",pe.createElement("code",{style:u},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),i?pe.createElement("pre",{style:l},i):null,d)}var lM=pe.createElement(oM,null),uM=class extends pe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?pe.createElement(da.Provider,{value:this.props.routeContext},pe.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function cM({routeContext:s,match:e,children:i}){let r=pe.useContext(Ps);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(da.Provider,{value:s},i)}function fM(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);Xt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,f=-1;if(i)for(let p=0;p<l.length;p++){let h=l[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=p),h.route.id){let{loaderData:g,errors:v}=i,y=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||y){d=!0,f>=0?l=l.slice(0,f+1):l=[l[0]];break}}}return l.reduceRight((p,h,g)=>{let v,y=!1,S=null,M=null;i&&(v=u&&h.route.id?u[h.route.id]:void 0,S=h.route.errorElement||lM,d&&(f<0&&g===0?(T0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):f===g&&(y=!0,M=h.route.hydrateFallbackElement||null)));let b=e.concat(l.slice(0,g+1)),x=()=>{let _;return v?_=S:y?_=M:h.route.Component?_=pe.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=p,pe.createElement(cM,{match:h,routeContext:{outlet:p,matches:b,isDataRoute:i!=null},children:_})};return i&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?pe.createElement(uM,{location:i.location,revalidation:i.revalidation,component:S,error:v,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}function Jh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dM(s){let e=pe.useContext(Ps);return Xt(e,Jh(s)),e}function hM(s){let e=pe.useContext(rc);return Xt(e,Jh(s)),e}function pM(s){let e=pe.useContext(da);return Xt(e,Jh(s)),e}function $h(s){let e=pM(s),i=e.matches[e.matches.length-1];return Xt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function mM(){return $h("useRouteId")}function gM(){var r;let s=pe.useContext(Qh),e=hM("useRouteError"),i=$h("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function _M(){let{router:s}=dM("useNavigate"),e=$h("useNavigate"),i=pe.useRef(!1);return E0(()=>{i.current=!0}),pe.useCallback(async(l,u={})=>{Ei(i.current,M0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var Y_={};function T0(s,e,i){!e&&!Y_[s]&&(Y_[s]=!0,Ei(!1,i))}pe.memo(vM);function vM({routes:s,future:e,state:i}){return b0(s,void 0,i,e)}function sh(s){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Xt(!Zo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),f=pe.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof i=="string"&&(i=Cr(i));let{pathname:p="/",search:h="",hash:g="",state:v=null,key:y="default"}=i,S=pe.useMemo(()=>{let M=ka(p,d);return M==null?null:{location:{pathname:M,search:h,hash:g,state:v,key:y},navigationType:r}},[d,p,h,g,v,y,r]);return Ei(S!=null,`<Router basename="${d}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:pe.createElement(Pi.Provider,{value:f},pe.createElement(Yo.Provider,{children:e,value:S}))}function SM({children:s,location:e}){return sM(oh(s),e)}function oh(s,e=[]){let i=[];return pe.Children.forEach(s,(r,l)=>{if(!pe.isValidElement(r))return;let u=[...e,l];if(r.type===pe.Fragment){i.push.apply(i,oh(r.props.children,u));return}Xt(r.type===sh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=oh(r.props.children,u)),i.push(d)}),i}var ju="get",Yu="application/x-www-form-urlencoded";function sc(s){return s!=null&&typeof s.tagName=="string"}function xM(s){return sc(s)&&s.tagName.toLowerCase()==="button"}function MM(s){return sc(s)&&s.tagName.toLowerCase()==="form"}function EM(s){return sc(s)&&s.tagName.toLowerCase()==="input"}function bM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function TM(s,e){return s.button===0&&(!e||e==="_self")&&!bM(s)}var cu=null;function AM(){if(cu===null)try{new FormData(document.createElement("form"),0),cu=!1}catch{cu=!0}return cu}var RM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Md(s){return s!=null&&!RM.has(s)?(Ei(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`),null):s}function wM(s,e){let i,r,l,u,d;if(MM(s)){let f=s.getAttribute("action");r=f?ka(f,e):null,i=s.getAttribute("method")||ju,l=Md(s.getAttribute("enctype"))||Yu,u=new FormData(s)}else if(xM(s)||EM(s)&&(s.type==="submit"||s.type==="image")){let f=s.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||f.getAttribute("action");if(r=p?ka(p,e):null,i=s.getAttribute("formmethod")||f.getAttribute("method")||ju,l=Md(s.getAttribute("formenctype"))||Md(f.getAttribute("enctype"))||Yu,u=new FormData(f,s),!AM()){let{name:h,type:g,value:v}=s;if(g==="image"){let y=h?`${h}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else h&&u.append(h,v)}}else{if(sc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ju,r=null,l=Yu,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}function ep(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function CM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function DM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function UM(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await CM(u,i);return d.links?d.links():[]}return[]}));return PM(r.flat(1).filter(DM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Z_(s,e,i,r,l,u){let d=(p,h)=>i[h]?p.route.id!==i[h].route.id:!0,f=(p,h)=>{var g;return i[h].pathname!==p.pathname||((g=i[h].route.path)==null?void 0:g.endsWith("*"))&&i[h].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,h)=>d(p,h)||f(p,h)):u==="data"?e.filter((p,h)=>{var v;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function LM(s,e,{includeHydrateFallback:i}={}){return NM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function NM(s){return[...new Set(s)]}function OM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function PM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(OM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function BM(s){let e=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function FM(){let s=pe.useContext(Ps);return ep(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function zM(){let s=pe.useContext(rc);return ep(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var tp=pe.createContext(void 0);tp.displayName="FrameworkContext";function A0(){let s=pe.useContext(tp);return ep(s,"You must render this element inside a <HydratedRouter> element"),s}function IM(s,e){let i=pe.useContext(tp),[r,l]=pe.useState(!1),[u,d]=pe.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,y=pe.useRef(null);pe.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let b=_=>{_.forEach(L=>{d(L.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[s]),pe.useEffect(()=>{if(r){let b=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{l(!0)},M=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,y,{}]:[u,y,{onFocus:Fo(f,S),onBlur:Fo(p,M),onMouseEnter:Fo(h,S),onMouseLeave:Fo(g,M),onTouchStart:Fo(v,S)}]:[!1,y,{}]}function Fo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function HM({page:s,...e}){let{router:i}=FM(),r=pe.useMemo(()=>m0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?pe.createElement(GM,{page:s,matches:r,...e}):null}function VM(s){let{manifest:e,routeModules:i}=A0(),[r,l]=pe.useState([]);return pe.useEffect(()=>{let u=!1;return UM(s,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,e,i]),r}function GM({page:s,matches:e,...i}){let r=Dr(),{manifest:l,routeModules:u}=A0(),{loaderData:d,matches:f}=zM(),p=pe.useMemo(()=>Z_(s,e,f,l,r,"data"),[s,e,f,l,r]),h=pe.useMemo(()=>Z_(s,e,f,l,r,"assets"),[s,e,f,l,r]),g=pe.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let S=new Set,M=!1;if(e.forEach(x=>{var L;let _=l.routes[x.route.id];!_||!_.hasLoader||(!p.some(w=>w.route.id===x.route.id)&&x.route.id in d&&((L=u[x.route.id])!=null&&L.shouldRevalidate)||_.hasClientLoader?M=!0:S.add(x.route.id))}),S.size===0)return[];let b=BM(s);return M&&S.size>0&&b.searchParams.set("_routes",e.filter(x=>S.has(x.route.id)).map(x=>x.route.id).join(",")),[b.pathname+b.search]},[d,r,l,p,e,s,u]),v=pe.useMemo(()=>LM(h,l),[h,l]),y=VM(h);return pe.createElement(pe.Fragment,null,g.map(S=>pe.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),v.map(S=>pe.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),y.map(({key:S,link:M})=>pe.createElement("link",{key:S,...M})))}function kM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var R0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R0&&(window.__reactRouterVersion="7.2.0")}catch{}function WM({basename:s,children:e,window:i}){let r=pe.useRef();r.current==null&&(r.current=Ux({window:i,v5Compat:!0}));let l=r.current,[u,d]=pe.useState({action:l.action,location:l.location}),f=pe.useCallback(p=>{pe.startTransition(()=>d(p))},[d]);return pe.useLayoutEffect(()=>l.listen(f),[l,f]),pe.createElement(yM,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var w0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C0=pe.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,state:f,target:p,to:h,preventScrollReset:g,viewTransition:v,...y},S){let{basename:M}=pe.useContext(Pi),b=typeof h=="string"&&w0.test(h),x,_=!1;if(typeof h=="string"&&b&&(x=h,R0))try{let A=new URL(window.location.href),T=h.startsWith("//")?new URL(A.protocol+h):new URL(h),O=ka(T.pathname,M);T.origin===A.origin&&O!=null?h=O+T.search+T.hash:_=!0}catch{Ei(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=iM(h,{relative:l}),[w,C,z]=IM(r,y),F=YM(h,{replace:d,state:f,target:p,preventScrollReset:g,relative:l,viewTransition:v});function N(A){e&&e(A),A.defaultPrevented||F(A)}let G=pe.createElement("a",{...y,...z,href:x||L,onClick:_||u?e:N,ref:kM(S,C),target:p,"data-discover":!b&&i==="render"?"true":void 0});return w&&!b?pe.createElement(pe.Fragment,null,G,pe.createElement(HM,{page:L})):G});C0.displayName="Link";var XM=pe.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:f,children:p,...h},g){let v=Ko(d,{relative:h.relative}),y=Dr(),S=pe.useContext(rc),{navigator:M,basename:b}=pe.useContext(Pi),x=S!=null&&$M(v)&&f===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,L=y.pathname,w=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(L=L.toLowerCase(),w=w?w.toLowerCase():null,_=_.toLowerCase()),w&&b&&(w=ka(w,b)||w);const C=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=L===_||!l&&L.startsWith(_)&&L.charAt(C)==="/",F=w!=null&&(w===_||!l&&w.startsWith(_)&&w.charAt(_.length)==="/"),N={isActive:z,isPending:F,isTransitioning:x},G=z?e:void 0,A;typeof r=="function"?A=r(N):A=[r,z?"active":null,F?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let T=typeof u=="function"?u(N):u;return pe.createElement(C0,{...h,"aria-current":G,className:A,ref:g,style:T,to:d,viewTransition:f},typeof p=="function"?p(N):p)});XM.displayName="NavLink";var qM=pe.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:d=ju,action:f,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:v,...y},S)=>{let M=QM(),b=JM(f,{relative:h}),x=d.toLowerCase()==="get"?"get":"post",_=typeof f=="string"&&w0.test(f),L=w=>{if(p&&p(w),w.defaultPrevented)return;w.preventDefault();let C=w.nativeEvent.submitter,z=(C==null?void 0:C.getAttribute("formmethod"))||d;M(C||w.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:u,relative:h,preventScrollReset:g,viewTransition:v})};return pe.createElement("form",{ref:S,method:x,action:b,onSubmit:r?p:L,...y,"data-discover":!_&&s==="render"?"true":void 0})});qM.displayName="Form";function jM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D0(s){let e=pe.useContext(Ps);return Xt(e,jM(s)),e}function YM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:d}={}){let f=aM(),p=Dr(),h=Ko(s,{relative:u});return pe.useCallback(g=>{if(TM(g,e)){g.preventDefault();let v=i!==void 0?i:qo(p)===qo(h);f(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:d})}},[p,f,h,i,r,e,s,l,u,d])}var ZM=0,KM=()=>`__${String(++ZM)}__`;function QM(){let{router:s}=D0("useSubmit"),{basename:e}=pe.useContext(Pi),i=mM();return pe.useCallback(async(r,l={})=>{let{action:u,method:d,encType:f,formData:p,body:h}=wM(r,e);if(l.navigate===!1){let g=l.fetcherKey||KM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:h,formMethod:l.method||d,formEncType:l.encType||f,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:h,formMethod:l.method||d,formEncType:l.encType||f,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function JM(s,{relative:e}={}){let{basename:i}=pe.useContext(Pi),r=pe.useContext(da);Xt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Ko(s||".",{relative:e})},d=Dr();if(s==null){u.search=d.search;let f=new URLSearchParams(u.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:la([i,u.pathname])),qo(u)}function $M(s,e={}){let i=pe.useContext(x0);Xt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=D0("useViewTransitionState"),l=Ko(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=ka(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ka(i.nextLocation.pathname,r)||i.nextLocation.pathname;return tc(l.pathname,d)!=null||tc(l.pathname,u)!=null}new TextEncoder;var Gt={},fu={},du={},hu={},Ed,K_;function eE(){if(K_)return Ed;K_=1;var s="Expected a function",e=NaN,i="[object Symbol]",r=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,p=typeof uu=="object"&&uu&&uu.Object===Object&&uu,h=typeof self=="object"&&self&&self.Object===Object&&self,g=p||h||Function("return this")(),v=Object.prototype,y=v.toString,S=Math.max,M=Math.min,b=function(){return g.Date.now()};function x(F,N,G){var A,T,O,H,q,$,ce=0,W=!1,ae=!1,Q=!0;if(typeof F!="function")throw new TypeError(s);N=z(N)||0,L(G)&&(W=!!G.leading,ae="maxWait"in G,O=ae?S(z(G.maxWait)||0,N):O,Q="trailing"in G?!!G.trailing:Q);function ye(Me){var Ve=A,De=T;return A=T=void 0,ce=Me,H=F.apply(De,Ve),H}function P(Me){return ce=Me,q=setTimeout(Re,N),W?ye(Me):H}function ie(Me){var Ve=Me-$,De=Me-ce,dt=N-Ve;return ae?M(dt,O-De):dt}function Te(Me){var Ve=Me-$,De=Me-ce;return $===void 0||Ve>=N||Ve<0||ae&&De>=O}function Re(){var Me=b();if(Te(Me))return Y(Me);q=setTimeout(Re,ie(Me))}function Y(Me){return q=void 0,Q&&A?ye(Me):(A=T=void 0,H)}function he(){q!==void 0&&clearTimeout(q),ce=0,A=$=T=q=void 0}function Se(){return q===void 0?H:Y(b())}function be(){var Me=b(),Ve=Te(Me);if(A=arguments,T=this,$=Me,Ve){if(q===void 0)return P($);if(ae)return q=setTimeout(Re,N),ye($)}return q===void 0&&(q=setTimeout(Re,N)),H}return be.cancel=he,be.flush=Se,be}function _(F,N,G){var A=!0,T=!0;if(typeof F!="function")throw new TypeError(s);return L(G)&&(A="leading"in G?!!G.leading:A,T="trailing"in G?!!G.trailing:T),x(F,N,{leading:A,maxWait:N,trailing:T})}function L(F){var N=typeof F;return!!F&&(N=="object"||N=="function")}function w(F){return!!F&&typeof F=="object"}function C(F){return typeof F=="symbol"||w(F)&&y.call(F)==i}function z(F){if(typeof F=="number")return F;if(C(F))return e;if(L(F)){var N=typeof F.valueOf=="function"?F.valueOf():F;F=L(N)?N+"":N}if(typeof F!="string")return F===0?F:+F;F=F.replace(r,"");var G=u.test(F);return G||d.test(F)?f(F.slice(2),G?2:8):l.test(F)?e:+F}return Ed=_,Ed}var zo={},Q_;function np(){if(Q_)return zo;Q_=1,Object.defineProperty(zo,"__esModule",{value:!0}),zo.addPassiveEventListener=function(i,r,l){var u=l.name;u||(u=r,console.warn("Listener must be a named function.")),s.has(r)||s.set(r,new Set);var d=s.get(r);if(!d.has(u)){var f=function(){var p=!1;try{var h=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,h)}catch{}return p}();i.addEventListener(r,l,f?{passive:!0}:!1),d.add(u)}},zo.removePassiveEventListener=function(i,r,l){i.removeEventListener(r,l),s.get(r).delete(l.name||r)};var s=new Map;return zo}var J_;function ip(){if(J_)return hu;J_=1,Object.defineProperty(hu,"__esModule",{value:!0});var s=eE(),e=r(s),i=np();function r(d){return d&&d.__esModule?d:{default:d}}var l=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,e.default)(f,p)},u={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(f,p){if(f){var h=l(function(g){u.scrollHandler(f)},p);return u.scrollSpyContainers.push(f),(0,i.addPassiveEventListener)(f,"scroll",h),function(){(0,i.removePassiveEventListener)(f,"scroll",h),u.scrollSpyContainers.splice(u.scrollSpyContainers.indexOf(f),1)}}return function(){}},isMounted:function(f){return u.scrollSpyContainers.indexOf(f)!==-1},currentPositionX:function(f){if(f===document){var p=window.scrollY!==void 0,h=(document.compatMode||"")==="CSS1Compat";return p?window.scrollX:h?document.documentElement.scrollLeft:document.body.scrollLeft}else return f.scrollLeft},currentPositionY:function(f){if(f===document){var p=window.scrollX!==void 0,h=(document.compatMode||"")==="CSS1Compat";return p?window.scrollY:h?document.documentElement.scrollTop:document.body.scrollTop}else return f.scrollTop},scrollHandler:function(f){var p=u.scrollSpyContainers[u.scrollSpyContainers.indexOf(f)].spyCallbacks||[];p.forEach(function(h){return h(u.currentPositionX(f),u.currentPositionY(f))})},addStateHandler:function(f){u.spySetState.push(f)},addSpyHandler:function(f,p){var h=u.scrollSpyContainers[u.scrollSpyContainers.indexOf(p)];h.spyCallbacks||(h.spyCallbacks=[]),h.spyCallbacks.push(f)},updateStates:function(){u.spySetState.forEach(function(f){return f()})},unmount:function(f,p){u.scrollSpyContainers.forEach(function(h){return h.spyCallbacks&&h.spyCallbacks.length&&h.spyCallbacks.indexOf(p)>-1&&h.spyCallbacks.splice(h.spyCallbacks.indexOf(p),1)}),u.spySetState&&u.spySetState.length&&u.spySetState.indexOf(f)>-1&&u.spySetState.splice(u.spySetState.indexOf(f),1),document.removeEventListener("scroll",u.scrollHandler)},update:function(){return u.scrollSpyContainers.forEach(function(f){return u.scrollHandler(f)})}};return hu.default=u,hu}var pu={},mu={},$_;function oc(){if($_)return mu;$_=1,Object.defineProperty(mu,"__esModule",{value:!0});var s=function(f,p){var h=f.indexOf("#")===0?f.substring(1):f,g=h?"#"+h:"",v=window&&window.location,y=g?v.pathname+v.search+g:v.pathname+v.search;p?history.pushState(history.state,"",y):history.replaceState(history.state,"",y)},e=function(){return window.location.hash.replace(/^#/,"")},i=function(f){return function(p){return f.contains?f!=p&&f.contains(p):!!(f.compareDocumentPosition(p)&16)}},r=function(f){return getComputedStyle(f).position!=="static"},l=function(f,p){for(var h=f.offsetTop,g=f.offsetParent;g&&!p(g);)h+=g.offsetTop,g=g.offsetParent;return{offsetTop:h,offsetParent:g}},u=function(f,p,h){if(h)return f===document?p.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(f).position!=="static"?p.offsetLeft:p.offsetLeft-f.offsetLeft;if(f===document)return p.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(r(f)){if(p.offsetParent!==f){var g=function(x){return x===f||x===document},v=l(p,g),y=v.offsetTop,S=v.offsetParent;if(S!==f)throw new Error("Seems containerElement is not an ancestor of the Element");return y}return p.offsetTop}if(p.offsetParent===f.offsetParent)return p.offsetTop-f.offsetTop;var M=function(x){return x===document};return l(p,M).offsetTop-l(f,M).offsetTop};return mu.default={updateHash:s,getHash:e,filterElementInContainer:i,scrollOffset:u},mu}var gu={},_u={},ev;function tE(){return ev||(ev=1,Object.defineProperty(_u,"__esModule",{value:!0}),_u.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}),_u}var vu={},tv;function nE(){if(tv)return vu;tv=1,Object.defineProperty(vu,"__esModule",{value:!0});var s=np(),e=["mousedown","wheel","touchmove","keydown"];return vu.default={subscribe:function(r){return typeof document<"u"&&e.forEach(function(l){return(0,s.addPassiveEventListener)(document,l,r)})}},vu}var yu={},nv;function ap(){if(nv)return yu;nv=1,Object.defineProperty(yu,"__esModule",{value:!0});var s={registered:{},scrollEvent:{register:function(i,r){s.registered[i]=r},remove:function(i){s.registered[i]=null}}};return yu.default=s,yu}var iv;function U0(){if(iv)return gu;iv=1,Object.defineProperty(gu,"__esModule",{value:!0});var s=Object.assign||function(T){for(var O=1;O<arguments.length;O++){var H=arguments[O];for(var q in H)Object.prototype.hasOwnProperty.call(H,q)&&(T[q]=H[q])}return T},e=oc();p(e);var i=tE(),r=p(i),l=nE(),u=p(l),d=ap(),f=p(d);function p(T){return T&&T.__esModule?T:{default:T}}var h=function(O){return r.default[O.smooth]||r.default.defaultEasing},g=function(O){return typeof O=="function"?O:function(){return O}},v=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},y=function(){return v()||function(T,O,H){window.setTimeout(T,H||1e3/60,new Date().getTime())}}(),S=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},M=function(O){var H=O.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollLeft;var q=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return q?window.pageXOffset:$?document.documentElement.scrollLeft:document.body.scrollLeft},b=function(O){var H=O.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollTop;var q=window.pageXOffset!==void 0,$=(document.compatMode||"")==="CSS1Compat";return q?window.pageYOffset:$?document.documentElement.scrollTop:document.body.scrollTop},x=function(O){var H=O.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollWidth-H.offsetWidth;var q=document.body,$=document.documentElement;return Math.max(q.scrollWidth,q.offsetWidth,$.clientWidth,$.scrollWidth,$.offsetWidth)},_=function(O){var H=O.data.containerElement;if(H&&H!==document&&H!==document.body)return H.scrollHeight-H.offsetHeight;var q=document.body,$=document.documentElement;return Math.max(q.scrollHeight,q.offsetHeight,$.clientHeight,$.scrollHeight,$.offsetHeight)},L=function T(O,H,q){var $=H.data;if(!H.ignoreCancelEvents&&$.cancel){f.default.registered.end&&f.default.registered.end($.to,$.target,$.currentPositionY);return}if($.delta=Math.round($.targetPosition-$.startPosition),$.start===null&&($.start=q),$.progress=q-$.start,$.percent=$.progress>=$.duration?1:O($.progress/$.duration),$.currentPosition=$.startPosition+Math.ceil($.delta*$.percent),$.containerElement&&$.containerElement!==document&&$.containerElement!==document.body?H.horizontal?$.containerElement.scrollLeft=$.currentPosition:$.containerElement.scrollTop=$.currentPosition:H.horizontal?window.scrollTo($.currentPosition,0):window.scrollTo(0,$.currentPosition),$.percent<1){var ce=T.bind(null,O,H);y.call(window,ce);return}f.default.registered.end&&f.default.registered.end($.to,$.target,$.currentPosition)},w=function(O){O.data.containerElement=O?O.containerId?document.getElementById(O.containerId):O.container&&O.container.nodeType?O.container:document:null},C=function(O,H,q,$){H.data=H.data||S(),window.clearTimeout(H.data.delayTimeout);var ce=function(){H.data.cancel=!0};if(u.default.subscribe(ce),w(H),H.data.start=null,H.data.cancel=!1,H.data.startPosition=H.horizontal?M(H):b(H),H.data.targetPosition=H.absolute?O:O+H.data.startPosition,H.data.startPosition===H.data.targetPosition){f.default.registered.end&&f.default.registered.end(H.data.to,H.data.target,H.data.currentPosition);return}H.data.delta=Math.round(H.data.targetPosition-H.data.startPosition),H.data.duration=g(H.duration)(H.data.delta),H.data.duration=isNaN(parseFloat(H.data.duration))?1e3:parseFloat(H.data.duration),H.data.to=q,H.data.target=$;var W=h(H),ae=L.bind(null,W,H);if(H&&H.delay>0){H.data.delayTimeout=window.setTimeout(function(){f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),y.call(window,ae)},H.delay);return}f.default.registered.begin&&f.default.registered.begin(H.data.to,H.data.target),y.call(window,ae)},z=function(O){return O=s({},O),O.data=O.data||S(),O.absolute=!0,O},F=function(O){C(0,z(O))},N=function(O,H){C(O,z(H))},G=function(O){O=z(O),w(O),C(O.horizontal?x(O):_(O),O)},A=function(O,H){H=z(H),w(H);var q=H.horizontal?M(H):b(H);C(O+q,H)};return gu.default={animateTopScroll:C,getAnimationType:h,scrollToTop:F,scrollToBottom:G,scrollTo:N,scrollMore:A},gu}var av;function lc(){if(av)return pu;av=1,Object.defineProperty(pu,"__esModule",{value:!0});var s=Object.assign||function(g){for(var v=1;v<arguments.length;v++){var y=arguments[v];for(var S in y)Object.prototype.hasOwnProperty.call(y,S)&&(g[S]=y[S])}return g},e=oc(),i=f(e),r=U0(),l=f(r),u=ap(),d=f(u);function f(g){return g&&g.__esModule?g:{default:g}}var p={},h=void 0;return pu.default={unmount:function(){p={}},register:function(v,y){p[v]=y},unregister:function(v){delete p[v]},get:function(v){return p[v]||document.getElementById(v)||document.getElementsByName(v)[0]||document.getElementsByClassName(v)[0]},setActiveLink:function(v){return h=v},getActiveLink:function(){return h},scrollTo:function(v,y){var S=this.get(v);if(!S){console.warn("target Element not found");return}y=s({},y,{absolute:!1});var M=y.containerId,b=y.container,x=void 0;M?x=document.getElementById(M):b&&b.nodeType?x=b:x=document,y.absolute=!0;var _=y.horizontal,L=i.default.scrollOffset(x,S,_)+(y.offset||0);if(!y.smooth){d.default.registered.begin&&d.default.registered.begin(v,S),x===document?y.horizontal?window.scrollTo(L,0):window.scrollTo(0,L):x.scrollTop=L,d.default.registered.end&&d.default.registered.end(v,S);return}l.default.animateTopScroll(L,y,v,S)}},pu}var bd={exports:{}},Td,rv;function iE(){if(rv)return Td;rv=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Td=s,Td}var Ad,sv;function aE(){if(sv)return Ad;sv=1;var s=iE();function e(){}function i(){}return i.resetWarningCache=e,Ad=function(){function r(d,f,p,h,g,v){if(v!==s){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:i,resetWarningCache:e};return u.PropTypes=u,u},Ad}var ov;function Qo(){return ov||(ov=1,bd.exports=aE()()),bd.exports}var Su={},lv;function L0(){if(lv)return Su;lv=1,Object.defineProperty(Su,"__esModule",{value:!0}),np();var s=oc(),e=i(s);function i(l){return l&&l.__esModule?l:{default:l}}var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(u){this.scroller=u,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(u,d){this.containers[u]=d},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var u=this,d=this.getHash();d?window.setTimeout(function(){u.scrollTo(d,!0),u.initialized=!0},10):this.initialized=!0},scrollTo:function(u,d){var f=this.scroller,p=f.get(u);if(p&&(d||u!==f.getActiveLink())){var h=this.containers[u]||document;f.scrollTo(u,{container:h})}},getHash:function(){return e.default.getHash()},changeHash:function(u,d){this.isInitialized()&&e.default.getHash()!==u&&e.default.updateHash(u,d)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return Su.default=r,Su}var uv;function rp(){if(uv)return du;uv=1,Object.defineProperty(du,"__esModule",{value:!0});var s=Object.assign||function(_){for(var L=1;L<arguments.length;L++){var w=arguments[L];for(var C in w)Object.prototype.hasOwnProperty.call(w,C)&&(_[C]=w[C])}return _},e=function(){function _(L,w){for(var C=0;C<w.length;C++){var z=w[C];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(L,z.key,z)}}return function(L,w,C){return w&&_(L.prototype,w),C&&_(L,C),L}}(),i=fa(),r=y(i),l=ip(),u=y(l),d=lc(),f=y(d),p=Qo(),h=y(p),g=L0(),v=y(g);function y(_){return _&&_.__esModule?_:{default:_}}function S(_,L){if(!(_ instanceof L))throw new TypeError("Cannot call a class as a function")}function M(_,L){if(!_)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return L&&(typeof L=="object"||typeof L=="function")?L:_}function b(_,L){if(typeof L!="function"&&L!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof L);_.prototype=Object.create(L&&L.prototype,{constructor:{value:_,enumerable:!1,writable:!0,configurable:!0}}),L&&(Object.setPrototypeOf?Object.setPrototypeOf(_,L):_.__proto__=L)}var x={to:h.default.string.isRequired,containerId:h.default.string,container:h.default.object,activeClass:h.default.string,activeStyle:h.default.object,spy:h.default.bool,horizontal:h.default.bool,smooth:h.default.oneOfType([h.default.bool,h.default.string]),offset:h.default.number,delay:h.default.number,isDynamic:h.default.bool,onClick:h.default.func,duration:h.default.oneOfType([h.default.number,h.default.func]),absolute:h.default.bool,onSetActive:h.default.func,onSetInactive:h.default.func,ignoreCancelEvents:h.default.bool,hashSpy:h.default.bool,saveHashHistory:h.default.bool,spyThrottle:h.default.number};return du.default=function(_,L){var w=L||f.default,C=function(F){b(N,F);function N(G){S(this,N);var A=M(this,(N.__proto__||Object.getPrototypeOf(N)).call(this,G));return z.call(A),A.state={active:!1},A.beforeUnmountCallbacks=[],A}return e(N,[{key:"getScrollSpyContainer",value:function(){var A=this.props.containerId,T=this.props.container;return A&&!T?document.getElementById(A):T&&T.nodeType?T:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var A=this.getScrollSpyContainer();if(!u.default.isMounted(A)){var T=u.default.mount(A,this.props.spyThrottle);this.beforeUnmountCallbacks.push(T)}this.props.hashSpy&&(v.default.isMounted()||v.default.mount(w),v.default.mapContainer(this.props.to,A)),u.default.addSpyHandler(this.spyHandler,A),this.setState({container:A})}}},{key:"componentWillUnmount",value:function(){u.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach(function(A){return A()})}},{key:"render",value:function(){var A="";this.state&&this.state.active?A=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():A=this.props.className;var T={};this.state&&this.state.active?T=s({},this.props.style,this.props.activeStyle):T=s({},this.props.style);var O=s({},this.props);for(var H in x)O.hasOwnProperty(H)&&delete O[H];return O.className=A,O.style=T,O.onClick=this.handleClick,r.default.createElement(_,O)}}]),N}(r.default.PureComponent),z=function(){var N=this;this.scrollTo=function(G,A){w.scrollTo(G,s({},N.state,A))},this.handleClick=function(G){N.props.onClick&&N.props.onClick(G),G.stopPropagation&&G.stopPropagation(),G.preventDefault&&G.preventDefault(),N.scrollTo(N.props.to,N.props)},this.spyHandler=function(G,A){var T=N.getScrollSpyContainer();if(!(v.default.isMounted()&&!v.default.isInitialized())){var O=N.props.horizontal,H=N.props.to,q=null,$=void 0,ce=void 0;if(O){var W=0,ae=0,Q=0;if(T.getBoundingClientRect){var ye=T.getBoundingClientRect();Q=ye.left}if(!q||N.props.isDynamic){if(q=w.get(H),!q)return;var P=q.getBoundingClientRect();W=P.left-Q+G,ae=W+P.width}var ie=G-N.props.offset;$=ie>=Math.floor(W)&&ie<Math.floor(ae),ce=ie<Math.floor(W)||ie>=Math.floor(ae)}else{var Te=0,Re=0,Y=0;if(T.getBoundingClientRect){var he=T.getBoundingClientRect();Y=he.top}if(!q||N.props.isDynamic){if(q=w.get(H),!q)return;var Se=q.getBoundingClientRect();Te=Se.top-Y+A,Re=Te+Se.height}var be=A-N.props.offset;$=be>=Math.floor(Te)&&be<Math.floor(Re),ce=be<Math.floor(Te)||be>=Math.floor(Re)}var Me=w.getActiveLink();if(ce){if(H===Me&&w.setActiveLink(void 0),N.props.hashSpy&&v.default.getHash()===H){var Ve=N.props.saveHashHistory,De=Ve===void 0?!1:Ve;v.default.changeHash("",De)}N.props.spy&&N.state.active&&(N.setState({active:!1}),N.props.onSetInactive&&N.props.onSetInactive(H,q))}if($&&(Me!==H||N.state.active===!1)){w.setActiveLink(H);var dt=N.props.saveHashHistory,wt=dt===void 0?!1:dt;N.props.hashSpy&&v.default.changeHash(H,wt),N.props.spy&&(N.setState({active:!0}),N.props.onSetActive&&N.props.onSetActive(H,q))}}}};return C.propTypes=x,C.defaultProps={offset:0},C},du}var cv;function rE(){if(cv)return fu;cv=1,Object.defineProperty(fu,"__esModule",{value:!0});var s=fa(),e=l(s),i=rp(),r=l(i);function l(h){return h&&h.__esModule?h:{default:h}}function u(h,g){if(!(h instanceof g))throw new TypeError("Cannot call a class as a function")}function d(h,g){if(!h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return g&&(typeof g=="object"||typeof g=="function")?g:h}function f(h,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof g);h.prototype=Object.create(g&&g.prototype,{constructor:{value:h,enumerable:!1,writable:!0,configurable:!0}}),g&&(Object.setPrototypeOf?Object.setPrototypeOf(h,g):h.__proto__=g)}var p=function(h){f(g,h);function g(){var v,y,S,M;u(this,g);for(var b=arguments.length,x=Array(b),_=0;_<b;_++)x[_]=arguments[_];return M=(y=(S=d(this,(v=g.__proto__||Object.getPrototypeOf(g)).call.apply(v,[this].concat(x))),S),S.render=function(){return e.default.createElement("a",S.props,S.props.children)},y),d(S,M)}return g}(e.default.Component);return fu.default=(0,r.default)(p),fu}var xu={},fv;function sE(){if(fv)return xu;fv=1,Object.defineProperty(xu,"__esModule",{value:!0});var s=function(){function g(v,y){for(var S=0;S<y.length;S++){var M=y[S];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(v,M.key,M)}}return function(v,y,S){return y&&g(v.prototype,y),S&&g(v,S),v}}(),e=fa(),i=u(e),r=rp(),l=u(r);function u(g){return g&&g.__esModule?g:{default:g}}function d(g,v){if(!(g instanceof v))throw new TypeError("Cannot call a class as a function")}function f(g,v){if(!g)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:g}function p(g,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);g.prototype=Object.create(v&&v.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(g,v):g.__proto__=v)}var h=function(g){p(v,g);function v(){return d(this,v),f(this,(v.__proto__||Object.getPrototypeOf(v)).apply(this,arguments))}return s(v,[{key:"render",value:function(){return i.default.createElement("button",this.props,this.props.children)}}]),v}(i.default.Component);return xu.default=(0,l.default)(h),xu}var Mu={},Eu={},dv;function N0(){if(dv)return Eu;dv=1,Object.defineProperty(Eu,"__esModule",{value:!0});var s=Object.assign||function(S){for(var M=1;M<arguments.length;M++){var b=arguments[M];for(var x in b)Object.prototype.hasOwnProperty.call(b,x)&&(S[x]=b[x])}return S},e=function(){function S(M,b){for(var x=0;x<b.length;x++){var _=b[x];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(M,_.key,_)}}return function(M,b,x){return b&&S(M.prototype,b),x&&S(M,x),M}}(),i=fa(),r=h(i),l=Kh();h(l);var u=lc(),d=h(u),f=Qo(),p=h(f);function h(S){return S&&S.__esModule?S:{default:S}}function g(S,M){if(!(S instanceof M))throw new TypeError("Cannot call a class as a function")}function v(S,M){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:S}function y(S,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);S.prototype=Object.create(M&&M.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(S,M):S.__proto__=M)}return Eu.default=function(S){var M=function(b){y(x,b);function x(_){g(this,x);var L=v(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,_));return L.childBindings={domNode:null},L}return e(x,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(L){this.props.name!==L.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;d.default.unregister(this.props.name)}},{key:"registerElems",value:function(L){d.default.register(L,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(S,s({},this.props,{parentBindings:this.childBindings}))}}]),x}(r.default.Component);return M.propTypes={name:p.default.string,id:p.default.string},M},Eu}var hv;function oE(){if(hv)return Mu;hv=1,Object.defineProperty(Mu,"__esModule",{value:!0});var s=Object.assign||function(S){for(var M=1;M<arguments.length;M++){var b=arguments[M];for(var x in b)Object.prototype.hasOwnProperty.call(b,x)&&(S[x]=b[x])}return S},e=function(){function S(M,b){for(var x=0;x<b.length;x++){var _=b[x];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(M,_.key,_)}}return function(M,b,x){return b&&S(M.prototype,b),x&&S(M,x),M}}(),i=fa(),r=p(i),l=N0(),u=p(l),d=Qo(),f=p(d);function p(S){return S&&S.__esModule?S:{default:S}}function h(S,M){if(!(S instanceof M))throw new TypeError("Cannot call a class as a function")}function g(S,M){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M&&(typeof M=="object"||typeof M=="function")?M:S}function v(S,M){if(typeof M!="function"&&M!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof M);S.prototype=Object.create(M&&M.prototype,{constructor:{value:S,enumerable:!1,writable:!0,configurable:!0}}),M&&(Object.setPrototypeOf?Object.setPrototypeOf(S,M):S.__proto__=M)}var y=function(S){v(M,S);function M(){return h(this,M),g(this,(M.__proto__||Object.getPrototypeOf(M)).apply(this,arguments))}return e(M,[{key:"render",value:function(){var x=this,_=s({},this.props);return delete _.name,_.parentBindings&&delete _.parentBindings,r.default.createElement("div",s({},_,{ref:function(w){x.props.parentBindings.domNode=w}}),this.props.children)}}]),M}(r.default.Component);return y.propTypes={name:f.default.string,id:f.default.string},Mu.default=(0,u.default)(y),Mu}var Rd,pv;function lE(){if(pv)return Rd;pv=1;var s=Object.assign||function(y){for(var S=1;S<arguments.length;S++){var M=arguments[S];for(var b in M)Object.prototype.hasOwnProperty.call(M,b)&&(y[b]=M[b])}return y},e=function(){function y(S,M){for(var b=0;b<M.length;b++){var x=M[b];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(S,x.key,x)}}return function(S,M,b){return M&&y(S.prototype,M),b&&y(S,b),S}}();function i(y,S){if(!(y instanceof S))throw new TypeError("Cannot call a class as a function")}function r(y,S){if(!y)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:y}function l(y,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);y.prototype=Object.create(S&&S.prototype,{constructor:{value:y,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(y,S):y.__proto__=S)}var u=fa();Kh(),oc();var d=ip(),f=lc(),p=Qo(),h=L0(),g={to:p.string.isRequired,containerId:p.string,container:p.object,activeClass:p.string,spy:p.bool,smooth:p.oneOfType([p.bool,p.string]),offset:p.number,delay:p.number,isDynamic:p.bool,onClick:p.func,duration:p.oneOfType([p.number,p.func]),absolute:p.bool,onSetActive:p.func,onSetInactive:p.func,ignoreCancelEvents:p.bool,hashSpy:p.bool,spyThrottle:p.number},v={Scroll:function(S,M){console.warn("Helpers.Scroll is deprecated since v1.7.0");var b=M||f,x=function(L){l(w,L);function w(C){i(this,w);var z=r(this,(w.__proto__||Object.getPrototypeOf(w)).call(this,C));return _.call(z),z.state={active:!1},z}return e(w,[{key:"getScrollSpyContainer",value:function(){var z=this.props.containerId,F=this.props.container;return z?document.getElementById(z):F&&F.nodeType?F:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var z=this.getScrollSpyContainer();d.isMounted(z)||d.mount(z,this.props.spyThrottle),this.props.hashSpy&&(h.isMounted()||h.mount(b),h.mapContainer(this.props.to,z)),this.props.spy&&d.addStateHandler(this.stateHandler),d.addSpyHandler(this.spyHandler,z),this.setState({container:z})}}},{key:"componentWillUnmount",value:function(){d.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var z="";this.state&&this.state.active?z=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():z=this.props.className;var F=s({},this.props);for(var N in g)F.hasOwnProperty(N)&&delete F[N];return F.className=z,F.onClick=this.handleClick,u.createElement(S,F)}}]),w}(u.Component),_=function(){var w=this;this.scrollTo=function(C,z){b.scrollTo(C,s({},w.state,z))},this.handleClick=function(C){w.props.onClick&&w.props.onClick(C),C.stopPropagation&&C.stopPropagation(),C.preventDefault&&C.preventDefault(),w.scrollTo(w.props.to,w.props)},this.stateHandler=function(){b.getActiveLink()!==w.props.to&&(w.state!==null&&w.state.active&&w.props.onSetInactive&&w.props.onSetInactive(),w.setState({active:!1}))},this.spyHandler=function(C){var z=w.getScrollSpyContainer();if(!(h.isMounted()&&!h.isInitialized())){var F=w.props.to,N=null,G=0,A=0,T=0;if(z.getBoundingClientRect){var O=z.getBoundingClientRect();T=O.top}if(!N||w.props.isDynamic){if(N=b.get(F),!N)return;var H=N.getBoundingClientRect();G=H.top-T+C,A=G+H.height}var q=C-w.props.offset,$=q>=Math.floor(G)&&q<Math.floor(A),ce=q<Math.floor(G)||q>=Math.floor(A),W=b.getActiveLink();if(ce)return F===W&&b.setActiveLink(void 0),w.props.hashSpy&&h.getHash()===F&&h.changeHash(),w.props.spy&&w.state.active&&(w.setState({active:!1}),w.props.onSetInactive&&w.props.onSetInactive()),d.updateStates();if($&&W!==F)return b.setActiveLink(F),w.props.hashSpy&&h.changeHash(F),w.props.spy&&(w.setState({active:!0}),w.props.onSetActive&&w.props.onSetActive(F)),d.updateStates()}}};return x.propTypes=g,x.defaultProps={offset:0},x},Element:function(S){console.warn("Helpers.Element is deprecated since v1.7.0");var M=function(b){l(x,b);function x(_){i(this,x);var L=r(this,(x.__proto__||Object.getPrototypeOf(x)).call(this,_));return L.childBindings={domNode:null},L}return e(x,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(L){this.props.name!==L.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;f.unregister(this.props.name)}},{key:"registerElems",value:function(L){f.register(L,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(S,s({},this.props,{parentBindings:this.childBindings}))}}]),x}(u.Component);return M.propTypes={name:p.string,id:p.string},M}};return Rd=v,Rd}var mv;function uE(){if(mv)return Gt;mv=1,Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.Helpers=Gt.ScrollElement=Gt.ScrollLink=Gt.animateScroll=Gt.scrollSpy=Gt.Events=Gt.scroller=Gt.Element=Gt.Button=Gt.Link=void 0;var s=rE(),e=C(s),i=sE(),r=C(i),l=oE(),u=C(l),d=lc(),f=C(d),p=ap(),h=C(p),g=ip(),v=C(g),y=U0(),S=C(y),M=rp(),b=C(M),x=N0(),_=C(x),L=lE(),w=C(L);function C(z){return z&&z.__esModule?z:{default:z}}return Gt.Link=e.default,Gt.Button=r.default,Gt.Element=u.default,Gt.scroller=f.default,Gt.Events=h.default,Gt.scrollSpy=v.default,Gt.animateScroll=S.default,Gt.ScrollLink=b.default,Gt.ScrollElement=_.default,Gt.Helpers=w.default,Gt.default={Link:e.default,Button:r.default,Element:u.default,scroller:f.default,Events:h.default,scrollSpy:v.default,animateScroll:S.default,ScrollLink:b.default,ScrollElement:_.default,Helpers:w.default},Gt}var Xo=uE();const cE="_header_17ffs_1",fE="_headerName_17ffs_37",dE="_buttonHome_17ffs_79",hE="_buttonCV_17ffs_87",pE="_buttonPort_17ffs_95",mE="_buttonLang_17ffs_103",gE="_expand_17ffs_125",_E="_shrink_17ffs_133",gi={header:cE,headerName:fE,buttonHome:dE,buttonCV:hE,buttonPort:pE,buttonLang:mE,expand:gE,shrink:_E},O0="/Website/assets/drapeauEN-LiUJFROs.png",P0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACUCAYAAACa/mvqAAAJvUlEQVR4nO2dTcgURxrH/+3rx0FQGKOboGAEoWPAhCYXkT25sBeFHMwYzEXMIRHMSQ970Cgac9iDniKYHCK55CVOcggkOQTW027wEjpRiGkQTMCwiZKGCB78nFD7PrMz3dPdU13T3VPT9f/Be9FhuuapH09V1ycIIcR6vNEC9vt912psGYCVANYAWAdgE4DNALaM/G0EsAHAKgD3AdwG8AuAmyN/PwO4BeB3AHcBPADwxILf1xieN1TJJamWA1gLYCuAnQD2AdhR4/OuALgE4BsANwD8AeBRjc+bKa5ItSDZJwBwAMB+C8q0COAjAKFktccWlKkS2izVCmm29gA4a0F5JnEUwBfSjD60u6jFtE2qBen37AVwzoLymHIEwGfSX5u7DNYWqVZL30hlpO0WlKcqrkkGU32xe/NS6HmXaj2ALoDzFpSlVsKOfxhAL4ijO7aXde6k8vyuKudfABzqR72TFhSpEcKOP3jMKQAXAPwWxJGVlTQq1bKZlkQDz++qzHQcwH8BOCNUipPy+4+HHX+9VSXLwNpM5fnd1dLMXRz9937Um12hGmYkU6U5KM2iNX0uq5s/z+8uyKDkZRntTkCp/o8atd+lBlmDOJr526K1zZ/nd58G8AGAf2cJRRKslDh9EHb8p20KjRWZyvO7agrl7wC+nPRZZqpcdgP4OoijmUwFWZWpPL+rplLe0xGKFKLi917Y8dfNOkwzy1QyTPCizINpw0ylhZrv/L7J4YeZZypp7l4tKxTRRsX11bDjL59FyBqXSoYKzsiMPakPFd8zYcdf3XSMG5XK87tqsdvnAP7R5HMdRsX587Djb2gyBI1J5fldtaLyBwB/a+qZ5H+oeP8QdvzNTYWjEak8v/scgJ9k0RxpHhX3n8KO/1wTT65dKs/vqmUp1+t+DtHietjxa18mVKtUItTVOp9BSnO1brFqk0qaPAplJ1frbAprkUo65Wzy7OZ6XZ33yqWSYYNvq/5eUgvf1jHcUKlUMrD5Md/y5gZVTx9XPUBamVQy9fI2x6HmDlVfb1c5pVOJVDI5/ApHyucWVW+vhB3f0/jsRKrKVC9yLm/uWZR6nJqppZL1UFxt0A7CKtZjTSWV9KPebVdcnefdaftX02YqtQT4TddroWW8KfVqjLFUskmBS4DbyZfTbKYwkkq2UbHZazeqGVww+YWmmUrty3vd0WC7wuumh8KVlkpGzS+7HnFHuGwy2m6Sqbrc6OkMK6W+S1FKKjks46LGR0l7uFj2UBBtqWQq5hBlcZJDZaZwymQqdT7Uadej6yinpf61KCMVs5TbaNe/llTSl3L1wDGyxEndvpVupir9BkBaiZYHE6WScanWH9pKtDivM26lk6l2Mt5khIk+FEolc3zzcHMCaY6zk+YEJ2WqjS07+J5Mz3bxIpdJUu1lJZAMCr3Ilcrzuyvm/K4XUh/nwo6/Iu/bizLVFlYKKSDXjyKp9jCipIBcPzKl4lsf0SD3LTAvU3HbOtEh05M8qQKGlGiQ6UmeVAcYUaJBpidjUskGURsusSb2sz9r42lWplrLyiQlGPMlS6qtjCgpwZgvWVJxVQIpw5gvWVLtY0hJCcZ8SUjl+d1lprtSibPsCDt+wqN0puImUWJCwpu0VGsYUmJAwpu0VJyeISYkvElLtYkhJQYkvElL1dj1XaRVJLxJS8WFecSEhDeUilQBpSKVUyhV4dYbQnJIeJOWqtELnElrSHiTlmoV65kYkPAmLdV9RpQYkPAmLdVtRpQYkPAmLdUvjCgxIOFNWqqbjCgxIOENpSJVQKlI5RRK9TPjTQxIeJOW6hYjSgxIeJOW6ndGlBiQ8CYt1V1GlBiQ8CYt1QNGlBiQ8CYhVT/qPQFwhVElJbgSxNGT0Y9nbSa9xIiSEoz5kiXVN4woKcGYL1lS3WBESQnGfMmS6g9GlJRgzJcxqfpR7xGARUaVaLAYxNGj9Mfyjmf8iBElGmR6kidVyIgSDTI9yZOK0zVEh0xPMqXqR73HAI4yrKSAo0EcPc7676JrRL5gREkBuX4UScUFe6SIXD9ypepHvYcAjjCsJIMjQRw9zAvMpEskP2NESQaFXkySSm29ucaokhGuTdrKVygV3wJJBrlvfQMmZSpw1QJJMdGHiVL1o949AIcZWaI8COLo3qRA6GQqRY8RJboeaEnVj3p3AJxiVJ3mVBBHd3QCoJupFBdcj6rjaNd/Gal+A3DC9cg6ygmpfy20pepHvT6zlbNcCOKor/vjy2SqQd/qoOsRdoyDun2pAaWkEnrcdOoMD0ze/EtLJeNWu1yPtiPs0hmXSmOSqSC7mD90PeIt50PT3epGUsmc4DGHA+4CxybN8eVhmqmUWL8C2O165FvK7iCOfjX9acZSCV8DeN+NODvD+1KvxkwllWw8ZTPYLo5lbRAtw7SZSomltukETldDewiCOJp6e97UUgnfA9jfmtC6yX6px6mpRCqZwvkUwD9dr5k5RdXbp2WmYoqoKlMN+lfvAPhXO+LsDKq+3pm2HzVKZVJhONr+GrfNzw2qnl4zGTUvolKpsCSWulHppXmJquO8FMRR5TenVS4VlsRSNwBsq+O7SWVsC+Kolhs+apEKS2L9COCFur6fTMULQRz9WFcIa5MKS2Jdo1jWoYSqdYNwrVJhKBabQjvYVrdQaEIqDJvCZ/lWODNU3J+ts8kbpRGpMOy8P89xrMZR8X6+rk55Fo1JheFww8sceW8MFeeX6xg2KKJRqTAcID3OucLaUfE9XvXApg6NS4XhlM4nXN1QGyqun1Q59VKGmUgFmYTuR73vADzFhX6VoeL4VBBH31U1OWzCzKQaIOux3uLS5KlR8XurivVQ0zJzqSDNYT/qfQXgGe7SKY2K1zNBHH01q+YujRVSDZDNFG8A+Cs3rE7kgcTpjWk2KdTBcpsKg+H2r/94frcDoAvgogXFsg119EBvFm92Onijn+n3Z9a3y8Xzu+sBHAJwGkvSWVfGugg7fvqbT8hhGaXONmgCzxuqZFXzl4UcCnJG+luuHrx2Sn7/GRuFSmN9pspgvTSL560rWcWEHf+wNHP2izSSqeZRqgGrAewEcBbAdjuKVAnX5JhxdQqwlX2mLNoi1YAFABsB7AVwzo4iGXFEblJQB98bnWEwS9om1SgrAGwBsEcymO0clduo1OVBuXe9zANtlmoUlcHWyTzYAUsmsBflithQ1jjNXUbKwxWp0qgxubUAtkpfbB+AHTU+T53tdEn6RjfkVnQrRrzrwFWpslBDKisBrJGstgnAZmlCB3+qv7YBwCoA9wHcln7PzZE/tQDulmSfuzLa/cS+n1sfo1IRQgghrgHgT2INeqKt5F9BAAAAAElFTkSuQmCC";function vE({onLangChange:s,isEnglish:e}){const i=pe.useRef(null);pe.useEffect(()=>{const l=()=>{i.current&&(window.pageYOffset>150?(i.current.classList.add(gi.shrink),i.current.classList.remove(gi.expand)):(i.current.classList.add(gi.expand),i.current.classList.remove(gi.shrink)))};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const r=l=>{l=="cv"?Xo.scroller.scrollTo(l,{smooth:!0,duration:500,offset:-50}):Xo.scroller.scrollTo(l,{smooth:!0,duration:500,offset:-200})};return V.jsxs("div",{className:`${gi.header} ${gi.expand}`,ref:i,children:[V.jsx("div",{className:gi.headerName,children:"Antoine Megevand"}),V.jsx("button",{onClick:()=>r("profil"),className:gi.buttonHome,children:e?"Home":"Accueil"}),V.jsx("button",{onClick:()=>r("portfolio"),className:gi.buttonPort,children:"Portfolio"}),V.jsx("button",{onClick:()=>r("cv"),className:gi.buttonCV,children:"CV"}),V.jsx("button",{onClick:s,className:gi.buttonLang,children:V.jsx("img",{src:e?P0:O0,alt:"cercle"})})]})}const lh="/Website/assets/photo_profil-D-lRe1om.png",yE="_profil_1by18_3",SE="_paragraphe_1by18_25",bu={profil:yE,paragraphe:SE};function xE({isEnglish:s}){const e=V.jsx(V.Fragment,{children:V.jsxs("div",{className:bu.profil,children:[V.jsx("img",{src:lh,alt:"cercle"}),V.jsxs("div",{className:bu.paragraphe,children:[V.jsx("p",{children:"Je suis passionné d'informatique, de musique et de l'art vidéoludique. Modélisation comme animation 3D, montage vidéo, composition musicale, programmation... Je touche à tout."}),V.jsx("p",{children:"J'ai obtenu un master en audiovisuel, médias interactifs numériques et jeux, parcours post-production."}),V.jsx("p",{children:"Actuellement en recherche d'emploi : Développement C++ / Python, Développement d'environnement sur Unreal Engine, VFX, 3D."})]})]})}),i=V.jsx(V.Fragment,{children:V.jsxs("div",{className:bu.profil,children:[V.jsx("img",{src:lh,alt:"cercle"}),V.jsxs("div",{className:bu.paragraphe,children:[V.jsx("p",{children:"Passionate about computer science, music and video games, 3D modeling and animation, editing, programming, piano... I am a jack of all trades"}),V.jsx("p",{children:"I got my Master's Degree in post-production, VFX and interactive media."}),V.jsx("p",{children:"Currently looking for a job : C++ / Python Programmer, Software dev, VFX, 3D."})]})]})});return s?i:e}const ME="/Website/assets/T2-R0cIBY8k.png",EE="/Website/assets/VRBA-ltU-U-rf.png",bE="/Website/assets/babiroussa-_X2jQH8P.png",TE="/Website/assets/echoweb-aT0OYfve.png",AE="/Website/assets/faussepub-CrGAZawX.png",RE="/Website/assets/gamejam-BkvBm9II.png",wE="/Website/assets/generique-Byef17KE.png",CE="/Website/assets/github-DkTr3Tul.png",DE="/Website/assets/houdini-BXNHZj5m.png",UE="/Website/assets/hyper-SENkfV7b.png",LE="/Website/assets/masterVR-CaSnVW5x.png",NE="/Website/assets/mocap-BPX11v_8.png",OE="/Website/assets/morrowind-CzJ0akFs.png",PE="/Website/assets/opengl-COq4ERUG.png",BE="/Website/assets/peluche-CQKhRv6D.png",FE="/Website/assets/stendhal-5ILTkzlW.png",zE="/Website/assets/voeu-CMYwg-hu.png",IE="_PortfolioContainer_11ibu_1",HE="_PortfolioItems_11ibu_27",VE="_buttonChoice_11ibu_35",GE="_activeButton_11ibu_71",kE="_inactiveButton_11ibu_81",WE="_modalOverlay_11ibu_103",XE="_modalContent_11ibu_157",qE="_closeButton_11ibu_223",jE="_closing_11ibu_251",YE="_hoverImage_11ibu_325",ZE="_hoverText_11ibu_333",KE="_hoverText1_11ibu_375",QE="_hoverText2_11ibu_383",JE="_demo_11ibu_395",$E="_demoVideo_11ibu_443",eb="_demoGithub_11ibu_455",an={PortfolioContainer:IE,PortfolioItems:HE,buttonChoice:VE,activeButton:GE,inactiveButton:kE,modalOverlay:WE,modalContent:XE,closeButton:qE,closing:jE,hoverImage:YE,hoverText:ZE,hoverText1:KE,hoverText2:QE,demo:JE,demoVideo:$E,demoGithub:eb};function An(s){const e=pe.useContext(B0),[i,r]=pe.useState(!1),[l,u]=pe.useState(!1),d=()=>{i?(u(!0),setTimeout(()=>{r(!1),u(!1)},300)):r(!0)};return e!==0&&!(e===1&&s.VFX)&&!(e===2&&s.CS)?null:V.jsxs(V.Fragment,{children:[V.jsxs("div",{className:an.PortfolioItems,children:[V.jsx("img",{className:an.hoverImage,onClick:d,src:s.img}),V.jsxs("div",{className:an.hoverText,children:[V.jsx("p",{className:an.hoverText1,children:s.name}),V.jsx("p",{className:an.hoverText2,children:s.tools})]})]}),i&&V.jsx("div",{className:an.modalOverlay,onClick:d,children:V.jsxs("div",{className:`${an.modalContent} ${l?an.closing:""}`,onClick:f=>f.stopPropagation(),children:[s.isVideo?V.jsx("iframe",{allowFullScreen:!0,src:s.link}):V.jsx("img",{src:s.link,alt:"Enlarged Portfolio"}),V.jsx("button",{className:an.closeButton,onClick:d,children:"X"})]})})]})}const B0=pe.createContext();function tb({isEnglish:s}){const e=Object.fromEntries(Object.entries(Object.assign({"/src/assets/Home/T2.png":ME,"/src/assets/Home/VRBA.png":EE,"/src/assets/Home/babiroussa.png":bE,"/src/assets/Home/echoweb.png":TE,"/src/assets/Home/faussepub.png":AE,"/src/assets/Home/gamejam.png":RE,"/src/assets/Home/generique.png":wE,"/src/assets/Home/github.png":CE,"/src/assets/Home/houdini.png":DE,"/src/assets/Home/hyper.png":UE,"/src/assets/Home/masterVR.png":LE,"/src/assets/Home/mocap.png":NE,"/src/assets/Home/morrowind.png":OE,"/src/assets/Home/opengl.png":PE,"/src/assets/Home/peluche.png":BE,"/src/assets/Home/photo_profil.png":lh,"/src/assets/Home/stendhal.png":FE,"/src/assets/Home/voeu.png":zE})).map(([d,f])=>[d.match(/\/([^/]+)\.png$/)[1],f])),[i,r]=pe.useState(0),[l,u]=pe.useState(0);return V.jsxs(V.Fragment,{children:[V.jsx("h1",{children:"Portfolio"}),V.jsxs("div",{className:an.demo,children:[V.jsxs("div",{className:an.demoVideo,children:[V.jsx("iframe",{allowFullScreen:!0,src:"https://www.youtube.com/embed/Mvz_RclYmYw"})," "]}),V.jsxs("div",{className:an.demoGithub,children:[V.jsx("a",{href:"https://github.com/Probbes",children:V.jsx("img",{src:e.github})})," "]})]}),V.jsxs("div",{className:an.buttonChoice,children:[V.jsx("button",{onClick:()=>{r(0),u(0)},className:i===0?an.activeButton:an.inactiveButton,children:s?"All":"Tout"},0),V.jsx("button",{onClick:()=>{r(1),u(1)},className:i===1?an.activeButton:an.inactiveButton,children:"3D"},1),V.jsx("button",{onClick:()=>{r(2),u(2)},className:i===2?an.activeButton:an.inactiveButton,children:s?"Programming":"Programmation"},2)]}),V.jsx("div",{className:an.PortfolioContainer,children:V.jsxs(B0.Provider,{value:l,children:[V.jsx(An,{img:e.VRBA,VFX:!0,CS:!0,isVideo:!0,link:"https://youtube.com/embed/X4OcAk0U_eI",name:s?"XR Environment":"Environnement XR",tools:"Unreal Engine - C++"}),V.jsx(An,{img:e.babiroussa,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/i1fgaX7QyP0",name:s?"Photogrammetry":"Photogrammétrie",tools:"Reality Capture - Blender"}),V.jsx(An,{img:e.peluche,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/1od5GxeVlq8",name:s?"Live Action - Photogrammetry":"Live Action - Photogrammétrie",tools:"Nuke - Maya"}),V.jsx(An,{img:e.stendhal,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/gd77xjkBje8",name:s?"Game demo":"Démo Jeu",tools:"Unreal Engine - Blender"}),V.jsx(An,{img:e.faussepub,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/msE6TfVoAB4",name:s?"Advert INSA":"Pub INSA",tools:"Maya"}),V.jsx(An,{img:e.gamejam,VFX:!0,CS:!0,isVideo:!0,link:"https://www.youtube.com/embed/uZVWiw6LW-M",name:"GameJam",tools:"Unreal Engine - Blender"}),V.jsx(An,{img:e.masterVR,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/mvxP22vQO3Q",name:s?"VR Environment":"Environnement VR",tools:"Unreal Engine"}),V.jsx(An,{img:e.opengl,CS:!0,isVideo:!0,link:"https://www.youtube.com/embed/BH0Y4TR3i1E",name:s?"Render/Game Engine":"Moteur de jeu/rendu",tools:"C++"}),V.jsx(An,{img:e.echoweb,CS:!0,link:e.echoweb,name:s?"Website":"Site Internet",tools:"Javascript - Firebase"}),V.jsx(An,{img:e.generique,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/us3TAqTIHTQ",name:s?"3D Opening":"Générique 3D",tools:"Blender - After Effects"}),V.jsx(An,{img:e.T2,CS:!0,isVideo:!0,link:"https://www.youtube.com/embed/ZXlseIvIKRw",name:s?"AR App":"Application AR",tools:"Java"}),V.jsx(An,{img:e.houdini,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/xvSWXIi5dlk",name:s?"Water Simulation":"Simulation d'eau",tools:"Houdini"}),V.jsx(An,{img:e.hyper,VFX:!0,link:e.hyper,name:s?"3D Render":"Rendu 3D",tools:"Maya"}),V.jsx(An,{img:e.voeu,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/t-hHf6Wsw4Q",name:s?"3D Animation":"Animation 3D",tools:"Maya"}),V.jsx(An,{img:e.mocap,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/PpDBDq4i-7I",name:"Motion Capture",tools:"Blender"}),V.jsx(An,{img:e.morrowind,VFX:!0,isVideo:!0,link:"https://www.youtube.com/embed/2JLRMKNixOQ",name:s?"3D Animation":"Animation 3D",tools:"Blender"})]})})]})}const nb="_CVBody_1go4q_1",gv={CVBody:nb};function ib({isEnglish:s}){const e=V.jsx(V.Fragment,{children:V.jsxs("div",{className:gv.CVBody,children:[V.jsx("h1",{children:"CV"}),V.jsx("h2",{children:"Expériences professionnelles"}),V.jsx("h3",{children:"Stage - Photogrammétrie / Environnement XR"}),V.jsx("h4",{children:"2024"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Photogrammétrie de squelettes"}),V.jsx("li",{children:"Traitement des pièces photogrammétrisés et animations sur Blender"}),V.jsx("li",{children:"Création d'un environnement XR sur Unreal Engine"}),V.jsx("li",{children:"Managing et apprentissage de la 3D d'un petit groupe d'étudiants en stage"}),V.jsx("li",{children:"Participation aux conférences sur l'apprentissage virtuel"}),V.jsx("li",{children:"Création de documentations pour les futurs stagiaires (https://antoine-megevand.com/manuel)"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Stage - Notorious Frogs"}),V.jsx("h4",{children:"2023"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Modélisation, texturing, animation et implémentation dans Unreal Engine"}),V.jsx("li",{children:"Participation à une GameJam : réalisation d'un jeu vidéo en 5 jours"}),V.jsx("li",{children:"Optimisation d'assets déjà créés par l'équipe"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Stage - Wéo"}),V.jsx("h4",{children:"2020"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Travail avec l'équipe de réalisation pour la diffusion d'un journal télévisé journalier"}),V.jsx("li",{children:" Création de diverses images d'illustration diffusées en direct"}),V.jsx("li",{children:"Mise en place avec l'équipe de production d'un concours d'éloquence en direct"}),V.jsx("li",{children:"Prise d'initiative pour la création d'un programme d'automatisation d'un agenda journalier"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Stage - Cap' Informatique"}),V.jsx("h4",{children:"2019"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Création d'une publicité pour le magasin en accord avec un cahier des charges"}),V.jsx("li",{children:"Montage de trois spectacles de danse de la ville d'Arras"})]}),V.jsx("br",{}),V.jsx("h2",{children:"Formation"}),V.jsx("h3",{children:"Master audiovisuel, médias interactifs numériques, jeux parcours Postproduction"}),V.jsx("h4",{children:"2021-2024"}),V.jsx("h4",{children:"Université de Valenciennes"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Responsable VFX et générique pour deux courts-métrages avec la même équipe. Réalisation des génériques entièrement en 3D"}),V.jsx("li",{children:"Création d'un monstre humanoïde en 3D, incrusté dans une vidéo immersive 360°"}),V.jsx("li",{children:"Acquisition, traitement et implémentation de motion capture dans une courte vidéo"}),V.jsx("li",{children:"Réalisation d'un montage et mixage son d'un court-métrage d'animation en équipe"}),V.jsx("li",{children:"Création d'une scène en 3D photoréaliste"}),V.jsx("li",{children:"Recréation en 3D d'un lieu grâce au camera mapping"}),V.jsx("li",{children:"Incrustation d'un objet photogrammétrisé dans une vidéo"}),V.jsx("li",{children:"Création d'un environnement immersif en réalité virtuelle sur Unreal Engine"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Licence d'audiovisuel et multimédia"}),V.jsx("h4",{children:"2018-2021"}),V.jsx("h4",{children:"Université de Valenciennes"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Mise en place d'un musée en réalité augmentée. Programmation en java pour android"}),V.jsx("li",{children:"Responsable du montage d'un court-métrage"}),V.jsx("li",{children:"Montage et effets spéciaux d'un court-métrage pour un concours étudiant"})]})]})}),i=V.jsx(V.Fragment,{children:V.jsxs("div",{className:gv.CVBody,children:[V.jsx("h1",{children:"CV"}),V.jsx("h2",{children:"Work Experience"}),V.jsx("h3",{children:"Internship - Photogrammetry / XR Environnement "}),V.jsx("h4",{children:"2024"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Photogrammetry of osteology collection"}),V.jsx("li",{children:"Cleaning and animations of those models"}),V.jsx("li",{children:"Making of XR Environnement"}),V.jsx("li",{children:"Managing and teaching to a small group of interns"}),V.jsx("li",{children:"Speaking publicly for teaching the use of virtual platforms for universities"}),V.jsx("li",{children:"Making of documentations for futur interns"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Internship - Notorious Frogs, Lille, France"}),V.jsx("h4",{children:"2023"}),V.jsxs("ul",{children:[V.jsx("li",{children:"3D Modeling, texturing, animating and implementing in Unreal Engine, assets for a videogame"}),V.jsx("li",{children:"Making of a videogame in 5 days for a GameJam "}),V.jsx("li",{children:"Optimisation of 3D assets for a videogame"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Internship - Wéo, Lille, France "}),V.jsx("h4",{children:"2020"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Team work with the director to air a daily news cast"}),V.jsx("li",{children:"Making of daily short videos"}),V.jsx("li",{children:"Working with a team to create a live show broadcasting a speech contest"}),V.jsx("li",{children:"Initiative to create a piece of software used for automating daily videos"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Internship - Cap' Informatique, Arras, France"}),V.jsx("h4",{children:"2019"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Making of a commercial for the company"}),V.jsx("li",{children:"Editing of three dance shows for the city"})]}),V.jsx("br",{}),V.jsx("h2",{children:"Education"}),V.jsx("h3",{children:"Master's degree in audiovisual and interactive media and games"}),V.jsx("h4",{children:"2021-2024"}),V.jsx("h4",{children:"University of Valenciennes, France"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Making the credits entirely in 3D for a short film"}),V.jsx("li",{children:"3D Modeling, texturing and animating a monster for a VR video"}),V.jsx("li",{children:"Shooting, cleaning and implementating a motion capture"}),V.jsx("li",{children:"Managing, editing and mixing a documentary made in teams"}),V.jsx("li",{children:"Making of a photorealistic 3D scene"}),V.jsx("li",{children:"Use of camera mapping to recreate a place in 3DS Max"}),V.jsx("li",{children:"Making of a live-action shot with photogrammetric object"}),V.jsx("li",{children:"Creation of an immersive environment in virtual reality with Unreal Engine"})]}),V.jsx("br",{}),V.jsx("h3",{children:"Bachelor's degree in audiovisual and interactive media"}),V.jsx("h4",{children:"2018-2021"}),V.jsx("h4",{children:"University of Valenciennes, France"}),V.jsxs("ul",{children:[V.jsx("li",{children:"Team creation of an exhibition in augmented reality"}),V.jsx("li",{children:"Editing of several short films"}),V.jsx("li",{children:"Editing and making of special effects for a short film made for a contest"})]})]})});return s?i:e}const ab="/Website/assets/3dsmax-DSXO2ncR.png",rb="/Website/assets/aftereffects-C519s9Tj.png",sb="/Website/assets/blender-DRW_bEXk.png",ob="/Website/assets/c__-Bjp6Vn0d.png",lb="/Website/assets/c-CK_n60t_.png",ub="/Website/assets/cercle-MriM5Ayl.png",cb="/Website/assets/css-DdEvSp_b.png",fb="/Website/assets/davinci-DDlz0xzQ.png",db="/Website/assets/designer-CwTQYL04.png",hb="/Website/assets/finalcut-C2xx9dHF.png",pb="/Website/assets/flstudio-B-T7SX3n.png",mb="/Website/assets/houdini-z_kf-n--.png",gb="/Website/assets/html-Ch-_yyBv.png",_b="/Website/assets/java-N6WwhQ5y.png",vb="/Website/assets/javascript-DruyhIvP.png",yb="/Website/assets/libreoffice-CD_rDWlC.png",Sb="/Website/assets/lua-BogDNV2E.png",xb="/Website/assets/maya-DUhSfAhj.png",Mb="/Website/assets/mediacomposer-Vn9frnkF.png",Eb="/Website/assets/nuke-DF5y_Iyx.png",bb="/Website/assets/office-CX7j3efy.png",Tb="/Website/assets/openoffice-Cwf686Za.png",Ab="/Website/assets/painter-C6jbjDUX.png",Rb="/Website/assets/photoshop-zGSe2ZmQ.png",wb="/Website/assets/premierpro-DcDNguSc.png",Cb="/Website/assets/protools-lsIU-ybe.png",Db="/Website/assets/python-DKmmB4f4.png",Ub="/Website/assets/react-B9xL_sEp.png",Lb="/Website/assets/realitycapture-B0-pW2xV.png",Nb="/Website/assets/unreal-_rVUUXHd.png";var Ob=Qo();const Pb=Sx(Ob),Bb="_SoftwareContainer_5lh6m_1",Fb="_SoftCard_5lh6m_15",F0={SoftwareContainer:Bb,SoftCard:Fb};function vr(s){return V.jsx(V.Fragment,{children:V.jsxs("div",{className:F0.SoftCard,children:[V.jsx("h3",{children:s.title}),V.jsx("ul",{children:s.names.map((e,i)=>V.jsxs("li",{children:[" ",V.jsx("img",{src:s.images[i]})," ",e," "]},i))})]})})}vr.PropTypes={names:Pb.array};function zb({isEnglish:s}){const e=Object.fromEntries(Object.entries(Object.assign({"/src/assets/Home/logo/3dsmax.png":ab,"/src/assets/Home/logo/aftereffects.png":rb,"/src/assets/Home/logo/blender.png":sb,"/src/assets/Home/logo/c++.png":ob,"/src/assets/Home/logo/c.png":lb,"/src/assets/Home/logo/cercle.png":ub,"/src/assets/Home/logo/css.png":cb,"/src/assets/Home/logo/davinci.png":fb,"/src/assets/Home/logo/designer.png":db,"/src/assets/Home/logo/drapeauEN.png":O0,"/src/assets/Home/logo/drapeauFR.png":P0,"/src/assets/Home/logo/finalcut.png":hb,"/src/assets/Home/logo/flstudio.png":pb,"/src/assets/Home/logo/houdini.png":mb,"/src/assets/Home/logo/html.png":gb,"/src/assets/Home/logo/java.png":_b,"/src/assets/Home/logo/javascript.png":vb,"/src/assets/Home/logo/libreoffice.png":yb,"/src/assets/Home/logo/lua.png":Sb,"/src/assets/Home/logo/maya.png":xb,"/src/assets/Home/logo/mediacomposer.png":Mb,"/src/assets/Home/logo/nuke.png":Eb,"/src/assets/Home/logo/office.png":bb,"/src/assets/Home/logo/openoffice.png":Tb,"/src/assets/Home/logo/painter.png":Ab,"/src/assets/Home/logo/photoshop.png":Rb,"/src/assets/Home/logo/premierpro.png":wb,"/src/assets/Home/logo/protools.png":Cb,"/src/assets/Home/logo/python.png":Db,"/src/assets/Home/logo/react.png":Ub,"/src/assets/Home/logo/realitycapture.png":Lb,"/src/assets/Home/logo/unreal.png":Nb})).map(([i,r])=>[i.match(/\/([^/]+)\.png$/)[1],r]));return V.jsxs(V.Fragment,{children:[V.jsxs("h1",{children:[s?"Tools used":"Outils informatiques",":"]}),V.jsxs("div",{className:F0.SoftwareContainer,children:[V.jsx(vr,{title:s?"Editing":"Montage",names:["Premier Pro","Davinci Resolve","Media Composer","Final Cut"],images:[e.premierpro,e.davinci,e.mediacomposer,e.finalcut]}),V.jsx(vr,{title:"3D",names:["Blender","Unreal Engine","Maya","Houdini","3DS max","Substance Painter","Substance Designer","Reality Capture"],images:[e.blender,e.unreal,e.maya,e.houdini,e["3dsmax"],e.painter,e.designer,e.realitycapture]}),V.jsx(vr,{title:"Compositing",names:["Nuke","After Effects","Photoshop"],images:[e.nuke,e.aftereffects,e.photoshop]}),V.jsx(vr,{title:"Audio",names:["ProTools","FL Studio"],images:[e.protools,e.flstudio]}),V.jsx(vr,{title:s?"Programming language":"Programmation",names:["Python","C++","C","React","HTML/CSS","Javascript","LUA","Java"],images:[e.python,e["c++"],e.c,e.react,e.css,e.javascript,e.lua,e.java]}),V.jsx(vr,{title:s?"Office software":"Bureautique",names:["Libre Office","Open Office","Microsoft Office"],images:[e.libreoffice,e.openoffice,e.office]})]})]})}const Ib="_footer_1tv84_1",_v={footer:Ib};function Hb({isEnglish:s}){const e=V.jsxs("div",{className:_v.footer,children:["Vous souhaitez me contacter ?",V.jsx("br",{}),"e-mail: Megevand.Antoine@gmail.com ",V.jsx("br",{}),"Téléphone: +33 7 81 29 54 45"]}),i=V.jsxs("div",{className:_v.footer,children:["You want to contact me?",V.jsx("br",{}),"mail: Megevand.Antoine@gmail.com ",V.jsx("br",{}),"Phone number: +33 7 81 29 54 45"]});return s?i:e}const Vb="_main_1tk6b_17",Gb={main:Vb};function kb(){const[s,e]=pe.useState(!1),i=()=>{e(!s),console.log(s)};return V.jsxs(V.Fragment,{children:[V.jsx(vE,{onLangChange:i,isEnglish:s}),V.jsxs("div",{className:Gb.main,children:[V.jsx(Xo.Element,{name:"profil",children:V.jsx(xE,{isEnglish:s})}),V.jsx(Xo.Element,{name:"portfolio",children:V.jsx(tb,{isEnglish:s})}),V.jsx(Xo.Element,{name:"cv",children:V.jsx(ib,{isEnglish:s})}),V.jsx(zb,{isEnglish:s})]}),V.jsx(Hb,{isEnglish:s})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="174",Wb=0,vv=1,Xb=2,z0=1,qb=2,aa=3,Wa=0,Gn=1,ra=2,Va=0,Ts=1,yv=2,Sv=3,xv=4,jb=5,Mr=100,Yb=101,Zb=102,Kb=103,Qb=104,Jb=200,$b=201,eT=202,tT=203,uh=204,ch=205,nT=206,iT=207,aT=208,rT=209,sT=210,oT=211,lT=212,uT=213,cT=214,fh=0,dh=1,hh=2,ws=3,ph=4,mh=5,gh=6,_h=7,I0=0,fT=1,dT=2,Ga=0,hT=1,pT=2,mT=3,gT=4,_T=5,vT=6,yT=7,H0=300,Cs=301,Ds=302,vh=303,yh=304,uc=306,Sh=1e3,br=1001,xh=1002,Mi=1003,ST=1004,Tu=1005,Ui=1006,wd=1007,Tr=1008,ca=1009,V0=1010,G0=1011,jo=1012,op=1013,Rr=1014,sa=1015,Jo=1016,lp=1017,up=1018,Us=1020,k0=35902,W0=1021,X0=1022,xi=1023,q0=1024,j0=1025,As=1026,Ls=1027,Y0=1028,cp=1029,Z0=1030,fp=1031,dp=1033,Zu=33776,Ku=33777,Qu=33778,Ju=33779,Mh=35840,Eh=35841,bh=35842,Th=35843,Ah=36196,Rh=37492,wh=37496,Ch=37808,Dh=37809,Uh=37810,Lh=37811,Nh=37812,Oh=37813,Ph=37814,Bh=37815,Fh=37816,zh=37817,Ih=37818,Hh=37819,Vh=37820,Gh=37821,$u=36492,kh=36494,Wh=36495,K0=36283,Xh=36284,qh=36285,jh=36286,xT=3200,MT=3201,Q0=0,ET=1,Ha="",ui="srgb",Ns="srgb-linear",nc="linear",Bt="srgb",cs=7680,Mv=519,bT=512,TT=513,AT=514,J0=515,RT=516,wT=517,CT=518,DT=519,Ev=35044,bv="300 es",oa=2e3,ic=2001;class Bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=Math.PI/180,Yh=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function xt(s,e,i){return Math.max(e,Math.min(i,s))}function UT(s,e){return(s%e+e)%e}function Dd(s,e,i){return(1-i)*s+i*e}function Io(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(e=0,i=0){Dt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,i,r,l,u,d,f,p,h){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,f,p,h)}set(e,i,r,l,u,d,f,p,h){const g=this.elements;return g[0]=e,g[1]=l,g[2]=f,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=d,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],f=r[3],p=r[6],h=r[1],g=r[4],v=r[7],y=r[2],S=r[5],M=r[8],b=l[0],x=l[3],_=l[6],L=l[1],w=l[4],C=l[7],z=l[2],F=l[5],N=l[8];return u[0]=d*b+f*L+p*z,u[3]=d*x+f*w+p*F,u[6]=d*_+f*C+p*N,u[1]=h*b+g*L+v*z,u[4]=h*x+g*w+v*F,u[7]=h*_+g*C+v*N,u[2]=y*b+S*L+M*z,u[5]=y*x+S*w+M*F,u[8]=y*_+S*C+M*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return i*d*g-i*f*h-r*u*g+r*f*p+l*u*h-l*d*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8],v=g*d-f*h,y=f*p-g*u,S=h*u-d*p,M=i*v+r*y+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(l*h-g*r)*b,e[2]=(f*r-l*d)*b,e[3]=y*b,e[4]=(g*i-l*p)*b,e[5]=(l*u-f*i)*b,e[6]=S*b,e[7]=(r*p-h*i)*b,e[8]=(d*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,f){const p=Math.cos(u),h=Math.sin(u);return this.set(r*p,r*h,-r*(p*d+h*f)+d+e,-l*h,l*p,-l*(-h*d+p*f)+f+i,0,0,1),this}scale(e,i){return this.premultiply(Ud.makeScale(e,i)),this}rotate(e){return this.premultiply(Ud.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ud.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ud=new ut;function $0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function LT(){const s=ac("canvas");return s.style.display="block",s}const Tv={};function yr(s){s in Tv||(Tv[s]=!0,console.warn(s))}function NT(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function OT(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PT(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Av=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BT(){const s={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Bt&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Bt&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?nc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ns]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Rt=BT();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fs;class FT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=ac("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ac("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ua(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zT=0;class hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?u.push(Ld(l[d].image)):u.push(Ld(l[d]))}else u=Ld(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?FT.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IT=0;class kn extends Bs{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=br,l=br,u=Ui,d=Tr,f=xi,p=ca,h=kn.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=$o(),this.name="",this.source=new hp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=H0;kn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,i=0,r=0,l=1){Kt.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const p=e.elements,h=p[0],g=p[4],v=p[8],y=p[1],S=p[5],M=p[9],b=p[2],x=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+b)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(h+1)/2,C=(S+1)/2,z=(_+1)/2,F=(g+y)/4,N=(v+b)/4,G=(M+x)/4;return w>C&&w>z?w<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(w),l=F/r,u=N/r):C>z?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=F/l,u=G/l):z<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(z),r=N/u,l=G/u),this.set(r,l,u,i),this}let L=Math.sqrt((x-M)*(x-M)+(v-b)*(v-b)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(x-M)/L,this.y=(v-b)/L,this.z=(y-g)/L,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HT extends Bs{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Kt(0,0,e,i),this.scissorTest=!1,this.viewport=new Kt(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new kn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends HT{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class ey extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VT extends kn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,f){let p=r[l+0],h=r[l+1],g=r[l+2],v=r[l+3];const y=u[d+0],S=u[d+1],M=u[d+2],b=u[d+3];if(f===0){e[i+0]=p,e[i+1]=h,e[i+2]=g,e[i+3]=v;return}if(f===1){e[i+0]=y,e[i+1]=S,e[i+2]=M,e[i+3]=b;return}if(v!==b||p!==y||h!==S||g!==M){let x=1-f;const _=p*y+h*S+g*M+v*b,L=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const z=Math.sqrt(w),F=Math.atan2(z,_*L);x=Math.sin(x*F)/z,f=Math.sin(f*F)/z}const C=f*L;if(p=p*x+y*C,h=h*x+S*C,g=g*x+M*C,v=v*x+b*C,x===1-f){const z=1/Math.sqrt(p*p+h*h+g*g+v*v);p*=z,h*=z,g*=z,v*=z}}e[i]=p,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,d){const f=r[l],p=r[l+1],h=r[l+2],g=r[l+3],v=u[d],y=u[d+1],S=u[d+2],M=u[d+3];return e[i]=f*M+g*v+p*S-h*y,e[i+1]=p*M+g*y+h*v-f*S,e[i+2]=h*M+g*S+f*y-p*v,e[i+3]=g*M-f*v-p*y-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,f=Math.cos,p=Math.sin,h=f(r/2),g=f(l/2),v=f(u/2),y=p(r/2),S=p(l/2),M=p(u/2);switch(d){case"XYZ":this._x=y*g*v+h*S*M,this._y=h*S*v-y*g*M,this._z=h*g*M+y*S*v,this._w=h*g*v-y*S*M;break;case"YXZ":this._x=y*g*v+h*S*M,this._y=h*S*v-y*g*M,this._z=h*g*M-y*S*v,this._w=h*g*v+y*S*M;break;case"ZXY":this._x=y*g*v-h*S*M,this._y=h*S*v+y*g*M,this._z=h*g*M+y*S*v,this._w=h*g*v-y*S*M;break;case"ZYX":this._x=y*g*v-h*S*M,this._y=h*S*v+y*g*M,this._z=h*g*M-y*S*v,this._w=h*g*v+y*S*M;break;case"YZX":this._x=y*g*v+h*S*M,this._y=h*S*v+y*g*M,this._z=h*g*M-y*S*v,this._w=h*g*v-y*S*M;break;case"XZY":this._x=y*g*v-h*S*M,this._y=h*S*v-y*g*M,this._z=h*g*M+y*S*v,this._w=h*g*v+y*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],f=i[5],p=i[9],h=i[2],g=i[6],v=i[10],y=r+f+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-h)*S,this._z=(d-l)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(g-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(u+h)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(u-h)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(d-l)/S,this._x=(u+h)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,f=i._x,p=i._y,h=i._z,g=i._w;return this._x=r*g+d*f+l*h-u*p,this._y=l*g+d*p+u*f-r*h,this._z=u*g+d*h+r*p-l*f,this._w=d*g-r*f-l*p-u*h,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+l*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-i;return this._w=S*d+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const h=Math.sqrt(p),g=Math.atan2(h,f),v=Math.sin((1-i)*g)/h,y=Math.sin(i*g)/h;return this._w=d*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,i=0,r=0){le.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(wv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(wv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,f=e.z,p=e.w,h=2*(d*l-f*r),g=2*(f*i-u*l),v=2*(u*r-d*i);return this.x=i+p*h+d*v-f*g,this.y=r+p*g+f*h-u*v,this.z=l+p*v+u*g-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,f=i.y,p=i.z;return this.x=l*p-u*f,this.y=u*d-r*p,this.z=r*f-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nd=new le,wv=new el;class tl{constructor(e=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(_i.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(_i.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=_i.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,_i):_i.fromBufferAttribute(u,d),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Au.copy(r.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Ru.subVectors(this.max,Ho),ds.subVectors(e.a,Ho),hs.subVectors(e.b,Ho),ps.subVectors(e.c,Ho),Oa.subVectors(hs,ds),Pa.subVectors(ps,hs),dr.subVectors(ds,ps);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-dr.z,dr.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,dr.z,0,-dr.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-dr.y,dr.x,0];return!Od(i,ds,hs,ps,Ru)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,ds,hs,ps,Ru))?!1:(wu.crossVectors(Oa,Pa),i=[wu.x,wu.y,wu.z],Od(i,ds,hs,ps,Ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new le,new le,new le,new le,new le,new le,new le,new le],_i=new le,Au=new tl,ds=new le,hs=new le,ps=new le,Oa=new le,Pa=new le,dr=new le,Ho=new le,Ru=new le,wu=new le,hr=new le;function Od(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){hr.fromArray(s,u);const f=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),p=e.dot(hr),h=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const GT=new tl,Vo=new le,Pd=new le;class pp{constructor(e=new le,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):GT.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Pd)),this.expandByPoint(Vo.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new le,Bd=new le,Cu=new le,Ba=new le,Fd=new le,Du=new le,zd=new le;class kT{constructor(e=new le,i=new le(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bd.copy(e).add(i).multiplyScalar(.5),Cu.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(Bd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Cu),f=Ba.dot(this.direction),p=-Ba.dot(Cu),h=Ba.lengthSq(),g=Math.abs(1-d*d);let v,y,S,M;if(g>0)if(v=d*p-f,y=d*f-p,M=u*g,v>=0)if(y>=-M)if(y<=M){const b=1/g;v*=b,y*=b,S=v*(v+d*y+2*f)+y*(d*v+y+2*p)+h}else y=u,v=Math.max(0,-(d*y+f)),S=-v*v+y*(y+2*p)+h;else y=-u,v=Math.max(0,-(d*y+f)),S=-v*v+y*(y+2*p)+h;else y<=-M?(v=Math.max(0,-(-d*u+f)),y=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+y*(y+2*p)+h):y<=M?(v=0,y=Math.min(Math.max(-u,-p),u),S=y*(y+2*p)+h):(v=Math.max(0,-(d*u+f)),y=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+y*(y+2*p)+h);else y=d>0?-u:u,v=Math.max(0,-(d*y+f)),S=-v*v+y*(y+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Bd).addScaledVector(Cu,y),S}intersectSphere(e,i){ea.subVectors(e.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,i):this.at(f,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,f,p;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,l=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,l=(e.min.x-y.x)*h),g>=0?(u=(e.min.y-y.y)*g,d=(e.max.y-y.y)*g):(u=(e.max.y-y.y)*g,d=(e.min.y-y.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),v>=0?(f=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||f>l)||((f>r||r!==r)&&(r=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ea)!==null}intersectTriangle(e,i,r,l,u){Fd.subVectors(i,e),Du.subVectors(r,e),zd.crossVectors(Fd,Du);let d=this.direction.dot(zd),f;if(d>0){if(l)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Ba.subVectors(this.origin,e);const p=f*this.direction.dot(Du.crossVectors(Ba,Du));if(p<0)return null;const h=f*this.direction.dot(Fd.cross(Ba));if(h<0||p+h>d)return null;const g=-f*Ba.dot(zd);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,i,r,l,u,d,f,p,h,g,v,y,S,M,b,x){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,f,p,h,g,v,y,S,M,b,x)}set(e,i,r,l,u,d,f,p,h,g,v,y,S,M,b,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=f,_[13]=p,_[2]=h,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=M,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),d=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(l),h=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const y=d*g,S=d*v,M=f*g,b=f*v;i[0]=p*g,i[4]=-p*v,i[8]=h,i[1]=S+M*h,i[5]=y-b*h,i[9]=-f*p,i[2]=b-y*h,i[6]=M+S*h,i[10]=d*p}else if(e.order==="YXZ"){const y=p*g,S=p*v,M=h*g,b=h*v;i[0]=y+b*f,i[4]=M*f-S,i[8]=d*h,i[1]=d*v,i[5]=d*g,i[9]=-f,i[2]=S*f-M,i[6]=b+y*f,i[10]=d*p}else if(e.order==="ZXY"){const y=p*g,S=p*v,M=h*g,b=h*v;i[0]=y-b*f,i[4]=-d*v,i[8]=M+S*f,i[1]=S+M*f,i[5]=d*g,i[9]=b-y*f,i[2]=-d*h,i[6]=f,i[10]=d*p}else if(e.order==="ZYX"){const y=d*g,S=d*v,M=f*g,b=f*v;i[0]=p*g,i[4]=M*h-S,i[8]=y*h+b,i[1]=p*v,i[5]=b*h+y,i[9]=S*h-M,i[2]=-h,i[6]=f*p,i[10]=d*p}else if(e.order==="YZX"){const y=d*p,S=d*h,M=f*p,b=f*h;i[0]=p*g,i[4]=b-y*v,i[8]=M*v+S,i[1]=v,i[5]=d*g,i[9]=-f*g,i[2]=-h*g,i[6]=S*v+M,i[10]=y-b*v}else if(e.order==="XZY"){const y=d*p,S=d*h,M=f*p,b=f*h;i[0]=p*g,i[4]=-v,i[8]=h*g,i[1]=y*v+b,i[5]=d*g,i[9]=S*v-M,i[2]=M*v-S,i[6]=f*g,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WT,e,XT)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Fa.crossVectors(r,Kn),Fa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Fa.crossVectors(r,Kn)),Fa.normalize(),Uu.crossVectors(Kn,Fa),l[0]=Fa.x,l[4]=Uu.x,l[8]=Kn.x,l[1]=Fa.y,l[5]=Uu.y,l[9]=Kn.y,l[2]=Fa.z,l[6]=Uu.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],f=r[4],p=r[8],h=r[12],g=r[1],v=r[5],y=r[9],S=r[13],M=r[2],b=r[6],x=r[10],_=r[14],L=r[3],w=r[7],C=r[11],z=r[15],F=l[0],N=l[4],G=l[8],A=l[12],T=l[1],O=l[5],H=l[9],q=l[13],$=l[2],ce=l[6],W=l[10],ae=l[14],Q=l[3],ye=l[7],P=l[11],ie=l[15];return u[0]=d*F+f*T+p*$+h*Q,u[4]=d*N+f*O+p*ce+h*ye,u[8]=d*G+f*H+p*W+h*P,u[12]=d*A+f*q+p*ae+h*ie,u[1]=g*F+v*T+y*$+S*Q,u[5]=g*N+v*O+y*ce+S*ye,u[9]=g*G+v*H+y*W+S*P,u[13]=g*A+v*q+y*ae+S*ie,u[2]=M*F+b*T+x*$+_*Q,u[6]=M*N+b*O+x*ce+_*ye,u[10]=M*G+b*H+x*W+_*P,u[14]=M*A+b*q+x*ae+_*ie,u[3]=L*F+w*T+C*$+z*Q,u[7]=L*N+w*O+C*ce+z*ye,u[11]=L*G+w*H+C*W+z*P,u[15]=L*A+w*q+C*ae+z*ie,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],f=e[5],p=e[9],h=e[13],g=e[2],v=e[6],y=e[10],S=e[14],M=e[3],b=e[7],x=e[11],_=e[15];return M*(+u*p*v-l*h*v-u*f*y+r*h*y+l*f*S-r*p*S)+b*(+i*p*S-i*h*y+u*d*y-l*d*S+l*h*g-u*p*g)+x*(+i*h*v-i*f*S-u*d*v+r*d*S+u*f*g-r*h*g)+_*(-l*f*g-i*p*v+i*f*y+l*d*v-r*d*y+r*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],f=e[5],p=e[6],h=e[7],g=e[8],v=e[9],y=e[10],S=e[11],M=e[12],b=e[13],x=e[14],_=e[15],L=v*x*h-b*y*h+b*p*S-f*x*S-v*p*_+f*y*_,w=M*y*h-g*x*h-M*p*S+d*x*S+g*p*_-d*y*_,C=g*b*h-M*v*h+M*f*S-d*b*S-g*f*_+d*v*_,z=M*v*p-g*b*p-M*f*y+d*b*y+g*f*x-d*v*x,F=i*L+r*w+l*C+u*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=L*N,e[1]=(b*y*u-v*x*u-b*l*S+r*x*S+v*l*_-r*y*_)*N,e[2]=(f*x*u-b*p*u+b*l*h-r*x*h-f*l*_+r*p*_)*N,e[3]=(v*p*u-f*y*u-v*l*h+r*y*h+f*l*S-r*p*S)*N,e[4]=w*N,e[5]=(g*x*u-M*y*u+M*l*S-i*x*S-g*l*_+i*y*_)*N,e[6]=(M*p*u-d*x*u-M*l*h+i*x*h+d*l*_-i*p*_)*N,e[7]=(d*y*u-g*p*u+g*l*h-i*y*h-d*l*S+i*p*S)*N,e[8]=C*N,e[9]=(M*v*u-g*b*u-M*r*S+i*b*S+g*r*_-i*v*_)*N,e[10]=(d*b*u-M*f*u+M*r*h-i*b*h-d*r*_+i*f*_)*N,e[11]=(g*f*u-d*v*u-g*r*h+i*v*h+d*r*S-i*f*S)*N,e[12]=z*N,e[13]=(g*b*l-M*v*l+M*r*y-i*b*y-g*r*x+i*v*x)*N,e[14]=(M*f*l-d*b*l-M*r*p+i*b*p+d*r*x-i*f*x)*N,e[15]=(d*v*l-g*f*l+g*r*p-i*v*p-d*r*y+i*f*y)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,f=e.y,p=e.z,h=u*d,g=u*f;return this.set(h*d+r,h*f-l*p,h*p+l*f,0,h*f+l*p,g*f+r,g*p-l*d,0,h*p-l*f,g*p+l*d,u*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,f=i._z,p=i._w,h=u+u,g=d+d,v=f+f,y=u*h,S=u*g,M=u*v,b=d*g,x=d*v,_=f*v,L=p*h,w=p*g,C=p*v,z=r.x,F=r.y,N=r.z;return l[0]=(1-(b+_))*z,l[1]=(S+C)*z,l[2]=(M-w)*z,l[3]=0,l[4]=(S-C)*F,l[5]=(1-(y+_))*F,l[6]=(x+L)*F,l[7]=0,l[8]=(M+w)*N,l[9]=(x-L)*N,l[10]=(1-(y+b))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const d=ms.set(l[4],l[5],l[6]).length(),f=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],vi.copy(this);const h=1/u,g=1/d,v=1/f;return vi.elements[0]*=h,vi.elements[1]*=h,vi.elements[2]*=h,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=v,vi.elements[9]*=v,vi.elements[10]*=v,i.setFromRotationMatrix(vi),r.x=u,r.y=d,r.z=f,this}makePerspective(e,i,r,l,u,d,f=oa){const p=this.elements,h=2*u/(i-e),g=2*u/(r-l),v=(i+e)/(i-e),y=(r+l)/(r-l);let S,M;if(f===oa)S=-(d+u)/(d-u),M=-2*d*u/(d-u);else if(f===ic)S=-d/(d-u),M=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=h,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=M,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,f=oa){const p=this.elements,h=1/(i-e),g=1/(r-l),v=1/(d-u),y=(i+e)*h,S=(r+l)*g;let M,b;if(f===oa)M=(d+u)*v,b=-2*v;else if(f===ic)M=u*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*h,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=b,p[14]=-M,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new le,vi=new Qt,WT=new le(0,0,0),XT=new le(1,1,1),Fa=new le,Uu=new le,Kn=new le,Cv=new Qt,Dv=new el;class Oi{constructor(e=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],f=l[8],p=l[1],h=l[5],g=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Dv.setFromEuler(this),this.setFromQuaternion(Dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ty{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qT=0;const Uv=new le,gs=new el,ta=new Qt,Lu=new le,Go=new le,jT=new le,YT=new el,Lv=new le(1,0,0),Nv=new le(0,1,0),Ov=new le(0,0,1),Pv={type:"added"},ZT={type:"removed"},_s={type:"childadded",child:null},Id={type:"childremoved",child:null};class Cn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new le,i=new Oi,r=new el,l=new le(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ut}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Lv,e)}rotateY(e){return this.rotateOnAxis(Nv,e)}rotateZ(e){return this.rotateOnAxis(Ov,e)}translateOnAxis(e,i){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Lv,e)}translateY(e){return this.translateOnAxis(Nv,e)}translateZ(e){return this.translateOnAxis(Ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Lu.copy(e):Lu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Go,Lu,this.up):ta.lookAt(Lu,Go,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ta),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZT),Id.child=e,this.dispatchEvent(Id),Id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ta.multiply(e.parent.matrixWorld)),e.applyMatrix4(ta),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,jT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,YT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const v=p[h];u(e.shapes,v)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(u(e.materials,this.material[p]));l.material=f}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(u(e.animations,p))}}if(i){const f=d(e.geometries),p=d(e.materials),h=d(e.textures),g=d(e.images),v=d(e.shapes),y=d(e.skeletons),S=d(e.animations),M=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new le(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new le,na=new le,Hd=new le,ia=new le,vs=new le,ys=new le,Bv=new le,Vd=new le,Gd=new le,kd=new le,Wd=new Kt,Xd=new Kt,qd=new Kt;class Si{constructor(e=new le,i=new le,r=new le){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),na.subVectors(r,i),Hd.subVectors(e,i);const d=yi.dot(yi),f=yi.dot(na),p=yi.dot(Hd),h=na.dot(na),g=na.dot(Hd),v=d*h-f*f;if(v===0)return u.set(0,0,0),null;const y=1/v,S=(h*p-f*g)*y,M=(d*g-f*p)*y;return u.set(1-S-M,M,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,d,f,p){return this.getBarycoord(e,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ia.x),p.addScaledVector(d,ia.y),p.addScaledVector(f,ia.z),p)}static getInterpolatedAttribute(e,i,r,l,u,d){return Wd.setScalar(0),Xd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(e,i),Xd.fromBufferAttribute(e,r),qd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Wd,u.x),d.addScaledVector(Xd,u.y),d.addScaledVector(qd,u.z),d}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),na.subVectors(e,i),yi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Si.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,f;vs.subVectors(l,r),ys.subVectors(u,r),Vd.subVectors(e,r);const p=vs.dot(Vd),h=ys.dot(Vd);if(p<=0&&h<=0)return i.copy(r);Gd.subVectors(e,l);const g=vs.dot(Gd),v=ys.dot(Gd);if(g>=0&&v<=g)return i.copy(l);const y=p*v-g*h;if(y<=0&&p>=0&&g<=0)return d=p/(p-g),i.copy(r).addScaledVector(vs,d);kd.subVectors(e,u);const S=vs.dot(kd),M=ys.dot(kd);if(M>=0&&S<=M)return i.copy(u);const b=S*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),i.copy(r).addScaledVector(ys,f);const x=g*M-S*v;if(x<=0&&v-g>=0&&S-M>=0)return Bv.subVectors(u,l),f=(v-g)/(v-g+(S-M)),i.copy(l).addScaledVector(Bv,f);const _=1/(x+b+y);return d=b*_,f=y*_,i.copy(r).addScaledVector(vs,d).addScaledVector(ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},Nu={h:0,s:0,l:0};function jd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=UT(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=jd(d,u,e+1/3),this.g=jd(d,u,e),this.b=jd(d,u,e-1/3)}return Rt.toWorkingColorSpace(this,l),this}setStyle(e,i=ui){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ui){const r=ny[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Rt.fromWorkingColorSpace(wn.copy(this),e),Math.round(xt(wn.r*255,0,255))*65536+Math.round(xt(wn.g*255,0,255))*256+Math.round(xt(wn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.fromWorkingColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),f=Math.min(r,l,u);let p,h;const g=(f+d)/2;if(f===d)p=0,h=0;else{const v=d-f;switch(h=g<=.5?v/(d+f):v/(2-d-f),d){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=ui){Rt.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==ui?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(Nu);const r=Dd(za.h,Nu.h,i),l=Dd(za.s,Nu.s,i),u=Dd(za.l,Nu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ct;Ct.NAMES=ny;let KT=0;class nl extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ts,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=ch,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==uh&&(r.blendSrc=this.blendSrc),this.blendDst!==ch&&(r.blendDst=this.blendDst),this.blendEquation!==Mr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class iy extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new le,Ou=new Dt;let QT=0;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Ev,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ou.fromBufferAttribute(this,i),Ou.applyMatrix3(e),this.setXY(i,Ou.x,Ou.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ev&&(e.usage=this.usage),e}}class ay extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class ry extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ar extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let JT=0;const li=new Qt,Yd=new Cn,Ss=new le,Qn=new tl,ko=new tl,_n=new le;class Ur extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?ry:ay)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,r){return li.makeTranslation(e,i,r),this.applyMatrix4(li),this}scale(e,i,r){return li.makeScale(e,i,r),this.applyMatrix4(li),this}lookAt(e){return Yd.lookAt(e),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ar(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const f=i[u];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(Qn.min,ko.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,ko.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(ko.min),Qn.expandByPoint(ko.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)_n.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,d=i.length;u<d;u++){const f=i[u],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)_n.fromBufferAttribute(f,h),p&&(Ss.fromBufferAttribute(e,h),_n.add(Ss)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<r.count;G++)f[G]=new le,p[G]=new le;const h=new le,g=new le,v=new le,y=new Dt,S=new Dt,M=new Dt,b=new le,x=new le;function _(G,A,T){h.fromBufferAttribute(r,G),g.fromBufferAttribute(r,A),v.fromBufferAttribute(r,T),y.fromBufferAttribute(u,G),S.fromBufferAttribute(u,A),M.fromBufferAttribute(u,T),g.sub(h),v.sub(h),S.sub(y),M.sub(y);const O=1/(S.x*M.y-M.x*S.y);isFinite(O)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(O),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(O),f[G].add(b),f[A].add(b),f[T].add(b),p[G].add(x),p[A].add(x),p[T].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let G=0,A=L.length;G<A;++G){const T=L[G],O=T.start,H=T.count;for(let q=O,$=O+H;q<$;q+=3)_(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new le,C=new le,z=new le,F=new le;function N(G){z.fromBufferAttribute(l,G),F.copy(z);const A=f[G];w.copy(A),w.sub(z.multiplyScalar(z.dot(A))).normalize(),C.crossVectors(F,A);const O=C.dot(p[G])<0?-1:1;d.setXYZW(G,w.x,w.y,w.z,O)}for(let G=0,A=L.length;G<A;++G){const T=L[G],O=T.start,H=T.count;for(let q=O,$=O+H;q<$;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new le,u=new le,d=new le,f=new le,p=new le,h=new le,g=new le,v=new le;if(e)for(let y=0,S=e.count;y<S;y+=3){const M=e.getX(y+0),b=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,x),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,b),h.fromBufferAttribute(r,x),f.add(g),p.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),g.subVectors(d,u),v.subVectors(l,u),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)_n.fromBufferAttribute(e,i),_n.normalize(),e.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,v=f.normalized,y=new h.constructor(p.length*g);let S=0,M=0;for(let b=0,x=p.length;b<x;b++){f.isInterleavedBufferAttribute?S=p[b]*f.data.stride+f.offset:S=p[b]*g;for(let _=0;_<g;_++)y[M++]=h[S++]}return new Ni(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ur,r=this.index.array,l=this.attributes;for(const f in l){const p=l[f],h=e(p,r);i.setAttribute(f,h)}const u=this.morphAttributes;for(const f in u){const p=[],h=u[f];for(let g=0,v=h.length;g<v;g++){const y=h[g],S=e(y,r);p.push(S)}i.morphAttributes[f]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const h=d[f];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const l={};let u=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let v=0,y=h.length;v<y;v++){const S=h[v];g.push(S.toJSON(e.data))}g.length>0&&(l[p]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const h in l){const g=l[h];this.setAttribute(h,g.clone(i))}const u=e.morphAttributes;for(const h in u){const g=[],v=u[h];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,g=d.length;h<g;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fv=new Qt,pr=new kT,Pu=new pp,zv=new le,Bu=new le,Fu=new le,zu=new le,Zd=new le,Iu=new le,Iv=new le,Hu=new le;class Li extends Cn{constructor(e=new Ur,i=new iy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const f=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(u&&f){Iu.set(0,0,0);for(let p=0,h=u.length;p<h;p++){const g=f[p],v=u[p];g!==0&&(Zd.fromBufferAttribute(v,e),d?Iu.addScaledVector(Zd,g):Iu.addScaledVector(Zd.sub(i),g))}i.add(Iu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pu.copy(r.boundingSphere),Pu.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(Pu.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Pu,zv)===null||pr.origin.distanceToSquared(zv)>(e.far-e.near)**2))&&(Fv.copy(u).invert(),pr.copy(e.ray).applyMatrix4(Fv),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,f=u.index,p=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let M=0,b=y.length;M<b;M++){const x=y[M],_=d[x.materialIndex],L=Math.max(x.start,S.start),w=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let C=L,z=w;C<z;C+=3){const F=f.getX(C),N=f.getX(C+1),G=f.getX(C+2);l=Vu(this,_,e,r,h,g,v,F,N,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let x=M,_=b;x<_;x+=3){const L=f.getX(x),w=f.getX(x+1),C=f.getX(x+2);l=Vu(this,d,e,r,h,g,v,L,w,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let M=0,b=y.length;M<b;M++){const x=y[M],_=d[x.materialIndex],L=Math.max(x.start,S.start),w=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let C=L,z=w;C<z;C+=3){const F=C,N=C+1,G=C+2;l=Vu(this,_,e,r,h,g,v,F,N,G),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let x=M,_=b;x<_;x+=3){const L=x,w=x+1,C=x+2;l=Vu(this,d,e,r,h,g,v,L,w,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function $T(s,e,i,r,l,u,d,f){let p;if(e.side===Gn?p=r.intersectTriangle(d,u,l,!0,f):p=r.intersectTriangle(l,u,d,e.side===Wa,f),p===null)return null;Hu.copy(f),Hu.applyMatrix4(s.matrixWorld);const h=i.ray.origin.distanceTo(Hu);return h<i.near||h>i.far?null:{distance:h,point:Hu.clone(),object:s}}function Vu(s,e,i,r,l,u,d,f,p,h){s.getVertexPosition(f,Bu),s.getVertexPosition(p,Fu),s.getVertexPosition(h,zu);const g=$T(s,e,i,r,Bu,Fu,zu,Iv);if(g){const v=new le;Si.getBarycoord(Iv,Bu,Fu,zu,v),l&&(g.uv=Si.getInterpolatedAttribute(l,f,p,h,v,new Dt)),u&&(g.uv1=Si.getInterpolatedAttribute(u,f,p,h,v,new Dt)),d&&(g.normal=Si.getInterpolatedAttribute(d,f,p,h,v,new le),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:f,b:p,c:h,normal:new le,materialIndex:0};Si.getNormal(Bu,Fu,zu,y.normal),g.face=y,g.barycoord=v}return g}class Fs extends Ur{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const f=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const p=[],h=[],g=[],v=[];let y=0,S=0;M("z","y","x",-1,-1,r,i,e,d,u,0),M("z","y","x",1,-1,r,i,-e,d,u,1),M("x","z","y",1,1,e,r,i,l,d,2),M("x","z","y",1,-1,e,r,-i,l,d,3),M("x","y","z",1,-1,e,i,r,l,u,4),M("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Ar(h,3)),this.setAttribute("normal",new Ar(g,3)),this.setAttribute("uv",new Ar(v,2));function M(b,x,_,L,w,C,z,F,N,G,A){const T=C/N,O=z/G,H=C/2,q=z/2,$=F/2,ce=N+1,W=G+1;let ae=0,Q=0;const ye=new le;for(let P=0;P<W;P++){const ie=P*O-q;for(let Te=0;Te<ce;Te++){const Re=Te*T-H;ye[b]=Re*L,ye[x]=ie*w,ye[_]=$,h.push(ye.x,ye.y,ye.z),ye[b]=0,ye[x]=0,ye[_]=F>0?1:-1,g.push(ye.x,ye.y,ye.z),v.push(Te/N),v.push(1-P/G),ae+=1}}for(let P=0;P<G;P++)for(let ie=0;ie<N;ie++){const Te=y+ie+ce*P,Re=y+ie+ce*(P+1),Y=y+(ie+1)+ce*(P+1),he=y+(ie+1)+ce*P;p.push(Te,Re,he),p.push(Re,Y,he),Q+=6}f.addGroup(S,Q,A),S+=Q,y+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=Os(s[i]);for(const l in r)e[l]=r[l]}return e}function eA(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function sy(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const tA={clone:Os,merge:Bn};var nA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nA,this.fragmentShader=iA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=eA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class oy extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=oa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new le,Hv=new Dt,Vv=new Dt;class ci extends oy{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yh*2*Math.atan(Math.tan(Cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,Hv,Vv),i.subVectors(Vv,Hv)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Cd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,h=d.fullHeight;u+=d.offsetX*l/p,i-=d.offsetY*r/h,l*=d.width/p,r*=d.height/h}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,Ms=1;class aA extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(xs,Ms,e,i);l.layers=this.layers,this.add(l);const u=new ci(xs,Ms,e,i);u.layers=this.layers,this.add(u);const d=new ci(xs,Ms,e,i);d.layers=this.layers,this.add(d);const f=new ci(xs,Ms,e,i);f.layers=this.layers,this.add(f);const p=new ci(xs,Ms,e,i);p.layers=this.layers,this.add(p);const h=new ci(xs,Ms,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,f,p]=i;for(const h of i)this.remove(h);if(e===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,p,h,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,f),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,y,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class ly extends kn{constructor(e,i,r,l,u,d,f,p,h,g){e=e!==void 0?e:[],i=i!==void 0?i:Cs,super(e,i,r,l,u,d,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rA extends wr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ly(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fs(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Va});u.uniforms.tEquirect.value=i;const d=new Li(l,u),f=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ui),new aA(1,10,this).update(e,d),i.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Gu extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class Kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const b of e.hand.values()){const x=i.getJointPose(b,r),_=this._getHandJoint(h,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,M=.005;h.inputState.pinching&&y>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Gu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class oA extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Qd=new le,lA=new le,uA=new ut;class Sr{constructor(e=new le(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Qd.subVectors(r,i).cross(lA.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Qd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||uA.getNormalMatrix(e),l=this.coplanarPoint(Qd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new pp,ku=new le;class mp{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(i),f[2].copy(r),f[3].copy(l),f[4].copy(u),f[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=oa){const r=this.planes,l=e.elements,u=l[0],d=l[1],f=l[2],p=l[3],h=l[4],g=l[5],v=l[6],y=l[7],S=l[8],M=l[9],b=l[10],x=l[11],_=l[12],L=l[13],w=l[14],C=l[15];if(r[0].setComponents(p-u,y-h,x-S,C-_).normalize(),r[1].setComponents(p+u,y+h,x+S,C+_).normalize(),r[2].setComponents(p+d,y+g,x+M,C+L).normalize(),r[3].setComponents(p-d,y-g,x-M,C-L).normalize(),r[4].setComponents(p-f,y-v,x-b,C-w).normalize(),i===oa)r[5].setComponents(p+f,y+v,x+b,C+w).normalize();else if(i===ic)r[5].setComponents(f,v,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ku.x=l.normal.x>0?e.max.x:e.min.x,ku.y=l.normal.y>0?e.max.y:e.min.y,ku.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ku)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uy extends kn{constructor(e,i,r,l,u,d,f,p,h,g=As){if(g!==As&&g!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===As&&(r=Rr),r===void 0&&g===Ls&&(r=Us),super(null,l,u,d,f,p,g,r,h),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=f!==void 0?f:Mi,this.minFilter=p!==void 0?p:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cc extends Ur{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,f=Math.floor(r),p=Math.floor(l),h=f+1,g=p+1,v=e/f,y=i/p,S=[],M=[],b=[],x=[];for(let _=0;_<g;_++){const L=_*y-d;for(let w=0;w<h;w++){const C=w*v-u;M.push(C,-L,0),b.push(0,0,1),x.push(w/f),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<f;L++){const w=L+h*_,C=L+h*(_+1),z=L+1+h*(_+1),F=L+1+h*_;S.push(w,C,F),S.push(C,z,F)}this.setIndex(S),this.setAttribute("position",new Ar(M,3)),this.setAttribute("normal",new Ar(b,3)),this.setAttribute("uv",new Ar(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}class cA extends nl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q0,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fA extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dA extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cy extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Jd=new Qt,Gv=new le,kv=new le;class hA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),kv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(kv),i.updateMatrixWorld(),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fy extends oy{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,d=u+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class pA extends hA{constructor(){super(new fy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mA extends cy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new pA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gA extends cy{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class _A extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Wv(s,e,i,r){const l=vA(r);switch(i){case W0:return s*e;case q0:return s*e;case j0:return s*e*2;case Y0:return s*e/l.components*l.byteLength;case cp:return s*e/l.components*l.byteLength;case Z0:return s*e*2/l.components*l.byteLength;case fp:return s*e*2/l.components*l.byteLength;case X0:return s*e*3/l.components*l.byteLength;case xi:return s*e*4/l.components*l.byteLength;case dp:return s*e*4/l.components*l.byteLength;case Zu:case Ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qu:case Ju:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Eh:case Th:return Math.max(s,16)*Math.max(e,8)/4;case Mh:case bh:return Math.max(s,8)*Math.max(e,8)/2;case Ah:case Rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $u:case kh:case Wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case K0:case Xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qh:case jh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vA(s){switch(s){case ca:case V0:return{byteLength:1,components:1};case jo:case G0:case Jo:return{byteLength:2,components:1};case lp:case up:return{byteLength:2,components:4};case Rr:case op:case sa:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dy(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function yA(s){const e=new WeakMap;function i(f,p){const h=f.array,g=f.usage,v=h.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,h,g),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,h){const g=p.array,v=p.updateRanges;if(s.bindBuffer(h,f),v.length===0)s.bufferSubData(h,0,g);else{v.sort((S,M)=>S.start-M.start);let y=0;for(let S=1;S<v.length;S++){const M=v[y],b=v[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++y,v[y]=b)}v.length=y+1;for(let S=0,M=v.length;S<M;S++){const b=v[S];s.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,i(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:l,remove:u,update:d}}var SA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,WA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KA="gl_FragColor = linearToOutputTexel( gl_FragColor );",QA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:SA,alphahash_pars_fragment:xA,alphamap_fragment:MA,alphamap_pars_fragment:EA,alphatest_fragment:bA,alphatest_pars_fragment:TA,aomap_fragment:AA,aomap_pars_fragment:RA,batching_pars_vertex:wA,batching_vertex:CA,begin_vertex:DA,beginnormal_vertex:UA,bsdfs:LA,iridescence_fragment:NA,bumpmap_pars_fragment:OA,clipping_planes_fragment:PA,clipping_planes_pars_fragment:BA,clipping_planes_pars_vertex:FA,clipping_planes_vertex:zA,color_fragment:IA,color_pars_fragment:HA,color_pars_vertex:VA,color_vertex:GA,common:kA,cube_uv_reflection_fragment:WA,defaultnormal_vertex:XA,displacementmap_pars_vertex:qA,displacementmap_vertex:jA,emissivemap_fragment:YA,emissivemap_pars_fragment:ZA,colorspace_fragment:KA,colorspace_pars_fragment:QA,envmap_fragment:JA,envmap_common_pars_fragment:$A,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:d1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:c1,lights_pars_begin:f1,lights_toon_fragment:h1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:v1,lights_fragment_begin:y1,lights_fragment_maps:S1,lights_fragment_end:x1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:T1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:w1,map_particle_pars_fragment:C1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:O1,morphtarget_pars_vertex:P1,morphtarget_vertex:B1,normal_fragment_begin:F1,normal_fragment_maps:z1,normal_pars_fragment:I1,normal_pars_vertex:H1,normal_vertex:V1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:W1,clearcoat_pars_fragment:X1,iridescence_pars_fragment:q1,opaque_fragment:j1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:eR,shadowmap_pars_fragment:tR,shadowmap_pars_vertex:nR,shadowmap_vertex:iR,shadowmask_pars_fragment:aR,skinbase_vertex:rR,skinning_pars_vertex:sR,skinning_vertex:oR,skinnormal_vertex:lR,specularmap_fragment:uR,specularmap_pars_fragment:cR,tonemapping_fragment:fR,tonemapping_pars_fragment:dR,transmission_fragment:hR,transmission_pars_fragment:pR,uv_pars_fragment:mR,uv_pars_vertex:gR,uv_vertex:_R,worldpos_vertex:vR,background_vert:yR,background_frag:SR,backgroundCube_vert:xR,backgroundCube_frag:MR,cube_vert:ER,cube_frag:bR,depth_vert:TR,depth_frag:AR,distanceRGBA_vert:RR,distanceRGBA_frag:wR,equirect_vert:CR,equirect_frag:DR,linedashed_vert:UR,linedashed_frag:LR,meshbasic_vert:NR,meshbasic_frag:OR,meshlambert_vert:PR,meshlambert_frag:BR,meshmatcap_vert:FR,meshmatcap_frag:zR,meshnormal_vert:IR,meshnormal_frag:HR,meshphong_vert:VR,meshphong_frag:GR,meshphysical_vert:kR,meshphysical_frag:WR,meshtoon_vert:XR,meshtoon_frag:qR,points_vert:jR,points_frag:YR,shadow_vert:ZR,shadow_frag:KR,sprite_vert:QR,sprite_frag:JR},Oe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Di={basic:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Bn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Bn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Bn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Bn([Oe.points,Oe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Bn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Bn([Oe.common,Oe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Bn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Bn([Oe.sprite,Oe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Bn([Oe.common,Oe.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Bn([Oe.lights,Oe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:Bn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Wu={r:0,b:0,g:0},gr=new Oi,$R=new Qt;function ew(s,e,i,r,l,u,d){const f=new Ct(0);let p=u===!0?0:1,h,g,v=null,y=0,S=null;function M(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?i:e).get(C)),C}function b(w){let C=!1;const z=M(w);z===null?_(f,p):z&&z.isColor&&(_(z,1),C=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(w,C){const z=M(C);z&&(z.isCubeTexture||z.mapping===uc)?(g===void 0&&(g=new Li(new Fs(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Os(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,N,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(C.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($R.makeRotationFromEuler(gr)),g.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Bt,(v!==z||y!==z.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=z,y=z.version,S=s.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new Li(new cc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Os(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||S!==s.toneMapping)&&(h.material.needsUpdate=!0,v=z,y=z.version,S=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function _(w,C){w.getRGB(Wu,sy(s)),r.buffers.color.setClear(Wu.r,Wu.g,Wu.b,C,d)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,C=1){f.set(w),p=C,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,_(f,p)},render:b,addToRenderList:x,dispose:L}}function tw(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,d=!1;function f(T,O,H,q,$){let ce=!1;const W=v(q,H,O);u!==W&&(u=W,h(u.object)),ce=S(T,q,H,$),ce&&M(T,q,H,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,C(T,O,H,q),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return s.createVertexArray()}function h(T){return s.bindVertexArray(T)}function g(T){return s.deleteVertexArray(T)}function v(T,O,H){const q=H.wireframe===!0;let $=r[T.id];$===void 0&&($={},r[T.id]=$);let ce=$[O.id];ce===void 0&&(ce={},$[O.id]=ce);let W=ce[q];return W===void 0&&(W=y(p()),ce[q]=W),W}function y(T){const O=[],H=[],q=[];for(let $=0;$<i;$++)O[$]=0,H[$]=0,q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:q,object:T,attributes:{},index:null}}function S(T,O,H,q){const $=u.attributes,ce=O.attributes;let W=0;const ae=H.getAttributes();for(const Q in ae)if(ae[Q].location>=0){const P=$[Q];let ie=ce[Q];if(ie===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor)),P===void 0||P.attribute!==ie||ie&&P.data!==ie.data)return!0;W++}return u.attributesNum!==W||u.index!==q}function M(T,O,H,q){const $={},ce=O.attributes;let W=0;const ae=H.getAttributes();for(const Q in ae)if(ae[Q].location>=0){let P=ce[Q];P===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(P=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(P=T.instanceColor));const ie={};ie.attribute=P,P&&P.data&&(ie.data=P.data),$[Q]=ie,W++}u.attributes=$,u.attributesNum=W,u.index=q}function b(){const T=u.newAttributes;for(let O=0,H=T.length;O<H;O++)T[O]=0}function x(T){_(T,0)}function _(T,O){const H=u.newAttributes,q=u.enabledAttributes,$=u.attributeDivisors;H[T]=1,q[T]===0&&(s.enableVertexAttribArray(T),q[T]=1),$[T]!==O&&(s.vertexAttribDivisor(T,O),$[T]=O)}function L(){const T=u.newAttributes,O=u.enabledAttributes;for(let H=0,q=O.length;H<q;H++)O[H]!==T[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function w(T,O,H,q,$,ce,W){W===!0?s.vertexAttribIPointer(T,O,H,$,ce):s.vertexAttribPointer(T,O,H,q,$,ce)}function C(T,O,H,q){b();const $=q.attributes,ce=H.getAttributes(),W=O.defaultAttributeValues;for(const ae in ce){const Q=ce[ae];if(Q.location>=0){let ye=$[ae];if(ye===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(ye=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(ye=T.instanceColor)),ye!==void 0){const P=ye.normalized,ie=ye.itemSize,Te=e.get(ye);if(Te===void 0)continue;const Re=Te.buffer,Y=Te.type,he=Te.bytesPerElement,Se=Y===s.INT||Y===s.UNSIGNED_INT||ye.gpuType===op;if(ye.isInterleavedBufferAttribute){const be=ye.data,Me=be.stride,Ve=ye.offset;if(be.isInstancedInterleavedBuffer){for(let De=0;De<Q.locationSize;De++)_(Q.location+De,be.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let De=0;De<Q.locationSize;De++)x(Q.location+De);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let De=0;De<Q.locationSize;De++)w(Q.location+De,ie/Q.locationSize,Y,P,Me*he,(Ve+ie/Q.locationSize*De)*he,Se)}else{if(ye.isInstancedBufferAttribute){for(let be=0;be<Q.locationSize;be++)_(Q.location+be,ye.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let be=0;be<Q.locationSize;be++)x(Q.location+be);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let be=0;be<Q.locationSize;be++)w(Q.location+be,ie/Q.locationSize,Y,P,ie*he,ie/Q.locationSize*be*he,Se)}}else if(W!==void 0){const P=W[ae];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(Q.location,P);break;case 3:s.vertexAttrib3fv(Q.location,P);break;case 4:s.vertexAttrib4fv(Q.location,P);break;default:s.vertexAttrib1fv(Q.location,P)}}}}L()}function z(){G();for(const T in r){const O=r[T];for(const H in O){const q=O[H];for(const $ in q)g(q[$].object),delete q[$];delete O[H]}delete r[T]}}function F(T){if(r[T.id]===void 0)return;const O=r[T.id];for(const H in O){const q=O[H];for(const $ in q)g(q[$].object),delete q[$];delete O[H]}delete r[T.id]}function N(T){for(const O in r){const H=r[O];if(H[T.id]===void 0)continue;const q=H[T.id];for(const $ in q)g(q[$].object),delete q[$];delete H[T.id]}}function G(){A(),d=!0,u!==l&&(u=l,h(u.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:L}}function nw(s,e,i){let r;function l(h){r=h}function u(h,g){s.drawArrays(r,h,g),i.update(g,r,1)}function d(h,g,v){v!==0&&(s.drawArraysInstanced(r,h,g,v),i.update(g,r,v))}function f(h,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];i.update(S,r,1)}function p(h,g,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)d(h[M],g[M],y[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,g,0,y,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*y[b];i.update(M,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function iw(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(N){return!(N!==xi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const G=N===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ca&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==sa&&!G)}function p(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=p(h);g!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=M>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:w,maxFragmentUniforms:C,vertexTextures:z,maxSamples:F}}function aw(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,f=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||l;return l=y,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,S){const M=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!l||M===null||M.length===0||u&&!x)u?g(null):h();else{const L=u?0:r,w=L*4;let C=_.clippingState||null;p.value=C,C=g(M,y,w,S);for(let z=0;z!==w;++z)C[z]=i[z];_.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function h(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,S,M){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=p.value,M!==!0||x===null){const _=S+b*4,L=y.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let w=0,C=S;w!==b;++w,C+=4)d.copy(v[w]).applyMatrix4(L,f),d.normal.toArray(x,C),x[C+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function rw(s){let e=new WeakMap;function i(d,f){return f===vh?d.mapping=Cs:f===yh&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===vh||f===yh)if(e.has(d)){const p=e.get(d).texture;return i(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const h=new rA(p.height);return h.fromEquirectangularTexture(s,d),e.set(d,h),d.addEventListener("dispose",l),i(h.texture,d.mapping)}else return null}}return d}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const bs=4,Xv=[.125,.215,.35,.446,.526,.582],Er=20,$d=new fy,qv=new Ct;let eh=null,th=0,nh=0,ih=!1;const xr=(1+Math.sqrt(5))/2,Es=1/xr,jv=[new le(-xr,Es,0),new le(xr,Es,0),new le(-Es,0,xr),new le(Es,0,xr),new le(0,xr,-Es),new le(0,xr,Es),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)],sw=new le;class Yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:f=sw}=u;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,f),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Xu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Cs||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Jo,format:xi,colorSpace:Ns,depthBuffer:!1},l=Zv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ow(u)),this._blurMaterial=lw(u,e,i)}return l}_compileMaterial(e){const i=new Li(this._lodPlanes[0],e);this._renderer.compile(i,$d)}_sceneToCubeUV(e,i,r,l,u){const p=new ci(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(qv),v.toneMapping=Ga,v.autoClear=!1;const M=new iy({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),b=new Li(new Fs,M);let x=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,x=!0):(M.color.copy(qv),x=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(p.up.set(0,h[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[L],u.y,u.z)):w===1?(p.up.set(0,0,h[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[L],u.z)):(p.up.set(0,h[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[L]));const C=this._cubeSize;Xu(l,w*C,L>2?C:0,C,C),v.setRenderTarget(l),x&&v.render(b,p),v.render(e,p)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=y,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Cs||e.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Li(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const p=this._cubeSize;Xu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(d,$d)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=jv[(l-u-1)%jv.length];this._blur(e,u-1,u,d,f)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,f){const p=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Li(this._lodPlanes[l],h),y=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Er-1),b=u/M,x=isFinite(u)?1+Math.floor(g*b):Er;x>Er&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Er}`);const _=[];let L=0;for(let N=0;N<Er;++N){const G=N/b,A=Math.exp(-G*G/2);_.push(A),N===0?L+=A:N<x&&(L+=2*A)}for(let N=0;N<_.length;N++)_[N]=_[N]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=d==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:w}=this;y.dTheta.value=M,y.mipInt.value=w-r;const C=this._sizeLods[l],z=3*C*(l>w-bs?l-w+bs:0),F=4*(this._cubeSize-C);Xu(i,z,F,3*C,2*C),p.setRenderTarget(i),p.render(v,$d)}}function ow(s){const e=[],i=[],r=[];let l=s;const u=s-bs+1+Xv.length;for(let d=0;d<u;d++){const f=Math.pow(2,l);i.push(f);let p=1/f;d>s-bs?p=Xv[d-s+bs-1]:d===0&&(p=0),r.push(p);const h=1/(f-2),g=-h,v=1+h,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,b=3,x=2,_=1,L=new Float32Array(b*M*S),w=new Float32Array(x*M*S),C=new Float32Array(_*M*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,G=F>2?0:-1,A=[N,G,0,N+2/3,G,0,N+2/3,G+1,0,N,G,0,N+2/3,G+1,0,N,G+1,0];L.set(A,b*M*F),w.set(y,x*M*F);const T=[F,F,F,F,F,F];C.set(T,_*M*F)}const z=new Ur;z.setAttribute("position",new Ni(L,b)),z.setAttribute("uv",new Ni(w,x)),z.setAttribute("faceIndex",new Ni(C,_)),e.push(z),l>bs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Zv(s,e,i){const r=new wr(s,e,i);return r.texture.mapping=uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xu(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function lw(s,e,i){const r=new Float32Array(Er),l=new le(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Kv(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function Qv(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function gp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uw(s){let e=new WeakMap,i=null;function r(f){if(f&&f.isTexture){const p=f.mapping,h=p===vh||p===yh,g=p===Cs||p===Ds;if(h||g){let v=e.get(f);const y=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==y)return i===null&&(i=new Yv(s)),v=h?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return h&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Yv(s)),v=h?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function l(f){let p=0;const h=6;for(let g=0;g<h;g++)f[g]!==void 0&&p++;return p===h}function u(f){const p=f.target;p.removeEventListener("dispose",u);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function cw(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&yr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function fw(s,e,i,r){const l={},u=new WeakMap;function d(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",d),delete l[y.id];const S=u.get(y);S&&(e.remove(S),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function f(v,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function h(v){const y=[],S=v.index,M=v.attributes.position;let b=0;if(S!==null){const L=S.array;b=S.version;for(let w=0,C=L.length;w<C;w+=3){const z=L[w+0],F=L[w+1],N=L[w+2];y.push(z,F,F,N,N,z)}}else if(M!==void 0){const L=M.array;b=M.version;for(let w=0,C=L.length/3-1;w<C;w+=3){const z=w+0,F=w+1,N=w+2;y.push(z,F,F,N,N,z)}}else return;const x=new($0(y)?ry:ay)(y,1);x.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,x)}function g(v){const y=u.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&h(v)}else h(v);return u.get(v)}return{get:f,update:p,getWireframeAttribute:g}}function dw(s,e,i){let r;function l(y){r=y}let u,d;function f(y){u=y.type,d=y.bytesPerElement}function p(y,S){s.drawElements(r,S,u,y*d),i.update(S,r,1)}function h(y,S,M){M!==0&&(s.drawElementsInstanced(r,S,u,y*d,M),i.update(S,r,M))}function g(y,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,y,0,M);let x=0;for(let _=0;_<M;_++)x+=S[_];i.update(x,r,1)}function v(y,S,M,b){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)h(y[_]/d,S[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,u,y,0,b,0,M);let _=0;for(let L=0;L<M;L++)_+=S[L]*b[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function hw(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=f*(u/3);break;case s.LINES:i.lines+=f*(u/2);break;case s.LINE_STRIP:i.lines+=f*(u-1);break;case s.LINE_LOOP:i.lines+=f*u;break;case s.POINTS:i.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function pw(s,e,i){const r=new WeakMap,l=new Kt;function u(d,f,p){const h=d.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(f);if(y===void 0||y.count!==v){let T=function(){G.dispose(),r.delete(f),f.removeEventListener("dispose",T)};var S=T;y!==void 0&&y.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),x===!0&&(C=3);let z=f.attributes.position.count*C,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const N=new Float32Array(z*F*4*v),G=new ey(N,z,F,v);G.type=sa,G.needsUpdate=!0;const A=C*4;for(let O=0;O<v;O++){const H=_[O],q=L[O],$=w[O],ce=z*F*4*O;for(let W=0;W<H.count;W++){const ae=W*A;M===!0&&(l.fromBufferAttribute(H,W),N[ce+ae+0]=l.x,N[ce+ae+1]=l.y,N[ce+ae+2]=l.z,N[ce+ae+3]=0),b===!0&&(l.fromBufferAttribute(q,W),N[ce+ae+4]=l.x,N[ce+ae+5]=l.y,N[ce+ae+6]=l.z,N[ce+ae+7]=0),x===!0&&(l.fromBufferAttribute($,W),N[ce+ae+8]=l.x,N[ce+ae+9]=l.y,N[ce+ae+10]=l.z,N[ce+ae+11]=$.itemSize===4?l.w:1)}}y={count:v,texture:G,size:new Dt(z,F)},r.set(f,y),f.addEventListener("dispose",T)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function mw(s,e,i,r){let l=new WeakMap;function u(p){const h=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==h&&(e.update(v),l.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==h&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,h))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==h&&(y.update(),l.set(y,h))}return v}function d(){l=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:u,dispose:d}}const hy=new kn,Jv=new uy(1,1),py=new ey,my=new VT,gy=new ly,$v=[],e0=[],t0=new Float32Array(16),n0=new Float32Array(9),i0=new Float32Array(4);function zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=$v[l];if(u===void 0&&(u=new Float32Array(l),$v[l]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=i,s[d].toArray(u,f)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function fc(s,e){let i=e0[e];i===void 0&&(i=new Int32Array(e),e0[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function gw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function _w(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function vw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function yw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function Sw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;i0.set(r),s.uniformMatrix2fv(this.addr,!1,i0),dn(i,r)}}function xw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;n0.set(r),s.uniformMatrix3fv(this.addr,!1,n0),dn(i,r)}}function Mw(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;t0.set(r),s.uniformMatrix4fv(this.addr,!1,t0),dn(i,r)}}function Ew(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function bw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function Tw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function Aw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function Rw(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function ww(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function Cw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function Dw(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function Uw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(Jv.compareFunction=J0,u=Jv):u=hy,i.setTexture2D(e||u,l)}function Lw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||my,l)}function Nw(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||gy,l)}function Ow(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||py,l)}function Pw(s){switch(s){case 5126:return gw;case 35664:return _w;case 35665:return vw;case 35666:return yw;case 35674:return Sw;case 35675:return xw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return bw;case 35668:case 35672:return Tw;case 35669:case 35673:return Aw;case 5125:return Rw;case 36294:return ww;case 36295:return Cw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Ow}}function Bw(s,e){s.uniform1fv(this.addr,e)}function Fw(s,e){const i=zs(e,this.size,2);s.uniform2fv(this.addr,i)}function zw(s,e){const i=zs(e,this.size,3);s.uniform3fv(this.addr,i)}function Iw(s,e){const i=zs(e,this.size,4);s.uniform4fv(this.addr,i)}function Hw(s,e){const i=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Vw(s,e){const i=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Gw(s,e){const i=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function kw(s,e){s.uniform1iv(this.addr,e)}function Ww(s,e){s.uniform2iv(this.addr,e)}function Xw(s,e){s.uniform3iv(this.addr,e)}function qw(s,e){s.uniform4iv(this.addr,e)}function jw(s,e){s.uniform1uiv(this.addr,e)}function Yw(s,e){s.uniform2uiv(this.addr,e)}function Zw(s,e){s.uniform3uiv(this.addr,e)}function Kw(s,e){s.uniform4uiv(this.addr,e)}function Qw(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||hy,u[d])}function Jw(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||my,u[d])}function $w(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||gy,u[d])}function eC(s,e,i){const r=this.cache,l=e.length,u=fc(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||py,u[d])}function tC(s){switch(s){case 5126:return Bw;case 35664:return Fw;case 35665:return zw;case 35666:return Iw;case 35674:return Hw;case 35675:return Vw;case 35676:return Gw;case 5124:case 35670:return kw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return qw;case 5125:return jw;case 36294:return Yw;case 36295:return Zw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return eC}}class nC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Pw(i.type)}}class iC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tC(i.type)}}class aC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const f=l[u];f.setValue(e,i[f.id],r)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function a0(s,e){s.seq.push(e),s.map[e.id]=e}function rC(s,e,i){const r=s.name,l=r.length;for(ah.lastIndex=0;;){const u=ah.exec(r),d=ah.lastIndex;let f=u[1];const p=u[2]==="]",h=u[3];if(p&&(f=f|0),h===void 0||h==="["&&d+2===l){a0(i,h===void 0?new nC(f,s,e):new iC(f,s,e));break}else{let v=i.map[f];v===void 0&&(v=new aC(f),a0(i,v)),i=v}}}class ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);rC(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const f=i[u],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function r0(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const sC=37297;let oC=0;function lC(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${i[d]}`)}return r.join(`
`)}const s0=new ut;function uC(s){Rt._getMatrix(s0,Rt.workingColorSpace,s);const e=`mat3( ${s0.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function o0(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+lC(s.getShaderSource(e),d)}else return l}function cC(s,e){const i=uC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function fC(s,e){let i;switch(e){case hT:i="Linear";break;case pT:i="Reinhard";break;case mT:i="Cineon";break;case gT:i="ACESFilmic";break;case vT:i="AgX";break;case yT:i="Neutral";break;case _T:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qu=new le;function dC(){Rt.getLuminanceCoefficients(qu);const s=qu.x.toFixed(4),e=qu.y.toFixed(4),i=qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function pC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function mC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return i}function Wo(s){return s!==""}function l0(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(s){return s.replace(gC,vC)}const _C=new Map;function vC(s,e){let i=ct[e];if(i===void 0){const r=_C.get(e);if(r!==void 0)i=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Zh(i)}const yC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(s){return s.replace(yC,SC)}function SC(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function f0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===z0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qb?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function MC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ds:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ds:e="ENVMAP_MODE_REFRACTION";break}return e}function bC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case I0:e="ENVMAP_BLENDING_MULTIPLY";break;case fT:e="ENVMAP_BLENDING_MIX";break;case dT:e="ENVMAP_BLENDING_ADD";break}return e}function TC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function AC(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,f=i.fragmentShader;const p=xC(i),h=MC(i),g=EC(i),v=bC(i),y=TC(i),S=hC(i),M=pC(u),b=l.createProgram();let x,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Wo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(x=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[f0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ct.tonemapping_pars_fragment:"",i.toneMapping!==Ga?fC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,cC("linearToOutputTexel",i.outputColorSpace),dC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=Zh(d),d=l0(d,i),d=u0(d,i),f=Zh(f),f=l0(f,i),f=u0(f,i),d=c0(d),f=c0(f),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=L+x+d,C=L+_+f,z=r0(l,l.VERTEX_SHADER,w),F=r0(l,l.FRAGMENT_SHADER,C);l.attachShader(b,z),l.attachShader(b,F),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function N(O){if(s.debug.checkShaderErrors){const H=l.getProgramInfoLog(b).trim(),q=l.getShaderInfoLog(z).trim(),$=l.getShaderInfoLog(F).trim();let ce=!0,W=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,z,F);else{const ae=o0(l,z,"vertex"),Q=o0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+ae+`
`+Q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(q===""||$==="")&&(W=!1);W&&(O.diagnostics={runnable:ce,programLog:H,vertexShader:{log:q,prefix:x},fragmentShader:{log:$,prefix:_}})}l.deleteShader(z),l.deleteShader(F),G=new ec(l,b),A=mC(l,b)}let G;this.getUniforms=function(){return G===void 0&&N(this),G};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(b,sC)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oC++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=F,this}let RC=0;class wC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new CC(e),i.set(e,r)),r}}class CC{constructor(e){this.id=RC++,this.code=e,this.usedTimes=0}}function DC(s,e,i,r,l,u,d){const f=new ty,p=new wC,h=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return h.add(A),A===0?"uv":`uv${A}`}function x(A,T,O,H,q){const $=H.fog,ce=q.geometry,W=A.isMeshStandardMaterial?H.environment:null,ae=(A.isMeshStandardMaterial?i:e).get(A.envMap||W),Q=ae&&ae.mapping===uc?ae.image.height:null,ye=M[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const P=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ie=P!==void 0?P.length:0;let Te=0;ce.morphAttributes.position!==void 0&&(Te=1),ce.morphAttributes.normal!==void 0&&(Te=2),ce.morphAttributes.color!==void 0&&(Te=3);let Re,Y,he,Se;if(ye){const Et=Di[ye];Re=Et.vertexShader,Y=Et.fragmentShader}else Re=A.vertexShader,Y=A.fragmentShader,p.update(A),he=p.getVertexShaderID(A),Se=p.getFragmentShaderID(A);const be=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Ve=q.isInstancedMesh===!0,De=q.isBatchedMesh===!0,dt=!!A.map,wt=!!A.matcap,rt=!!ae,k=!!A.aoMap,vn=!!A.lightMap,ot=!!A.bumpMap,ht=!!A.normalMap,qe=!!A.displacementMap,Ut=!!A.emissiveMap,je=!!A.metalnessMap,B=!!A.roughnessMap,R=A.anisotropy>0,se=A.clearcoat>0,me=A.dispersion>0,Ee=A.iridescence>0,ge=A.sheen>0,ke=A.transmission>0,Le=R&&!!A.anisotropyMap,ze=se&&!!A.clearcoatMap,gt=se&&!!A.clearcoatNormalMap,we=se&&!!A.clearcoatRoughnessMap,Ie=Ee&&!!A.iridescenceMap,Je=Ee&&!!A.iridescenceThicknessMap,We=ge&&!!A.sheenColorMap,He=ge&&!!A.sheenRoughnessMap,st=!!A.specularMap,Ke=!!A.specularColorMap,Lt=!!A.specularIntensityMap,Z=ke&&!!A.transmissionMap,Pe=ke&&!!A.thicknessMap,ue=!!A.gradientMap,ve=!!A.alphaMap,Ue=A.alphaTest>0,Ne=!!A.alphaHash,et=!!A.extensions;let Vt=Ga;A.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const rn={shaderID:ye,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:Y,defines:A.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:De,batchingColor:De&&q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&q.instanceColor!==null,instancingMorph:Ve&&q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:be===null?s.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ns,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:wt,envMap:rt,envMapMode:rt&&ae.mapping,envMapCubeUVHeight:Q,aoMap:k,lightMap:vn,bumpMap:ot,normalMap:ht,displacementMap:y&&qe,emissiveMap:Ut,normalMapObjectSpace:ht&&A.normalMapType===ET,normalMapTangentSpace:ht&&A.normalMapType===Q0,metalnessMap:je,roughnessMap:B,anisotropy:R,anisotropyMap:Le,clearcoat:se,clearcoatMap:ze,clearcoatNormalMap:gt,clearcoatRoughnessMap:we,dispersion:me,iridescence:Ee,iridescenceMap:Ie,iridescenceThicknessMap:Je,sheen:ge,sheenColorMap:We,sheenRoughnessMap:He,specularMap:st,specularColorMap:Ke,specularIntensityMap:Lt,transmission:ke,transmissionMap:Z,thicknessMap:Pe,gradientMap:ue,opaque:A.transparent===!1&&A.blending===Ts&&A.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ue,alphaHash:Ne,combine:A.combine,mapUv:dt&&b(A.map.channel),aoMapUv:k&&b(A.aoMap.channel),lightMapUv:vn&&b(A.lightMap.channel),bumpMapUv:ot&&b(A.bumpMap.channel),normalMapUv:ht&&b(A.normalMap.channel),displacementMapUv:qe&&b(A.displacementMap.channel),emissiveMapUv:Ut&&b(A.emissiveMap.channel),metalnessMapUv:je&&b(A.metalnessMap.channel),roughnessMapUv:B&&b(A.roughnessMap.channel),anisotropyMapUv:Le&&b(A.anisotropyMap.channel),clearcoatMapUv:ze&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:gt&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:We&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&b(A.sheenRoughnessMap.channel),specularMapUv:st&&b(A.specularMap.channel),specularColorMapUv:Ke&&b(A.specularColorMap.channel),specularIntensityMapUv:Lt&&b(A.specularIntensityMap.channel),transmissionMapUv:Z&&b(A.transmissionMap.channel),thicknessMapUv:Pe&&b(A.thicknessMap.channel),alphaMapUv:ve&&b(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ht||R),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ce.attributes.uv&&(dt||ve),fog:!!$,useFog:A.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Me,skinning:q.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&Rt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ut&&A.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ra,flipSided:A.side===Gn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:et&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&A.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return rn.vertexUv1s=h.has(1),rn.vertexUv2s=h.has(2),rn.vertexUv3s=h.has(3),h.clear(),rn}function _(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)T.push(O),T.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(L(T,A),w(T,A),T.push(s.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function L(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function w(A,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),A.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reverseDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),A.push(f.mask)}function C(A){const T=M[A.type];let O;if(T){const H=Di[T];O=tA.clone(H.uniforms)}else O=A.uniforms;return O}function z(A,T){let O;for(let H=0,q=g.length;H<q;H++){const $=g[H];if($.cacheKey===T){O=$,++O.usedTimes;break}}return O===void 0&&(O=new AC(s,T,A,u),g.push(O)),O}function F(A){if(--A.usedTimes===0){const T=g.indexOf(A);g[T]=g[g.length-1],g.pop(),A.destroy()}}function N(A){p.remove(A)}function G(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:C,acquireProgram:z,releaseProgram:F,releaseShaderCache:N,programs:g,dispose:G}}function UC(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function l(d,f,p){s.get(d)[f]=p}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function LC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function d0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function h0(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(v,y,S,M,b,x){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:M,renderOrder:v.renderOrder,z:b,group:x},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=b,_.group=x),e++,_}function f(v,y,S,M,b,x){const _=d(v,y,S,M,b,x);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(v,y,S,M,b,x){const _=d(v,y,S,M,b,x);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function h(v,y){i.length>1&&i.sort(v||LC),r.length>1&&r.sort(y||d0),l.length>1&&l.sort(y||d0)}function g(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:f,unshift:p,finish:g,sort:h}}function NC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new h0,s.set(r,[d])):l>=u.length?(d=new h0,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function OC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new le,color:new Ct};break;case"SpotLight":i={position:new le,direction:new le,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new le,halfWidth:new le,halfHeight:new le};break}return s[e.id]=i,i}}}function PC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let BC=0;function FC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zC(s){const e=new OC,i=PC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new le);const l=new le,u=new Qt,d=new Qt;function f(h){let g=0,v=0,y=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let S=0,M=0,b=0,x=0,_=0,L=0,w=0,C=0,z=0,F=0,N=0;h.sort(FC);for(let A=0,T=h.length;A<T;A++){const O=h[A],H=O.color,q=O.intensity,$=O.distance,ce=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=H.r*q,v+=H.g*q,y+=H.b*q;else if(O.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(O.sh.coefficients[W],q);N++}else if(O.isDirectionalLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ae=O.shadow,Q=i.get(O);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,r.directionalShadow[S]=Q,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=O.shadow.matrix,L++}r.directional[S]=W,S++}else if(O.isSpotLight){const W=e.get(O);W.position.setFromMatrixPosition(O.matrixWorld),W.color.copy(H).multiplyScalar(q),W.distance=$,W.coneCos=Math.cos(O.angle),W.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),W.decay=O.decay,r.spot[b]=W;const ae=O.shadow;if(O.map&&(r.spotLightMap[z]=O.map,z++,ae.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[b]=ae.matrix,O.castShadow){const Q=i.get(O);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,r.spotShadow[b]=Q,r.spotShadowMap[b]=ce,C++}b++}else if(O.isRectAreaLight){const W=e.get(O);W.color.copy(H).multiplyScalar(q),W.halfWidth.set(O.width*.5,0,0),W.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=W,x++}else if(O.isPointLight){const W=e.get(O);if(W.color.copy(O.color).multiplyScalar(O.intensity),W.distance=O.distance,W.decay=O.decay,O.castShadow){const ae=O.shadow,Q=i.get(O);Q.shadowIntensity=ae.intensity,Q.shadowBias=ae.bias,Q.shadowNormalBias=ae.normalBias,Q.shadowRadius=ae.radius,Q.shadowMapSize=ae.mapSize,Q.shadowCameraNear=ae.camera.near,Q.shadowCameraFar=ae.camera.far,r.pointShadow[M]=Q,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=O.shadow.matrix,w++}r.point[M]=W,M++}else if(O.isHemisphereLight){const W=e.get(O);W.skyColor.copy(O.color).multiplyScalar(q),W.groundColor.copy(O.groundColor).multiplyScalar(q),r.hemi[_]=W,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==M||G.spotLength!==b||G.rectAreaLength!==x||G.hemiLength!==_||G.numDirectionalShadows!==L||G.numPointShadows!==w||G.numSpotShadows!==C||G.numSpotMaps!==z||G.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=x,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,G.directionalLength=S,G.pointLength=M,G.spotLength=b,G.rectAreaLength=x,G.hemiLength=_,G.numDirectionalShadows=L,G.numPointShadows=w,G.numSpotShadows=C,G.numSpotMaps=z,G.numLightProbes=N,r.version=BC++)}function p(h,g){let v=0,y=0,S=0,M=0,b=0;const x=g.matrixWorldInverse;for(let _=0,L=h.length;_<L;_++){const w=h[_];if(w.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),v++}else if(w.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),S++}else if(w.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),d.identity(),u.copy(w.matrixWorld),u.premultiply(x),d.extractRotation(u),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),M++}else if(w.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(x),y++}else if(w.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(x),b++}}}return{setup:f,setupView:p,state:r}}function p0(s){const e=new zC(s),i=[],r=[];function l(g){h.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function f(){e.setup(i)}function p(g){e.setupView(i,g)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:d}}function IC(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let f;return d===void 0?(f=new p0(s),e.set(l,[f])):u>=d.length?(f=new p0(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:i,dispose:r}}const HC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GC(s,e,i){let r=new mp;const l=new Dt,u=new Dt,d=new Kt,f=new fA({depthPacking:MT}),p=new dA,h={},g=i.maxTextureSize,v={[Wa]:Gn,[Gn]:Wa,[ra]:ra},y=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:HC,fragmentShader:VC}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ur;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Li(M,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=z0;let _=this.type;this.render=function(F,N,G){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const A=s.getRenderTarget(),T=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Va),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=_!==aa&&this.type===aa,$=_===aa&&this.type!==aa;for(let ce=0,W=F.length;ce<W;ce++){const ae=F[ce],Q=ae.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const ye=Q.getFrameExtents();if(l.multiply(ye),u.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ye.x),l.x=u.x*ye.x,Q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ye.y),l.y=u.y*ye.y,Q.mapSize.y=u.y)),Q.map===null||q===!0||$===!0){const ie=this.type!==aa?{minFilter:Mi,magFilter:Mi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new wr(l.x,l.y,ie),Q.map.texture.name=ae.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const P=Q.getViewportCount();for(let ie=0;ie<P;ie++){const Te=Q.getViewport(ie);d.set(u.x*Te.x,u.y*Te.y,u.x*Te.z,u.y*Te.w),H.viewport(d),Q.updateMatrices(ae,ie),r=Q.getFrustum(),C(N,G,Q.camera,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===aa&&L(Q,G),Q.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(A,T,O)};function L(F,N){const G=e.update(b);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new wr(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,G,y,b,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,G,S,b,null)}function w(F,N,G,A){let T=null;const O=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)T=O;else if(T=G.isPointLight===!0?p:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const H=T.uuid,q=N.uuid;let $=h[H];$===void 0&&($={},h[H]=$);let ce=$[q];ce===void 0&&(ce=T.clone(),$[q]=ce,N.addEventListener("dispose",z)),T=ce}if(T.visible=N.visible,T.wireframe=N.wireframe,A===aa?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:v[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=s.properties.get(T);H.light=G}return T}function C(F,N,G,A,T){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===aa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const q=e.update(F),$=F.material;if(Array.isArray($)){const ce=q.groups;for(let W=0,ae=ce.length;W<ae;W++){const Q=ce[W],ye=$[Q.materialIndex];if(ye&&ye.visible){const P=w(F,ye,A,T);F.onBeforeShadow(s,F,N,G,q,P,Q),s.renderBufferDirect(G,null,q,P,F,Q),F.onAfterShadow(s,F,N,G,q,P,Q)}}}else if($.visible){const ce=w(F,$,A,T);F.onBeforeShadow(s,F,N,G,q,ce,null),s.renderBufferDirect(G,null,q,ce,F,null),F.onAfterShadow(s,F,N,G,q,ce,null)}}const H=F.children;for(let q=0,$=H.length;q<$;q++)C(H[q],N,G,A,T)}function z(F){F.target.removeEventListener("dispose",z);for(const G in h){const A=h[G],T=F.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const kC={[fh]:dh,[hh]:gh,[ph]:_h,[ws]:mh,[dh]:fh,[gh]:hh,[_h]:ph,[mh]:ws};function WC(s,e){function i(){let Z=!1;const Pe=new Kt;let ue=null;const ve=new Kt(0,0,0,0);return{setMask:function(Ue){ue!==Ue&&!Z&&(s.colorMask(Ue,Ue,Ue,Ue),ue=Ue)},setLocked:function(Ue){Z=Ue},setClear:function(Ue,Ne,et,Vt,rn){rn===!0&&(Ue*=Vt,Ne*=Vt,et*=Vt),Pe.set(Ue,Ne,et,Vt),ve.equals(Pe)===!1&&(s.clearColor(Ue,Ne,et,Vt),ve.copy(Pe))},reset:function(){Z=!1,ue=null,ve.set(-1,0,0,0)}}}function r(){let Z=!1,Pe=!1,ue=null,ve=null,Ue=null;return{setReversed:function(Ne){if(Pe!==Ne){const et=e.get("EXT_clip_control");Pe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Ue;Ue=null,this.setClear(Vt)}Pe=Ne},getReversed:function(){return Pe},setTest:function(Ne){Ne?be(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Ne){ue!==Ne&&!Z&&(s.depthMask(Ne),ue=Ne)},setFunc:function(Ne){if(Pe&&(Ne=kC[Ne]),ve!==Ne){switch(Ne){case fh:s.depthFunc(s.NEVER);break;case dh:s.depthFunc(s.ALWAYS);break;case hh:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case ph:s.depthFunc(s.EQUAL);break;case mh:s.depthFunc(s.GEQUAL);break;case gh:s.depthFunc(s.GREATER);break;case _h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Ne}},setLocked:function(Ne){Z=Ne},setClear:function(Ne){Ue!==Ne&&(Pe&&(Ne=1-Ne),s.clearDepth(Ne),Ue=Ne)},reset:function(){Z=!1,ue=null,ve=null,Ue=null,Pe=!1}}}function l(){let Z=!1,Pe=null,ue=null,ve=null,Ue=null,Ne=null,et=null,Vt=null,rn=null;return{setTest:function(Et){Z||(Et?be(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Et){Pe!==Et&&!Z&&(s.stencilMask(Et),Pe=Et)},setFunc:function(Et,Dn,Un){(ue!==Et||ve!==Dn||Ue!==Un)&&(s.stencilFunc(Et,Dn,Un),ue=Et,ve=Dn,Ue=Un)},setOp:function(Et,Dn,Un){(Ne!==Et||et!==Dn||Vt!==Un)&&(s.stencilOp(Et,Dn,Un),Ne=Et,et=Dn,Vt=Un)},setLocked:function(Et){Z=Et},setClear:function(Et){rn!==Et&&(s.clearStencil(Et),rn=Et)},reset:function(){Z=!1,Pe=null,ue=null,ve=null,Ue=null,Ne=null,et=null,Vt=null,rn=null}}}const u=new i,d=new r,f=new l,p=new WeakMap,h=new WeakMap;let g={},v={},y=new WeakMap,S=[],M=null,b=!1,x=null,_=null,L=null,w=null,C=null,z=null,F=null,N=new Ct(0,0,0),G=0,A=!1,T=null,O=null,H=null,q=null,$=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ae=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Q)[1]),W=ae>=1):Q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),W=ae>=2);let ye=null,P={};const ie=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Re=new Kt().fromArray(ie),Y=new Kt().fromArray(Te);function he(Z,Pe,ue,ve){const Ue=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(Z,Ne),s.texParameteri(Z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ue;et++)Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(Pe+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Ne}const Se={};Se[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),be(s.DEPTH_TEST),d.setFunc(ws),ot(!1),ht(vv),be(s.CULL_FACE),k(Va);function be(Z){g[Z]!==!0&&(s.enable(Z),g[Z]=!0)}function Me(Z){g[Z]!==!1&&(s.disable(Z),g[Z]=!1)}function Ve(Z,Pe){return v[Z]!==Pe?(s.bindFramebuffer(Z,Pe),v[Z]=Pe,Z===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),Z===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function De(Z,Pe){let ue=S,ve=!1;if(Z){ue=y.get(Pe),ue===void 0&&(ue=[],y.set(Pe,ue));const Ue=Z.textures;if(ue.length!==Ue.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,et=Ue.length;Ne<et;Ne++)ue[Ne]=s.COLOR_ATTACHMENT0+Ne;ue.length=Ue.length,ve=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ue)}function dt(Z){return M!==Z?(s.useProgram(Z),M=Z,!0):!1}const wt={[Mr]:s.FUNC_ADD,[Yb]:s.FUNC_SUBTRACT,[Zb]:s.FUNC_REVERSE_SUBTRACT};wt[Kb]=s.MIN,wt[Qb]=s.MAX;const rt={[Jb]:s.ZERO,[$b]:s.ONE,[eT]:s.SRC_COLOR,[uh]:s.SRC_ALPHA,[sT]:s.SRC_ALPHA_SATURATE,[aT]:s.DST_COLOR,[nT]:s.DST_ALPHA,[tT]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[rT]:s.ONE_MINUS_DST_COLOR,[iT]:s.ONE_MINUS_DST_ALPHA,[oT]:s.CONSTANT_COLOR,[lT]:s.ONE_MINUS_CONSTANT_COLOR,[uT]:s.CONSTANT_ALPHA,[cT]:s.ONE_MINUS_CONSTANT_ALPHA};function k(Z,Pe,ue,ve,Ue,Ne,et,Vt,rn,Et){if(Z===Va){b===!0&&(Me(s.BLEND),b=!1);return}if(b===!1&&(be(s.BLEND),b=!0),Z!==jb){if(Z!==x||Et!==A){if((_!==Mr||C!==Mr)&&(s.blendEquation(s.FUNC_ADD),_=Mr,C=Mr),Et)switch(Z){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yv:s.blendFunc(s.ONE,s.ONE);break;case Sv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xv:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yv:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case xv:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}L=null,w=null,z=null,F=null,N.set(0,0,0),G=0,x=Z,A=Et}return}Ue=Ue||Pe,Ne=Ne||ue,et=et||ve,(Pe!==_||Ue!==C)&&(s.blendEquationSeparate(wt[Pe],wt[Ue]),_=Pe,C=Ue),(ue!==L||ve!==w||Ne!==z||et!==F)&&(s.blendFuncSeparate(rt[ue],rt[ve],rt[Ne],rt[et]),L=ue,w=ve,z=Ne,F=et),(Vt.equals(N)===!1||rn!==G)&&(s.blendColor(Vt.r,Vt.g,Vt.b,rn),N.copy(Vt),G=rn),x=Z,A=!1}function vn(Z,Pe){Z.side===ra?Me(s.CULL_FACE):be(s.CULL_FACE);let ue=Z.side===Gn;Pe&&(ue=!ue),ot(ue),Z.blending===Ts&&Z.transparent===!1?k(Va):k(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),u.setMask(Z.colorWrite);const ve=Z.stencilWrite;f.setTest(ve),ve&&(f.setMask(Z.stencilWriteMask),f.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),f.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Ut(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(Z){T!==Z&&(Z?s.frontFace(s.CW):s.frontFace(s.CCW),T=Z)}function ht(Z){Z!==Wb?(be(s.CULL_FACE),Z!==O&&(Z===vv?s.cullFace(s.BACK):Z===Xb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),O=Z}function qe(Z){Z!==H&&(W&&s.lineWidth(Z),H=Z)}function Ut(Z,Pe,ue){Z?(be(s.POLYGON_OFFSET_FILL),(q!==Pe||$!==ue)&&(s.polygonOffset(Pe,ue),q=Pe,$=ue)):Me(s.POLYGON_OFFSET_FILL)}function je(Z){Z?be(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function B(Z){Z===void 0&&(Z=s.TEXTURE0+ce-1),ye!==Z&&(s.activeTexture(Z),ye=Z)}function R(Z,Pe,ue){ue===void 0&&(ye===null?ue=s.TEXTURE0+ce-1:ue=ye);let ve=P[ue];ve===void 0&&(ve={type:void 0,texture:void 0},P[ue]=ve),(ve.type!==Z||ve.texture!==Pe)&&(ye!==ue&&(s.activeTexture(ue),ye=ue),s.bindTexture(Z,Pe||Se[Z]),ve.type=Z,ve.texture=Pe)}function se(){const Z=P[ye];Z!==void 0&&Z.type!==void 0&&(s.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ee(){try{s.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ge(){try{s.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ke(){try{s.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Le(){try{s.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function gt(){try{s.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function we(){try{s.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ie(){try{s.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Je(){try{s.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function We(Z){Re.equals(Z)===!1&&(s.scissor(Z.x,Z.y,Z.z,Z.w),Re.copy(Z))}function He(Z){Y.equals(Z)===!1&&(s.viewport(Z.x,Z.y,Z.z,Z.w),Y.copy(Z))}function st(Z,Pe){let ue=h.get(Pe);ue===void 0&&(ue=new WeakMap,h.set(Pe,ue));let ve=ue.get(Z);ve===void 0&&(ve=s.getUniformBlockIndex(Pe,Z.name),ue.set(Z,ve))}function Ke(Z,Pe){const ve=h.get(Pe).get(Z);p.get(Pe)!==ve&&(s.uniformBlockBinding(Pe,ve,Z.__bindingPointIndex),p.set(Pe,ve))}function Lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ye=null,P={},v={},y=new WeakMap,S=[],M=null,b=!1,x=null,_=null,L=null,w=null,C=null,z=null,F=null,N=new Ct(0,0,0),G=0,A=!1,T=null,O=null,H=null,q=null,$=null,Re.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:be,disable:Me,bindFramebuffer:Ve,drawBuffers:De,useProgram:dt,setBlending:k,setMaterial:vn,setFlipSided:ot,setCullFace:ht,setLineWidth:qe,setPolygonOffset:Ut,setScissorTest:je,activeTexture:B,bindTexture:R,unbindTexture:se,compressedTexImage2D:me,compressedTexImage3D:Ee,texImage2D:Ie,texImage3D:Je,updateUBOMapping:st,uniformBlockBinding:Ke,texStorage2D:gt,texStorage3D:we,texSubImage2D:ge,texSubImage3D:ke,compressedTexSubImage2D:Le,compressedTexSubImage3D:ze,scissor:We,viewport:He,reset:Lt}}function XC(s,e,i,r,l,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,R){return S?new OffscreenCanvas(B,R):ac("canvas")}function b(B,R,se){let me=1;const Ee=je(B);if((Ee.width>se||Ee.height>se)&&(me=se/Math.max(Ee.width,Ee.height)),me<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ge=Math.floor(me*Ee.width),ke=Math.floor(me*Ee.height);v===void 0&&(v=M(ge,ke));const Le=R?M(ge,ke):v;return Le.width=ge,Le.height=ke,Le.getContext("2d").drawImage(B,0,0,ge,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ge+"x"+ke+")."),Le}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),B;return B}function x(B){return B.generateMipmaps}function _(B){s.generateMipmap(B)}function L(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(B,R,se,me,Ee=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ge=R;if(R===s.RED&&(se===s.FLOAT&&(ge=s.R32F),se===s.HALF_FLOAT&&(ge=s.R16F),se===s.UNSIGNED_BYTE&&(ge=s.R8)),R===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.R8UI),se===s.UNSIGNED_SHORT&&(ge=s.R16UI),se===s.UNSIGNED_INT&&(ge=s.R32UI),se===s.BYTE&&(ge=s.R8I),se===s.SHORT&&(ge=s.R16I),se===s.INT&&(ge=s.R32I)),R===s.RG&&(se===s.FLOAT&&(ge=s.RG32F),se===s.HALF_FLOAT&&(ge=s.RG16F),se===s.UNSIGNED_BYTE&&(ge=s.RG8)),R===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RG8UI),se===s.UNSIGNED_SHORT&&(ge=s.RG16UI),se===s.UNSIGNED_INT&&(ge=s.RG32UI),se===s.BYTE&&(ge=s.RG8I),se===s.SHORT&&(ge=s.RG16I),se===s.INT&&(ge=s.RG32I)),R===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),se===s.UNSIGNED_INT&&(ge=s.RGB32UI),se===s.BYTE&&(ge=s.RGB8I),se===s.SHORT&&(ge=s.RGB16I),se===s.INT&&(ge=s.RGB32I)),R===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),se===s.UNSIGNED_INT&&(ge=s.RGBA32UI),se===s.BYTE&&(ge=s.RGBA8I),se===s.SHORT&&(ge=s.RGBA16I),se===s.INT&&(ge=s.RGBA32I)),R===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),R===s.RGBA){const ke=Ee?nc:Rt.getTransfer(me);se===s.FLOAT&&(ge=s.RGBA32F),se===s.HALF_FLOAT&&(ge=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ge=ke===Bt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function C(B,R){let se;return B?R===null||R===Rr||R===Us?se=s.DEPTH24_STENCIL8:R===sa?se=s.DEPTH32F_STENCIL8:R===jo&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Rr||R===Us?se=s.DEPTH_COMPONENT24:R===sa?se=s.DEPTH_COMPONENT32F:R===jo&&(se=s.DEPTH_COMPONENT16),se}function z(B,R){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Mi&&B.minFilter!==Ui?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function F(B){const R=B.target;R.removeEventListener("dispose",F),G(R),R.isVideoTexture&&g.delete(R)}function N(B){const R=B.target;R.removeEventListener("dispose",N),T(R)}function G(B){const R=r.get(B);if(R.__webglInit===void 0)return;const se=B.source,me=y.get(se);if(me){const Ee=me[R.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&A(B),Object.keys(me).length===0&&y.delete(se)}r.remove(B)}function A(B){const R=r.get(B);s.deleteTexture(R.__webglTexture);const se=B.source,me=y.get(se);delete me[R.__cacheKey],d.memory.textures--}function T(B){const R=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let Ee=0;Ee<R.__webglFramebuffer[me].length;Ee++)s.deleteFramebuffer(R.__webglFramebuffer[me][Ee]);else s.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)s.deleteFramebuffer(R.__webglFramebuffer[me]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=B.textures;for(let me=0,Ee=se.length;me<Ee;me++){const ge=r.get(se[me]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),d.memory.textures--),r.remove(se[me])}r.remove(B)}let O=0;function H(){O=0}function q(){const B=O;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),O+=1,B}function $(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function ce(B,R){const se=r.get(B);if(B.isVideoTexture&&qe(B),B.isRenderTargetTexture===!1&&B.version>0&&se.__version!==B.version){const me=B.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(se,B,R);return}}i.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+R)}function W(B,R){const se=r.get(B);if(B.version>0&&se.__version!==B.version){Y(se,B,R);return}i.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+R)}function ae(B,R){const se=r.get(B);if(B.version>0&&se.__version!==B.version){Y(se,B,R);return}i.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+R)}function Q(B,R){const se=r.get(B);if(B.version>0&&se.__version!==B.version){he(se,B,R);return}i.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+R)}const ye={[Sh]:s.REPEAT,[br]:s.CLAMP_TO_EDGE,[xh]:s.MIRRORED_REPEAT},P={[Mi]:s.NEAREST,[ST]:s.NEAREST_MIPMAP_NEAREST,[Tu]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[wd]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},ie={[bT]:s.NEVER,[DT]:s.ALWAYS,[TT]:s.LESS,[J0]:s.LEQUAL,[AT]:s.EQUAL,[CT]:s.GEQUAL,[RT]:s.GREATER,[wT]:s.NOTEQUAL};function Te(B,R){if(R.type===sa&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ui||R.magFilter===wd||R.magFilter===Tu||R.magFilter===Tr||R.minFilter===Ui||R.minFilter===wd||R.minFilter===Tu||R.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ye[R.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ye[R.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ye[R.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,P[R.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,P[R.minFilter]),R.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,ie[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Mi||R.minFilter!==Tu&&R.minFilter!==Tr||R.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Re(B,R){let se=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",F));const me=R.source;let Ee=y.get(me);Ee===void 0&&(Ee={},y.set(me,Ee));const ge=$(R);if(ge!==B.__cacheKey){Ee[ge]===void 0&&(Ee[ge]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,se=!0),Ee[ge].usedTimes++;const ke=Ee[B.__cacheKey];ke!==void 0&&(Ee[B.__cacheKey].usedTimes--,ke.usedTimes===0&&A(R)),B.__cacheKey=ge,B.__webglTexture=Ee[ge].texture}return se}function Y(B,R,se){let me=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=s.TEXTURE_3D);const Ee=Re(B,R),ge=R.source;i.bindTexture(me,B.__webglTexture,s.TEXTURE0+se);const ke=r.get(ge);if(ge.version!==ke.__version||Ee===!0){i.activeTexture(s.TEXTURE0+se);const Le=Rt.getPrimaries(Rt.workingColorSpace),ze=R.colorSpace===Ha?null:Rt.getPrimaries(R.colorSpace),gt=R.colorSpace===Ha||Le===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let we=b(R.image,!1,l.maxTextureSize);we=Ut(R,we);const Ie=u.convert(R.format,R.colorSpace),Je=u.convert(R.type);let We=w(R.internalFormat,Ie,Je,R.colorSpace,R.isVideoTexture);Te(me,R);let He;const st=R.mipmaps,Ke=R.isVideoTexture!==!0,Lt=ke.__version===void 0||Ee===!0,Z=ge.dataReady,Pe=z(R,we);if(R.isDepthTexture)We=C(R.format===Ls,R.type),Lt&&(Ke?i.texStorage2D(s.TEXTURE_2D,1,We,we.width,we.height):i.texImage2D(s.TEXTURE_2D,0,We,we.width,we.height,0,Ie,Je,null));else if(R.isDataTexture)if(st.length>0){Ke&&Lt&&i.texStorage2D(s.TEXTURE_2D,Pe,We,st[0].width,st[0].height);for(let ue=0,ve=st.length;ue<ve;ue++)He=st[ue],Ke?Z&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,He.width,He.height,Ie,Je,He.data):i.texImage2D(s.TEXTURE_2D,ue,We,He.width,He.height,0,Ie,Je,He.data);R.generateMipmaps=!1}else Ke?(Lt&&i.texStorage2D(s.TEXTURE_2D,Pe,We,we.width,we.height),Z&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we.width,we.height,Ie,Je,we.data)):i.texImage2D(s.TEXTURE_2D,0,We,we.width,we.height,0,Ie,Je,we.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ke&&Lt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,We,st[0].width,st[0].height,we.depth);for(let ue=0,ve=st.length;ue<ve;ue++)if(He=st[ue],R.format!==xi)if(Ie!==null)if(Ke){if(Z)if(R.layerUpdates.size>0){const Ue=Wv(He.width,He.height,R.format,R.type);for(const Ne of R.layerUpdates){const et=He.data.subarray(Ne*Ue/He.data.BYTES_PER_ELEMENT,(Ne+1)*Ue/He.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Ne,He.width,He.height,1,Ie,et)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,He.width,He.height,we.depth,Ie,He.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,We,He.width,He.height,we.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?Z&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,He.width,He.height,we.depth,Ie,Je,He.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ue,We,He.width,He.height,we.depth,0,Ie,Je,He.data)}else{Ke&&Lt&&i.texStorage2D(s.TEXTURE_2D,Pe,We,st[0].width,st[0].height);for(let ue=0,ve=st.length;ue<ve;ue++)He=st[ue],R.format!==xi?Ie!==null?Ke?Z&&i.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,He.width,He.height,Ie,He.data):i.compressedTexImage2D(s.TEXTURE_2D,ue,We,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Z&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,He.width,He.height,Ie,Je,He.data):i.texImage2D(s.TEXTURE_2D,ue,We,He.width,He.height,0,Ie,Je,He.data)}else if(R.isDataArrayTexture)if(Ke){if(Lt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,We,we.width,we.height,we.depth),Z)if(R.layerUpdates.size>0){const ue=Wv(we.width,we.height,R.format,R.type);for(const ve of R.layerUpdates){const Ue=we.data.subarray(ve*ue/we.data.BYTES_PER_ELEMENT,(ve+1)*ue/we.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ve,we.width,we.height,1,Ie,Je,Ue)}R.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,Je,we.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,We,we.width,we.height,we.depth,0,Ie,Je,we.data);else if(R.isData3DTexture)Ke?(Lt&&i.texStorage3D(s.TEXTURE_3D,Pe,We,we.width,we.height,we.depth),Z&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,Je,we.data)):i.texImage3D(s.TEXTURE_3D,0,We,we.width,we.height,we.depth,0,Ie,Je,we.data);else if(R.isFramebufferTexture){if(Lt)if(Ke)i.texStorage2D(s.TEXTURE_2D,Pe,We,we.width,we.height);else{let ue=we.width,ve=we.height;for(let Ue=0;Ue<Pe;Ue++)i.texImage2D(s.TEXTURE_2D,Ue,We,ue,ve,0,Ie,Je,null),ue>>=1,ve>>=1}}else if(st.length>0){if(Ke&&Lt){const ue=je(st[0]);i.texStorage2D(s.TEXTURE_2D,Pe,We,ue.width,ue.height)}for(let ue=0,ve=st.length;ue<ve;ue++)He=st[ue],Ke?Z&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,Ie,Je,He):i.texImage2D(s.TEXTURE_2D,ue,We,Ie,Je,He);R.generateMipmaps=!1}else if(Ke){if(Lt){const ue=je(we);i.texStorage2D(s.TEXTURE_2D,Pe,We,ue.width,ue.height)}Z&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Je,we)}else i.texImage2D(s.TEXTURE_2D,0,We,Ie,Je,we);x(R)&&_(me),ke.__version=ge.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function he(B,R,se){if(R.image.length!==6)return;const me=Re(B,R),Ee=R.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+se);const ge=r.get(Ee);if(Ee.version!==ge.__version||me===!0){i.activeTexture(s.TEXTURE0+se);const ke=Rt.getPrimaries(Rt.workingColorSpace),Le=R.colorSpace===Ha?null:Rt.getPrimaries(R.colorSpace),ze=R.colorSpace===Ha||ke===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const gt=R.isCompressedTexture||R.image[0].isCompressedTexture,we=R.image[0]&&R.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!gt&&!we?Ie[ve]=b(R.image[ve],!0,l.maxCubemapSize):Ie[ve]=we?R.image[ve].image:R.image[ve],Ie[ve]=Ut(R,Ie[ve]);const Je=Ie[0],We=u.convert(R.format,R.colorSpace),He=u.convert(R.type),st=w(R.internalFormat,We,He,R.colorSpace),Ke=R.isVideoTexture!==!0,Lt=ge.__version===void 0||me===!0,Z=Ee.dataReady;let Pe=z(R,Je);Te(s.TEXTURE_CUBE_MAP,R);let ue;if(gt){Ke&&Lt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,Je.width,Je.height);for(let ve=0;ve<6;ve++){ue=Ie[ve].mipmaps;for(let Ue=0;Ue<ue.length;Ue++){const Ne=ue[Ue];R.format!==xi?We!==null?Ke?Z&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Ne.width,Ne.height,We,Ne.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,st,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Z&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Ne.width,Ne.height,We,He,Ne.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,st,Ne.width,Ne.height,0,We,He,Ne.data)}}}else{if(ue=R.mipmaps,Ke&&Lt){ue.length>0&&Pe++;const ve=je(Ie[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(we){Ke?Z&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,We,He,Ie[ve].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ie[ve].width,Ie[ve].height,0,We,He,Ie[ve].data);for(let Ue=0;Ue<ue.length;Ue++){const et=ue[Ue].image[ve].image;Ke?Z&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,et.width,et.height,We,He,et.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,st,et.width,et.height,0,We,He,et.data)}}else{Ke?Z&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,We,He,Ie[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,We,He,Ie[ve]);for(let Ue=0;Ue<ue.length;Ue++){const Ne=ue[Ue];Ke?Z&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,We,He,Ne.image[ve]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,st,We,He,Ne.image[ve])}}}x(R)&&_(s.TEXTURE_CUBE_MAP),ge.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function Se(B,R,se,me,Ee,ge){const ke=u.convert(se.format,se.colorSpace),Le=u.convert(se.type),ze=w(se.internalFormat,ke,Le,se.colorSpace),gt=r.get(R),we=r.get(se);if(we.__renderTarget=R,!gt.__hasExternalTextures){const Ie=Math.max(1,R.width>>ge),Je=Math.max(1,R.height>>ge);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,ge,ze,Ie,Je,R.depth,0,ke,Le,null):i.texImage2D(Ee,ge,ze,Ie,Je,0,ke,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Ee,we.__webglTexture,0,ot(R)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Ee,we.__webglTexture,ge),i.bindFramebuffer(s.FRAMEBUFFER,null)}function be(B,R,se){if(s.bindRenderbuffer(s.RENDERBUFFER,B),R.depthBuffer){const me=R.depthTexture,Ee=me&&me.isDepthTexture?me.type:null,ge=C(R.stencilBuffer,Ee),ke=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=ot(R);ht(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,ge,R.width,R.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ge,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ge,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,B)}else{const me=R.textures;for(let Ee=0;Ee<me.length;Ee++){const ge=me[Ee],ke=u.convert(ge.format,ge.colorSpace),Le=u.convert(ge.type),ze=w(ge.internalFormat,ke,Le,ge.colorSpace),gt=ot(R);se&&ht(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,ze,R.width,R.height):ht(R)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,ze,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ze,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ce(R.depthTexture,0);const Ee=me.__webglTexture,ge=ot(R);if(R.depthTexture.format===As)ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ee,0);else if(R.depthTexture.format===Ls)ht(R)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0,ge):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function Ve(B){const R=r.get(B),se=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const me=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const Ee=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",Ee)};me.addEventListener("dispose",Ee),R.__depthDisposeCallback=Ee}R.__boundDepthTexture=me}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");Me(R.__webglFramebuffer,B)}else if(se){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=s.createRenderbuffer(),be(R.__webglDepthbuffer[me],B,!1);else{const Ee=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=R.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ge)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),be(R.__webglDepthbuffer,B,!1);else{const me=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ee)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function De(B,R,se){const me=r.get(B);R!==void 0&&Se(me.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Ve(B)}function dt(B){const R=B.texture,se=r.get(B),me=r.get(R);B.addEventListener("dispose",N);const Ee=B.textures,ge=B.isWebGLCubeRenderTarget===!0,ke=Ee.length>1;if(ke||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=R.version,d.memory.textures++),ge){se.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[Le]=[];for(let ze=0;ze<R.mipmaps.length;ze++)se.__webglFramebuffer[Le][ze]=s.createFramebuffer()}else se.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let Le=0;Le<R.mipmaps.length;Le++)se.__webglFramebuffer[Le]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(ke)for(let Le=0,ze=Ee.length;Le<ze;Le++){const gt=r.get(Ee[Le]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),d.memory.textures++)}if(B.samples>0&&ht(B)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Le=0;Le<Ee.length;Le++){const ze=Ee[Le];se.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Le]);const gt=u.convert(ze.format,ze.colorSpace),we=u.convert(ze.type),Ie=w(ze.internalFormat,gt,we,ze.colorSpace,B.isXRRenderTarget===!0),Je=ot(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ie,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,se.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),be(se.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Te(s.TEXTURE_CUBE_MAP,R);for(let Le=0;Le<6;Le++)if(R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Se(se.__webglFramebuffer[Le][ze],B,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ze);else Se(se.__webglFramebuffer[Le],B,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(R)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ke){for(let Le=0,ze=Ee.length;Le<ze;Le++){const gt=Ee[Le],we=r.get(gt);i.bindTexture(s.TEXTURE_2D,we.__webglTexture),Te(s.TEXTURE_2D,gt),Se(se.__webglFramebuffer,B,gt,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),x(gt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Le=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,me.__webglTexture),Te(Le,R),R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Se(se.__webglFramebuffer[ze],B,R,s.COLOR_ATTACHMENT0,Le,ze);else Se(se.__webglFramebuffer,B,R,s.COLOR_ATTACHMENT0,Le,0);x(R)&&_(Le),i.unbindTexture()}B.depthBuffer&&Ve(B)}function wt(B){const R=B.textures;for(let se=0,me=R.length;se<me;se++){const Ee=R[se];if(x(Ee)){const ge=L(B),ke=r.get(Ee).__webglTexture;i.bindTexture(ge,ke),_(ge),i.unbindTexture()}}}const rt=[],k=[];function vn(B){if(B.samples>0){if(ht(B)===!1){const R=B.textures,se=B.width,me=B.height;let Ee=s.COLOR_BUFFER_BIT;const ge=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(B),Le=R.length>1;if(Le)for(let ze=0;ze<R.length;ze++)i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[ze]);const gt=r.get(R[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,gt,0)}s.blitFramebuffer(0,0,se,me,0,0,se,me,Ee,s.NEAREST),p===!0&&(rt.length=0,k.length=0,rt.push(s.COLOR_ATTACHMENT0+ze),B.depthBuffer&&B.resolveDepthBuffer===!1&&(rt.push(ge),k.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let ze=0;ze<R.length;ze++){i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,ke.__webglColorRenderbuffer[ze]);const gt=r.get(R[ze]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,gt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const R=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ot(B){return Math.min(l.maxSamples,B.samples)}function ht(B){const R=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qe(B){const R=d.render.frame;g.get(B)!==R&&(g.set(B,R),B.update())}function Ut(B,R){const se=B.colorSpace,me=B.format,Ee=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||se!==Ns&&se!==Ha&&(Rt.getTransfer(se)===Bt?(me!==xi||Ee!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),R}function je(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=ce,this.setTexture2DArray=W,this.setTexture3D=ae,this.setTextureCube=Q,this.rebindTextures=De,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ht}function qC(s,e){function i(r,l=Ha){let u;const d=Rt.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===lp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===up)return s.UNSIGNED_SHORT_5_5_5_1;if(r===k0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===V0)return s.BYTE;if(r===G0)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===op)return s.INT;if(r===Rr)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Jo)return s.HALF_FLOAT;if(r===W0)return s.ALPHA;if(r===X0)return s.RGB;if(r===xi)return s.RGBA;if(r===q0)return s.LUMINANCE;if(r===j0)return s.LUMINANCE_ALPHA;if(r===As)return s.DEPTH_COMPONENT;if(r===Ls)return s.DEPTH_STENCIL;if(r===Y0)return s.RED;if(r===cp)return s.RED_INTEGER;if(r===Z0)return s.RG;if(r===fp)return s.RG_INTEGER;if(r===dp)return s.RGBA_INTEGER;if(r===Zu||r===Ku||r===Qu||r===Ju)if(d===Bt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Zu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ju)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Zu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ju)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mh||r===Eh||r===bh||r===Th)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Mh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Eh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===bh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Th)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ah||r===Rh||r===wh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ah||r===Rh)return d===Bt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===wh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ch||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph||r===Bh||r===Fh||r===zh||r===Ih||r===Hh||r===Vh||r===Gh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ch)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Dh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Oh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ph)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Bh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Vh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gh)return d===Bt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$u||r===kh||r===Wh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===$u)return d===Bt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Wh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===K0||r===Xh||r===qh||r===jh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===$u)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Xh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new kn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xa({vertexShader:jC,fragmentShader:YC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new cc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KC extends Bs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,f="local-floor",p=1,h=null,g=null,v=null,y=null,S=null,M=null;const b=new ZC,x=i.getContextAttributes();let _=null,L=null;const w=[],C=[],z=new Dt;let F=null;const N=new ci;N.viewport=new Kt;const G=new ci;G.viewport=new Kt;const A=[N,G],T=new _A;let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let he=w[Y];return he===void 0&&(he=new Kd,w[Y]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Y){let he=w[Y];return he===void 0&&(he=new Kd,w[Y]=he),he.getGripSpace()},this.getHand=function(Y){let he=w[Y];return he===void 0&&(he=new Kd,w[Y]=he),he.getHandSpace()};function q(Y){const he=C.indexOf(Y.inputSource);if(he===-1)return;const Se=w[he];Se!==void 0&&(Se.update(Y.inputSource,Y.frame,h||d),Se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",$),l.removeEventListener("inputsourceschange",ce);for(let Y=0;Y<w.length;Y++){const he=C[Y];he!==null&&(C[Y]=null,w[Y].disconnect(he))}O=null,H=null,b.reset(),e.setRenderTarget(_),S=null,y=null,v=null,l=null,L=null,Re.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",$),l.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,be=null,Me=null;x.depth&&(Me=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Se=x.stencil?Ls:As,be=x.stencil?Us:Rr);const Ve={colorFormat:i.RGBA8,depthFormat:Me,scaleFactor:u};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Ve),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new wr(y.textureWidth,y.textureHeight,{format:xi,type:ca,depthTexture:new uy(y.textureWidth,y.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,Se),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new wr(S.framebufferWidth,S.framebufferHeight,{format:xi,type:ca,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),h=null,d=await l.requestReferenceSpace(f),Re.setContext(l),Re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ce(Y){for(let he=0;he<Y.removed.length;he++){const Se=Y.removed[he],be=C.indexOf(Se);be>=0&&(C[be]=null,w[be].disconnect(Se))}for(let he=0;he<Y.added.length;he++){const Se=Y.added[he];let be=C.indexOf(Se);if(be===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=C.length){C.push(Se),be=Ve;break}else if(C[Ve]===null){C[Ve]=Se,be=Ve;break}if(be===-1)break}const Me=w[be];Me&&Me.connect(Se)}}const W=new le,ae=new le;function Q(Y,he,Se){W.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const be=W.distanceTo(ae),Me=he.projectionMatrix.elements,Ve=Se.projectionMatrix.elements,De=Me[14]/(Me[10]-1),dt=Me[14]/(Me[10]+1),wt=(Me[9]+1)/Me[5],rt=(Me[9]-1)/Me[5],k=(Me[8]-1)/Me[0],vn=(Ve[8]+1)/Ve[0],ot=De*k,ht=De*vn,qe=be/(-k+vn),Ut=qe*-k;if(he.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const je=De+qe,B=dt+qe,R=ot-Ut,se=ht+(be-Ut),me=wt*dt/B*je,Ee=rt*dt/B*je;Y.projectionMatrix.makePerspective(R,se,me,Ee,je,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ye(Y,he){he===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(he.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let he=Y.near,Se=Y.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(Se=b.depthFar)),T.near=G.near=N.near=he,T.far=G.far=N.far=Se,(O!==T.near||H!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,H=T.far),N.layers.mask=Y.layers.mask|2,G.layers.mask=Y.layers.mask|4,T.layers.mask=N.layers.mask|G.layers.mask;const be=Y.parent,Me=T.cameras;ye(T,be);for(let Ve=0;Ve<Me.length;Ve++)ye(Me[Ve],be);Me.length===2?Q(T,N,G):T.projectionMatrix.copy(N.projectionMatrix),P(Y,T,be)};function P(Y,he,Se){Se===null?Y.matrix.copy(he.matrixWorld):(Y.matrix.copy(Se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(he.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Y){p=Y,y!==null&&(y.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(T)};let ie=null;function Te(Y,he){if(g=he.getViewerPose(h||d),M=he,g!==null){const Se=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let be=!1;Se.length!==T.cameras.length&&(T.cameras.length=0,be=!0);for(let De=0;De<Se.length;De++){const dt=Se[De];let wt=null;if(S!==null)wt=S.getViewport(dt);else{const k=v.getViewSubImage(y,dt);wt=k.viewport,De===0&&(e.setRenderTargetTextures(L,k.colorTexture,y.ignoreDepthValues?void 0:k.depthStencilTexture),e.setRenderTarget(L))}let rt=A[De];rt===void 0&&(rt=new ci,rt.layers.enable(De),rt.viewport=new Kt,A[De]=rt),rt.matrix.fromArray(dt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(dt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(wt.x,wt.y,wt.width,wt.height),De===0&&(T.matrix.copy(rt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),be===!0&&T.cameras.push(rt)}const Me=l.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const De=v.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&b.init(e,De,l.renderState)}}for(let Se=0;Se<w.length;Se++){const be=C[Se],Me=w[Se];be!==null&&Me!==void 0&&Me.update(be,he,h||d)}ie&&ie(Y,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Re=new dy;Re.setAnimationLoop(Te),this.setAnimationLoop=function(Y){ie=Y},this.dispose=function(){}}}const _r=new Oi,QC=new Qt;function JC(s,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,sy(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,L,w,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(x,_):_.isMeshToonMaterial?(u(x,_),v(x,_)):_.isMeshPhongMaterial?(u(x,_),g(x,_)):_.isMeshStandardMaterial?(u(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,C)):_.isMeshMatcapMaterial?(u(x,_),M(x,_)):_.isMeshDepthMaterial?u(x,_):_.isMeshDistanceMaterial?(u(x,_),b(x,_)):_.isMeshNormalMaterial?u(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?p(x,_,L,w):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Gn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Gn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),w=L.envMap,C=L.envMapRotation;w&&(x.envMap.value=w,_r.copy(C),_r.x*=-1,_r.y*=-1,_r.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.envMapRotation.value.setFromMatrix4(QC.makeRotationFromEuler(_r)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,L,w){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=w*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function $C(s,e,i,r){let l={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,w){const C=w.program;r.uniformBlockBinding(L,C)}function h(L,w){let C=l[L.id];C===void 0&&(M(L),C=g(L),l[L.id]=C,L.addEventListener("dispose",x));const z=w.program;r.updateUBOMapping(L,z);const F=e.render.frame;u[L.id]!==F&&(y(L),u[L.id]=F)}function g(L){const w=v();L.__bindingPointIndex=w;const C=s.createBuffer(),z=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,z,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,C),C}function v(){for(let L=0;L<f;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const w=l[L.id],C=L.uniforms,z=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let F=0,N=C.length;F<N;F++){const G=Array.isArray(C[F])?C[F]:[C[F]];for(let A=0,T=G.length;A<T;A++){const O=G[A];if(S(O,F,A,z)===!0){const H=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let $=0;for(let ce=0;ce<q.length;ce++){const W=q[ce],ae=b(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,H+$,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,$),$+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,w,C,z){const F=L.value,N=w+"_"+C;if(z[N]===void 0)return typeof F=="number"||typeof F=="boolean"?z[N]=F:z[N]=F.clone(),!0;{const G=z[N];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return z[N]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function M(L){const w=L.uniforms;let C=0;const z=16;for(let N=0,G=w.length;N<G;N++){const A=Array.isArray(w[N])?w[N]:[w[N]];for(let T=0,O=A.length;T<O;T++){const H=A[T],q=Array.isArray(H.value)?H.value:[H.value];for(let $=0,ce=q.length;$<ce;$++){const W=q[$],ae=b(W),Q=C%z,ye=Q%ae.boundary,P=Q+ye;C+=ye,P!==0&&z-P<ae.storage&&(C+=z-P),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=ae.storage}}}const F=C%z;return F>0&&(C+=z-F),L.__size=C,L.__cache={},this}function b(L){const w={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(w.boundary=4,w.storage=4):L.isVector2?(w.boundary=8,w.storage=8):L.isVector3||L.isColor?(w.boundary=16,w.storage=12):L.isVector4?(w.boundary=16,w.storage=16):L.isMatrix3?(w.boundary=48,w.storage=48):L.isMatrix4?(w.boundary=64,w.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),w}function x(L){const w=L.target;w.removeEventListener("dispose",x);const C=d.indexOf(w.__bindingPointIndex);d.splice(C,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:p,update:h,dispose:_}}class e2{constructor(e={}){const{canvas:i=LT(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const M=new Uint32Array(4),b=new Int32Array(4);let x=null,_=null;const L=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Ga,this.toneMappingExposure=1;const C=this;let z=!1,F=0,N=0,G=null,A=-1,T=null;const O=new Kt,H=new Kt;let q=null;const $=new Ct(0);let ce=0,W=i.width,ae=i.height,Q=1,ye=null,P=null;const ie=new Kt(0,0,W,ae),Te=new Kt(0,0,W,ae);let Re=!1;const Y=new mp;let he=!1,Se=!1;this.transmissionResolutionScale=1;const be=new Qt,Me=new Qt,Ve=new le,De=new Kt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function rt(){return G===null?Q:1}let k=r;function vn(U,K){return i.getContext(U,K)}try{const U={alpha:!0,depth:l,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sp}`),i.addEventListener("webglcontextlost",ve,!1),i.addEventListener("webglcontextrestored",Ue,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),k===null){const K="webgl2";if(k=vn(K,U),k===null)throw vn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ot,ht,qe,Ut,je,B,R,se,me,Ee,ge,ke,Le,ze,gt,we,Ie,Je,We,He,st,Ke,Lt,Z;function Pe(){ot=new cw(k),ot.init(),Ke=new qC(k,ot),ht=new iw(k,ot,e,Ke),qe=new WC(k,ot),ht.reverseDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),Ut=new hw(k),je=new UC,B=new XC(k,ot,qe,je,ht,Ke,Ut),R=new rw(C),se=new uw(C),me=new yA(k),Lt=new tw(k,me),Ee=new fw(k,me,Ut,Lt),ge=new mw(k,Ee,me,Ut),We=new pw(k,ht,B),we=new aw(je),ke=new DC(C,R,se,ot,ht,Lt,we),Le=new JC(C,je),ze=new NC,gt=new IC(ot),Je=new ew(C,R,se,qe,ge,S,p),Ie=new GC(C,ge,ht),Z=new $C(k,Ut,ht,qe),He=new nw(k,ot,Ut),st=new dw(k,ot,Ut),Ut.programs=ke.programs,C.capabilities=ht,C.extensions=ot,C.properties=je,C.renderLists=ze,C.shadowMap=Ie,C.state=qe,C.info=Ut}Pe();const ue=new KC(C,k);this.xr=ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=ot.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ot.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(U){U!==void 0&&(Q=U,this.setSize(W,ae,!1))},this.getSize=function(U){return U.set(W,ae)},this.setSize=function(U,K,re=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=U,ae=K,i.width=Math.floor(U*Q),i.height=Math.floor(K*Q),re===!0&&(i.style.width=U+"px",i.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(W*Q,ae*Q).floor()},this.setDrawingBufferSize=function(U,K,re){W=U,ae=K,Q=re,i.width=Math.floor(U*re),i.height=Math.floor(K*re),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(O)},this.getViewport=function(U){return U.copy(ie)},this.setViewport=function(U,K,re,te){U.isVector4?ie.set(U.x,U.y,U.z,U.w):ie.set(U,K,re,te),qe.viewport(O.copy(ie).multiplyScalar(Q).round())},this.getScissor=function(U){return U.copy(Te)},this.setScissor=function(U,K,re,te){U.isVector4?Te.set(U.x,U.y,U.z,U.w):Te.set(U,K,re,te),qe.scissor(H.copy(Te).multiplyScalar(Q).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(U){qe.setScissorTest(Re=U)},this.setOpaqueSort=function(U){ye=U},this.setTransparentSort=function(U){P=U},this.getClearColor=function(U){return U.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(U=!0,K=!0,re=!0){let te=0;if(U){let J=!1;if(G!==null){const Ae=G.texture.format;J=Ae===dp||Ae===fp||Ae===cp}if(J){const Ae=G.texture.type,Ce=Ae===ca||Ae===Rr||Ae===jo||Ae===Us||Ae===lp||Ae===up,Fe=Je.getClearColor(),Be=Je.getClearAlpha(),tt=Fe.r,nt=Fe.g,Ze=Fe.b;Ce?(M[0]=tt,M[1]=nt,M[2]=Ze,M[3]=Be,k.clearBufferuiv(k.COLOR,0,M)):(b[0]=tt,b[1]=nt,b[2]=Ze,b[3]=Be,k.clearBufferiv(k.COLOR,0,b))}else te|=k.COLOR_BUFFER_BIT}K&&(te|=k.DEPTH_BUFFER_BIT),re&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ve,!1),i.removeEventListener("webglcontextrestored",Ue,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),Je.dispose(),ze.dispose(),gt.dispose(),je.dispose(),R.dispose(),se.dispose(),ge.dispose(),Lt.dispose(),Z.dispose(),ke.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",il),ue.removeEventListener("sessionend",Is),bi.stop()};function ve(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const U=Ut.autoReset,K=Ie.enabled,re=Ie.autoUpdate,te=Ie.needsUpdate,J=Ie.type;Pe(),Ut.autoReset=U,Ie.enabled=K,Ie.autoUpdate=re,Ie.needsUpdate=te,Ie.type=J}function Ne(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function et(U){const K=U.target;K.removeEventListener("dispose",et),Vt(K)}function Vt(U){rn(U),je.remove(U)}function rn(U){const K=je.get(U).programs;K!==void 0&&(K.forEach(function(re){ke.releaseProgram(re)}),U.isShaderMaterial&&ke.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,re,te,J,Ae){K===null&&(K=dt);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Fe=dc(U,K,re,te,J);qe.setMaterial(te,Ce);let Be=re.index,tt=1;if(te.wireframe===!0){if(Be=Ee.getWireframeAttribute(re),Be===void 0)return;tt=2}const nt=re.drawRange,Ze=re.attributes.position;let _t=nt.start*tt,vt=(nt.start+nt.count)*tt;Ae!==null&&(_t=Math.max(_t,Ae.start*tt),vt=Math.min(vt,(Ae.start+Ae.count)*tt)),Be!==null?(_t=Math.max(_t,0),vt=Math.min(vt,Be.count)):Ze!=null&&(_t=Math.max(_t,0),vt=Math.min(vt,Ze.count));const Ht=vt-_t;if(Ht<0||Ht===1/0)return;Lt.setup(J,te,Fe,re,Be);let bt,it=He;if(Be!==null&&(bt=me.get(Be),it=st,it.setIndex(bt)),J.isMesh)te.wireframe===!0?(qe.setLineWidth(te.wireframeLinewidth*rt()),it.setMode(k.LINES)):it.setMode(k.TRIANGLES);else if(J.isLine){let Qe=te.linewidth;Qe===void 0&&(Qe=1),qe.setLineWidth(Qe*rt()),J.isLineSegments?it.setMode(k.LINES):J.isLineLoop?it.setMode(k.LINE_LOOP):it.setMode(k.LINE_STRIP)}else J.isPoints?it.setMode(k.POINTS):J.isSprite&&it.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))it.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Qe=J._multiDrawStarts,ln=J._multiDrawCounts,yt=J._multiDrawCount,Fn=Be?me.get(Be).bytesPerElement:1,fi=je.get(te).currentProgram.getUniforms();for(let Ln=0;Ln<yt;Ln++)fi.setValue(k,"_gl_DrawID",Ln),it.render(Qe[Ln]/Fn,ln[Ln])}else if(J.isInstancedMesh)it.renderInstances(_t,Ht,J.count);else if(re.isInstancedBufferGeometry){const Qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ln=Math.min(re.instanceCount,Qe);it.renderInstances(_t,Ht,ln)}else it.render(_t,Ht)};function Et(U,K,re){U.transparent===!0&&U.side===ra&&U.forceSinglePass===!1?(U.side=Gn,U.needsUpdate=!0,on(U,K,re),U.side=Wa,U.needsUpdate=!0,on(U,K,re),U.side=ra):on(U,K,re)}this.compile=function(U,K,re=null){re===null&&(re=U),_=gt.get(re),_.init(K),w.push(_),re.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),U!==re&&U.traverseVisible(function(J){J.isLight&&J.layers.test(K.layers)&&(_.pushLight(J),J.castShadow&&_.pushShadow(J))}),_.setupLights();const te=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Ce=0;Ce<Ae.length;Ce++){const Fe=Ae[Ce];Et(Fe,re,J),te.add(Fe)}else Et(Ae,re,J),te.add(Ae)}),_=w.pop(),te},this.compileAsync=function(U,K,re=null){const te=this.compile(U,K,re);return new Promise(J=>{function Ae(){if(te.forEach(function(Ce){je.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){J(U);return}setTimeout(Ae,10)}ot.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Dn=null;function Un(U){Dn&&Dn(U)}function il(){bi.stop()}function Is(){bi.start()}const bi=new dy;bi.setAnimationLoop(Un),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(U){Dn=U,ue.setAnimationLoop(U),U===null?bi.stop():bi.start()},ue.addEventListener("sessionstart",il),ue.addEventListener("sessionend",Is),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(K),K=ue.getCamera()),U.isScene===!0&&U.onBeforeRender(C,U,K,G),_=gt.get(U,w.length),_.init(K),w.push(_),Me.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(Me),Se=this.localClippingEnabled,he=we.init(this.clippingPlanes,Se),x=ze.get(U,L.length),x.init(),L.push(x),ue.enabled===!0&&ue.isPresenting===!0){const Ae=C.xr.getDepthSensingMesh();Ae!==null&&Lr(Ae,K,-1/0,C.sortObjects)}Lr(U,K,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(ye,P),wt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,wt&&Je.addToRenderList(x,U),this.info.render.frame++,he===!0&&we.beginShadows();const re=_.state.shadowsArray;Ie.render(re,U,K),he===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=x.opaque,J=x.transmissive;if(_.setupLights(),K.isArrayCamera){const Ae=K.cameras;if(J.length>0)for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Be=Ae[Ce];al(te,J,U,Be)}wt&&Je.render(U);for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++){const Be=Ae[Ce];Hs(x,U,Be,Be.viewport)}}else J.length>0&&al(te,J,U,K),wt&&Je.render(U),Hs(x,U,K);G!==null&&N===0&&(B.updateMultisampleRenderTarget(G),B.updateRenderTargetMipmap(G)),U.isScene===!0&&U.onAfterRender(C,U,K),Lt.resetDefaultState(),A=-1,T=null,w.pop(),w.length>0?(_=w[w.length-1],he===!0&&we.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Lr(U,K,re,te){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)re=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)_.pushLight(U),U.castShadow&&_.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Y.intersectsSprite(U)){te&&De.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Me);const Ce=ge.update(U),Fe=U.material;Fe.visible&&x.push(U,Ce,Fe,re,De.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Y.intersectsObject(U))){const Ce=ge.update(U),Fe=U.material;if(te&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),De.copy(U.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(U.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){const Be=Ce.groups;for(let tt=0,nt=Be.length;tt<nt;tt++){const Ze=Be[tt],_t=Fe[Ze.materialIndex];_t&&_t.visible&&x.push(U,Ce,_t,re,De.z,Ze)}}else Fe.visible&&x.push(U,Ce,Fe,re,De.z,null)}}const Ae=U.children;for(let Ce=0,Fe=Ae.length;Ce<Fe;Ce++)Lr(Ae[Ce],K,re,te)}function Hs(U,K,re,te){const J=U.opaque,Ae=U.transmissive,Ce=U.transparent;_.setupLightsView(re),he===!0&&we.setGlobalState(C.clippingPlanes,re),te&&qe.viewport(O.copy(te)),J.length>0&&Wn(J,K,re),Ae.length>0&&Wn(Ae,K,re),Ce.length>0&&Wn(Ce,K,re),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function al(U,K,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[te.id]===void 0&&(_.state.transmissionRenderTarget[te.id]=new wr(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Jo:ca,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[te.id],Ce=te.viewport||O;Ae.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const Fe=C.getRenderTarget();C.setRenderTarget(Ae),C.getClearColor($),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),wt&&Je.render(re);const Be=C.toneMapping;C.toneMapping=Ga;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),_.setupLightsView(te),he===!0&&we.setGlobalState(C.clippingPlanes,te),Wn(U,re,te),B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae),ot.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ze=0,_t=K.length;Ze<_t;Ze++){const vt=K[Ze],Ht=vt.object,bt=vt.geometry,it=vt.material,Qe=vt.group;if(it.side===ra&&Ht.layers.test(te.layers)){const ln=it.side;it.side=Gn,it.needsUpdate=!0,sn(Ht,re,te,bt,it,Qe),it.side=ln,it.needsUpdate=!0,nt=!0}}nt===!0&&(B.updateMultisampleRenderTarget(Ae),B.updateRenderTargetMipmap(Ae))}C.setRenderTarget(Fe),C.setClearColor($,ce),tt!==void 0&&(te.viewport=tt),C.toneMapping=Be}function Wn(U,K,re){const te=K.isScene===!0?K.overrideMaterial:null;for(let J=0,Ae=U.length;J<Ae;J++){const Ce=U[J],Fe=Ce.object,Be=Ce.geometry,tt=te===null?Ce.material:te,nt=Ce.group;Fe.layers.test(re.layers)&&sn(Fe,K,re,Be,tt,nt)}}function sn(U,K,re,te,J,Ae){U.onBeforeRender(C,K,re,te,J,Ae),U.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(C,K,re,te,U,Ae),J.transparent===!0&&J.side===ra&&J.forceSinglePass===!1?(J.side=Gn,J.needsUpdate=!0,C.renderBufferDirect(re,K,te,J,U,Ae),J.side=Wa,J.needsUpdate=!0,C.renderBufferDirect(re,K,te,J,U,Ae),J.side=ra):C.renderBufferDirect(re,K,te,J,U,Ae),U.onAfterRender(C,K,re,te,J,Ae)}function on(U,K,re){K.isScene!==!0&&(K=dt);const te=je.get(U),J=_.state.lights,Ae=_.state.shadowsArray,Ce=J.state.version,Fe=ke.getParameters(U,J.state,Ae,K,re),Be=ke.getProgramCacheKey(Fe);let tt=te.programs;te.environment=U.isMeshStandardMaterial?K.environment:null,te.fog=K.fog,te.envMap=(U.isMeshStandardMaterial?se:R).get(U.envMap||te.environment),te.envMapRotation=te.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,tt===void 0&&(U.addEventListener("dispose",et),tt=new Map,te.programs=tt);let nt=tt.get(Be);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ce)return Nr(U,Fe),nt}else Fe.uniforms=ke.getUniforms(U),U.onBeforeCompile(Fe,C),nt=ke.acquireProgram(Fe,Be),tt.set(Be,nt),te.uniforms=Fe.uniforms;const Ze=te.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Nr(U,Fe),te.needsLights=rl(U),te.lightsStateVersion=Ce,te.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.directionalShadowMap.value=J.state.directionalShadowMap,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotShadowMap.value=J.state.spotShadowMap,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMap.value=J.state.pointShadowMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function Bi(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=ec.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function Nr(U,K){const re=je.get(U);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function dc(U,K,re,te,J){K.isScene!==!0&&(K=dt),B.resetTextureUnits();const Ae=K.fog,Ce=te.isMeshStandardMaterial?K.environment:null,Fe=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ns,Be=(te.isMeshStandardMaterial?se:R).get(te.envMap||Ce),tt=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,nt=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,vt=!!re.morphAttributes.color;let Ht=Ga;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const bt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,it=bt!==void 0?bt.length:0,Qe=je.get(te),ln=_.state.lights;if(he===!0&&(Se===!0||U!==T)){const qt=U===T&&te.id===A;we.setState(te,U,qt)}let yt=!1;te.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ln.state.version||Qe.outputColorSpace!==Fe||J.isBatchedMesh&&Qe.batching===!1||!J.isBatchedMesh&&Qe.batching===!0||J.isBatchedMesh&&Qe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Qe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Qe.instancing===!1||!J.isInstancedMesh&&Qe.instancing===!0||J.isSkinnedMesh&&Qe.skinning===!1||!J.isSkinnedMesh&&Qe.skinning===!0||J.isInstancedMesh&&Qe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Qe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Qe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Qe.instancingMorph===!1&&J.morphTexture!==null||Qe.envMap!==Be||te.fog===!0&&Qe.fog!==Ae||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==we.numPlanes||Qe.numIntersection!==we.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==nt||Qe.morphTargets!==Ze||Qe.morphNormals!==_t||Qe.morphColors!==vt||Qe.toneMapping!==Ht||Qe.morphTargetsCount!==it)&&(yt=!0):(yt=!0,Qe.__version=te.version);let Fn=Qe.currentProgram;yt===!0&&(Fn=on(te,K,J));let fi=!1,Ln=!1,hn=!1;const Nt=Fn.getUniforms(),Nn=Qe.uniforms;if(qe.useProgram(Fn.program)&&(fi=!0,Ln=!0,hn=!0),te.id!==A&&(A=te.id,Ln=!0),fi||T!==U){qe.buffers.depth.getReversed()?(be.copy(U.projectionMatrix),OT(be),PT(be),Nt.setValue(k,"projectionMatrix",be)):Nt.setValue(k,"projectionMatrix",U.projectionMatrix),Nt.setValue(k,"viewMatrix",U.matrixWorldInverse);const yn=Nt.map.cameraPosition;yn!==void 0&&yn.setValue(k,Ve.setFromMatrixPosition(U.matrixWorld)),ht.logarithmicDepthBuffer&&Nt.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),T!==U&&(T=U,Ln=!0,hn=!0)}if(J.isSkinnedMesh){Nt.setOptional(k,J,"bindMatrix"),Nt.setOptional(k,J,"bindMatrixInverse");const qt=J.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(k,"boneTexture",qt.boneTexture,B))}J.isBatchedMesh&&(Nt.setOptional(k,J,"batchingTexture"),Nt.setValue(k,"batchingTexture",J._matricesTexture,B),Nt.setOptional(k,J,"batchingIdTexture"),Nt.setValue(k,"batchingIdTexture",J._indirectTexture,B),Nt.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Nt.setValue(k,"batchingColorTexture",J._colorsTexture,B));const En=re.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&We.update(J,re,Fn),(Ln||Qe.receiveShadow!==J.receiveShadow)&&(Qe.receiveShadow=J.receiveShadow,Nt.setValue(k,"receiveShadow",J.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nn.envMap.value=Be,Nn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&K.environment!==null&&(Nn.envMapIntensity.value=K.environmentIntensity),Ln&&(Nt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&hc(Nn,hn),Ae&&te.fog===!0&&Le.refreshFogUniforms(Nn,Ae),Le.refreshMaterialUniforms(Nn,te,Q,ae,_.state.transmissionRenderTarget[U.id]),ec.upload(k,Bi(Qe),Nn,B)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ec.upload(k,Bi(Qe),Nn,B),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(k,"center",J.center),Nt.setValue(k,"modelViewMatrix",J.modelViewMatrix),Nt.setValue(k,"normalMatrix",J.normalMatrix),Nt.setValue(k,"modelMatrix",J.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let yn=0,Or=qt.length;yn<Or;yn++){const zn=qt[yn];Z.update(zn,Fn),Z.bind(zn,Fn)}}return Fn}function hc(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function rl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(U,K,re){je.get(U.texture).__webglTexture=K,je.get(U.depthTexture).__webglTexture=re;const te=je.get(U);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=re===void 0,te.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const re=je.get(U);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0};const qa=k.createFramebuffer();this.setRenderTarget=function(U,K=0,re=0){G=U,F=K,N=re;let te=!0,J=null,Ae=!1,Ce=!1;if(U){const Be=je.get(U);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(k.FRAMEBUFFER,null),te=!1;else if(Be.__webglFramebuffer===void 0)B.setupRenderTarget(U);else if(Be.__hasExternalTextures)B.rebindTextures(U,je.get(U.texture).__webglTexture,je.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Ze=U.depthTexture;if(Be.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(U.width!==Ze.image.width||U.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(U)}}const tt=U.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const nt=je.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(nt[K])?J=nt[K][re]:J=nt[K],Ae=!0):U.samples>0&&B.useMultisampledRTT(U)===!1?J=je.get(U).__webglMultisampledFramebuffer:Array.isArray(nt)?J=nt[re]:J=nt,O.copy(U.viewport),H.copy(U.scissor),q=U.scissorTest}else O.copy(ie).multiplyScalar(Q).floor(),H.copy(Te).multiplyScalar(Q).floor(),q=Re;if(re!==0&&(J=qa),qe.bindFramebuffer(k.FRAMEBUFFER,J)&&te&&qe.drawBuffers(U,J),qe.viewport(O),qe.scissor(H),qe.setScissorTest(q),Ae){const Be=je.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,re)}else if(Ce){const Be=je.get(U.texture),tt=K;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,re,tt)}else if(U!==null&&re!==0){const Be=je.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Be.__webglTexture,re)}A=-1},this.readRenderTargetPixels=function(U,K,re,te,J,Ae,Ce){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){qe.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Be=U.texture,tt=Be.format,nt=Be.type;if(!ht.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-te&&re>=0&&re<=U.height-J&&k.readPixels(K,re,te,J,Ke.convert(tt),Ke.convert(nt),Ae)}finally{const Be=G!==null?je.get(G).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(U,K,re,te,J,Ae,Ce){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=je.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){const Be=U.texture,tt=Be.format,nt=Be.type;if(!ht.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=U.width-te&&re>=0&&re<=U.height-J){qe.bindFramebuffer(k.FRAMEBUFFER,Fe);const Ze=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(K,re,te,J,Ke.convert(tt),Ke.convert(nt),0);const _t=G!==null?je.get(G).__webglFramebuffer:null;qe.bindFramebuffer(k.FRAMEBUFFER,_t);const vt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await NT(k,vt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ze),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae),k.deleteBuffer(Ze),k.deleteSync(vt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(U,K=null,re=0){U.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,U=arguments[1]);const te=Math.pow(2,-re),J=Math.floor(U.image.width*te),Ae=Math.floor(U.image.height*te),Ce=K!==null?K.x:0,Fe=K!==null?K.y:0;B.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,Ce,Fe,J,Ae),qe.unbindTexture()};const Vs=k.createFramebuffer(),Fi=k.createFramebuffer();this.copyTextureToTexture=function(U,K,re=null,te=null,J=0,Ae=null){U.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,U=arguments[1],K=arguments[2],Ae=arguments[3]||0,re=null),Ae===null&&(J!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=J,J=0):Ae=0);let Ce,Fe,Be,tt,nt,Ze,_t,vt,Ht;const bt=U.isCompressedTexture?U.mipmaps[Ae]:U.image;if(re!==null)Ce=re.max.x-re.min.x,Fe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,nt=re.min.y,Ze=re.isBox3?re.min.z:0;else{const En=Math.pow(2,-J);Ce=Math.floor(bt.width*En),Fe=Math.floor(bt.height*En),U.isDataArrayTexture?Be=bt.depth:U.isData3DTexture?Be=Math.floor(bt.depth*En):Be=1,tt=0,nt=0,Ze=0}te!==null?(_t=te.x,vt=te.y,Ht=te.z):(_t=0,vt=0,Ht=0);const it=Ke.convert(K.format),Qe=Ke.convert(K.type);let ln;K.isData3DTexture?(B.setTexture3D(K,0),ln=k.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(B.setTexture2DArray(K,0),ln=k.TEXTURE_2D_ARRAY):(B.setTexture2D(K,0),ln=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const yt=k.getParameter(k.UNPACK_ROW_LENGTH),Fn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),fi=k.getParameter(k.UNPACK_SKIP_PIXELS),Ln=k.getParameter(k.UNPACK_SKIP_ROWS),hn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,bt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,bt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const Nt=U.isDataArrayTexture||U.isData3DTexture,Nn=K.isDataArrayTexture||K.isData3DTexture;if(U.isDepthTexture){const En=je.get(U),qt=je.get(K),yn=je.get(En.__renderTarget),Or=je.get(qt.__renderTarget);qe.bindFramebuffer(k.READ_FRAMEBUFFER,yn.__webglFramebuffer),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let zn=0;zn<Be;zn++)Nt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(U).__webglTexture,J,Ze+zn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(K).__webglTexture,Ae,Ht+zn)),k.blitFramebuffer(tt,nt,Ce,Fe,_t,vt,Ce,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||je.has(U)){const En=je.get(U),qt=je.get(K);qe.bindFramebuffer(k.READ_FRAMEBUFFER,Vs),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Fi);for(let yn=0;yn<Be;yn++)Nt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,J,Ze+yn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,J),Nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qt.__webglTexture,Ae,Ht+yn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qt.__webglTexture,Ae),J!==0?k.blitFramebuffer(tt,nt,Ce,Fe,_t,vt,Ce,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):Nn?k.copyTexSubImage3D(ln,Ae,_t,vt,Ht+yn,tt,nt,Ce,Fe):k.copyTexSubImage2D(ln,Ae,_t,vt,tt,nt,Ce,Fe);qe.bindFramebuffer(k.READ_FRAMEBUFFER,null),qe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Nn?U.isDataTexture||U.isData3DTexture?k.texSubImage3D(ln,Ae,_t,vt,Ht,Ce,Fe,Be,it,Qe,bt.data):K.isCompressedArrayTexture?k.compressedTexSubImage3D(ln,Ae,_t,vt,Ht,Ce,Fe,Be,it,bt.data):k.texSubImage3D(ln,Ae,_t,vt,Ht,Ce,Fe,Be,it,Qe,bt):U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ae,_t,vt,Ce,Fe,it,Qe,bt.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ae,_t,vt,bt.width,bt.height,it,bt.data):k.texSubImage2D(k.TEXTURE_2D,Ae,_t,vt,Ce,Fe,it,Qe,bt);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Fn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,fi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ln),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hn),Ae===0&&K.generateMipmaps&&k.generateMipmap(ln),qe.unbindTexture()},this.copyTextureToTexture3D=function(U,K,re=null,te=null,J=0){return U.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),re=arguments[0]||null,te=arguments[1]||null,U=arguments[2],K=arguments[3],J=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,K,re,te,J)},this.initRenderTarget=function(U){je.get(U).__webglFramebuffer===void 0&&B.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?B.setTextureCube(U,0):U.isData3DTexture?B.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?B.setTexture2DArray(U,0):B.setTexture2D(U,0),qe.unbindTexture()},this.resetState=function(){F=0,N=0,G=null,qe.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}function t2(){const s=new oA,e=new ci(75,window.innerWidth/window.innerHeight,.1,1e3),i=new e2;i.setSize(window.innerWidth,window.innerHeight),i.setAnimationLoop(p),document.body.appendChild(i.domElement);const r=new Fs(1,1,1),l=new cA({color:10092373}),u=new Li(r,l);s.add(u);const d=new mA(16777215,.9);s.add(d);const f=new gA(4210752);s.add(f),e.position.z=5;function p(){u.rotation.x+=.01,u.rotation.y+=.01,i.render(s,e)}return V.jsx(V.Fragment,{})}function n2(){return V.jsx(WM,{children:V.jsxs(SM,{children:[V.jsx(sh,{path:"/",element:V.jsx(kb,{})}),V.jsx(sh,{path:"/Project1",element:V.jsx(t2,{})})]})})}Cx.createRoot(document.getElementById("root")).render(V.jsx(pe.StrictMode,{children:V.jsx(n2,{})}));
