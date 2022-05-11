import type { Components, JSX } from "../types/components";

interface McFeature extends Components.McFeature, HTMLElement {}
export const McFeature: {
  prototype: McFeature;
  new (): McFeature;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
