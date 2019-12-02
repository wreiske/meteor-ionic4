(function (doc) {
  var isiOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
  var scriptElm = doc.createElement('script');
  if (!isiOS) {
    scriptElm.setAttribute('type', 'module');
    if (Meteor.isCordova) {
      scriptElm.src = '/__cordova/packages/wreiske_ionic4/dist/ionic/ionic.esm.js';
    } else {
      scriptElm.src = '/packages/wreiske_ionic4/dist/ionic/ionic.esm.js';
    }
    doc.head.appendChild(scriptElm);
  }
  scriptElm = doc.createElement('script');
  if (!isiOS) {
    scriptElm.setAttribute('nomodule', '');
  }
  if (Meteor.isCordova) {
    scriptElm.src = '/__cordova/packages/wreiske_ionic4/dist/ionic/ionic.js';
  } else {
    scriptElm.src = '/packages/wreiske_ionic4/dist/ionic/ionic.js';
  }
  doc.head.appendChild(scriptElm);
})(document);
