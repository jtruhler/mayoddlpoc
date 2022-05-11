import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const pictureCss = "picture{display:block;width:100%}picture img{width:100%;height:100%;object-fit:cover;display:block}:host(.square) picture{aspect-ratio:1/1}:host(.hero) picture{aspect-ratio:1/2}@media (min-width: 768px){:host(.hero) picture{aspect-ratio:2/1}}";

const Picture = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  // Check to see if lazy loading is not needed 
  lazyLoad() {
    let lazyCheck;
    if (this.lazy == 'false') {
      lazyCheck = '';
    }
    else {
      lazyCheck = 'lazy';
    }
    return lazyCheck;
  }
  render() {
    return (h("picture", { part: "picture" }, h("source", { srcSet: this.photodesktop, media: "(min-width: 768px)" }), h("img", { src: this.photomobile, alt: this.alt, loading: this.lazyLoad() })));
  }
  static get assetsDirs() { return ["./assets"]; }
  static get style() { return pictureCss; }
}, [1, "mc-picture", {
    "photodesktop": [513],
    "photomobile": [513],
    "alt": [513],
    "lazy": [513]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-picture"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-picture":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Picture);
      }
      break;
  } });
}

export { Picture as P, defineCustomElement as d };
