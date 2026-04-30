import{t as e}from"./rolldown-runtime.J0UQHhhC.mjs";import{C as t,E as n,M as r,N as i,O as a,P as o,S as s,b as c,h as l,j as u,u as d}from"./react.BTIPUbRO.mjs";function f(){if(xe)return B;xe=1;var e=c,t=Symbol.for(`react.element`),n=Symbol.for(`react.fragment`),r=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,o){var s,c={},l=null,u=null;for(s in o!==void 0&&(l=``+o),n.key!==void 0&&(l=``+n.key),n.ref!==void 0&&(u=n.ref),n)r.call(n,s)&&!a.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)c[s]===void 0&&(c[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:u,props:c,_owner:i.current}}return B.Fragment=n,B.jsx=o,B.jsxs=o,B}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}function h(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function g(e){var t=document.createElement(`style`);return t.setAttribute(`data-emotion`,e.key),e.nonce!==void 0&&t.setAttribute(`nonce`,e.nonce),t.appendChild(document.createTextNode(``)),t.setAttribute(`data-s`,``),t}function _(e,t){return S(e,0)^45?(((t<<2^S(e,0))<<2^S(e,1))<<2^S(e,2))<<2^S(e,3):0}function v(e){return e.trim()}function y(e,t){return(e=t.exec(e))?e[0]:e}function b(e,t,n){return e.replace(t,n)}function x(e,t){return e.indexOf(t)}function S(e,t){return e.charCodeAt(t)|0}function C(e,t,n){return e.slice(t,n)}function w(e){return e.length}function T(e){return e.length}function E(e,t){return t.push(e),e}function D(e,t){return e.map(t).join(``)}function O(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:K,column:q,length:o,return:``}}function k(e,t){return Me(O(``,null,null,``,null,null,0),e,{length:-e.length},t)}function ee(){return Y}function te(){return Y=J>0?S(X,--J):0,q--,Y===10&&(q=1,K--),Y}function A(){return Y=J<Ne?S(X,J++):0,q++,Y===10&&(q=1,K++),Y}function j(){return S(X,J)}function M(){return J}function N(e,t){return C(X,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ne(e){return K=q=1,Ne=w(X=e),J=0,[]}function re(e){return X=``,e}function F(e){return v(N(J-1,oe(e===91?e+2:e===40?e+1:e)))}function ie(e){for(;(Y=j())&&Y<33;)A();return P(e)>2||P(Y)>3?``:` `}function ae(e,t){for(;--t&&A()&&!(Y<48||Y>102||Y>57&&Y<65||Y>70&&Y<97););return N(e,M()+(t<6&&j()==32&&A()==32))}function oe(e){for(;A();)switch(Y){case e:return J;case 34:case 39:e!==34&&e!==39&&oe(Y);break;case 40:e===41&&oe(e);break;case 92:A();break}return J}function se(e,t){for(;A()&&e+Y!==57&&!(e+Y===84&&j()===47););return`/*`+N(t,J-1)+`*`+G(e===47?e:A())}function ce(e){for(;!P(j());)A();return N(e,J)}function le(e){return re(I(``,null,null,null,[``],e=ne(e),0,[0],e))}function I(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,C=i,T=a,D=r,O=y;g;)switch(m=v,v=A()){case 40:if(m!=108&&S(O,d-1)==58){x(O+=b(F(v),`&`,`&\f`),`&\f`)!=-1&&(_=-1);break}case 34:case 39:case 91:O+=F(v);break;case 9:case 10:case 13:case 32:O+=ie(m);break;case 92:O+=ae(M()-1,7);continue;case 47:switch(j()){case 42:case 47:E(de(se(A(),M()),t,n),c);break;default:O+=`/`}break;case 123*h:s[l++]=w(O)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:p>0&&w(O)-d&&E(p>32?fe(O+`;`,r,n,d-1):fe(b(O,` `,``)+`;`,r,n,d-2),c);break;case 59:O+=`;`;default:if(E(D=ue(O,t,n,l,u,i,s,y,C=[],T=[],d),a),v===123)if(u===0)I(O,t,D,D,C,a,d,s,T);else switch(f===99&&S(O,3)===110?100:f){case 100:case 109:case 115:I(e,D,D,r&&E(ue(e,D,D,0,0,i,s,y,i,C=[],d),T),i,T,d,s,r?C:T);break;default:I(O,D,D,D,[``],T,0,s,T)}}l=u=p=0,h=_=1,y=O=``,d=o;break;case 58:d=1+w(O),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&te()==125)continue}switch(O+=G(v),v*h){case 38:_=u>0?1:(O+=`\f`,-1);break;case 44:s[l++]=(w(O)-1)*_,_=1;break;case 64:j()===45&&(O+=F(A())),f=j(),u=d=w(y=O+=ce(M())),v++;break;case 45:m===45&&w(O)==2&&(h=0)}}return a}function ue(e,t,n,r,i,a,o,s,c,l,u){for(var d=i-1,f=i===0?a:[``],p=T(f),m=0,h=0,g=0;m<r;++m)for(var _=0,y=C(e,d+1,d=je(h=o[m])),x=e;_<p;++_)(x=v(h>0?f[_]+` `+y:b(y,/&\f/g,f[_])))&&(c[g++]=x);return O(e,t,n,i===0?De:s,c,l,u)}function de(e,t,n){return O(e,t,n,Ee,G(ee()),C(e,2,-2),0)}function fe(e,t,n,r){return O(e,t,n,Oe,C(e,0,r),C(e,r+1,-1),r)}function L(e,t){for(var n=``,r=T(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||``;return n}function pe(e,t,n,r){switch(e.type){case ke:case Oe:return e.return=e.return||e.value;case Ee:return``;case Ae:return e.return=e.value+`{`+L(e.children,r)+`}`;case De:e.value=e.props.join(`,`)}return w(n=L(e.children,r))?e.return=e.value+`{`+n+`}`:``}function me(e){var t=T(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function he(e){return function(t){t.root||(t=t.return)&&e(t)}}function ge(e,t){switch(_(e,t)){case 5103:return W+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+U+e+H+e+e;case 6828:case 4268:return W+e+H+e+e;case 6165:return W+e+H+`flex-`+e+e;case 5187:return W+e+b(e,/(\w+).+(:[^]+)/,W+`box-$1$2`+H+`flex-$1$2`)+e;case 5443:return W+e+H+`flex-item-`+b(e,/flex-|-self/,``)+e;case 4675:return W+e+H+`flex-line-pack`+b(e,/align-content|flex-|-self/,``)+e;case 5548:return W+e+H+b(e,`shrink`,`negative`)+e;case 5292:return W+e+H+b(e,`basis`,`preferred-size`)+e;case 6060:return W+`box-`+b(e,`-grow`,``)+W+e+H+b(e,`grow`,`positive`)+e;case 4554:return W+b(e,/([^-])(transform)/g,`$1`+W+`$2`)+e;case 6187:return b(b(b(e,/(zoom-|grab)/,W+`$1`),/(image-set)/,W+`$1`),e,``)+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,W+`box-pack:$3`+H+`flex-pack:$3`),/s.+-b[^;]+/,`justify`)+W+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,W+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(e)-1-t>6)switch(S(e,t+1)){case 109:if(S(e,t+4)!==45)break;case 102:return b(e,/(.+:)(.+)-([^]+)/,`$1`+W+`$2-$3$1`+U+(S(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~x(e,`stretch`)?ge(b(e,`stretch`,`fill-available`),t)+e:e}break;case 4949:if(S(e,t+1)!==115)break;case 6444:switch(S(e,w(e)-3-(~x(e,`!important`)&&10))){case 107:return b(e,`:`,`:`+W)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,`$1`+W+(S(e,14)===45?`inline-`:``)+`box$3$1`+W+`$2$3$1`+H+`$2box$3`)+e}break;case 5936:switch(S(e,t+11)){case 114:return W+e+H+b(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return W+e+H+b(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return W+e+H+b(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}return W+e+H+e+e}return e}function _e(e,t,n){var r=``;return n.split(` `).forEach(function(n){e[n]===void 0?r+=n+` `:t.push(e[n]+`;`)}),r}function ve(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}function R(e,t,n){if(n==null)return``;if(n.__emotion_styles!==void 0)return n;switch(typeof n){case`boolean`:return``;case`object`:if(n.anim===1)return Z={name:n.name,styles:n.styles,next:Z},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)Z={name:r.name,styles:r.styles,next:Z},r=r.next;return n.styles+`;`}return ye(e,t,n);case`function`:if(e!==void 0){var i=Z,a=n(e);return Z=i,R(e,t,a)}break;case`string`:break}if(t==null)return n;var o=t[n];return o===void 0?n:o}function ye(e,t,n){var r=``;if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=R(e,t,n[i])+`;`;else for(var a in n){var o=n[a];if(typeof o!=`object`)t!=null&&t[o]!==void 0?r+=a+`{`+t[o]+`}`:Xe(o)&&(r+=Ze(a)+`:`+Qe(a,o)+`;`);else if(Array.isArray(o)&&typeof o[0]==`string`&&(t==null||t[o[0]]===void 0))for(var s=0;s<o.length;s++)Xe(o[s])&&(r+=Ze(a)+`:`+Qe(a,o[s])+`;`);else{var c=R(e,t,o);switch(a){case`animation`:case`animationName`:r+=Ze(a)+`:`+c+`;`;break;default:r+=a+`{`+c+`}`}}}return r}var z,be,B,xe,V,Se,Ce,we,Te,H,U,W,Ee,De,Oe,ke,Ae,je,G,Me,K,q,Ne,J,Y,X,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,Z,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,Q,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,$,kt,At,jt=e((()=>{t(),z={},be={get exports(){return z},set exports(e){z=e}},B={},(function(e){e.exports=f()})(be),V=z.jsx,Se=z.jsxs,Ce=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,we=m(function(e){return Ce.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Te=function(){function e(e){var t=this;this._insertTag=function(e){var n=t.tags.length===0?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling;t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(g(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=h(t);try{n.insertRule(e,n.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},e}(),H=`-ms-`,U=`-moz-`,W=`-webkit-`,Ee=`comm`,De=`rule`,Oe=`decl`,ke=`@import`,Ae=`@keyframes`,je=Math.abs,G=String.fromCharCode,Me=Object.assign,K=1,q=1,Ne=0,J=0,Y=0,X=``,Pe=function(e,t,n){for(var r=0,i=0;r=i,i=j(),r===38&&i===12&&(t[n]=1),!P(i);)A();return N(e,J)},Fe=function(e,t){var n=-1,r=44;do switch(P(r)){case 0:r===38&&j()===12&&(t[n]=1),e[n]+=Pe(J-1,t,n);break;case 2:e[n]+=F(r);break;case 4:if(r===44){e[++n]=j()===58?`&\f`:``,t[n]=e[n].length;break}default:e[n]+=G(r)}while(r=A());return e},Ie=function(e,t){return re(Fe(ne(e),t))},Le=new WeakMap,Re=function(e){if(!(e.type!==`rule`||!e.parent||e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;n.type!==`rule`;)if(n=n.parent,!n)return;if(!(e.props.length===1&&t.charCodeAt(0)!==58&&!Le.get(n))&&!r){Le.set(e,!0);for(var i=[],a=Ie(t,i),o=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<o.length;l++,c++)e.props[c]=i[s]?a[s].replace(/&\f/g,o[l]):o[l]+` `+a[s]}}},ze=function(e){if(e.type===`decl`){var t=e.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(e.return=``,e.value=``)}},Be=function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Oe:e.return=ge(e.value,e.length);break;case Ae:return L([k(e,{value:b(e.value,`@`,`@`+W)})],r);case De:if(e.length)return D(e.props,function(t){switch(y(t,/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:return L([k(e,{props:[b(t,/:(read-\w+)/,`:`+U+`$1`)]})],r);case`::placeholder`:return L([k(e,{props:[b(t,/:(plac\w+)/,`:`+W+`input-$1`)]}),k(e,{props:[b(t,/:(plac\w+)/,`:`+U+`$1`)]}),k(e,{props:[b(t,/:(plac\w+)/,H+`input-$1`)]})],r)}return``})}},Ve=[Be],He=function(e){var t=e.key;if(t===`css`){var n=document.querySelectorAll(`style[data-emotion]:not([data-s])`);Array.prototype.forEach.call(n,function(e){e.getAttribute(`data-emotion`).indexOf(` `)!==-1&&(document.head.appendChild(e),e.setAttribute(`data-s`,``))})}var r=e.stylisPlugins||Ve,i={},a,o=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="`+t+` "]`),function(e){for(var t=e.getAttribute(`data-emotion`).split(` `),n=1;n<t.length;n++)i[t[n]]=!0;o.push(e)});var s,c=[Re,ze],l,u=[pe,he(function(e){l.insert(e)})],d=me(c.concat(r,u)),f=function(e){return L(le(e),d)};s=function(e,t,n,r){l=n,f(e?e+`{`+t.styles+`}`:t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new Te({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:s};return p.sheet.hydrate(o),p},Ue=!0,We=function(e,t,n){var r=e.key+`-`+t.name;(n===!1||Ue===!1)&&e.registered[r]===void 0&&(e.registered[r]=t.styles)},Ge=function(e,t,n){We(e,t,n);var r=e.key+`-`+t.name;if(e.inserted[t.name]===void 0){var i=t;do e.insert(t===i?`.`+r:``,i,e.sheet,!0),i=i.next;while(i!==void 0)}},Ke={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe=/[A-Z]|^ms/g,Je=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ye=function(e){return e.charCodeAt(1)===45},Xe=function(e){return e!=null&&typeof e!=`boolean`},Ze=m(function(e){return Ye(e)?e:e.replace(qe,`-$&`).toLowerCase()}),Qe=function(e,t){switch(e){case`animation`:case`animationName`:if(typeof t==`string`)return t.replace(Je,function(e,t,n){return Z={name:t,styles:n,next:Z},t})}return Ke[e]!==1&&!Ye(e)&&typeof t==`number`&&t!==0?t+`px`:t},$e=/label:\s*([^\s;\n{]+)\s*(;|$)/g,et=function(e,t,n){if(e.length===1&&typeof e[0]==`object`&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i=``;Z=void 0;var a=e[0];a==null||a.raw===void 0?(r=!1,i+=R(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=R(n,t,e[o]),r&&(i+=a[o]);$e.lastIndex=0;for(var s=``,c;(c=$e.exec(i))!==null;)s+=`-`+c[1];return{name:ve(i)+s,styles:i,next:Z}},tt=function(e){return e()},nt=s||tt,{}.hasOwnProperty,rt=o(typeof HTMLElement<`u`?He({key:`css`}):null),rt.Provider,it=function(e){return l(function(t,n){return e(t,a(rt),n)})},at=o({}),ot=we,st=function(e){return e!==`theme`},ct=function(e){return typeof e==`string`&&e.charCodeAt(0)>96?ot:st},lt=function(e,t,n){var r;if(t){var i=t.shouldForwardProp;r=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return typeof r!=`function`&&n&&(r=e.__emotion_forwardProp),r},ut=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return We(t,n,r),nt(function(){return Ge(t,n,r)}),null},dt=function e(t,n){var i=t.__emotion_real===t,o=i&&t.__emotion_base||t,s,c;n!==void 0&&(s=n.label,c=n.target);var l=lt(t,n,i),u=l||ct(o),f=!u(`as`);return function(){var m=arguments,h=i&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&h.push(`label:`+s+`;`),m[0]==null||m[0].raw===void 0)h.push.apply(h,m);else{h.push(m[0][0]);for(var g=m.length,_=1;_<g;_++)h.push(m[_],m[0][_])}var v=it(function(e,t,n){var i=f&&e.as||o,s=``,p=[],m=e;if(e.theme==null){for(var g in m={},e)m[g]=e[g];m.theme=a(at)}typeof e.className==`string`?s=_e(t.registered,p,e.className):e.className!=null&&(s=e.className+` `);var _=et(h.concat(p),t.registered,m);s+=t.key+`-`+_.name,c!==void 0&&(s+=` `+c);var v=f&&l===void 0?ct(i):u,y={};for(var b in e)f&&b===`as`||v(b)&&(y[b]=e[b]);return y.className=s,y.ref=n,d(r,null,d(ut,{cache:t,serialized:_,isStringTag:typeof i==`string`}),d(i,y))});return v.displayName=s===void 0?`Styled(`+(typeof o==`string`?o:o.displayName||o.name||`Component`)+`)`:s,v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=o,v.__emotion_styles=h,v.__emotion_forwardProp=l,Object.defineProperty(v,`toString`,{value:function(){return`.`+c}}),v.withComponent=function(t,r){return e(t,p({},n,r,{shouldForwardProp:lt(v,r,!0)})).apply(void 0,h)},v}},ft=`a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`),Q=dt.bind(),ft.forEach(function(e){Q[e]=Q(e)}),pt=e=>Se(mt,{children:[V(ht,{src:`https://assets.website-files.com/5beab1239ac88487c3a6608f/616b9cffac007b154cee8afc_Logo.webp`}),V(gt,{children:e.text})]}),mt=Q.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;

  width: 100%;
  height: 100%;

  border-radius: 18px;

  min-width: 600px;
  min-height: 400px;

  background: #f7f8fd;
`,ht=Q.img`
  width: 160px;
`,gt=Q.span`
  color: #061237;
  font-family: Inter, sans-serif;
  font-size: 18px;
  line-height: 36px;
`,_t=50,vt=(e=>(e[e.Left=0]=`Left`,e[e.Right=1]=`Right`,e))(vt||{}),yt=e=>{var t,r,i,a;if(!((t=e.left)!=null&&t.src)||!((r=e.right)!=null&&r.src)){let t=2;return((i=e.left)!=null&&i.src||(a=e.right)!=null&&a.src)&&t--,V(pt,{text:`Upload ${t} image${t>1?`s`:``} to continue`})}let o=n(null),s=n(null),c=n(null),l=n(null),d=n(null),f=n(null),p=e=>{o.current.style.clipPath=`inset(0px 0px 0px ${e}%)`,c.current.style.left=`${e}%`},m=e=>s.current.value=`${e}`,h=e=>{p(+e.target.value)};u(()=>{p(e.position)},[e.position]),u(()=>{g(),e.position!==_t&&(p(e.position),m(e.position))},[]);let g=()=>{let e=c.current?.firstChild;l.current&&e&&l.current.style.setProperty(`--thumb-size`,`${e.clientWidth}px`)},_=()=>{o.current.style.transition=`clip-path 0.3s`,c.current.style.transition=`left 0.3s`},v=()=>{o.current.style.transition=``,c.current.style.transition=``},y=e=>{switch(_(),e){case 0:p(0),m(0);break;case 1:p(100),m(100);break}setTimeout(v,300)};return Se(bt,{ref:l,borderRadius:e.radius,background:e.bg,children:[V(Et,{ref:d,hp:`left`,vp:e.label.position,x:e.label.x,y:e.label.y,onClick:()=>y(0),children:e.customLabel?e.leftLabel:V(Dt,{children:e.label.before})}),V(Et,{ref:f,hp:`right`,vp:e.label.position,x:e.label.x,y:e.label.y,onClick:()=>y(1),children:e.customLabel?e.rightLabel:V(Dt,{children:e.label.after})}),V(xt,{ref:o,children:V(St,{src:e.right.src,srcSet:e.right.srcSet,alt:e.right.alt})}),V(St,{src:e.left.src,srcSet:e.left.srcSet,alt:e.left.alt}),V(wt,{type:`range`,ref:s,min:`0`,max:`100`,onChange:h}),V(Ct,{ref:c,color:e.line.color,width:e.line.width,children:e.customHandle?e.handle:V(Tt,{})})]})},bt=Q.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${e=>e.borderRadius}px;
  background: ${e=>e.background};
`,xt=Q.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`,St=Q.img`
  vertical-align: bottom;
  object-fit: cover;
  height: 100%;
  width: 100%;
}`,Ct=Q.div`
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 2;

  left: 50%;
  bottom: 0;
  top: 0;

  transform: translateX(-50%);

  &:before {
    content: '';

    position: absolute;
    left: 50%;
    bottom: 0;
    top: 0;

    width: ${e=>e.width}px;
    background: ${e=>e.color};

    transform: translateX(-50%);
  }
`,wt=Q.input`
  bottom: 0;
  cursor: pointer;
  height: 100%;
  left: -1px;
  margin: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  touch-action: auto;
  width: calc(100% + 2px);
  z-index: 2;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: calc(var(--thumb-size) * 2);
    height: calc(var(--thumb-size) * 1.5);
  }
`,Tt=Q.div`
  flex-shrink: 0;
  position: relative;

  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 50%;

  &:before,
  &:after {
    content: '';

    position: absolute;
    top: 50%;

    border-left: 2px solid;
    border-top: 2px solid;

    height: 8px;
    width: 8px;

    transform-origin: 0 0;
  }

  &:before {
    left: 18px;
    transform: rotate(-45deg);
  }

  &:after {
    right: 8px;
    transform: rotate(135deg);
  }
`,Et=Q.div`
  position: absolute;
  z-index: 3;

  cursor: pointer;

  ${e=>`${e.vp}: ${e.y}px;`}
  ${e=>`${e.hp}: ${e.x}px;`}
`,Dt=Q.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 16px;
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 6px;

  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;
  color: #000000;
`,Ot=({loading:e,loaded:t})=>{let[n,r]=i(!0);return u(()=>r(!1),[]),n?e:t},$=e=>{var t,n;return!((t=e.left)!=null&&t.src)||!((n=e.right)!=null&&n.src)},kt={left:{type:`responsiveimage`,title:`Left Image`},right:{type:`responsiveimage`,title:`Right Image`,description:`[Flowbase](https://www.flowbase.co/) is the worlds largest component resource site. Explore endless components and templates to inspire your workflows and help you build better, faster.`},radius:{type:`number`,defaultValue:0,min:0,max:999,step:1,displayStepper:!0,hidden:$},bg:{type:`color`,title:`Background`,defaultValue:`#e4e6f1`},position:{type:`number`,defaultValue:50,description:`Starting position of the handle`,min:0,max:100,step:1,displayStepper:!0,hidden:$},customHandle:{type:`boolean`,defaultValue:!1,hidden:$},handle:{type:`componentinstance`,title:`Handle`,hidden:e=>$(e)||!e.customHandle},label:{type:`object`,hidden:$,controls:{position:{type:`enum`,defaultValue:`row`,options:[`top`,`bottom`],optionTitles:[`Top`,`Bottom`]},x:{type:`number`,defaultValue:24,min:0,max:999,step:1,displayStepper:!0},y:{type:`number`,defaultValue:24,min:0,max:999,step:1,displayStepper:!0},before:{type:`string`,defaultValue:`Before`},after:{type:`string`,defaultValue:`After`}}},customLabel:{type:`boolean`,defaultValue:!1,hidden:$},leftLabel:{type:`componentinstance`,title:`Left Label`,hidden:e=>$(e)||!e.customLabel},rightLabel:{type:`componentinstance`,title:`Left Label`,hidden:e=>$(e)||!e.customLabel},line:{type:`object`,hidden:$,controls:{color:{type:`color`,defaultValue:`rgba(255, 255, 255, 0.4)`},width:{type:`number`,defaultValue:1,min:0,max:99,step:1,displayStepper:!0}}}},At=e=>V(Ot,{loading:V(`div`,{style:{width:`100%`,height:`100%`,borderRadius:`${e.radius}px`,background:e.bg}}),loaded:V(yt,{...e})})}));export{At as n,kt as r,jt as t};
//# sourceMappingURL=before-after-framer.BXkQ_PvR.mjs.map