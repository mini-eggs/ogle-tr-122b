/**
 * @export
 */
let createElement = tag => {
  let el = document.createElement(tag);

  for (let key in Element.prototype) {
    try {
      let val = Element.prototype[key];
      if (val.call) { // We're a function.
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

  return el;
};

export default createElement;
