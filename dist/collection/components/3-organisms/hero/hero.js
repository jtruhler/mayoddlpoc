import { Component, Prop, h } from "@stencil/core";
export class Hero {
  render() {
    return (h("div", { class: "hero" },
      h("mc-picture", { photodesktop: this.photodesktop, photomobile: this.photomobile, alt: this.headingtext, lazy: this.lazy, class: "hero" }),
      h("div", { class: "text" },
        h("h1", null, this.headingtext),
        h("p", null, this.text),
        h("mc-link", { href: this.href, label: this.buttonlabel, class: "button ghost white" }))));
  }
  static get is() { return "mc-hero"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["hero.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["hero.css"]
  }; }
  static get properties() { return {
    "buttonlabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "buttonlabel",
      "reflect": true
    },
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "href",
      "reflect": true
    },
    "headingtext": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "headingtext",
      "reflect": true
    },
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": true
    },
    "photodesktop": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "photodesktop",
      "reflect": true
    },
    "photomobile": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "photomobile",
      "reflect": true
    },
    "lazy": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "lazy",
      "reflect": true
    }
  }; }
}
