var __awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r["throw"](t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1d2520e4.system.js","./p-b50087dc.system.js","./p-af5b12d0.system.js"],function(t){"use strict";var e,n,r,i,o,a,u,s,c;return{setters:[function(t){e=t.r;n=t.d;r=t.h;i=t.H;o=t.e;a=t.c},function(){},function(t){u=t.h;s=t.o;c=t.c}],execute:function(){var l=t("ion_fab",function(){function t(t){var n=this;e(this,t);this.edge=false;this.activated=false;this.onClick=function(){var t=!!n.el.querySelector("ion-fab-list");var e=n.getFab();var r=e&&e.disabled;if(t&&!r){n.activated=!n.activated}}}t.prototype.activatedChanged=function(){var t=this.activated;var e=this.getFab();if(e){e.activated=t}Array.from(this.el.querySelectorAll("ion-fab-list")).forEach(function(e){e.activated=t})};t.prototype.componentDidLoad=function(){if(this.activated){this.activatedChanged()}};t.prototype.close=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){this.activated=false;return[2]})})};t.prototype.getFab=function(){return this.el.querySelector("ion-fab-button")};t.prototype.render=function(){var t;var e=this,o=e.horizontal,a=e.vertical,u=e.edge;var s=n(this);return r(i,{onClick:this.onClick,class:(t={},t[s]=true,t["fab-horizontal-"+o]=o!==undefined,t["fab-vertical-"+a]=a!==undefined,t["fab-edge"]=u,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"},enumerable:true,configurable:true});return t}());var f=t("ion_fab_button",function(){function t(t){var n=this;e(this,t);this.activated=false;this.disabled=false;this.routerDirection="forward";this.show=false;this.translucent=false;this.type="button";this.onFocus=function(){n.ionFocus.emit()};this.onBlur=function(){n.ionBlur.emit()};this.ionFocus=a(this,"ionFocus",7);this.ionBlur=a(this,"ionBlur",7)}t.prototype.render=function(){var t;var e=this;var o=this,a=o.el,l=o.disabled,f=o.color,b=o.href,h=o.activated,d=o.show,v=o.translucent,p=o.size;var y=u("ion-fab-list",a);var g=n(this);var m=b===undefined?"button":"a";var w=m==="button"?{type:this.type}:{download:this.download,href:b,rel:this.rel,target:this.target};return r(i,{"aria-disabled":l?"true":null,class:Object.assign({},c(f),(t={},t[g]=true,t["fab-button-in-list"]=y,t["fab-button-translucent-in-list"]=y&&v,t["fab-button-close-active"]=h,t["fab-button-show"]=d,t["fab-button-disabled"]=l,t["fab-button-translucent"]=v,t["ion-activatable"]=true,t["ion-focusable"]=true,t["fab-button-"+p]=p!==undefined,t))},r(m,Object.assign({},w,{class:"button-native",disabled:l,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(t){return s(b,t,e.routerDirection)}}),r("span",{class:"close-icon"},r("ion-icon",{name:"close",lazy:false})),r("span",{class:"button-inner"},r("slot",null)),g==="md"&&r("ion-ripple-effect",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--transition:0.2s transform cubic-bezier(0.25,1.11,0.78,1.59)}:host,:host(.activated){--box-shadow:0 4px 16px rgba(0,0,0,0.12)}:host(.activated){--transform:scale(1.1);--transition:0.2s transform ease-out}.close-icon,::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9);--color:var(--ion-color-light-contrast,#000);--color-activated:var(--ion-color-light-contrast,#000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms,opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb,56,128,255),0.9);--background-hover:rgba(var(--ion-color-primary-rgb,56,128,255),0.8);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb,244,245,248),0.9);--background-hover:rgba(var(--ion-color-light-rgb,244,245,248),0.8);--background-focused:rgba(var(--ion-color-light-rgb,244,245,248),0.82)}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){\@media (any-hover:hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb),.9)}:host(.ion-color.activated.fab-button-translucent) .button-native,:host(.ion-color.ion-focused.fab-button-translucent) .button-native{background:var(--ion-color-base)}}"},enumerable:true,configurable:true});return t}());var b=t("ion_fab_list",function(){function t(t){e(this,t);this.activated=false;this.side="bottom"}t.prototype.activatedChanged=function(t){var e=Array.from(this.el.querySelectorAll("ion-fab-button"));var n=t?30:0;e.forEach(function(e,r){setTimeout(function(){return e.show=t},r*n)})};t.prototype.render=function(){var t;var e=n(this);return r(i,{class:(t={},t[e]=true,t["fab-list-active"]=this.activated,t["fab-list-side-"+this.side]=true,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}"},enumerable:true,configurable:true});return t}())}}});