var h=void 0,k=!0,m=null,p=!1,r=document,s=Array,t=Error,u=parseInt,w=String;function aa(a,b){return a.currentTarget=b}function ba(a,b){return a.keyCode=b}function ca(a,b){return a.length=b}function x(a,b){return a.disabled=b}
var y="push",z="slice",A="replace",B="value",da="preventDefault",C="indexOf",D="keyCode",F="handleEvent",G="type",ea="name",H="length",fa="propertyIsEnumerable",I="prototype",J="split",ga="target",K="call",L,M=this,ha=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof s)return"array";if(a instanceof Object)return b;var d=Object[I].toString[K](a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a[H]&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[fa]&&
!a[fa]("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a[K]&&"undefined"!=typeof a[fa]&&!a[fa]("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a[K])return"object";return b},ia=function(a){var b=ha(a);return"array"==b||"object"==b&&"number"==typeof a[H]},N=function(a){return"string"==typeof a},ja=function(a){return"function"==ha(a)},ka=function(a){var b=typeof a;return"object"==b&&a!=m||"function"==b},O="closure_uid_"+(1E9*Math.random()>>>
0),la=0,ma=function(a,b){function d(){}d.prototype=b[I];a.u=b[I];a.prototype=new d};var P=function(a){t.captureStackTrace?t.captureStackTrace(this,P):this.stack=t().stack||"";a&&(this.message=w(a))};ma(P,t);P[I].name="CustomError";var na=function(a,b){for(var d=1;d<arguments[H];d++){var c=w(arguments[d])[A](/\$/g,"$$$$");a=a[A](/\%s/,c)}return a},ta=function(a,b){if(b)return a[A](oa,"&amp;")[A](pa,"&lt;")[A](qa,"&gt;")[A](ra,"&quot;");if(!sa.test(a))return a;-1!=a[C]("&")&&(a=a[A](oa,"&amp;"));-1!=a[C]("<")&&(a=a[A](pa,"&lt;"));-1!=a[C](">")&&(a=a[A](qa,"&gt;"));-1!=a[C]('"')&&(a=a[A](ra,"&quot;"));return a},oa=/&/g,pa=/</g,qa=/>/g,ra=/\"/g,sa=/[&<>\"]/;var ua=function(a,b){b.unshift(a);P[K](this,na.apply(m,b));b.shift()};ma(ua,P);ua[I].name="AssertionError";var va=function(a,b,d){if(!a){var c=s[I][z][K](arguments,2),f="Assertion failed";if(b)var f=f+(": "+b),e=c;throw new ua(""+f,e||[]);}return a};var R=s[I],wa=R[C]?function(a,b,d){va(a[H]!=m);return R[C][K](a,b,d)}:function(a,b,d){d=d==m?0:0>d?Math.max(0,a[H]+d):d;if(N(a))return!N(b)||1!=b[H]?-1:a[C](b,d);for(;d<a[H];d++)if(d in a&&a[d]===b)return d;return-1},xa=R.forEach?function(a,b,d){va(a[H]!=m);R.forEach[K](a,b,d)}:function(a,b,d){for(var c=a[H],f=N(a)?a[J](""):a,e=0;e<c;e++)e in f&&b[K](d,f[e],e,a)},ya=function(a){var b=a[H];if(0<b){for(var d=s(b),c=0;c<b;c++)d[c]=a[c];return d}return[]},za=function(a,b,d){va(a[H]!=m);return 2>=arguments[H]?
R[z][K](a,b):R[z][K](a,b,d)};var Aa=function(a,b,d){for(var c in a)b[K](d,a[c],c,a)},Ba="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ca=function(a,b){for(var d,c,f=1;f<arguments[H];f++){c=arguments[f];for(d in c)a[d]=c[d];for(var e=0;e<Ba[H];e++)d=Ba[e],Object[I].hasOwnProperty[K](c,d)&&(a[d]=c[d])}};var S,Da,Ea,Fa,Ga=function(){return M.navigator?M.navigator.userAgent:m};Fa=Ea=Da=S=p;var Ha;if(Ha=Ga()){var Ia=M.navigator;S=0==Ha[C]("Opera");Da=!S&&-1!=Ha[C]("MSIE");Ea=!S&&-1!=Ha[C]("WebKit");Fa=!S&&!Ea&&"Gecko"==Ia.product}var Ja=S,T=Da,U=Fa,V=Ea,Ka=function(){var a=M.document;return a?a.documentMode:h},La;
a:{var Ma="",Na;if(Ja&&M.opera)var Oa=M.opera.version,Ma="function"==typeof Oa?Oa():Oa;else if(U?Na=/rv\:([^\);]+)(\)|;)/:T?Na=/MSIE\s+([^\);]+)(\)|;)/:V&&(Na=/WebKit\/(\S+)/),Na)var Pa=Na.exec(Ga()),Ma=Pa?Pa[1]:"";if(T){var Qa=Ka();if(Qa>parseFloat(Ma)){La=w(Qa);break a}}La=Ma}
var Ra=La,Sa={},W=function(a){var b;if(!(b=Sa[a])){b=0;for(var d=w(Ra)[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")[J]("."),c=w(a)[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")[J]("."),f=Math.max(d[H],c[H]),e=0;0==b&&e<f;e++){var g=d[e]||"",n=c[e]||"",l=RegExp("(\\d*)(\\D*)","g"),Q=RegExp("(\\d*)(\\D*)","g");do{var q=l.exec(g)||["","",""],v=Q.exec(n)||["","",""];if(0==q[0][H]&&0==v[0][H])break;b=((0==q[1][H]?0:u(q[1],10))<(0==v[1][H]?0:u(v[1],10))?-1:(0==q[1][H]?0:u(q[1],10))>(0==v[1][H]?0:u(v[1],10))?1:0)||((0==q[2][H])<(0==
v[2][H])?-1:(0==q[2][H])>(0==v[2][H])?1:0)||(q[2]<v[2]?-1:q[2]>v[2]?1:0)}while(0==b)}b=Sa[a]=0<=b}return b},Ta=M.document,Ua=!Ta||!T?h:Ka()||("CSS1Compat"==Ta.compatMode?u(Ra,10):5);var Va=!T||T&&9<=Ua;!U&&!T||T&&T&&9<=Ua||U&&W("1.9.1");T&&W("9");var Wa=function(a,b){var d;d=a.className;d=N(d)&&d.match(/\S+/g)||[];for(var c=za(arguments,1),f=d[H]+c[H],e=d,g=0;g<c[H];g++)0<=wa(e,c[g])||e[y](c[g]);a.className=d.join(" ");return d[H]==f};var Xa=function(a){return N(a)?r.getElementById(a):a},Ya=function(a,b,d,c){a=c||a;b=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||d))return a.querySelectorAll(b+(d?"."+d:""));if(d&&a.getElementsByClassName){a=a.getElementsByClassName(d);if(b){c={};for(var f=0,e=0,g;g=a[e];e++)b==g.nodeName&&(c[f++]=g);ca(c,f);return c}return a}a=a.getElementsByTagName(b||"*");if(d){c={};for(e=f=0;g=a[e];e++)b=g.className,"function"==typeof b[J]&&0<=wa(b[J](/\s+/),d)&&(c[f++]=g);ca(c,f);
return c}return a},$a=function(a,b){Aa(b,function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:c in Za?a.setAttribute(Za[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})},Za={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},ab=function(a,b,d,c){function f(c){c&&
b.appendChild(N(c)?a.createTextNode(c):c)}for(;c<d[H];c++){var e=d[c];if(ia(e)&&!(ka(e)&&0<e.nodeType)){var g;a:{if(e&&"number"==typeof e[H]){if(ka(e)){g="function"==typeof e.item||"string"==typeof e.item;break a}if(ja(e)){g="function"==typeof e.item;break a}}g=p}xa(g?ya(e):e,f)}else f(e)}},bb=function(a,b,d){var c=arguments,f=c[0],e=c[1];if(!Va&&e&&(e[ea]||e[G])){f=["<",f];e[ea]&&f[y](' name="',ta(e[ea]),'"');if(e[G]){f[y](' type="',ta(e[G]),'"');var g={};Ca(g,e);delete g[G];e=g}f[y](">");f=f.join("")}f=
r.createElement(f);e&&(N(e)?f.className=e:"array"==ha(e)?Wa.apply(m,[f].concat(e)):$a(f,e));2<c[H]&&ab(r,f,c,2);return f};var cb=function(a){var b=a[G];if(b===h)return m;switch(b.toLowerCase()){case "checkbox":case "radio":return a.checked?a[B]:m;case "select-one":return b=a.selectedIndex,0<=b?a.options[b][B]:m;case "select-multiple":for(var b=[],d,c=0;d=a.options[c];c++)d.selected&&b[y](d[B]);return b[H]?b:m;default:return a[B]!==h?a[B]:m}};var db=function(a){db[" "](a);return a};db[" "]=function(){};var eb=!T||T&&9<=Ua,fb=T&&!W("9");!V||W("528");U&&W("1.9b")||T&&W("8")||Ja&&W("9.5")||V&&W("528");U&&!W("8")||T&&W("9");var gb=function(a,b){this.type=a;this.target=b;aa(this,this[ga])};gb[I].m=p;gb[I].defaultPrevented=p;gb[I].preventDefault=function(){this.defaultPrevented=k};var hb=function(a,b){a&&this.i(a,b)};ma(hb,gb);L=hb[I];L.target=m;L.relatedTarget=m;L.offsetX=0;L.offsetY=0;L.clientX=0;L.clientY=0;L.screenX=0;L.screenY=0;L.button=0;ba(L,0);L.charCode=0;L.ctrlKey=p;L.altKey=p;L.shiftKey=p;L.metaKey=p;L.r=m;
L.i=function(a,b){var d=this.type=a[G];gb[K](this,d);this.target=a[ga]||a.srcElement;aa(this,b);var c=a.relatedTarget;if(c){if(U){var f;a:{try{db(c.nodeName);f=k;break a}catch(e){}f=p}f||(c=m)}}else"mouseover"==d?c=a.fromElement:"mouseout"==d&&(c=a.toElement);this.relatedTarget=c;this.offsetX=V||a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=V||a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=
a.screenY||0;this.button=a.button;ba(this,a[D]||0);this.charCode=a.charCode||("keypress"==d?a[D]:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.r=a;a.defaultPrevented&&this[da]();delete this.m};L.preventDefault=function(){hb.u[da][K](this);var a=this.r;if(a[da])a[da]();else if(a.returnValue=p,fb)try{(a.ctrlKey||112<=a[D]&&123>=a[D])&&ba(a,-1)}catch(b){}};var ib="closure_listenable_"+(1E6*Math.random()|0),jb=0;var kb=function(){};L=kb[I];L.key=0;L.c=p;L.h=p;L.i=function(a,b,d,c,f,e){if(ja(a))this.q=k;else if(a&&a[F]&&ja(a[F]))this.q=p;else throw t("Invalid listener argument");this.d=a;this.o=b;this.src=d;this.type=c;this.capture=!!f;this.n=e;this.h=p;this.key=++jb;this.c=p};L.handleEvent=function(a){return this.q?this.d[K](this.n||this.src,a):this.d[F][K](this.d,a)};var lb={},X={},Y={},Z={},mb=function(a,b,d,c,f){if("array"==ha(b)){for(var e=0;e<b[H];e++)mb(a,b[e],d,c,f);return m}if(a&&a[ib])a=a.w(b,nb(d),c,f);else a:{if(!b)throw t("Invalid event type");c=!!c;var g=X;b in g||(g[b]={a:0,b:0});g=g[b];c in g||(g[c]={a:0,b:0},g.a++);var g=g[c],e=a[O]||(a[O]=++la),n;g.b++;if(g[e]){n=g[e];for(var l=0;l<n[H];l++)if(g=n[l],g.d==d&&g.n==f){if(g.c)break;n[l].h=p;a=n[l];break a}}else n=g[e]=[],g.a++;l=ob();g=new kb;g.i(d,l,a,b,c,f);g.h=p;l.src=a;l.d=g;n[y](g);Y[e]||(Y[e]=
[]);Y[e][y](g);a.addEventListener?a==M||!a.customEvent_?a.addEventListener(b,l,c):a.v():a.attachEvent(b in Z?Z[b]:Z[b]="on"+b,l);a=g}b=a.key;lb[b]=a;return b},ob=function(){var a=pb,b=eb?function(d){return a[K](b.src,b.d,d)}:function(d){d=a[K](b.src,b.d,d);if(!d)return d};return b},qb=function(a,b,d,c){if(!c.l&&c.p){for(var f=0,e=0;f<c[H];f++)c[f].c?c[f].o.src=m:(f!=e&&(c[e]=c[f]),e++);ca(c,e);c.p=p;0==e&&(delete X[a][b][d],X[a][b].a--,0==X[a][b].a&&(delete X[a][b],X[a].a--),0==X[a].a&&delete X[a])}},
sb=function(a,b,d,c,f){var e=1;b=b[O]||(b[O]=++la);if(a[b]){var g=--a.b,n=a[b];n.l?n.l++:n.l=1;try{for(var l=n[H],Q=0;Q<l;Q++){var q=n[Q];q&&!q.c&&(e&=rb(q,f)!==p)}}finally{a.b=Math.max(g,a.b),n.l--,qb(d,c,b,n)}}return Boolean(e)},rb=function(a,b){if(a.h){var d=a.key,c=lb[d];if(c&&!c.c){var f=c.src;if(f&&f[ib])f.A(c);else{var e=c[G],g=c.o,n=c.capture;f.removeEventListener?(f==M||!f.customEvent_)&&f.removeEventListener(e,g,n):f.detachEvent&&f.detachEvent(e in Z?Z[e]:Z[e]="on"+e,g);f=f[O]||(f[O]=++la);
if(Y[f]){var g=Y[f],l=wa(g,c);0<=l&&(va(g[H]!=m),R.splice[K](g,l,1));0==g[H]&&delete Y[f]}c.c=k;if(c=X[e][n][f])c.p=k,qb(e,n,f,c);delete lb[d]}}}return a[F](b)},pb=function(a,b){if(a.c)return k;var d=a[G],c=X;if(!(d in c))return k;var c=c[d],f,e;if(!eb){var g;if(!(g=b))a:{g=["window","event"];for(var n=M;f=g.shift();)if(n[f]!=m)n=n[f];else{g=m;break a}g=n}f=g;g=k in c;n=p in c;if(g){if(0>f[D]||f.returnValue!=h)return k;a:{var l=p;if(0==f[D])try{ba(f,-1);break a}catch(Q){l=k}if(l||f.returnValue==h)f.returnValue=
k}}l=new hb;l.i(f,this);f=k;try{if(g){for(var q=[],v=l.currentTarget;v;v=v.parentNode)q[y](v);e=c[k];e.b=e.a;for(var E=q[H]-1;!l.m&&0<=E&&e.b;E--)aa(l,q[E]),f&=sb(e,q[E],d,k,l);if(n){e=c[p];e.b=e.a;for(E=0;!l.m&&E<q[H]&&e.b;E++)aa(l,q[E]),f&=sb(e,q[E],d,p,l)}}else f=rb(a,l)}finally{q&&ca(q,0)}return f}d=new hb(b,this);return f=rb(a,d)},tb="__closure_events_fn_"+(1E9*Math.random()>>>0),nb=function(a){return ja(a)?a:a[tb]||(a[tb]=function(b){return a[F](b)})};var ub=function(a,b){var d=[];1<arguments[H]&&(d=s[I][z][K](arguments)[z](1));var c=Ya(r,"th","tct-selectall",a);if(0!=c[H]){var c=c[0],f=0,e=Ya(r,"tbody",m,a);e[H]&&(f=e[0].rows[H]);this.f=bb("input",{type:"checkbox"});c.appendChild(this.f);f?mb(this.f,"click",this.t,p,this):x(this.f,k);this.g=[];this.j=[];this.k=[];c=Ya(r,"input",m,a);for(f=0;e=c[f];f++)"checkbox"==e[G]&&e!=this.f?(this.g[y](e),mb(e,"click",this.s,p,this)):"action"==e[ea]&&(0<=d[C](e[B])?this.k[y](e):this.j[y](e),x(e,k))}};L=ub[I];
L.g=m;L.e=0;L.f=m;L.j=m;L.k=m;L.t=function(a){for(var b=a[ga].checked,d=a=0,c;c=this.g[d];d++)c.checked=b,a+=1;this.e=b?this.g[H]:0;for(d=0;b=this.j[d];d++)x(b,!this.e);for(d=0;b=this.k[d];d++)x(b,1!=a?k:p)};L.s=function(a){this.e+=a[ga].checked?1:-1;this.f.checked=this.e==this.g[H];a=0;for(var b;b=this.j[a];a++)x(b,!this.e);for(a=0;b=this.k[a];a++)x(b,1!=this.e?k:p)};var vb=function(){var a=Xa("kinds");a&&new ub(a);(a=Xa("pending_backups"))&&new ub(a);(a=Xa("backups"))&&new ub(a,"Restore");var b=Xa("ae-datastore-admin-filesystem");b&&mb(b,"change",function(){var a="gs"==cb(b);Xa("gs_bucket_tr").style.display=a?"":"none"})},wb=["ae","Datastore","Admin","init"],$=M;!(wb[0]in $)&&$.execScript&&$.execScript("var "+wb[0]);for(var xb;wb[H]&&(xb=wb.shift());)!wb[H]&&vb!==h?$[xb]=vb:$=$[xb]?$[xb]:$[xb]={};
