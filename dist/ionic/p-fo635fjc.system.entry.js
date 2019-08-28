var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(o,s){function a(t){try{r(n.next(t))}catch(t){s(t)}}function u(t){try{r(n["throw"](t))}catch(t){s(t)}}function r(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(a,u)}r((n=n.apply(t,e||[])).next())})};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,o,s,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return r([t,e])}}function r(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(s=a[0]&2?o["return"]:a[0]?o["throw"]||((s=o["return"])&&s.call(o),0):o.next)&&!(s=s.call(o,a[1])).done)return s;if(o=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(a[0]===6&&i.label<s[1]){i.label=s[1];s=a;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(a);break}if(s[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t];o=0}finally{n=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-1d2520e4.system.js","./p-b50087dc.system.js","./p-af5b12d0.system.js","./p-2a88194b.system.js"],function(t){"use strict";var e,i,n,o,s,a,u,r,l;return{setters:[function(t){e=t.r;i=t.c;n=t.d;o=t.h;s=t.H;a=t.e},function(){},function(t){u=t.c},function(t){r=t.d;l=t.f}],execute:function(){var h=t("ion_input",function(){function t(t){var n=this;e(this,t);this.inputId="ion-input-"+c++;this.didBlurAfterEdit=false;this.hasFocus=false;this.autocapitalize="off";this.autocomplete="off";this.autocorrect="off";this.autofocus=false;this.clearInput=false;this.debounce=0;this.disabled=false;this.name=this.inputId;this.readonly=false;this.required=false;this.spellcheck=false;this.type="text";this.value="";this.onInput=function(t){var e=t.target;if(e){n.value=e.value||""}n.ionInput.emit(t)};this.onBlur=function(){n.hasFocus=false;n.focusChanged();n.emitStyle();n.ionBlur.emit()};this.onFocus=function(){n.hasFocus=true;n.focusChanged();n.emitStyle();n.ionFocus.emit()};this.onKeydown=function(){if(n.clearOnEdit){if(n.didBlurAfterEdit&&n.hasValue()){n.clearTextInput()}n.didBlurAfterEdit=false}};this.clearTextInput=function(t){if(n.clearInput&&!n.readonly&&!n.disabled&&t){t.preventDefault();t.stopPropagation()}n.value="";if(n.nativeInput){n.nativeInput.value=""}};this.ionInput=i(this,"ionInput",7);this.ionChange=i(this,"ionChange",7);this.ionBlur=i(this,"ionBlur",7);this.ionFocus=i(this,"ionFocus",7);this.ionInputDidLoad=i(this,"ionInputDidLoad",7);this.ionInputDidUnload=i(this,"ionInputDidUnload",7);this.ionStyle=i(this,"ionStyle",7)}t.prototype.debounceChanged=function(){this.ionChange=r(this.ionChange,this.debounce)};t.prototype.disabledChanged=function(){this.emitStyle()};t.prototype.valueChanged=function(){this.emitStyle();this.ionChange.emit({value:this.value})};t.prototype.componentWillLoad=function(){if(this.clearOnEdit===undefined&&this.type==="password"){this.clearOnEdit=true}this.emitStyle()};t.prototype.componentDidLoad=function(){this.debounceChanged();this.ionInputDidLoad.emit()};t.prototype.componentDidUnload=function(){this.ionInputDidUnload.emit()};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){if(this.nativeInput){this.nativeInput.focus()}return[2]})})};t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};t.prototype.getValue=function(){return this.value||""};t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,input:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})};t.prototype.focusChanged=function(){if(this.clearOnEdit&&!this.hasFocus&&this.hasValue()){this.didBlurAfterEdit=true}};t.prototype.hasValue=function(){return this.getValue().length>0};t.prototype.render=function(){var t;var e=this;var i=n(this);var a=this.getValue();var r=this.inputId+"-lbl";var h=l(this.el);if(h){h.id=r}return o(s,{"aria-disabled":this.disabled?"true":null,class:Object.assign({},u(this.color),(t={},t[i]=true,t["has-value"]=this.hasValue(),t["has-focus"]=this.hasFocus,t))},o("input",{class:"native-input",ref:function(t){return e.nativeInput=t},"aria-labelledby":r,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:a,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&o("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h button.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-input-ios-h, .item-label-floating .sc-ion-input-ios-h, .item-label-stacked.sc-ion-input-ios-h, .item-label-stacked .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns=\'http://www.w3.org/2000/svg\'%20viewBox=\'0%200%20512%20512\'><path%20fill=\'var(--ion-color-step-600,%20%23666666)\'%20d=\'M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z\'/></svg>\");width:30px;height:30px;background-size:18px}"},enumerable:true,configurable:true});return t}());var c=0}}});