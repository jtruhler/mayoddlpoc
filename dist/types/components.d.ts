/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface McButton {
        "disabled": boolean;
        "type": 'button' | 'submit' | 'reset';
    }
    interface McCallout {
        "abuttonlabel": string;
        "aheading": string;
        "ahref": string;
        "atext": string;
        "bbuttonlabel": string;
        "bheading": string;
        "bhref": string;
        "btext": string;
        "cbuttonlabel": string;
        "cheading": string;
        "chref": string;
        "ctext": string;
        "dbuttonlabel": string;
        "dheading": string;
        "dhref": string;
        "dtext": string;
    }
    interface McContainer {
    }
    interface McFeature {
        "data": any;
        "sectionheader": string;
    }
    interface McFooter {
    }
    interface McHero {
        "buttonlabel": string;
        "headingtext": string;
        "href": string;
        "lazy": string;
        "photodesktop": string;
        "photomobile": string;
        "text": string;
    }
    interface McLink {
        "href": string;
        "label": string;
    }
    interface McMasthead {
        "imgtitle": string;
        "logo": string;
        "nav": any;
    }
    interface McPicture {
        "alt": string;
        "lazy": string;
        "photodesktop": string;
        "photomobile": string;
    }
}
declare global {
    interface HTMLMcButtonElement extends Components.McButton, HTMLStencilElement {
    }
    var HTMLMcButtonElement: {
        prototype: HTMLMcButtonElement;
        new (): HTMLMcButtonElement;
    };
    interface HTMLMcCalloutElement extends Components.McCallout, HTMLStencilElement {
    }
    var HTMLMcCalloutElement: {
        prototype: HTMLMcCalloutElement;
        new (): HTMLMcCalloutElement;
    };
    interface HTMLMcContainerElement extends Components.McContainer, HTMLStencilElement {
    }
    var HTMLMcContainerElement: {
        prototype: HTMLMcContainerElement;
        new (): HTMLMcContainerElement;
    };
    interface HTMLMcFeatureElement extends Components.McFeature, HTMLStencilElement {
    }
    var HTMLMcFeatureElement: {
        prototype: HTMLMcFeatureElement;
        new (): HTMLMcFeatureElement;
    };
    interface HTMLMcFooterElement extends Components.McFooter, HTMLStencilElement {
    }
    var HTMLMcFooterElement: {
        prototype: HTMLMcFooterElement;
        new (): HTMLMcFooterElement;
    };
    interface HTMLMcHeroElement extends Components.McHero, HTMLStencilElement {
    }
    var HTMLMcHeroElement: {
        prototype: HTMLMcHeroElement;
        new (): HTMLMcHeroElement;
    };
    interface HTMLMcLinkElement extends Components.McLink, HTMLStencilElement {
    }
    var HTMLMcLinkElement: {
        prototype: HTMLMcLinkElement;
        new (): HTMLMcLinkElement;
    };
    interface HTMLMcMastheadElement extends Components.McMasthead, HTMLStencilElement {
    }
    var HTMLMcMastheadElement: {
        prototype: HTMLMcMastheadElement;
        new (): HTMLMcMastheadElement;
    };
    interface HTMLMcPictureElement extends Components.McPicture, HTMLStencilElement {
    }
    var HTMLMcPictureElement: {
        prototype: HTMLMcPictureElement;
        new (): HTMLMcPictureElement;
    };
    interface HTMLElementTagNameMap {
        "mc-button": HTMLMcButtonElement;
        "mc-callout": HTMLMcCalloutElement;
        "mc-container": HTMLMcContainerElement;
        "mc-feature": HTMLMcFeatureElement;
        "mc-footer": HTMLMcFooterElement;
        "mc-hero": HTMLMcHeroElement;
        "mc-link": HTMLMcLinkElement;
        "mc-masthead": HTMLMcMastheadElement;
        "mc-picture": HTMLMcPictureElement;
    }
}
declare namespace LocalJSX {
    interface McButton {
        "disabled"?: boolean;
        "type"?: 'button' | 'submit' | 'reset';
    }
    interface McCallout {
        "abuttonlabel"?: string;
        "aheading"?: string;
        "ahref"?: string;
        "atext"?: string;
        "bbuttonlabel"?: string;
        "bheading"?: string;
        "bhref"?: string;
        "btext"?: string;
        "cbuttonlabel"?: string;
        "cheading"?: string;
        "chref"?: string;
        "ctext"?: string;
        "dbuttonlabel"?: string;
        "dheading"?: string;
        "dhref"?: string;
        "dtext"?: string;
    }
    interface McContainer {
    }
    interface McFeature {
        "data"?: any;
        "sectionheader"?: string;
    }
    interface McFooter {
    }
    interface McHero {
        "buttonlabel"?: string;
        "headingtext"?: string;
        "href"?: string;
        "lazy"?: string;
        "photodesktop"?: string;
        "photomobile"?: string;
        "text"?: string;
    }
    interface McLink {
        "href"?: string;
        "label"?: string;
    }
    interface McMasthead {
        "imgtitle"?: string;
        "logo"?: string;
        "nav"?: any;
    }
    interface McPicture {
        "alt"?: string;
        "lazy"?: string;
        "photodesktop"?: string;
        "photomobile"?: string;
    }
    interface IntrinsicElements {
        "mc-button": McButton;
        "mc-callout": McCallout;
        "mc-container": McContainer;
        "mc-feature": McFeature;
        "mc-footer": McFooter;
        "mc-hero": McHero;
        "mc-link": McLink;
        "mc-masthead": McMasthead;
        "mc-picture": McPicture;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mc-button": LocalJSX.McButton & JSXBase.HTMLAttributes<HTMLMcButtonElement>;
            "mc-callout": LocalJSX.McCallout & JSXBase.HTMLAttributes<HTMLMcCalloutElement>;
            "mc-container": LocalJSX.McContainer & JSXBase.HTMLAttributes<HTMLMcContainerElement>;
            "mc-feature": LocalJSX.McFeature & JSXBase.HTMLAttributes<HTMLMcFeatureElement>;
            "mc-footer": LocalJSX.McFooter & JSXBase.HTMLAttributes<HTMLMcFooterElement>;
            "mc-hero": LocalJSX.McHero & JSXBase.HTMLAttributes<HTMLMcHeroElement>;
            "mc-link": LocalJSX.McLink & JSXBase.HTMLAttributes<HTMLMcLinkElement>;
            "mc-masthead": LocalJSX.McMasthead & JSXBase.HTMLAttributes<HTMLMcMastheadElement>;
            "mc-picture": LocalJSX.McPicture & JSXBase.HTMLAttributes<HTMLMcPictureElement>;
        }
    }
}
