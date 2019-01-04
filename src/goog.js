var goog = goog || {};

goog.exportSymbol = function(path, object) {
  if (typeof module !== "undefined") {
    module["exports"] = object;
  } else {
    window[path] = object;
  }
};
