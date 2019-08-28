System.register(["./p-905de140.system.js","./p-45890bdd.system.js","./p-ccb6e6da.system.js","./p-af5b12d0.system.js","./p-395e62d3.system.js"],function(e){"use strict";var t,r,n,i,a,s,o,l,u,d,c,p,h,f;return{setters:[function(e){t=e.r;r=e.d;n=e.c;i=e.h;a=e.H;s=e.e},function(){},function(e){o=e.B;l=e.i;u=e.d;d=e.e;c=e.f;p=e.s},function(e){h=e.g},function(e){f=e.s}],execute:function(){var b=function(e,t){var r=new e;var n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper"));n.fromTo("opacity",.01,.3);i.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var a=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(i);return Promise.resolve(a)};var v=function(e,t){var r=new e;var n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper"));n.fromTo("opacity",.3,0);i.fromTo("opacity",.99,0).fromTo("scale",1,.9);var a=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(i);return Promise.resolve(a)};var m=function(e,t){var r=new e;var n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper"));n.fromTo("opacity",.01,.32);i.fromTo("opacity",.01,1).fromTo("scale",.9,1);return Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(i))};var y=function(e,t){var r=new e;var n=new e;n.addElement(t.querySelector("ion-backdrop"));var i=new e;i.addElement(t.querySelector(".alert-wrapper"));n.fromTo("opacity",.32,0);i.fromTo("opacity",.99,0);return Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(i))};var k=function(){function e(e){var i=this;t(this,e);this.processedInputs=[];this.processedButtons=[];this.presented=false;this.mode=r(this);this.keyboardClose=true;this.buttons=[];this.inputs=[];this.backdropDismiss=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){i.dismiss(undefined,o)};this.dispatchCancelHandler=function(e){var t=e.detail.role;if(l(t)){var r=i.processedButtons.find(function(e){return e.role==="cancel"});i.callButtonHandler(r)}};this.didPresent=n(this,"ionAlertDidPresent",7);this.willPresent=n(this,"ionAlertWillPresent",7);this.willDismiss=n(this,"ionAlertWillDismiss",7);this.didDismiss=n(this,"ionAlertDidDismiss",7)}e.prototype.buttonsChanged=function(){var e=this.buttons;this.processedButtons=e.map(function(e){return typeof e==="string"?{text:e,role:e.toLowerCase()==="cancel"?"cancel":undefined}:e})};e.prototype.inputsChanged=function(){var e=this;var t=this.inputs;var r=new Set(t.map(function(e){return e.type}));if(r.has("checkbox")&&r.has("radio")){console.warn("Alert cannot mix input types: "+Array.from(r.values()).join("/")+". Please see alert docs for more info.")}this.inputType=r.values().next().value;this.processedInputs=t.map(function(t,r){return{type:t.type||"text",name:t.name||""+r,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-"+e.overlayIndex+"-"+r,handler:t.handler,min:t.min,max:t.max}})};e.prototype.componentWillLoad=function(){this.inputsChanged();this.buttonsChanged()};e.prototype.present=function(){return u(this,"alertEnter",b,m)};e.prototype.dismiss=function(e,t){return d(this,e,t,"alertLeave",v,y)};e.prototype.onDidDismiss=function(){return c(this.el,"ionAlertDidDismiss")};e.prototype.onWillDismiss=function(){return c(this.el,"ionAlertWillDismiss")};e.prototype.rbClick=function(e){for(var t=0,r=this.processedInputs;t<r.length;t++){var n=r[t];n.checked=n===e}this.activeId=e.id;p(e.handler,e);this.el.forceUpdate()};e.prototype.cbClick=function(e){e.checked=!e.checked;p(e.handler,e);this.el.forceUpdate()};e.prototype.buttonClick=function(e){var t=e.role;var r=this.getValues();if(l(t)){return this.dismiss({values:r},t)}var n=this.callButtonHandler(e,r);if(n!==false){return this.dismiss(Object.assign({values:r},n),e.role)}return Promise.resolve(false)};e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var r=p(e.handler,t);if(r===false){return false}if(typeof r==="object"){return r}}return{}};e.prototype.getValues=function(){if(this.processedInputs.length===0){return undefined}if(this.inputType==="radio"){var e=this.processedInputs.find(function(e){return!!e.checked});return e?e.value:undefined}if(this.inputType==="checkbox"){return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value})}var t={};this.processedInputs.forEach(function(e){t[e.name]=e.value||""});return t};e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}};e.prototype.renderCheckbox=function(e){var t=this;var n=this.processedInputs;var a=r(this);if(n.length===0){return null}return i("div",{class:"alert-checkbox-group","aria-labelledby":e},n.map(function(e){return i("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":""+e.checked,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button ion-focusable"},i("div",{class:"alert-button-inner"},i("div",{class:"alert-checkbox-icon"},i("div",{class:"alert-checkbox-inner"})),i("div",{class:"alert-checkbox-label"},e.label)),a==="md"&&i("ion-ripple-effect",null))}))};e.prototype.renderRadio=function(e){var t=this;var r=this.processedInputs;if(r.length===0){return null}return i("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},r.map(function(e){return i("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":""+e.checked,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio ion-focusable",role:"radio"},i("div",{class:"alert-button-inner"},i("div",{class:"alert-radio-icon"},i("div",{class:"alert-radio-inner"})),i("div",{class:"alert-radio-label"},e.label)))}))};e.prototype.renderInput=function(e){var t=this.processedInputs;if(t.length===0){return null}return i("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return i("div",{class:"alert-input-wrapper"},i("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))};e.prototype.renderAlertButtons=function(){var e=this;var t=this.processedButtons;var n=r(this);var a={"alert-button-group":true,"alert-button-group-vertical":t.length>2};return i("div",{class:a},t.map(function(t){return i("button",{type:"button",class:g(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},i("span",{class:"alert-button-inner"},t.text),n==="md"&&i("ion-ripple-effect",null))}))};e.prototype.render=function(){var e;var t=this,n=t.overlayIndex,s=t.header,o=t.subHeader;var l=r(this);var u="alert-"+n+"-hdr";var d="alert-"+n+"-sub-hdr";var c="alert-"+n+"-msg";var p;if(s!==undefined){p=u}else if(o!==undefined){p=d}return i(a,{role:"dialog","aria-modal":"true",style:{zIndex:""+(2e4+n)},class:Object.assign({},h(this.cssClass),(e={},e[l]=true,e["alert-translucent"]=this.translucent,e)),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},i("ion-backdrop",{tappable:this.backdropDismiss}),i("div",{class:"alert-wrapper"},i("div",{class:"alert-head"},s&&i("h2",{id:u,class:"alert-title"},s),o&&i("h2",{id:d,class:"alert-sub-title"},o)),i("div",{id:c,class:"alert-message",innerHTML:f(this.message)}),this.renderAlertInputs(p),this.renderAlertButtons()))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.alert-button-inner.sc-ion-alert-ios, .alert-tappable.sc-ion-alert-ios{display:-ms-flexbox;display:flex;width:100%}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"},enumerable:true,configurable:true});return e}();e("ion_alert",k);var g=function(e){return Object.assign({"alert-button":true,"ion-focusable":true,"ion-activatable":true},h(e.cssClass))}}}});