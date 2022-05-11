import type { Components, JSX } from "../types/components";

interface McLink extends Components.McLink, HTMLElement {}
export const McLink: {
  prototype: McLink;
  new (): McLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
