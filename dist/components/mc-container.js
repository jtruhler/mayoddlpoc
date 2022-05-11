import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const containerCss = ".container.sc-mc-container{width:100%;max-width:1340px;padding:0 24px;margin:auto}@media (min-width: 768px){.container.sc-mc-container{padding:0 40px}}.gray.sc-mc-container-h .wrapper.sc-mc-container{background:#F6F6F6;padding:40px 0}@media screen and (min-width: 768px){.gray.sc-mc-container-h .wrapper.sc-mc-container{padding:64px 0}}.black.sc-mc-container-h .wrapper.sc-mc-container{background:#000}";

const Container = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { class: "wrapper" }, h("div", { class: "container" }, h("slot", null))));
  }
  static get style() { return containerCss; }
}, [6, "mc-container"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-container"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Container);
      }
      break;
  } });
}

const McContainer = Container;
const defineCustomElement = defineCustomElement$1;

export { McContainer, defineCustomElement };
