var goog = goog || {};

goog.exportSymbol = function(_, object) {
  if (typeof module !== "undefined") {
    module["exports"] = object;
  } else {
    window["createElement"] = object;
  }
};
