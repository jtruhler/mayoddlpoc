import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './link.js';
import { d as defineCustomElement$2 } from './picture.js';

const featureCss = ".feature .item .image img{width:100%;aspect-ratio:3/2}.feature[data-type=feature] .item{margin-bottom:24px}.feature[data-type=feature] .item:last-of-type{margin-bottom:40px}.feature[data-type=feature] .item .image{margin-bottom:100px}.feature[data-type=feature] .item .content{margin-bottom:100px}@media (min-width: 768px){.feature[data-type=feature] .item{display:flex;justify-content:space-between;align-items:center}.feature[data-type=feature] .item:nth-child(even) .content{order:1}.feature[data-type=feature] .item:nth-child(even) .image{order:2}.feature[data-type=feature] .item div{width:calc(50% - 16px);box-sizing:border-box}.feature[data-type=feature] .item div.content{padding:24px;margin-bottom:0}.feature[data-type=feature] .item div.image{margin-bottom:0}}.feature[data-type=feature] h2{font-size:clamp(55px, 6.9vw, 69px);font-family:\"mayo-display\";margin:0 0 8px 0}.feature[data-type=feature] p{font-size:clamp(18px, 2.3vw, 23px);font-family:\"mayo-sans\";margin:0 0 40px 0}.feature[data-type=support] .item{position:relative}.feature[data-type=support] .feature-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:16px 16px}.feature[data-type=support] .feature-container .image{margin-bottom:12px}.feature[data-type=support] .feature-container .content{margin-bottom:30px}@media (min-width: 768px){.feature[data-type=support] .feature-container{grid-template-columns:1fr 1fr 1fr}.feature[data-type=support] .feature-container .image{margin-bottom:32px}}.feature[data-type=support] h2{font-size:clamp(44px, 5.5vw, 55px);font-family:\"mayo-display\";margin:0 0 24px 0}.feature[data-type=support] h3{font-size:clamp(23px, 2.9vw, 29px);font-family:\"mayo-display\";margin:0 0 8px 0}.feature[data-type=support] p{font-size:clamp(14px, 1.8vw, 18px);font-family:\"mayo-sans\";margin:0 0 8px 0}.inline-multi-links{display:block;min-height:1px}.inline-multi-links:empty{display:none}.inline-multi-links+.button{margin-top:36px;display:block}.inline-multi-links a{font-size:18px;line-height:1.5em;font-family:mayo-sans, arial, sans-serif;font-family:mayo-serif, arial, serif;padding-right:12px;color:#0057b8}.inline-multi-links a:hover{text-decoration:none}.inline-multi-links span{display:block;margin-bottom:12px}@media screen and (min-width: 1056px){.inline-multi-links span{display:inline;margin-bottom:6px}}@media screen and (min-width: 1056px){.inline-multi-links a{font-size:23px}.inline-multi-links span:after{content:\"|\";padding-left:12px;padding-right:12px}}";

const feature = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  // Check the heading level of the component 
  checkHeader(headertext) {
    let header;
    if (!this.sectionheader) {
      header = h("h2", null, " ", headertext, " ");
    }
    else {
      header = h("h3", null, " ", headertext, " ");
    }
    return header;
  }
  // Check to see what style to use for the button 
  displayType() {
    let display;
    if (!this.sectionheader) {
      display = 'feature';
    }
    else {
      display = 'support';
    }
    return display;
  }
  // Check to see what style to use for the button 
  checkButton() {
    let buttonClass;
    if (!this.sectionheader) {
      buttonClass = 'button outlineblack';
    }
    else {
      buttonClass = 'clickable';
    }
    return buttonClass;
  }
  // Check to see if there is a section header 
  checkSection(header) {
    let section;
    if (this.sectionheader) {
      section = h("h2", null, " ", header, " ");
    }
    return section;
  }
  render() {
    return (h("div", { class: "feature", "data-type": this.displayType() }, this.checkSection(this.sectionheader), h("div", { class: "feature-container" }, this.data.map((data) => h("div", { class: "item" }, h("div", { class: "image" }, h("mc-picture", { photodesktop: data.photodesktop, photomobile: data.photomobile, alt: data.alt, lazy: data.lazy, class: "square" })), h("div", { class: "content" }, this.checkHeader(data.header), h("p", null, data.intro), h("span", { innerHTML: data.links, class: "inline-multi-links" }), h("mc-link", { href: data.href, label: data.linktext, class: this.checkButton() })))))));
  }
  static get style() { return featureCss; }
}, [1, "mc-feature", {
    "data": [520],
    "sectionheader": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["mc-feature", "mc-link", "mc-picture"];
  components.forEach(tagName => { switch (tagName) {
    case "mc-feature":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, feature);
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

const McFeature = feature;
const defineCustomElement = defineCustomElement$1;

export { McFeature, defineCustomElement };
