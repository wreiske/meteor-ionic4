System.register(["./p-950f5a68.system.js","./p-43ab7c15.system.js","./p-492f36eb.system.js","./p-acb56dd1.system.js","./p-2fa93388.system.js","./p-0f5d17d7.system.js","./p-2f5ab327.system.js"],(function(n){"use strict";return{setters:[function(e){var o={};o.getPlatforms=e.g;o.isPlatform=e.i;n(o)},function(){},function(e){n("createAnimation",e.c)},function(e){n("createGesture",e.createGesture)},function(e){var o={};o.LIFECYCLE_DID_ENTER=e.a;o.LIFECYCLE_DID_LEAVE=e.c;o.LIFECYCLE_WILL_ENTER=e.L;o.LIFECYCLE_WILL_LEAVE=e.b;o.LIFECYCLE_WILL_UNLOAD=e.d;n(o)},function(e){n("menuController",e.m)},function(e){var o={};o.actionSheetController=e.b;o.alertController=e.a;o.loadingController=e.l;o.modalController=e.m;o.pickerController=e.p;o.popoverController=e.c;o.toastController=e.t;n(o)}],execute:function(){var e=n("setupConfig",(function(n){var e=window;var o=e.Ionic;if(o&&o.config&&o.config.constructor.name!=="Object"){console.error("ionic config was already initialized");return}e.Ionic=e.Ionic||{};e.Ionic.config=Object.assign(Object.assign({},e.Ionic.config),n);return e.Ionic.config}));var o=n("getMode",(function(){var n=window;var e=n&&n.Ionic&&n.Ionic.config;if(e){if(e.mode){return e.mode}else{return e.get("mode")}}return"md"}))}}}));