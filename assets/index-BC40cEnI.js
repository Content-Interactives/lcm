(function(){const ft=document.createElement("link").relList;if(ft&&ft.supports&&ft.supports("modulepreload"))return;for(const q of document.querySelectorAll('link[rel="modulepreload"]'))g(q);new MutationObserver(q=>{for(const J of q)if(J.type==="childList")for(const ot of J.addedNodes)ot.tagName==="LINK"&&ot.rel==="modulepreload"&&g(ot)}).observe(document,{childList:!0,subtree:!0});function tt(q){const J={};return q.integrity&&(J.integrity=q.integrity),q.referrerPolicy&&(J.referrerPolicy=q.referrerPolicy),q.crossOrigin==="use-credentials"?J.credentials="include":q.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function g(q){if(q.ep)return;q.ep=!0;const J=tt(q);fetch(q.href,J)}})();function Tp(M){return M&&M.__esModule&&Object.prototype.hasOwnProperty.call(M,"default")?M.default:M}var Os={exports:{}},li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo;function Ep(){if(oo)return li;oo=1;var M=Symbol.for("react.transitional.element"),ft=Symbol.for("react.fragment");function tt(g,q,J){var ot=null;if(J!==void 0&&(ot=""+J),q.key!==void 0&&(ot=""+q.key),"key"in q){J={};for(var Mt in q)Mt!=="key"&&(J[Mt]=q[Mt])}else J=q;return q=J.ref,{$$typeof:M,type:g,key:ot,ref:q!==void 0?q:null,props:J}}return li.Fragment=ft,li.jsx=tt,li.jsxs=tt,li}var mo;function Ap(){return mo||(mo=1,Os.exports=Ep()),Os.exports}var w=Ap(),Rs={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po;function Up(){if(po)return B;po=1;var M=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),Mt=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),et=Symbol.iterator;function at(f){return f===null||typeof f!="object"?null:(f=et&&f[et]||f["@@iterator"],typeof f=="function"?f:null)}var St={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ht=Object.assign,Ct={};function Ut(f,z,R){this.props=f,this.context=z,this.refs=Ct,this.updater=R||St}Ut.prototype.isReactComponent={},Ut.prototype.setState=function(f,z){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,z,"setState")},Ut.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function ze(){}ze.prototype=Ut.prototype;function H(f,z,R){this.props=f,this.context=z,this.refs=Ct,this.updater=R||St}var zt=H.prototype=new ze;zt.constructor=H,ht(zt,Ut.prototype),zt.isPureReactComponent=!0;var Qt=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},wt=Object.prototype.hasOwnProperty;function Yt(f,z,R,O,U,K){return R=K.ref,{$$typeof:M,type:f,key:z,ref:R!==void 0?R:null,props:K}}function kt(f,z){return Yt(f.type,z,void 0,void 0,void 0,f.props)}function Ft(f){return typeof f=="object"&&f!==null&&f.$$typeof===M}function ae(f){var z={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(R){return z[R]})}var le=/\/+/g;function Tt(f,z){return typeof f=="object"&&f!==null&&f.key!=null?ae(""+f.key):z.toString(36)}function we(){}function Xe(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(we,we):(f.status="pending",f.then(function(z){f.status==="pending"&&(f.status="fulfilled",f.value=z)},function(z){f.status==="pending"&&(f.status="rejected",f.reason=z)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function xt(f,z,R,O,U){var K=typeof f;(K==="undefined"||K==="boolean")&&(f=null);var j=!1;if(f===null)j=!0;else switch(K){case"bigint":case"string":case"number":j=!0;break;case"object":switch(f.$$typeof){case M:case ft:j=!0;break;case A:return j=f._init,xt(j(f._payload),z,R,O,U)}}if(j)return U=U(f),j=O===""?"."+Tt(f,0):O,Qt(U)?(R="",j!=null&&(R=j.replace(le,"$&/")+"/"),xt(U,z,R,"",function(me){return me})):U!=null&&(Ft(U)&&(U=kt(U,R+(U.key==null||f&&f.key===U.key?"":(""+U.key).replace(le,"$&/")+"/")+j)),z.push(U)),1;j=0;var jt=O===""?".":O+":";if(Qt(f))for(var I=0;I<f.length;I++)O=f[I],K=jt+Tt(O,I),j+=xt(O,z,R,K,U);else if(I=at(f),typeof I=="function")for(f=I.call(f),I=0;!(O=f.next()).done;)O=O.value,K=jt+Tt(O,I++),j+=xt(O,z,R,K,U);else if(K==="object"){if(typeof f.then=="function")return xt(Xe(f),z,R,O,U);throw z=String(f),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return j}function y(f,z,R){if(f==null)return f;var O=[],U=0;return xt(f,O,"","",function(K){return z.call(R,K,U++)}),O}function X(f){if(f._status===-1){var z=f._result;z=z(),z.then(function(R){(f._status===0||f._status===-1)&&(f._status=1,f._result=R)},function(R){(f._status===0||f._status===-1)&&(f._status=2,f._result=R)}),f._status===-1&&(f._status=0,f._result=z)}if(f._status===1)return f._result.default;throw f._result}var _=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)};function $(){}return B.Children={map:y,forEach:function(f,z,R){y(f,function(){z.apply(this,arguments)},R)},count:function(f){var z=0;return y(f,function(){z++}),z},toArray:function(f){return y(f,function(z){return z})||[]},only:function(f){if(!Ft(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},B.Component=Ut,B.Fragment=tt,B.Profiler=q,B.PureComponent=H,B.StrictMode=g,B.Suspense=N,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,B.__COMPILER_RUNTIME={__proto__:null,c:function(f){return V.H.useMemoCache(f)}},B.cache=function(f){return function(){return f.apply(null,arguments)}},B.cloneElement=function(f,z,R){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var O=ht({},f.props),U=f.key,K=void 0;if(z!=null)for(j in z.ref!==void 0&&(K=void 0),z.key!==void 0&&(U=""+z.key),z)!wt.call(z,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&z.ref===void 0||(O[j]=z[j]);var j=arguments.length-2;if(j===1)O.children=R;else if(1<j){for(var jt=Array(j),I=0;I<j;I++)jt[I]=arguments[I+2];O.children=jt}return Yt(f.type,U,void 0,void 0,K,O)},B.createContext=function(f){return f={$$typeof:ot,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:J,_context:f},f},B.createElement=function(f,z,R){var O,U={},K=null;if(z!=null)for(O in z.key!==void 0&&(K=""+z.key),z)wt.call(z,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(U[O]=z[O]);var j=arguments.length-2;if(j===1)U.children=R;else if(1<j){for(var jt=Array(j),I=0;I<j;I++)jt[I]=arguments[I+2];U.children=jt}if(f&&f.defaultProps)for(O in j=f.defaultProps,j)U[O]===void 0&&(U[O]=j[O]);return Yt(f,K,void 0,void 0,null,U)},B.createRef=function(){return{current:null}},B.forwardRef=function(f){return{$$typeof:Mt,render:f}},B.isValidElement=Ft,B.lazy=function(f){return{$$typeof:A,_payload:{_status:-1,_result:f},_init:X}},B.memo=function(f,z){return{$$typeof:S,type:f,compare:z===void 0?null:z}},B.startTransition=function(f){var z=V.T,R={};V.T=R;try{var O=f(),U=V.S;U!==null&&U(R,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then($,_)}catch(K){_(K)}finally{V.T=z}},B.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},B.use=function(f){return V.H.use(f)},B.useActionState=function(f,z,R){return V.H.useActionState(f,z,R)},B.useCallback=function(f,z){return V.H.useCallback(f,z)},B.useContext=function(f){return V.H.useContext(f)},B.useDebugValue=function(){},B.useDeferredValue=function(f,z){return V.H.useDeferredValue(f,z)},B.useEffect=function(f,z,R){var O=V.H;if(typeof R=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return O.useEffect(f,z)},B.useId=function(){return V.H.useId()},B.useImperativeHandle=function(f,z,R){return V.H.useImperativeHandle(f,z,R)},B.useInsertionEffect=function(f,z){return V.H.useInsertionEffect(f,z)},B.useLayoutEffect=function(f,z){return V.H.useLayoutEffect(f,z)},B.useMemo=function(f,z){return V.H.useMemo(f,z)},B.useOptimistic=function(f,z){return V.H.useOptimistic(f,z)},B.useReducer=function(f,z,R){return V.H.useReducer(f,z,R)},B.useRef=function(f){return V.H.useRef(f)},B.useState=function(f){return V.H.useState(f)},B.useSyncExternalStore=function(f,z,R){return V.H.useSyncExternalStore(f,z,R)},B.useTransition=function(){return V.H.useTransition()},B.version="19.1.0",B}var ho;function Us(){return ho||(ho=1,Rs.exports=Up()),Rs.exports}var k=Us();const kp=Tp(k);var Ms={exports:{}},ni={},Ts={exports:{}},Es={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go;function Np(){return go||(go=1,function(M){function ft(y,X){var _=y.length;y.push(X);t:for(;0<_;){var $=_-1>>>1,f=y[$];if(0<q(f,X))y[$]=X,y[_]=f,_=$;else break t}}function tt(y){return y.length===0?null:y[0]}function g(y){if(y.length===0)return null;var X=y[0],_=y.pop();if(_!==X){y[0]=_;t:for(var $=0,f=y.length,z=f>>>1;$<z;){var R=2*($+1)-1,O=y[R],U=R+1,K=y[U];if(0>q(O,_))U<f&&0>q(K,O)?(y[$]=K,y[U]=_,$=U):(y[$]=O,y[R]=_,$=R);else if(U<f&&0>q(K,_))y[$]=K,y[U]=_,$=U;else break t}}return X}function q(y,X){var _=y.sortIndex-X.sortIndex;return _!==0?_:y.id-X.id}if(M.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;M.unstable_now=function(){return J.now()}}else{var ot=Date,Mt=ot.now();M.unstable_now=function(){return ot.now()-Mt}}var N=[],S=[],A=1,et=null,at=3,St=!1,ht=!1,Ct=!1,Ut=!1,ze=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,zt=typeof setImmediate<"u"?setImmediate:null;function Qt(y){for(var X=tt(S);X!==null;){if(X.callback===null)g(S);else if(X.startTime<=y)g(S),X.sortIndex=X.expirationTime,ft(N,X);else break;X=tt(S)}}function V(y){if(Ct=!1,Qt(y),!ht)if(tt(N)!==null)ht=!0,wt||(wt=!0,Tt());else{var X=tt(S);X!==null&&xt(V,X.startTime-y)}}var wt=!1,Yt=-1,kt=5,Ft=-1;function ae(){return Ut?!0:!(M.unstable_now()-Ft<kt)}function le(){if(Ut=!1,wt){var y=M.unstable_now();Ft=y;var X=!0;try{t:{ht=!1,Ct&&(Ct=!1,H(Yt),Yt=-1),St=!0;var _=at;try{e:{for(Qt(y),et=tt(N);et!==null&&!(et.expirationTime>y&&ae());){var $=et.callback;if(typeof $=="function"){et.callback=null,at=et.priorityLevel;var f=$(et.expirationTime<=y);if(y=M.unstable_now(),typeof f=="function"){et.callback=f,Qt(y),X=!0;break e}et===tt(N)&&g(N),Qt(y)}else g(N);et=tt(N)}if(et!==null)X=!0;else{var z=tt(S);z!==null&&xt(V,z.startTime-y),X=!1}}break t}finally{et=null,at=_,St=!1}X=void 0}}finally{X?Tt():wt=!1}}}var Tt;if(typeof zt=="function")Tt=function(){zt(le)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Xe=we.port2;we.port1.onmessage=le,Tt=function(){Xe.postMessage(null)}}else Tt=function(){ze(le,0)};function xt(y,X){Yt=ze(function(){y(M.unstable_now())},X)}M.unstable_IdlePriority=5,M.unstable_ImmediatePriority=1,M.unstable_LowPriority=4,M.unstable_NormalPriority=3,M.unstable_Profiling=null,M.unstable_UserBlockingPriority=2,M.unstable_cancelCallback=function(y){y.callback=null},M.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kt=0<y?Math.floor(1e3/y):5},M.unstable_getCurrentPriorityLevel=function(){return at},M.unstable_next=function(y){switch(at){case 1:case 2:case 3:var X=3;break;default:X=at}var _=at;at=X;try{return y()}finally{at=_}},M.unstable_requestPaint=function(){Ut=!0},M.unstable_runWithPriority=function(y,X){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var _=at;at=y;try{return X()}finally{at=_}},M.unstable_scheduleCallback=function(y,X,_){var $=M.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?$+_:$):_=$,y){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=_+f,y={id:A++,callback:X,priorityLevel:y,startTime:_,expirationTime:f,sortIndex:-1},_>$?(y.sortIndex=_,ft(S,y),tt(N)===null&&y===tt(S)&&(Ct?(H(Yt),Yt=-1):Ct=!0,xt(V,_-$))):(y.sortIndex=f,ft(N,y),ht||St||(ht=!0,wt||(wt=!0,Tt()))),y},M.unstable_shouldYield=ae,M.unstable_wrapCallback=function(y){var X=at;return function(){var _=at;at=X;try{return y.apply(this,arguments)}finally{at=_}}}}(Es)),Es}var yo;function _p(){return yo||(yo=1,Ts.exports=Np()),Ts.exports}var As={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo;function Dp(){if(xo)return Kt;xo=1;var M=Us();function ft(N){var S="https://react.dev/errors/"+N;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)S+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+N+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tt(){}var g={d:{f:tt,r:function(){throw Error(ft(522))},D:tt,C:tt,L:tt,m:tt,X:tt,S:tt,M:tt},p:0,findDOMNode:null},q=Symbol.for("react.portal");function J(N,S,A){var et=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:et==null?null:""+et,children:N,containerInfo:S,implementation:A}}var ot=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Mt(N,S){if(N==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Kt.createPortal=function(N,S){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(ft(299));return J(N,S,null,A)},Kt.flushSync=function(N){var S=ot.T,A=g.p;try{if(ot.T=null,g.p=2,N)return N()}finally{ot.T=S,g.p=A,g.d.f()}},Kt.preconnect=function(N,S){typeof N=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,g.d.C(N,S))},Kt.prefetchDNS=function(N){typeof N=="string"&&g.d.D(N)},Kt.preinit=function(N,S){if(typeof N=="string"&&S&&typeof S.as=="string"){var A=S.as,et=Mt(A,S.crossOrigin),at=typeof S.integrity=="string"?S.integrity:void 0,St=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;A==="style"?g.d.S(N,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:et,integrity:at,fetchPriority:St}):A==="script"&&g.d.X(N,{crossOrigin:et,integrity:at,fetchPriority:St,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Kt.preinitModule=function(N,S){if(typeof N=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var A=Mt(S.as,S.crossOrigin);g.d.M(N,{crossOrigin:A,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&g.d.M(N)},Kt.preload=function(N,S){if(typeof N=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var A=S.as,et=Mt(A,S.crossOrigin);g.d.L(N,A,{crossOrigin:et,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Kt.preloadModule=function(N,S){if(typeof N=="string")if(S){var A=Mt(S.as,S.crossOrigin);g.d.m(N,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:A,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else g.d.m(N)},Kt.requestFormReset=function(N){g.d.r(N)},Kt.unstable_batchedUpdates=function(N,S){return N(S)},Kt.useFormState=function(N,S,A){return ot.H.useFormState(N,S,A)},Kt.useFormStatus=function(){return ot.H.useHostTransitionStatus()},Kt.version="19.1.0",Kt}var bo;function Lp(){if(bo)return As.exports;bo=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(ft){console.error(ft)}}return M(),As.exports=Dp(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo;function Hp(){if(vo)return ni;vo=1;var M=_p(),ft=Us(),tt=Lp();function g(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ot(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mt(t){if(J(t)!==t)throw Error(g(188))}function N(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(g(188));return e!==t?null:t}for(var a=t,l=e;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return Mt(n),t;if(i===l)return Mt(n),e;i=i.sibling}throw Error(g(188))}if(a.return!==l.return)a=n,l=i;else{for(var r=!1,u=n.child;u;){if(u===a){r=!0,a=n,l=i;break}if(u===l){r=!0,l=n,a=i;break}u=u.sibling}if(!r){for(u=i.child;u;){if(u===a){r=!0,a=i,l=n;break}if(u===l){r=!0,l=i,a=n;break}u=u.sibling}if(!r)throw Error(g(189))}}if(a.alternate!==l)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?t:e}function S(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=S(t),e!==null)return e;t=t.sibling}return null}var A=Object.assign,et=Symbol.for("react.element"),at=Symbol.for("react.transitional.element"),St=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),Ct=Symbol.for("react.strict_mode"),Ut=Symbol.for("react.profiler"),ze=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),zt=Symbol.for("react.context"),Qt=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),Yt=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Tt(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var we=Symbol.for("react.client.reference");function Xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===we?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ht:return"Fragment";case Ut:return"Profiler";case Ct:return"StrictMode";case V:return"Suspense";case wt:return"SuspenseList";case Ft:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case St:return"Portal";case zt:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case Qt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yt:return e=t.displayName||null,e!==null?e:Xe(t.type)||"Memo";case kt:e=t._payload,t=t._init;try{return Xe(t(e))}catch{}}return null}var xt=Array.isArray,y=ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},$=[],f=-1;function z(t){return{current:t}}function R(t){0>f||(t.current=$[f],$[f]=null,f--)}function O(t,e){f++,$[f]=t.current,t.current=e}var U=z(null),K=z(null),j=z(null),jt=z(null);function I(t,e){switch(O(j,e),O(K,t),O(U,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?j0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=j0(e),t=q0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}R(U),O(U,t)}function me(){R(U),R(K),R(j)}function $t(t){t.memoizedState!==null&&O(jt,t);var e=U.current,a=q0(e,t.type);e!==a&&(O(K,t),O(U,a))}function ua(t){K.current===t&&(R(U),R(K)),jt.current===t&&(R(jt),In._currentValue=_)}var ii=Object.prototype.hasOwnProperty,Da=M.unstable_scheduleCallback,La=M.unstable_cancelCallback,Pl=M.unstable_shouldYield,ul=M.unstable_requestPaint,Wt=M.unstable_now,ri=M.unstable_getCurrentPriorityLevel,sl=M.unstable_ImmediatePriority,tn=M.unstable_UserBlockingPriority,sa=M.unstable_NormalPriority,fa=M.unstable_LowPriority,fl=M.unstable_IdlePriority,cl=M.log,en=M.unstable_setDisableYieldValue,Be=null,Nt=null;function ne(t){if(typeof cl=="function"&&en(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Be,t)}catch{}}var _t=Math.clz32?Math.clz32:ol,ca=Math.log,an=Math.LN2;function ol(t){return t>>>=0,t===0?32:31-(ca(t)/an|0)|0}var oa=256,Ge=4194304;function Oe(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ce(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var n=0,i=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var u=l&134217727;return u!==0?(l=u&~i,l!==0?n=Oe(l):(r&=u,r!==0?n=Oe(r):a||(a=u&~t,a!==0&&(n=Oe(a))))):(u=l&~i,u!==0?n=Oe(u):r!==0?n=Oe(r):a||(a=l&~t,a!==0&&(n=Oe(a)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,a=e&-e,i>=a||i===32&&(a&4194048)!==0)?e:n}function Qe(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ui(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ml(){var t=oa;return oa<<=1,(oa&4194048)===0&&(oa=256),t}function si(){var t=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),t}function Ha(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ya(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ln(t,e,a,l,n,i){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var u=t.entanglements,s=t.expirationTimes,p=t.hiddenUpdates;for(a=r&~a;0<a;){var x=31-_t(a),v=1<<x;u[x]=0,s[x]=-1;var d=p[x];if(d!==null)for(p[x]=null,x=0;x<d.length;x++){var h=d[x];h!==null&&(h.lane&=-536870913)}a&=~v}l!==0&&nn(t,l,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(r&~e))}function nn(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-_t(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function pl(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-_t(a),n=1<<l;n&e|t[l]&e&&(t[l]|=e),a&=~n}}function dl(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ja(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qa(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:io(t.type))}function rn(t,e){var a=X.p;try{return X.p=t,e()}finally{X.p=a}}var Re=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Re,Zt="__reactProps$"+Re,De="__reactContainer$"+Re,hl="__reactEvents$"+Re,un="__reactListeners$"+Re,fi="__reactHandles$"+Re,gl="__reactResources$"+Re,Ba="__reactMarker$"+Re;function Ga(t){delete t[Xt],delete t[Zt],delete t[hl],delete t[un],delete t[fi]}function Ze(t){var e=t[Xt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[De]||a[Xt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Q0(t);t!==null;){if(a=t[Xt])return a;t=Q0(t)}return e}t=a,a=t.parentNode}return null}function Me(t){if(t=t[Xt]||t[De]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ca(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(g(33))}function Te(t){var e=t[gl];return e||(e=t[gl]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function pt(t){t[Ba]=!0}var sn=new Set,fn={};function Ee(t,e){Ve(t,e),Ve(t+"Capture",e)}function Ve(t,e){for(fn[t]=e,t=0;t<e.length;t++)sn.add(e[t])}var yl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ae={},ci={};function vr(t){return ii.call(ci,t)?!0:ii.call(Ae,t)?!1:yl.test(t)?ci[t]=!0:(Ae[t]=!0,!1)}function xl(t,e,a){if(vr(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function bl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Ue(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var cn,oi;function ma(t){if(cn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);cn=e&&e[1]||"",oi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cn+t+oi}var Qa=!1;function Sr(t,e){if(!t||Qa)return"";Qa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(h){var d=h}Reflect.construct(t,[],v)}else{try{v.call()}catch(h){d=h}t.call(v.prototype)}}else{try{throw Error()}catch(h){d=h}(v=t())&&typeof v.catch=="function"&&v.catch(function(){})}}catch(h){if(h&&d&&typeof h.stack=="string")return[h.stack,d.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],u=i[1];if(r&&u){var s=r.split(`
`),p=u.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===p.length)for(l=s.length-1,n=p.length-1;1<=l&&0<=n&&s[l]!==p[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==p[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==p[n]){var x=`
`+s[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=n);break}}}finally{Qa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ma(a):""}function zo(t){switch(t.tag){case 26:case 27:case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 15:return Sr(t.type,!1);case 11:return Sr(t.type.render,!1);case 1:return Sr(t.type,!0);case 31:return ma("Activity");default:return""}}function ks(t){try{var e="";do e+=zo(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ns(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wo(t){var e=Ns(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(r){l=""+r,i.call(this,r)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(r){l=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mi(t){t._valueTracker||(t._valueTracker=wo(t))}function _s(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Ns(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xo=/[\n"\\]/g;function de(t){return t.replace(Xo,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function zr(t,e,a,l,n,i,r,u){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+pe(e)):t.value!==""+pe(e)&&(t.value=""+pe(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?wr(t,r,pe(e)):a!=null?wr(t,r,pe(a)):l!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.name=""+pe(u):t.removeAttribute("name")}function Ds(t,e,a,l,n,i,r,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;a=a!=null?""+pe(a):"",e=e!=null?""+pe(e):a,u||e===t.value||(t.value=e),t.defaultValue=e}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=u?t.checked:!!l,t.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function wr(t,e,a){e==="number"&&pi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vl(t,e,a,l){if(t=t.options,e){e={};for(var n=0;n<a.length;n++)e["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=e.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&l&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),e=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,l&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Ls(t,e,a){if(e!=null&&(e=""+pe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+pe(a):""}function Hs(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(g(92));if(xt(l)){if(1<l.length)throw Error(g(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=pe(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Sl(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Oo=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ys(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Oo.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function js(t,e,a){if(e!=null&&typeof e!="object")throw Error(g(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var n in e)l=e[n],e.hasOwnProperty(n)&&a[n]!==l&&Ys(t,n,l)}else for(var i in e)e.hasOwnProperty(i)&&Ys(t,i,e[i])}function Xr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mo=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function di(t){return Mo.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Or=null;function Rr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zl=null,wl=null;function qs(t){var e=Me(t);if(e&&(t=e.stateNode)){var a=t[Zt]||null;t:switch(t=e.stateNode,e.type){case"input":if(zr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var n=l[Zt]||null;if(!n)throw Error(g(90));zr(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&_s(l)}break t;case"textarea":Ls(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&vl(t,!!a.multiple,e,!1)}}}var Mr=!1;function Bs(t,e,a){if(Mr)return t(e,a);Mr=!0;try{var l=t(e);return l}finally{if(Mr=!1,(zl!==null||wl!==null)&&(Pi(),zl&&(e=zl,t=wl,wl=zl=null,qs(e),t)))for(e=0;e<t.length;e++)qs(t[e])}}function on(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Zt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(g(231,e,typeof a));return a}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=!1;if(Ke)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Tr=!1}var pa=null,Er=null,hi=null;function Gs(){if(hi)return hi;var t,e=Er,a=e.length,l,n="value"in pa?pa.value:pa.textContent,i=n.length;for(t=0;t<a&&e[t]===n[t];t++);var r=a-t;for(l=1;l<=r&&e[a-l]===n[i-l];l++);return hi=n.slice(t,1<l?1-l:void 0)}function gi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yi(){return!0}function Cs(){return!1}function It(t){function e(a,l,n,i,r){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(a=t[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yi:Cs,this.isPropagationStopped=Cs,this}return A(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),e}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xi=It(Za),pn=A({},Za,{view:0,detail:0}),To=It(pn),Ar,Ur,dn,bi=A({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==dn&&(dn&&t.type==="mousemove"?(Ar=t.screenX-dn.screenX,Ur=t.screenY-dn.screenY):Ur=Ar=0,dn=t),Ar)},movementY:function(t){return"movementY"in t?t.movementY:Ur}}),Qs=It(bi),Eo=A({},bi,{dataTransfer:0}),Ao=It(Eo),Uo=A({},pn,{relatedTarget:0}),kr=It(Uo),ko=A({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),No=It(ko),_o=A({},Za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Do=It(_o),Lo=A({},Za,{data:0}),Zs=It(Lo),Ho={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yo={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qo(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jo[t])?!!e[t]:!1}function Nr(){return qo}var Bo=A({},pn,{key:function(t){if(t.key){var e=Ho[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yo[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(t){return t.type==="keypress"?gi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Go=It(Bo),Co=A({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=It(Co),Qo=A({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),Zo=It(Qo),Vo=A({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ko=It(Vo),Jo=A({},bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fo=It(Jo),$o=A({},Za,{newState:0,oldState:0}),Wo=It($o),Io=[9,13,27,32],_r=Ke&&"CompositionEvent"in window,hn=null;Ke&&"documentMode"in document&&(hn=document.documentMode);var Po=Ke&&"TextEvent"in window&&!hn,Ks=Ke&&(!_r||hn&&8<hn&&11>=hn),Js=" ",Fs=!1;function $s(t,e){switch(t){case"keyup":return Io.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ws(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xl=!1;function tm(t,e){switch(t){case"compositionend":return Ws(e);case"keypress":return e.which!==32?null:(Fs=!0,Js);case"textInput":return t=e.data,t===Js&&Fs?null:t;default:return null}}function em(t,e){if(Xl)return t==="compositionend"||!_r&&$s(t,e)?(t=Gs(),hi=Er=pa=null,Xl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ks&&e.locale!=="ko"?null:e.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!am[t.type]:e==="textarea"}function Ps(t,e,a,l){zl?wl?wl.push(l):wl=[l]:zl=l,e=ir(e,"onChange"),0<e.length&&(a=new xi("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var gn=null,yn=null;function lm(t){_0(t,0)}function vi(t){var e=Ca(t);if(_s(e))return t}function tf(t,e){if(t==="change")return e}var ef=!1;if(Ke){var Dr;if(Ke){var Lr="oninput"in document;if(!Lr){var af=document.createElement("div");af.setAttribute("oninput","return;"),Lr=typeof af.oninput=="function"}Dr=Lr}else Dr=!1;ef=Dr&&(!document.documentMode||9<document.documentMode)}function lf(){gn&&(gn.detachEvent("onpropertychange",nf),yn=gn=null)}function nf(t){if(t.propertyName==="value"&&vi(yn)){var e=[];Ps(e,yn,t,Rr(t)),Bs(lm,e)}}function nm(t,e,a){t==="focusin"?(lf(),gn=e,yn=a,gn.attachEvent("onpropertychange",nf)):t==="focusout"&&lf()}function im(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vi(yn)}function rm(t,e){if(t==="click")return vi(e)}function um(t,e){if(t==="input"||t==="change")return vi(e)}function sm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ie=typeof Object.is=="function"?Object.is:sm;function xn(t,e){if(ie(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!ii.call(e,n)||!ie(t[n],e[n]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function uf(t,e){var a=rf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rf(a)}}function sf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ff(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pi(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=pi(t.document)}return e}function Hr(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var fm=Ke&&"documentMode"in document&&11>=document.documentMode,Ol=null,Yr=null,bn=null,jr=!1;function cf(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jr||Ol==null||Ol!==pi(l)||(l=Ol,"selectionStart"in l&&Hr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bn&&xn(bn,l)||(bn=l,l=ir(Yr,"onSelect"),0<l.length&&(e=new xi("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Ol)))}function Va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Rl={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},qr={},of={};Ke&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Rl.animationend.animation,delete Rl.animationiteration.animation,delete Rl.animationstart.animation),"TransitionEvent"in window||delete Rl.transitionend.transition);function Ka(t){if(qr[t])return qr[t];if(!Rl[t])return t;var e=Rl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in of)return qr[t]=e[a];return t}var mf=Ka("animationend"),pf=Ka("animationiteration"),df=Ka("animationstart"),cm=Ka("transitionrun"),om=Ka("transitionstart"),mm=Ka("transitioncancel"),hf=Ka("transitionend"),gf=new Map,Br="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Br.push("scrollEnd");function ke(t,e){gf.set(t,e),Ee(e,[t])}var yf=new WeakMap;function he(t,e){if(typeof t=="object"&&t!==null){var a=yf.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ks(e)},yf.set(t,e),e)}return{value:t,source:e,stack:ks(e)}}var ge=[],Ml=0,Gr=0;function Si(){for(var t=Ml,e=Gr=Ml=0;e<t;){var a=ge[e];ge[e++]=null;var l=ge[e];ge[e++]=null;var n=ge[e];ge[e++]=null;var i=ge[e];if(ge[e++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&xf(a,n,i)}}function zi(t,e,a,l){ge[Ml++]=t,ge[Ml++]=e,ge[Ml++]=a,ge[Ml++]=l,Gr|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Cr(t,e,a,l){return zi(t,e,a,l),wi(t)}function Tl(t,e){return zi(t,null,null,e),wi(t)}function xf(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-_t(a),t=i.hiddenUpdates,l=t[n],l===null?t[n]=[e]:l.push(e),e.lane=a|536870912),i):null}function wi(t){if(50<Qn)throw Qn=0,Fu=null,Error(g(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var El={};function pm(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function re(t,e,a,l){return new pm(t,e,a,l)}function Qr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Je(t,e){var a=t.alternate;return a===null?(a=re(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bf(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xi(t,e,a,l,n,i){var r=0;if(l=t,typeof t=="function")Qr(t)&&(r=1);else if(typeof t=="string")r=hp(t,a,U.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ft:return t=re(31,a,e,n),t.elementType=Ft,t.lanes=i,t;case ht:return Ja(a.children,n,i,e);case Ct:r=8,n|=24;break;case Ut:return t=re(12,a,e,n|2),t.elementType=Ut,t.lanes=i,t;case V:return t=re(13,a,e,n),t.elementType=V,t.lanes=i,t;case wt:return t=re(19,a,e,n),t.elementType=wt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ze:case zt:r=10;break t;case H:r=9;break t;case Qt:r=11;break t;case Yt:r=14;break t;case kt:r=16,l=null;break t}r=29,a=Error(g(130,t===null?"null":typeof t,"")),l=null}return e=re(r,a,e,n),e.elementType=t,e.type=l,e.lanes=i,e}function Ja(t,e,a,l){return t=re(7,t,l,e),t.lanes=a,t}function Zr(t,e,a){return t=re(6,t,null,e),t.lanes=a,t}function Vr(t,e,a){return e=re(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Al=[],Ul=0,Oi=null,Ri=0,ye=[],xe=0,Fa=null,Fe=1,$e="";function $a(t,e){Al[Ul++]=Ri,Al[Ul++]=Oi,Oi=t,Ri=e}function vf(t,e,a){ye[xe++]=Fe,ye[xe++]=$e,ye[xe++]=Fa,Fa=t;var l=Fe;t=$e;var n=32-_t(l)-1;l&=~(1<<n),a+=1;var i=32-_t(e)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,Fe=1<<32-_t(e)+n|a<<n|l,$e=i+t}else Fe=1<<i|a<<n|l,$e=t}function Kr(t){t.return!==null&&($a(t,1),vf(t,1,0))}function Jr(t){for(;t===Oi;)Oi=Al[--Ul],Al[Ul]=null,Ri=Al[--Ul],Al[Ul]=null;for(;t===Fa;)Fa=ye[--xe],ye[xe]=null,$e=ye[--xe],ye[xe]=null,Fe=ye[--xe],ye[xe]=null}var Jt=null,gt=null,P=!1,Wa=null,Le=!1,Fr=Error(g(519));function Ia(t){var e=Error(g(418,""));throw zn(he(e,t)),Fr}function Sf(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Xt]=t,e[Zt]=l,a){case"dialog":Z("cancel",e),Z("close",e);break;case"iframe":case"object":case"embed":Z("load",e);break;case"video":case"audio":for(a=0;a<Vn.length;a++)Z(Vn[a],e);break;case"source":Z("error",e);break;case"img":case"image":case"link":Z("error",e),Z("load",e);break;case"details":Z("toggle",e);break;case"input":Z("invalid",e),Ds(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),mi(e);break;case"select":Z("invalid",e);break;case"textarea":Z("invalid",e),Hs(e,l.value,l.defaultValue,l.children),mi(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Y0(e.textContent,a)?(l.popover!=null&&(Z("beforetoggle",e),Z("toggle",e)),l.onScroll!=null&&Z("scroll",e),l.onScrollEnd!=null&&Z("scrollend",e),l.onClick!=null&&(e.onclick=rr),e=!0):e=!1,e||Ia(t)}function zf(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 13:Le=!1;return;case 27:case 3:Le=!0;return;default:Jt=Jt.return}}function vn(t){if(t!==Jt)return!1;if(!P)return zf(t),P=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||os(t.type,t.memoizedProps)),a=!a),a&&gt&&Ia(t),zf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(g(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){gt=_e(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}gt=null}}else e===27?(e=gt,Ea(t.type)?(t=hs,hs=null,gt=t):gt=e):gt=Jt?_e(t.stateNode.nextSibling):null;return!0}function Sn(){gt=Jt=null,P=!1}function wf(){var t=Wa;return t!==null&&(ee===null?ee=t:ee.push.apply(ee,t),Wa=null),t}function zn(t){Wa===null?Wa=[t]:Wa.push(t)}var $r=z(null),Pa=null,We=null;function da(t,e,a){O($r,e._currentValue),e._currentValue=a}function Ie(t){t._currentValue=$r.current,R($r)}function Wr(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Ir(t,e,a,l){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;t:for(;i!==null;){var u=i;i=n;for(var s=0;s<e.length;s++)if(u.context===e[s]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Wr(i.return,a,t),l||(r=null);break t}i=u.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(g(341));r.lanes|=a,i=r.alternate,i!==null&&(i.lanes|=a),Wr(r,a,t),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===t){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function wn(t,e,a,l){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(g(387));if(r=r.memoizedProps,r!==null){var u=n.type;ie(n.pendingProps.value,r.value)||(t!==null?t.push(u):t=[u])}}else if(n===jt.current){if(r=n.alternate,r===null)throw Error(g(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(In):t=[In])}n=n.return}t!==null&&Ir(e,t,a,l),e.flags|=262144}function Mi(t){for(t=t.firstContext;t!==null;){if(!ie(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tl(t){Pa=t,We=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Vt(t){return Xf(Pa,t)}function Ti(t,e){return Pa===null&&tl(t),Xf(t,e)}function Xf(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},We===null){if(t===null)throw Error(g(308));We=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else We=We.next=e;return a}var dm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},hm=M.unstable_scheduleCallback,gm=M.unstable_NormalPriority,Et={$$typeof:zt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pr(){return{controller:new dm,data:new Map,refCount:0}}function Xn(t){t.refCount--,t.refCount===0&&hm(gm,function(){t.controller.abort()})}var On=null,tu=0,kl=0,Nl=null;function ym(t,e){if(On===null){var a=On=[];tu=0,kl=as(),Nl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return tu++,e.then(Of,Of),e}function Of(){if(--tu===0&&On!==null){Nl!==null&&(Nl.status="fulfilled");var t=On;On=null,kl=0,Nl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xm(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var n=0;n<a.length;n++)(0,a[n])(e)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Rf=y.S;y.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ym(t,e),Rf!==null&&Rf(t,e)};var el=z(null);function eu(){var t=el.current;return t!==null?t:ct.pooledCache}function Ei(t,e){e===null?O(el,el.current):O(el,e.pool)}function Mf(){var t=eu();return t===null?null:{parent:Et._currentValue,pool:t}}var Rn=Error(g(460)),Tf=Error(g(474)),Ai=Error(g(542)),au={then:function(){}};function Ef(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ui(){}function Af(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ui,Ui),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kf(t),t;default:if(typeof e.status=="string")e.then(Ui,Ui);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(g(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=l}},function(l){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kf(t),t}throw Mn=e,Rn}}var Mn=null;function Uf(){if(Mn===null)throw Error(g(459));var t=Mn;return Mn=null,t}function kf(t){if(t===Rn||t===Ai)throw Error(g(483))}var ha=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ga(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(lt&2)!==0){var n=l.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),l.pending=e,e=wi(t),xf(t,null,a),e}return zi(t,l,e,a),wi(t)}function Tn(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,pl(t,a)}}function iu(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,a=a.next}while(a!==null);i===null?n=i=e:i=i.next=e}else n=i=e;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ru=!1;function En(){if(ru){var t=Nl;if(t!==null)throw t}}function An(t,e,a,l){ru=!1;var n=t.updateQueue;ha=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,u=n.shared.pending;if(u!==null){n.shared.pending=null;var s=u,p=s.next;s.next=null,r===null?i=p:r.next=p,r=s;var x=t.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==r&&(u===null?x.firstBaseUpdate=p:u.next=p,x.lastBaseUpdate=s))}if(i!==null){var v=n.baseState;r=0,x=p=s=null,u=i;do{var d=u.lane&-536870913,h=d!==u.lane;if(h?(F&d)===d:(l&d)===d){d!==0&&d===kl&&(ru=!0),x!==null&&(x=x.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});t:{var Y=t,D=u;d=e;var ut=a;switch(D.tag){case 1:if(Y=D.payload,typeof Y=="function"){v=Y.call(ut,v,d);break t}v=Y;break t;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=D.payload,d=typeof Y=="function"?Y.call(ut,v,d):Y,d==null)break t;v=A({},v,d);break t;case 2:ha=!0}}d=u.callback,d!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[d]:h.push(d))}else h={lane:d,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(p=x=h,s=v):x=x.next=h,r|=d;if(u=u.next,u===null){if(u=n.shared.pending,u===null)break;h=u,u=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);x===null&&(s=v),n.baseState=s,n.firstBaseUpdate=p,n.lastBaseUpdate=x,i===null&&(n.shared.lanes=0),Oa|=r,t.lanes=r,t.memoizedState=v}}function Nf(t,e){if(typeof t!="function")throw Error(g(191,t));t.call(e)}function _f(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Nf(a[t],e)}var _l=z(null),ki=z(0);function Df(t,e){t=ia,O(ki,t),O(_l,e),ia=t|e.baseLanes}function uu(){O(ki,ia),O(_l,_l.current)}function su(){ia=ki.current,R(_l),R(ki)}var xa=0,G=null,it=null,Ot=null,Ni=!1,Dl=!1,al=!1,_i=0,Un=0,Ll=null,bm=0;function bt(){throw Error(g(321))}function fu(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ie(t[a],e[a]))return!1;return!0}function cu(t,e,a,l,n,i){return xa=i,G=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?xc:bc,al=!1,i=a(l,n),al=!1,Dl&&(i=Hf(e,a,l,n)),Lf(t),i}function Lf(t){y.H=qi;var e=it!==null&&it.next!==null;if(xa=0,Ot=it=G=null,Ni=!1,Un=0,Ll=null,e)throw Error(g(300));t===null||Dt||(t=t.dependencies,t!==null&&Mi(t)&&(Dt=!0))}function Hf(t,e,a,l){G=t;var n=0;do{if(Dl&&(Ll=null),Un=0,Dl=!1,25<=n)throw Error(g(301));if(n+=1,Ot=it=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}y.H=Rm,i=e(a,l)}while(Dl);return i}function vm(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?kn(e):e,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(G.flags|=1024),e}function ou(){var t=_i!==0;return _i=0,t}function mu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function pu(t){if(Ni){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ni=!1}xa=0,Ot=it=G=null,Dl=!1,Un=_i=0,Ll=null}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?G.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Rt(){if(it===null){var t=G.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var e=Ot===null?G.memoizedState:Ot.next;if(e!==null)Ot=e,it=t;else{if(t===null)throw G.alternate===null?Error(g(467)):Error(g(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Ot===null?G.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function du(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function kn(t){var e=Un;return Un+=1,Ll===null&&(Ll=[]),t=Af(Ll,t,e),e=G,(Ot===null?e.memoizedState:Ot.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?xc:bc),t}function Di(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return kn(t);if(t.$$typeof===zt)return Vt(t)}throw Error(g(438,String(t)))}function hu(t){var e=null,a=G.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=G.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=du(),G.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=ae;return e.index++,a}function Pe(t,e){return typeof e=="function"?e(t):e}function Li(t){var e=Rt();return gu(e,it,t)}function gu(t,e,a){var l=t.queue;if(l===null)throw Error(g(311));l.lastRenderedReducer=a;var n=t.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}e.baseQueue=n=i,l.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var u=r=null,s=null,p=e,x=!1;do{var v=p.lane&-536870913;if(v!==p.lane?(F&v)===v:(xa&v)===v){var d=p.revertLane;if(d===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),v===kl&&(x=!0);else if((xa&d)===d){p=p.next,d===kl&&(x=!0);continue}else v={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(u=s=v,r=i):s=s.next=v,G.lanes|=d,Oa|=d;v=p.action,al&&a(i,v),i=p.hasEagerState?p.eagerState:a(i,v)}else d={lane:v,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},s===null?(u=s=d,r=i):s=s.next=d,G.lanes|=v,Oa|=v;p=p.next}while(p!==null&&p!==e);if(s===null?r=i:s.next=u,!ie(i,t.memoizedState)&&(Dt=!0,x&&(a=Nl,a!==null)))throw a;t.memoizedState=i,t.baseState=r,t.baseQueue=s,l.lastRenderedState=i}return n===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yu(t){var e=Rt(),a=e.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=t;var l=a.dispatch,n=a.pending,i=e.memoizedState;if(n!==null){a.pending=null;var r=n=n.next;do i=t(i,r.action),r=r.next;while(r!==n);ie(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),a.lastRenderedState=i}return[i,l]}function Yf(t,e,a){var l=G,n=Rt(),i=P;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=e();var r=!ie((it||n).memoizedState,a);r&&(n.memoizedState=a,Dt=!0),n=n.queue;var u=Bf.bind(null,l,n,t);if(Nn(2048,8,u,[t]),n.getSnapshot!==e||r||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,Hl(9,Hi(),qf.bind(null,l,n,a,e),null),ct===null)throw Error(g(349));i||(xa&124)!==0||jf(l,e,a)}return a}function jf(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=G.updateQueue,e===null?(e=du(),G.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function qf(t,e,a,l){e.value=a,e.getSnapshot=l,Gf(e)&&Cf(t)}function Bf(t,e,a){return a(function(){Gf(e)&&Cf(t)})}function Gf(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ie(t,a)}catch{return!0}}function Cf(t){var e=Tl(t,2);e!==null&&oe(e,t,2)}function xu(t){var e=Pt();if(typeof t=="function"){var a=t;if(t=a(),al){ne(!0);try{a()}finally{ne(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:t},e}function Qf(t,e,a,l){return t.baseState=a,gu(t,it,typeof l=="function"?l:Pe)}function Sm(t,e,a,l,n){if(ji(t))throw Error(g(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};y.T!==null?a(!0):i.isTransition=!1,l(i),a=e.pending,a===null?(i.next=e.pending=i,Zf(e,i)):(i.next=a.next,e.pending=a.next=i)}}function Zf(t,e){var a=e.action,l=e.payload,n=t.state;if(e.isTransition){var i=y.T,r={};y.T=r;try{var u=a(n,l),s=y.S;s!==null&&s(r,u),Vf(t,e,u)}catch(p){bu(t,e,p)}finally{y.T=i}}else try{i=a(n,l),Vf(t,e,i)}catch(p){bu(t,e,p)}}function Vf(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Kf(t,e,l)},function(l){return bu(t,e,l)}):Kf(t,e,a)}function Kf(t,e,a){e.status="fulfilled",e.value=a,Jf(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Zf(t,a)))}function bu(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,Jf(e),e=e.next;while(e!==l)}t.action=null}function Jf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ff(t,e){return e}function $f(t,e){if(P){var a=ct.formState;if(a!==null){t:{var l=G;if(P){if(gt){e:{for(var n=gt,i=Le;n.nodeType!==8;){if(!i){n=null;break e}if(n=_e(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){gt=_e(n.nextSibling),l=n.data==="F!";break t}}Ia(l)}l=!1}l&&(e=a[0])}}return a=Pt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:e},a.queue=l,a=hc.bind(null,G,l),l.dispatch=a,l=xu(!1),i=Xu.bind(null,G,!1,l.queue),l=Pt(),n={state:e,dispatch:null,action:t,pending:null},l.queue=n,a=Sm.bind(null,G,n,i,a),n.dispatch=a,l.memoizedState=t,[e,a,!1]}function Wf(t){var e=Rt();return If(e,it,t)}function If(t,e,a){if(e=gu(t,e,Ff)[0],t=Li(Pe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=kn(e)}catch(r){throw r===Rn?Ai:r}else l=e;e=Rt();var n=e.queue,i=n.dispatch;return a!==e.memoizedState&&(G.flags|=2048,Hl(9,Hi(),zm.bind(null,n,a),null)),[l,i,t]}function zm(t,e){t.action=e}function Pf(t){var e=Rt(),a=it;if(a!==null)return If(e,a,t);Rt(),e=e.memoizedState,a=Rt();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Hl(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=G.updateQueue,e===null&&(e=du(),G.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Hi(){return{destroy:void 0,resource:void 0}}function tc(){return Rt().memoizedState}function Yi(t,e,a,l){var n=Pt();l=l===void 0?null:l,G.flags|=t,n.memoizedState=Hl(1|e,Hi(),a,l)}function Nn(t,e,a,l){var n=Rt();l=l===void 0?null:l;var i=n.memoizedState.inst;it!==null&&l!==null&&fu(l,it.memoizedState.deps)?n.memoizedState=Hl(e,i,a,l):(G.flags|=t,n.memoizedState=Hl(1|e,i,a,l))}function ec(t,e){Yi(8390656,8,t,e)}function ac(t,e){Nn(2048,8,t,e)}function lc(t,e){return Nn(4,2,t,e)}function nc(t,e){return Nn(4,4,t,e)}function ic(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rc(t,e,a){a=a!=null?a.concat([t]):null,Nn(4,4,ic.bind(null,e,t),a)}function vu(){}function uc(t,e){var a=Rt();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&fu(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function sc(t,e){var a=Rt();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&fu(e,l[1]))return l[0];if(l=t(),al){ne(!0);try{t()}finally{ne(!1)}}return a.memoizedState=[l,e],l}function Su(t,e,a){return a===void 0||(xa&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=o0(),G.lanes|=t,Oa|=t,a)}function fc(t,e,a,l){return ie(a,e)?a:_l.current!==null?(t=Su(t,a,l),ie(t,e)||(Dt=!0),t):(xa&42)===0?(Dt=!0,t.memoizedState=a):(t=o0(),G.lanes|=t,Oa|=t,e)}function cc(t,e,a,l,n){var i=X.p;X.p=i!==0&&8>i?i:8;var r=y.T,u={};y.T=u,Xu(t,!1,e,a);try{var s=n(),p=y.S;if(p!==null&&p(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var x=xm(s,l);_n(t,e,x,ce(t))}else _n(t,e,l,ce(t))}catch(v){_n(t,e,{then:function(){},status:"rejected",reason:v},ce())}finally{X.p=i,y.T=r}}function wm(){}function zu(t,e,a,l){if(t.tag!==5)throw Error(g(476));var n=oc(t).queue;cc(t,n,e,_,a===null?wm:function(){return mc(t),a(l)})}function oc(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:_},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function mc(t){var e=oc(t).next.queue;_n(t,e,{},ce())}function wu(){return Vt(In)}function pc(){return Rt().memoizedState}function dc(){return Rt().memoizedState}function Xm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ce();t=ga(a);var l=ya(e,t,a);l!==null&&(oe(l,e,a),Tn(l,e,a)),e={cache:Pr()},t.payload=e;return}e=e.return}}function Om(t,e,a){var l=ce();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ji(t)?gc(e,a):(a=Cr(t,e,a,l),a!==null&&(oe(a,t,l),yc(a,e,l)))}function hc(t,e,a){var l=ce();_n(t,e,a,l)}function _n(t,e,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ji(t))gc(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var r=e.lastRenderedState,u=i(r,a);if(n.hasEagerState=!0,n.eagerState=u,ie(u,r))return zi(t,e,n,0),ct===null&&Si(),!1}catch{}finally{}if(a=Cr(t,e,n,l),a!==null)return oe(a,t,l),yc(a,e,l),!0}return!1}function Xu(t,e,a,l){if(l={lane:2,revertLane:as(),action:l,hasEagerState:!1,eagerState:null,next:null},ji(t)){if(e)throw Error(g(479))}else e=Cr(t,a,l,2),e!==null&&oe(e,t,2)}function ji(t){var e=t.alternate;return t===G||e!==null&&e===G}function gc(t,e){Dl=Ni=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function yc(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,pl(t,a)}}var qi={readContext:Vt,use:Di,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt},xc={readContext:Vt,use:Di,useCallback:function(t,e){return Pt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:ec,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Yi(4194308,4,ic.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Yi(4194308,4,t,e)},useInsertionEffect:function(t,e){Yi(4,2,t,e)},useMemo:function(t,e){var a=Pt();e=e===void 0?null:e;var l=t();if(al){ne(!0);try{t()}finally{ne(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Pt();if(a!==void 0){var n=a(e);if(al){ne(!0);try{a(e)}finally{ne(!1)}}}else n=e;return l.memoizedState=l.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=Om.bind(null,G,t),[l.memoizedState,t]},useRef:function(t){var e=Pt();return t={current:t},e.memoizedState=t},useState:function(t){t=xu(t);var e=t.queue,a=hc.bind(null,G,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:vu,useDeferredValue:function(t,e){var a=Pt();return Su(a,t,e)},useTransition:function(){var t=xu(!1);return t=cc.bind(null,G,t.queue,!0,!1),Pt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=G,n=Pt();if(P){if(a===void 0)throw Error(g(407));a=a()}else{if(a=e(),ct===null)throw Error(g(349));(F&124)!==0||jf(l,e,a)}n.memoizedState=a;var i={value:a,getSnapshot:e};return n.queue=i,ec(Bf.bind(null,l,i,t),[t]),l.flags|=2048,Hl(9,Hi(),qf.bind(null,l,i,a,e),null),a},useId:function(){var t=Pt(),e=ct.identifierPrefix;if(P){var a=$e,l=Fe;a=(l&~(1<<32-_t(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=_i++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=bm++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:wu,useFormState:$f,useActionState:$f,useOptimistic:function(t){var e=Pt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Xu.bind(null,G,!0,a),a.dispatch=e,[t,e]},useMemoCache:hu,useCacheRefresh:function(){return Pt().memoizedState=Xm.bind(null,G)}},bc={readContext:Vt,use:Di,useCallback:uc,useContext:Vt,useEffect:ac,useImperativeHandle:rc,useInsertionEffect:lc,useLayoutEffect:nc,useMemo:sc,useReducer:Li,useRef:tc,useState:function(){return Li(Pe)},useDebugValue:vu,useDeferredValue:function(t,e){var a=Rt();return fc(a,it.memoizedState,t,e)},useTransition:function(){var t=Li(Pe)[0],e=Rt().memoizedState;return[typeof t=="boolean"?t:kn(t),e]},useSyncExternalStore:Yf,useId:pc,useHostTransitionStatus:wu,useFormState:Wf,useActionState:Wf,useOptimistic:function(t,e){var a=Rt();return Qf(a,it,t,e)},useMemoCache:hu,useCacheRefresh:dc},Rm={readContext:Vt,use:Di,useCallback:uc,useContext:Vt,useEffect:ac,useImperativeHandle:rc,useInsertionEffect:lc,useLayoutEffect:nc,useMemo:sc,useReducer:yu,useRef:tc,useState:function(){return yu(Pe)},useDebugValue:vu,useDeferredValue:function(t,e){var a=Rt();return it===null?Su(a,t,e):fc(a,it.memoizedState,t,e)},useTransition:function(){var t=yu(Pe)[0],e=Rt().memoizedState;return[typeof t=="boolean"?t:kn(t),e]},useSyncExternalStore:Yf,useId:pc,useHostTransitionStatus:wu,useFormState:Pf,useActionState:Pf,useOptimistic:function(t,e){var a=Rt();return it!==null?Qf(a,it,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:hu,useCacheRefresh:dc},Yl=null,Dn=0;function Bi(t){var e=Dn;return Dn+=1,Yl===null&&(Yl=[]),Af(Yl,t,e)}function Ln(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Gi(t,e){throw e.$$typeof===et?Error(g(525)):(t=Object.prototype.toString.call(e),Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function vc(t){var e=t._init;return e(t._payload)}function Sc(t){function e(o,c){if(t){var m=o.deletions;m===null?(o.deletions=[c],o.flags|=16):m.push(c)}}function a(o,c){if(!t)return null;for(;c!==null;)e(o,c),c=c.sibling;return null}function l(o){for(var c=new Map;o!==null;)o.key!==null?c.set(o.key,o):c.set(o.index,o),o=o.sibling;return c}function n(o,c){return o=Je(o,c),o.index=0,o.sibling=null,o}function i(o,c,m){return o.index=m,t?(m=o.alternate,m!==null?(m=m.index,m<c?(o.flags|=67108866,c):m):(o.flags|=67108866,c)):(o.flags|=1048576,c)}function r(o){return t&&o.alternate===null&&(o.flags|=67108866),o}function u(o,c,m,b){return c===null||c.tag!==6?(c=Zr(m,o.mode,b),c.return=o,c):(c=n(c,m),c.return=o,c)}function s(o,c,m,b){var T=m.type;return T===ht?x(o,c,m.props.children,b,m.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kt&&vc(T)===c.type)?(c=n(c,m.props),Ln(c,m),c.return=o,c):(c=Xi(m.type,m.key,m.props,null,o.mode,b),Ln(c,m),c.return=o,c)}function p(o,c,m,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Vr(m,o.mode,b),c.return=o,c):(c=n(c,m.children||[]),c.return=o,c)}function x(o,c,m,b,T){return c===null||c.tag!==7?(c=Ja(m,o.mode,b,T),c.return=o,c):(c=n(c,m),c.return=o,c)}function v(o,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Zr(""+c,o.mode,m),c.return=o,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case at:return m=Xi(c.type,c.key,c.props,null,o.mode,m),Ln(m,c),m.return=o,m;case St:return c=Vr(c,o.mode,m),c.return=o,c;case kt:var b=c._init;return c=b(c._payload),v(o,c,m)}if(xt(c)||Tt(c))return c=Ja(c,o.mode,m,null),c.return=o,c;if(typeof c.then=="function")return v(o,Bi(c),m);if(c.$$typeof===zt)return v(o,Ti(o,c),m);Gi(o,c)}return null}function d(o,c,m,b){var T=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return T!==null?null:u(o,c,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case at:return m.key===T?s(o,c,m,b):null;case St:return m.key===T?p(o,c,m,b):null;case kt:return T=m._init,m=T(m._payload),d(o,c,m,b)}if(xt(m)||Tt(m))return T!==null?null:x(o,c,m,b,null);if(typeof m.then=="function")return d(o,c,Bi(m),b);if(m.$$typeof===zt)return d(o,c,Ti(o,m),b);Gi(o,m)}return null}function h(o,c,m,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return o=o.get(m)||null,u(c,o,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case at:return o=o.get(b.key===null?m:b.key)||null,s(c,o,b,T);case St:return o=o.get(b.key===null?m:b.key)||null,p(c,o,b,T);case kt:var C=b._init;return b=C(b._payload),h(o,c,m,b,T)}if(xt(b)||Tt(b))return o=o.get(m)||null,x(c,o,b,T,null);if(typeof b.then=="function")return h(o,c,m,Bi(b),T);if(b.$$typeof===zt)return h(o,c,m,Ti(c,b),T);Gi(c,b)}return null}function Y(o,c,m,b){for(var T=null,C=null,E=c,L=c=0,Ht=null;E!==null&&L<m.length;L++){E.index>L?(Ht=E,E=null):Ht=E.sibling;var W=d(o,E,m[L],b);if(W===null){E===null&&(E=Ht);break}t&&E&&W.alternate===null&&e(o,E),c=i(W,c,L),C===null?T=W:C.sibling=W,C=W,E=Ht}if(L===m.length)return a(o,E),P&&$a(o,L),T;if(E===null){for(;L<m.length;L++)E=v(o,m[L],b),E!==null&&(c=i(E,c,L),C===null?T=E:C.sibling=E,C=E);return P&&$a(o,L),T}for(E=l(E);L<m.length;L++)Ht=h(E,o,L,m[L],b),Ht!==null&&(t&&Ht.alternate!==null&&E.delete(Ht.key===null?L:Ht.key),c=i(Ht,c,L),C===null?T=Ht:C.sibling=Ht,C=Ht);return t&&E.forEach(function(_a){return e(o,_a)}),P&&$a(o,L),T}function D(o,c,m,b){if(m==null)throw Error(g(151));for(var T=null,C=null,E=c,L=c=0,Ht=null,W=m.next();E!==null&&!W.done;L++,W=m.next()){E.index>L?(Ht=E,E=null):Ht=E.sibling;var _a=d(o,E,W.value,b);if(_a===null){E===null&&(E=Ht);break}t&&E&&_a.alternate===null&&e(o,E),c=i(_a,c,L),C===null?T=_a:C.sibling=_a,C=_a,E=Ht}if(W.done)return a(o,E),P&&$a(o,L),T;if(E===null){for(;!W.done;L++,W=m.next())W=v(o,W.value,b),W!==null&&(c=i(W,c,L),C===null?T=W:C.sibling=W,C=W);return P&&$a(o,L),T}for(E=l(E);!W.done;L++,W=m.next())W=h(E,o,L,W.value,b),W!==null&&(t&&W.alternate!==null&&E.delete(W.key===null?L:W.key),c=i(W,c,L),C===null?T=W:C.sibling=W,C=W);return t&&E.forEach(function(Mp){return e(o,Mp)}),P&&$a(o,L),T}function ut(o,c,m,b){if(typeof m=="object"&&m!==null&&m.type===ht&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case at:t:{for(var T=m.key;c!==null;){if(c.key===T){if(T=m.type,T===ht){if(c.tag===7){a(o,c.sibling),b=n(c,m.props.children),b.return=o,o=b;break t}}else if(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kt&&vc(T)===c.type){a(o,c.sibling),b=n(c,m.props),Ln(b,m),b.return=o,o=b;break t}a(o,c);break}else e(o,c);c=c.sibling}m.type===ht?(b=Ja(m.props.children,o.mode,b,m.key),b.return=o,o=b):(b=Xi(m.type,m.key,m.props,null,o.mode,b),Ln(b,m),b.return=o,o=b)}return r(o);case St:t:{for(T=m.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(o,c.sibling),b=n(c,m.children||[]),b.return=o,o=b;break t}else{a(o,c);break}else e(o,c);c=c.sibling}b=Vr(m,o.mode,b),b.return=o,o=b}return r(o);case kt:return T=m._init,m=T(m._payload),ut(o,c,m,b)}if(xt(m))return Y(o,c,m,b);if(Tt(m)){if(T=Tt(m),typeof T!="function")throw Error(g(150));return m=T.call(m),D(o,c,m,b)}if(typeof m.then=="function")return ut(o,c,Bi(m),b);if(m.$$typeof===zt)return ut(o,c,Ti(o,m),b);Gi(o,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(a(o,c.sibling),b=n(c,m),b.return=o,o=b):(a(o,c),b=Zr(m,o.mode,b),b.return=o,o=b),r(o)):a(o,c)}return function(o,c,m,b){try{Dn=0;var T=ut(o,c,m,b);return Yl=null,T}catch(E){if(E===Rn||E===Ai)throw E;var C=re(29,E,null,o.mode);return C.lanes=b,C.return=o,C}finally{}}}var jl=Sc(!0),zc=Sc(!1),be=z(null),He=null;function ba(t){var e=t.alternate;O(At,At.current&1),O(be,t),He===null&&(e===null||_l.current!==null||e.memoizedState!==null)&&(He=t)}function wc(t){if(t.tag===22){if(O(At,At.current),O(be,t),He===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(He=t)}}else va()}function va(){O(At,At.current),O(be,be.current)}function ta(t){R(be),He===t&&(He=null),R(At)}var At=z(0);function Ci(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ds(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ou(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:A({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ru={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=ce(),n=ga(l);n.payload=e,a!=null&&(n.callback=a),e=ya(t,n,l),e!==null&&(oe(e,t,l),Tn(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=ce(),n=ga(l);n.tag=1,n.payload=e,a!=null&&(n.callback=a),e=ya(t,n,l),e!==null&&(oe(e,t,l),Tn(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ce(),l=ga(a);l.tag=2,e!=null&&(l.callback=e),e=ya(t,l,a),e!==null&&(oe(e,t,a),Tn(e,t,a))}};function Xc(t,e,a,l,n,i,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,r):e.prototype&&e.prototype.isPureReactComponent?!xn(a,l)||!xn(n,i):!0}function Oc(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Ru.enqueueReplaceState(e,e.state,null)}function ll(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=A({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}var Qi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Rc(t){Qi(t)}function Mc(t){console.error(t)}function Tc(t){Qi(t)}function Zi(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Ec(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Mu(t,e,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Zi(t,e)},a}function Ac(t){return t=ga(t),t.tag=3,t}function Uc(t,e,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;t.payload=function(){return n(i)},t.callback=function(){Ec(e,a,l)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Ec(e,a,l),typeof n!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var u=l.stack;this.componentDidCatch(l.value,{componentStack:u!==null?u:""})})}function Mm(t,e,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&wn(e,a,n,!0),a=be.current,a!==null){switch(a.tag){case 13:return He===null?Wu():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===au?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Pu(t,l,n)),!1;case 22:return a.flags|=65536,l===au?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Pu(t,l,n)),!1}throw Error(g(435,a.tag))}return Pu(t,l,n),Wu(),!1}if(P)return e=be.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,l!==Fr&&(t=Error(g(422),{cause:l}),zn(he(t,a)))):(l!==Fr&&(e=Error(g(423),{cause:l}),zn(he(e,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,l=he(l,a),n=Mu(t.stateNode,l,n),iu(t,n),yt!==4&&(yt=2)),!1;var i=Error(g(520),{cause:l});if(i=he(i,a),Cn===null?Cn=[i]:Cn.push(i),yt!==4&&(yt=2),e===null)return!0;l=he(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=Mu(a.stateNode,l,t),iu(a,t),!1;case 1:if(e=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ac(n),Uc(n,t,a,l),iu(a,n),!1}a=a.return}while(a!==null);return!1}var kc=Error(g(461)),Dt=!1;function qt(t,e,a,l){e.child=t===null?zc(e,null,a,l):jl(e,t.child,a,l)}function Nc(t,e,a,l,n){a=a.render;var i=e.ref;if("ref"in l){var r={};for(var u in l)u!=="ref"&&(r[u]=l[u])}else r=l;return tl(e),l=cu(t,e,a,r,i,n),u=ou(),t!==null&&!Dt?(mu(t,e,n),ea(t,e,n)):(P&&u&&Kr(e),e.flags|=1,qt(t,e,l,n),e.child)}function _c(t,e,a,l,n){if(t===null){var i=a.type;return typeof i=="function"&&!Qr(i)&&i.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=i,Dc(t,e,i,l,n)):(t=Xi(a.type,null,l,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Du(t,n)){var r=i.memoizedProps;if(a=a.compare,a=a!==null?a:xn,a(r,l)&&t.ref===e.ref)return ea(t,e,n)}return e.flags|=1,t=Je(i,l),t.ref=e.ref,t.return=e,e.child=t}function Dc(t,e,a,l,n){if(t!==null){var i=t.memoizedProps;if(xn(i,l)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=l=i,Du(t,n))(t.flags&131072)!==0&&(Dt=!0);else return e.lanes=t.lanes,ea(t,e,n)}return Tu(t,e,a,l,n)}function Lc(t,e,a){var l=e.pendingProps,n=l.children,i=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;e.childLanes=i&~l}else e.childLanes=0,e.child=null;return Hc(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ei(e,i!==null?i.cachePool:null),i!==null?Df(e,i):uu(),wc(e);else return e.lanes=e.childLanes=536870912,Hc(t,e,i!==null?i.baseLanes|a:a,a)}else i!==null?(Ei(e,i.cachePool),Df(e,i),va(),e.memoizedState=null):(t!==null&&Ei(e,null),uu(),va());return qt(t,e,n,a),e.child}function Hc(t,e,a,l){var n=eu();return n=n===null?null:{parent:Et._currentValue,pool:n},e.memoizedState={baseLanes:a,cachePool:n},t!==null&&Ei(e,null),uu(),wc(e),t!==null&&wn(t,e,l,!0),null}function Vi(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Tu(t,e,a,l,n){return tl(e),a=cu(t,e,a,l,void 0,n),l=ou(),t!==null&&!Dt?(mu(t,e,n),ea(t,e,n)):(P&&l&&Kr(e),e.flags|=1,qt(t,e,a,n),e.child)}function Yc(t,e,a,l,n,i){return tl(e),e.updateQueue=null,a=Hf(e,l,a,n),Lf(t),l=ou(),t!==null&&!Dt?(mu(t,e,i),ea(t,e,i)):(P&&l&&Kr(e),e.flags|=1,qt(t,e,a,i),e.child)}function jc(t,e,a,l,n){if(tl(e),e.stateNode===null){var i=El,r=a.contextType;typeof r=="object"&&r!==null&&(i=Vt(r)),i=new a(l,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ru,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=l,i.state=e.memoizedState,i.refs={},lu(e),r=a.contextType,i.context=typeof r=="object"&&r!==null?Vt(r):El,i.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Ou(e,a,r,l),i.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Ru.enqueueReplaceState(i,i.state,null),An(e,l,i,n),En(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){i=e.stateNode;var u=e.memoizedProps,s=ll(a,u);i.props=s;var p=i.context,x=a.contextType;r=El,typeof x=="object"&&x!==null&&(r=Vt(x));var v=a.getDerivedStateFromProps;x=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||p!==r)&&Oc(e,i,l,r),ha=!1;var d=e.memoizedState;i.state=d,An(e,l,i,n),En(),p=e.memoizedState,u||d!==p||ha?(typeof v=="function"&&(Ou(e,a,v,l),p=e.memoizedState),(s=ha||Xc(e,a,s,l,d,p,r))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=p),i.props=l,i.state=p,i.context=r,l=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{i=e.stateNode,nu(t,e),r=e.memoizedProps,x=ll(a,r),i.props=x,v=e.pendingProps,d=i.context,p=a.contextType,s=El,typeof p=="object"&&p!==null&&(s=Vt(p)),u=a.getDerivedStateFromProps,(p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==v||d!==s)&&Oc(e,i,l,s),ha=!1,d=e.memoizedState,i.state=d,An(e,l,i,n),En();var h=e.memoizedState;r!==v||d!==h||ha||t!==null&&t.dependencies!==null&&Mi(t.dependencies)?(typeof u=="function"&&(Ou(e,a,u,l),h=e.memoizedState),(x=ha||Xc(e,a,x,l,d,h,s)||t!==null&&t.dependencies!==null&&Mi(t.dependencies))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,h,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,h,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=h),i.props=l,i.state=h,i.context=s,l=x):(typeof i.componentDidUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),l=!1)}return i=l,Vi(t,e),l=(e.flags&128)!==0,i||l?(i=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&l?(e.child=jl(e,t.child,null,n),e.child=jl(e,null,a,n)):qt(t,e,a,n),e.memoizedState=i.state,t=e.child):t=ea(t,e,n),t}function qc(t,e,a,l){return Sn(),e.flags|=256,qt(t,e,a,l),e.child}var Eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Au(t){return{baseLanes:t,cachePool:Mf()}}function Uu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ve),t}function Bc(t,e,a){var l=e.pendingProps,n=!1,i=(e.flags&128)!==0,r;if((r=i)||(r=t!==null&&t.memoizedState===null?!1:(At.current&2)!==0),r&&(n=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(P){if(n?ba(e):va(),P){var u=gt,s;if(s=u){t:{for(s=u,u=Le;s.nodeType!==8;){if(!u){u=null;break t}if(s=_e(s.nextSibling),s===null){u=null;break t}}u=s}u!==null?(e.memoizedState={dehydrated:u,treeContext:Fa!==null?{id:Fe,overflow:$e}:null,retryLane:536870912,hydrationErrors:null},s=re(18,null,null,0),s.stateNode=u,s.return=e,e.child=s,Jt=e,gt=null,s=!0):s=!1}s||Ia(e)}if(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return ds(u)?e.lanes=32:e.lanes=536870912,null;ta(e)}return u=l.children,l=l.fallback,n?(va(),n=e.mode,u=Ki({mode:"hidden",children:u},n),l=Ja(l,n,a,null),u.return=e,l.return=e,u.sibling=l,e.child=u,n=e.child,n.memoizedState=Au(a),n.childLanes=Uu(t,r,a),e.memoizedState=Eu,l):(ba(e),ku(e,u))}if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null)){if(i)e.flags&256?(ba(e),e.flags&=-257,e=Nu(t,e,a)):e.memoizedState!==null?(va(),e.child=t.child,e.flags|=128,e=null):(va(),n=l.fallback,u=e.mode,l=Ki({mode:"visible",children:l.children},u),n=Ja(n,u,a,null),n.flags|=2,l.return=e,n.return=e,l.sibling=n,e.child=l,jl(e,t.child,null,a),l=e.child,l.memoizedState=Au(a),l.childLanes=Uu(t,r,a),e.memoizedState=Eu,e=n);else if(ba(e),ds(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var p=r.dgst;r=p,l=Error(g(419)),l.stack="",l.digest=r,zn({value:l,source:null,stack:null}),e=Nu(t,e,a)}else if(Dt||wn(t,e,a,!1),r=(a&t.childLanes)!==0,Dt||r){if(r=ct,r!==null&&(l=a&-a,l=(l&42)!==0?1:dl(l),l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==s.retryLane))throw s.retryLane=l,Tl(t,l),oe(r,t,l),kc;u.data==="$?"||Wu(),e=Nu(t,e,a)}else u.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,gt=_e(u.nextSibling),Jt=e,P=!0,Wa=null,Le=!1,t!==null&&(ye[xe++]=Fe,ye[xe++]=$e,ye[xe++]=Fa,Fe=t.id,$e=t.overflow,Fa=e),e=ku(e,l.children),e.flags|=4096);return e}return n?(va(),n=l.fallback,u=e.mode,s=t.child,p=s.sibling,l=Je(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,p!==null?n=Je(p,n):(n=Ja(n,u,a,null),n.flags|=2),n.return=e,l.return=e,l.sibling=n,e.child=l,l=n,n=e.child,u=t.child.memoizedState,u===null?u=Au(a):(s=u.cachePool,s!==null?(p=Et._currentValue,s=s.parent!==p?{parent:p,pool:p}:s):s=Mf(),u={baseLanes:u.baseLanes|a,cachePool:s}),n.memoizedState=u,n.childLanes=Uu(t,r,a),e.memoizedState=Eu,l):(ba(e),a=t.child,t=a.sibling,a=Je(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function ku(t,e){return e=Ki({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ki(t,e){return t=re(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Nu(t,e,a){return jl(e,t.child,null,a),t=ku(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gc(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Wr(t.return,e,a)}function _u(t,e,a,l,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function Cc(t,e,a){var l=e.pendingProps,n=l.revealOrder,i=l.tail;if(qt(t,e,l.children,a),l=At.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gc(t,a,e);else if(t.tag===19)Gc(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(O(At,l),n){case"forwards":for(a=e.child,n=null;a!==null;)t=a.alternate,t!==null&&Ci(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=e.child,e.child=null):(n=a.sibling,a.sibling=null),_u(e,!1,n,a,i);break;case"backwards":for(a=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Ci(t)===null){e.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}_u(e,!0,a,null,i);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ea(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Oa|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(wn(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(g(153));if(e.child!==null){for(t=e.child,a=Je(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Je(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Du(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Mi(t)))}function Tm(t,e,a){switch(e.tag){case 3:I(e,e.stateNode.containerInfo),da(e,Et,t.memoizedState.cache),Sn();break;case 27:case 5:$t(e);break;case 4:I(e,e.stateNode.containerInfo);break;case 10:da(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(ba(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Bc(t,e,a):(ba(e),t=ea(t,e,a),t!==null?t.sibling:null);ba(e);break;case 19:var n=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(wn(t,e,a,!1),l=(a&e.childLanes)!==0),n){if(l)return Cc(t,e,a);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(At,At.current),l)break;return null;case 22:case 23:return e.lanes=0,Lc(t,e,a);case 24:da(e,Et,t.memoizedState.cache)}return ea(t,e,a)}function Qc(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Dt=!0;else{if(!Du(t,a)&&(e.flags&128)===0)return Dt=!1,Tm(t,e,a);Dt=(t.flags&131072)!==0}else Dt=!1,P&&(e.flags&1048576)!==0&&vf(e,Ri,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,n=l._init;if(l=n(l._payload),e.type=l,typeof l=="function")Qr(l)?(t=ll(l,t),e.tag=1,e=jc(null,e,l,t,a)):(e.tag=0,e=Tu(null,e,l,t,a));else{if(l!=null){if(n=l.$$typeof,n===Qt){e.tag=11,e=Nc(null,e,l,t,a);break t}else if(n===Yt){e.tag=14,e=_c(null,e,l,t,a);break t}}throw e=Xe(l)||l,Error(g(306,e,""))}}return e;case 0:return Tu(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,n=ll(l,e.pendingProps),jc(t,e,l,n,a);case 3:t:{if(I(e,e.stateNode.containerInfo),t===null)throw Error(g(387));l=e.pendingProps;var i=e.memoizedState;n=i.element,nu(t,e),An(e,l,null,a);var r=e.memoizedState;if(l=r.cache,da(e,Et,l),l!==i.cache&&Ir(e,[Et],a,!0),En(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=qc(t,e,l,a);break t}else if(l!==n){n=he(Error(g(424)),e),zn(n),e=qc(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=_e(t.firstChild),Jt=e,P=!0,Wa=null,Le=!0,a=zc(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Sn(),l===n){e=ea(t,e,a);break t}qt(t,e,l,a)}e=e.child}return e;case 26:return Vi(t,e),t===null?(a=J0(e.type,null,e.pendingProps,null))?e.memoizedState=a:P||(a=e.type,t=e.pendingProps,l=ur(j.current).createElement(a),l[Xt]=e,l[Zt]=t,Gt(l,a,t),pt(l),e.stateNode=l):e.memoizedState=J0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $t(e),t===null&&P&&(l=e.stateNode=Z0(e.type,e.pendingProps,j.current),Jt=e,Le=!0,n=gt,Ea(e.type)?(hs=n,gt=_e(l.firstChild)):gt=n),qt(t,e,e.pendingProps.children,a),Vi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&P&&((n=l=gt)&&(l=ap(l,e.type,e.pendingProps,Le),l!==null?(e.stateNode=l,Jt=e,gt=_e(l.firstChild),Le=!1,n=!0):n=!1),n||Ia(e)),$t(e),n=e.type,i=e.pendingProps,r=t!==null?t.memoizedProps:null,l=i.children,os(n,i)?l=null:r!==null&&os(n,r)&&(e.flags|=32),e.memoizedState!==null&&(n=cu(t,e,vm,null,null,a),In._currentValue=n),Vi(t,e),qt(t,e,l,a),e.child;case 6:return t===null&&P&&((t=a=gt)&&(a=lp(a,e.pendingProps,Le),a!==null?(e.stateNode=a,Jt=e,gt=null,t=!0):t=!1),t||Ia(e)),null;case 13:return Bc(t,e,a);case 4:return I(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=jl(e,null,l,a):qt(t,e,l,a),e.child;case 11:return Nc(t,e,e.type,e.pendingProps,a);case 7:return qt(t,e,e.pendingProps,a),e.child;case 8:return qt(t,e,e.pendingProps.children,a),e.child;case 12:return qt(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,da(e,e.type,l.value),qt(t,e,l.children,a),e.child;case 9:return n=e.type._context,l=e.pendingProps.children,tl(e),n=Vt(n),l=l(n),e.flags|=1,qt(t,e,l,a),e.child;case 14:return _c(t,e,e.type,e.pendingProps,a);case 15:return Dc(t,e,e.type,e.pendingProps,a);case 19:return Cc(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=Ki(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=Je(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Lc(t,e,a);case 24:return tl(e),l=Vt(Et),t===null?(n=eu(),n===null&&(n=ct,i=Pr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),e.memoizedState={parent:l,cache:n},lu(e),da(e,Et,n)):((t.lanes&a)!==0&&(nu(t,e),An(e,null,null,a),En()),n=t.memoizedState,i=e.memoizedState,n.parent!==l?(n={parent:l,cache:l},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),da(e,Et,l)):(l=i.cache,da(e,Et,l),l!==n.cache&&Ir(e,[Et],a,!0))),qt(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(g(156,e.tag))}function aa(t){t.flags|=4}function Zc(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P0(e)){if(e=be.current,e!==null&&((F&4194048)===F?He!==null:(F&62914560)!==F&&(F&536870912)===0||e!==He))throw Mn=au,Tf;t.flags|=8192}}function Ji(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?si():536870912,t.lanes|=e,Cl|=e)}function Hn(t,e){if(!P)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Em(t,e,a){var l=e.pendingProps;switch(Jr(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return dt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ie(Et),me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vn(e)?aa(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,wf())),dt(e),null;case 26:return a=e.memoizedState,t===null?(aa(e),a!==null?(dt(e),Zc(e,a)):(dt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(aa(e),dt(e),Zc(e,a)):(dt(e),e.flags&=-16777217):(t.memoizedProps!==l&&aa(e),dt(e),e.flags&=-16777217),null;case 27:ua(e),a=j.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(!l){if(e.stateNode===null)throw Error(g(166));return dt(e),null}t=U.current,vn(e)?Sf(e):(t=Z0(n,l,a),e.stateNode=t,aa(e))}return dt(e),null;case 5:if(ua(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(!l){if(e.stateNode===null)throw Error(g(166));return dt(e),null}if(t=U.current,vn(e))Sf(e);else{switch(n=ur(j.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}t[Xt]=e,t[Zt]=l;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(Gt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&aa(e)}}return dt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&aa(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(g(166));if(t=j.current,vn(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,n=Jt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}t[Xt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Y0(t.nodeValue,a)),t||Ia(e)}else t=ur(t).createTextNode(l),t[Xt]=e,e.stateNode=t}return dt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=vn(e),l!==null&&l.dehydrated!==null){if(t===null){if(!n)throw Error(g(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Xt]=e}else Sn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;dt(e),n=!1}else n=wf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(ta(e),e):(ta(e),null)}if(ta(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Ji(e,e.updateQueue),dt(e),null;case 4:return me(),t===null&&rs(e.stateNode.containerInfo),dt(e),null;case 10:return Ie(e.type),dt(e),null;case 19:if(R(At),n=e.memoizedState,n===null)return dt(e),null;if(l=(e.flags&128)!==0,i=n.rendering,i===null)if(l)Hn(n,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Ci(t),i!==null){for(e.flags|=128,Hn(n,!1),t=i.updateQueue,e.updateQueue=t,Ji(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)bf(a,t),a=a.sibling;return O(At,At.current&1|2),e.child}t=t.sibling}n.tail!==null&&Wt()>Wi&&(e.flags|=128,l=!0,Hn(n,!1),e.lanes=4194304)}else{if(!l)if(t=Ci(i),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Ji(e,t),Hn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!P)return dt(e),null}else 2*Wt()-n.renderingStartTime>Wi&&a!==536870912&&(e.flags|=128,l=!0,Hn(n,!1),e.lanes=4194304);n.isBackwards?(i.sibling=e.child,e.child=i):(t=n.last,t!==null?t.sibling=i:e.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Wt(),e.sibling=null,t=At.current,O(At,l?t&1|2:t&1),e):(dt(e),null);case 22:case 23:return ta(e),su(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),a=e.updateQueue,a!==null&&Ji(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&R(el),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ie(Et),dt(e),null;case 25:return null;case 30:return null}throw Error(g(156,e.tag))}function Am(t,e){switch(Jr(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ie(Et),me(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ua(e),null;case 13:if(ta(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(g(340));Sn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return R(At),null;case 4:return me(),null;case 10:return Ie(e.type),null;case 22:case 23:return ta(e),su(),t!==null&&R(el),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ie(Et),null;case 25:return null;default:return null}}function Vc(t,e){switch(Jr(e),e.tag){case 3:Ie(Et),me();break;case 26:case 27:case 5:ua(e);break;case 4:me();break;case 13:ta(e);break;case 19:R(At);break;case 10:Ie(e.type);break;case 22:case 23:ta(e),su(),t!==null&&R(el);break;case 24:Ie(Et)}}function Yn(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&t)===t){l=void 0;var i=a.create,r=a.inst;l=i(),r.destroy=l}a=a.next}while(a!==n)}}catch(u){st(e,e.return,u)}}function Sa(t,e,a){try{var l=e.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&t)===t){var r=l.inst,u=r.destroy;if(u!==void 0){r.destroy=void 0,n=e;var s=a,p=u;try{p()}catch(x){st(n,s,x)}}}l=l.next}while(l!==i)}}catch(x){st(e,e.return,x)}}function Kc(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{_f(e,a)}catch(l){st(t,t.return,l)}}}function Jc(t,e,a){a.props=ll(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){st(t,e,l)}}function jn(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(n){st(t,e,n)}}function Ye(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){st(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){st(t,e,n)}else a.current=null}function Fc(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){st(t,t.return,n)}}function Lu(t,e,a){try{var l=t.stateNode;Wm(l,t.type,a,e),l[Zt]=e}catch(n){st(t,t.return,n)}}function $c(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function Hu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$c(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yu(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=rr));else if(l!==4&&(l===27&&Ea(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Yu(t,e,a),t=t.sibling;t!==null;)Yu(t,e,a),t=t.sibling}function Fi(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fi(t,e,a),t=t.sibling;t!==null;)Fi(t,e,a),t=t.sibling}function Wc(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gt(e,l,a),e[Xt]=t,e[Zt]=a}catch(i){st(t,t.return,i)}}var la=!1,vt=!1,ju=!1,Ic=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function Um(t,e){if(t=t.containerInfo,fs=pr,t=ff(t),Hr(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var r=0,u=-1,s=-1,p=0,x=0,v=t,d=null;e:for(;;){for(var h;v!==a||n!==0&&v.nodeType!==3||(u=r+n),v!==i||l!==0&&v.nodeType!==3||(s=r+l),v.nodeType===3&&(r+=v.nodeValue.length),(h=v.firstChild)!==null;)d=v,v=h;for(;;){if(v===t)break e;if(d===a&&++p===n&&(u=r),d===i&&++x===l&&(s=r),(h=v.nextSibling)!==null)break;v=d,d=v.parentNode}v=h}a=u===-1||s===-1?null:{start:u,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(cs={focusedElem:t,selectionRange:a},pr=!1,Lt=e;Lt!==null;)if(e=Lt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Lt=t;else for(;Lt!==null;){switch(e=Lt,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=e,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var Y=ll(a.type,n,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Y,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(D){st(a,a.return,D)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ps(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ps(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(g(163))}if(t=e.sibling,t!==null){t.return=e.return,Lt=t;break}Lt=e.return}}function Pc(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:za(t,a),l&4&&Yn(5,a);break;case 1:if(za(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){st(a,a.return,r)}else{var n=ll(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){st(a,a.return,r)}}l&64&&Kc(a),l&512&&jn(a,a.return);break;case 3:if(za(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{_f(t,e)}catch(r){st(a,a.return,r)}}break;case 27:e===null&&l&4&&Wc(a);case 26:case 5:za(t,a),e===null&&l&4&&Fc(a),l&512&&jn(a,a.return);break;case 12:za(t,a);break;case 13:za(t,a),l&4&&a0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qm.bind(null,a),np(t,a))));break;case 22:if(l=a.memoizedState!==null||la,!l){e=e!==null&&e.memoizedState!==null||vt,n=la;var i=vt;la=l,(vt=e)&&!i?wa(t,a,(a.subtreeFlags&8772)!==0):za(t,a),la=n,vt=i}break;case 30:break;default:za(t,a)}}function t0(t){var e=t.alternate;e!==null&&(t.alternate=null,t0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ga(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mt=null,te=!1;function na(t,e,a){for(a=a.child;a!==null;)e0(t,e,a),a=a.sibling}function e0(t,e,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Be,a)}catch{}switch(a.tag){case 26:vt||Ye(a,e),na(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||Ye(a,e);var l=mt,n=te;Ea(a.type)&&(mt=a.stateNode,te=!1),na(t,e,a),Jn(a.stateNode),mt=l,te=n;break;case 5:vt||Ye(a,e);case 6:if(l=mt,n=te,mt=null,na(t,e,a),mt=l,te=n,mt!==null)if(te)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(a.stateNode)}catch(i){st(a,e,i)}else try{mt.removeChild(a.stateNode)}catch(i){st(a,e,i)}break;case 18:mt!==null&&(te?(t=mt,C0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ai(t)):C0(mt,a.stateNode));break;case 4:l=mt,n=te,mt=a.stateNode.containerInfo,te=!0,na(t,e,a),mt=l,te=n;break;case 0:case 11:case 14:case 15:vt||Sa(2,a,e),vt||Sa(4,a,e),na(t,e,a);break;case 1:vt||(Ye(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Jc(a,e,l)),na(t,e,a);break;case 21:na(t,e,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,na(t,e,a),vt=l;break;default:na(t,e,a)}}function a0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ai(t)}catch(a){st(e,e.return,a)}}function km(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ic),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ic),e;default:throw Error(g(435,t.tag))}}function qu(t,e){var a=km(t);e.forEach(function(l){var n=Bm.bind(null,t,l);a.has(l)||(a.add(l),l.then(n,n))})}function ue(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=t,r=e,u=r;t:for(;u!==null;){switch(u.tag){case 27:if(Ea(u.type)){mt=u.stateNode,te=!1;break t}break;case 5:mt=u.stateNode,te=!1;break t;case 3:case 4:mt=u.stateNode.containerInfo,te=!0;break t}u=u.return}if(mt===null)throw Error(g(160));e0(i,r,n),mt=null,te=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)l0(e,t),e=e.sibling}var Ne=null;function l0(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ue(e,t),se(t),l&4&&(Sa(3,t,t.return),Yn(3,t),Sa(5,t,t.return));break;case 1:ue(e,t),se(t),l&512&&(vt||a===null||Ye(a,a.return)),l&64&&la&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Ne;if(ue(e,t),se(t),l&512&&(vt||a===null||Ye(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,n=n.ownerDocument||n;e:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Ba]||i[Xt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Gt(i,l,a),i[Xt]=t,pt(i),l=i;break t;case"link":var r=W0("link","href",n).get(l+(a.href||""));if(r){for(var u=0;u<r.length;u++)if(i=r[u],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(u,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;case"meta":if(r=W0("meta","content",n).get(l+(a.content||""))){for(u=0;u<r.length;u++)if(i=r[u],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(u,1);break e}}i=n.createElement(l),Gt(i,l,a),n.head.appendChild(i);break;default:throw Error(g(468,l))}i[Xt]=t,pt(i),l=i}t.stateNode=l}else I0(n,t.type,t.stateNode);else t.stateNode=$0(n,l,t.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?I0(n,t.type,t.stateNode):$0(n,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Lu(t,t.memoizedProps,a.memoizedProps)}break;case 27:ue(e,t),se(t),l&512&&(vt||a===null||Ye(a,a.return)),a!==null&&l&4&&Lu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ue(e,t),se(t),l&512&&(vt||a===null||Ye(a,a.return)),t.flags&32){n=t.stateNode;try{Sl(n,"")}catch(h){st(t,t.return,h)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Lu(t,n,a!==null?a.memoizedProps:n)),l&1024&&(ju=!0);break;case 6:if(ue(e,t),se(t),l&4){if(t.stateNode===null)throw Error(g(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(h){st(t,t.return,h)}}break;case 3:if(cr=null,n=Ne,Ne=sr(e.containerInfo),ue(e,t),Ne=n,se(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ai(e.containerInfo)}catch(h){st(t,t.return,h)}ju&&(ju=!1,n0(t));break;case 4:l=Ne,Ne=sr(t.stateNode.containerInfo),ue(e,t),se(t),Ne=l;break;case 12:ue(e,t),se(t);break;case 13:ue(e,t),se(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vu=Wt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qu(t,l)));break;case 22:n=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,p=la,x=vt;if(la=p||n,vt=x||s,ue(e,t),vt=x,la=p,se(t),l&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(a===null||s||la||vt||nl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){s=a=e;try{if(i=s.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{u=s.stateNode;var v=s.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null;u.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(h){st(s,s.return,h)}}}else if(e.tag===6){if(a===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(h){st(s,s.return,h)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qu(t,a))));break;case 19:ue(e,t),se(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qu(t,l)));break;case 30:break;case 21:break;default:ue(e,t),se(t)}}function se(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if($c(l)){a=l;break}l=l.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,i=Hu(t);Fi(t,i,n);break;case 5:var r=a.stateNode;a.flags&32&&(Sl(r,""),a.flags&=-33);var u=Hu(t);Fi(t,u,r);break;case 3:case 4:var s=a.stateNode.containerInfo,p=Hu(t);Yu(t,p,s);break;default:throw Error(g(161))}}catch(x){st(t,t.return,x)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function n0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;n0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function za(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Pc(t,e.alternate,e),e=e.sibling}function nl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Sa(4,e,e.return),nl(e);break;case 1:Ye(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Jc(e,e.return,a),nl(e);break;case 27:Jn(e.stateNode);case 26:case 5:Ye(e,e.return),nl(e);break;case 22:e.memoizedState===null&&nl(e);break;case 30:nl(e);break;default:nl(e)}t=t.sibling}}function wa(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,n=t,i=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:wa(n,i,a),Yn(4,i);break;case 1:if(wa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){st(l,l.return,p)}if(l=i,n=l.updateQueue,n!==null){var u=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Nf(s[n],u)}catch(p){st(l,l.return,p)}}a&&r&64&&Kc(i),jn(i,i.return);break;case 27:Wc(i);case 26:case 5:wa(n,i,a),a&&l===null&&r&4&&Fc(i),jn(i,i.return);break;case 12:wa(n,i,a);break;case 13:wa(n,i,a),a&&r&4&&a0(n,i);break;case 22:i.memoizedState===null&&wa(n,i,a),jn(i,i.return);break;case 30:break;default:wa(n,i,a)}e=e.sibling}}function Bu(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Xn(a))}function Gu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xn(t))}function je(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)i0(t,e,a,l),e=e.sibling}function i0(t,e,a,l){var n=e.flags;switch(e.tag){case 0:case 11:case 15:je(t,e,a,l),n&2048&&Yn(9,e);break;case 1:je(t,e,a,l);break;case 3:je(t,e,a,l),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xn(t)));break;case 12:if(n&2048){je(t,e,a,l),t=e.stateNode;try{var i=e.memoizedProps,r=i.id,u=i.onPostCommit;typeof u=="function"&&u(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){st(e,e.return,s)}}else je(t,e,a,l);break;case 13:je(t,e,a,l);break;case 23:break;case 22:i=e.stateNode,r=e.alternate,e.memoizedState!==null?i._visibility&2?je(t,e,a,l):qn(t,e):i._visibility&2?je(t,e,a,l):(i._visibility|=2,ql(t,e,a,l,(e.subtreeFlags&10256)!==0)),n&2048&&Bu(r,e);break;case 24:je(t,e,a,l),n&2048&&Gu(e.alternate,e);break;default:je(t,e,a,l)}}function ql(t,e,a,l,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,r=e,u=a,s=l,p=r.flags;switch(r.tag){case 0:case 11:case 15:ql(i,r,u,s,n),Yn(8,r);break;case 23:break;case 22:var x=r.stateNode;r.memoizedState!==null?x._visibility&2?ql(i,r,u,s,n):qn(i,r):(x._visibility|=2,ql(i,r,u,s,n)),n&&p&2048&&Bu(r.alternate,r);break;case 24:ql(i,r,u,s,n),n&&p&2048&&Gu(r.alternate,r);break;default:ql(i,r,u,s,n)}e=e.sibling}}function qn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,n=l.flags;switch(l.tag){case 22:qn(a,l),n&2048&&Bu(l.alternate,l);break;case 24:qn(a,l),n&2048&&Gu(l.alternate,l);break;default:qn(a,l)}e=e.sibling}}var Bn=8192;function Bl(t){if(t.subtreeFlags&Bn)for(t=t.child;t!==null;)r0(t),t=t.sibling}function r0(t){switch(t.tag){case 26:Bl(t),t.flags&Bn&&t.memoizedState!==null&&yp(Ne,t.memoizedState,t.memoizedProps);break;case 5:Bl(t);break;case 3:case 4:var e=Ne;Ne=sr(t.stateNode.containerInfo),Bl(t),Ne=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Bn,Bn=16777216,Bl(t),Bn=e):Bl(t));break;default:Bl(t)}}function u0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Gn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Lt=l,f0(l,t)}u0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)s0(t),t=t.sibling}function s0(t){switch(t.tag){case 0:case 11:case 15:Gn(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:Gn(t);break;case 12:Gn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$i(t)):Gn(t);break;default:Gn(t)}}function $i(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];Lt=l,f0(l,t)}u0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Sa(8,e,e.return),$i(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,$i(e));break;default:$i(e)}t=t.sibling}}function f0(t,e){for(;Lt!==null;){var a=Lt;switch(a.tag){case 0:case 11:case 15:Sa(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xn(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Lt=l;else t:for(a=t;Lt!==null;){l=Lt;var n=l.sibling,i=l.return;if(t0(l),l===a){Lt=null;break t}if(n!==null){n.return=i,Lt=n;break t}Lt=i}}}var Nm={getCacheForType:function(t){var e=Vt(Et),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},_m=typeof WeakMap=="function"?WeakMap:Map,lt=0,ct=null,Q=null,F=0,nt=0,fe=null,Xa=!1,Gl=!1,Cu=!1,ia=0,yt=0,Oa=0,il=0,Qu=0,ve=0,Cl=0,Cn=null,ee=null,Zu=!1,Vu=0,Wi=1/0,Ii=null,Ra=null,Bt=0,Ma=null,Ql=null,Zl=0,Ku=0,Ju=null,c0=null,Qn=0,Fu=null;function ce(){if((lt&2)!==0&&F!==0)return F&-F;if(y.T!==null){var t=kl;return t!==0?t:as()}return qa()}function o0(){ve===0&&(ve=(F&536870912)===0||P?ml():536870912);var t=be.current;return t!==null&&(t.flags|=32),ve}function oe(t,e,a){(t===ct&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Vl(t,0),Ta(t,F,ve,!1)),Ya(t,a),((lt&2)===0||t!==ct)&&(t===ct&&((lt&2)===0&&(il|=a),yt===4&&Ta(t,F,ve,!1)),qe(t))}function m0(t,e,a){if((lt&6)!==0)throw Error(g(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Qe(t,e),n=l?Hm(t,e):Iu(t,e,!0),i=l;do{if(n===0){Gl&&!l&&Ta(t,e,0,!1);break}else{if(a=t.current.alternate,i&&!Dm(a)){n=Iu(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;t:{var u=t;n=Cn;var s=u.current.memoizedState.isDehydrated;if(s&&(Vl(u,r).flags|=256),r=Iu(u,r,!1),r!==2){if(Cu&&!s){u.errorRecoveryDisabledLanes|=i,il|=i,n=4;break t}i=ee,ee=n,i!==null&&(ee===null?ee=i:ee.push.apply(ee,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Vl(t,0),Ta(t,e,0,!0);break}t:{switch(l=t,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((e&4194048)!==e)break;case 6:Ta(l,e,ve,!Xa);break t;case 2:ee=null;break;case 3:case 5:break;default:throw Error(g(329))}if((e&62914560)===e&&(n=Vu+300-Wt(),10<n)){if(Ta(l,e,ve,!Xa),Ce(l,0,!0)!==0)break t;l.timeoutHandle=B0(p0.bind(null,l,a,ee,Ii,Zu,e,ve,il,Cl,Xa,i,2,-0,0),n);break t}p0(l,a,ee,Ii,Zu,e,ve,il,Cl,Xa,i,0,-0,0)}}break}while(!0);qe(t)}function p0(t,e,a,l,n,i,r,u,s,p,x,v,d,h){if(t.timeoutHandle=-1,v=e.subtreeFlags,(v&8192||(v&16785408)===16785408)&&(Wn={stylesheets:null,count:0,unsuspend:gp},r0(e),v=xp(),v!==null)){t.cancelPendingCommit=v(v0.bind(null,t,e,i,a,l,n,r,u,s,x,1,d,h)),Ta(t,i,r,!p);return}v0(t,e,i,a,l,n,r,u,s)}function Dm(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ie(i(),n))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ta(t,e,a,l){e&=~Qu,e&=~il,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var n=e;0<n;){var i=31-_t(n),r=1<<i;l[i]=-1,n&=~r}a!==0&&nn(t,a,e)}function Pi(){return(lt&6)===0?(Zn(0),!1):!0}function $u(){if(Q!==null){if(nt===0)var t=Q.return;else t=Q,We=Pa=null,pu(t),Yl=null,Dn=0,t=Q;for(;t!==null;)Vc(t.alternate,t),t=t.return;Q=null}}function Vl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Pm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$u(),ct=t,Q=a=Je(t.current,null),F=e,nt=0,fe=null,Xa=!1,Gl=Qe(t,e),Cu=!1,Cl=ve=Qu=il=Oa=yt=0,ee=Cn=null,Zu=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var n=31-_t(l),i=1<<n;e|=t[n],l&=~i}return ia=e,Si(),a}function d0(t,e){G=null,y.H=qi,e===Rn||e===Ai?(e=Uf(),nt=3):e===Tf?(e=Uf(),nt=4):nt=e===kc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fe=e,Q===null&&(yt=1,Zi(t,he(e,t.current)))}function h0(){var t=y.H;return y.H=qi,t===null?qi:t}function g0(){var t=y.A;return y.A=Nm,t}function Wu(){yt=4,Xa||(F&4194048)!==F&&be.current!==null||(Gl=!0),(Oa&134217727)===0&&(il&134217727)===0||ct===null||Ta(ct,F,ve,!1)}function Iu(t,e,a){var l=lt;lt|=2;var n=h0(),i=g0();(ct!==t||F!==e)&&(Ii=null,Vl(t,e)),e=!1;var r=yt;t:do try{if(nt!==0&&Q!==null){var u=Q,s=fe;switch(nt){case 8:$u(),r=6;break t;case 3:case 2:case 9:case 6:be.current===null&&(e=!0);var p=nt;if(nt=0,fe=null,Kl(t,u,s,p),a&&Gl){r=0;break t}break;default:p=nt,nt=0,fe=null,Kl(t,u,s,p)}}Lm(),r=yt;break}catch(x){d0(t,x)}while(!0);return e&&t.shellSuspendCounter++,We=Pa=null,lt=l,y.H=n,y.A=i,Q===null&&(ct=null,F=0,Si()),r}function Lm(){for(;Q!==null;)y0(Q)}function Hm(t,e){var a=lt;lt|=2;var l=h0(),n=g0();ct!==t||F!==e?(Ii=null,Wi=Wt()+500,Vl(t,e)):Gl=Qe(t,e);t:do try{if(nt!==0&&Q!==null){e=Q;var i=fe;e:switch(nt){case 1:nt=0,fe=null,Kl(t,e,i,1);break;case 2:case 9:if(Ef(i)){nt=0,fe=null,x0(e);break}e=function(){nt!==2&&nt!==9||ct!==t||(nt=7),qe(t)},i.then(e,e);break t;case 3:nt=7;break t;case 4:nt=5;break t;case 7:Ef(i)?(nt=0,fe=null,x0(e)):(nt=0,fe=null,Kl(t,e,i,7));break;case 5:var r=null;switch(Q.tag){case 26:r=Q.memoizedState;case 5:case 27:var u=Q;if(!r||P0(r)){nt=0,fe=null;var s=u.sibling;if(s!==null)Q=s;else{var p=u.return;p!==null?(Q=p,tr(p)):Q=null}break e}}nt=0,fe=null,Kl(t,e,i,5);break;case 6:nt=0,fe=null,Kl(t,e,i,6);break;case 8:$u(),yt=6;break t;default:throw Error(g(462))}}Ym();break}catch(x){d0(t,x)}while(!0);return We=Pa=null,y.H=l,y.A=n,lt=a,Q!==null?0:(ct=null,F=0,Si(),yt)}function Ym(){for(;Q!==null&&!Pl();)y0(Q)}function y0(t){var e=Qc(t.alternate,t,ia);t.memoizedProps=t.pendingProps,e===null?tr(t):Q=e}function x0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Yc(a,e,e.pendingProps,e.type,void 0,F);break;case 11:e=Yc(a,e,e.pendingProps,e.type.render,e.ref,F);break;case 5:pu(e);default:Vc(a,e),e=Q=bf(e,ia),e=Qc(a,e,ia)}t.memoizedProps=t.pendingProps,e===null?tr(t):Q=e}function Kl(t,e,a,l){We=Pa=null,pu(e),Yl=null,Dn=0;var n=e.return;try{if(Mm(t,n,e,a,F)){yt=1,Zi(t,he(a,t.current)),Q=null;return}}catch(i){if(n!==null)throw Q=n,i;yt=1,Zi(t,he(a,t.current)),Q=null;return}e.flags&32768?(P||l===1?t=!0:Gl||(F&536870912)!==0?t=!1:(Xa=t=!0,(l===2||l===9||l===3||l===6)&&(l=be.current,l!==null&&l.tag===13&&(l.flags|=16384))),b0(e,t)):tr(e)}function tr(t){var e=t;do{if((e.flags&32768)!==0){b0(e,Xa);return}t=e.return;var a=Em(e.alternate,e,ia);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);yt===0&&(yt=5)}function b0(t,e){do{var a=Am(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);yt=6,Q=null}function v0(t,e,a,l,n,i,r,u,s){t.cancelPendingCommit=null;do er();while(Bt!==0);if((lt&6)!==0)throw Error(g(327));if(e!==null){if(e===t.current)throw Error(g(177));if(i=e.lanes|e.childLanes,i|=Gr,ln(t,a,i,r,u,s),t===ct&&(Q=ct=null,F=0),Ql=e,Ma=t,Zl=a,Ku=i,Ju=n,c0=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gm(sa,function(){return O0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=y.T,y.T=null,n=X.p,X.p=2,r=lt,lt|=4;try{Um(t,e,a)}finally{lt=r,X.p=n,y.T=l}}Bt=1,S0(),z0(),w0()}}function S0(){if(Bt===1){Bt=0;var t=Ma,e=Ql,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var l=X.p;X.p=2;var n=lt;lt|=4;try{l0(e,t);var i=cs,r=ff(t.containerInfo),u=i.focusedElem,s=i.selectionRange;if(r!==u&&u&&u.ownerDocument&&sf(u.ownerDocument.documentElement,u)){if(s!==null&&Hr(u)){var p=s.start,x=s.end;if(x===void 0&&(x=p),"selectionStart"in u)u.selectionStart=p,u.selectionEnd=Math.min(x,u.value.length);else{var v=u.ownerDocument||document,d=v&&v.defaultView||window;if(d.getSelection){var h=d.getSelection(),Y=u.textContent.length,D=Math.min(s.start,Y),ut=s.end===void 0?D:Math.min(s.end,Y);!h.extend&&D>ut&&(r=ut,ut=D,D=r);var o=uf(u,D),c=uf(u,ut);if(o&&c&&(h.rangeCount!==1||h.anchorNode!==o.node||h.anchorOffset!==o.offset||h.focusNode!==c.node||h.focusOffset!==c.offset)){var m=v.createRange();m.setStart(o.node,o.offset),h.removeAllRanges(),D>ut?(h.addRange(m),h.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),h.addRange(m))}}}}for(v=[],h=u;h=h.parentNode;)h.nodeType===1&&v.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<v.length;u++){var b=v[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}pr=!!fs,cs=fs=null}finally{lt=n,X.p=l,y.T=a}}t.current=e,Bt=2}}function z0(){if(Bt===2){Bt=0;var t=Ma,e=Ql,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var l=X.p;X.p=2;var n=lt;lt|=4;try{Pc(t,e.alternate,e)}finally{lt=n,X.p=l,y.T=a}}Bt=3}}function w0(){if(Bt===4||Bt===3){Bt=0,ul();var t=Ma,e=Ql,a=Zl,l=c0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Bt=5:(Bt=0,Ql=Ma=null,X0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Ra=null),ja(a),e=e.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Be,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=y.T,n=X.p,X.p=2,y.T=null;try{for(var i=t.onRecoverableError,r=0;r<l.length;r++){var u=l[r];i(u.value,{componentStack:u.stack})}}finally{y.T=e,X.p=n}}(Zl&3)!==0&&er(),qe(t),n=t.pendingLanes,(a&4194090)!==0&&(n&42)!==0?t===Fu?Qn++:(Qn=0,Fu=t):Qn=0,Zn(0)}}function X0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Xn(e)))}function er(t){return S0(),z0(),w0(),O0()}function O0(){if(Bt!==5)return!1;var t=Ma,e=Ku;Ku=0;var a=ja(Zl),l=y.T,n=X.p;try{X.p=32>a?32:a,y.T=null,a=Ju,Ju=null;var i=Ma,r=Zl;if(Bt=0,Ql=Ma=null,Zl=0,(lt&6)!==0)throw Error(g(331));var u=lt;if(lt|=4,s0(i.current),i0(i,i.current,r,a),lt=u,Zn(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Be,i)}catch{}return!0}finally{X.p=n,y.T=l,X0(t,e)}}function R0(t,e,a){e=he(a,e),e=Mu(t.stateNode,e,2),t=ya(t,e,2),t!==null&&(Ya(t,2),qe(t))}function st(t,e,a){if(t.tag===3)R0(t,t,a);else for(;e!==null;){if(e.tag===3){R0(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){t=he(a,t),a=Ac(2),l=ya(e,a,2),l!==null&&(Uc(a,l,e,t),Ya(l,2),qe(l));break}}e=e.return}}function Pu(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new _m;var n=new Set;l.set(e,n)}else n=l.get(e),n===void 0&&(n=new Set,l.set(e,n));n.has(a)||(Cu=!0,n.add(a),t=jm.bind(null,t,e,a),e.then(t,t))}function jm(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ct===t&&(F&a)===a&&(yt===4||yt===3&&(F&62914560)===F&&300>Wt()-Vu?(lt&2)===0&&Vl(t,0):Qu|=a,Cl===F&&(Cl=0)),qe(t)}function M0(t,e){e===0&&(e=si()),t=Tl(t,e),t!==null&&(Ya(t,e),qe(t))}function qm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),M0(t,a)}function Bm(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(g(314))}l!==null&&l.delete(e),M0(t,a)}function Gm(t,e){return Da(t,e)}var ar=null,Jl=null,ts=!1,lr=!1,es=!1,rl=0;function qe(t){t!==Jl&&t.next===null&&(Jl===null?ar=Jl=t:Jl=Jl.next=t),lr=!0,ts||(ts=!0,Qm())}function Zn(t,e){if(!es&&lr){es=!0;do for(var a=!1,l=ar;l!==null;){if(t!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,u=l.pingedLanes;i=(1<<31-_t(42|t)+1)-1,i&=n&~(r&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,U0(l,i))}else i=F,i=Ce(l,l===ct?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Qe(l,i)||(a=!0,U0(l,i));l=l.next}while(a);es=!1}}function Cm(){T0()}function T0(){lr=ts=!1;var t=0;rl!==0&&(Im()&&(t=rl),rl=0);for(var e=Wt(),a=null,l=ar;l!==null;){var n=l.next,i=E0(l,e);i===0?(l.next=null,a===null?ar=n:a.next=n,n===null&&(Jl=a)):(a=l,(t!==0||(i&3)!==0)&&(lr=!0)),l=n}Zn(t)}function E0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var r=31-_t(i),u=1<<r,s=n[r];s===-1?((u&a)===0||(u&l)!==0)&&(n[r]=ui(u,e)):s<=e&&(t.expiredLanes|=u),i&=~u}if(e=ct,a=F,a=Ce(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&La(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Qe(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&La(l),ja(a)){case 2:case 8:a=tn;break;case 32:a=sa;break;case 268435456:a=fl;break;default:a=sa}return l=A0.bind(null,t),a=Da(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&La(l),t.callbackPriority=2,t.callbackNode=null,2}function A0(t,e){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(er()&&t.callbackNode!==a)return null;var l=F;return l=Ce(t,t===ct?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(m0(t,l,e),E0(t,Wt()),t.callbackNode!=null&&t.callbackNode===a?A0.bind(null,t):null)}function U0(t,e){if(er())return null;m0(t,e,!0)}function Qm(){tp(function(){(lt&6)!==0?Da(sl,Cm):T0()})}function as(){return rl===0&&(rl=ml()),rl}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:di(""+t)}function N0(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Zm(t,e,a,l,n){if(e==="submit"&&a&&a.stateNode===n){var i=k0((n[Zt]||null).action),r=l.submitter;r&&(e=(e=r[Zt]||null)?k0(e.formAction):r.getAttribute("formAction"),e!==null&&(i=e,r=null));var u=new xi("action","action",null,l,n);t.push({event:u,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(rl!==0){var s=r?N0(n,r):new FormData(n);zu(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(u.preventDefault(),s=r?N0(n,r):new FormData(n),zu(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(var ls=0;ls<Br.length;ls++){var ns=Br[ls],Vm=ns.toLowerCase(),Km=ns[0].toUpperCase()+ns.slice(1);ke(Vm,"on"+Km)}ke(mf,"onAnimationEnd"),ke(pf,"onAnimationIteration"),ke(df,"onAnimationStart"),ke("dblclick","onDoubleClick"),ke("focusin","onFocus"),ke("focusout","onBlur"),ke(cm,"onTransitionRun"),ke(om,"onTransitionStart"),ke(mm,"onTransitionCancel"),ke(hf,"onTransitionEnd"),Ve("onMouseEnter",["mouseout","mouseover"]),Ve("onMouseLeave",["mouseout","mouseover"]),Ve("onPointerEnter",["pointerout","pointerover"]),Ve("onPointerLeave",["pointerout","pointerover"]),Ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vn));function _0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],n=l.event;l=l.listeners;t:{var i=void 0;if(e)for(var r=l.length-1;0<=r;r--){var u=l[r],s=u.instance,p=u.currentTarget;if(u=u.listener,s!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=p;try{i(n)}catch(x){Qi(x)}n.currentTarget=null,i=s}else for(r=0;r<l.length;r++){if(u=l[r],s=u.instance,p=u.currentTarget,u=u.listener,s!==i&&n.isPropagationStopped())break t;i=u,n.currentTarget=p;try{i(n)}catch(x){Qi(x)}n.currentTarget=null,i=s}}}}function Z(t,e){var a=e[hl];a===void 0&&(a=e[hl]=new Set);var l=t+"__bubble";a.has(l)||(D0(e,t,2,!1),a.add(l))}function is(t,e,a){var l=0;e&&(l|=4),D0(a,t,l,e)}var nr="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[nr]){t[nr]=!0,sn.forEach(function(a){a!=="selectionchange"&&(Jm.has(a)||is(a,!1,t),is(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nr]||(e[nr]=!0,is("selectionchange",!1,e))}}function D0(t,e,a,l){switch(io(e)){case 2:var n=Sp;break;case 8:n=zp;break;default:n=vs}a=n.bind(null,e,a,t),n=void 0,!Tr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),l?n!==void 0?t.addEventListener(e,a,{capture:!0,passive:n}):t.addEventListener(e,a,!0):n!==void 0?t.addEventListener(e,a,{passive:n}):t.addEventListener(e,a,!1)}function us(t,e,a,l,n){var i=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var u=l.stateNode.containerInfo;if(u===n)break;if(r===4)for(r=l.return;r!==null;){var s=r.tag;if((s===3||s===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;u!==null;){if(r=Ze(u),r===null)return;if(s=r.tag,s===5||s===6||s===26||s===27){l=i=r;continue t}u=u.parentNode}}l=l.return}Bs(function(){var p=i,x=Rr(a),v=[];t:{var d=gf.get(t);if(d!==void 0){var h=xi,Y=t;switch(t){case"keypress":if(gi(a)===0)break t;case"keydown":case"keyup":h=Go;break;case"focusin":Y="focus",h=kr;break;case"focusout":Y="blur",h=kr;break;case"beforeblur":case"afterblur":h=kr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Ao;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Zo;break;case mf:case pf:case df:h=No;break;case hf:h=Ko;break;case"scroll":case"scrollend":h=To;break;case"wheel":h=Fo;break;case"copy":case"cut":case"paste":h=Do;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vs;break;case"toggle":case"beforetoggle":h=Wo}var D=(e&4)!==0,ut=!D&&(t==="scroll"||t==="scrollend"),o=D?d!==null?d+"Capture":null:d;D=[];for(var c=p,m;c!==null;){var b=c;if(m=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||m===null||o===null||(b=on(c,o),b!=null&&D.push(Kn(c,b,m))),ut)break;c=c.return}0<D.length&&(d=new h(d,Y,null,a,x),v.push({event:d,listeners:D}))}}if((e&7)===0){t:{if(d=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",d&&a!==Or&&(Y=a.relatedTarget||a.fromElement)&&(Ze(Y)||Y[De]))break t;if((h||d)&&(d=x.window===x?x:(d=x.ownerDocument)?d.defaultView||d.parentWindow:window,h?(Y=a.relatedTarget||a.toElement,h=p,Y=Y?Ze(Y):null,Y!==null&&(ut=J(Y),D=Y.tag,Y!==ut||D!==5&&D!==27&&D!==6)&&(Y=null)):(h=null,Y=p),h!==Y)){if(D=Qs,b="onMouseLeave",o="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(D=Vs,b="onPointerLeave",o="onPointerEnter",c="pointer"),ut=h==null?d:Ca(h),m=Y==null?d:Ca(Y),d=new D(b,c+"leave",h,a,x),d.target=ut,d.relatedTarget=m,b=null,Ze(x)===p&&(D=new D(o,c+"enter",Y,a,x),D.target=m,D.relatedTarget=ut,b=D),ut=b,h&&Y)e:{for(D=h,o=Y,c=0,m=D;m;m=Fl(m))c++;for(m=0,b=o;b;b=Fl(b))m++;for(;0<c-m;)D=Fl(D),c--;for(;0<m-c;)o=Fl(o),m--;for(;c--;){if(D===o||o!==null&&D===o.alternate)break e;D=Fl(D),o=Fl(o)}D=null}else D=null;h!==null&&L0(v,d,h,D,!1),Y!==null&&ut!==null&&L0(v,ut,Y,D,!0)}}t:{if(d=p?Ca(p):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var T=tf;else if(Is(d))if(ef)T=um;else{T=im;var C=nm}else h=d.nodeName,!h||h.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?p&&Xr(p.elementType)&&(T=tf):T=rm;if(T&&(T=T(t,p))){Ps(v,T,a,x);break t}C&&C(t,d,p),t==="focusout"&&p&&d.type==="number"&&p.memoizedProps.value!=null&&wr(d,"number",d.value)}switch(C=p?Ca(p):window,t){case"focusin":(Is(C)||C.contentEditable==="true")&&(Ol=C,Yr=p,bn=null);break;case"focusout":bn=Yr=Ol=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,cf(v,a,x);break;case"selectionchange":if(fm)break;case"keydown":case"keyup":cf(v,a,x)}var E;if(_r)t:{switch(t){case"compositionstart":var L="onCompositionStart";break t;case"compositionend":L="onCompositionEnd";break t;case"compositionupdate":L="onCompositionUpdate";break t}L=void 0}else Xl?$s(t,a)&&(L="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(L="onCompositionStart");L&&(Ks&&a.locale!=="ko"&&(Xl||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xl&&(E=Gs()):(pa=x,Er="value"in pa?pa.value:pa.textContent,Xl=!0)),C=ir(p,L),0<C.length&&(L=new Zs(L,t,null,a,x),v.push({event:L,listeners:C}),E?L.data=E:(E=Ws(a),E!==null&&(L.data=E)))),(E=Po?tm(t,a):em(t,a))&&(L=ir(p,"onBeforeInput"),0<L.length&&(C=new Zs("onBeforeInput","beforeinput",null,a,x),v.push({event:C,listeners:L}),C.data=E)),Zm(v,t,p,a,x)}_0(v,e)})}function Kn(t,e,a){return{instance:t,listener:e,currentTarget:a}}function ir(t,e){for(var a=e+"Capture",l=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=on(t,a),n!=null&&l.unshift(Kn(t,n,i)),n=on(t,e),n!=null&&l.push(Kn(t,n,i))),t.tag===3)return l;t=t.return}return[]}function Fl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function L0(t,e,a,l,n){for(var i=e._reactName,r=[];a!==null&&a!==l;){var u=a,s=u.alternate,p=u.stateNode;if(u=u.tag,s!==null&&s===l)break;u!==5&&u!==26&&u!==27||p===null||(s=p,n?(p=on(a,i),p!=null&&r.unshift(Kn(a,p,s))):n||(p=on(a,i),p!=null&&r.push(Kn(a,p,s)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var Fm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function H0(t){return(typeof t=="string"?t:""+t).replace(Fm,`
`).replace($m,"")}function Y0(t,e){return e=H0(e),H0(t)===e}function rr(){}function rt(t,e,a,l,n,i){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Sl(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Sl(t,""+l);break;case"className":bl(t,"class",l);break;case"tabIndex":bl(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,a,l);break;case"style":js(t,l,i);break;case"data":if(e!=="object"){bl(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=di(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(e!=="input"&&rt(t,e,"name",n.name,n,null),rt(t,e,"formEncType",n.formEncType,n,null),rt(t,e,"formMethod",n.formMethod,n,null),rt(t,e,"formTarget",n.formTarget,n,null)):(rt(t,e,"encType",n.encType,n,null),rt(t,e,"method",n.method,n,null),rt(t,e,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=di(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=rr);break;case"onScroll":l!=null&&Z("scroll",t);break;case"onScrollEnd":l!=null&&Z("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=di(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Z("beforetoggle",t),Z("toggle",t),xl(t,"popover",l);break;case"xlinkActuate":Ue(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ue(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ue(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ue(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ue(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ue(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ue(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xl(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ro.get(a)||a,xl(t,a,l))}}function ss(t,e,a,l,n,i){switch(a){case"style":js(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(g(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(g(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Sl(t,l):(typeof l=="number"||typeof l=="bigint")&&Sl(t,""+l);break;case"onScroll":l!=null&&Z("scroll",t);break;case"onScrollEnd":l!=null&&Z("scrollend",t);break;case"onClick":l!=null&&(t.onclick=rr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),e=a.slice(2,n?a.length-7:void 0),i=t[Zt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,n);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):xl(t,a,l)}}}function Gt(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",t),Z("load",t);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var r=a[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:rt(t,e,i,r,a,null)}}n&&rt(t,e,"srcSet",a.srcSet,a,null),l&&rt(t,e,"src",a.src,a,null);return;case"input":Z("invalid",t);var u=i=r=n=null,s=null,p=null;for(l in a)if(a.hasOwnProperty(l)){var x=a[l];if(x!=null)switch(l){case"name":n=x;break;case"type":r=x;break;case"checked":s=x;break;case"defaultChecked":p=x;break;case"value":i=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(g(137,e));break;default:rt(t,e,l,x,a,null)}}Ds(t,i,u,s,p,r,n,!1),mi(t);return;case"select":Z("invalid",t),l=r=i=null;for(n in a)if(a.hasOwnProperty(n)&&(u=a[n],u!=null))switch(n){case"value":i=u;break;case"defaultValue":r=u;break;case"multiple":l=u;default:rt(t,e,n,u,a,null)}e=i,a=r,t.multiple=!!l,e!=null?vl(t,!!l,e,!1):a!=null&&vl(t,!!l,a,!0);return;case"textarea":Z("invalid",t),i=n=l=null;for(r in a)if(a.hasOwnProperty(r)&&(u=a[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":n=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:rt(t,e,r,u,a,null)}Hs(t,l,n,i),mi(t);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rt(t,e,s,l,a,null)}return;case"dialog":Z("beforetoggle",t),Z("toggle",t),Z("cancel",t),Z("close",t);break;case"iframe":case"object":Z("load",t);break;case"video":case"audio":for(l=0;l<Vn.length;l++)Z(Vn[l],t);break;case"image":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"embed":case"source":case"link":Z("error",t),Z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,e));default:rt(t,e,p,l,a,null)}return;default:if(Xr(e)){for(x in a)a.hasOwnProperty(x)&&(l=a[x],l!==void 0&&ss(t,e,x,l,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null&&rt(t,e,u,l,a,null))}function Wm(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,u=null,s=null,p=null,x=null;for(h in a){var v=a[h];if(a.hasOwnProperty(h)&&v!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=v;default:l.hasOwnProperty(h)||rt(t,e,h,null,l,v)}}for(var d in l){var h=l[d];if(v=a[d],l.hasOwnProperty(d)&&(h!=null||v!=null))switch(d){case"type":i=h;break;case"name":n=h;break;case"checked":p=h;break;case"defaultChecked":x=h;break;case"value":r=h;break;case"defaultValue":u=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(g(137,e));break;default:h!==v&&rt(t,e,d,h,l,v)}}zr(t,r,u,s,p,x,i,n);return;case"select":h=r=u=d=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":h=s;default:l.hasOwnProperty(i)||rt(t,e,i,null,l,s)}for(n in l)if(i=l[n],s=a[n],l.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":d=i;break;case"defaultValue":u=i;break;case"multiple":r=i;default:i!==s&&rt(t,e,n,i,l,s)}e=u,a=r,l=h,d!=null?vl(t,!!a,d,!1):!!l!=!!a&&(e!=null?vl(t,!!a,e,!0):vl(t,!!a,a?[]:"",!1));return;case"textarea":h=d=null;for(u in a)if(n=a[u],a.hasOwnProperty(u)&&n!=null&&!l.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:rt(t,e,u,null,l,n)}for(r in l)if(n=l[r],i=a[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":d=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&rt(t,e,r,n,l,i)}Ls(t,d,h);return;case"option":for(var Y in a)if(d=a[Y],a.hasOwnProperty(Y)&&d!=null&&!l.hasOwnProperty(Y))switch(Y){case"selected":t.selected=!1;break;default:rt(t,e,Y,null,l,d)}for(s in l)if(d=l[s],h=a[s],l.hasOwnProperty(s)&&d!==h&&(d!=null||h!=null))switch(s){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:rt(t,e,s,d,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var D in a)d=a[D],a.hasOwnProperty(D)&&d!=null&&!l.hasOwnProperty(D)&&rt(t,e,D,null,l,d);for(p in l)if(d=l[p],h=a[p],l.hasOwnProperty(p)&&d!==h&&(d!=null||h!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(g(137,e));break;default:rt(t,e,p,d,l,h)}return;default:if(Xr(e)){for(var ut in a)d=a[ut],a.hasOwnProperty(ut)&&d!==void 0&&!l.hasOwnProperty(ut)&&ss(t,e,ut,void 0,l,d);for(x in l)d=l[x],h=a[x],!l.hasOwnProperty(x)||d===h||d===void 0&&h===void 0||ss(t,e,x,d,l,h);return}}for(var o in a)d=a[o],a.hasOwnProperty(o)&&d!=null&&!l.hasOwnProperty(o)&&rt(t,e,o,null,l,d);for(v in l)d=l[v],h=a[v],!l.hasOwnProperty(v)||d===h||d==null&&h==null||rt(t,e,v,d,l,h)}var fs=null,cs=null;function ur(t){return t.nodeType===9?t:t.ownerDocument}function j0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function q0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function os(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ms=null;function Im(){var t=window.event;return t&&t.type==="popstate"?t===ms?!1:(ms=t,!0):(ms=null,!1)}var B0=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,G0=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof G0<"u"?function(t){return G0.resolve(null).then(t).catch(ep)}:B0;function ep(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function C0(t,e){var a=e,l=0,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var r=t.ownerDocument;if(a&1&&Jn(r.documentElement),a&2&&Jn(r.body),a&4)for(a=r.head,Jn(a),r=a.firstChild;r;){var u=r.nextSibling,s=r.nodeName;r[Ba]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=u}}if(n===0){t.removeChild(i),ai(e);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);ai(e)}function ps(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ps(a),Ga(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ap(t,e,a,l){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ba])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=_e(t.nextSibling),t===null)break}return null}function lp(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=_e(t.nextSibling),t===null))return null;return t}function ds(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function np(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _e(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var hs=null;function Q0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Z0(t,e,a){switch(e=ur(a),t){case"html":if(t=e.documentElement,!t)throw Error(g(452));return t;case"head":if(t=e.head,!t)throw Error(g(453));return t;case"body":if(t=e.body,!t)throw Error(g(454));return t;default:throw Error(g(451))}}function Jn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ga(t)}var Se=new Map,V0=new Set;function sr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=X.d;X.d={f:ip,r:rp,D:up,C:sp,L:fp,m:cp,X:mp,S:op,M:pp};function ip(){var t=ra.f(),e=Pi();return t||e}function rp(t){var e=Me(t);e!==null&&e.tag===5&&e.type==="form"?mc(e):ra.r(t)}var $l=typeof document>"u"?null:document;function K0(t,e,a){var l=$l;if(l&&typeof e=="string"&&e){var n=de(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),V0.has(n)||(V0.add(n),t={rel:t,crossOrigin:a,href:e},l.querySelector(n)===null&&(e=l.createElement("link"),Gt(e,"link",t),pt(e),l.head.appendChild(e)))}}function up(t){ra.D(t),K0("dns-prefetch",t,null)}function sp(t,e){ra.C(t,e),K0("preconnect",t,e)}function fp(t,e,a){ra.L(t,e,a);var l=$l;if(l&&t&&e){var n='link[rel="preload"][as="'+de(e)+'"]';e==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+de(a.imageSizes)+'"]')):n+='[href="'+de(t)+'"]';var i=n;switch(e){case"style":i=Wl(t);break;case"script":i=Il(t)}Se.has(i)||(t=A({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Se.set(i,t),l.querySelector(n)!==null||e==="style"&&l.querySelector(Fn(i))||e==="script"&&l.querySelector($n(i))||(e=l.createElement("link"),Gt(e,"link",t),pt(e),l.head.appendChild(e)))}}function cp(t,e){ra.m(t,e);var a=$l;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+de(l)+'"][href="'+de(t)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Il(t)}if(!Se.has(i)&&(t=A({rel:"modulepreload",href:t},e),Se.set(i,t),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($n(i)))return}l=a.createElement("link"),Gt(l,"link",t),pt(l),a.head.appendChild(l)}}}function op(t,e,a){ra.S(t,e,a);var l=$l;if(l&&t){var n=Te(l).hoistableStyles,i=Wl(t);e=e||"default";var r=n.get(i);if(!r){var u={loading:0,preload:null};if(r=l.querySelector(Fn(i)))u.loading=5;else{t=A({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Se.get(i))&&gs(t,a);var s=r=l.createElement("link");pt(s),Gt(s,"link",t),s._p=new Promise(function(p,x){s.onload=p,s.onerror=x}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,fr(r,e,l)}r={type:"stylesheet",instance:r,count:1,state:u},n.set(i,r)}}}function mp(t,e){ra.X(t,e);var a=$l;if(a&&t){var l=Te(a).hoistableScripts,n=Il(t),i=l.get(n);i||(i=a.querySelector($n(n)),i||(t=A({src:t,async:!0},e),(e=Se.get(n))&&ys(t,e),i=a.createElement("script"),pt(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function pp(t,e){ra.M(t,e);var a=$l;if(a&&t){var l=Te(a).hoistableScripts,n=Il(t),i=l.get(n);i||(i=a.querySelector($n(n)),i||(t=A({src:t,async:!0,type:"module"},e),(e=Se.get(n))&&ys(t,e),i=a.createElement("script"),pt(i),Gt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function J0(t,e,a,l){var n=(n=j.current)?sr(n):null;if(!n)throw Error(g(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Wl(a.href),a=Te(n).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wl(a.href);var i=Te(n).hoistableStyles,r=i.get(t);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,r),(i=n.querySelector(Fn(t)))&&!i._p&&(r.instance=i,r.state.loading=5),Se.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Se.set(t,a),i||dp(n,t,a,r.state))),e&&l===null)throw Error(g(528,""));return r}if(e&&l!==null)throw Error(g(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Il(a),a=Te(n).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,t))}}function Wl(t){return'href="'+de(t)+'"'}function Fn(t){return'link[rel="stylesheet"]['+t+"]"}function F0(t){return A({},t,{"data-precedence":t.precedence,precedence:null})}function dp(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Gt(e,"link",a),pt(e),t.head.appendChild(e))}function Il(t){return'[src="'+de(t)+'"]'}function $n(t){return"script[async]"+t}function $0(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+de(a.href)+'"]');if(l)return e.instance=l,pt(l),l;var n=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pt(l),Gt(l,"style",n),fr(l,a.precedence,t),e.instance=l;case"stylesheet":n=Wl(a.href);var i=t.querySelector(Fn(n));if(i)return e.state.loading|=4,e.instance=i,pt(i),i;l=F0(a),(n=Se.get(n))&&gs(l,n),i=(t.ownerDocument||t).createElement("link"),pt(i);var r=i;return r._p=new Promise(function(u,s){r.onload=u,r.onerror=s}),Gt(i,"link",l),e.state.loading|=4,fr(i,a.precedence,t),e.instance=i;case"script":return i=Il(a.src),(n=t.querySelector($n(i)))?(e.instance=n,pt(n),n):(l=a,(n=Se.get(i))&&(l=A({},a),ys(l,n)),t=t.ownerDocument||t,n=t.createElement("script"),pt(n),Gt(n,"link",l),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(g(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,fr(l,a.precedence,t));return e.instance}function fr(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var u=l[r];if(u.dataset.precedence===e)i=u;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function gs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var cr=null;function W0(t,e,a){if(cr===null){var l=new Map,n=cr=new Map;n.set(a,l)}else n=cr,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[Ba]||i[Xt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(e)||"";r=t+r;var u=l.get(r);u?u.push(i):l.set(r,[i])}}return l}function I0(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function hp(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function P0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Wn=null;function gp(){}function yp(t,e,a){if(Wn===null)throw Error(g(475));var l=Wn;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Wl(a.href),i=t.querySelector(Fn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=or.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,pt(i);return}i=t.ownerDocument||t,a=F0(a),(n=Se.get(n))&&gs(a,n),i=i.createElement("link"),pt(i);var r=i;r._p=new Promise(function(u,s){r.onload=u,r.onerror=s}),Gt(i,"link",a),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=or.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function xp(){if(Wn===null)throw Error(g(475));var t=Wn;return t.stylesheets&&t.count===0&&xs(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&xs(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function or(){if(this.count--,this.count===0){if(this.stylesheets)xs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mr=null;function xs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mr=new Map,e.forEach(bp,t),mr=null,or.call(t))}function bp(t,e){if(!(e.state.loading&4)){var a=mr.get(t);if(a)var l=a.get(null);else{a=new Map,mr.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),l=r)}l&&a.set(null,l)}n=e.instance,r=n.getAttribute("data-precedence"),i=a.get(r)||l,i===l&&a.set(null,n),a.set(r,n),this.count++,l=or.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var In={$$typeof:zt,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function vp(t,e,a,l,n,i,r,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ha(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.hiddenUpdates=Ha(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function to(t,e,a,l,n,i,r,u,s,p,x,v){return t=new vp(t,e,a,r,u,s,p,v),e=1,i===!0&&(e|=24),i=re(3,null,null,e),t.current=i,i.stateNode=t,e=Pr(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:e},lu(i),t}function eo(t){return t?(t=El,t):El}function ao(t,e,a,l,n,i){n=eo(n),l.context===null?l.context=n:l.pendingContext=n,l=ga(e),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ya(t,l,e),a!==null&&(oe(a,t,e),Tn(a,t,e))}function lo(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function bs(t,e){lo(t,e),(t=t.alternate)&&lo(t,e)}function no(t){if(t.tag===13){var e=Tl(t,67108864);e!==null&&oe(e,t,67108864),bs(t,67108864)}}var pr=!0;function Sp(t,e,a,l){var n=y.T;y.T=null;var i=X.p;try{X.p=2,vs(t,e,a,l)}finally{X.p=i,y.T=n}}function zp(t,e,a,l){var n=y.T;y.T=null;var i=X.p;try{X.p=8,vs(t,e,a,l)}finally{X.p=i,y.T=n}}function vs(t,e,a,l){if(pr){var n=Ss(l);if(n===null)us(t,e,l,dr,a),ro(t,l);else if(Xp(n,t,e,a,l))l.stopPropagation();else if(ro(t,l),e&4&&-1<wp.indexOf(t)){for(;n!==null;){var i=Me(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Oe(i.pendingLanes);if(r!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;r;){var s=1<<31-_t(r);u.entanglements[1]|=s,r&=~s}qe(i),(lt&6)===0&&(Wi=Wt()+500,Zn(0))}}break;case 13:u=Tl(i,2),u!==null&&oe(u,i,2),Pi(),bs(i,2)}if(i=Ss(l),i===null&&us(t,e,l,dr,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else us(t,e,l,null,a)}}function Ss(t){return t=Rr(t),zs(t)}var dr=null;function zs(t){if(dr=null,t=Ze(t),t!==null){var e=J(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ot(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return dr=t,null}function io(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ri()){case sl:return 2;case tn:return 8;case sa:case fa:return 32;case fl:return 268435456;default:return 32}default:return 32}}var ws=!1,Aa=null,Ua=null,ka=null,Pn=new Map,ti=new Map,Na=[],wp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ro(t,e){switch(t){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Pn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(e.pointerId)}}function ei(t,e,a,l,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},e!==null&&(e=Me(e),e!==null&&no(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Xp(t,e,a,l,n){switch(e){case"focusin":return Aa=ei(Aa,t,e,a,l,n),!0;case"dragenter":return Ua=ei(Ua,t,e,a,l,n),!0;case"mouseover":return ka=ei(ka,t,e,a,l,n),!0;case"pointerover":var i=n.pointerId;return Pn.set(i,ei(Pn.get(i)||null,t,e,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,ti.set(i,ei(ti.get(i)||null,t,e,a,l,n)),!0}return!1}function uo(t){var e=Ze(t.target);if(e!==null){var a=J(e);if(a!==null){if(e=a.tag,e===13){if(e=ot(a),e!==null){t.blockedOn=e,rn(t.priority,function(){if(a.tag===13){var l=ce();l=dl(l);var n=Tl(a,l);n!==null&&oe(n,a,l),bs(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ss(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Or=l,a.target.dispatchEvent(l),Or=null}else return e=Me(a),e!==null&&no(e),t.blockedOn=a,!1;e.shift()}return!0}function so(t,e,a){hr(t)&&a.delete(e)}function Op(){ws=!1,Aa!==null&&hr(Aa)&&(Aa=null),Ua!==null&&hr(Ua)&&(Ua=null),ka!==null&&hr(ka)&&(ka=null),Pn.forEach(so),ti.forEach(so)}function gr(t,e){t.blockedOn===e&&(t.blockedOn=null,ws||(ws=!0,M.unstable_scheduleCallback(M.unstable_NormalPriority,Op)))}var yr=null;function fo(t){yr!==t&&(yr=t,M.unstable_scheduleCallback(M.unstable_NormalPriority,function(){yr===t&&(yr=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],n=t[e+2];if(typeof l!="function"){if(zs(l||a)===null)continue;break}var i=Me(a);i!==null&&(t.splice(e,3),e-=3,zu(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function ai(t){function e(s){return gr(s,t)}Aa!==null&&gr(Aa,t),Ua!==null&&gr(Ua,t),ka!==null&&gr(ka,t),Pn.forEach(e),ti.forEach(e);for(var a=0;a<Na.length;a++){var l=Na[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)uo(a),a.blockedOn===null&&Na.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],r=n[Zt]||null;if(typeof i=="function")r||fo(a);else if(r){var u=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[Zt]||null)u=r.formAction;else if(zs(n)!==null)continue}else u=r.action;typeof u=="function"?a[l+1]=u:(a.splice(l,3),l-=3),fo(a)}}}function Xs(t){this._internalRoot=t}xr.prototype.render=Xs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(g(409));var a=e.current,l=ce();ao(a,l,t,e,null,null)},xr.prototype.unmount=Xs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ao(t.current,2,null,t,null,null),Pi(),e[De]=null}};function xr(t){this._internalRoot=t}xr.prototype.unstable_scheduleHydration=function(t){if(t){var e=qa();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Na.length&&e!==0&&e<Na[a].priority;a++);Na.splice(a,0,t),a===0&&uo(t)}};var co=ft.version;if(co!=="19.1.0")throw Error(g(527,co,"19.1.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(g(188)):(t=Object.keys(t).join(","),Error(g(268,t)));return t=N(e),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var Rp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{Be=br.inject(Rp),Nt=br}catch{}}return ni.createRoot=function(t,e){if(!q(t))throw Error(g(299));var a=!1,l="",n=Rc,i=Mc,r=Tc,u=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(u=e.unstable_transitionCallbacks)),e=to(t,1,!1,null,null,a,l,n,i,r,u,null),t[De]=e.current,rs(t),new Xs(e)},ni.hydrateRoot=function(t,e,a){if(!q(t))throw Error(g(299));var l=!1,n="",i=Rc,r=Mc,u=Tc,s=null,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(s=a.unstable_transitionCallbacks),a.formState!==void 0&&(p=a.formState)),e=to(t,1,!0,e,a??null,l,n,i,r,u,s,p),e.context=eo(null),a=e.current,l=ce(),l=dl(l),n=ga(l),n.callback=null,ya(a,n,l),a=l,e.current.lanes=a,Ya(e,a),qe(e),t[De]=e.current,rs(t),new xr(e)},ni.version="19.1.0",ni}var So;function Yp(){if(So)return Ms.exports;So=1;function M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M)}catch(ft){console.error(ft)}}return M(),Ms.exports=Hp(),Ms.exports}var jp=Yp();const qp="/lcm/assets/Flexi_Wave-DiRvtOQu.png",Bp="/lcm/assets/Flexi_Teacher-Cc9wiDdU.png",Gp="/lcm/assets/Flexi_Telescope-qAeqBjm9.png",Cp="/lcm/assets/Flexi_Point-C21TOauX.png",Qp="/lcm/assets/Flexi_ThumbsUp-hw5uAAJH.png",Zp=()=>{const[M,ft]=k.useState(!1),[tt,g]=k.useState("initial"),[q,J]=k.useState(!1),[ot,Mt]=k.useState(!1),[N,S]=k.useState(!1),[A,et]=k.useState(!1),[at,St]=k.useState(!1),[ht,Ct]=k.useState(!1),[Ut,ze]=k.useState(!1),[H,zt]=k.useState(!1),[Qt,V]=k.useState(!1),[wt,Yt]=k.useState(!1),[kt,Ft]=k.useState(!1),[ae,le]=k.useState(!1),[Tt,we]=k.useState(!1),[Xe,xt]=k.useState(!1),[y,X]=k.useState(!1),[_,$]=k.useState(!1),[f,z]=k.useState(!1),[R,O]=k.useState(!1),[U,K]=k.useState(!1),[j,jt]=k.useState(!1),[I,me]=k.useState(!1),[$t,ua]=k.useState(!1),[ii,Da]=k.useState(!1),[La,Pl]=k.useState(!1),[ul,Wt]=k.useState(!1),[ri,sl]=k.useState(!1),[tn,sa]=k.useState(!1),[fa,fl]=k.useState(!1),[cl,en]=k.useState(!1),[Be,Nt]=k.useState(!1),[ne,_t]=k.useState(!1),[ca,an]=k.useState(!1),[ol,oa]=k.useState(!1),[Ge,Oe]=k.useState(!1),[Ce,Qe]=k.useState(!1),[ui,ml]=k.useState(!1),[si,Ha]=k.useState(!1),[Ya,ln]=k.useState(!1),[nn,pl]=k.useState(!1),[dl,ja]=k.useState(!1),[qa,rn]=k.useState(!1),[Re,Xt]=k.useState(!1),[Zt,De]=k.useState(!1),[hl,un]=k.useState(!1),[fi,gl]=k.useState(!1),[Ba,Ga]=k.useState(!1),[Ze,Me]=k.useState(!1),[Ca,Te]=k.useState(!1),[pt,sn]=k.useState(!1),[fn,Ee]=k.useState(!0),[Ve,yl]=k.useState(!1),[Ae,ci]=k.useState(!1);kp.useEffect(()=>{const Qa=()=>{ci(window.innerWidth<=500)};return Qa(),window.addEventListener("resize",Qa),()=>window.removeEventListener("resize",Qa)},[]);const vr=()=>{g("initial"),ft(!1),J(!1),Mt(!1),S(!1),et(!1),St(!1),Ct(!1),ze(!1),zt(!1),V(!1),Yt(!1),Ft(!1),le(!1),we(!1),xt(!1),X(!1),$(!1),z(!1),O(!1),K(!1),jt(!1),me(!1),ua(!1),Da(!1),Pl(!1),Wt(!1),sl(!1),sa(!1),fl(!1),en(!1),Nt(!1),_t(!1),an(!1),oa(!1),Oe(!1),Qe(!1),ml(!1),Ha(!1),ln(!1),pl(!1),ja(!1),rn(!1),Xt(!1),De(!1),un(!1),gl(!1),Ga(!1),Me(!1),Te(!1),Ee(!0),yl(!1)},xl=()=>{g("continue1"),Ct(!0),setTimeout(()=>{St(!1),setTimeout(()=>{Ct(!1),et(!1)},200),ze(!0),setTimeout(()=>{zt(!0),setTimeout(()=>{V(!0),setTimeout(()=>{Yt(!0),setTimeout(()=>{Ft(!0),setTimeout(()=>{le(!0),setTimeout(()=>{we(!0),setTimeout(()=>{xt(!0),setTimeout(()=>{X(!0)},800)},300)},500)},300)},300)},300)},600)},500)},700)},bl=()=>{$(!0),setTimeout(()=>{X(!1),xt(!1),$(!1),setTimeout(()=>{O(!0),setTimeout(()=>{jt(!0),setTimeout(()=>{K(!0),setTimeout(()=>{me(!0),ua(!0),Pl(!0),setTimeout(()=>{Da(!0),setTimeout(()=>{Wt(!0),setTimeout(()=>{sl(!0),sa(!0),setTimeout(()=>{fl(!0),setTimeout(()=>{en(!0),setTimeout(()=>{Nt(!0)},800)},1e3)},600)},600)},600)},600)},500)},500)},500)},600)},500)},Ue=()=>{_t(!0),setTimeout(()=>{Nt(!1),en(!1),_t(!1),an(!0),oa(!0),setTimeout(()=>{Oe(!0),setTimeout(()=>{Qe(!0),setTimeout(()=>{ml(!0),setTimeout(()=>{Ha(!0),ln(!0),setTimeout(()=>{pl(!0),setTimeout(()=>{ja(!0),setTimeout(()=>{rn(!0),setTimeout(()=>{Xt(!0),De(!0),setTimeout(()=>{un(!0),setTimeout(()=>{gl(!0),Ga(!0),setTimeout(()=>{Me(!0),setTimeout(()=>{Te(!0)},800)},1e3)},100)},1e3)},1e3)},100)},800)},1e3)},600)},500)},500)},500)},700)},cn=()=>{g("explore"),ft(!0),J(!0),Mt(!0),yl(!0),setTimeout(()=>{Ee(!1),yl(!1)},200),setTimeout(()=>{ft(!1),S(!0),setTimeout(()=>{et(!0),setTimeout(()=>{St(!0)},800)},1700)},700)},oi=()=>{sn(!0),setTimeout(()=>{Te(!1),Me(!1),sn(!1)},500)},ma=()=>{g("final"),S(!0),un(!0),gl(!0),Ga(!0),Me(!0),Te(!0),ln(!0),V(!1),Yt(!1),Ft(!1),le(!1),Wt(!1),sl(!1),sa(!1),fl(!1),Ha(!1),ft(!1),J(!1),Mt(!1),et(!1),St(!1),Ct(!1),ze(!1),zt(!1),we(!1),xt(!1),X(!1),$(!1),z(!1),O(!1),K(!1),jt(!1),me(!1),ua(!1),Da(!1),Pl(!1),Nt(!1),_t(!1),an(!1),oa(!1),Oe(!1),Qe(!1),ml(!1),pl(!1),ja(!1),rn(!1),Xt(!1),De(!1),Ee(!1),yl(!1)};return w.jsxs("div",{className:"w-full max-w-[464px] mx-auto mt-5 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)] bg-white rounded-lg select-none",children:[w.jsx("style",{children:`
					@property --r {
						syntax: '<angle>';
						inherits: false;
						initial-value: 0deg;
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					@keyframes fadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}
					.text-animation {
						animation: fadeIn 0.5s ease-out forwards;
					}
					.text-fade-out {
						animation: fadeIn 0.5s ease-out reverse forwards;
					}
					.shrink-animation {
						animation: shrinkButton 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					@keyframes shrinkButton {
						from {
							transform: scale(1);
							opacity: 1;
						}
						to {
							transform: scale(0);
							opacity: 0;
						}
					}
					@keyframes growButton {
						from {
							transform: scale(0);
							opacity: 0;
						}
						to {
							transform: scale(1);
							opacity: 1;
						}
					}
					.continue-animation {
						animation: growButton 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.text-grow-animation {
						animation: growButton 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.fade-in {
						opacity: 1;
						transition: opacity 0.5s;
					}
					.fade-out {
						opacity: 0;
						transition: opacity 0.5s;
					}
					.zoom-in {
						transform: scale(1.25);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 10;
					}
					.zoom-in-visual {
						transform: scale(2) translate(-10px, 30px);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 1;
					}
					.zoom-out-visual {
						transform: scale(1) translate(0, -110px);
						transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
						z-index: 1;
					}
					.visual-clip {
						overflow: hidden;
						position: relative;
					}
					.equation-faded {
						opacity: 0.25 !important;
						transition: opacity 0.4s !important;
					}
					.equation-opaque {
						opacity: 1 !important;
						transition: opacity 0.4s !important;
					}
					.slide-right {
						transform: translateX(100%);
						transition: transform 0.5s ease-out;
					}
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					.shift-right {
						transform: translateX(-63px);
						transition: transform 0.5s ease-out;
					}
					@keyframes slideEqualSign {
						from {
							transform: translateX(0);
						}
						to {
							transform: translateX(25px);
						}
					}
					@keyframes fadeInDown {
						from {
							opacity: 0;
							transform: translateY(-10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.fade-in-down {
						animation: fadeInDown 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
					}
					.lcm-fade-out-down {
						animation: lcmFadeOutDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.lcm-fade-in {
						animation: fadeIn 0.5s ease-out 0.4s forwards;
					}
					@keyframes lcmFadeOutDown {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(20px);
						}
					}
					.number-move-left {
						animation: moveLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					.number-move-right {
						animation: moveRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}
					@keyframes moveLeft {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}
					@keyframes moveRight {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(70px, -60px);
						}
					}

					.line-appear {
						animation: lineAppear 0.4s ease-out forwards;
					}

					.line-move-left {
						animation: lineMoveLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-right {
						animation: lineMoveRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-left-right {
						animation: lineMoveLeftRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-move-right-right {
						animation: lineMoveRightRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineMoveLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveLeftRight {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineMoveRightRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineAppear {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 38px;
							opacity: 1;
						}
					}

					/* Glow Effect Styles */
					.glow-button { 
						position: absolute;
						bottom: 1rem;
						right: 1rem;
						border-radius: 8px;
						cursor: pointer;
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 3;
						transition: all .3s ease;
						padding: 7px;
					}

					@media (max-width: 640px) {
						.glow-button {
							right: 0.5rem;
							bottom: 0.5rem;
						}
					}

					@media (max-width: 480px) {
						.numbers-container {
							gap: 2rem !important;
						}
						.number-text {
							font-size: 2rem !important;
						}
					}

					@media (max-width: 360px) {
						.numbers-container {
							gap: 1.5rem !important;
						}
						.number-text {
							font-size: 1.75rem !important;
						}
					}

					@media (max-width: 320px) {
						/* No specific speech bubble styles needed */
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-right {
						animation: linesShrinkUnder6Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.main-numbers-move-down {
						animation: mainNumbersMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.main-numbers-move-down-left {
						animation: mainNumbersMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.main-numbers-move-down-right {
						animation: mainNumbersMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					@keyframes mainNumbersMoveDown {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(0, 20px);
						}
					}

					@keyframes mainNumbersMoveDownLeft {
						from {
							transform: translate(-70px, -60px);
						}
						to {
							transform: translate(-70px, -30px);
						}
					}

					@keyframes mainNumbersMoveDownRight {
						from {
							transform: translate(70px, -60px);
						}
						to {
							transform: translate(70px, -30px);
						}
					}

					.multiplication-symbols-fade-in {
						animation: multiplicationSymbolsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.multiplication-symbols-fade-out {
						animation: multiplicationSymbolsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes multiplicationSymbolsFadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes multiplicationSymbolsFadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}

					.separating-lines-fade-in {
						animation: separatingLinesFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out {
						animation: separatingLinesFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-left {
						animation: separatingLinesFadeInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-left {
						animation: separatingLinesFadeOutLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right {
						animation: separatingLinesFadeInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right {
						animation: separatingLinesFadeOutRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-left {
						animation: separatingLinesFadeInRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-left {
						animation: separatingLinesFadeOutRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-right {
						animation: separatingLinesFadeInRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-right {
						animation: separatingLinesFadeOutRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-in {
						animation: powerExpressionsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-out {
						animation: powerExpressionsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes separatingLinesFadeIn {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 20px;
							opacity: 1;
						}
					}

					@keyframes separatingLinesFadeInLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-25px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRight {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-45px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes powerExpressionsFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Prime factor fade out animations */
					.prime-fade-out-left-1 {
						animation: primeFadeOutLeft1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-2 {
						animation: primeFadeOutLeft2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-3 {
						animation: primeFadeOutLeft3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-1 {
						animation: primeFadeOutRight1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-2 {
						animation: primeFadeOutRight2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-3 {
						animation: primeFadeOutRight3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeFadeOutLeft1 {
						0% {
							opacity: 1;
							transform: translate(-90px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutLeft2 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutLeft3 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutRight1 {
						0% {
							opacity: 1;
							transform: translate(50px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutRight2 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes primeFadeOutRight3 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOut {
						from {
							height: 20px;
							opacity: 1;
						}
						to {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes separatingLinesFadeOutLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					.exponent-move-up-right {
						animation: exponentMoveUpRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponent-move-up-left {
						animation: exponentMoveUpLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.final-multiplication-fade-in {
						animation: finalMultiplicationFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-fade-in {
						animation: lcmTextFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@keyframes exponentMoveUpRight {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(140px, -60px);
						}
					}

					@keyframes exponentMoveUpLeft {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}

					@keyframes finalMultiplicationFadeIn {
						from {
							opacity: 0;
							transform: translate(-7px,-60px);
						}
						to {
							opacity: 1;
							transform: translate(-7px, -60px);
						}
					}

					@keyframes lcmTextFadeIn {
						from {
							opacity: 0;
							transform: translate(-123px, -110px);
						}
						to {
							opacity: 1;
							transform: translate(-123px, -110px);
						}
					}

					.exponents-jump-out-left {
						animation: exponentsJumpOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponents-jump-out-right {
						animation: exponentsJumpOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes exponentsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Speech Bubble Styles */
					.flexi-wave-bottom-left {
						position: absolute;
						left: 0.4rem;
						bottom: 18px;
						width: 70px;
						max-width: 70px;
						min-width: 40px;
						width: 5rem;
						height: auto;
						z-index: 2;
						pointer-events: none;
					}
					
					.flexi-wave-bubble-container {
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: flex-end;
						z-index: 3;
					}
					
					.speech-bubble {
						position: relative;
						margin-left: 5rem;
						margin-right: 1rem;
						margin-bottom: 70px;
						background: #fff;
						border-radius: 18px;
						padding: 7px 13px;
						font-size: 0.95rem;
						color: #222;
						box-shadow: 0 2px 8px rgba(0,0,0,0.08);
						min-width: 160px;
						max-width: 90vw;
						word-break: break-word;
					}
					
					.speech-bubble:after {
						content: '';
						position: absolute;
						left: -18px;
						bottom: 16px;
						width: 0;
						height: 0;
						border-top: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-right: 18px solid #fff;
						filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.08));
					}
					
					.flexi-telescope-fade-in {
						animation: flexiFadeIn 0.6s ease-in-out;
					}
					
					.speech-bubble-fade-in {
						animation: speechBubbleFadeIn 0.5s ease-in-out 0.2s both;
					}
					
					@keyframes flexiFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes speechBubbleFadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					.flexi-first-step-fade-out {
						animation: flexiFirstStepFadeOut 0.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
					}
					
					@keyframes flexiFirstStepFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@media (max-width: 500px) {
						/* Right factor tree elements - turn red on small screens */
						.right-factor-tree-18 {
							transform: translate(65px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-2 {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-9 {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-3-left {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-3-right {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}

						
						.right-factor-tree-multiplication {
							transform: translate(35px, -60px) translateX(-100%) !important;
						}
					}

					/* Media query for lines with skewX(-30deg) - left slanting lines */
					@media (max-width: 500px) {
						.right-factor-tree-lines.line-move-right,
						.right-factor-tree-lines.line-under-9-left,
						.right-factor-tree-lines.lines-shrink-move-right,
						.right-factor-tree-lines.lines-shrink-under-9-left {
							transform: translate(35px, -60px) translateX(-100%) skewX(-30deg) !important;
						}
					}

					/* Media query for lines with skewX(30deg) - right slanting lines */
					@media (max-width: 500px) {
						.right-factor-tree-lines.line-move-right-right,
						.right-factor-tree-lines.line-under-9-right,
						.right-factor-tree-lines.lines-shrink-move-right-right,
						.right-factor-tree-lines.lines-shrink-under-9-right {
							transform: translate(35px, -60px) translateX(-100%) skewX(30deg) !important;
						}
					}

					@media (max-width: 640px) {
						.glow-button {
							right: 0.5rem;
							bottom: 0.5rem;
						}
					}

					@media (max-width: 480px) {
						.numbers-container {
							gap: 2rem !important;
						}
						.number-text {
							font-size: 2rem !important;
						}
					}

					@media (max-width: 360px) {
						.numbers-container {
							gap: 1.5rem !important;
						}
						.number-text {
							font-size: 1.75rem !important;
						}
					}

					@media (max-width: 320px) {
						/* No specific speech bubble styles needed */
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-right {
						animation: linesShrinkUnder6Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.main-numbers-move-down {
						animation: mainNumbersMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.main-numbers-move-down-left {
						animation: mainNumbersMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.main-numbers-move-down-right {
						animation: mainNumbersMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					@keyframes mainNumbersMoveDown {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(0, 20px);
						}
					}

					@keyframes mainNumbersMoveDownLeft {
						from {
							transform: translate(-70px, -60px);
						}
						to {
							transform: translate(-70px, -30px);
						}
					}

					@keyframes mainNumbersMoveDownRight {
						from {
							transform: translate(70px, -60px);
						}
						to {
							transform: translate(70px, -30px);
						}
					}

					.multiplication-symbols-fade-in {
						animation: multiplicationSymbolsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.multiplication-symbols-fade-out {
						animation: multiplicationSymbolsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes multiplicationSymbolsFadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes multiplicationSymbolsFadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}

					.separating-lines-fade-in {
						animation: separatingLinesFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out {
						animation: separatingLinesFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-left {
						animation: separatingLinesFadeInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-left {
						animation: separatingLinesFadeOutLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right {
						animation: separatingLinesFadeInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right {
						animation: separatingLinesFadeOutRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-left {
						animation: separatingLinesFadeInRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-left {
						animation: separatingLinesFadeOutRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-right {
						animation: separatingLinesFadeInRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-right {
						animation: separatingLinesFadeOutRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-in {
						animation: powerExpressionsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-out {
						animation: powerExpressionsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes separatingLinesFadeIn {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 20px;
							opacity: 1;
						}
					}

					@keyframes separatingLinesFadeInLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-25px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRight {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-45px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes powerExpressionsFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Prime factor fade out animations */
					.prime-fade-out-left-1 {
						animation: primeFadeOutLeft1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-2 {
						animation: primeFadeOutLeft2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-3 {
						animation: primeFadeOutLeft3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-1 {
						animation: primeFadeOutRight1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-2 {
						animation: primeFadeOutRight2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-3 {
						animation: primeFadeOutRight3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeFadeOutLeft1 {
						0% {
							opacity: 1;
							transform: translate(-90px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutLeft2 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutLeft3 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutRight1 {
						0% {
							opacity: 1;
							transform: translate(50px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutRight2 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes primeFadeOutRight3 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOut {
						from {
							height: 20px;
							opacity: 1;
						}
						to {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes separatingLinesFadeOutLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					.exponent-move-up-right {
						animation: exponentMoveUpRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponent-move-up-left {
						animation: exponentMoveUpLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.final-multiplication-fade-in {
						animation: finalMultiplicationFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-fade-in {
						animation: lcmTextFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@keyframes exponentMoveUpRight {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(140px, -60px);
						}
					}

					@keyframes exponentMoveUpLeft {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}

					@keyframes finalMultiplicationFadeIn {
						from {
							opacity: 0;
							transform: translate(-7px,-60px);
						}
						to {
							opacity: 1;
							transform: translate(-7px, -60px);
						}
					}

					@keyframes lcmTextFadeIn {
						from {
							opacity: 0;
							transform: translate(-123px, -110px);
						}
						to {
							opacity: 1;
							transform: translate(-123px, -110px);
						}
					}

					.exponents-jump-out-left {
						animation: exponentsJumpOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponents-jump-out-right {
						animation: exponentsJumpOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes exponentsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Speech Bubble Styles */
					.flexi-wave-bottom-left {
						position: absolute;
						left: 0.4rem;
						bottom: 18px;
						width: 70px;
						max-width: 70px;
						min-width: 40px;
						width: 5rem;
						height: auto;
						z-index: 2;
						pointer-events: none;
					}
					
					.flexi-wave-bubble-container {
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: flex-end;
						z-index: 3;
					}
					
					.speech-bubble {
						position: relative;
						margin-left: 5rem;
						margin-right: 1rem;
						margin-bottom: 70px;
						background: #fff;
						border-radius: 18px;
						padding: 7px 13px;
						font-size: 0.95rem;
						color: #222;
						box-shadow: 0 2px 8px rgba(0,0,0,0.08);
						min-width: 160px;
						max-width: 90vw;
						word-break: break-word;
					}
					
					.speech-bubble:after {
						content: '';
						position: absolute;
						left: -18px;
						bottom: 16px;
						width: 0;
						height: 0;
						border-top: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-right: 18px solid #fff;
						filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.08));
					}
					
					.flexi-telescope-fade-in {
						animation: flexiFadeIn 0.6s ease-in-out;
					}
					
					.speech-bubble-fade-in {
						animation: speechBubbleFadeIn 0.5s ease-in-out 0.2s both;
					}
					
					@keyframes flexiFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes speechBubbleFadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					.flexi-first-step-fade-out {
						animation: flexiFirstStepFadeOut 0.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
					}
					
					@keyframes flexiFirstStepFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@media (max-width: 500px) {
						/* Right factor tree elements - turn red on small screens */
						.right-factor-tree-18 {
							transform: translate(65px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-2 {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-9 {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-3-left {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}
						
						.right-factor-tree-3-right {
							transform: translate(40px, -60px) translateX(-100%) !important;
						}

						
						.right-factor-tree-multiplication {
							transform: translate(35px, -60px) translateX(-100%) !important;
						}
					}

					/* Media query for lines with skewX(-30deg) - left slanting lines */
					@media (max-width: 500px) {
						.right-factor-tree-lines.line-move-right,
						.right-factor-tree-lines.line-under-9-left,
						.right-factor-tree-lines.lines-shrink-move-right,
						.right-factor-tree-lines.lines-shrink-under-9-left {
							transform: translate(35px, -60px) translateX(-100%) skewX(-30deg) !important;
						}
					}

					/* Media query for lines with skewX(30deg) - right slanting lines */
					@media (max-width: 500px) {
						.right-factor-tree-lines.line-move-right-right,
						.right-factor-tree-lines.line-under-9-right,
						.right-factor-tree-lines.lines-shrink-move-right-right,
						.right-factor-tree-lines.lines-shrink-under-9-right {
							transform: translate(35px, -60px) translateX(-100%) skewX(30deg) !important;
						}
					}

					@media (max-width: 640px) {
						.glow-button {
							right: 0.5rem;
							bottom: 0.5rem;
						}
					}

					@media (max-width: 480px) {
						.numbers-container {
							gap: 2rem !important;
						}
						.number-text {
							font-size: 2rem !important;
						}
					}

					@media (max-width: 360px) {
						.numbers-container {
							gap: 1.5rem !important;
						}
						.number-text {
							font-size: 1.75rem !important;
						}
					}

					@media (max-width: 320px) {
						/* No specific speech bubble styles needed */
					}

					.glow-button::before {
						content: "";
						display: block;
						position: absolute;
						background: #fff;
						inset: 2px;
						border-radius: 4px;
						z-index: -2;
					}

					.simple-glow { 
						background: conic-gradient(
							from var(--r),
							transparent 0%,
							rgb(0, 255, 132) 2%,
							rgb(0, 214, 111) 8%,
							rgb(0, 174, 90) 12%,
							rgb(0, 133, 69) 14%,
							transparent 15%
						);
						animation: rotating 3s linear infinite;
						transition: animation 0.3s ease;
					}

					.simple-glow.stopped {
						animation: none;
						background: none;
					}

					@keyframes rotating {
						0% {
							--r: 0deg;
						}
						100% {
							--r: 360deg;
						}
					}

					.explore-button {
						background-color: #008545;
						color: white;
						border: none;
						border-radius: 4px;
						padding: 0.375rem 0.75rem;
						font-size: 0.875rem;
						font-weight: 600;
						cursor: pointer;
						transition: background-color 0.2s;
					}

					.explore-button:hover {
						background-color: #00783E;
					}

					.prime-move-left-1 {
						animation: primeMoveLeft1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-left-2 {
						animation: primeMoveLeft2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-1 {
						animation: primeMoveRight1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2 {
						animation: primeMoveRight2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-1 {
						animation: primeUnder6_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-6-2 {
						animation: primeUnder6_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-1 {
						animation: primeUnder9_1 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-under-9-2 {
						animation: primeUnder9_2 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveLeft2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeMoveRight2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_1 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder6_2 {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_1 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					@keyframes primeUnder9_2 {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
					}

					.line-under-6-left {
						animation: lineUnder6Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-6-right {
						animation: lineUnder6Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-left {
						animation: lineUnder8Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-8-right {
						animation: lineUnder8Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder6Left {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder6Right {
						0% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder8Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.line-under-9-left {
						animation: lineUnder9Left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					.line-under-9-right {
						animation: lineUnder9Right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
						transform-origin: top center;
					}

					@keyframes lineUnder9Left {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
							height: 38px;
							opacity: 1;
						}
					}

					@keyframes lineUnder9Right {
						0% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 0;
							opacity: 0;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
							height: 38px;
							opacity: 1;
						}
					}

					.fade-non-primes {
						animation: fadeNonPrimes 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes fadeNonPrimes {
						0% {
							opacity: 1;
						}
						100% {
							opacity: 0.5;
						}
					}

					.prime-move-left-2-no-opacity {
						animation: primeMoveLeft2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-move-right-2-no-opacity {
						animation: primeMoveRight2NoOpacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeMoveLeft2NoOpacity {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(-70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					@keyframes primeMoveRight2NoOpacity {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0;
						}
						99% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 1;
						}
						100% {
							transform: translate(70px, -60px) translateX(-50%);
							opacity: 0.5;
						}
					}

					.lines-shrink {
						animation: linesShrinkAnimation 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-appear {
						animation: linesShrinkAppear 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left {
						animation: linesShrinkMoveLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-left-right {
						animation: linesShrinkMoveLeftRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right {
						animation: linesShrinkMoveRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-move-right-right {
						animation: linesShrinkMoveRightRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-left {
						animation: linesShrinkUnder6Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-6-right {
						animation: linesShrinkUnder6Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-left {
						animation: linesShrinkUnder9Left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.lines-shrink-under-9-right {
						animation: linesShrinkUnder9Right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out {
						animation: nonPrimesFadeOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-left {
						animation: nonPrimesFadeOutLeft 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.non-primes-fade-out-right {
						animation: nonPrimesFadeOutRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down {
						animation: firstPrimesMoveDown 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-left {
						animation: firstPrimesMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.first-primes-move-down-right {
						animation: firstPrimesMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-left {
						animation: secondPrimesMoveUpLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.second-primes-move-up-right {
						animation: secondPrimesMoveUpRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.primes-group-left {
						animation: primesGroupLeft 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.primes-group-right {
						animation: primesGroupRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes firstPrimesMoveDownLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes firstPrimesMoveDownRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes secondPrimesMoveUpLeft {
						0% {
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(-520%, -400%);
						}
					}

					@keyframes secondPrimesMoveUpRight {
						0% {
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							transform: translate(400%, -400%);
						}
					}

					@keyframes nonPrimesFadeOut {
						0% {
							opacity: 0.5;
						}
						100% {
							opacity: 0;
						}
					}

					@keyframes nonPrimesFadeOutLeft {
						0% {
							opacity: 0.5;
							transform: translate(-70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%);
						}
					}

					@keyframes nonPrimesFadeOutRight {
						0% {
							opacity: 0.5;
							transform: translate(70px, -60px) translateX(-50%);
						}
						100% {
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%);
						}
					}

					@keyframes linesShrinkAnimation {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkAppear {
						0% {
							height: 38px;
							opacity: 1;
						}
						100% {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes linesShrinkMoveLeft {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveLeftRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkMoveRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkMoveRightRight {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder6Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder6Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(-70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					@keyframes linesShrinkUnder9Left {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(-30deg);
						}
					}

					@keyframes linesShrinkUnder9Right {
						0% {
							height: 38px;
							opacity: 1;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
						100% {
							height: 0;
							opacity: 0;
							transform: translate(70px, -60px) translateX(-50%) skewX(30deg);
						}
					}

					.main-numbers-move-down {
						animation: mainNumbersMoveDown 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.main-numbers-move-down-left {
						animation: mainNumbersMoveDownLeft 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					.main-numbers-move-down-right {
						animation: mainNumbersMoveDownRight 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
					}

					@keyframes mainNumbersMoveDown {
						from {
							transform: translate(0, 0);
						}
						to {
							transform: translate(0, 20px);
						}
					}

					@keyframes mainNumbersMoveDownLeft {
						from {
							transform: translate(-70px, -60px);
						}
						to {
							transform: translate(-70px, -30px);
						}
					}

					@keyframes mainNumbersMoveDownRight {
						from {
							transform: translate(70px, -60px);
						}
						to {
							transform: translate(70px, -30px);
						}
					}

					.multiplication-symbols-fade-in {
						animation: multiplicationSymbolsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.multiplication-symbols-fade-out {
						animation: multiplicationSymbolsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes multiplicationSymbolsFadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					@keyframes multiplicationSymbolsFadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}

					.separating-lines-fade-in {
						animation: separatingLinesFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out {
						animation: separatingLinesFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-left {
						animation: separatingLinesFadeInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-left {
						animation: separatingLinesFadeOutLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right {
						animation: separatingLinesFadeInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right {
						animation: separatingLinesFadeOutRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-left {
						animation: separatingLinesFadeInRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-left {
						animation: separatingLinesFadeOutRightSideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-in-right-side-right {
						animation: separatingLinesFadeInRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.separating-lines-fade-out-right-side-right {
						animation: separatingLinesFadeOutRightSideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-in {
						animation: powerExpressionsFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.power-expressions-fade-out {
						animation: powerExpressionsFadeOut 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes separatingLinesFadeIn {
						from {
							height: 0;
							opacity: 0;
						}
						to {
							height: 20px;
							opacity: 1;
						}
					}

					@keyframes separatingLinesFadeInLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-25px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRight {
						from {
							height: 0;
							opacity: 0;
							transform: translateX(-45px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideLeft {
						from {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes powerExpressionsFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Prime factor fade out animations */
					.prime-fade-out-left-1 {
						animation: primeFadeOutLeft1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-2 {
						animation: primeFadeOutLeft2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-left-3 {
						animation: primeFadeOutLeft3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-1 {
						animation: primeFadeOutRight1 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-2 {
						animation: primeFadeOutRight2 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.prime-fade-out-right-3 {
						animation: primeFadeOutRight3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes primeFadeOutLeft1 {
						0% {
							opacity: 1;
							transform: translate(-90px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(-90px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutLeft2 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutLeft3 {
						0% {
							opacity: 1;
							transform: translate(-520%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(-520%, -400%);
						}
					}

					@keyframes primeFadeOutRight1 {
						0% {
							opacity: 1;
							transform: translate(50px, -48px) translateX(-150%);
						}
						100% {
							opacity: 0;
							transform: translate(50px, -48px) translateX(-150%);
						}
					}

					@keyframes primeFadeOutRight2 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes primeFadeOutRight3 {
						0% {
							opacity: 1;
							transform: translate(400%, -400%);
						}
						100% {
							opacity: 0;
							transform: translate(400%, -400%);
						}
					}

					@keyframes separatingLinesFadeInRightSideRight {
						from {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOut {
						from {
							height: 20px;
							opacity: 1;
						}
						to {
							height: 0;
							opacity: 0;
						}
					}

					@keyframes separatingLinesFadeOutLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-58px, 10px) skewX(-30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideLeft {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(-11px, 10px) skewX(30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(-11px, 10px) skewX(30deg);
						}
					}

					@keyframes separatingLinesFadeOutRightSideRight {
						from {
							height: 38px;
							opacity: 1;
							transform: translate(44px, 10px) skewX(-30deg);
						}
						to {
							height: 0;
							opacity: 0;
							transform: translate(44px, 10px) skewX(-30deg);
						}
					}

					.exponent-move-up-right {
						animation: exponentMoveUpRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponent-move-up-left {
						animation: exponentMoveUpLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.final-multiplication-fade-in {
						animation: finalMultiplicationFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-fade-in {
						animation: lcmTextFadeIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes powerExpressionsFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					@keyframes exponentMoveUpRight {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(140px, -60px);
						}
					}

					@keyframes exponentMoveUpLeft {
						from {
							transform: translate(0px, 0px);
						}
						to {
							transform: translate(-70px, -60px);
						}
					}

					@keyframes finalMultiplicationFadeIn {
						from {
							opacity: 0;
							transform: translate(-7px,-60px);
						}
						to {
							opacity: 1;
							transform: translate(-7px, -60px);
						}
					}

					@keyframes lcmTextFadeIn {
						from {
							opacity: 0;
							transform: translate(-123px, -110px);
						}
						to {
							opacity: 1;
							transform: translate(-123px, -110px);
						}
					}

					.exponents-jump-out-left {
						animation: exponentsJumpOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.exponents-jump-out-right {
						animation: exponentsJumpOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes exponentsJumpOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					@keyframes exponentsJumpOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
					}

					.replacement-numbers-jump-in-left {
						animation: replacementNumbersJumpInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-jump-in-right {
						animation: replacementNumbersJumpInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersJumpInLeft {
						0% {
							opacity: 0;
							transform: translate(140px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersJumpInRight {
						0% {
							opacity: 0;
							transform: translate(-70px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
					}

					.replacement-numbers-fade-out-left {
						animation: replacementNumbersFadeOutLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.replacement-numbers-fade-out-right {
						animation: replacementNumbersFadeOutRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes replacementNumbersFadeOutLeft {
						0% {
							opacity: 1;
							transform: translate(140px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(165px, -60px) scale(1);
						}
					}

					@keyframes replacementNumbersFadeOutRight {
						0% {
							opacity: 1;
							transform: translate(-70px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-95px, -60px) scale(1);
						}
					}

					.final-multiplication-fade-out {
						animation: finalMultiplicationFadeOut 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalMultiplicationFadeOut {
						0% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
						100% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
					}

					.final-result-jump-in {
						animation: finalResultJumpIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					.lcm-text-move-right {
						animation: lcmTextMoveRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
					}

					@keyframes finalResultJumpIn {
						0% {
							opacity: 0;
							transform: translate(-7px, -60px) scale(0);
						}
						50% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1.3);
						}
						100% {
							opacity: 1;
							transform: translate(-7px, -60px) scale(1);
						}
					}

					@keyframes lcmTextMoveRight {
						0% {
							transform: translate(-123px, -110px);
						}
						100% {
							transform: translate(-88px, -110px);
						}
					}

					/* Speech Bubble Styles */
					.flexi-wave-bottom-left {
						position: absolute;
						left: 0.4rem;
						bottom: 18px;
						width: 70px;
						max-width: 70px;
						min-width: 40px;
						width: 5rem;
						height: auto;
						z-index: 2;
						pointer-events: none;
					}
					
					.flexi-wave-bubble-container {
						position: absolute;
						left: 0;
						bottom: 0;
						display: flex;
						align-items: flex-end;
						z-index: 3;
					}
					
					.speech-bubble {
						position: relative;
						margin-left: 5rem;
						margin-right: 1rem;
						margin-bottom: 70px;
						background: #fff;
						border-radius: 18px;
						padding: 7px 13px;
						font-size: 0.95rem;
						color: #222;
						box-shadow: 0 2px 8px rgba(0,0,0,0.08);
						min-width: 160px;
						max-width: 90vw;
						word-break: break-word;
					}
					
					.speech-bubble:after {
						content: '';
						position: absolute;
						left: -18px;
						bottom: 16px;
						width: 0;
						height: 0;
						border-top: 12px solid transparent;
						border-bottom: 12px solid transparent;
						border-right: 18px solid #fff;
						filter: drop-shadow(-2px 2px 2px rgba(0,0,0,0.08));
					}
					
					.flexi-telescope-fade-in {
						animation: flexiFadeIn 0.6s ease-in-out;
					}
					
					.speech-bubble-fade-in {
						animation: speechBubbleFadeIn 0.5s ease-in-out 0.2s both;
					}
					
					@keyframes flexiFadeIn {
						from {
							opacity: 0;
							transform: translateY(10px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes speechBubbleFadeIn {
						from {
							opacity: 0;
							transform: translateX(-10px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					.flexi-first-step-fade-out {
						animation: flexiFirstStepFadeOut 0.2s cubic-bezier(0.4, 0.2, 0.2, 1) forwards;
					}
					
					@keyframes flexiFirstStepFadeOut {
						from {
							opacity: 1;
							transform: translateY(0);
						}
						to {
							opacity: 0;
							transform: translateY(-10px);
						}
					}

					/* Small screen positioning classes */
					.small-screen-position {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-position.number-move-right,
					.small-screen-position.main-numbers-move-down-right {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-prime {
						transform: translate(40px, -60px) translateX(-100%) !important;
					}

					.small-screen-multiplication {
						transform: translate(35px, -60px) translateX(-100%) !important;
					}

					.small-screen-line-left {
						transform: translate(35px, -60px) translateX(-100%) skewX(-30deg) !important;
					}

					.small-screen-line-right {
						transform: translate(35px, -60px) translateX(-100%) skewX(30deg) !important;
					}
				`}),w.jsxs("div",{className:"p-4",children:[w.jsxs("div",{className:"flex justify-between items-center mb-4",children:[w.jsx("h2",{className:"text-[#5750E3] text-sm font-medium select-none",children:"LCM Explorer"}),w.jsxs("div",{className:"flex gap-2",children:[w.jsx("button",{className:"text-sm px-3 py-1 rounded border transition-colors bg-orange-500 hover:bg-orange-600 text-white border-orange-600 hover:border-orange-700",onClick:ma,title:"TEMPORARY: Skip to final step",children:"Skip to Final"}),w.jsx("button",{className:`text-sm px-3 py-1 rounded border transition-colors ${(M||ht||q||ot||Ut||H)&&!at&&!y&&!Be?"text-gray-400 border-gray-200 cursor-not-allowed":"text-gray-500 hover:text-gray-700 border-gray-300 hover:border-gray-400"}`,onClick:vr,title:"Reset interactive",disabled:(M||ht||q||ot||Ut||H)&&!at&&!y&&!Be,children:"Reset"})]})]}),w.jsx("div",{className:"space-y-4",children:w.jsx("div",{className:"w-full max-w-[430px] mx-auto bg-white border border-[#5750E3]/30 rounded-md relative overflow-hidden",style:{minHeight:"370px",height:"auto"},children:w.jsxs("div",{className:"relative w-full max-w-[400px] mx-auto",style:{minHeight:"420px",height:"auto"},children:[!N&&w.jsx("div",{className:`glow-button ${tt==="initial"?"simple-glow":"simple-glow stopped"} ${q?"shrink-animation":""}`,style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:3},children:w.jsx("button",{className:`explore-button select-none ${q?"shrink-animation":""}`,onClick:cn,disabled:M,style:{transformOrigin:"center"},children:"Click to Explore!"})}),N&&w.jsxs("div",{className:"flex flex-col items-center gap-4 absolute top-20 left-1/2 transform -translate-x-1/2",children:[w.jsxs("div",{className:"flex items-center gap-8 text-animation numbers-container",style:{opacity:0,animation:"fadeIn 0.5s ease-out forwards"},children:[w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:`text-4xl font-bold text-black number-text ${H?"number-move-left":""} ${La?"main-numbers-move-down-left":""}`,children:"12"}),Qt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${H?"line-move-left":"line-appear"} ${U?H?"lines-shrink-move-left":"lines-shrink-appear":""}`,style:{left:"50%"}}),Qt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${H?"line-move-left-right":"line-appear"} ${U?H?"lines-shrink-move-left-right":"lines-shrink-appear":""}`,style:{left:"50%"}}),wt&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] prime-text ${H?"prime-move-left-1":""} ${I?"first-primes-move-down-left":""} ${ca?"prime-fade-out-left-1":""}`,style:{left:"calc(50% - 35px)",top:"calc(100% + 50px)",transform:"translateX(-50%)"},children:"2"}),wt&&ul&&w.jsx("div",{className:`absolute text-xl font-bold text-[#5750E3] ${ol?"multiplication-symbols-fade-out":"multiplication-symbols-fade-in"}`,style:{left:"calc(50% - 105px)",top:"calc(100% + 3px)",transform:"translateX(-50%)"},children:"×"}),ri&&w.jsx("div",{className:`absolute w-0.5 bg-[#5750E3] ${Ge?"separating-lines-fade-out-left":"separating-lines-fade-in-left"} ${H?"prime-move-left-1":""} ${I?"first-primes-move-down-left":""}`,style:{left:"calc(50% - 105px)",top:"calc(100% + 25px)",transform:"translateX(-50%)"}}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${ui?"exponent-move-up-right":"power-expressions-fade-in"} ${nn?"exponents-jump-out-left":""} ${H?"prime-move-left-1":""} ${I?"first-primes-move-down-left":""}`,style:{left:"calc(50% - 112px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"2²"}),dl&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${qa?"replacement-numbers-jump-in-left":""} ${Re?"replacement-numbers-fade-out-left":""}`,style:{left:"calc(50% - 112px)",top:"calc(100% + 75px)",transform:"translate(140px, -60px)",opacity:qa?1:0},children:"4"}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${Ce?"power-expressions-fade-out":"power-expressions-fade-in"} ${H?"prime-move-left-1":""} ${I?"first-primes-move-down-left":""}`,style:{left:"calc(50% - 77px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"×"}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${Ce?"power-expressions-fade-out":"power-expressions-fade-in"} ${H?"prime-move-left-1":""} ${I?"first-primes-move-down-left":""}`,style:{left:"calc(50% - 43px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"3"}),wt&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${H?"prime-move-left-2-no-opacity":""} ${j?"non-primes-fade-out-left":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 50px)",transform:"translateX(-50%)",opacity:Tt?.5:1},children:"6"}),kt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${H?"line-under-6-left":"line-appear"} ${R?H?"lines-shrink-under-6-left":"lines-shrink-appear":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 80px)"}}),kt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] ${H?"line-under-6-right":"line-appear"} ${R?H?"lines-shrink-under-6-right":"lines-shrink-appear":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 80px)"}}),ae&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${H?"prime-under-6-1":""} ${$t?"second-primes-move-up-left":""} ${ca?"prime-fade-out-left-2":""}`,style:{left:"calc(50% + 0px)",top:"calc(100% + 130px)",transform:"translateX(-50%)"},children:"2"}),ae&&ul&&w.jsx("div",{className:`absolute text-xl font-bold text-[#5750E3] ${ol?"multiplication-symbols-fade-out":"multiplication-symbols-fade-in"}`,style:{left:"calc(50% - 36px)",top:"calc(100% + 3px)",transform:"translateX(-50%)"},children:"×"}),ri&&w.jsx("div",{className:`absolute w-0.5 bg-[#5750E3] ${Ge?"separating-lines-fade-out-right":"separating-lines-fade-in-right"} ${H?"prime-under-6-1":""} ${$t?"second-primes-move-up-left":""}`,style:{left:"calc(50% - 36px)",top:"calc(100% + 25px)",transform:"translateX(-50%)"}}),ae&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${H?"prime-under-6-2":""} ${$t?"second-primes-move-up-left":""} ${ca?"prime-fade-out-left-3":""}`,style:{left:"calc(50% + 70px)",top:"calc(100% + 130px)",transform:"translateX(-50%)"},children:"3"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:`text-4xl font-bold text-black number-text right-factor-tree-18 ${H?"number-move-right":""} ${La?"main-numbers-move-down-right":""} ${Ae&&(H||La)?"small-screen-position":""}`,children:"18"}),Qt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${H?"line-move-right":"line-appear"} ${U?H?"lines-shrink-move-right":"lines-shrink-appear":""} ${Ae?"small-screen-line-left":""}`,style:{left:"50%"}}),Qt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${H?"line-move-right-right":"line-appear"} ${U?H?"lines-shrink-move-right-right":"lines-shrink-appear":""} ${Ae?"small-screen-line-right":""}`,style:{left:"50%"}}),wt&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] prime-text right-factor-tree-2 ${H?"prime-move-right-1":""} ${I?"first-primes-move-down-right":""} ${ca?"prime-fade-out-right-1":""} ${Ae?"small-screen-prime":""}`,style:{left:"calc(50% - 35px)",top:"calc(100% + 50px)",transform:"translateX(-50%)"},children:"2"}),wt&&ul&&w.jsx("div",{className:`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${ol?"multiplication-symbols-fade-out":"multiplication-symbols-fade-in"} ${Ae?"small-screen-multiplication":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 3px)",transform:"translateX(-50%)"},children:"×"}),wt&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${H?"prime-move-right-2-no-opacity":""} ${j?"non-primes-fade-out-right":""} ${Ae?"small-screen-prime":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 50px)",transform:"translateX(-50%)",opacity:Tt?.5:1},children:"9"}),kt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${H?"line-under-9-left":"line-appear"} ${R?H?"lines-shrink-under-9-left":"lines-shrink-appear":""} ${Ae?"small-screen-line-left":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 80px)"}}),kt&&w.jsx("div",{className:`absolute top-full mt-2 w-0.5 bg-[#5750E3] right-factor-tree-lines ${H?"line-under-9-right":"line-appear"} ${R?H?"lines-shrink-under-9-right":"lines-shrink-appear":""} ${Ae?"small-screen-line-right":""}`,style:{left:"calc(50% + 35px)",top:"calc(100% + 80px)"}}),ae&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-left ${H?"prime-under-9-1":""} ${$t?"second-primes-move-up-right":""} ${ca?"prime-fade-out-right-2":""}`,style:{left:"calc(50% + 0px)",top:"calc(100% + 130px)",transform:"translateX(-50%)"},children:"3"}),ae&&ul&&w.jsx("div",{className:`absolute text-xl font-bold text-[#5750E3] right-factor-tree-multiplication ${ol?"multiplication-symbols-fade-out":"multiplication-symbols-fade-in"}`,style:{left:"calc(50% + 103px)",top:"calc(100% + 3px)",transform:"translateX(-50%)"},children:"×"}),tn&&w.jsx("div",{className:`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${Ge?"separating-lines-fade-out-right-side-left":"separating-lines-fade-in-right-side-left"} ${H?"prime-under-9-1":""} ${$t?"second-primes-move-up-right":""}`,style:{left:"calc(50% + 103px)",top:"calc(100% + 25px)",transform:"translateX(-50%)"}}),ae&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${H?"prime-under-9-2":""} ${$t?"second-primes-move-up-right":""} ${ca?"prime-fade-out-right-3":""}`,style:{left:"calc(50% + 70px)",top:"calc(100% + 130px)",transform:"translateX(-50%)"},children:"3"}),tn&&w.jsx("div",{className:`absolute w-0.5 bg-[#5750E3] right-factor-tree-lines ${Ge?"separating-lines-fade-out-right-side-right":"separating-lines-fade-in-right-side-right"} ${H?"prime-under-9-2":""} ${$t?"second-primes-move-up-right":""}`,style:{left:"calc(50% + 70px)",top:"calc(100% + 25px)",transform:"translateX(-50%)"}}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-2 ${Ce?"power-expressions-fade-out":"power-expressions-fade-in"} ${H?"prime-under-9-2":""} ${$t?"second-primes-move-up-right":""}`,style:{left:"calc(50% + 28px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"2"}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication ${Ce?"power-expressions-fade-out":"power-expressions-fade-in"} ${H?"prime-under-9-2":""} ${$t?"second-primes-move-up-right":""}`,style:{left:"calc(50% + 62px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"×"}),fa&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-3-right ${ui?"exponent-move-up-left":"power-expressions-fade-in"} ${nn?"exponents-jump-out-right":""} ${H?"prime-under-9-2":""} ${$t?"second-primes-move-up-right":""}`,style:{left:"calc(50% + 97px)",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"3²"}),dl&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-9 ${qa?"replacement-numbers-jump-in-right":""} ${Re?"replacement-numbers-fade-out-right":""}`,style:{left:"calc(50% + 97px)",top:"calc(100% + 75px)",transform:"translate(-70px, -60px)",opacity:qa?1:0},children:"9"}),si&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] right-factor-tree-multiplication final-multiplication-fade-in ${Zt?" final-multiplication-fade-out":""}`,style:{left:"50%",top:"calc(100% + 75px)",transform:"translateX(-50%)"},children:"×"}),Ya&&w.jsx("div",{className:`absolute text-2xl font-bold text-gray-700 lcm-text-fade-in ${Ba?"lcm-text-move-right":""}`,style:{left:"50%",top:"calc(100% + 125px)",transform:"translateX(-50%)"},children:"LCM ="}),hl&&w.jsx("div",{className:`absolute text-2xl font-bold text-[#5750E3] ${fi?"final-result-jump-in":""}`,style:{left:"40%",top:"calc(100% + 75px)",transform:"translateX(-50%)",opacity:fi?1:0},children:"36"})]})]}),!hl&&w.jsxs("div",{className:`text-2xl font-bold text-gray-700 ${Ut?"lcm-fade-out-down":"lcm-fade-in"}`,style:{opacity:0},children:["LCM = ",w.jsx("span",{className:"inline-block",style:{opacity:0,animation:"growButton 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards"},children:"?"})]})]}),at&&w.jsx("div",{className:`glow-button ${ht?"simple-glow stopped":"simple-glow"}`,style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:50},children:w.jsx("button",{className:`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${ht?"shrink-animation":"continue-animation"}`,onClick:xl,style:{transformOrigin:"center",zIndex:50,borderRadius:"4px"},children:"Continue"})}),y&&w.jsx("div",{className:`glow-button ${_?"simple-glow stopped":"simple-glow"}`,style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:50},children:w.jsx("button",{className:`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${_?"shrink-animation":"continue-animation"}`,onClick:bl,style:{transformOrigin:"center",zIndex:50,borderRadius:"4px"},children:"Continue"})}),Be&&w.jsx("div",{className:`glow-button ${ne?"simple-glow stopped":"simple-glow"}`,style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:50},children:w.jsx("button",{className:`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${ne?"shrink-animation":"continue-animation"}`,onClick:Ue,style:{transformOrigin:"center",zIndex:50,borderRadius:"4px"},children:"Continue"})}),Ca&&w.jsx("div",{className:`glow-button ${pt?"simple-glow stopped":"simple-glow"}`,style:{position:"absolute",bottom:"0.5rem",right:"0.5rem",zIndex:50},children:w.jsx("button",{className:`px-3 py-1.5 bg-[#008545] hover:bg-[#00783E] text-white text-sm rounded transition-colors duration-200 select-none
											${pt?"shrink-animation":"continue-animation"}`,onClick:oi,style:{transformOrigin:"center",zIndex:50,borderRadius:"4px"},children:"Continue"})}),(fn||A||Xe||cl||Ze)&&w.jsxs("div",{className:"absolute left-0 bottom-0 w-full h-full flex items-end justify-start pointer-events-none px-2 sm:px-0",children:[fn&&w.jsxs("div",{className:`flexi-wave-bubble-container ${Ve?"flexi-first-step-fade-out":""}`,children:[w.jsx("img",{src:qp,alt:"Flexi Wave",className:"flexi-wave-bottom-left"}),w.jsx("div",{className:`speech-bubble ${Ve?"flexi-first-step-fade-out":"speech-bubble-fade-in"}`,children:"Welcome to the LCM Explorer! Click the button below to begin."})]}),A&&!Xe&&!cl&&w.jsxs("div",{className:`flexi-wave-bubble-container ${ht?"flexi-first-step-fade-out":""}`,children:[w.jsx("img",{src:Bp,alt:"Flexi Teacher",className:"flexi-wave-bottom-left flexi-telescope-fade-in"}),w.jsxs("div",{className:`speech-bubble ${ht?"flexi-first-step-fade-out":"speech-bubble-fade-in"}`,children:["To find the ",w.jsx("b",{children:"Least Common Multiple"}),", we use prime factorization."]})]}),Xe&&!cl&&w.jsxs("div",{className:`flexi-wave-bubble-container ${_?"flexi-first-step-fade-out":""}`,children:[w.jsx("img",{src:Gp,alt:"Flexi Telescope",className:"flexi-wave-bottom-left flexi-telescope-fade-in"}),w.jsx("div",{className:`speech-bubble ${_?"flexi-first-step-fade-out":"speech-bubble-fade-in"}`,children:"Break down each number into prime factors, then find the highest power of each."})]}),cl&&w.jsxs("div",{className:`flexi-wave-bubble-container ${ne?"flexi-first-step-fade-out":""}`,children:[w.jsx("img",{src:Cp,alt:"Flexi Point",className:"flexi-wave-bottom-left flexi-telescope-fade-in"}),w.jsx("div",{className:`speech-bubble ${ne?"flexi-first-step-fade-out":"speech-bubble-fade-in"}`,children:"Multiply the highest powers together to find the LCM!"})]}),Ze&&w.jsxs("div",{className:`flexi-wave-bubble-container ${pt?"flexi-first-step-fade-out":""}`,children:[w.jsx("img",{src:Qp,alt:"Flexi Thumbs Up",className:"flexi-wave-bottom-left flexi-telescope-fade-in"}),w.jsx("div",{className:`speech-bubble ${pt?"flexi-first-step-fade-out":"speech-bubble-fade-in"}`,children:"Now you know how to find the LCM using prime factorization!"})]})]})]})})})]})]})};function Vp(){return w.jsx("div",{className:"App",children:w.jsx(Zp,{})})}jp.createRoot(document.getElementById("root")).render(w.jsx(k.StrictMode,{children:w.jsx(Vp,{})}));
