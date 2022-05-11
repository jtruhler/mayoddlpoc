import type { Components, JSX } from "../types/components";

interface McPicture extends Components.McPicture, HTMLElement {}
export const McPicture: {
  prototype: McPicture;
  new (): McPicture;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
