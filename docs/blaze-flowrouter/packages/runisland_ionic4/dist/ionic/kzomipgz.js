/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{a as e}from"./chunk-ab2696b0.js";import{a}from"./chunk-d7be1947.js";class i{constructor(){this.loaded=!1,this.active=!1,this.badgeColor="default",this.disabled=!1,this.selected=!1,this.show=!0,this.tabsHideOnSubPages=!1}selectedChanged(t){t&&this.ionSelect.emit()}componentWillLoad(){}getTabId(){return this.name?this.name:"string"==typeof this.component?this.component:null}async setActive(){await this.prepareLazyLoaded(),this.active=!0}prepareLazyLoaded(){return!this.loaded&&this.component?(this.loaded=!0,e(this.delegate,this.el,this.component,["ion-page"])):Promise.resolve()}hostData(){return{"aria-labelledby":this.btnId,role:"tabpanel",hidden:!this.active,class:{"ion-page":!this.component}}}static get is(){return"ion-tab"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},badge:{type:String,attr:"badge"},badgeColor:{type:String,attr:"badge-color"},btnId:{type:String,attr:"btn-id"},component:{type:String,attr:"component"},delegate:{type:"Any",attr:"delegate"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},getTabId:{method:!0},href:{type:String,attr:"href"},icon:{type:String,attr:"icon"},label:{type:String,attr:"label"},name:{type:String,attr:"name"},selected:{type:Boolean,attr:"selected",mutable:!0,watchCallbacks:["selectedChanged"]},setActive:{method:!0},show:{type:Boolean,attr:"show"},tabsHideOnSubPages:{type:Boolean,attr:"tabs-hide-on-sub-pages"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}}class s{constructor(){this.keyFocus=!1,this.selected=!1}componentDidLoad(){this.ionTabButtonDidLoad.emit()}componentDidUnload(){this.ionTabButtonDidUnload.emit()}onClick(t){this.tab.disabled||this.ionTabbarClick.emit(this.tab),t.stopPropagation(),t.preventDefault()}onKeyUp(){this.keyFocus=!0}onBlur(){this.keyFocus=!1}hostData(){const t=this.selected,e=this.tab,a=!!e.label,i=!!e.icon,s=a&&!i,o=i&&!a,n=!!e.badge;return{role:"tab",id:e.btnId,"aria-selected":t,hidden:!e.show,class:{"tab-selected":t,"has-title":a,"has-icon":i,"has-title-only":s,"has-icon-only":o,"has-badge":n,"tab-btn-disabled":e.disabled,focused:this.keyFocus}}}render(){const e=this.tab,a=e.href||"#";return[t("a",{href:a,class:"tab-cover",onKeyUp:this.onKeyUp.bind(this),onBlur:this.onBlur.bind(this)},e.icon&&t("ion-icon",{class:"tab-button-icon",name:e.icon}),e.label&&t("span",{class:"tab-button-text"},e.label),e.badge&&t("ion-badge",{class:"tab-badge",color:e.badgeColor},e.badge),"md"===this.mode&&t("ion-ripple-effect",{tapClick:!0}))]}static get is(){return"ion-tab-button"}static get properties(){return{el:{elementRef:!0},keyFocus:{state:!0},selected:{type:Boolean,attr:"selected"},tab:{type:"Any",attr:"tab"}}}static get events(){return[{name:"ionTabbarClick",method:"ionTabbarClick",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidLoad",method:"ionTabButtonDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabButtonDidUnload",method:"ionTabButtonDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick"}]}static get style(){return"ion-tab-button{margin:0;text-align:center;border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:0;display:block;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:100%;border:0;text-decoration:none;background:0 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-tab-button a{text-decoration:none}.tab-cover{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;height:100%;border:0;color:inherit;background:0 0;cursor:pointer}.tab-cover:active,.tab-cover:focus{outline:0}.tab-btn-disabled{pointer-events:none}.tab-btn-disabled>.tab-cover{opacity:.4}.tab-button-icon,.tab-button-text{display:none;overflow:hidden;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.has-icon .tab-button-icon,.has-title .tab-button-text{display:block}.has-title-only .tab-button-text{white-space:normal}.layout-icon-start .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.layout-icon-end .tab-button{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout-icon-bottom .tab-button{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout-icon-end .tab-button,.layout-icon-hide .tab-button,.layout-icon-start .tab-button,.layout-title-hide .tab-button{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.layout-icon-hide .tab-button-icon,.layout-title-hide .tab-button-text{display:none}.tab-badge{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon .tab-badge{right:calc(50% - 30px)}.layout-icon-bottom .tab-badge,.layout-icon-end .tab-badge,.layout-icon-start .tab-badge{right:calc(50% - 50px)}.tab-button-md{max-width:168px;font-weight:400;color:var(--ion-tabbar-md-text-color,var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666)));fill:var(--ion-tabbar-md-text-color,var(--ion-text-md-color-step-400,var(--ion-text-color-step-400,#666)))}.tab-button-md.focused{background:var(--ion-tabbar-md-background-color-focused,var(--ion-tabbar-background-color-focused,#dadada))}.tab-button-md .tab-cover{padding:8px 12px 10px 12px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.scrollable .tab-button-md{overflow:hidden;-webkit-box-flex:1;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto}.tab-button-md.tab-selected{color:var(--ion-tabbar-md-text-color-active,var(--ion-tabbar-text-color-active,#488aff));fill:var(--ion-tabbar-md-text-color-active,var(--ion-tabbar-text-color-active,#488aff))}.placement-top .tab-button-md.tab-selected .tab-button-icon,.placement-top .tab-button-md.tab-selected .tab-button-text{-webkit-transform:inherit;transform:inherit}.tab-button-md .tab-button-text{margin:0;-webkit-transform-origin:center bottom;transform-origin:center bottom;font-size:12px;text-transform:none;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tab-button-md.tab-selected .tab-button-text{-webkit-transform:scale3d(1.16667,1.16667,1);transform:scale3d(1.16667,1.16667,1);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.layout-icon-top .tab-button-md .has-icon .tab-button-text{margin-bottom:-2px}.layout-icon-bottom .tab-button-md .tab-button-text{-webkit-transform-origin:center top;transform-origin:center top;margin-top:-2px}.tab-button-md .tab-button-icon{-webkit-transform-origin:center center;transform-origin:center center;width:24px;height:24px;font-size:24px;-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(0,-2px,0);transform:translate3d(0,-2px,0)}.layout-icon-end .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(2px,0,0);transform:translate3d(2px,0,0)}.layout-icon-bottom .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}.layout-icon-start .tab-button-md.tab-selected .tab-button-icon{-webkit-transform:translate3d(-2px,0,0);transform:translate3d(-2px,0,0)}.layout-icon-hide .tab-button-md,.layout-title-hide .tab-button-md,.tab-button-md.has-title-only,.tab-button-md.icon-only{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}"}static get styleMode(){return"md"}}class o{constructor(){this.canScrollLeft=!1,this.canScrollRight=!1,this.hidden=!1,this.layout="icon-top",this.placement="bottom",this.scrollable=!1,this.tabs=[],this.highlight=!1,this.translucent=!1}selectedTabChanged(){this.scrollable&&this.scrollToSelectedButton(),this.highlight&&this.updateHighlight()}onKeyboardWillHide(){setTimeout(()=>this.hidden=!1,50)}onKeyboardWillShow(){"bottom"===this.placement&&(this.hidden=!0)}onResize(){this.highlight&&this.updateHighlight()}onTabButtonLoad(){this.scrollable&&this.updateBoundaries(),this.highlight&&this.updateHighlight()}analyzeTabs(){const t=Array.from(this.doc.querySelectorAll("ion-tab-button")),e=this.scrollEl.scrollLeft,a=this.scrollEl.clientWidth;let i=void 0,s=void 0;for(const o of t){const t=o.offsetLeft,n=t+o.offsetWidth;t<e&&(i={tab:o,amount:t}),!s&&n>a+e&&(s={tab:o,amount:n-a})}return{previous:i,next:s}}getSelectedButton(){return Array.from(this.el.querySelectorAll("ion-tab-button")).find(t=>t.selected)}scrollToSelectedButton(){this.scrollEl&&this.queue.read(()=>{const t=this.getSelectedButton();if(t){const e=this.scrollEl.scrollLeft,a=this.scrollEl.clientWidth,i=t.offsetLeft,s=i+t.offsetWidth;let o=0;s>a+e?o=s-a:i<e&&(o=i),0!==o&&this.queue.write(()=>{this.scrollEl.scrollToPoint(o,0,250).then(()=>{this.updateBoundaries()})})}})}scrollByTab(t){this.queue.read(()=>{const{previous:e,next:a}=this.analyzeTabs(),i="right"===t?a:e,s=i&&i.amount;i&&s&&this.scrollEl.scrollToPoint(s,0,250).then(()=>{this.updateBoundaries()})})}updateBoundaries(){this.canScrollLeft=0!==this.scrollEl.scrollLeft,this.canScrollRight=this.scrollEl.scrollLeft<this.scrollEl.scrollWidth-this.scrollEl.offsetWidth}updateHighlight(){this.highlight&&this.queue.read(()=>{const t=this.getSelectedButton(),e=this.el.querySelector("div.tabbar-highlight");t&&e&&(e.style.transform=`translate3d(${t.offsetLeft}px,0,0) scaleX(${t.offsetWidth})`)})}hostData(){const t=this.translucent?a(this.mode,this.color,"tabbar-translucent"):{};return{role:"tablist",class:Object.assign({},t,{[`layout-${this.layout}`]:!0,[`placement-${this.placement}`]:!0,"tabbar-hidden":this.hidden,scrollable:this.scrollable})}}render(){const e=this.selectedTab,i=this.highlight?t("div",{class:"animated tabbar-highlight"}):null,s=a(this.mode,this.color,"tab-button"),o=this.tabs.map(a=>t("ion-tab-button",{class:s,tab:a,selected:e===a}));return this.scrollable?[t("ion-button",{onClick:()=>this.scrollByTab("left"),fill:"clear",class:{inactive:!this.canScrollLeft}},t("ion-icon",{name:"arrow-dropleft"})),t("ion-scroll",{forceOverscroll:!1,ref:t=>this.scrollEl=t},o,i),t("ion-button",{onClick:()=>this.scrollByTab("right"),fill:"clear",class:{inactive:!this.canScrollRight}},t("ion-icon",{name:"arrow-dropright"}))]:[...o,i]}static get is(){return"ion-tabbar"}static get host(){return{theme:"tabbar"}}static get properties(){return{canScrollLeft:{state:!0},canScrollRight:{state:!0},doc:{context:"document"},el:{elementRef:!0},hidden:{state:!0},highlight:{type:Boolean,attr:"highlight"},layout:{type:String,attr:"layout"},placement:{type:String,attr:"placement"},queue:{context:"queue"},scrollable:{type:Boolean,attr:"scrollable"},selectedTab:{type:"Any",attr:"selected-tab",watchCallbacks:["selectedTabChanged"]},tabs:{type:"Any",attr:"tabs"},translucent:{type:Boolean,attr:"translucent"}}}static get listeners(){return[{name:"body:keyboardWillHide",method:"onKeyboardWillHide"},{name:"body:keyboardWillShow",method:"onKeyboardWillShow"},{name:"window:resize",method:"onResize",passive:!0},{name:"ionTabButtonDidLoad",method:"onTabButtonLoad"},{name:"ionTabButtonDidUnload",method:"onTabButtonLoad"}]}static get style(){return"ion-tabbar{position:relative;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1;width:100%}ion-tabbar.tabbar-hidden{display:none}ion-tabbar.placement-top{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.tabbar-highlight{left:0;bottom:0;-webkit-transform-origin:0 0;transform-origin:0 0;position:absolute;display:block;width:1px;height:2px;-webkit-transform:translateZ(0);transform:translateZ(0)}.tabbar-highlight.animated{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top .tabbar-highlight{bottom:0}.placement-bottom .tabbar-highlight{top:0}ion-tabbar.scrollable ion-scroll{overflow:hidden}ion-tabbar.scrollable .scroll-inner{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}ion-tabbar.scrollable ion-button.inactive{visibility:hidden}.tabbar-md{height:56px;border-top:1px solid rgba(var(--ion-tabbar-md-border-color-rgb,var(--ion-tabbar-border-color-rgb,0,0,0)),.07);background:var(--ion-tabbar-md-background-color,var(--ion-tabbar-background-color,#f8f8f8));contain:strict}.tabbar-md .tabbar-highlight{background:var(--ion-tabbar-md-text-color-active,var(--ion-tabbar-text-color-active,#488aff))}.tabbar-md.scrollable ion-scroll{margin:0 8px;max-width:650px}.tabbar-md-primary{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));background-color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff));fill:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-md-primary .tab-button.focused{background:var(--ion-color-md-primary-shade,var(--ion-color-primary-shade,#3171e0))}.tabbar-md-primary .tab-button.tab-selected,.tabbar-md-primary .tab-button:hover{color:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff));fill:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-md-primary .tabbar-highlight{background:var(--ion-color-md-primary-contrast,var(--ion-color-primary-contrast,#fff))}.tabbar-md-secondary{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));background-color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8));fill:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-md-secondary .tab-button.focused{background:var(--ion-color-md-secondary-shade,var(--ion-color-secondary-shade,#0bb8cc))}.tabbar-md-secondary .tab-button.tab-selected,.tabbar-md-secondary .tab-button:hover{color:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff));fill:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-md-secondary .tabbar-highlight{background:var(--ion-color-md-secondary-contrast,var(--ion-color-secondary-contrast,#fff))}.tabbar-md-tertiary{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));background-color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff));fill:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-md-tertiary .tab-button.focused{background:var(--ion-color-md-tertiary-shade,var(--ion-color-tertiary-shade,#633ce0))}.tabbar-md-tertiary .tab-button.tab-selected,.tabbar-md-tertiary .tab-button:hover{color:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff));fill:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-md-tertiary .tabbar-highlight{background:var(--ion-color-md-tertiary-contrast,var(--ion-color-tertiary-contrast,#fff))}.tabbar-md-success{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));background-color:var(--ion-color-md-success,var(--ion-color-success,#10dc60));fill:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-md-success .tab-button.focused{background:var(--ion-color-md-success-shade,var(--ion-color-success-shade,#0ec254))}.tabbar-md-success .tab-button.tab-selected,.tabbar-md-success .tab-button:hover{color:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff));fill:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-md-success .tabbar-highlight{background:var(--ion-color-md-success-contrast,var(--ion-color-success-contrast,#fff))}.tabbar-md-warning{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff));background-color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00));fill:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.tabbar-md-warning .tab-button.focused{background:var(--ion-color-md-warning-shade,var(--ion-color-warning-shade,#e0b500))}.tabbar-md-warning .tab-button.tab-selected,.tabbar-md-warning .tab-button:hover{color:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff));fill:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.tabbar-md-warning .tabbar-highlight{background:var(--ion-color-md-warning-contrast,var(--ion-color-warning-contrast,#fff))}.tabbar-md-danger{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));background-color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141));fill:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-md-danger .tab-button.focused{background:var(--ion-color-md-danger-shade,var(--ion-color-danger-shade,#d33939))}.tabbar-md-danger .tab-button.tab-selected,.tabbar-md-danger .tab-button:hover{color:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff));fill:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-md-danger .tabbar-highlight{background:var(--ion-color-md-danger-contrast,var(--ion-color-danger-contrast,#fff))}.tabbar-md-light{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));background-color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8));fill:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-md-light .tab-button.focused{background:var(--ion-color-md-light-shade,var(--ion-color-light-shade,#d7d8da))}.tabbar-md-light .tab-button.tab-selected,.tabbar-md-light .tab-button:hover{color:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000));fill:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-md-light .tabbar-highlight{background:var(--ion-color-md-light-contrast,var(--ion-color-light-contrast,#000))}.tabbar-md-medium{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff));background-color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2));fill:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.tabbar-md-medium .tab-button.focused{background:var(--ion-color-md-medium-shade,var(--ion-color-medium-shade,#86888f))}.tabbar-md-medium .tab-button.tab-selected,.tabbar-md-medium .tab-button:hover{color:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff));fill:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.tabbar-md-medium .tabbar-highlight{background:var(--ion-color-md-medium-contrast,var(--ion-color-medium-contrast,#fff))}.tabbar-md-dark{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));background-color:var(--ion-color-md-dark,var(--ion-color-dark,#222428));fill:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-md-dark .tab-button.focused{background:var(--ion-color-md-dark-shade,var(--ion-color-dark-shade,#1e2023))}.tabbar-md-dark .tab-button.tab-selected,.tabbar-md-dark .tab-button:hover{color:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff));fill:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}.tabbar-md-dark .tabbar-highlight{background:var(--ion-color-md-dark-contrast,var(--ion-color-dark-contrast,#fff))}"}static get styleMode(){return"md"}}class n{constructor(){this.ids=-1,this.transitioning=!1,this.tabsId=++l,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1,this.scrollable=!1,this.useRouter=!1}componentWillLoad(){this.useRouter||(this.useRouter=!!this.doc.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.loadConfig("tabbarLayout","bottom"),this.loadConfig("tabbarLayout","icon-top"),this.loadConfig("tabbarHighlight",!1),this.ionNavWillLoad.emit()}async componentDidLoad(){await this.initTabs(),await this.initSelect()}componentDidUnload(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0}tabChange(t){const e=t.detail;if(this.useRouter&&null!=e.href){const t=this.doc.querySelector("ion-router");t&&t.push(e.href)}else this.select(e)}async select(t){const e=this.getTab(t);return!!this.shouldSwitch(e)&&(await this.setActive(e),await this.notifyRouter(),this.tabSwitch(),!0)}async setRouteId(t){const e=this.getTab(t);return this.shouldSwitch(e)?(await this.setActive(e),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}getRouteId(){const t=this.selectedTab&&this.selectedTab.getTabId();return t?{id:t,element:this.selectedTab}:void 0}getTab(t){return"string"==typeof t?this.tabs.find(e=>e.getTabId()===t):"number"==typeof t?this.tabs[t]:t}getSelected(){return this.selectedTab}initTabs(){const t=(this.tabs=Array.from(this.el.querySelectorAll("ion-tab"))).map(t=>{const e=`t-${this.tabsId}-${++this.ids}`;return t.btnId="tab-"+e,t.id="tabpanel-"+e,t.componentOnReady()});return Promise.all(t)}async initSelect(){if(this.useRouter)return;const t=this.tabs.find(t=>t.selected)||this.tabs.find(t=>t.show&&!t.disabled);for(const e of this.tabs)e!==t&&(e.selected=!1);t&&await t.setActive(),this.selectedTab=t,t&&(t.selected=!0,t.active=!0)}loadConfig(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))}setActive(t){if(this.transitioning)return Promise.reject("transitioning already happening");if(!t)return Promise.reject("no tab is selected");for(const e of this.tabs)t!==e&&(e.selected=!1);return this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionNavWillChange.emit(),t.setActive()}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&(t.selected=!0,e!==t&&(e&&(e.active=!1),this.ionChange.emit({tab:t}),this.ionNavDidChange.emit()))}notifyRouter(){if(this.useRouter){const t=this.doc.querySelector("ion-router");if(t)return t.navChanged(1)}return Promise.resolve(!1)}shouldSwitch(t){const e=this.selectedTab;return!(!t||t===e||this.transitioning)}render(){const e=[t("div",{class:"tabs-inner"},t("slot",null))];return this.tabbarHidden||e.push(t("ion-tabbar",{tabs:this.tabs,color:this.color,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent,scrollable:this.scrollable})),e}static get is(){return"ion-tabs"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},doc:{context:"document"},el:{elementRef:!0},getRouteId:{method:!0},getSelected:{method:!0},getTab:{method:!0},name:{type:String,attr:"name"},scrollable:{type:Boolean,attr:"scrollable"},select:{method:!0},selectedTab:{state:!0},setRouteId:{method:!0},tabbarHidden:{type:Boolean,attr:"tabbar-hidden"},tabbarHighlight:{type:Boolean,attr:"tabbar-highlight",mutable:!0},tabbarLayout:{type:String,attr:"tabbar-layout",mutable:!0},tabbarPlacement:{type:String,attr:"tabbar-placement",mutable:!0},tabs:{state:!0},translucent:{type:Boolean,attr:"translucent"},useRouter:{type:Boolean,attr:"use-router",mutable:!0}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionTabbarClick",method:"tabChange"}]}static get style(){return"ion-tabs{left:0;right:0;top:0;bottom:0;position:absolute;z-index:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;contain:layout size style}"}}let l=-1;export{i as IonTab,s as IonTabButton,o as IonTabbar,n as IonTabs};