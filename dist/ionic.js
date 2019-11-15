(function (doc) {
  var scriptElm = doc.createElement('script');
  scriptElm.setAttribute('type', 'module');
  scriptElm.src = '/packages/wreiske_ionic4/dist/ionic/ionic.esm.js';
  doc.head.appendChild(scriptElm);

  scriptElm = doc.createElement('script');
  scriptElm.setAttribute('nomodule', '');
  scriptElm.src = '/packages/wreiske_ionic4/dist/ionic/ionic.js';
  doc.head.appendChild(scriptElm);

})(document);
