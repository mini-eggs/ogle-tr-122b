import test from "ava";
import createElement from "../";

require("browser-env")();

test("'Hello, World!'", t => {
  let clicked = false;
  document.body.appendChild(createElement("button").addEventListener("click", () => (clicked = true)));
  t.deepEqual(clicked, false);
  document.body.firstChild.click();
  t.deepEqual(clicked, true);
});
