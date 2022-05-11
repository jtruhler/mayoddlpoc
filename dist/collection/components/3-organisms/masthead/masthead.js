import { Component, Prop, getAssetPath, h } from '@stencil/core';
export class Masthead {
  render() {
    return (h("header", null,
      h("div", { class: 'logo' },
        h("a", { href: '/' },
          h("img", { src: getAssetPath(`/assets/${this.logo}`), alt: this.imgtitle }))),
      h("nav", null, this.nav.map(nav => (h("mc-link", { label: nav.label, href: nav.href, exportparts: 'a' })))),
      h("mc-button", { class: 'plain', exportparts: 'button' }, "Menu")));
  }
  static get is() { return "mc-masthead"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["masthead.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["masthead.css"]
  }; }
  static get assetsDirs() { return ["./assets"]; }
  static get properties() { return {
    "logo": {
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
      "attribute": "logo",
      "reflect": true
    },
    "imgtitle": {
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
      "attribute": "imgtitle",
      "reflect": true
    },
    "nav": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "nav",
      "reflect": true
    }
  }; }
}
