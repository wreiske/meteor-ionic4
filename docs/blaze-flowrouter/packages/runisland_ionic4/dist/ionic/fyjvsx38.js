/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{f as i}from"./chunk-76b36062.js";class e{constructor(){this.side="end"}isEndSide(){return i(this.win,this.side)}width(){return this.el.offsetWidth}fireSwipeEvent(){this.ionSwipe.emit()}hostData(){const t=this.isEndSide();return{class:{"item-options-start":!t,"item-options-end":t}}}static get is(){return"ion-item-options"}static get properties(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},isEndSide:{method:!0},side:{type:String,attr:"side"},width:{method:!0},win:{context:"window"}}}static get events(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}ion-item-options.hydrated{visibility:hidden}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-ios{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:var(--ion-item-border-color,#c8c7cc)}.item-options-ios.item-options-end{border-bottom-width:.55px}.list-ios-lines-none .item-options-ios{border-bottom-width:0}.list-ios-lines-full .item-options-ios,.list-ios-lines-inset .item-options-ios.item-options-end{border-bottom-width:.55px}"}static get styleMode(){return"ios"}}const s=30,n=.55;class o{constructor(){this.item=null,this.list=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2,this.disabled=!1}disabledChanged(){this.gesture&&this.gesture.setDisabled(this.disabled)}async componentDidLoad(){this.item=this.el.querySelector("ion-item"),this.list=this.el.closest("ion-list"),this.updateOptions(),this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"item-swipe",gesturePriority:20,threshold:5,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this)}),this.disabledChanged()}componentDidUnload(){this.gesture&&this.gesture.destroy(),this.item=this.list=null,this.leftOptions=this.rightOptions=void 0}getOpenAmount(){return this.openAmount}getSlidingRatio(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0}close(){this.setOpenAmount(0,!0)}closeOpened(){return!(!this.list||!this.list.closeSlidingItems())}updateOptions(){const t=this.el.querySelectorAll("ion-item-options");let i=0;this.leftOptions=this.rightOptions=void 0;for(let e=0;e<t.length;e++){const s=t.item(e);s.isEndSide()?(this.rightOptions=s,i|=2):(this.leftOptions=s,i|=1)}this.optsDirty=!0,this.sides=i}canStart(){const t=this.list&&this.list.getOpenItem();return t&&t!==this.el?(this.closeOpened(),!1):!(!this.rightOptions&&!this.leftOptions)}onDragStart(){this.list&&this.list.setOpenItem(this.el),this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")}onDragMove(t){this.optsDirty&&this.calculateOptsWidth();let i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+(e-i)*n:e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+(e-i)*n),this.setOpenAmount(e,!1)}onDragEnd(t){const i=t.velocityX;let e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,i,e){return!i&&e||t&&i})(this.openAmount>0==!(i<0),Math.abs(i)>.3,Math.abs(this.openAmount)<Math.abs(e/2))&&(e=0),this.setOpenAmount(e,!0),32&this.state&&this.rightOptions?this.rightOptions.fireSwipeEvent():64&this.state&&this.leftOptions&&this.leftOptions.fireSwipeEvent()}calculateOptsWidth(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.width()),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.width()),this.optsDirty=!1}setOpenAmount(t,i){if(this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),!this.item)return;const e=this.item.style;if(this.openAmount=t,i&&(e.transition=""),t>0)this.state=t>=this.optsWidthRightSide+s?40:8;else{if(!(t<0))return this.tmr=window.setTimeout(()=>{this.state=2,this.tmr=void 0},600),this.list&&this.list.setOpenItem(void 0),void(e.transform="");this.state=t<=-this.optsWidthLeftSide-s?80:16}e.transform=`translate3d(${-t}px,0,0)`,this.ionDrag.emit({amount:t})}hostData(){return{class:{"item-sliding":!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":!!(8&this.state),"item-sliding-active-options-start":!!(16&this.state),"item-sliding-active-swipe-end":!!(32&this.state),"item-sliding-active-swipe-start":!!(64&this.state)}}}static get is(){return"ion-item-sliding"}static get properties(){return{close:{method:!0},closeOpened:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},queue:{context:"queue"},state:{state:!0}}}static get events(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-item-sliding .item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"}}export{e as IonItemOptions,o as IonItemSliding};