import{c as j,a as R,C as Q}from"./custom-button.76902637.js";import{n as D,m as F}from"./index.c4a4e560.js";var G={exports:{}};(function(l){(function(o,a,f){function h(t){var r=this,i=c();r.next=function(){var e=2091639*r.s0+r.c*23283064365386963e-26;return r.s0=r.s1,r.s1=r.s2,r.s2=e-(r.c=e|0)},r.c=1,r.s0=i(" "),r.s1=i(" "),r.s2=i(" "),r.s0-=i(t),r.s0<0&&(r.s0+=1),r.s1-=i(t),r.s1<0&&(r.s1+=1),r.s2-=i(t),r.s2<0&&(r.s2+=1),i=null}function m(t,r){return r.c=t.c,r.s0=t.s0,r.s1=t.s1,r.s2=t.s2,r}function v(t,r){var i=new h(t),e=r&&r.state,n=i.next;return n.int32=function(){return i.next()*4294967296|0},n.double=function(){return n()+(n()*2097152|0)*11102230246251565e-32},n.quick=n,e&&(typeof e=="object"&&m(e,i),n.state=function(){return m(i,{})}),n}function c(){var t=4022871197,r=function(i){i=String(i);for(var e=0;e<i.length;e++){t+=i.charCodeAt(e);var n=.02519603282416938*t;t=n>>>0,n-=t,n*=t,t=n>>>0,n-=t,t+=n*4294967296}return(t>>>0)*23283064365386963e-26};return r}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.alea=v})(j,l,!1)})(G);var B={exports:{}};(function(l){(function(o,a,f){function h(c){var t=this,r="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},c===(c|0)?t.x=c:r+=c;for(var i=0;i<r.length+64;i++)t.x^=r.charCodeAt(i)|0,t.next()}function m(c,t){return t.x=c.x,t.y=c.y,t.z=c.z,t.w=c.w,t}function v(c,t){var r=new h(c),i=t&&t.state,e=function(){return(r.next()>>>0)/4294967296};return e.double=function(){do var n=r.next()>>>11,s=(r.next()>>>0)/4294967296,u=(n+s)/(1<<21);while(u===0);return u},e.int32=r.next,e.quick=e,i&&(typeof i=="object"&&m(i,r),e.state=function(){return m(r,{})}),e}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.xor128=v})(j,l,!1)})(B);var E={exports:{}};(function(l){(function(o,a,f){function h(c){var t=this,r="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,c===(c|0)?t.x=c:r+=c;for(var i=0;i<r.length+64;i++)t.x^=r.charCodeAt(i)|0,i==r.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function m(c,t){return t.x=c.x,t.y=c.y,t.z=c.z,t.w=c.w,t.v=c.v,t.d=c.d,t}function v(c,t){var r=new h(c),i=t&&t.state,e=function(){return(r.next()>>>0)/4294967296};return e.double=function(){do var n=r.next()>>>11,s=(r.next()>>>0)/4294967296,u=(n+s)/(1<<21);while(u===0);return u},e.int32=r.next,e.quick=e,i&&(typeof i=="object"&&m(i,r),e.state=function(){return m(r,{})}),e}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.xorwow=v})(j,l,!1)})(E);var N={exports:{}};(function(l){(function(o,a,f){function h(c){var t=this;t.next=function(){var i=t.x,e=t.i,n,s;return n=i[e],n^=n>>>7,s=n^n<<24,n=i[e+1&7],s^=n^n>>>10,n=i[e+3&7],s^=n^n>>>3,n=i[e+4&7],s^=n^n<<7,n=i[e+7&7],n=n^n<<13,s^=n^n<<9,i[e]=s,t.i=e+1&7,s};function r(i,e){var n,s=[];if(e===(e|0))s[0]=e;else for(e=""+e,n=0;n<e.length;++n)s[n&7]=s[n&7]<<15^e.charCodeAt(n)+s[n+1&7]<<13;for(;s.length<8;)s.push(0);for(n=0;n<8&&s[n]===0;++n);for(n==8?s[7]=-1:s[n],i.x=s,i.i=0,n=256;n>0;--n)i.next()}r(t,c)}function m(c,t){return t.x=c.x.slice(),t.i=c.i,t}function v(c,t){c==null&&(c=+new Date);var r=new h(c),i=t&&t.state,e=function(){return(r.next()>>>0)/4294967296};return e.double=function(){do var n=r.next()>>>11,s=(r.next()>>>0)/4294967296,u=(n+s)/(1<<21);while(u===0);return u},e.int32=r.next,e.quick=e,i&&(i.x&&m(i,r),e.state=function(){return m(r,{})}),e}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.xorshift7=v})(j,l,!1)})(N);var H={exports:{}};(function(l){(function(o,a,f){function h(c){var t=this;t.next=function(){var i=t.w,e=t.X,n=t.i,s,u;return t.w=i=i+1640531527|0,u=e[n+34&127],s=e[n=n+1&127],u^=u<<13,s^=s<<17,u^=u>>>15,s^=s>>>12,u=e[n]=u^s,t.i=n,u+(i^i>>>16)|0};function r(i,e){var n,s,u,w,A,$=[],q=128;for(e===(e|0)?(s=e,e=null):(e=e+"\0",s=0,q=Math.max(q,e.length)),u=0,w=-32;w<q;++w)e&&(s^=e.charCodeAt((w+32)%e.length)),w===0&&(A=s),s^=s<<10,s^=s>>>15,s^=s<<4,s^=s>>>13,w>=0&&(A=A+1640531527|0,n=$[w&127]^=s+A,u=n==0?u+1:0);for(u>=128&&($[(e&&e.length||0)&127]=-1),u=127,w=4*128;w>0;--w)s=$[u+34&127],n=$[u=u+1&127],s^=s<<13,n^=n<<17,s^=s>>>15,n^=n>>>12,$[u]=s^n;i.w=A,i.X=$,i.i=u}r(t,c)}function m(c,t){return t.i=c.i,t.w=c.w,t.X=c.X.slice(),t}function v(c,t){c==null&&(c=+new Date);var r=new h(c),i=t&&t.state,e=function(){return(r.next()>>>0)/4294967296};return e.double=function(){do var n=r.next()>>>11,s=(r.next()>>>0)/4294967296,u=(n+s)/(1<<21);while(u===0);return u},e.int32=r.next,e.quick=e,i&&(i.X&&m(i,r),e.state=function(){return m(r,{})}),e}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.xor4096=v})(j,l,!1)})(H);var L={exports:{}};(function(l){(function(o,a,f){function h(c){var t=this,r="";t.next=function(){var e=t.b,n=t.c,s=t.d,u=t.a;return e=e<<25^e>>>7^n,n=n-s|0,s=s<<24^s>>>8^u,u=u-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-s|0,t.d=s<<16^n>>>16^u,t.a=u-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,c===Math.floor(c)?(t.a=c/4294967296|0,t.b=c|0):r+=c;for(var i=0;i<r.length+20;i++)t.b^=r.charCodeAt(i)|0,t.next()}function m(c,t){return t.a=c.a,t.b=c.b,t.c=c.c,t.d=c.d,t}function v(c,t){var r=new h(c),i=t&&t.state,e=function(){return(r.next()>>>0)/4294967296};return e.double=function(){do var n=r.next()>>>11,s=(r.next()>>>0)/4294967296,u=(n+s)/(1<<21);while(u===0);return u},e.int32=r.next,e.quick=e,i&&(typeof i=="object"&&m(i,r),e.state=function(){return m(r,{})}),e}a&&a.exports?a.exports=v:f&&f.amd?f(function(){return v}):this.tychei=v})(j,l,!1)})(L);var P={exports:{}};const O={},W=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),V=R(W);(function(l){(function(o,a,f){var h=256,m=6,v=52,c="random",t=f.pow(h,m),r=f.pow(2,v),i=r*2,e=h-1,n;function s(x,d,g){var _=[];d=d==!0?{entropy:!0}:d||{};var p=$(A(d.entropy?[x,X(a)]:x==null?q():x,3),_),y=new u(_),C=function(){for(var b=y.g(m),S=t,I=0;b<r;)b=(b+I)*h,S*=h,I=y.g(1);for(;b>=i;)b/=2,S/=2,I>>>=1;return(b+I)/S};return C.int32=function(){return y.g(4)|0},C.quick=function(){return y.g(4)/4294967296},C.double=C,$(X(y.S),a),(d.pass||g||function(b,S,I,T){return T&&(T.S&&w(T,y),b.state=function(){return w(y,{})}),I?(f[c]=b,S):b})(C,p,"global"in d?d.global:this==f,d.state)}function u(x){var d,g=x.length,_=this,p=0,y=_.i=_.j=0,C=_.S=[];for(g||(x=[g++]);p<h;)C[p]=p++;for(p=0;p<h;p++)C[p]=C[y=e&y+x[p%g]+(d=C[p])],C[y]=d;(_.g=function(b){for(var S,I=0,T=_.i,z=_.j,k=_.S;b--;)S=k[T=e&T+1],I=I*h+k[e&(k[T]=k[z=e&z+S])+(k[z]=S)];return _.i=T,_.j=z,I})(h)}function w(x,d){return d.i=x.i,d.j=x.j,d.S=x.S.slice(),d}function A(x,d){var g=[],_=typeof x,p;if(d&&_=="object")for(p in x)try{g.push(A(x[p],d-1))}catch(y){}return g.length?g:_=="string"?x:x+"\0"}function $(x,d){for(var g=x+"",_,p=0;p<g.length;)d[e&p]=e&(_^=d[e&p]*19)+g.charCodeAt(p++);return X(d)}function q(){try{var x;return n&&(x=n.randomBytes)?x=x(h):(x=new Uint8Array(h),(o.crypto||o.msCrypto).getRandomValues(x)),X(x)}catch(_){var d=o.navigator,g=d&&d.plugins;return[+new Date,o,g,o.screen,X(a)]}}function X(x){return String.fromCharCode.apply(0,x)}if($(f.random(),a),l.exports){l.exports=s;try{n=V}catch(x){}}else f["seed"+c]=s})(typeof self<"u"?self:j,[],Math)})(P);var U=G.exports,J=B.exports,K=E.exports,Y=N.exports,Z=H.exports,tt=L.exports,M=P.exports;M.alea=U;M.xor128=J;M.xorwow=K;M.xorshift7=Y;M.xor4096=Z;M.tychei=tt;var et=M;const nt={name:"choice",computed:{getChoiceBGClass(){if(this.correctIndex==null)return this.index===this.chosenIndex?"border-indigo-300":"border-gray-300";if(this.correctIndex===this.chosenIndex&&this.correctIndex===this.index)return"border-lime-400";if(this.chosenIndex===this.index)return"border-red-300"}},props:{correctIndex:{default:-1},index:{default:0},text:{default:null},chosenIndex:{default:null}},data(){return{letterArray:["A","B","C","D","E","F","G","H","I"]}},methods:{click(){this.correctIndex==null&&this.$emit("click")}}};var rt=function(){var o=this,a=o._self._c;return a("button",{staticClass:"flex justify-center border w-full bg-white flex-col items-center py-5 select-none",class:o.getChoiceBGClass,on:{click:o.click}},[o.correctIndex!=null?a("span",{staticClass:"absolute top-1 right-2"},[o.index===o.correctIndex?a("font-awesome-icon",{staticClass:"text-lime-400",attrs:{icon:"fa-solid fa-circle-check"}}):o._e()],1):o._e(),a("span",[o._v(" AWNSER "),a("span",{staticClass:"font-extrabold"},[o._v(o._s(o.letterArray[o.index]))])]),a("span",{staticClass:"font-semibold"},[o._v(" "+o._s(o.text)+" ")])])},it=[],ot=D(nt,rt,it,!1,null,"d99603bd",null,null);const st=ot.exports,ct={name:"multi-choice",components:{Choice:st,CustomButton:Q},computed:{...F({getDifficulty:"getDifficulty"}),getCorrectAnswerIndex(){if(!this.checkAnswers)return null;for(let l=0;l<this.choices.length;l++)if(this.choices[l]==this.question.correct_answer)return l}},watch:{question:{immediate:!0,handler:function(l,o){if(l==null)return;let a=[l.correct_answer,...l.incorrect_answers];this.choices=this.shuffleArray(a,this.question.uid);let f=this.$store.getters[`${this.getDifficulty.toLowerCase()}TriviaModuleState/getChoiceByIndex`];this.index==null?this.chosenIndex=f(this.$store.getters[`${this.getDifficulty.toLowerCase()}TriviaModuleState/getCurrentQuestionNumber`]):this.chosenIndex=f(this.index)}}},props:{checkAnswers:{default:!1},index:{default:null},question:{default:null}},data(){return{choices:null,chosenIndex:null}},methods:{setChoice(l){for(let o=0;o<this.choices.length;o++)if(l===o){this.chosenIndex=l,this.$store.dispatch(`${this.getDifficulty.toLowerCase()}TriviaModuleState/SET_CHOICE`,{index:this.$store.getters[`${this.getDifficulty.toLowerCase()}TriviaModuleState/getCurrentQuestionNumber`],chosenIndex:l});break}},shuffleArray(l,o){const a=et(this.$store.state.sessionToken+"-"+o);for(let f=l.length-1;f>0;f--){const h=Math.floor(a()*(f+1));[l[f],l[h]]=[l[h],l[f]]}return l},decodeHtml(l){let o=document.createElement("textarea");o.innerHTML=l;let a=o.value;return o.remove(),a}}};var at=function(){var o=this,a=o._self._c;return a("div",[o.question?a("div",{staticClass:"p-4 mb-4 bg-gray-100 rounded"},[a("span",{staticClass:"mb-2 inline-block font-bold"},[o._v(o._s(o.decodeHtml(o.question.question)))]),a("div",{staticClass:"lg:flex lg:space-x-4"},[o._l(o.choices,function(f,h){return[a("choice",{attrs:{index:h,correctIndex:o.getCorrectAnswerIndex,chosenIndex:o.chosenIndex,text:o.decodeHtml(f)},on:{click:function(m){return o.setChoice(h)}}})]})],2)]):o._e(),o._t("controls",null,{slotScope:{chosenIndex:o.chosenIndex}})],2)},ut=[],lt=D(ct,at,ut,!1,null,"fca2d9bf",null,null);const pt=lt.exports,ft={name:"score-counter",props:{time:{default:null},questionAmount:{default:50},currentQuestionNumber:{default:0},startWatch:{default:!0}},computed:{getStoreModuleName(){return`${this.$store.state.difficulty.toLowerCase()}TriviaModuleState/`},formattedTimer(){let l=this.timePassed%60;return`${Math.floor(this.timePassed/60)}:${l.toString().padStart(2,"0")}`}},data(){return{timePassed:0,timerInterval:null}},methods:{stopTimer(){clearInterval(this.timerInterval)},startTimer(){this.timerInterval=setInterval(()=>{this.$store.commit(`${this.getStoreModuleName}SET_TIME`,++this.timePassed)},1e3)}},mounted(){this.$nextTick(()=>{this.timePassed=this.$store.getters[`${this.getStoreModuleName}getTime`],this.startWatch?this.startTimer():this.stopTimer()})}};var xt=function(){var o=this,a=o._self._c;return a("div",{staticClass:"flex space-x-0 sm:space-x-4 relative flex-col sm:flex-row"},[a("div",{staticClass:"w-full flex justify-center p-4 mb-4 bg-gray-100 rounded"},[o._t("leftTitleArea",function(){return[a("span",[o._v("Questions: "+o._s(o.currentQuestionNumber+1)+" of "+o._s(o.questionAmount))])]})],2),a("div",{staticClass:"w-full flex justify-center p-4 mb-4 bg-gray-100 rounded"},[o._t("middleTitleArea")],2),a("div",{staticClass:"w-full flex justify-center p-4 mb-4 bg-gray-100 rounded"},[a("span",[o._v("Timer: "+o._s(o.formattedTimer))])])])},ht=[],dt=D(ft,xt,ht,!1,null,null,null,null);const _t=dt.exports;export{pt as M,_t as S,et as s};
