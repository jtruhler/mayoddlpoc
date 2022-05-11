import { Component, h, Prop } from "@stencil/core";
export class feature {
  render() {
    return (h("div", { class: "callout" },
      h("div", { class: "box a" },
        h("a", { href: this.ahref },
          h("h2", null, this.aheading)),
        h("p", null, this.atext),
        h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" },
          h("title", null, "arrow-right"),
          h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))),
      h("div", { class: "box b" },
        h("a", { href: this.ahref },
          h("h2", null, this.bheading)),
        h("p", null, this.btext),
        h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" },
          h("title", null, "arrow-right"),
          h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))),
      h("div", { class: "box c" },
        h("a", { href: this.ahref },
          h("h2", null, this.cheading)),
        h("p", null, this.ctext),
        h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" },
          h("title", null, "arrow-right"),
          h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))),
      h("div", { class: "box d" },
        h("a", { href: this.ahref },
          h("h2", null, this.dheading)),
        h("p", null, this.dtext),
        h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" },
          h("title", null, "arrow-right"),
          h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" })))));
  }
  static get is() { return "mc-callout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["callout.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["callout.css"]
  }; }
  static get properties() { return {
    "aheading": {
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
      "attribute": "aheading",
      "reflect": true
    },
    "atext": {
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
      "attribute": "atext",
      "reflect": true
    },
    "ahref": {
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
      "attribute": "ahref",
      "reflect": true
    },
    "abuttonlabel": {
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
      "attribute": "abuttonlabel",
      "reflect": true
    },
    "bheading": {
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
      "attribute": "bheading",
      "reflect": true
    },
    "btext": {
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
      "attribute": "btext",
      "reflect": true
    },
    "bhref": {
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
      "attribute": "bhref",
      "reflect": true
    },
    "bbuttonlabel": {
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
      "attribute": "bbuttonlabel",
      "reflect": true
    },
    "cheading": {
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
      "attribute": "cheading",
      "reflect": true
    },
    "ctext": {
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
      "attribute": "ctext",
      "reflect": true
    },
    "chref": {
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
      "attribute": "chref",
      "reflect": true
    },
    "cbuttonlabel": {
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
      "attribute": "cbuttonlabel",
      "reflect": true
    },
    "dheading": {
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
      "attribute": "dheading",
      "reflect": true
    },
    "dtext": {
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
      "attribute": "dtext",
      "reflect": true
    },
    "dhref": {
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
      "attribute": "dhref",
      "reflect": true
    },
    "dbuttonlabel": {
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
      "attribute": "dbuttonlabel",
      "reflect": true
    }
  }; }
}
