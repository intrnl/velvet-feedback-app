function _(t){let e=document.createElement("template");return e.innerHTML=t,e}function y(t){return t.content.cloneNode(!0)}function o(t,e){let l=t,n=0,a=e.length,s,r;for(;n<a;n++)for(s=e[n],l=l.firstChild,r=0;r<s;r++)l=l.nextSibling;return l}function T(t,e,l){if(t.replaceWith(e),l){let n=t.childNodes,a=n.length;for(;a--;)e.appendChild(n[0])}}function w(t,e){t.append(e)}function K(t,e){t.after(e)}function X(t,e){let l=t;if(e.nextSibling!==t)for(;l;){let n=l;if(l=l.nextSibling,n.remove(),n===e)break}}function E(t,e,l,n){t.addEventListener(e,l,n)}function v(t,e,l){t.setAttribute(e,l)}function g(t,e,l){t.classList.toggle(e,l)}var W=Object,_e=Symbol,P=Set,ye=/\B([A-Z])/g;function se(t){return t.replace(ye,"-$1").toLowerCase()}var ae=W.is,ke=W.assign,j=t=>typeof t=="function";var k=null,H=null,U=new P,I=null,re=[],A=null,F=class{parent=null;scopes=[];cleanups=[];constructor(e){let l=this;!e&&k&&(k.scopes.push(l),l.parent=k)}run(e){let l=k;try{return k=this,e()}finally{k=l}}clear(){let e=this,l=e.cleanups,n=e.scopes;for(let a of l)a();for(let a of n)a.parent=null,a.clear();l.length=0,n.length=0}},D=class{a;d=new P;b=new P;c=0;f=!1;e=!1;g=!1;constructor(e){this.a=e}peek(){let e=this;return e.e||Q(e),e.a}set(e){return this.value=e}subscribe(e){return f(()=>e(this.value))}get value(){let e=this;return e.e||Q(e),H&&(this.d.add(H),H.b.add(e),U.delete(e)),this.a}set value(e){let l=this;l.a!==e&&(l.a=e,B(()=>{I.add(l),this.c===0&&oe(l)}))}h(){}i(){let e=this,l=H,n=U;return H=e,U=e.b,e.b=new P,(a,s)=>{if(a)for(let r of e.d)ue(r);for(let r of U)(s?ce:we)(e,r);U.clear(),U=n,H=l}}};function oe(t){if(t.c++===0)for(let e of t.d)oe(e)}function ue(t){if(!t.f&&t.c>0&&--t.c===0)for(let e of t.d)ue(e)}function ie(t){for(let e of t)if(e.c>0&&(e.f=!0,--e.c===0)){if(e.g)continue;e.f=!1,e.g=!0,e.h(),e.g=!1,ie(e.d)}}function we(t,e){t.e=!0,t.b.add(e),e.d.add(t)}function ce(t,e){if(t.b.delete(e),e.d.delete(t),e.d.size===0){e.e=!1;for(let l of e.b)ce(e,l)}}function Ee(t){if(I&&I.delete(t),t.c=0,t.g=!0,t.h(),t.g=!1,A){let e=A;throw A=null,e}for(let e of t.d)e.c>0&&(e.c>1&&e.c--,re.push(e))}function Q(t){t.e=!0,Ee(t)}function Y(t){return new F(t)}function h(t){return new D(t)}function V(t){let e=new D(void 0);return e.h=()=>{let l=e.i();try{let n=t();l(e.a===n,!0),e.a=n}catch(n){A||(A=n),l(!0,!1)}},e}function B(t){if(I!==null)return t();let e=new P;I=e;try{return t()}finally{let l;for(;l=re.pop();)e.add(l);if(I=null,ie(e),A){let n=A;throw A=null,n}}}function f(t){let e=V(()=>B(t)),l=()=>e.i()(!0,!0);return Q(e),k&&k.cleanups.push(l),l}function C(t){k&&j(t)&&k.cleanups.push(t)}var Se=!1,$e=1;var R=null,ee=_e(),G=class extends HTMLElement{$m=!1;$c=Y(!0);$p={};$h=[];constructor(){super();let e=this,l=e.$p,n=e.constructor.$d;for(let a in n){let s=n[a];l[s]=h(ee)}}connectedCallback(){let e=this;if(!e.$m){e.$m=!0;let l=e.constructor.$c,n=e.constructor.$s,a=e.$c,s=e.$h,r=e.shadowRoot,u=!1;r||(r=e.attachShadow({mode:"open"}),u=!0);let c=R;try{if(R=e,a.run(()=>l(r,e)),document.adoptedStyleSheets)u&&(r.adoptedStyleSheets=n);else for(let p of n)w(r,p.cloneNode(!0));for(let p of s){let i=p();j(i)&&a.cleanups.push(i)}s.length=0}finally{R=c}}}disconnectedCallback(){let e=this;e.$m&&(e.$c.clear(),e.shadowRoot.innerHTML="",e.$m=!1)}attributeChangedCallback(e,l,n){let a=this,s=a.constructor.$d;e in s&&(a[s[e]]=n===""?!0:n)}};function S(t,e,l,n){let a=[],s=W.create(null);class r extends G{static observedAttributes=a;static $c=e;static $a=s;static $d=l;static $s=n}for(let u in l){let c=l[u],p=se(u);s[p]=u,a.push(p),W.defineProperty(r.prototype,u,{get(){return this.$p[c].a},set(i){this.$p[c].value=i}})}return Se&&(t="velvet-"+$e++),t&&customElements.define(t,r),r}function $(t){if(!document.adoptedStyleSheets){let l=document.createElement("style");return l.textContent=t,l}let e=new CSSStyleSheet;return e.replaceSync(t),e}function te(t,e){let l=R.$p[t];return l.value===ee&&(l.value=j(e)?e():e),l}function q(){let t=R;return(e,l)=>{let n=new CustomEvent(e,{detail:l,bubbles:!1});t.dispatchEvent(n)}}function le(t,e,l){let n=l&&V(l),a=e(t,n&&n.value);if(!!a&&(j(a.destroy)&&C(()=>a.destroy()),n&&n.b.size>0&&j(a.update))){let s=!1;f(()=>{let r=n.value;if(!s){s=!0;return}a.update(r)})}}function O(t,e){let l=document.createTextNode("");T(t,l),f(()=>l.data=e())}function fe(t,e){let l=Y(),n,a;f(()=>{let s=e();s!==n&&(a&&(l.clear(),de(t,a),a=null),n=s,s&&(a=l.run(()=>s(t))))})}function pe(t,e,l){let n=[];f(()=>{let a=l(),s=0,r=a.length,u=n.length;for(;s<r;s++)if(n[s]){let c=n[s][2];c.value=a[s]}else{let c=n[s-1],p=c?c[1]:t,i=h(a[s]),d=Y(!0);n[s]=[d,d.run(()=>e(p,i,s)),i]}if(u>r){let c=n[s-1],p=c?c[1]:t,i=n[u-1][1];for(;s<u;s++)n[s][0].clear();de(p,i),n.length=r}}),C(()=>{for(let a of n)a[0].clear()})}function Z(t){if(t instanceof D)return t;let e=h();return C(t.subscribe(l=>e.value=l)),e}function de(t,e){X(t.nextSibling,e)}var Ce=_("<div class=score> <button value=1>1</button> <button value=2>2</button> <button value=3>3</button> <button value=4>4</button> <button value=5>5</button> <button value=6>6</button> <button value=7>7</button> <button value=8>8</button> <button value=9>9</button> <button value=10>10</button> </div>"),Oe=$(".score{display:grid;grid-auto-flow:column;grid-auto-columns:36px;grid-auto-rows:36px;justify-content:space-around}.button{cursor:pointer;user-select:none;background-color:#e8e8f8;font-weight:600;border:0;border-radius:50%}.button:hover{background-color:#cecede}.button.selected{color:#fff;background-color:#4c4cc8}");function He(t,e){let l=q(),n=te(0,null);function a(z){let ne=z.target.value;if(ne){let xe=parseInt(ne);l("update:value",xe)}}let s=y(Ce),r=o(s,[0,1]),u=o(s,[0,3]),c=o(s,[0,5]),p=o(s,[0,7]),i=o(s,[0,9]),d=o(s,[0,11]),m=o(s,[0,13]),M=o(s,[0,15]),b=o(s,[0,17]),x=o(s,[0,19]),N=o(s,[0]);v(r,"class","button"),f(()=>g(r,"selected",n.value===1)),v(u,"class","button"),f(()=>g(u,"selected",n.value===2)),v(c,"class","button"),f(()=>g(c,"selected",n.value===3)),v(p,"class","button"),f(()=>g(p,"selected",n.value===4)),v(i,"class","button"),f(()=>g(i,"selected",n.value===5)),v(d,"class","button"),f(()=>g(d,"selected",n.value===6)),v(m,"class","button"),f(()=>g(m,"selected",n.value===7)),v(M,"class","button"),f(()=>g(M,"selected",n.value===8)),v(b,"class","button"),f(()=>g(b,"selected",n.value===9)),v(x,"class","button"),f(()=>g(x,"selected",n.value===10)),E(N,"click",a),w(t,s)}var he=S("x-score-selector",He,{value:0},[Oe]);function J(){return crypto.randomUUID()}var L=h([{id:J(),message:"The service is great!",score:10,date:new Date("2022-08-10T06:57:00Z")},{id:J(),message:"The service was okay",score:6,date:new Date("2022-07-20T13:00:00Z")}]);var Ue=_("<form> <label for=field>How would you rate our services?</label> <x></x> <div class=input-group> <input id=field type=text placeholder='The service is...' autofocus /> <button type=submit>Add</button> </div> <!> </form>"),Ie=_("<p class=error><!></p>"),Re=$("form{background-color:#fff;padding:16px;border-radius:4px}label{font-weight:600;display:block;margin-bottom:8px}.input-group{display:flex;gap:8px;margin-top:16px}button,input{height:36px;box-sizing:border-box;outline-width:2px;outline-color:#d42560}input{flex-grow:1;padding:4px 8px;border:1px solid #989898;border-radius:4px}button{cursor:pointer;user-select:none;color:#fff;background-color:#e25b88;padding:4px 16px;border:0;border-radius:4px;outline-offset:2px}button:hover{background-color:#ea86a7}.error{font-size:14px;color:#ed143d;margin:8px 0 0}");function je(t,e){let l=h(""),n=h(null),a=h(null),s=Z(L);function r(b){b.preventDefault();let x=l.value.trim();if(x.length<1){a.value="You need to fill out the feedback message!";return}if(n.value==null){a.value="You need to give a score!";return}let N={id:J(),message:x,score:n.value,date:new Date};L.set([N,...s.value]),l.value="",n.value=null,a.value=null}let u=y(Ue),c=new he,p=o(u,[0,3]),i=o(u,[0,5,1]),d=o(u,[0,7]),m=o(u,[0]),M=b=>{let x=y(Ie),N=o(x,[0,0]),z=o(x,[0]);return O(N,()=>a.value),K(b,x),z};f(()=>c.value=n.value),E(c,"update:value",b=>n.value=b.detail),T(p,c,!0),f(()=>i.value=l.value),E(i,"input",()=>l.value=i.value),fe(d,()=>a.value?M:null),E(m,"submit",r),w(t,u)}var me=S("x-feedback-form",je,{},[Re]);function Ye(t){let e=Math.abs(t);return e<1e3?[0,"second"]:e<6e4?[Math.trunc(t/1e3),"second"]:e<36e5?[Math.trunc(t/6e4),"minute"]:e<864e5?[Math.trunc(t/36e5),"hour"]:e<6048e5?[Math.trunc(t/864e5),"day"]:e<24192e5?[Math.trunc(t/6048e5),"week"]:e<290304e5?[Math.trunc(t/24192e5),"month"]:[Math.trunc(t/290304e5),"year"]}function Le(t){let e=Math.abs(t);return e<6e4?1e3:e<36e5?6e4:e<864e5?36e5:864e5}function be(t,e){let l=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),n,a=()=>{if(e==null){t.textContent="N/A",t.removeAttribute("datetime");return}let s=new Date(e),r=s.getTime(),u=Date.now(),c=r-u,[p,i]=Ye(c),d=l.format(p,i);t.textContent=d,t.setAttribute("datetime",s.toISOString()),n=setTimeout(a,Le(c))};return a(),{update(s){e=s,clearTimeout(n),a()},destroy(){clearTimeout(n)}}}var ze=_("<div class=aggregate> <span><!> feedback posted</span> <span><!> average rating</span> </div> <ul class=list> <!> </ul>"),Pe=_("<li class=item> <div class=body> <div class=header> <span>rated <!></span> <span>posted <time></time></span> </div> <p class=text><!></p> </div> <button class=delete-btn> <svg class=delete-icon fill=none viewBox='0 0 24 24' stroke=currentColor stroke-width=2> <path stroke-linecap=round stroke-linejoin=round d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'></path> </svg> </button> </li>"),Fe=$(".aggregate{color:#fff;display:flex;justify-content:space-between;gap:8px;padding:0 16px 8px}.list{list-style-type:none;padding:0;margin:0}.item{display:flex;gap:8px;background-color:#fff;padding:8px 12px 8px 16px;border-radius:4px}.item+.item{margin-top:8px}.body{flex-grow:1}.header{color:#656570;font-size:14px;display:flex;justify-content:space-between;gap:8px;margin-bottom:2px}.text{margin:0}.delete-btn{background-color:transparent;height:24px;width:24px;padding:0;margin:0;border:0;border-radius:4px}.delete-btn:hover{color:#fff;background-color:#ed143d}.delete-icon{height:16px;width:16px;vertical-align:middle}");function Ke(t,e){let l=Z(L);function n(i){L.set(l.value.filter(d=>d.id!==i.id))}let a=h(0);f(()=>{let i=0,d=l.value.length;if(!d)a.value=0;else{for(let b of l.value)i+=b.score;let m=i/d,M=Math.trunc(m*100)/100;a.value=M}});let s=y(ze),r=o(s,[0,1,0]),u=o(s,[0,3,0]),c=o(s,[2,1]),p=(i,d)=>{let m=y(Pe),M=o(m,[0,1,1,1,1]),b=o(m,[0,1,1,3,1]),x=o(m,[0,1,3,0]),N=o(m,[0,3]),z=o(m,[0]);return O(M,()=>d.value.score),le(b,be,()=>d.value.date),O(x,()=>d.value.message),E(N,"click",()=>n(d.value)),K(i,m),z};O(r,()=>l.value.length),O(u,()=>a.value),pe(c,p,()=>l.value),w(t,s)}var ve=S("x-feedback-list",Ke,{},[Fe]);var Be=_("<main> <x></x> <x></x> </main>"),We=$("main{display:flex;flex-direction:column;gap:16px;max-width:600px;margin:36px auto}");function Ge(t,e){let l=y(Be),n=new me,a=o(l,[0,1]),s=new ve,r=o(l,[0,3]);T(a,n,!0),T(r,s,!0),w(t,l)}var ge=S("x-app",Ge,{},[We]);var Ve=new ge;document.body.appendChild(Ve);
//# sourceMappingURL=app.js.map