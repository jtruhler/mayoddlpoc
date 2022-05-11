import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './link.js';

const footerCss = "footer{background:#000;padding:40px 0}p{color:#fff;font-size:14px;line-height:1.4em;max-width:630px}mc-link::part(a){color:#fff;text-decoration:none;display:block;border-bottom:1px solid rgba(255, 255, 255, 0.2);padding-bottom:24px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}mc-link::part(a):after{content:\"\";width:12px;height:14px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTIgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Q29tYmluZWQgU2hhcGU8L3RpdGxlPgogICAgPGcgaWQ9IkhvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzNy4wMDAwMDAsIC00MTUxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDEwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzQyLjk5OTY1LDQ0LjI5NTMzMjggTDEzNDYuODU1MTUsNDguMTQ0ODg3OCBMMTM0Ni4xNDQ2NSw0OC44NTQ4OTc5IEwxMzQzLjQ5OTY1LDQ2LjIwNTM2MDEgTDEzNDMuNDk5NjUsNTYgTDEzNDIuNTAwMTUsNTYgTDEzNDIuNTAwMTUsNDYuMjA1MzYwMSBMMTMzOS44NTQ2NSw0OC44NTQ4OTc5IEwxMzM5LjE0NTE1LDQ4LjE0NDg4NzggTDEzNDIuOTk5NjUsNDQuMjk1MzMyOCBaIE0xMzQ5LDQyIEwxMzQ5LDQzLjAwMDAxNDMgTDEzMzcsNDMuMDAwMDE0MyBMMTMzNyw0MiBMMTM0OSw0MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat;background-size:contain;display:block}";

const Footer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("footer", null, h("mc-link", { label: "Back to top", href: "#", exportparts: "a" }), h("p", null, "Nunc efficitur quam leo, ac tincidunt velit lobortis id. Etiam nec mi pellentesque, iaculis arcu et, eleifend nisl. Donec tempus pretium turpis non consequat. Phasellus finibus finibus dolor et tristique. Curabitur elementum, nulla ut facilisis blandit, eros massa varius metus, ut laoreet massa nunc quis lectus."), h("p", null, "\u00A9 1998-2020 XYZ Company. All rights reserved.")));
  }
  static get style() { return footerCss; }
}, [1, "mc-footer"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-footer", "mc-link"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Footer);
      }
      break;
    case "mc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const McFooter = Footer;
const defineCustomElement = defineCustomElement$1;

export { McFooter, defineCustomElement };
