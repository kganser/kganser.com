doc = function(doc) {
  return function(path) {
    doc.parseFile(path, function(data) {
      jsml([{h1: name}, data.map(function(block) {
        return [
          {pre: block.spec
            ? {className: 'spec', children: doc.stringifySpec(block.spec)}
            : {className: 'spec error', children: block.error.toString()}},
          block.text.map(function(text) {
            return text.pre ? text : {p: text};
          })
        ];
      })], document.getElementById('doc'), true);
    });
  }
}(doc);
