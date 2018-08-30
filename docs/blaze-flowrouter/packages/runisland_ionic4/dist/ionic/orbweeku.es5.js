/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("orbweeku",["exports","./chunk-5b27ab2d.js"],function(e,t){window.Ionic.h;var n=function(){function e(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"ionActivated",e,this.parent),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=t.now(e);var n=e.touches[0];this.addRipple(n.clientX,n.clientY)},e.prototype.mouseDown=function(e){var n=t.now(e);this.lastClick<n-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var n,r,c,l=this;this.queue.read(function(){var i=l.el.getBoundingClientRect(),o=i.width,p=i.height;c=Math.min(2*Math.sqrt(o*o+p*p),a),n=e-i.left-c/2,r=t-i.top-c/2}),this.queue.write(function(){var e=l.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,a=Math.max(i*Math.sqrt(c),o);t.top=r+"px",t.left=n+"px",t.width=c+"px",t.height=c+"px",t.animationDuration=a+"ms",(l.el.shadowRoot||l.el).appendChild(e),setTimeout(function(){return e.remove()},a+50)})},e.prototype.render=function(){return null},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),i=35,o=260,a=550;e.IonRippleEffect=n,Object.defineProperty(e,"__esModule",{value:!0})});