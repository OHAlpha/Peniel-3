(function(){var q=this,aa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return r.apply(null,arguments)},da=function(a,b){function c(){}c.prototype=b.prototype;a.Ja=b.prototype;a.prototype=new c;a.Ia=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var ea=(new Date).getTime();var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ga=/&/g,na=/</g,oa=/>/g,pa=/"/g,qa=/'/g,ra=/\x00/g,sa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},ta={"'":"\\'"},ua=function(a,b){return a<b?-1:a>b?1:0};var va=function(a,b){this.width=a;this.height=b};va.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};va.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var t;a:{var wa=q.navigator;if(wa){var xa=wa.userAgent;if(xa){t=xa;break a}}t=""}var u=function(a){return-1!=t.indexOf(a)};var ya=u("Opera")||u("OPR"),v=u("Trident")||u("MSIE"),Ga=u("Edge"),Ha=u("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge"))&&!(u("Trident")||u("MSIE"))&&!u("Edge"),Ia=-1!=t.toLowerCase().indexOf("webkit")&&!u("Edge"),Ja=function(){var a=t;if(Ha)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ga)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ia)return/WebKit\/(\S+)/.exec(a)},Ka=function(){var a=q.document;return a?a.documentMode:void 0},La=function(){if(ya&&
q.opera){var a;var b=q.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ja())&&(a=b?b[1]:"");return v&&(b=Ka(),b>parseFloat(a))?String(b):a}(),Ma={},Na=function(a){if(!Ma[a]){for(var b=0,c=fa(String(La)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",m=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var h=m.exec(g)||["","",""],p=l.exec(k)||["","",""];if(0==h[0].length&&0==p[0].length)break;b=ua(0==h[1].length?0:parseInt(h[1],
10),0==p[1].length?0:parseInt(p[1],10))||ua(0==h[2].length,0==p[2].length)||ua(h[2],p[2])}while(0==b)}Ma[a]=0<=b}},Oa=q.document,Pa=Oa&&v?Ka()||("CSS1Compat"==Oa.compatMode?parseInt(La,10):5):void 0;var Qa;if(!(Qa=!Ha&&!v)){var Ra;if(Ra=v)Ra=9<=Pa;Qa=Ra}Qa||Ha&&Na("1.9.1");v&&Na("9");var w=function(a){w[" "](a);return a};w[" "]=function(){};var Sa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)};var y=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{w(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Ta=function(){var a=window;return y(a.top)?a.top:null},Ua=function(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle},z=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return c=Va(window),a[Math.floor(c*a.length)]}return null},Va=function(a){try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}},
Wa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Xa=/^([0-9.]+)px$/,Ya=/^(-?[0-9.]{1,30})$/,Za=function(a){return Ya.test(a)&&(a=Number(a),!isNaN(a))?a:null},$a=function(a){return(a=Xa.exec(a))?+a[1]:null};var ub=function(a,b,c,d,e,f){try{if((d?a.ca:Math.random())<(e||a.U)){var g=a.T+b+ab(c),g=g.substring(0,2E3);"undefined"===typeof f?bb(g):bb(g,f)}}catch(k){}},ab=function(a){var b="";Wa(a,function(a,d){if(0===a||a)b+="&"+d+"="+encodeURIComponent(String(a))});return b},bb=function(a,b){q.google_image_requests||(q.google_image_requests=[]);var c=q.document.createElement("img");if(b){var d=function(a){b(a);a=d;c.removeEventListener?c.removeEventListener("load",a,!1):c.detachEvent&&c.detachEvent("onload",
a);a=d;c.removeEventListener?c.removeEventListener("error",a,!1):c.detachEvent&&c.detachEvent("onerror",a)};Sa(c,"load",d);Sa(c,"error",d)}c.src=a;q.google_image_requests.push(c)};var vb=function(a,b,c){this.$=a;this.W=b;this.P=c;this.J=null;this.V=this.u;this.ia=!1},wb=function(a,b,c){this.message=a;this.fileName=b||"";this.lineNumber=c||-1},yb=function(a,b,c,d,e){var f;try{f=c()}catch(m){var g=a.P;try{var k=xb(m),g=(e||a.V).call(a,b,k,void 0,d)}catch(l){a.u("pAR",l)}if(!g)throw m;}finally{}return f},zb=function(a,b){var c=B;return function(){var d=arguments;return yb(c,a,function(){return b.apply(void 0,d)},void 0)}};
vb.prototype.u=function(a,b,c,d,e){var f={};f.context=a;b instanceof wb||(b=xb(b));f.msg=b.message.substring(0,512);b.fileName&&(f.file=b.fileName);0<b.lineNumber&&(f.line=b.lineNumber.toString());a=q.document;f.url=a.URL.substring(0,512);f.ref=a.referrer.substring(0,512);Ab(this,f,d);ub(this.$,e||this.W,f,this.ia,c);return this.P};
var Ab=function(a,b,c){if(a.J)try{a.J(b)}catch(d){}if(c)try{c(b)}catch(d){}},xb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(f){b=d}}return new wb(b,a.fileName,a.lineNumber)};var Bb=document,C=window;var Cb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},Db=function(a){return!!a&&"function"==typeof a&&!!a.call},Eb=function(a,b){if(!(2>arguments.length))for(var c=1,d=arguments.length;c<d;++c)a.push(arguments[c])},G=function(a,b){if(a.indexOf){var c=a.indexOf(b);return 0<c||0===c}for(c=0;c<a.length;c++)if(a[c]===b)return!0;return!1},Fb=function(a){Sa(Bb,"DOMContentLoaded",a)},Gb=function(a){a.google_unique_id?++a.google_unique_id:a.google_unique_id=
1},Hb=function(a){a=a.google_unique_id;return"number"==typeof a?a:0},Ib=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c},Jb=!!window.google_async_iframe_id,Kb=/(^| )adsbygoogle($| )/;var Lb,B,Mb="http"+("http:"==C.location.protocol?"":"s")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";Lb=new function(){this.T=Mb;this.U=.01;this.ca=Math.random()};B=new vb(Lb,"jserror",!0);var Nb=function(a,b,c,d){yb(B,a,c,d,b)},Ob=B.u,Pb=function(a,b){return zb(a,b)},Qb=function(a){return zb("aa:reactiveTag",a)};var Rb=null,Sb=function(){if(!Rb){for(var a=window,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,y(a))b=a;else break;Rb=b}return Rb};var I={ka:{j:"17415661",i:"17415662"},Ga:{j:"453848100",i:"453848101"},ta:{j:"828064124",i:"828064125"},sa:{j:"828064127",i:"828064128"},ua:{j:"828064170",i:"828064171"},ma:{j:"453848130",i:"453848131",Ea:"453848132",Fa:"453848133"},wa:{j:"24819308",i:"24819309",la:"24819320"},va:{j:"24819330",i:"24819331"},ya:{j:"828064162",i:"828064163"},xa:{j:"828064164",i:"828064165",oa:"828064166"},qa:{j:"86724438",i:"86724439"},ra:{j:"828064190",i:"828064191"},Aa:{j:"10573503",i:"10573504"},D:{j:"10573593",
i:"10573594"},Da:{j:"10573511",i:"10573512"},F:{j:"10573581",i:"10573582"},Ba:{j:"10573531",i:"10573532"},v:{j:"10573561",i:"10573562"},Ca:{j:"10573551",i:"10573552"},za:{j:"312815000",i:"312815001"},C:{j:"312815100",i:"312815101"},na:{j:"26835101",i:"26835102"},pa:{j:"35923720",i:"35923721"},G:{j:"35923760",i:"35923761"},Ha:{j:"27415001",i:"27415002"},H:{j:"20040000",i:"20040001"}};var J=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},Tb=function(a,b){var c=parseInt(a,10);return isNaN(c)?b:c},Ub=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},Vb=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Wb=function(a,b){if(!a)return b;var c=a.match(Vb);return c?c[0]:b};var Xb=J("0.15"),Yb=J("0.0"),Zb=Tb("101",-1),$b=Tb("10",0),ac=J("0.05"),bc=J("0.001"),cc=J("0.0"),dc=J(""),ec=J("0.001"),fc=J("0.2"),gc=Ub("true",
!0),hc=J(""),Ic=J("0.001"),Jc=J(""),Kc=J("0.01");var Lc=Ub("false",!1),Mc=Ub("false",!1),Nc=Mc||!Lc;var Oc=function(){},Qc=function(a,b,c){switch(typeof b){case "string":Pc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array||void 0!=b.length&&b.splice){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Qc(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],"function"!=typeof f&&(c.push(d),Pc(e,
c),c.push(":"),Qc(a,f,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Rc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Sc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Pc=function(a,b){b.push('"');b.push(a.replace(Sc,function(a){if(a in Rc)return Rc[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return Rc[a]=e+b.toString(16)}));
b.push('"')};var Tc=null,Uc=Ha||Ia||ya||"function"==typeof q.atob;var Vc={google_ad_modifications:!0,google_analytics_domain_name:!0,google_analytics_uacct:!0},Wc=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];Cb(a,function(a,d){if(null!=a){var e;try{var f=[];Qc(new Oc,a,f);e=f.join("")}catch(g){}e&&(e=e.replace(/\//g,"\\$&"),Eb(b,d,"=",e,";"))}});return b.join("")};var Xc={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4};var L=function(a){a=a.document;return("CSS1Compat"==a.compatMode?a.documentElement:a.body)||{}};var Yc=function(a,b,c){Nb("files::getSrc",Ob,function(){if("https:"==C.location.protocol&&"http"==c)throw c="https",Error("Requested url "+a+b);});return[c,"://",a,b].join("")},Zc=function(a,b,c){c||(c=Nc?"https":"http");return Yc(a,b,c)};var $c=null;var ad=function(a){this.s=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:r(this.ha,this)});this.ea=a.google_iframe_oncopy},bd;var M="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(M)&&(-1!=M.indexOf("&")&&(M=M.replace(ga,"&amp;")),-1!=M.indexOf("<")&&(M=M.replace(na,"&lt;")),-1!=M.indexOf(">")&&(M=M.replace(oa,"&gt;")),-1!=M.indexOf('"')&&(M=M.replace(pa,"&quot;")),-1!=M.indexOf("'")&&(M=M.replace(qa,"&#39;")),-1!=M.indexOf("\x00")&&(M=M.replace(ra,"&#0;")));bd=M;ad.prototype.set=function(a,b){this.ea.handlers[a]=b;this.s.addEventListener&&this.s.addEventListener("load",r(this.X,this,a),!1)};
ad.prototype.X=function(a){a=this.s.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};ad.prototype.ha=function(a,b){var c=cd("rx",a),d;a:{if(a&&(d=a.match("dt=([^&]+)"))&&2==d.length){d=d[1];break a}d=""}d=(new Date).getTime()-d;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>d?d+"":"M"));this.set(b,c);return c};var cd=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b};var N=function(a){return(a=a.google_ad_modifications)?a.loeids||[]:[]},dd=function(a,b,c){if(!a)return null;for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var ed=function(a,b){this.start=a<b?a:b;this.end=a<b?b:a};var fd=function(){var a;try{a=parseInt(C.localStorage.getItem("google_experiment_mod"),10)}catch(b){return null}if(0<=a&&1E3>a)return a;a=Math.floor(1E3*Va(C));try{return C.localStorage.setItem("google_experiment_mod",""+a),a}catch(b){return null}};var gd=new function(){this.aa=new ed(100,199)};var hd=function(a,b,c){return C.location&&C.location.hash=="#google_plle_"+c?c:z([b,c],a)},id=function(a,b,c,d){a=a.google_active_plles=a.google_active_plles||[];return G(N(b),c)?(a.push(c),c):G(N(b),d)?(a.push(d),d):null};var jd=!1,kd=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Eb(d,e+"="+a[e]);e="left:0;position:absolute;top:0;";jd&&(e=e+"width:"+b+"px;height:"+c+"px;");d.push('style="'+e+'"');d.push("></iframe>");a=a.id;b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px;background-color:transparent";return['<ins id="',a+"_expand",'" style="display:inline-table;',b,'"><ins id="',a+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var ld=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var md={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var nd="google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" "),od=function(a){try{var b=a.top.google_ads_params_store;if(b)return b;b=a.top.google_ads_params_store={};if(b===a.top.google_ads_params_store)return b}catch(c){}return null};var pd,R=function(a){this.B=[];this.s=a||window;this.o=0;this.A=null;this.S=0},qd=function(a,b){this.Y=a;this.ja=b};R.prototype.enqueue=function(a,b){0!=this.o||0!=this.B.length||b&&b!=window?this.K(a,b):(this.o=2,this.O(new qd(a,window)))};R.prototype.K=function(a,b){this.B.push(new qd(a,b||this.s));rd(this)};R.prototype.Z=function(a){this.o=1;if(a){var b=Pb("sjr::timeout",r(this.N,this,!0));this.A=this.s.setTimeout(b,a)}};
R.prototype.N=function(a){a&&++this.S;1==this.o&&(null!=this.A&&(this.s.clearTimeout(this.A),this.A=null),this.o=0);rd(this)};R.prototype.da=function(){return!(!window||!Array)};R.prototype.fa=function(){return this.S};R.prototype.nq=R.prototype.enqueue;R.prototype.nqa=R.prototype.K;R.prototype.al=R.prototype.Z;R.prototype.rl=R.prototype.N;R.prototype.sz=R.prototype.da;R.prototype.tc=R.prototype.fa;var rd=function(a){var b=Pb("sjr::tryrun",r(a.ga,a));a.s.setTimeout(b,0)};
R.prototype.ga=function(){if(0==this.o&&this.B.length){var a=this.B.shift();this.o=2;var b=Pb("sjr::run",r(this.O,this,a));a.ja.setTimeout(b,0);rd(this)}};R.prototype.O=function(a){this.o=0;a.Y()};
var sd=function(a){try{return a.sz()}catch(b){return!1}},td=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&sd(a)&&Db(a.nq)&&Db(a.nqa)&&Db(a.al)&&Db(a.rl)},ud=function(){if(pd&&sd(pd))return pd;var a=Sb(),b=a.google_jobrunner;return td(b)?pd=b:a.google_jobrunner=pd=new R(a)},vd=function(a,b){ud().nq(a,b)},wd=function(a,b){ud().nqa(a,b)};var S=function(a){this.name="TagError";this.message=a||"";Error.captureStackTrace?Error.captureStackTrace(this,S):this.stack=Error().stack||""};da(S,Error);
var xd=Jb?1==Hb(C):!Hb(C),yd=function(){var a=Mc?"https":"http",b=w("script"),c;c=Wb("","pagead2.googlesyndication.com");return["<",b,' src="',Zc(c,"/pagead/js/r20151008/r20150820/show_ads_impl.js",a),'"></',b,">"].join("")},zd=function(a,b,c,d){return function(){var e=!1;d&&ud().al(3E4);var f=a.document.getElementById(b);f&&!y(f.contentWindow)&&
3==a.google_top_js_status&&(a.google_top_js_status=6);try{var g=a.document.getElementById(b).contentWindow;if(y(g)){var k=a.document.getElementById(b).contentWindow,m=k.document;m.body&&m.body.firstChild||(m.open(),k.google_async_iframe_close=!0,m.write(c))}else{var l=a.document.getElementById(b).contentWindow,h;f=c;f=String(f);if(f.quote)h=f.quote();else{g=['"'];for(k=0;k<f.length;k++){var p=f.charAt(k),n=p.charCodeAt(0),m=g,V=k+1,K;if(!(K=sa[p])){var O;if(31<n&&127>n)O=p;else{var D=p;if(D in ta)O=
ta[D];else if(D in sa)O=ta[D]=sa[D];else{var x=D,E=D.charCodeAt(0);if(31<E&&127>E)x=D;else{if(256>E){if(x="\\x",16>E||256<E)x+="0"}else x="\\u",4096>E&&(x+="0");x+=E.toString(16).toUpperCase()}O=ta[D]=x}}K=O}m[V]=K}g.push('"');h=g.join("")}l.location.replace("javascript:"+h)}e=!0}catch(za){l=Sb().google_jobrunner,td(l)&&l.rl()}e&&(e=cd("google_async_rrc",c),(new ad(a)).set(b,zd(a,b,e,!1)))}},Ad=function(a){var b=["<iframe"];Cb(a,function(a,d){null!=a&&b.push(" "+d+'="'+a+'"')});b.push("></iframe>");
return b.join("")},Cd=function(a,b,c){Bd(a,b,c,function(a,b,f){for(var g=a.document,k=b.id,m=0;!k||g.getElementById(k);)k="aswift_"+m++;b.id=k;b.name=k;var k=Number(f.google_ad_width),m=Number(f.google_ad_height),l=I.G;id(f,a,l.j,l.i);jd=G(N(a),l.i);16==f.google_reactive_ad_format?(a=g.createElement("div"),a.innerHTML=kd(b,k,m),c.appendChild(a.firstChild)):c.innerHTML=kd(b,k,m);return b.id})},Bd=function(a,b,c,d){var e=w("script"),f,g;a:{try{var k=a.top.google_pubvars_reuse_experiment;if("undefined"!==
typeof k){g=k;break a}k=z(["C","E"],hc)||null;a.top.google_pubvars_reuse_experiment=k;if(a.top.google_pubvars_reuse_experiment===k){g=k;break a}}catch(ha){}g=null}if("E"===g){var m=null!=b.google_ad_client,l=null!=b.google_ad_width,h=null!=b.google_ad_height,p=od(a);if(p){for(var n=0;n<nd.length;n++){var V=nd[n];null!=b[V]&&(p[V]=b[V])}var K=od(a);if(K){var O=K.google_ad_width,D=K.google_ad_height,x=K.google_ad_format;if(O&&D&&x){var E,za=x&&x.match(/(\d+)x(\d+)/);E=za?{width:za[1],height:za[2]}:
null;!E||E.width==O&&E.height==D||delete K.google_ad_format}}}var cb=od(a);if(cb)for(var db=0;db<nd.length;db++){var Aa=nd[db];null==b[Aa]&&null!=cb[Aa]&&(b[Aa]=cb[Aa])}var ee=null!=b.google_ad_client,fe=null!=b.google_ad_width,ge=null!=b.google_ad_height;f=[m?"c2":ee?"c1":"c0",l?"w2":fe?"w1":"w0",h?"h2":ge?"h1":"h0"].join()}var F={},he=b.google_ad_height;F.width='"'+b.google_ad_width+'"';F.height='"'+he+'"';F.frameborder='"0"';F.marginwidth='"0"';F.marginheight='"0"';F.vspace='"0"';F.hspace='"0"';
F.allowtransparency='"true"';F.scrolling='"no"';F.allowfullscreen='"true"';F.onload='"'+bd+'"';var eb=d(a,F,b),Ba;Ba=Dd(b)?z(["c","e"],fc):null;var ic=b.google_ad_output,H=b.google_ad_format;H||"html"!=ic&&null!=ic||(H=b.google_ad_width+"x"+b.google_ad_height,"e"==Ba&&(H+="_as"),b.google_ad_format_suffix&&(H+=b.google_ad_format_suffix));var ie=!b.google_ad_slot||Dd(b),H=H&&ie?H.toLowerCase():"";b.google_ad_format=H;for(var jc=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,
b.google_ad_height],kc,lc=[],mc=0,ia=c;ia&&25>mc;ia=ia.parentNode,++mc)lc.push(9!=ia.nodeType&&ia.id||"");(kc=lc.join())&&jc.push(kc);b.google_ad_unit_key=Ib(jc.join(":")).toString();var nc=a.google_adk2_experiment=a.google_adk2_experiment||z(["C","E"],ec)||"N";if("E"==nc){for(var A=c,oc=[],pc=0;A&&25>pc;++pc){var Ca="",Ca=(Ca=9!=A.nodeType&&A.id)?"/"+Ca:"",fb;a:{if(A&&A.nodeName&&A.parentElement)for(var je=A.nodeName.toString().toLowerCase(),qc=A.parentElement.childNodes,rc=0,gb=0;gb<qc.length;++gb){var hb=
qc[gb];if(hb.nodeName&&hb.nodeName.toString().toLowerCase()==je){if(A==hb){fb="."+rc;break a}++rc}}fb=""}oc.push((A.nodeName&&A.nodeName.toString().toLowerCase())+Ca+fb);A=A.parentElement}var ke=oc.join()+":",W=a,sc=[];if(W)try{for(var ja=W.parent,tc=0;ja&&ja!=W&&25>tc;++tc){for(var uc=ja.frames,Da=0;Da<uc.length;++Da)if(W==uc[Da]){sc.push(Da);break}W=ja;ja=W.parent}}catch(ha){}b.google_ad_unit_key_2=Ib(ke+sc.join()).toString()}else"C"==nc&&(b.google_ad_unit_key_2="ctrl");var le=Wc(b),X=null,ib=z(["C",
"E"],Ic);if("E"==ib){a:{try{if(window.JSON&&window.JSON.stringify&&window.encodeURIComponent){var jb=encodeURIComponent(window.JSON.stringify(b)),kb;if(Uc)kb=q.btoa(jb);else{for(var P=[],vc=0,lb=0;lb<jb.length;lb++){for(var ka=jb.charCodeAt(lb);255<ka;)P[vc++]=ka&255,ka>>=8;P[vc++]=ka}if(!Tc){Tc={};for(var Ea=0;65>Ea;Ea++)Tc[Ea]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(Ea)}for(var Fa=Tc,wc=[],Q=0;Q<P.length;Q+=3){var xc=P[Q],yc=Q+1<P.length,zc=yc?P[Q+1]:0,Ac=Q+2<
P.length,Bc=Ac?P[Q+2]:0,me=xc>>2,ne=(xc&3)<<4|zc>>4,Cc=(zc&15)<<2|Bc>>6,Dc=Bc&63;Ac||(Dc=64,yc||(Cc=64));wc.push(Fa[me],Fa[ne],Fa[Cc],Fa[Dc])}kb=wc.join("")}X=kb;break a}ub(Lb,"sblob",{json:window.JSON?1:0,eURI:window.encodeURIComponent?1:0},!0,void 0,void 0)}catch(ha){B.u("sblob",ha,void 0,void 0)}X=""}X||(X="{X}")}else"C"==ib&&(X="{C}");var mb;var oe=b.google_ad_client,nb;if(nb=xd){if(!$c)b:{for(var ob=[C.top],pb=[],pe=0,la;la=ob[pe++];){pb.push(la);try{if(la.frames)for(var qe=la.frames.length,
qb=0;qb<qe&&1024>ob.length;++qb)ob.push(la.frames[qb])}catch(ha){}}for(var rb=0;rb<pb.length;rb++)try{var Ec=pb[rb].frames.google_esf;if(Ec){$c=Ec;break b}}catch(ha){}$c=null}nb=!$c}if(nb){var ma={style:"display:none"};ma["data-ad-client"]=ld(oe);ma.id="google_esf";ma.name="google_esf";ma.src=Zc(Wb("","googleads.g.doubleclick.net"),"/pagead/html/r20151008/r20150820/zrt_lookup.html");mb=Ad(ma)}else mb=
"";var sb=ea,Fc=(new Date).getTime(),Gc=a.google_top_experiment,tb=a.google_async_for_oa_experiment;tb&&(a.google_async_for_oa_experiment=void 0);var Hc=a.google_always_use_delayed_impressions_experiment,re=["<!doctype html><html><body>",mb,"<",e,">",le,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',eb,'";google_start_time=',sb,";",ib?'google_pub_vars = "'+X+'";':"",f?'google_pubvars_reuse_experiment_result = "'+f+'";':"",Gc?'google_top_experiment="'+
Gc+'";':"",tb?'google_async_for_oa_experiment="'+tb+'";':"",Hc?'google_always_use_delayed_impressions_experiment="'+Hc+'";':"",Ba?'google_append_as_for_format_override="'+Ba+'";':"","google_bpp=",Fc>sb?Fc-sb:1,";google_async_rrc=0;</",e,">",yd(),"</body></html>"].join("");(a.document.getElementById(eb)?vd:wd)(zd(a,eb,re,!0))},Ed=Math.floor(1E6*Math.random()),Fd=function(a){var b;try{b={};for(var c=a.data.split("\n"),d=0;d<c.length;d++){var e=c[d].indexOf("=");-1!=e&&(b[c[d].substr(0,e)]=c[d].substr(e+
1))}}catch(f){}c=b[3];if(b[1]==Ed&&(window.google_top_js_status=4,a.source==top&&0==c.indexOf(a.origin)&&(window.google_top_values=b,window.google_top_js_status=5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},Dd=function(a){return a.google_override_format||!md[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used},Gd=function(a,b){var c=navigator;if(gc&&a&&b&&c){var d=
a.document,c=d.createElement("script"),e=ld(b);c.async=!0;c.type="text/javascript";c.src=Zc("pagead2.googlesyndication.com","/pub-config/"+e+".js");d=d.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}};var T=function(a,b){this.M=a;this.L=b};T.prototype.minWidth=function(){return this.M};T.prototype.height=function(){return this.L};T.prototype.w=function(a){return 300<a&&300<this.L?this.M:1200<a?1200:Math.round(a)};var Hd={rectangle:1,horizontal:2,vertical:4,autorelaxed:1},U=function(a,b,c){T.call(this,a,b);this.ba=c};da(U,T);var Id=function(a){return function(b){return!!(b.ba&a)}},Jd=[new U(970,90,2),new U(728,90,2),new U(468,60,2),new U(336,280,1),new U(320,100,2),new U(320,50,2),new U(300,600,4),new U(300,250,1),new U(250,250,1),new U(234,60,2),new U(200,200,1),new U(180,150,1),new U(160,600,4),new U(125,125,1),new U(120,600,4),new U(120,240,4)];var Kd=function(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var f;f=$a(a[c[d]]);f=null===f?null:Math.round(f);null!=f&&(b[e]=f)}}},Ld=function(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(e){return null}},Md=function(a){var b=0,c;for(c in Hd)-1!=a.indexOf(c)&&(b|=Hd[c]);return b};var Nd=function(a){return function(b){return b.minWidth()<=a}},Pd=function(a,b,c){var d=a&&Od(c,b);return function(a){return!(d&&250<=a.height())}},Od=function(a,b){var c=Math.min(L(b).clientHeight,16*L(b).clientWidth/9),d=Ld(a,b);return(d?d.y:0)<c-100},Rd=function(a,b){var c=b,d=Infinity;do{var e=Qd(c,a,"height");e&&(d=Math.min(d,e));(e=Qd(c,a,"maxHeight"))&&(d=Math.min(d,e))}while((c=c.parentElement)&&"HTML"!=c.tagName);return d},Qd=function(a,b,c){if(a.style){var d=$a(a.style[c]);if(d)return d}if(a=
Ua(a,b))if(d=$a(a[c]))return d;return null};var Sd=function(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}},Td=function(a,b,c){for(var d=a.length,e=null,f=0;f<d;++f){var g=a[f];if(b(g)){if(!c||c(g))return g;null===e&&(e=g)}}return e};var Vd=function(a,b,c,d){var e=Jd.slice(0);if(G(N(c),I.F.i))for(var f=Math.random,g=e.length-1;0<g;g--){var k=Math.floor(f()*(g+1)),m=e[g];e[g]=e[k];e[k]=m}f=488>L(c).clientWidth;b=[Nd(a),Ud(f),Pd(f,c,d),Id(b)];e=Td(e,Sd(b));if(!e)throw new S("adsbygoogle.push() error: No slot size for availableWidth="+a);return e},Ud=function(a){return function(b){return!(320==b.minWidth()&&(a&&50==b.height()||!a&&100==b.height()))}};var Y=function(a,b){T.call(this,a,b)};da(Y,T);Y.prototype.w=function(a){return Math.min(1200,Math.round(a))};var Wd=[new Y(301,300),new Y(120,600)],Xd=[new Y(468,300),new Y(414,828),new Y(384,768),new Y(375,750),new Y(360,720),new Y(320,640),new Y(120,600)],Yd=function(a,b){var c=Td(a,Nd(b));if(!c)throw new S("adsbygoogle.push() error: No autorelaxed size for width="+b+"px");return c};var Zd=function(){return u("iPad")||u("Android")&&!u("Mobile")||u("Silk")};var $d=[{l:[3,0,0],m:[6,12,14,0,1,3,2,4,13,5,7,8,9,10,11,15]},{l:[3,0,1],m:[6,15,0,1,2,3,4,13,5,7,8,9,10,11,12,14]},{l:[3,0,2],m:[6,15,0,1,2,3,4,7,8,9,10,13,5,11,12,14]},{l:[3,1,0],m:[6,12,15,0,1,3,4,13,2,5,7,8,9,10,11,14]},{l:[3,1,1],m:[6,15,0,1,7,8,11,2,3,4,5,9,10,12,13,14]},{l:[3,1,2],m:[6,15,0,1,2,3,4,7,9,11,5,8,10,12,13,14]},{l:[3,2,0],m:[0,6,12,15,1,2,3,4,13,5,7,8,9,10,11,14]},{l:[3,2,1],m:[0,6,12,14,1,2,3,4,13,5,7,8,9,10,11,15]},{l:[3,2,2],m:[0,15,1,2,3,4,13,9,5,6,7,8,10,11,12,14]},{l:[2,0,
0],m:[6,15,0,1,3,2,7,8,10,13,9,4,5,11,12,14]},{l:[2,0,1],m:[6,15,0,1,2,3,7,8,4,10,9,13,5,11,12,14]},{l:[2,0,2],m:[0,15,1,2,3,4,7,8,13,5,6,9,10,11,12,14]},{l:[4,0,0],m:[6,12,14,15,0,1,7,2,8,11,9,3,4,5,10,13]},{l:[4,0,1],m:[6,12,14,0,1,2,3,4,7,8,11,13,5,9,10,15]},{l:[4,0,2],m:[6,15,0,1,2,3,5,7,8,13,9,4,10,11,12,14]}],ae=function(a,b,c){return"auto"==c?(b/=Math.min(1200,L(a).clientWidth),.6<b&&!(488>L(a).clientWidth)?2:.25>=b?4:3):Md(c)},be=function(a,b){var c=Rd(a,b);return function(a){return a.height()<=
c}},de=function(a,b,c,d,e){var f;a:{var g;g=!Zd()&&(u("iPod")||u("iPhone")||u("Android")||u("IEMobile"))?2:Zd()?4:3;f=Ld(d,c);g=[g,f&&3==g?83>f.x?0:265>f.x?1:2:0,ce(g,f)];for(f=0;f<$d.length;++f){var k=$d[f],m;b:if(m=k.l,g&&"number"==typeof g.length&&m&&"number"==typeof m.length&&g.length==m.length){for(var l=g.length,h=0;h<l;h++)if(g[h]!==m[h]){m=!1;break b}m=!0}else m=!1;if(m){f=k.m;break a}}throw Error("No format for "+g);}g=[];for(k=0;k<f.length;++k)g.push(Jd[f[k]]);f=488>L(c).clientWidth;a=[be(c,
d),Nd(a),Pd(f,c,d)];c=[];(e?c:a).push(Id(b));return Td(g,Sd(a),Sd(c))},ce=function(a,b){if(!b)return 0;var c=b.y;switch(a){case 2:return 285>c?0:1396>c?1:2;case 4:return 275>c?0:1057>c?1:2;default:return 216>c?0:838>c?1:2}};var Z=function(a,b){T.call(this,a,b)};da(Z,T);Z.prototype.w=function(){return this.minWidth()};var se=[new Z(728,15),new Z(468,15),new Z(200,90),new Z(180,90),new Z(160,90),new Z(120,90)];var te=function(a){return Kb.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")},ve=function(a,b){var c=window;a.setAttribute("data-adsbygoogle-status","done");ue(a,b,c)},ue=function(a,b,c){we(a,b,c);if(!xe(a,b,c)){if(b.google_reactive_ads_config){if(ye)throw new S("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");ye=!0}Gb(c);1==Hb(c)&&Gd(c,b.google_ad_client);Cb(Vc,function(a,d){b[d]=b[d]||c[d]});b.google_loader_used="aa";var d=b.google_ad_output;if(d&&
"html"!=d)throw new S("adsbygoogle.push() error: No support for google_ad_output="+d);Nb("aa::load",Ob,function(){Cd(c,b,a)})}},xe=function(a,b,c){var d=b.google_reactive_ads_config;if(d)var e=d.page_level_pubvars,f=(aa(e)?e:{}).google_tag_origin;var g=b.google_ad_slot,e=c.google_ad_modifications;!e||dd(e.ad_whitelist,g,f||b.google_tag_origin)?e=null:(f=e.space_collapsing||"none",e=(g=dd(e.ad_blacklist,g))?{I:!0,R:g.space_collapsing||f}:e.remove_ads_by_default?{I:!0,R:f}:null);return e&&e.I&&"on"!=
b.google_adtest?("slot"==e.R&&(null!==Za(a.getAttribute("width"))&&a.setAttribute("width",0),null!==Za(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0):!(e=Ua(a,c))||"none"!=e.display||"on"==b.google_adtest||0<b.google_reactive_ad_format||d?!1:(c.document.createComment&&a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0)},ze=function(a,b){var c;try{c=a.getBoundingClientRect()}catch(e){}if(!c||
0==c.left&&0==c.right&&0==c.width&&0==c.height)return!1;var d=Ua(a,b);if(!d)return!1;c=$a(d.width);d=$a(d.height);return null==c||null==d||md[c+"x"+d]?!1:!0},we=function(a,b,c){for(var d=a.attributes,e=d.length,f=0;f<e;f++){var g=d[f];if(/data-/.test(g.name)){var k=g.name.replace("data","google").replace(/-/g,"_");if(!b.hasOwnProperty(k)){var g=g.value,m={google_reactive_ad_format:Tb,google_allow_expandable_ads:Ub},g=m.hasOwnProperty(k)?m[k](g,null):g;null===g||(b[k]=g)}}}if(b.google_enable_content_recommendations&&
1==b.google_reactive_ad_format)b.google_ad_width=L(c).clientWidth,b.google_ad_height=50,a.style.display="none";else if(1==b.google_reactive_ad_format)b.google_ad_width=320,b.google_ad_height=50,a.style.display="none";else if(8==b.google_reactive_ad_format)b.google_ad_width=L(c).clientWidth||0,b.google_ad_height=L(c).clientHeight||0,a.style.display="none";else if(9==b.google_reactive_ad_format)b.google_ad_width=L(c).clientWidth||0,b.google_ad_height=L(c).clientHeight||0,a.style.display="none";else{d=
b.google_ad_format;d="autorelaxed"==d?G(N(c),I.C.i)?3:2:"auto"==d||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d)?G(N(c),I.D.i)||G(N(c),I.v.i)?5:1:"link"==d?4:void 0;if(e=!d)ze(a,c)?(e=I.v,id(b,c,e.j,e.i)!==e.i?e=!1:(b.google_ad_format="auto",e=!0)):e=!1;e&&(d=5);if(d){var l=d,h=I.D;id(b,c,h.j,h.i);h=I.F;id(b,c,h.j,h.i);"autorelaxed"==b.google_ad_format&&(h=I.C,id(b,c,h.j,h.i));h=a.offsetWidth;a:{var p=b.google_ad_format;switch(l){default:case 1:var n="auto"==p?.25>=h/Math.min(1200,L(c).clientWidth)?
4:3:Md(p);b&&(b.google_responsive_formats=n);c=Vd(h,n,c,a);break a;case 2:c=Yd(Wd,h);break a;case 3:c=Yd(Xd,h);break a;case 5:l=ae(c,h,p);b.google_responsive_formats=l;p=G(N(c),I.v.i);b:{d=a;do if((e=Ua(d,c))&&"fixed"==e.position){d=!1;break b}while(d=d.parentElement);d=!0}d&&(n=de(h,l,c,a,p));c=n||Vd(h,l,c,a);break a;case 4:c=Td(se,Nd(h));if(!c)throw new S("adsbygoogle.push() error: No link unit size for width="+h+"px");b.google_ad_format_suffix="_0ads_al";b.google_override_format=1}}b.google_ad_width=
c.w(h);b.google_ad_height=c.height();a.style.height=c.height()+"px";b.google_ad_resizable=!0;delete b.google_ad_format;b.google_loader_features_used=128}else{n=ze(a,c)?(n=z(["LC","LE"],dc))?"LE"==(b.google_responsive_override_logs_experiment=n):!1:!1;if(n)try{l=a.offsetWidth,p=de(l,ae(c,l,"auto"),c,a,!0),h=new va(p.w(l),p.height()),b.google_ember_w=h.width,b.google_ember_h=h.height}catch(V){b.google_ember_w=b.google_ember_h="e"}!Ya.test(b.google_ad_width)&&!Xa.test(a.style.width)||!Ya.test(b.google_ad_height)&&
!Xa.test(a.style.height)?(n=Ua(a,c),a.style.width=n.width,a.style.height=n.height,Kd(n,b),b.google_ad_width||(b.google_ad_width=a.offsetWidth),b.google_ad_height||(b.google_ad_height=a.offsetHeight),b.google_loader_features_used=256):(Kd(a.style,b),b.google_ad_output&&"html"!=b.google_ad_output||300!=b.google_ad_width||250!=b.google_ad_height||(n=a.style.width,a.style.width="100%",h=a.offsetWidth,a.style.width=n,b.google_available_width=h));h=b.google_ad_width;n=b.google_ad_height;h&&n&&!md[h+"x"+
n]&&(n=z("CD ED CA EA CW EW".split(" "),Yb))&&("CD"==n?b.google_overflowing_ads_experiment=n:((h=/W$/.test(n)&&728>h)||(h=/^E/.test(n),l=L(c),a&&a.getBoundingClientRect&&l&&l.getBoundingClientRect?(c=a.getBoundingClientRect(),l=l.getBoundingClientRect(),c=Math.round(Math.max(0,Math.min(c.right,l.right)-Math.max(c.left,l.left)))):c=0,160>c||15>b.google_ad_width-c?a=!1:(l=a.style.width||"",a.style.width="100%",p=a.offsetWidth,160>p||0>c-p?(a.style.width=l,a=!1):(h?(b.google_ad_width=c,a.style.width=
c+"px"):a.style.width=l,a=!0)),h=!a&&"ED"!=n),h||(b.google_overflowing_ads_experiment=n)))}}},Ae=function(a){for(var b=document.getElementsByTagName("ins"),c=0,d=b[c];c<b.length;d=b[++c])if(te(d)&&(!a||d.id==a))return d;return null},ye=!1,Be=function(a,b){var c={};Cb(Xc,function(b,d){a.hasOwnProperty(d)&&(c[d]=a[d])});aa(a.enable_page_level_ads)&&(c.page_level_pubvars=a.enable_page_level_ads);var d=document.createElement("ins");d.className="adsbygoogle";d.style.display="none";b?Bb.body.appendChild(d):
Bb.documentElement.appendChild(d);ve(d,{google_reactive_ads_config:c,google_ad_client:a.google_ad_client})},Ce=function(a){if(!Ta())throw new S("adsbygoogle.push() error: Page-level tag does not work inside iframes.");var b=G(N(C),I.H.i),c=!b;Bb.body||b?Be(a,c):Fb(Qb(function(){Be(a,c)}))},De=function(a,b,c,d){if(0==b.message.indexOf("TagError")){var e={};Ab(B,e,d);e.context=a;e.msg=b.message.substring(0,512);a=q.document;e.url=a.URL.substring(0,512);e.ref=a.referrer.substring(0,512);ub(Lb,"puberror",
e,!0,c||.01);return!1}return B.u(a,b,c,d)},Ee=function(a,b,c,d){return 0==b.message.indexOf("TagError")?!1:B.u(a,b,c,d)},Ge=function(a){var b={};Nb("aa::hqe",De,function(){Fe(a,b)},function(c){c.client=c.client||b.google_ad_client||a.google_ad_client;c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})},Fe=function(a,b){ea=(new Date).getTime();var c;a:{if(a.enable_page_level_ads){if("string"==typeof a.google_ad_client){c=!0;break a}throw new S("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
}c=!1}if(c)Ce(a);else{c=a.element;var d=a.params;d&&Cb(d,function(a,c){b[c]=a});if(c){if(!te(c)&&(c=c.id?Ae(c.id):null,!c))throw new S("adsbygoogle.push() error: 'element' has already been filled.");if(!("innerHTML"in c))throw new S("adsbygoogle.push() error: 'element' is not a good DOM element.");}else if(c=Ae(),!c)throw new S("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");ve(c,b)}},Ie=function(){Nb("aa::main",Ee,He)},He=function(){var a=
C.google_ad_modifications=C.google_ad_modifications||{};if(!a.plle){a.plle=!0;var a=a.loeids=a.loeids||[],b=I.D,c=b.i;if(C.location&&C.location.hash=="#google_plle_"+c)b=c;else{var b=[b.j,c],c=new ed(Zb,Zb+$b-1),d;(d=0>=$b||$b%b.length)||(d=gd.aa,d=!(d.start<=c.start&&d.end>=c.end));d?b=null:(d=fd(),b=null!==d&&c.start<=d&&c.end>=d?b[(d-Zb)%b.length]:null)}b&&a.push(b);b=I.C;(b=hd(ac,b.j,b.i))&&a.push(b);b=I.F;(b=hd(bc,b.j,b.i))&&a.push(b);b=I.v;(b=hd(cc,b.j,b.i))&&a.push(b);b=I.G;(b=hd(Jc,b.j,b.i))&&
a.push(b);b=I.H;(b=hd(Kc,b.j,b.i))&&a.push(b)}if(!window.google_top_experiment&&!window.google_top_js_status)if(a=window,2!==(a.top==a?0:y(a.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var e;try{e=C.top.frames.google_top_static_frame?!0:!1}catch(g){e=!1}if(e){if(window.google_top_experiment=z(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],Xb),"jp_c"!==window.google_top_experiment){Sa(window,"message",Fd);window.google_top_js_status=3;e={0:"google_loc_request",1:Ed};var a=[],f;
for(f in e)a.push(f+"="+e[f]);top.postMessage(a.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1;if((f=window.adsbygoogle)&&f.shift)for(a=20;(e=f.shift())&&0<a--;)try{Ge(e)}catch(g){throw window.setTimeout(Ie,0),g;}if(!f||!f.loaded){window.adsbygoogle={push:Ge,loaded:!0};f&&Je(f.onload);try{Object.defineProperty(window.adsbygoogle,"onload",{set:Je})}catch(g){}}},Je=function(a){Db(a)&&window.setTimeout(a,0)};Ie();}).call(this);