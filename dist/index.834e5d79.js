var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,v=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},b={},_=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
b=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
_("object"==typeof self&&self)||_("object"==typeof v&&v)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||b||Function("return this")();var w={},k={};// Detect IE8's incomplete defineProperty implementation
w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;E=S?$.bind($):function(){return $.apply($,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;n=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var L={};L=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},P={},x={},T=Function.prototype,I=T.call,F=S&&T.bind.bind(I,I),q={},H=(x=S?F:function(e){return function(){return I.apply(e,arguments)}})({}.toString),A=x("".slice);q=function(e){return A(H(e),8,-1)};var C=Object,N=x("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
P=k(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===q(e)?N(e,""):C(e)}:C;var R={},D={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
D=function(e){return null==e};var W=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
R=function(e){if(D(e))throw new W("Can't call method on "+e);return e},M=function(e){return P(R(e))};var G={},U={},z={},B={},Y={},J="object"==typeof document&&document.all,Q=(Y={all:J,IS_HTMLDDA:void 0===J&&void 0!==J}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
B=Y.IS_HTMLDDA?function(e){return"function"==typeof e||e===Q}:function(e){return"function"==typeof e};var V=Y.all;z=Y.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:B(e)||e===V}:function(e){return"object"==typeof e?null!==e:B(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=b[e],B(r)?r:void 0):b[e]&&b[e][t]};var Z={};Z=x({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=b.process,eo=b.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=es.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&en&&(!(i=en.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=en.match(/Chrome\/(\d+)/))&&(o=+i[1]),er=o;var ec=b.String;ee=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(et=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ec(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return B(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},ef=String;ep=function(e){try{return ef(e)}catch(e){return"Object"}};var eh=TypeError;// `Assert: IsCallable(argument) is true`
ed=function(e){if(B(e))return e;throw new eh(ep(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
el=function(e,t){var r=e[t];return D(r)?void 0:ed(r)};var eg={},ev=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
eg=function(e,t){var r,n;if("string"===t&&B(r=e.toString)&&!z(n=E(r,e))||B(r=e.valueOf)&&!z(n=E(r,e))||"string"!==t&&B(r=e.toString)&&!z(n=E(r,e)))return n;throw new ev("Can't convert object to primitive value")};var ey={},em={};em=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(b,e,{value:t,configurable:!0,writable:!0})}catch(r){b[e]=t}return t};var ek="__core-js_shared__";eb=b[ek]||e_(ek,{}),(ey=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.2",mode:em?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},e$=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eS=function(e){return e$(R(e))};var ej=x({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eO={},eL=0,eM=Math.random(),eP=x(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eL+eM,36)};var ex=b.Symbol,eT=ey("wks"),eI=ee?ex.for||ex:ex&&ex.withoutSetter||eO,eF=TypeError,eq=(eE(eT,e="toPrimitive")||(eT[e]=et&&eE(ex,e)?ex[e]:eI("Symbol."+e)),eT[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
U=function(e,t){if(!z(e)||K(e))return e;var r,n=el(e,eq);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!z(r)||K(r))return r;throw new eF("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
G=function(e){var t=U(e,"string");return K(t)?t:t+""};var eH={},eA={},eC=b.document,eN=z(eC)&&z(eC.createElement);eA=function(e){return eN?eC.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eH=!w&&!k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eA("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eR=Object.getOwnPropertyDescriptor;r=w?eR:function(e,t){if(e=M(e),t=G(t),eH)try{return eR(e,t)}catch(e){}if(eE(e,t))return L(!E(n,e,t),e[t])};var eD={},eW={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eW=w&&k(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eG={},eU=String,ez=TypeError;// `Assert: Type(argument) is Object`
eG=function(e){if(z(e))return e;throw new ez(eU(e)+" is not an object")};var eB=TypeError,eY=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";a=w?eW?function(e,t,r){if(eG(e),t=G(t),eG(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eG(e),t=G(t),eG(r),eH)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eD=w?function(e,t,r){return a(e,t,L(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e9=eE(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e2={},e4=x(Function.toString);B(eb.inspectSource)||(eb.inspectSource=function(e){return e4(e)}),e2=eb.inspectSource;var e3={},e7={},e5=b.WeakMap;e7=B(e5)&&/native code/.test(String(e5));var e6={},e8=ey("keys");e6=function(e){return e8[e]||(e8[e]=eO(e))};var te={};te={};var tt="Object already initialized",tr=b.TypeError,tn=b.WeakMap;if(e7||eb.state){var ti=eb.state||(eb.state=new tn);/* eslint-disable no-self-assign -- prototype methods protection */ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,/* eslint-enable no-self-assign -- prototype methods protection */s=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e6("state");te[to]=!0,s=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,eD(e,to,t),t},c=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ta=(e3={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!z(t)||(r=c(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e3.get,tc=String,tu=Object.defineProperty,tl=x("".slice),td=x("".replace),tp=x([].join),tf=w&&!k(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tg=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e9&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tg(function(){return B(this)&&ts(this).source||e2(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(B(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tv={},ty={},tm={},tb={},t_={},tw={},tk=Math.ceil,tE=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t_=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tw(t)};var tS=Math.max,t$=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tb=function(e,t){var r=t_(e);return r<0?tS(r+t,0):t$(r,t)};var tj={},tO={},tL=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tO=function(e){return e>0?tL(t_(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tj=function(e){return tO(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tM=function(e){return function(t,r,n){var i,o=M(t),a=tj(o),s=tb(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tP={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tM(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tM(!1)}.indexOf,tx=x([].push);tm=function(e,t){var r,n=M(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tx(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eE(n,r=t[i++])&&(~tP(o,r)||tx(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tT)},d=Object.getOwnPropertySymbols;var tI=x([].concat);// all object keys, includes non-enumerable and symbols
ty=X("Reflect","ownKeys")||function(e){var t=l(eG(e));return d?tI(t,d(e)):t},tv=function(e,t,n){for(var i=ty(t),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,r(t,s))}};var tF={},tq=/#|\.prototype\./,tH=function(e,t){var r=tC[tA(e)];return r===tR||r!==tN&&(B(t)?k(t):!!t)},tA=tH.normalize=function(e){return String(e).replace(tq,".").toLowerCase()},tC=tH.data={},tN=tH.NATIVE="N",tR=tH.POLYFILL="P";tF=tH,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?b:l?b[c]||e_(c,{}):(b[c]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tF(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tv(a,o)}(e.sham||o&&o.sham)&&eD(a,"sham",!0),eX(n,i,a,e)}};var tD={},tW={},tG=Function.prototype,tU=tG.apply,tz=tG.call;// eslint-disable-next-line es/no-reflect -- safe
tW="object"==typeof Reflect&&Reflect.apply||(S?tz.bind(tU):function(){return tz.apply(tU,arguments)});var tB={},tY={},tJ=(tY=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===q(e))return x(e)})(tY.bind);// optional / simple context binding
tB=function(e,t){return ed(e),void 0===t?e:S?tJ(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=X("document","documentElement");var tV={};tV=x([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};// eslint-disable-next-line redos/no-vulnerable -- safe
tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t0={};t0="process"===q(b.process);var t1=b.setImmediate,t9=b.clearImmediate,t2=b.process,t4=b.Dispatch,t3=b.Function,t7=b.MessageChannel,t5=b.String,t6=0,t8={},re="onreadystatechange";k(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=b.location});var rt=function(e){if(eE(t8,e)){var t=t8[e];delete t8[e],t()}},rr=function(e){return function(){rt(e)}},rn=function(e){rt(e.data)},ri=function(e){// old engines have not location.origin
b.postMessage(t5(e),p.protocol+"//"+p.host)};t1&&t9||(t1=function(e){tK(arguments.length,1);var t=B(e)?e:t3(e),r=tV(arguments,1);return t8[++t6]=function(){tW(t,void 0,r)},f(t6),t6},t9=function(e){delete t8[e]},t0?f=function(e){t2.nextTick(rr(e))}:t4&&t4.now?f=function(e){t4.now(rr(e))}:t7&&!tZ?(g=(h=new t7).port2,h.port1.onmessage=rn,f=tB(g.postMessage,g)):b.addEventListener&&B(b.postMessage)&&!b.importScripts&&p&&"file:"!==p.protocol&&!k(ri)?(f=ri,b.addEventListener("message",rn,!1)):f=re in eA("script")?function(e){tQ.appendChild(eA("script"))[re]=function(){tQ.removeChild(this),rt(e)}}:function(e){setTimeout(rr(e),0)});var ro=(tD={set:t1,clear:t9}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
m({global:!0,bind:!0,enumerable:!0,forced:b.clearImmediate!==ro},{clearImmediate:ro});var ra=tD.set,rs={},rc={};/* global Bun -- Deno case */rc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var ru=b.Function,rl=/MSIE .\./.test(en)||rc&&((t=b.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rs=function(e,t){var r=t?2:1;return rl?function(n,i/* , ...arguments */){var o=tK(arguments.length,1)>r,a=B(n)?n:ru(n),s=o?tV(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rd=b.setImmediate?rs(ra,!1):ra;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
m({global:!0,bind:!0,enumerable:!0,forced:b.setImmediate!==rd},{setImmediate:rd});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new O(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=m.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function L(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),g}},e}({});try{regeneratorRuntime=rp}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rp:Function("r","regeneratorRuntime = r")(rp)}const rf="https://forkify-api.herokuapp.com/api/v2/recipes",rh="f4bfe8ac-064f-4a64-9ac2-01929109226d";async function rg(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise((e,t)=>{setTimeout(function(){t("Request took too long to response, timout.")},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} ${i.status}`);return i}catch(e){throw e}}const rv={recipe:{},search:{results:[],query:"",page:1,resultsPerPage:10},bookmarks:[]};function ry(e){let t=e.data.recipe;return{id:t.id,image:t.image_url,ingredients:t.ingredients,sourceUrl:t.source_url,servings:t.servings,title:t.title,cookingTime:t.cooking_time,publisher:t.publisher,...t.key&&{key:t.key}}}async function rm(e){try{let t=await rg(`${rf}/${e}?key=${rh}`);rv.recipe=ry(t),rv.bookmarks.some(t=>t.id===e)&&(rv.recipe.bookmarked=!0)}catch(e){throw e}}async function rb(e){rv.search.query=e;try{let t=await rg(`${rf}?search=${e}&key=${rh}`);rv.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),rv.search.page=1}catch(e){throw e}}function r_(e=rv.search.page){return rv.search.page=e,rv.search.results.slice((e-1)*10,10*e)}function rw(e){rv.bookmarks.push(e),e.id===rv.recipe.id&&(rv.recipe.bookmarked=!0),rk()}function rk(){localStorage.setItem("bookmarks",JSON.stringify(rv.bookmarks))}async function rE(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Incorrect ingredient format! Please use quantity, unit, description format.");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={image_url:e.image,source_url:e.sourceUrl,servings:+e.servings,title:e.title,cooking_time:+e.cookingTime,publisher:e.publisher,ingredients:t},n=await rg(`${rf}?key=${rh}`,r);rv.recipe=ry(n),rw(rv.recipe)}catch(e){throw e}}!function(){let e=localStorage.getItem("bookmarks");e&&(rv.bookmarks=JSON.parse(e))}();var rS={};//FRACTY REDUCES THE FRACTION.
function r$(e,t,r,n,i){var o,a,s;let c=[2,3,5];//If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;//Initialize counter over the prime number array for the while loop.
for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return o=d,a=l,s=r,1===o&&1===a?(s=`${n}${(parseInt(s)+1).toString()}`,`${s}`):0===a?`${n}${s}`:"0"==s?`${n}${a}/${o}`:`${n}${s} ${a}/${o}`//If there's an integer and a fraction return both.
}// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
rS=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),o=i[0];if("0"==r&&"0"!==o)return o;if("0"==r&&"0"==o)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==o)return`${o} 99/100`;if("99"==r&&"0"==o)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return o;let a=r.split("").reverse().join(""),s=a.match(/^(\d+)\1{1,2}/);//Reverse the string to look for patterns.
if(!s||!(r.length>2))return(//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);//Numerator begins as decimal input converted into an integer.
return r$(n,i,t,r,!1);//Reduce the numerator and denominator.
}(r,o,t));//Begin calculating the numerator and denominator for decimals that don't have a pattern.
{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function(e,t,r,n,i){let o=e.length-r.length>=1?e.length-r.length:1,a=parseFloat(`0.${e}`),s=Math.pow(10,t.length);//Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
return r$(Math.round((a*s-a)*Math.pow(10,o)),(s-1)*Math.pow(10,o),n,i,!0);//Further reduce the numerator and denominator.
}(r,n,e,o,t);//Begin calculating the numerator and denominator for decimals that have a pattern.
}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rO{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
        <div class="spinner">
            <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-loader"></use>
            </svg>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
        <div class="error">
            <div>
                <svg><use href="src/img/icons.svg#icon-alert-triangle"></use></svg>
            </div>
            <p>${e}</p>
        </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            <div>
              <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>
            `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}class rL extends rO{_parentElement=document.querySelector(".recipe");_errorMessage="The recipe you mentioned was not found. Please try again!";addHandler(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let n=Number(r.dataset.update);e(n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update="${this._data.servings-1}">
              <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update="${this._data.servings+1}">
              <svg>
                <use href="${/*@__PURE__*/y(rj)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${/*@__PURE__*/y(rj)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateIngredientMarkup).join("")}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
        `}_generateIngredientMarkup(e){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${/*@__PURE__*/y(rj)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity?/*@__PURE__*/y(rS)(e.quantity):""}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
            </div>
        </li>
        `}}var rM=new rL;class rP{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#t(),e}#t(){this.#e.querySelector(".search__field").value=""}addHandler(e){this.#e.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rx=new rP,rT=new class extends rO{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
                <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${/*@__PURE__*/y(rj)}#icon-user"></use>
                </svg>
                </div>
            </div>
            </a>
        </li>
        `}};class rI extends rO{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rF=new rI;class rq extends rO{_parentElement=document.querySelector(".pagination");_errorMessage="No recipes found for your query! Please try again.";_currentPage;addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline"),n=+r?.dataset.page;e(n)})}_generateMarkup(){this._currentPage=this._data.page;let e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1 and there are other
1===this._currentPage&&e>1?`${this._generateCommonMarkup("next")}`:e===this._currentPage&&e>1?`${this._generateCommonMarkup("prev")}`:this._currentPage<e?`${this._generateCommonMarkup("next")}${this._generateCommonMarkup("prev")}`:" ")}_generateCommonMarkup(e){return`
        <button class="btn--inline pagination__btn--${e}" data-page="${"next"===e?this._currentPage+1:this._currentPage-1}">
            ${"next"===e?`<span>Page ${this._currentPage+1}</span>
            <svg class="search__icon">
                <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
            </svg>`:`<svg class="search__icon">
                <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._currentPage-1}</span>`}
        </button>
        `}}var rH=new rq;class rA extends rO{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rC=new rA;class rN extends rO{_parentElement=document.querySelector(".upload");_message="Your recipe was successfuly uploaded. ;)";_overlay=document.querySelector(".overlay");_addRecipeWindow=document.querySelector(".add-recipe-window");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");constructor(){super(),this._showAddRecipeHandler(),this._hideAddRecipeHandler()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._addRecipeWindow.classList.toggle("hidden")}_showAddRecipeHandler(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_hideAddRecipeHandler(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addUploadRecipeHandler(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();// new FormData(form) is a modern way of getting all the values from a Form after submit.
let r=[...new FormData(this)],n=Object.fromEntries(r);// Returns a 2-D array => [[inputName, inputValue], [inputName, inputValue], ...];
e(n)})}_generateMarkup(){}}var rR=new rN;async function rD(){try{let e=window.location.hash.slice(1);if(!e)return;rM.renderSpinner(),// 1. Loading recipe
await rm(e),rF.update(r_()),rC.update(rv.bookmarks),rM.render(rv.recipe)}catch(e){console.log(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),rM.renderError()}}async function rW(){try{rF.renderSpinner();let e=rx.getQuery();if(!e)return;// Get search query from input
await rb(e),rF.render(r_()),rH.render(rv.search)}catch(e){rF.renderError()}}function rG(e){rF.render(r_(e)),rH.render(rv.search)}function rU(e){rv.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rv.recipe.servings}),rv.recipe.servings=e,rM.update(rv.recipe)}function rz(){rv.recipe.bookmarked?function(e){let t=rv.bookmarks.findIndex(t=>t.id===e);rv.bookmarks.splice(t,1),e===rv.recipe.id&&(rv.recipe.bookmarked=!1),rk()}(rv.recipe.id):rw(rv.recipe),rM.update(rv.recipe),rC.render(rv.bookmarks)}function rB(){rC.render(rv.bookmarks)}async function rY(e){try{rR.renderSpinner(),// Upload new recipe
await rE(e),rM.render(rv.recipe),rR.renderMessage(),rC.render(rv.bookmarks),// Change the ID in the URL bar
window.history.pushState(null,"",`#${rv.recipe.id}`),// Close modal window after 2.5 sec
setTimeout(()=>{rR.toggleWindow()},2500)}catch(e){console.error(`${e.message} \u{1F922}\u{1F92E}`),rR.renderError(`${e.message}`)}}!function(){rC.addHandlerRender(rB),rM.addHandler(rD),rx.addHandler(rW),rH.addHandlerClick(rG.bind(this)),rM.addHandlerUpdateServings(rU.bind(this)),rM.addHandlerBookmark(rz),rR.addUploadRecipeHandler(rY)}();//# sourceMappingURL=index.834e5d79.js.map

//# sourceMappingURL=index.834e5d79.js.map
