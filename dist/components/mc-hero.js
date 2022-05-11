import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './link.js';
import { d as defineCustomElement$2 } from './picture.js';

const heroCss = ".hero.sc-mc-hero{position:relative;transform:translateX(-24px);width:calc(100% + 48px);margin-bottom:40px;aspect-ratio:1/2}.hero.sc-mc-hero:after{content:\"\";background:linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);position:absolute;z-index:2;width:100%;height:100%;top:0}.hero.sc-mc-hero .text.sc-mc-hero{position:absolute;bottom:0;left:0;z-index:3;padding:0 24px 24px 24px}.hero.sc-mc-hero h1.sc-mc-hero{color:#fff;font-size:clamp(55px, 6.9vw, 69px);max-width:600px;font-family:\"mayo-display\";font-weight:400;line-height:1em}.hero.sc-mc-hero p.sc-mc-hero{color:#fff;font-size:clamp(18px, 2.3vw, 23px);max-width:600px;margin:16px 0}@media (min-width: 768px){.hero.sc-mc-hero{transform:translateX(0);width:100%;aspect-ratio:2/1}.hero.sc-mc-hero .text.sc-mc-hero{padding:0 80px 80px 80px}}";

const Hero = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { class: "hero" }, h("mc-picture", { photodesktop: this.photodesktop, photomobile: this.photomobile, alt: this.headingtext, lazy: this.lazy, class: "hero" }), h("div", { class: "text" }, h("h1", null, this.headingtext), h("p", null, this.text), h("mc-link", { href: this.href, label: this.buttonlabel, class: "button ghost white" }))));
  }
  static get style() { return heroCss; }
}, [2, "mc-hero", {
    "buttonlabel": [513],
    "href": [513],
    "headingtext": [513],
    "text": [513],
    "photodesktop": [513],
    "photomobile": [513],
    "lazy": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-hero", "mc-link", "mc-picture"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-hero":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Hero);
      }
      break;
    case "mc-link":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "mc-picture":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const McHero = Hero;
const defineCustomElement = defineCustomElement$1;

export { McHero, defineCustomElement };
