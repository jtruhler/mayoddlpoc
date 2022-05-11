import type { Components, JSX } from "../types/components";

interface McContainer extends Components.McContainer, HTMLElement {}
export const McContainer: {
  prototype: McContainer;
  new (): McContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
