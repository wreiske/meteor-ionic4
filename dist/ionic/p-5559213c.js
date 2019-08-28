const n=(n,i,t)=>{n.style.setProperty(i,t)},i=(n,i)=>{n.style.removeProperty(i)},t=[],a=(n=[],i)=>{if(void 0!==i){const t=Array.isArray(i)?i:[i];return[...n,...t]}return n},e=()=>{let e,o,r,l,s,m,d,u,f,c,v,y,p,A=[],g=[],$=[],b=!1,F={},k=[],C=[],S={},h=0,q=!1,E=!1,T=!0,w=!1,R=!0;const D=[],W=[],I=[],M=[],x=[],K=[],O=[],P=[],j=[],z=[],B="function"==typeof window.Animation,G=()=>z,H=()=>{N(),Q()},J=(n,i)=>((i&&i.oneTimeCallback?W:D).push({callback:n,opts:i}),p),L=()=>(D.length=0,W.length=0,p),N=()=>{B?(G().forEach(n=>{n.cancel()}),z.length=0):I.forEach(n=>{i(n,"animation-name"),i(n,"animation-duration"),i(n,"animation-timing-function"),i(n,"animation-iteration-count"),i(n,"animation-delay"),i(n,"animation-play-state"),i(n,"animation-fill-mode"),i(n,"animation-direction")})},Q=()=>{x.forEach(n=>{n.parentNode.removeChild(n)}),x.length=0},U=()=>void 0!==s?s:d?d.getFill():void 0,V=()=>void 0!==f?f:void 0!==m?m:d?d.getDirection():void 0,X=()=>q?"linear":void 0!==r?r:d?d.getEasing():void 0,Y=()=>E?0:void 0!==c?c:void 0!==o?o:d?d.getDuration():void 0,Z=()=>void 0!==l?l:d?d.getIterations():void 0,_=()=>void 0!==v?v:void 0!==e?e:d?d.getDelay():void 0,nn=()=>{0!==h&&0==--h&&((()=>{sn(),P.forEach(n=>{n()}),j.forEach(n=>{n()}),(()=>{const i=k,t=C,a=S;I.forEach(e=>{const o=e.classList;o.add(...i),o.remove(...t);for(const i in a)a.hasOwnProperty(i)&&n(e,i,a[i])})})();const i=T;D.forEach(n=>{n.callback(i,p)}),W.forEach(n=>{n.callback(i,p)}),W.length=0,R=!0,w=!0})(),d&&d.animationFinish())},tn=(i=!0)=>{K.forEach(n=>{n()}),O.forEach(n=>{n()}),(()=>{const i=g,t=$,a=F;I.forEach(e=>{const o=e.classList;o.add(...i),o.remove(...t);for(const i in a)a.hasOwnProperty(i)&&n(e,i,a[i])})})(),A.length>0&&(B?(I.forEach(n=>{const i=n.animate(A,{delay:_(),duration:Y(),easing:X(),iterations:Z(),fill:U(),direction:V()});i.pause(),z.push(i)}),G().length>0&&(z[0].onfinish=()=>{nn()})):((i=!0)=>{Q(),I.forEach(a=>{if(A.length>0){const e=((n=[])=>n.map(n=>{const i=n.offset,t=[];for(const i in n)n.hasOwnProperty(i)&&"offset"!==i&&t.push(`${i}: ${n[i]};`);return`${100*i}% { ${t.join(" ")} }`}).join(" "))(A),o=((n,i,t)=>{const a=(n=>{const i=n.getRootNode();return i.head||i})(t),e=a.querySelector("#"+n);if(e)return e;const o=(t.ownerDocument||document).createElement("style");return o.id=n,o.innerHTML=`@keyframes ${n} { ${i} } @keyframes ${n}-alt { ${i} }`,a.appendChild(o),o})(y=(n=>{let i=t.indexOf(n);return i<0&&(i=t.push(n)-1),`ion-animation-${i}`})(e),e,a);x.push(o),n(a,"animation-duration",void 0!==Y()?`${Y()}ms`:null),n(a,"animation-timing-function",X()||null),n(a,"animation-delay",void 0!==_()?`${_()}ms`:null),n(a,"animation-fill-mode",U()||null),n(a,"animation-direction",V()||null);const r=void 0!==Z()?Z()===1/0?"infinite":Z().toString():null;n(a,"animation-iteration-count",r),n(a,"animation-play-state","paused"),i&&n(a,"animation-name",`${o.id}-alt`),requestAnimationFrame(()=>{n(a,"animation-name",o.id||null)})}})})(i)),b=!0},an=i=>{if(i=Math.min(Math.max(i,0),.999),B)G().forEach(n=>{n.currentTime=n.effect.getComputedTiming().delay+Y()*i,n.pause()});else{const t=`-${(_()||0)+Y()*i}ms`;I.forEach(i=>{A.length>0&&(n(i,"animation-delay",t),n(i,"animation-play-state","paused"))})}},en=(i=!0)=>{I.forEach(t=>{requestAnimationFrame(()=>{n(t,"animation-name",y||null),n(t,"animation-duration",void 0!==Y()?`${Y()}ms`:null),n(t,"animation-timing-function",X()||null),n(t,"animation-delay",void 0!==_()?`${_()}ms`:null),n(t,"animation-fill-mode",U()||null),n(t,"animation-direction",V()||null);const a=void 0!==Z()?Z()===1/0?"infinite":Z().toString():null;n(t,"animation-iteration-count",a),i&&n(t,"animation-name",`${y}-alt`),requestAnimationFrame(()=>{n(t,"animation-name",y||null)})})})},on=(n=!1,i=!0)=>(n&&M.forEach(i=>{i.update(n)}),B?G().forEach(n=>{n.effect.updateTiming({delay:_(),duration:Y(),easing:X(),iterations:Z(),fill:U(),direction:V()})}):en(i),p),rn=()=>{b&&(B?G().forEach(n=>{n.pause()}):I.forEach(i=>{n(i,"animation-play-state","paused")}))},ln=()=>{u=void 0,nn()},sn=()=>{u&&clearTimeout(u)},mn=()=>(b||tn(),w&&(B?an(0):en(),w=!1),R&&(h=M.length+1,R=!1),M.forEach(n=>{n.play()}),B?(G().forEach(n=>{n.play()}),0!==A.length&&0!==I.length||nn()):(()=>{if(sn(),I.forEach(i=>{A.length>0&&requestAnimationFrame(()=>{n(i,"animation-play-state","running")})}),0===A.length||0===I.length)nn();else{const n=_()||0,t=Y()||0;u=setTimeout(ln,n+t+100),(n=>{let t;const a={passive:!0},e=a=>{n===a.target&&(t&&t(),sn(),requestAnimationFrame(()=>{I.forEach(n=>{i(n,"animation-duration"),i(n,"animation-delay"),i(n,"animation-play-state")}),requestAnimationFrame(()=>{nn()})}))};n&&(n.addEventListener("webkitAnimationEnd",e,a),n.addEventListener("animationend",e,a),t=()=>{n.removeEventListener("webkitAnimationEnd",e,a),n.removeEventListener("animationend",e,a)})})(I[0])}})(),p),dn=(n,i)=>{const t=A[0];return null==t||void 0!==t.offset&&0!==t.offset?A=[{offset:0,[n]:i},...A]:t[n]=i,p};return p={parentAnimation:d,elements:I,childAnimations:M,animationFinish:nn,from:dn,to:(n,i)=>{const t=A[A.length-1];return null==t||void 0!==t.offset&&1!==t.offset?A=[...A,{offset:1,[n]:i}]:t[n]=i,p},fromTo:(n,i,t)=>dn(n,i).to(n,t),parent:n=>(d=n,p),play:mn,playAsync:()=>new Promise(n=>(J(n,{oneTimeCallback:!0}),mn(),p)),playSync:()=>(E=!0,J(()=>E=!1,{oneTimeCallback:!0}),mn(),p),pause:()=>(M.forEach(n=>{n.pause()}),rn(),p),stop:()=>(M.forEach(n=>{n.stop()}),b&&(H(),b=!1),p),destroy:()=>(H(),I.length=0,M.length=0,A.length=0,L(),b=!1,R=!0,M.forEach(n=>{n.destroy()}),p),keyframes:n=>(A=n,p),addAnimation:n=>{if(null!=n){const i=p,t=n;if(t.length>=0)for(const n of t)n.parent(i),M.push(n);else n.parent(i),M.push(n)}return p},addElement:n=>{if(null!=n)if(1===n.nodeType)I.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)I.push(n[i]);else console.error("Invalid addElement value");return p},update:on,fill:n=>(s=n,on(!0),p),direction:n=>(m=n,on(!0),p),iterations:n=>(l=n,on(!0),p),duration:n=>(o=n,on(!0),p),easing:n=>(r=n,on(!0),p),delay:n=>(e=n,on(!0),p),getWebAnimations:G,getKeyframes:()=>A,getFill:U,getDirection:V,getDelay:_,getIterations:Z,getEasing:X,getDuration:Y,afterAddRead:n=>(P.push(n),p),afterAddWrite:n=>(j.push(n),p),afterClearStyles:(n=[])=>{for(const i of n)S[i]="";return p},afterStyles:(n={})=>(S=n,p),afterRemoveClass:n=>(C=a(C,n),p),afterAddClass:n=>(k=a(k,n),p),beforeAddRead:n=>(K.push(n),p),beforeAddWrite:n=>(O.push(n),p),beforeClearStyles:(n=[])=>{for(const i of n)F[i]="";return p},beforeStyles:(n={})=>(F=n,p),beforeRemoveClass:n=>($=a($,n),p),beforeAddClass:n=>(g=a(g,n),p),onFinish:J,clearOnFinish:L,progressStart:(n=!1)=>(M.forEach(i=>{i.progressStart(n)}),rn(),q=n,b?(on(),an(0)):tn(),p),progressStep:n=>(M.forEach(i=>{i.progressStep(n)}),void 0!==Y()&&an(n),p),progressEnd:(n,i,t)=>(q=!1,M.forEach(a=>{a.progressEnd(n,i,t)}),void 0!==t&&(c=t),w=!1,T=n,n?B||(v=i*Y()*-1,on(!1,!1)):(f="reverse"===V()?"normal":"reverse",B?(on(),an(1-i)):(v=(1-i)*Y()*-1,on(!1,!1))),J(()=>{T=!0,c=void 0,f=void 0,v=void 0},{oneTimeCallback:!0}),d||mn(),p)}};export{e as c};