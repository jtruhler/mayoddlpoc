import type { Components, JSX } from "../types/components";

interface McHero extends Components.McHero, HTMLElement {}
export const McHero: {
  prototype: McHero;
  new (): McHero;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
