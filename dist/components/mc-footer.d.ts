import type { Components, JSX } from "../types/components";

interface McFooter extends Components.McFooter, HTMLElement {}
export const McFooter: {
  prototype: McFooter;
  new (): McFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
