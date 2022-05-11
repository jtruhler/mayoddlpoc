import { Component, h } from "@stencil/core";
export class Container {
  render() {
    return (h("div", { class: "wrapper" },
      h("div", { class: "container" },
        h("slot", null))));
  }
  static get is() { return "mc-container"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["container.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["container.css"]
  }; }
}
