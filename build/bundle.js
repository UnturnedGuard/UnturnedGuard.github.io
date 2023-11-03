var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l,i;function d(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function c(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function u(e,t,n){e.$$.on_destroy.push(c(t,n))}function p(e,t,n,r){if(e){const a=g(e,t,n,r);return e[0](a)}}function g(e,n,r,a){return e[1]&&a?t(r.ctx.slice(),e[1](a(n))):r.ctx}function m(e,t,n,r){if(e[2]&&r){const a=e[2](r(n));if(void 0===t.dirty)return a;if("object"==typeof a){const e=[],n=Math.max(t.dirty.length,a.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|a[r];return e}return t.dirty|a}return t.dirty}function f(e,t,n,r,a,s){if(a){const o=g(t,n,r,s);e.p(o,a)}}function b(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function h(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function x(e,t){e.appendChild(t)}function y(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function k(){return w(" ")}function A(){return w("")}function S(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.data!==t&&(e.data=t)}function F(e,t){return new e(t)}function M(e){i=e}function E(){if(!i)throw new Error("Function called outside component initialization");return i}function R(e,t){return E().$$.context.set(e,t),t}function j(e){return E().$$.context.get(e)}const D=[],L=[];let G=[];const B=[],C=Promise.resolve();let U=!1;function H(e){G.push(e)}const I=new Set;let O=0;function T(){if(0!==O)return;const e=i;do{try{for(;O<D.length;){const e=D[O];O++,M(e),z(e.$$)}}catch(e){throw D.length=0,O=0,e}for(M(null),D.length=0,O=0;L.length;)L.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];I.has(t)||(I.add(t),t())}G.length=0}while(D.length);for(;B.length;)B.pop()();U=!1,I.clear(),M(e)}function z(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const V=new Set;let K;function N(){K={r:0,c:[],p:K}}function W(){K.r||a(K.c),K=K.p}function q(e,t){e&&e.i&&(V.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),K.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function J(e){return"object"==typeof e&&null!==e?e:{}}function Q(e){e&&e.c()}function X(e,t,r,o){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,r),o||H((()=>{const t=e.$$.on_mount.map(n).filter(s);e.$$.on_destroy?e.$$.on_destroy.push(...t):a(t),e.$$.on_mount=[]})),i.forEach(H)}function Z(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];G.forEach((r=>-1===e.indexOf(r)?t.push(r):n.push(r))),n.forEach((e=>e())),G=t}(n.after_update),a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){-1===e.$$.dirty[0]&&(D.push(e),U||(U=!0,C.then(T)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(t,n,s,o,l,d,c,u=[-1]){const p=i;M(t);const g=t.$$={fragment:null,ctx:[],props:d,update:e,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||p.$$.root};c&&c(g.root);let m=!1;if(g.ctx=s?s(t,n.props||{},((e,n,...r)=>{const a=r.length?r[0]:n;return g.ctx&&l(g.ctx[e],g.ctx[e]=a)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](a),m&&ee(t,e)),n})):[],g.update(),m=!0,a(g.before_update),g.fragment=!!o&&o(g.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);g.fragment&&g.fragment.l(e),e.forEach(v)}else g.fragment&&g.fragment.c();n.intro&&q(t.$$.fragment),X(t,n.target,n.anchor,n.customElement),T()}M(p)}class ne{$destroy(){Z(this,1),this.$destroy=e}$on(t,n){if(!s(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const re=[];function ae(t,n=e){let r;const a=new Set;function s(e){if(o(t,e)&&(t=e,r)){const e=!re.length;for(const e of a)e[1](),re.push(e,t);if(e){for(let e=0;e<re.length;e+=2)re[e][0](re[e+1]);re.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(o,l=e){const i=[o,l];return a.add(i),1===a.size&&(r=n(s)||e),o(t),()=>{a.delete(i),0===a.size&&r&&(r(),r=null)}}}}function se(t,n,r){const o=!Array.isArray(t),l=o?[t]:t,i=n.length<2;return d=t=>{let r=!1;const d=[];let u=0,p=e;const g=()=>{if(u)return;p();const r=n(o?d[0]:d,t);i?t(r):p=s(r)?r:e},m=l.map(((e,t)=>c(e,(e=>{d[t]=e,u&=~(1<<t),r&&g()}),(()=>{u|=1<<t}))));return r=!0,g(),function(){a(m),p(),r=!1}},{subscribe:ae(r,d).subscribe};var d}const oe={},le={};function ie(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}const de=function(e,t){const n=[];let r=ie(e);return{get location(){return r},listen(t){n.push(t);const a=()=>{r=ie(e),t({location:r,action:"POP"})};return e.addEventListener("popstate",a),()=>{e.removeEventListener("popstate",a);const r=n.indexOf(t);n.splice(r,1)}},navigate(t,{state:a,replace:s=!1}={}){a={...a,key:Date.now()+""};try{s?e.history.replaceState(a,null,t):e.history.pushState(a,null,t)}catch(n){e.location[s?"replace":"assign"](t)}r=ie(e),n.forEach((e=>e({location:r,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(e,t){},removeEventListener(e,t){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(e,a,s){const[o,l=""]=s.split("?");t++,n.push({pathname:o,search:l}),r.push(e)},replaceState(e,a,s){const[o,l=""]=s.split("?");n[t]={pathname:o,search:l},r[t]=e}}}}()),{navigate:ce}=de,ue=/^:(.+)/,pe=4,ge=3,me=2,fe=1,be=1;function he(e){return"*"===e[0]}function xe(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ye(e){return e.replace(/(^\/+|\/+$)/g,"")}function ve(e,t){return{route:e,score:e.default?0:xe(e.path).reduce(((e,t)=>(e+=pe,!function(e){return""===e}(t)?!function(e){return ue.test(e)}(t)?he(t)?e-=pe+fe:e+=ge:e+=me:e+=be,e)),0),index:t}}function $e(e,t){let n,r;const[a]=t.split("?"),s=xe(a),o=""===s[0],l=function(e){return e.map(ve).sort(((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index))}(e);for(let e=0,a=l.length;e<a;e++){const a=l[e].route;let i=!1;if(a.default){r={route:a,params:{},uri:t};continue}const d=xe(a.path),c={},u=Math.max(s.length,d.length);let p=0;for(;p<u;p++){const e=d[p],t=s[p];if(void 0!==e&&he(e)){c["*"===e?"*":e.slice(1)]=s.slice(p).map(decodeURIComponent).join("/");break}if(void 0===t){i=!0;break}let n=ue.exec(e);if(n&&!o){const e=decodeURIComponent(t);c[n[1]]=e}else if(e!==t){i=!0;break}}if(!i){n={route:a,params:c,uri:"/"+s.slice(0,p).join("/")};break}}return n||r||null}function we(e,t){return`${ye("/"===t?e:`${ye(e)}/${ye(t)}`)}/`}function ke(e){let t;const n=e[9].default,r=p(n,e,e[8],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,[a]){r&&r.p&&(!t||256&a)&&f(r,n,e,e[8],t?m(n,e[8],a,null):b(e[8]),null)},i(e){t||(q(r,e),t=!0)},o(e){Y(r,e),t=!1},d(e){r&&r.d(e)}}}function Ae(e,t,n){let r,a,s,{$$slots:o={},$$scope:l}=t,{basepath:i="/"}=t,{url:d=null}=t;const c=j(oe),p=j(le),g=ae([]);u(e,g,(e=>n(6,a=e)));const m=ae(null);let f=!1;const b=c||ae(d?{pathname:d}:de.location);u(e,b,(e=>n(5,r=e)));const h=p?p.routerBase:ae({path:i,uri:i});u(e,h,(e=>n(7,s=e)));const x=se([h,m],(([e,t])=>{if(null===t)return e;const{path:n}=e,{route:r,uri:a}=t;return{path:r.default?n:r.path.replace(/\*.*$/,""),uri:a}}));var y;return c||(y=()=>de.listen((e=>{b.set(e.location)})),E().$$.on_mount.push(y),R(oe,b)),R(le,{activeRoute:m,base:h,routerBase:x,registerRoute:function(e){const{path:t}=s;let{path:n}=e;if(e._path=n,e.path=we(t,n),"undefined"==typeof window){if(f)return;const t=function(e,t){return $e([e],t)}(e,r.pathname);t&&(m.set(t),f=!0)}else g.update((t=>(t.push(e),t)))},unregisterRoute:function(e){g.update((t=>{const n=t.indexOf(e);return t.splice(n,1),t}))}}),e.$$set=e=>{"basepath"in e&&n(3,i=e.basepath),"url"in e&&n(4,d=e.url),"$$scope"in e&&n(8,l=e.$$scope)},e.$$.update=()=>{if(128&e.$$.dirty){const{path:e}=s;g.update((t=>(t.forEach((t=>t.path=we(e,t._path))),t)))}if(96&e.$$.dirty){const e=$e(a,r.pathname);m.set(e)}},[g,b,h,i,d,r,a,s,l,o]}class Se extends ne{constructor(e){super(),te(this,e,Ae,ke,o,{basepath:3,url:4})}}const Pe=e=>({params:4&e,location:16&e}),_e=e=>({params:e[2],location:e[4]});function Fe(e){let t,n,r,a;const s=[Ee,Me],o=[];function l(e,t){return null!==e[0]?0:1}return t=l(e),n=o[t]=s[t](e),{c(){n.c(),r=A()},m(e,n){o[t].m(e,n),y(e,r,n),a=!0},p(e,a){let i=t;t=l(e),t===i?o[t].p(e,a):(N(),Y(o[i],1,1,(()=>{o[i]=null})),W(),n=o[t],n?n.p(e,a):(n=o[t]=s[t](e),n.c()),q(n,1),n.m(r.parentNode,r))},i(e){a||(q(n),a=!0)},o(e){Y(n),a=!1},d(e){o[t].d(e),e&&v(r)}}}function Me(e){let t;const n=e[10].default,r=p(n,e,e[9],_e);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,a){r&&r.p&&(!t||532&a)&&f(r,n,e,e[9],t?m(n,e[9],a,Pe):b(e[9]),_e)},i(e){t||(q(r,e),t=!0)},o(e){Y(r,e),t=!1},d(e){r&&r.d(e)}}}function Ee(e){let n,r,a;const s=[{location:e[4]},e[2],e[3]];var o=e[0];function l(e){let n={};for(let e=0;e<s.length;e+=1)n=t(n,s[e]);return{props:n}}return o&&(n=F(o,l())),{c(){n&&Q(n.$$.fragment),r=A()},m(e,t){n&&X(n,e,t),y(e,r,t),a=!0},p(e,t){const a=28&t?function(e,t){const n={},r={},a={$$scope:1};let s=e.length;for(;s--;){const o=e[s],l=t[s];if(l){for(const e in o)e in l||(r[e]=1);for(const e in l)a[e]||(n[e]=l[e],a[e]=1);e[s]=l}else for(const e in o)a[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}(s,[16&t&&{location:e[4]},4&t&&J(e[2]),8&t&&J(e[3])]):{};if(1&t&&o!==(o=e[0])){if(n){N();const e=n;Y(e.$$.fragment,1,0,(()=>{Z(e,1)})),W()}o?(n=F(o,l()),Q(n.$$.fragment),q(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else o&&n.$set(a)},i(e){a||(n&&q(n.$$.fragment,e),a=!0)},o(e){n&&Y(n.$$.fragment,e),a=!1},d(e){e&&v(r),n&&Z(n,e)}}}function Re(e){let t,n,r=null!==e[1]&&e[1].route===e[7]&&Fe(e);return{c(){r&&r.c(),t=A()},m(e,a){r&&r.m(e,a),y(e,t,a),n=!0},p(e,[n]){null!==e[1]&&e[1].route===e[7]?r?(r.p(e,n),2&n&&q(r,1)):(r=Fe(e),r.c(),q(r,1),r.m(t.parentNode,t)):r&&(N(),Y(r,1,1,(()=>{r=null})),W())},i(e){n||(q(r),n=!0)},o(e){Y(r),n=!1},d(e){r&&r.d(e),e&&v(t)}}}function je(e,n,r){let a,s,{$$slots:o={},$$scope:l}=n,{path:i=""}=n,{component:d=null}=n;const{registerRoute:c,unregisterRoute:p,activeRoute:g}=j(le);u(e,g,(e=>r(1,a=e)));const m=j(oe);u(e,m,(e=>r(4,s=e)));const f={path:i,default:""===i};let b={},x={};var y;return c(f),"undefined"!=typeof window&&(y=()=>{p(f)},E().$$.on_destroy.push(y)),e.$$set=e=>{r(13,n=t(t({},n),h(e))),"path"in e&&r(8,i=e.path),"component"in e&&r(0,d=e.component),"$$scope"in e&&r(9,l=e.$$scope)},e.$$.update=()=>{2&e.$$.dirty&&a&&a.route===f&&r(2,b=a.params);{const{path:e,component:t,...a}=n;r(3,x=a)}},n=h(n),[d,a,b,x,s,g,m,f,i,l,o]}class De extends ne{constructor(e){super(),te(this,e,je,Re,o,{path:8,component:0})}}function Le(e){function t(e){const t=e.currentTarget;""===t.target&&function(e){const t=location.host;return e.host==t||0===e.href.indexOf(`https://${t}`)||0===e.href.indexOf(`http://${t}`)}(t)&&function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)&&(e.preventDefault(),ce(t.pathname+t.search,{replace:t.hasAttribute("replace")}))}return e.addEventListener("click",t),{destroy(){e.removeEventListener("click",t)}}}function Ge(t){let n,r,o,l,i,d,c,u,p,g,m,f,b,h;return{c(){n=$("nav"),r=$("div"),o=$("div"),l=$("a"),i=$("span"),i.textContent="Unturned",d=$("span"),d.textContent="Guard",c=k(),u=$("button"),u.innerHTML='<i class="text-ug-black fas fa-bars"></i>',p=k(),g=$("div"),m=$("ul"),m.innerHTML='<li class="flex items-center"><a class="lg:text-ug-black lg:hover:text-ug-green text-ug-black px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://unturnedguard.readthedocs.io/en/latest/"><i class="lg:text-ug-black text-ug-black far fa-file-alt text-lg leading-lg mr-2"></i>\n            Docs</a></li>',P(i,"class","text-ug-green"),P(d,"class","text-ug-black"),P(l,"class","text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"),P(l,"href",t[1]),P(u,"class","cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"),P(u,"type","button"),P(o,"class","w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"),P(m,"class","flex flex-col lg:flex-row list-none mr-auto"),P(g,"class",f="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg "+(t[0]?"block":"hidden")),P(g,"id","example-navbar-warning"),P(r,"class","container px-4 mx-auto flex flex-wrap items-center justify-between"),P(n,"class","top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg")},m(a,f){var v;y(a,n,f),x(n,r),x(r,o),x(o,l),x(l,i),x(l,d),x(o,c),x(o,u),x(r,p),x(r,g),x(g,m),b||(h=[(v=Le.call(null,l),v&&s(v.destroy)?v.destroy:e),S(u,"click",t[2])],b=!0)},p(e,[t]){1&t&&f!==(f="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg "+(e[0]?"block":"hidden"))&&P(g,"class",f)},i:e,o:e,d(e){e&&v(n),b=!1,a(h)}}}function Be(e,t,n){let r=j("installFolder"),a=!1;return[a,r,function(){n(0,a=!a)}]}class Ce extends ne{constructor(e){super(),te(this,e,Be,Ge,o,{})}}function Ue(t){let n,r,a,s,o,l,i,d,c,u,p;return{c(){n=$("footer"),r=$("div"),a=$("hr"),s=k(),o=$("div"),l=$("div"),i=$("div"),d=w("Copyright © "),c=w(t[0]),u=w(" UnturnedGuard by \r\n          "),p=$("a"),p.innerHTML='| Site design by \n          <a href="https://github.com/Kvarkas" class="lg:text-ug-black lg:hover:text-ug-green text-sm font-semibold py-1">Kvarkas</a>',P(a,"class","my-6 border-blueGray-300"),P(p,"href","https://github.com/sunnamed434"),P(p,"class","lg:text-ug-black lg:hover:text-ug-green text-sm font-semibold py-1"),P(i,"class","text-sm text-blueGray-500 font-semibold py-1"),P(l,"class","w-full md:w-4/12 px-4 mx-auto text-center"),P(o,"class","flex flex-wrap items-center md:justify-between justify-center"),P(r,"class","container mx-auto px-4"),P(n,"class","relative bg-ug-d1grey pt-8 pb-6")},m(e,t){y(e,n,t),x(n,r),x(r,a),x(r,s),x(r,o),x(o,l),x(l,i),x(i,d),x(i,c),x(i,u),x(i,p)},p:e,i:e,o:e,d(e){e&&v(n)}}}function He(e){return[(new Date).getFullYear()]}class Ie extends ne{constructor(e){super(),te(this,e,He,Ue,o,{})}}function Oe(e,t,n){const r=e.slice();return r[8]=t[n].type,r[9]=t[n].name,r[11]=n,r}function Te(e){let t,n,r,a,s=e[9]+"";function o(){return e[6](e[9])}return{c(){t=$("button"),n=w(s),P(t,"class","bg-ug-d4grey rounded-lg outline-none focus:outline-none px-6 py-2 m-2 hover:text-ug-green"),P(t,"type","button")},m(e,s){y(e,t,s),x(t,n),r||(a=S(t,"click",o),r=!0)},p(t,r){e=t,4&r&&s!==(s=e[9]+"")&&_(n,s)},d(e){e&&v(t),r=!1,a()}}}function ze(e){let t;return{c(){t=w(e[3])},m(e,n){y(e,t,n)},p(e,n){8&n&&_(t,e[3])},d(e){e&&v(t)}}}function Ve(t){let n,r,s,o,l,i,d,c,u,p,g,m,f,b,h,A,F,M,E,R,j,D,L,G,B,C=t[2],U=[];for(let e=0;e<C.length;e+=1)U[e]=Te(Oe(t,C,e));let H=t[3]&&ze(t);return{c(){n=$("button"),r=w("Demo"),o=k(),l=$("button"),i=w("Gold"),c=k(),u=$("br"),p=k(),g=$("div"),m=$("div");for(let e=0;e<U.length;e+=1)U[e].c();f=k(),b=$("br"),h=k(),A=$("br"),F=k(),M=$("div"),E=$("div"),R=$("p"),j=w(t[1]),D=k(),L=$("p"),H&&H.c(),P(n,"class",s=("demo"==t[0]?"bg-ug-green":"bg-ug-d3grey")+" text-ug-black active:bg-ug-gold font-bold px-4 py-1 rounded-lg outline-none focus:outline-none text-lg shadow hover:shadow-lg ease-linear transition-all duration-150"),P(n,"type","button"),P(l,"class",d=("demo"==t[0]?"bg-ug-d3grey":"bg-ug-gold")+" text-ug-black active:bg-ug-gold font-bold px-4 py-1 rounded-lg outline-none focus:outline-none text-lg shadow hover:shadow-lg ease-linear transition-all duration-150"),P(l,"type","button"),P(m,"class","mr-1 mb-1 px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"),P(g,"class","w-full mt-5"),P(R,"class","mt-2 mb-4 text-ug-black font-bold"),P(L,"class","mt-2 mb-4 text-ug-black text-base"),P(E,"class","px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"),P(M,"class","w-full")},m(e,a){y(e,n,a),x(n,r),y(e,o,a),y(e,l,a),x(l,i),y(e,c,a),y(e,u,a),y(e,p,a),y(e,g,a),x(g,m);for(let e=0;e<U.length;e+=1)U[e]&&U[e].m(m,null);x(m,f),x(m,b),y(e,h,a),y(e,A,a),y(e,F,a),y(e,M,a),x(M,E),x(E,R),x(R,j),x(E,D),x(E,L),H&&H.m(L,null),G||(B=[S(n,"click",t[4]),S(l,"click",t[5])],G=!0)},p(e,[t]){if(1&t&&s!==(s=("demo"==e[0]?"bg-ug-green":"bg-ug-d3grey")+" text-ug-black active:bg-ug-gold font-bold px-4 py-1 rounded-lg outline-none focus:outline-none text-lg shadow hover:shadow-lg ease-linear transition-all duration-150")&&P(n,"class",s),1&t&&d!==(d=("demo"==e[0]?"bg-ug-d3grey":"bg-ug-gold")+" text-ug-black active:bg-ug-gold font-bold px-4 py-1 rounded-lg outline-none focus:outline-none text-lg shadow hover:shadow-lg ease-linear transition-all duration-150")&&P(l,"class",d),6&t){let n;for(C=e[2],n=0;n<C.length;n+=1){const r=Oe(e,C,n);U[n]?U[n].p(r,t):(U[n]=Te(r),U[n].c(),U[n].m(m,f))}for(;n<U.length;n+=1)U[n].d(1);U.length=C.length}2&t&&_(j,e[1]),e[3]?H?H.p(e,t):(H=ze(e),H.c(),H.m(L,null)):H&&(H.d(1),H=null)},i:e,o:e,d(e){e&&v(n),e&&v(o),e&&v(l),e&&v(c),e&&v(u),e&&v(p),e&&v(g),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(U,e),e&&v(h),e&&v(A),e&&v(F),e&&v(M),H&&H.d(),G=!1,a(B)}}}function Ke(e,t,n){const r=[{type:"demo",name:"Periodic Ban System",value:"Players are banned automatically after a specific period of time has passed since their detection by UnturnedGuard, similar to BattlEye behavior."},{type:"demo",name:"uPanel",value:"Built-in support for uPanel Ban System."},{type:"demo",name:"AdminApproval",value:"Built-in approval for Admin staff when cheaters are spotted but the anticheat not 100% sure that this is a cheater, and can be a false positive."},{type:"demo",name:"AntiFakeHWID",value:"Recognizes if player trying to change HWID or fake it."},{type:"demo",name:"AntiFarDamage",value:"Recognizes if a player is trying to damage other players far/abnormally than the allowed in Unturned."},{type:"demo",name:"AntiFarItemInteract",value:"Recognizes if a player trying to interact with items when this is impossible for non-cheater player."},{type:"demo",name:"CheatTested",value:"All UnturnedGuard features have been tested using real cheats in Unturned."},{type:"demo",name:"Logging",value:"Logging of the spotted players, and abnormal player's behavior."},{type:"demo",name:"Micro-lag Detect",value:"In case of server micro-lags anti-cheat will stop their work for a while."},{type:"demo",name:"Moderation2",value:"Integration for the Moderation2 plugin - bans players using the Moderation2 API."},{type:"demo",name:"OM+RM+Vanilla",value:"OpenMod, RocketMod, and Vanilla are supported."},{type:"demo",name:"PlayerFilter",value:"Filter players/administration by the SteamId/Group to prevent the UnturnedGuard scanning through the specified players."},{type:"demo",name:"Runtime Reload",value:"Everything that changes in the config at runtime is applied automatically after the plugin reload."},{type:"gold",name:"AntiInvalidKill",value:"Against players who are trying to kill other player in a way which is not possible to do without cheats."},{type:"gold",name:"AntiClumsy",value:"Recognizes if player use Clumsy (fake-lag) application."},{type:"gold",name:"AntiCameraSpectator",value:"Against players who are spectating to players via cheats."},{type:"gold",name:"AntiESP",value:"To limit draw distance against players who are using wallhacks."},{type:"gold",name:"AntiFarBedClaiming",value:"Aganst players who are trying to claim bed, when this is not possible in Unturned behavior."},{type:"gold",name:"AntiBuildableFarSalvage",value:"To prevent not possible in Unturned buildings salvage."},{type:"gold",name:"AntiVehicleFarEnter",value:"Aganst players who are trying to interact with vehicles when this is not possible in Unturned behavior."},{type:"gold",name:"AntiSilentAim",value:"To detect players who are using aim bots."},{type:"gold",name:"Discord Webhook",value:"Sends an important info about spotted/banned players into the Discord Webhook."},{type:"gold",name:"SteamProfileRestriction",value:"To reject accounts by: VAC; Creation Account Date; Friends; Hidden Profiles; block newly created accounts from joining; and many many more..."},{type:"gold",name:"UnturnedHourRestriction",value:"To block players with a small number of hours in Unturned."}];let a="demo",s="Periodic Ban System",o=[],l="";return e.$$.update=()=>{1&e.$$.dirty&&n(2,o="demo"==a?r.filter((e=>"demo"==e.type)):r),2&e.$$.dirty&&n(3,l=r.find((e=>e.name===s))?.value)},[a,s,o,l,()=>{n(1,s="Periodic Ban System"),n(0,a="demo")},()=>{n(1,s="Periodic Ban System"),n(0,a="gold")},e=>n(1,s=e)]}class Ne extends ne{constructor(e){super(),te(this,e,Ke,Ve,o,{})}}function We(t){let n,r,a,s,o,l,i,c,u,p,g,m,f,b,h,w,A,S,_,F,M,E,R,j,D,L,G;return r=new Ce({}),j=new Ne({}),L=new Ie({}),{c(){n=$("div"),Q(r.$$.fragment),a=k(),s=$("main"),o=$("div"),l=$("div"),i=$("div"),c=$("div"),c.innerHTML='<div class="pr-10 mlr-4 mt-20"><h1 class="text-white font-semibold text-5xl"><span class="text-ug-green">Unturned</span><span class="text-ug-black">Guard</span></h1> \n              <p class="mt-4 mb-4 text-xl text-ug-black">Free and paid AntiCheat for your servers, with a many-many features against cheating!</p> \n              \n              <a href="https://discord.gg/jc4FPg6H6S" class="bg-ug-green text-white active:bg-ug-gold font-bold px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 uppercase text-lg shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Get Started</a></div>',u=k(),p=$("div"),g=$("img"),f=k(),b=$("div"),h=$("img"),A=k(),S=$("section"),S.innerHTML='<div class="container mx-auto px-4"><div class="flex flex-wrap"><div class="w-full lg:w-6/12 xl:w-3/12 px-4"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"><h6 class="text-xl font-semibold"><span class="text-ug-green">Demo</span>  <span class="text-ug-black">Plan</span></h6> \n                <p class="mt-2 mb-4 text-ug-black">$0 \n                  <span class="mr-2 text-sm">/ month</span> \n                  <br/><br/> \n                  <a href="https://discord.gg/jc4FPg6H6S" class="bg-ug-green text-white active:bg-ug-gold font-bold px-2 py-2 rounded outline-none focus:outline-none uppercase text-lg shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Get Started</a></p> \n                <span class="mr-2 text-base">12/24 Features</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Moderation2 Integration</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">RocketMod, OpenMod, and Vanilla</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Logging</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Built-in approval for Admin staff</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Server micro-lags detection</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Players Filter</span></div></div></div> \n\n          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"><h6 class="text-xl font-semibold"><span class="text-ug-gold">Gold</span>  <span class="text-ug-black">Plan</span></h6> \n                <p class="mt-2 mb-4 text-ug-black">$3.45\n                  <span class="mr-2 text-sm">/ month</span> \n                  <span class="mr-2 text-sm text-red-400">(Save 0%)</span> \n                  <br/> \n                  <span class="mr-2 text-sm">Cost of 2 coffee cups.</span> \n                  <br/> \n                  <a href="https://discord.gg/jc4FPg6H6S" class="bg-ug-green text-white active:bg-ug-gold font-bold px-2 py-2 rounded outline-none focus:outline-none uppercase text-lg shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Get Started</a></p> \n                <span class="mr-2 text-base">24/24 Features</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Webhook</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Moderation2 Integration</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">RocketMod, OpenMod, and Vanilla</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Logging</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Built-in approval for Admin staff</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Server micro-lags detection</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Players Filter</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Role</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Private Channel Access</span></div></div></div> \n\n          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"><h6 class="text-xl font-semibold"><span class="text-ug-gold">Gold</span>  <span class="text-ug-black">Plan</span></h6> \n                <p class="mt-2 mb-4 text-ug-black">$6.00 \n                  <span class="mr-2 text-sm">/ 3 month</span> \n                  <span class="mr-2 text-sm text-lightBlue-400">(Save 42.07%)</span> \n                  <br/> \n                  <br/> \n                  <a href="https://discord.gg/jc4FPg6H6S" class="bg-ug-green text-white active:bg-ug-gold font-bold px-2 py-2 rounded outline-none focus:outline-none uppercase text-lg shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Get Started</a></p> \n                <span class="mr-2 text-base">24/24 Features</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Webhook</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Moderation2 Integration</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">RocketMod, OpenMod, and Vanilla</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Logging</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Built-in approval for Admin staff</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Server micro-lags detection</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Players Filter</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Role</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Private Channel Access</span></div></div></div> \n\n          <div class="w-full lg:w-6/12 xl:w-3/12 px-4"><div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"><div class="px-4 py-5 flex-auto bg-ug-d3grey shadow-lg rounded-lg"><h6 class="text-xl font-semibold"><span class="text-ug-gold">Gold</span>  <span class="text-ug-black">Plan</span></h6> \n                <p class="mt-2 mb-4 text-ug-black">$18.00\n                  <span class="mr-2 text-sm">/ 1 year</span> \n                  <span class="mr-2 text-sm text-emerald-500">(Save 56.51%)</span> \n                  <br/> \n                  <br/> \n                  <a href="https://discord.gg/jc4FPg6H6S" class="bg-ug-green text-white active:bg-ug-gold font-bold px-2 py-2 rounded outline-none focus:outline-none uppercase text-lg shadow hover:shadow-lg ease-linear transition-all duration-150" target="_blank">Get Started</a></p> \n                <span class="mr-2 text-base">24/24 Features</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Webhook</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Moderation2 Integration</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">RocketMod, OpenMod, and Vanilla</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Logging</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Built-in approval for Admin staff</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Server micro-lags detection</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Players Filter</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Role</span> \n                <div class="h-0 mx-2 my-2 border border-solid border-ug-gray"></div> \n                <span class="mr-2 text-base">Discord Private Channel Access</span></div></div></div></div></div>',_=k(),F=$("section"),M=$("div"),E=$("div"),E.innerHTML='<div class="w-full lg:w-9/12 px-4"><h2 class="text-4xl font-semibold">Features</h2> \n            <p class="text-lg leading-relaxed m-4 text-blueGray-500 text-left">Are you tired of dealing with cheaters ruining your gaming experience? Our powerful anti-cheat software includes the most popular behavior detection, so you can ensure your server remains safe and secure.</p></div>',R=k(),Q(j.$$.fragment),D=k(),Q(L.$$.fragment),P(c,"class","w-full lg:w-6/12"),P(g,"alt","..."),d(g.src,m=t[0]+"assets/img/UnturnedGuardLogo.png")||P(g,"src",m),P(g,"class","shadow-xl h-auto border-none max-w-150-px"),P(p,"class","mt-8"),P(h,"alt","..."),d(h.src,w=t[0]+"assets/img/UnturnedGuardFreeLogo.png")||P(h,"src",w),P(h,"class","shadow-xl h-auto border-none max-w-150-px"),P(b,"class","mt-8"),P(i,"class","items-center flex flex-wrap justify-center"),P(l,"class","container relative mx-auto"),P(o,"class","relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-65 bg-ug-d1grey"),P(S,"class","pb-20 bg-ug-d1grey -mt-24"),P(E,"class","flex flex-wrap justify-center text-center mb-8"),P(M,"class","container mx-auto px-4"),P(F,"class","bg-ug-d1grey pb-48")},m(e,t){y(e,n,t),X(r,n,null),x(n,a),x(n,s),x(s,o),x(o,l),x(l,i),x(i,c),x(i,u),x(i,p),x(p,g),x(i,f),x(i,b),x(b,h),x(s,A),x(s,S),x(s,_),x(s,F),x(F,M),x(M,E),x(M,R),X(j,M,null),x(n,D),X(L,n,null),G=!0},p:e,i(e){G||(q(r.$$.fragment,e),q(j.$$.fragment,e),q(L.$$.fragment,e),G=!0)},o(e){Y(r.$$.fragment,e),Y(j.$$.fragment,e),Y(L.$$.fragment,e),G=!1},d(e){e&&v(n),Z(r),Z(j),Z(L)}}}function qe(e){return[j("installFolder")]}class Ye extends ne{constructor(e){super(),te(this,e,qe,We,o,{})}}function Je(t){let n,r;return n=new De({props:{path:Xe,component:Ye}}),{c(){Q(n.$$.fragment)},m(e,t){X(n,e,t),r=!0},p:e,i(e){r||(q(n.$$.fragment,e),r=!0)},o(e){Y(n.$$.fragment,e),r=!1},d(e){Z(n,e)}}}function Qe(e){let t,n;return t=new Se({props:{url:e[0],$$slots:{default:[Je]},$$scope:{ctx:e}}}),{c(){Q(t.$$.fragment)},m(e,r){X(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.url=e[0]),2&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(q(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}let Xe="/";function Ze(e,t,n){let{url:r=""}=t;return R("installFolder",Xe),e.$$set=e=>{"url"in e&&n(0,r=e.url)},[r]}return new class extends ne{constructor(e){super(),te(this,e,Ze,Qe,o,{url:0})}}({target:document.getElementById("app")})}();
//# sourceMappingURL=bundle.js.map
