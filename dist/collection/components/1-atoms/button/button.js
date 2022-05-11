import { Component, Prop, h } from '@stencil/core';
export class Button {
  render() {
    return (h("button", { part: 'button', type: this.type, disabled: this.disabled },
      h("slot", null)));
  }
  static get is() { return "mc-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["button.css"]
  }; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit' | 'reset'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": false
    }
  }; }
}
