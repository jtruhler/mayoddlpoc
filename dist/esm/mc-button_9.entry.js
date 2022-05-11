import { r as registerInstance, h, g as getAssetPath } from './index-f307c589.js';

const buttonCss = "button{background-color:#efefef;border:1px solid black;color:black;border:0;font-size:clamp(14px, 1.8vw, 18px);text-align:center;line-height:40px;padding:0 24px;display:inline-block;border-radius:999vw;cursor:pointer}button:hover{background-color:#d6d6d6}button:focus{outline-color:black}button[disabled]{background-color:#eaeaea;color:#777;border-color:#eaeaea}@media (min-width: 768px){button{line-height:56px;padding:0 40px}}button:hover{cursor:pointer}button:focus{outline:1px solid black;outline-offset:-3px}button[disabled]{pointer-events:none}:host(.ghost) button{background-color:white;border:1px solid black;color:black}:host(.ghost) button:hover{background-color:#e6e6e6}:host(.ghost) button:focus{outline-color:black}:host(.ghost) button[disabled]{background-color:#eaeaea;color:#777;border-color:#eaeaea}:host(.ghost.white) button{background-color:transparent;border:1px solid transparent;color:#0057b8;color:#fff;border-color:#fff}:host(.ghost.white) button:hover{background-color:rgba(0, 0, 0, 0)}:host(.ghost.white) button:focus{outline-color:#0057b8}:host(.ghost.white) button[disabled]{background-color:rgba(115, 115, 115, 0);color:#777;border-color:rgba(115, 115, 115, 0)}:host(.plain) button{background-color:transparent;border:1px solid transparent;color:#0057b8;line-height:1em;padding:0}:host(.plain) button:hover{background-color:rgba(0, 0, 0, 0)}:host(.plain) button:focus{outline-color:#0057b8}:host(.plain) button[disabled]{background-color:rgba(115, 115, 115, 0);color:#777;border-color:rgba(115, 115, 115, 0)}:host(.plain) button:hover,:host(.plain) button:focus{text-decoration:underline}:host(.plain) button:focus{outline:0}:host(.primary) button{background-color:var(--global-color-base-blue-300);border:1px solid var(--global-color-base-black);color:var(--global-color-base-white)}:host(.primary) button:hover{background-color:var(--global-color-base-blue-400)}:host(.primary) button:focus{outline-color:var(--global-color-base-white)}:host(.primary) button[disabled]{background-color:#eaeaea;color:var(--global-color-base-grey-200);border-color:#eaeaea}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { part: 'button', type: this.type, disabled: this.disabled }, h("slot", null)));
  }
};
Button.style = buttonCss;

const calloutCss = ".callout{margin-bottom:40px;background-color:#fff;color:#444}@media (min-width: 768px){.callout{grid-template-columns:50% 25% 25%;grid-template-columns:50%;display:grid;grid-gap:0}}.box{background-color:#444;color:#fff;padding:32px;font-size:150%;position:relative}.box:hover svg.arrow-right{right:32px}h2{margin:0;padding:0;font-family:mayo-display, serif;font-weight:400;color:#fff;font-size:29px}@media (min-width: 768px){h2{font-size:35px}}p{font-size:18px;line-height:27px;display:block;padding-bottom:48px}.a{background:#0057b8;color:#fff;fill:#fff;grid-column:1;grid-row:1;aspect-ratio:1}@media (min-width: 768px){.a{grid-row:1/span 2;aspect-ratio:inherit}}.a h2{color:#fff;font-size:29px}@media (min-width: 768px){.a h2{font-size:69px}}.b{aspect-ratio:1;grid-column:2;background:#e6e6e6;color:#000}@media (min-width: 768px){.b{grid-column:2/span 2;aspect-ratio:2}}.b h2{color:#000}.c{aspect-ratio:1;background:#000;color:#fff;fill:#fff;grid-column:1;grid-row:2}@media (min-width: 768px){.c{grid-column:2;aspect-ratio:inherit}}.c h2{color:#fff}.d{aspect-ratio:1;background:#9cdbd9;color:#000;grid-column:2;grid-row:2}@media (min-width: 768px){.d{grid-column:3}}.d h2{color:#000}a{text-decoration:none}a:after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0}a:hover h2{text-decoration:underline}svg.arrow-right{bottom:40px;height:40px;position:absolute;right:40px;transition:right 0.2s ease;width:40px}";

const feature$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "callout" }, h("div", { class: "box a" }, h("a", { href: this.ahref }, h("h2", null, this.aheading)), h("p", null, this.atext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box b" }, h("a", { href: this.ahref }, h("h2", null, this.bheading)), h("p", null, this.btext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box c" }, h("a", { href: this.ahref }, h("h2", null, this.cheading)), h("p", null, this.ctext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" }))), h("div", { class: "box d" }, h("a", { href: this.ahref }, h("h2", null, this.dheading)), h("p", null, this.dtext), h("svg", { "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32", class: "arrow-right" }, h("title", null, "arrow-right"), h("polygon", { points: "22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29" })))));
  }
};
feature$1.style = calloutCss;

const containerCss = ".container.sc-mc-container{width:100%;max-width:1340px;padding:0 24px;margin:auto}@media (min-width: 768px){.container.sc-mc-container{padding:0 40px}}.gray.sc-mc-container-h .wrapper.sc-mc-container{background:#F6F6F6;padding:40px 0}@media screen and (min-width: 768px){.gray.sc-mc-container-h .wrapper.sc-mc-container{padding:64px 0}}.black.sc-mc-container-h .wrapper.sc-mc-container{background:#000}";

const Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "wrapper" }, h("div", { class: "container" }, h("slot", null))));
  }
};
Container.style = containerCss;

const featureCss = ".feature .item .image img{width:100%;aspect-ratio:3/2}.feature[data-type=feature] .item{margin-bottom:24px}.feature[data-type=feature] .item:last-of-type{margin-bottom:40px}.feature[data-type=feature] .item .image{margin-bottom:100px}.feature[data-type=feature] .item .content{margin-bottom:100px}@media (min-width: 768px){.feature[data-type=feature] .item{display:flex;justify-content:space-between;align-items:center}.feature[data-type=feature] .item:nth-child(even) .content{order:1}.feature[data-type=feature] .item:nth-child(even) .image{order:2}.feature[data-type=feature] .item div{width:calc(50% - 16px);box-sizing:border-box}.feature[data-type=feature] .item div.content{padding:24px;margin-bottom:0}.feature[data-type=feature] .item div.image{margin-bottom:0}}.feature[data-type=feature] h2{font-size:clamp(55px, 6.9vw, 69px);font-family:\"mayo-display\";margin:0 0 8px 0}.feature[data-type=feature] p{font-size:clamp(18px, 2.3vw, 23px);font-family:\"mayo-sans\";margin:0 0 40px 0}.feature[data-type=support] .item{position:relative}.feature[data-type=support] .feature-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:16px 16px}.feature[data-type=support] .feature-container .image{margin-bottom:12px}.feature[data-type=support] .feature-container .content{margin-bottom:30px}@media (min-width: 768px){.feature[data-type=support] .feature-container{grid-template-columns:1fr 1fr 1fr}.feature[data-type=support] .feature-container .image{margin-bottom:32px}}.feature[data-type=support] h2{font-size:clamp(44px, 5.5vw, 55px);font-family:\"mayo-display\";margin:0 0 24px 0}.feature[data-type=support] h3{font-size:clamp(23px, 2.9vw, 29px);font-family:\"mayo-display\";margin:0 0 8px 0}.feature[data-type=support] p{font-size:clamp(14px, 1.8vw, 18px);font-family:\"mayo-sans\";margin:0 0 8px 0}.inline-multi-links{display:block;min-height:1px}.inline-multi-links:empty{display:none}.inline-multi-links+.button{margin-top:36px;display:block}.inline-multi-links a{font-size:18px;line-height:1.5em;font-family:mayo-sans, arial, sans-serif;font-family:mayo-serif, arial, serif;padding-right:12px;color:#0057b8}.inline-multi-links a:hover{text-decoration:none}.inline-multi-links span{display:block;margin-bottom:12px}@media screen and (min-width: 1056px){.inline-multi-links span{display:inline;margin-bottom:6px}}@media screen and (min-width: 1056px){.inline-multi-links a{font-size:23px}.inline-multi-links span:after{content:\"|\";padding-left:12px;padding-right:12px}}";

const feature = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
feature.style = featureCss;

const footerCss = "footer{background:#000;padding:40px 0}p{color:#fff;font-size:14px;line-height:1.4em;max-width:630px}mc-link::part(a){color:#fff;text-decoration:none;display:block;border-bottom:1px solid rgba(255, 255, 255, 0.2);padding-bottom:24px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center}mc-link::part(a):after{content:\"\";width:12px;height:14px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTIgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+Q29tYmluZWQgU2hhcGU8L3RpdGxlPgogICAgPGcgaWQ9IkhvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMzNy4wMDAwMDAsIC00MTUxLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8ZyBpZD0iRm9vdGVyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNDEwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMzQyLjk5OTY1LDQ0LjI5NTMzMjggTDEzNDYuODU1MTUsNDguMTQ0ODg3OCBMMTM0Ni4xNDQ2NSw0OC44NTQ4OTc5IEwxMzQzLjQ5OTY1LDQ2LjIwNTM2MDEgTDEzNDMuNDk5NjUsNTYgTDEzNDIuNTAwMTUsNTYgTDEzNDIuNTAwMTUsNDYuMjA1MzYwMSBMMTMzOS44NTQ2NSw0OC44NTQ4OTc5IEwxMzM5LjE0NTE1LDQ4LjE0NDg4NzggTDEzNDIuOTk5NjUsNDQuMjk1MzMyOCBaIE0xMzQ5LDQyIEwxMzQ5LDQzLjAwMDAxNDMgTDEzMzcsNDMuMDAwMDE0MyBMMTMzNyw0MiBMMTM0OSw0MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+) no-repeat;background-size:contain;display:block}";

const Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("footer", null, h("mc-link", { label: "Back to top", href: "#", exportparts: "a" }), h("p", null, "Nunc efficitur quam leo, ac tincidunt velit lobortis id. Etiam nec mi pellentesque, iaculis arcu et, eleifend nisl. Donec tempus pretium turpis non consequat. Phasellus finibus finibus dolor et tristique. Curabitur elementum, nulla ut facilisis blandit, eros massa varius metus, ut laoreet massa nunc quis lectus."), h("p", null, "\u00A9 1998-2020 XYZ Company. All rights reserved.")));
  }
};
Footer.style = footerCss;

const heroCss = ".hero.sc-mc-hero{position:relative;transform:translateX(-24px);width:calc(100% + 48px);margin-bottom:40px;aspect-ratio:1/2}.hero.sc-mc-hero:after{content:\"\";background:linear-gradient(0deg, black 0%, rgba(0, 0, 0, 0) 100%);position:absolute;z-index:2;width:100%;height:100%;top:0}.hero.sc-mc-hero .text.sc-mc-hero{position:absolute;bottom:0;left:0;z-index:3;padding:0 24px 24px 24px}.hero.sc-mc-hero h1.sc-mc-hero{color:#fff;font-size:clamp(55px, 6.9vw, 69px);max-width:600px;font-family:\"mayo-display\";font-weight:400;line-height:1em}.hero.sc-mc-hero p.sc-mc-hero{color:#fff;font-size:clamp(18px, 2.3vw, 23px);max-width:600px;margin:16px 0}@media (min-width: 768px){.hero.sc-mc-hero{transform:translateX(0);width:100%;aspect-ratio:2/1}.hero.sc-mc-hero .text.sc-mc-hero{padding:0 80px 80px 80px}}";

const Hero = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "hero" }, h("mc-picture", { photodesktop: this.photodesktop, photomobile: this.photomobile, alt: this.headingtext, lazy: this.lazy, class: "hero" }), h("div", { class: "text" }, h("h1", null, this.headingtext), h("p", null, this.text), h("mc-link", { href: this.href, label: this.buttonlabel, class: "button ghost white" }))));
  }
};
Hero.style = heroCss;

const linkCss = "a{color:#0057b8}a:hover{text-decoration:none}:host(.button) a{text-decoration:none;border:0;font-size:clamp(14px, 1.8vw, 18px);text-align:center;line-height:40px;padding:0 24px;display:inline-block;border-radius:999vw;font-family:\"mayo-sans\"}@media (min-width: 768px){:host(.button) a{line-height:56px;padding:0 40px}}:host(.button.ghost.white) a{background:none;color:#fff;box-shadow:0 0 0 1px #fff}:host(.button.outlineblack) a{background:none;color:#000;border:1px solid #000}:host(.clickable) a{position:inherit}:host(.clickable) a:after{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0}";

const Link = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("a", { href: this.href, part: "a" }, this.label));
  }
};
Link.style = linkCss;

const mastheadCss = "header{display:flex;align-items:center;padding:16px 0;justify-content:space-between}@media (min-width: 768px){header{padding:24px 0}}.logo{max-width:180px}.logo img{width:100%;object-fit:contain;display:block}@media (min-width: 768px){.logo{max-width:230px}}nav{display:none}nav mc-link{margin:0 16px}nav mc-link::part(a){color:#000;text-decoration:none;font-size:clamp(14px, 1.8vw, 18px)}@media (min-width: 768px){nav{display:block}}mc-button::part(button){font-size:14px;text-transform:uppercase;font-weight:600;color:#000}";

const Masthead = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", null, h("div", { class: 'logo' }, h("a", { href: '/' }, h("img", { src: getAssetPath(`/assets/${this.logo}`), alt: this.imgtitle }))), h("nav", null, this.nav.map(nav => (h("mc-link", { label: nav.label, href: nav.href, exportparts: 'a' })))), h("mc-button", { class: 'plain', exportparts: 'button' }, "Menu")));
  }
  static get assetsDirs() { return ["./assets"]; }
};
Masthead.style = mastheadCss;

const pictureCss = "picture{display:block;width:100%}picture img{width:100%;height:100%;object-fit:cover;display:block}:host(.square) picture{aspect-ratio:1/1}:host(.hero) picture{aspect-ratio:1/2}@media (min-width: 768px){:host(.hero) picture{aspect-ratio:2/1}}";

const Picture = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
Picture.style = pictureCss;

export { Button as mc_button, feature$1 as mc_callout, Container as mc_container, feature as mc_feature, Footer as mc_footer, Hero as mc_hero, Link as mc_link, Masthead as mc_masthead, Picture as mc_picture };
