/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{e}from"./chunk-76b36062.js";import{b as o}from"./chunk-f7b6af08.js";class s{constructor(){this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}debounceChanged(){this.ionChange=e(this.ionChange,this.debounce)}valueChanged(){const t=this.nativeInput,e=this.value;t&&t.value!==e&&(t.value=e),this.ionChange.emit({value:e})}componentDidLoad(){this.positionElements(),this.debounceChanged()}clearInput(t){this.ionClear.emit(),t&&(t.preventDefault(),t.stopPropagation()),setTimeout(()=>{const t=this.value;void 0!==t&&""!==t&&(this.value="",this.ionInput.emit())},64)}cancelSearchbar(){this.ionCancel.emit(),this.clearInput()}onInput(t){const e=t.target;e&&(this.value=e.value),this.ionInput.emit(t)}onBlur(){this.focused=!1,this.ionBlur.emit(),this.positionElements()}onFocus(){this.focused=!0,this.ionFocus.emit(),this.positionElements()}positionElements(){const t=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t="rtl"===this.doc.dir,e=this.nativeInput,o=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),o.removeAttribute("style");else{const s=this.doc,i=s.createElement("span");i.innerHTML=this.placeholder,s.body.appendChild(i);const n=i.offsetWidth;i.remove();const a="calc(50% - "+n/2+"px)",c="calc(50% - "+(n/2+30)+"px)";t?(e.style.paddingRight=a,o.style.marginRight=c):(e.style.paddingLeft=a,o.style.marginLeft=c)}}positionCancelButton(){const t="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),o=this.focused;if(e&&o!==this.isCancelVisible){const s=e.style;if(this.isCancelVisible=o,o)t?s.marginLeft="0":s.marginRight="0";else{const o=e.offsetWidth;o>0&&(t?s.marginLeft=-o+"px":s.marginRight=-o+"px")}}}hostData(){return{class:Object.assign({},o(this.color),{"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}}render(){const e=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),o=this.searchIcon||"search",s=this.showCancelButton?t("button",{type:"button",tabIndex:"ios"!==this.mode||this.focused?void 0:-1,onClick:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?t("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText):null;return[t("div",{class:"searchbar-input-container"},t("input",{ref:t=>this.nativeInput=t,class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===this.mode&&s,t("ion-icon",{mode:this.mode,icon:o,lazy:!1,class:"searchbar-search-icon"}),t("button",{type:"button","no-blur":!0,class:"searchbar-clear-button",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this),onTouchStart:this.clearInput.bind(this)},t("ion-icon",{mode:this.mode,icon:e,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===this.mode&&s]}static get is(){return"ion-searchbar"}static get encapsulation(){return"scoped"}static get properties(){return{animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-searchbar-md-h{--placeholder-color:currentColor;--placeholder-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{--background:var(--ion-color-base);--color-button-clear:inherit;--color-button-cancel:inherit;--color-icon:inherit;color:var(--ion-color-contrast)}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--color-icon);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-weight:var(--placeholder-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{color:var(--color-button-cancel)}.searchbar-clear-button.sc-ion-searchbar-md{margin:0;display:none;min-height:0;outline:0;color:var(--button-color-clear);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h   .searchbar-clear-button.sc-ion-searchbar-md{display:block}.sc-ion-searchbar-md-h{--color-button-clear:currentColor;--color-button-cancel:var(--ion-text-color-step-100, #1a1a1a);--color-icon:var(--ion-text-color-step-400, #666666);--background:var(--ion-background-color, #fff);padding:8px;background:inherit;color:var(--ion-text-color-step-150,#262626);font-family:var(--ion-font-family,inherit)}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}.searchbar-cancel-button.sc-ion-searchbar-md{left:10px;top:0;margin:0;display:none;height:100%;border:0;background-color:transparent;font-size:1.8em}.searchbar-cancel-button.sc-ion-searchbar-md, .searchbar-search-icon.sc-ion-searchbar-md{position:absolute}.searchbar-cancel-button.activated.sc-ion-searchbar-md, .searchbar-search-icon.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding:0;position:absolute;height:100%;border:0;background-color:transparent}.searchbar-clear-button.activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-search-icon.sc-ion-searchbar-md{display:none}.searchbar-has-focus.searchbar-show-cancel.sc-ion-searchbar-md-h   .searchbar-cancel-button.sc-ion-searchbar-md{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}ion-toolbar.sc-ion-searchbar-md-h, ion-toolbar   .sc-ion-searchbar-md-h{padding:3px}"}static get styleMode(){return"md"}}export{s as IonSearchbar};