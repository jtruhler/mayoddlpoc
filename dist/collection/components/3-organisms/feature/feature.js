import { Component, h, Prop } from "@stencil/core";
export class feature {
  // Check the heading level of the component 
  checkHeader(headertext) {
    let header;
    if (!this.sectionheader) {
      header = h("h2", null,
        " ",
        headertext,
        " ");
    }
    else {
      header = h("h3", null,
        " ",
        headertext,
        " ");
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
      section = h("h2", null,
        " ",
        header,
        " ");
    }
    else {
    }
    return section;
  }
  render() {
    return (h("div", { class: "feature", "data-type": this.displayType() },
      this.checkSection(this.sectionheader),
      h("div", { class: "feature-container" }, this.data.map((data) => h("div", { class: "item" },
        h("div", { class: "image" },
          h("mc-picture", { photodesktop: data.photodesktop, photomobile: data.photomobile, alt: data.alt, lazy: data.lazy, class: "square" })),
        h("div", { class: "content" },
          this.checkHeader(data.header),
          h("p", null, data.intro),
          h("span", { innerHTML: data.links, class: "inline-multi-links" }),
          h("mc-link", { href: data.href, label: data.linktext, class: this.checkButton() })))))));
  }
  static get is() { return "mc-feature"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["feature.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["feature.css"]
  }; }
  static get properties() { return {
    "data": {
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
      "attribute": "data",
      "reflect": true
    },
    "sectionheader": {
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
      "attribute": "sectionheader",
      "reflect": true
    }
  }; }
}
// render() {
//     return <Host>
//       {this.items.map(item => {
//         const newChildren = this.doSomeProcessing(item.children);
//         return newChildren.map((child) => (
//           <div>{child}</div>
//         ));
//       })}
//     </Host>
//   }
