import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const linkCss = "a{color:#0057b8}a:hover{text-decoration:none}:host(.button) a{text-decoration:none;border:0;font-size:clamp(14px, 1.8vw, 18px);text-align:center;line-height:40px;padding:0 24px;display:inline-block;border-radius:999vw;font-family:\"mayo-sans\"}@media (min-width: 768px){:host(.button) a{line-height:56px;padding:0 40px}}:host(.button.ghost.white) a{background:none;color:#fff;box-shadow:0 0 0 1px #fff}:host(.button.outlineblack) a{background:none;color:#000;border:1px solid #000}:host(.clickable) a{position:inherit}:host(.clickable) a:after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0}";

const Link = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("a", { href: this.href, part: "a" }, this.label));
  }
  static get style() { return linkCss; }
}, [1, "mc-link", {
    "label": [513],
    "href": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-link"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-link":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Link);
      }
      break;
  } });
}

export { Link as L, defineCustomElement as d };
