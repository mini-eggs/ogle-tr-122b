import test from "ava";
import createElement from "../";

require("browser-env")();

test("'Hello, World!'", t => {
  let count = 0;
  let text = "Hi, World!";

  let el = createElement("button")
    .setTextContent(text)
    .addEventListener("click", () => count++)
    .chain(document.body.appendChild.bind(document.body));

  t.deepEqual(count, 0);
  el.click();
  t.deepEqual(count, 1);
  t.deepEqual(document.body.firstChild.textContent, text);
});
