import { proxyCustomElement, HTMLElement, h, getAssetPath } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './button.js';
import { d as defineCustomElement$2 } from './link.js';

const mastheadCss = "header{display:flex;align-items:center;padding:16px 0;justify-content:space-between}@media (min-width: 768px){header{padding:24px 0}}.logo{max-width:180px}.logo img{width:100%;object-fit:contain;display:block}@media (min-width: 768px){.logo{max-width:230px}}nav{display:none}nav mc-link{margin:0 16px}nav mc-link::part(a){color:#000;text-decoration:none;font-size:clamp(14px, 1.8vw, 18px)}@media (min-width: 768px){nav{display:block}}mc-button::part(button){font-size:14px;text-transform:uppercase;font-weight:600;color:#000}";

const Masthead = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("header", null, h("div", { class: 'logo' }, h("a", { href: '/' }, h("img", { src: getAssetPath(`/assets/${this.logo}`), alt: this.imgtitle }))), h("nav", null, this.nav.map(nav => (h("mc-link", { label: nav.label, href: nav.href, exportparts: 'a' })))), h("mc-button", { class: 'plain', exportparts: 'button' }, "Menu")));
  }
  static get assetsDirs() { return ["./assets"]; }
  static get style() { return mastheadCss; }
}, [1, "mc-masthead", {
    "logo": [513],
    "imgtitle": [513],
    "nav": [520]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-masthead", "mc-button", "mc-link"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-masthead":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Masthead);
      }
      break;
    case "mc-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const McMasthead = Masthead;
const defineCustomElement = defineCustomElement$1;

export { McMasthead, defineCustomElement };
