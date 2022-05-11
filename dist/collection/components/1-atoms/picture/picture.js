import { Component, Prop, h } from "@stencil/core";
export class Picture {
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
    return (h("picture", { part: "picture" },
      h("source", { srcSet: this.photodesktop, media: "(min-width: 768px)" }),
      h("img", { src: this.photomobile, alt: this.alt, loading: this.lazyLoad() })));
  }
  static get is() { return "mc-picture"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["picture.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["picture.css"]
  }; }
  static get assetsDirs() { return ["./assets"]; }
  static get properties() { return {
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
    "alt": {
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
      "attribute": "alt",
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
