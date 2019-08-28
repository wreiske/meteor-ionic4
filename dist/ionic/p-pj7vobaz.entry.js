import{r as s,c as t,w as i,d as e,h,e as r,H as n}from"./p-d7238df3.js";import{b as o}from"./p-bb99b659.js";import{s as a}from"./p-cae2ca23.js";const c=class{constructor(i){s(this,i),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=t(this,"ionRefresh",7),this.ionPull=t(this,"ionPull",7),this.ionStart=t(this,"ionStart",7)}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const s=this.el.closest("ion-content");s?this.scrollEl=await s.getScrollElement():console.error("ion-refresher did not attach, make sure the parent is an ion-content."),this.gesture=(await __sc_import_ionic("./p-2c4a5477.js")).createGesture({el:this.el.closest("ion-content"),gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:s=>this.onMove(s),onEnd:()=>this.onEnd()}),this.disabledChanged()}componentDidUnload(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.close(32,"120ms")}async cancel(){this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(s){if(!this.scrollEl)return;const t=s.event;if(t.touches&&t.touches.length>1)return;if(0!=(56&this.state))return;const i=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,e=s.deltaY*i;if(e<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(t.cancelable&&t.preventDefault(),this.setCss(e,"0ms",!0,""),0===e)return void(this.progress=0);const h=this.pullMin;this.progress=e/h,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),e<h?this.state=2:e>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(s,t){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=s,this.setCss(0,this.closeDuration,!0,t)}setCss(s,t,e,h){this.appliedStyles=s>0,i(()=>{if(this.scrollEl){const i=this.scrollEl.style;i.transform=s>0?`translateY(${s}px) translateZ(0px)`:"translateZ(0px)",i.transitionDuration=t,i.transitionDelay=h,i.overflow=e?"hidden":""}})}render(){const s=e(this);return h(n,{slot:"fixed",class:{[s]:!0,[`refresher-${s}`]:!0,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return r(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"}},l=class{constructor(t){s(this,t)}componentWillLoad(){if(void 0===this.pullingIcon&&(this.pullingIcon=o.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner){const s=e(this);this.refreshingSpinner=o.get("refreshingSpinner",o.get("spinner","ios"===s?"lines":"crescent"))}}render(){return h(n,{class:e(this)},h("div",{class:"refresher-pulling"},this.pullingIcon&&h("div",{class:"refresher-pulling-icon"},h("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&h("div",{class:"refresher-pulling-text",innerHTML:a(this.pullingText)})),h("div",{class:"refresher-refreshing"},this.refreshingSpinner&&h("div",{class:"refresher-refreshing-icon"},h("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&h("div",{class:"refresher-refreshing-text",innerHTML:a(this.refreshingText)})))}};export{c as ion_refresher,l as ion_refresher_content};