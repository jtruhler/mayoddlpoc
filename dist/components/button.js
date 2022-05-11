import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonCss = "button{background-color:#efefef;border:1px solid black;color:black;border:0;font-size:clamp(14px, 1.8vw, 18px);text-align:center;line-height:40px;padding:0 24px;display:inline-block;border-radius:999vw;cursor:pointer}button:hover{background-color:#d6d6d6}button:focus{outline-color:black}button[disabled]{background-color:#eaeaea;color:#777;border-color:#eaeaea}@media (min-width: 768px){button{line-height:56px;padding:0 40px}}button:hover{cursor:pointer}button:focus{outline:1px solid black;outline-offset:-3px}button[disabled]{pointer-events:none}:host(.ghost) button{background-color:white;border:1px solid black;color:black}:host(.ghost) button:hover{background-color:#e6e6e6}:host(.ghost) button:focus{outline-color:black}:host(.ghost) button[disabled]{background-color:#eaeaea;color:#777;border-color:#eaeaea}:host(.ghost.white) button{background-color:transparent;border:1px solid transparent;color:#0057b8;color:#fff;border-color:#fff}:host(.ghost.white) button:hover{background-color:rgba(0, 0, 0, 0)}:host(.ghost.white) button:focus{outline-color:#0057b8}:host(.ghost.white) button[disabled]{background-color:rgba(115, 115, 115, 0);color:#777;border-color:rgba(115, 115, 115, 0)}:host(.plain) button{background-color:transparent;border:1px solid transparent;color:#0057b8;line-height:1em;padding:0}:host(.plain) button:hover{background-color:rgba(0, 0, 0, 0)}:host(.plain) button:focus{outline-color:#0057b8}:host(.plain) button[disabled]{background-color:rgba(115, 115, 115, 0);color:#777;border-color:rgba(115, 115, 115, 0)}:host(.plain) button:hover,:host(.plain) button:focus{text-decoration:underline}:host(.plain) button:focus{outline:0}:host(.primary) button{background-color:var(--global-color-base-blue-300);border:1px solid var(--global-color-base-black);color:var(--global-color-base-white)}:host(.primary) button:hover{background-color:var(--global-color-base-blue-400)}:host(.primary) button:focus{outline-color:var(--global-color-base-white)}:host(.primary) button[disabled]{background-color:#eaeaea;color:var(--global-color-base-grey-200);border-color:#eaeaea}";

const Button = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("button", { part: 'button', type: this.type, disabled: this.disabled }, h("slot", null)));
  }
  static get style() { return buttonCss; }
}, [1, "mc-button", {
    "type": [1],
    "disabled": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-button"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Button);
      }
      break;
  } });
}

export { Button as B, defineCustomElement as d };
