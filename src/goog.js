/**
 * @const
 */
var goog = goog || {};

/**
 * @param {string} publicPath
 * @param {*} object
 */
goog.exportSymbol = function(publicPath, object) {
  if (typeof module !== "undefined") {
    module["exports"] = object;
  } else {
    window[publicPath] = object;
  }
};
