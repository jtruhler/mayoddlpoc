import type { Components, JSX } from "../types/components";

interface McCallout extends Components.McCallout, HTMLElement {}
export const McCallout: {
  prototype: McCallout;
  new (): McCallout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
