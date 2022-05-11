import type { Components, JSX } from "../types/components";

interface McButton extends Components.McButton, HTMLElement {}
export const McButton: {
  prototype: McButton;
  new (): McButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
