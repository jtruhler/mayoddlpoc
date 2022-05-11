import { Component, h } from "@stencil/core";
export class Footer {
  render() {
    return (h("footer", null,
      h("mc-link", { label: "Back to top", href: "#", exportparts: "a" }),
      h("p", null, "Nunc efficitur quam leo, ac tincidunt velit lobortis id. Etiam nec mi pellentesque, iaculis arcu et, eleifend nisl. Donec tempus pretium turpis non consequat. Phasellus finibus finibus dolor et tristique. Curabitur elementum, nulla ut facilisis blandit, eros massa varius metus, ut laoreet massa nunc quis lectus."),
      h("p", null, "\u00A9 1998-2020 XYZ Company. All rights reserved.")));
  }
  static get is() { return "mc-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["footer.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["footer.css"]
  }; }
}
