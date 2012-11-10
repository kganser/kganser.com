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
  
  // Disqus
  if (document.getElementById('disqus_thread'))
    script('http://kganser.disqus.com/embed.js');
  
})();