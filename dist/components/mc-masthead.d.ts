import type { Components, JSX } from "../types/components";

interface McMasthead extends Components.McMasthead, HTMLElement {}
export const McMasthead: {
  prototype: McMasthead;
  new (): McMasthead;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
