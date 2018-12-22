# OGLE-TR-122b

OGLE-TR-122b is the smallest star know to man.

OGLE-TR-122b the NPM library is a small abstraction over the DOM's APIs for creating elements. It's a fun experiment. Final build clocks in at 289 bytes of ECMAScript 5.

#### Example

```javascript
import createElement from "ogle-tr-122b";

document.body.appendChild(
  createElement("div")
    .setAttribute("class", "container")
    .appendChild(
      createElement("h1")
        .setAttribute("class", "title")
        .setTextContent("Please enter name:")
    )
    .appendChild(
      createElement("input")
        .setAttribute("placeholder", "name")
        .setAttribute("autofocus", true)
        .addEventListener("input", event => {
          let { previousSibling, value } = event.target;
          previousSibling.textContent = `Name: ${value}`;
        })
    )
);
```
