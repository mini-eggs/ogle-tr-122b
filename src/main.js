/**
 * @export
 */
let createElement = tag => {
  let el = document.createElement(tag);
  let proto = Element.prototype;

  for (let key in proto) {
    try {
      let val = proto[key];
      if (val.call) {
        // We're a function.
        el[key] = function() {
          val.apply(this, arguments);
          return el;
        };
      }
    } catch (_) {
      el["set" + key.charAt(0).toUpperCase() + key.slice(1)] = val => {
        el[key] = val;
        return el;
      };
    }
  }

  // For interoperating with other libs easier.
  el["chain"] = f => (f(el), el);

  return el;
};
