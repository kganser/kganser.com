// Patch older browsers
if (!Array.prototype.forEach) Array.prototype.forEach = function(fn, ctx) {
  for (var i = 0; i < this.length; i++) if (this.hasOwnProperty(String(i))) fn.call(ctx, this[i], i, this);
};
if (!Array.prototype.map) Array.prototype.map = function(fn, ctx) {
  for (var copy = [], i = 0; i < this.length; i++) copy[i] = fn.call(ctx, this[i], i, this);
  return copy;
};
if (!Function.prototype.bind) Function.prototype.bind = function(that) {
  var fn = this;
  return function() { fn.apply(that, Array.prototype.slice.call(arguments)); };
};
if (!Object.keys) Object.keys = function(o) {
  var keys = [];
  for (var i in o) if (o.hasOwnProperty(i)) keys.push(i);
  return keys;
};
if (!Array.isArray) Array.isArray = function(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
};

$ = document.getElementById.bind(document);

(function() {
  
  var script = function(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    document.getElementsByTagName('head')[0].appendChild(s);
  };
  
  // Google Analytics
  window._gaq = [['_setAccount', 'UA-27434499-1'], ['_trackPageview']];
  script((document.location.protocol == 'https:' ? 'https://ssl' : 'http://www')+'.google-analytics.com/ga.js');
  
})();
