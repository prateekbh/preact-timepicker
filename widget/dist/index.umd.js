!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.widget=t()}(this,function(){var e={},t=[],n=[];function o(o,r){var i,a,l,s,p=n;for(s=arguments.length;s-- >2;)t.push(arguments[s]);for(r&&null!=r.children&&(t.length||t.push(r.children),delete r.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(s=a.length;s--;)t.push(a[s]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof o)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?p[p.length-1]+=a:p===n?p=[a]:p.push(a),i=l;var c=new function(){};return c.nodeName=o,c.children=p,c.attributes=null==r?void 0:r,c.key=null==r?void 0:r.key,void 0!==e.vnode&&e.vnode(c),c}function r(e,t){for(var n in t)e[n]=t[n];return e}var i="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,a=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,l=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==l.push(t)&&(e.debounceRendering||i)(p)}function p(){var e,t=l;for(l=[];e=t.pop();)e._dirty&&M(e)}function c(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===a.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,_,l):e.removeEventListener(t,_,l),(e._listeners||(e._listeners={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var s=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function _(t){return this._listeners[t.type](e.event&&e.event(t)||t)}var v=[],h=0,m=!1,y=!1;function b(){for(var t;t=v.pop();)e.afterMount&&e.afterMount(t),t.componentDidMount&&t.componentDidMount()}function g(e,t,n,o,r){var i=e,a=m;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0))),i.__preactattr_=!0,i;var l,s,p=t.nodeName;if("function"==typeof p)return function(e,t,n,o){var r=e&&e._component,i=r,a=e,l=r&&e._componentConstructor===t.nodeName,s=l,p=u(t);for(;r&&!s&&(r=r._parentComponent);)s=r.constructor===t.nodeName;r&&s&&(!o||r._component)?(S(r,p,3,n,o),e=r.base):(i&&!l&&(U(i),e=a=null),r=w(t.nodeName,p,n),e&&!r.nextBase&&(r.nextBase=e,a=null),S(r,p,1,n,o),e=r.base,a&&e!==a&&(a._component=null,x(a,!1)));return e}(e,t,n,o);if(m="svg"===p||"foreignObject"!==p&&m,p=String(p),(!e||!c(e,p))&&(l=p,(s=m?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=s,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),x(e,!0)}var _=i.firstChild,v=i.__preactattr_,h=t.children;if(null==v){v=i.__preactattr_={};for(var b=i.attributes,C=b.length;C--;)v[b[C].name]=b[C].value}return!y&&h&&1===h.length&&"string"==typeof h[0]&&null!=_&&void 0!==_.splitText&&null==_.nextSibling?_.nodeValue!=h[0]&&(_.nodeValue=h[0]):(h&&h.length||null!=_)&&function(e,t,n,o,r){var i,a,l,s,p,u=e.childNodes,d=[],_={},v=0,h=0,m=u.length,y=0,b=t?t.length:0;if(0!==m)for(var C=0;C<m;C++){var N=u[C],w=N.__preactattr_,k=b&&w?N._component?N._component.__key:w.key:null;null!=k?(v++,_[k]=N):(w||(void 0!==N.splitText?!r||N.nodeValue.trim():r))&&(d[y++]=N)}if(0!==b)for(var C=0;C<b;C++){p=null;var k=(s=t[C]).key;if(null!=k)v&&void 0!==_[k]&&(p=_[k],_[k]=void 0,v--);else if(!p&&h<y)for(i=h;i<y;i++)if(void 0!==d[i]&&(S=a=d[i],U=r,"string"==typeof(M=s)||"number"==typeof M?void 0!==S.splitText:"string"==typeof M.nodeName?!S._componentConstructor&&c(S,M.nodeName):U||S._componentConstructor===M.nodeName)){p=a,d[i]=void 0,i===y-1&&y--,i===h&&h++;break}p=g(p,s,n,o),l=u[C],p&&p!==e&&p!==l&&(null==l?e.appendChild(p):p===l.nextSibling?f(l):e.insertBefore(p,l))}var S,M,U;if(v)for(var C in _)void 0!==_[C]&&x(_[C],!1);for(;h<=y;)void 0!==(p=d[y--])&&x(p,!1)}(i,h,n,o,y||null!=v.dangerouslySetInnerHTML),function(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||d(e,o,n[o],n[o]=void 0,m);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||d(e,o,n[o],n[o]=t[o],m)}(i,t.attributes,v),m=a,i}function x(e,t){var n=e._component;n?U(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||f(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling;x(e,!0),e=t}}var N={};function w(e,t,n){var o,r=N[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),B.call(o,t,n)):((o=new B(t,n)).constructor=e,o.render=k),r)for(var i=r.length;i--;)if(r[i].constructor===e){o.nextBase=r[i].nextBase,r.splice(i,1);break}return o}function k(e,t,n){return this.constructor(e,n)}function S(t,n,o,r,i){t._disable||(t._disable=!0,(t.__ref=n.ref)&&delete n.ref,(t.__key=n.key)&&delete n.key,!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),r&&r!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=r),t.prevProps||(t.prevProps=t.props),t.props=n,t._disable=!1,0!==o&&(1!==o&&!1===e.syncComponentUpdates&&t.base?s(t):M(t,1,i)),t.__ref&&t.__ref(t))}function M(t,n,o,i){if(!t._disable){var a,l,s,p=t.props,c=t.state,f=t.context,d=t.prevProps||p,_=t.prevState||c,C=t.prevContext||f,N=t.base,k=t.nextBase,B=N||k,L=t._component,P=!1;if(N&&(t.props=d,t.state=_,t.context=C,2!==n&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(p,c,f)?P=!0:t.componentWillUpdate&&t.componentWillUpdate(p,c,f),t.props=p,t.state=c,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!P){a=t.render(p,c,f),t.getChildContext&&(f=r(r({},f),t.getChildContext()));var T,R,W=a&&a.nodeName;if("function"==typeof W){var V=u(a);(l=L)&&l.constructor===W&&V.key==l.__key?S(l,V,1,f,!1):(T=l,t._component=l=w(W,V,f),l.nextBase=l.nextBase||k,l._parentComponent=t,S(l,V,0,f,!1),M(l,1,o,!0)),R=l.base}else s=B,(T=L)&&(s=t._component=null),(B||1===n)&&(s&&(s._component=null),R=function(e,t,n,o,r,i){h++||(m=null!=r&&void 0!==r.ownerSVGElement,y=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--h||(y=!1,i||b()),a}(s,a,f,o||!N,B&&B.parentNode,!0));if(B&&R!==B&&l!==L){var A=B.parentNode;A&&R!==A&&(A.replaceChild(R,B),T||(B._component=null,x(B,!1)))}if(T&&U(T),t.base=R,R&&!i){for(var E=t,j=t;j=j._parentComponent;)(E=j).base=R;R._component=E,R._componentConstructor=E.constructor}}if(!N||o?v.unshift(t):P||(t.componentDidUpdate&&t.componentDidUpdate(d,_,C),e.afterUpdate&&e.afterUpdate(t)),null!=t._renderCallbacks)for(;t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);h||i||b()}}function U(t){e.beforeUnmount&&e.beforeUnmount(t);var n=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?U(o):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),t.nextBase=n,f(n),function(e){var t=e.constructor.name;(N[t]||(N[t]=[])).push(e)}(t),C(n)),t.__ref&&t.__ref(null)}function B(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}return r(B.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),M(this,2)},render:function(){}}),function(e){function t(){e.call(this),this.angles_=[];for(var t=0;t<360;t+=30)this.angles_.push(t)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.toRadians_=function(e){return e*(Math.PI/180)},t.prototype.render=function(e){var t=this;return o("div",null,o("svg",{class:"dial minues",width:"400",height:"400",viewBox:"0 0 400 400"},o("style",null,":root{\n              fill: transparent;\n              stroke: #000\n            }\n            text {\n              fill: #000;\n              font-family: helvetica;\n            }\n            .hours{\n              display: none;\n            }"),o("circle",{cx:"200",cy:"200",r:"190"}),o("g",{class:"hours"},this.angles_.map(function(e,n){return o("text",{x:160*Math.cos(t.toRadians_(e))+200,y:160*Math.sin(t.toRadians_(e))+200,class:"digit","text-anchor":"middle"},(n+3)%12||12)})),o("g",{class:"minutes"},this.angles_.map(function(e,n){return o("text",{x:160*Math.cos(t.toRadians_(e))+200,y:160*Math.sin(t.toRadians_(e))+200,class:"digit","text-anchor":"middle"},5*((n+3)%12||12))}))))},t}(B)});
//# sourceMappingURL=index.umd.js.map
