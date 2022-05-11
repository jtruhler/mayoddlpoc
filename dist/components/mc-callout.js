import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const calloutCss = ".callout{margin-bottom:40px;background-color:#fff;color:#444}@media (min-width: 768px){.callout{grid-template-columns:50% 25% 25%;grid-template-columns:50%;display:grid;grid-gap:0}}.box{background-color:#444;color:#fff;padding:32px;font-size:150%;position:relative}.box:hover svg.arrow-right{right:32px}h2{margin:0;padding:0;font-family:mayo-display, serif;font-weight:400;color:#fff;font-size:29px}@media (min-width: 768px){h2{font-size:35px}}p{font-size:18px;line-height:27px;display:block;padding-bottom:48px}.a{background:#0057b8;color:#fff;fill:#fff;grid-column:1;grid-row:1;aspect-ratio:1}@media (min-width: 768px){.a{grid-row:1/span 2;aspect-ratio:inherit}}.a h2{color:#fff;font-size:29px}@media (min-width: 768px){.a h2{font-size:69px}}.b{aspect-ratio:1;grid-column:2;background:#e6e6e6;color:#000}@media (min-width: 768px){.b{grid-column:2/span 2;aspect-ratio:2}}.b h2{color:#000}.c{aspect-ratio:1;background:#000;color:#fff;fill:#fff;grid-column:1;grid-row:2}@media (min-width: 768px){.c{grid-column:2;aspect-ratio:inherit}}.c h2{color:#fff}.d{aspect-ratio:1;background:#9cdbd9;color:#000;grid-column:2;grid-row:2}@media (min-width: 768px){.d{grid-column:3}}.d h2{color:#000}a{text-decoration:none}a:after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0}a:hover h2{text-decoration:underline}svg.arrow-right{bottom:40px;height:40px;position:absolute;right:40px;transition:right 0.2s ease;width:40px}";

const feature = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "callout" }, h("div", { class: "box a" }, h("a", { href: this.ahref }, h("h2", null, this.aheading)), h("p", null, this.atext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box b" }, h("a", { href: this.ahref }, h("h2", null, this.bheading)), h("p", null, this.btext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box c" }, h("a", { href: this.ahref }, h("h2", null, this.cheading)), h("p", null, this.ctext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box d" }, h("a", { href: this.ahref }, h("h2", null, this.dheading)), h("p", null, this.dtext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" })))));
  }
  static get style() { return calloutCss; }
}, [1, "mc-callout", {
    "aheading": [513],
    "atext": [513],
    "ahref": [513],
    "abuttonlabel": [513],
    "bheading": [513],
    "btext": [513],
    "bhref": [513],
    "bbuttonlabel": [513],
    "cheading": [513],
    "ctext": [513],
    "chref": [513],
    "cbuttonlabel": [513],
    "dheading": [513],
    "dtext": [513],
    "dhref": [513],
    "dbuttonlabel": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-callout"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-callout":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, feature);
      }
      break;
  } });
}

const McCallout = feature;
const defineCustomElement = defineCustomElement$1;

export { McCallout, defineCustomElement };
