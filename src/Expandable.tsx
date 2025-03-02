import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import type { ExpandableAttribute } from "cool-expandable";

/** React props for the <cool-expandable> component. Extends existing generic {@link HTMLElement} props */
export interface ExpandableProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    "onToggle"
  > {
  /**
   * If true, expands the element to its unconstrained height or the value specified by the expandedHeight prop.
   * Maps to the `open` attribute of the <cool-expandable> web component
   */
  isOpen: boolean;
  /**
   * The height the element should take up when it is not in an expanded state. Defaults to "120px". Maps to the
   * `shrunk-height` attribute of the <cool-expandable> web component
   */
  shrunkHeight?: string;
  /**
   * The height the element should take up when it is in an expanded state. If not specified, the component will expand
   * to the required height of its children. Maps to the `shrunk-height` attribute of the <cool-expandable> web
   * component
   */
  expandedHeight?: string;
}

export const Expandable = ({
  isOpen,
  shrunkHeight,
  expandedHeight,
  children,
  ...rest
}: PropsWithChildren<ExpandableProps>): ReactNode => (
  <cool-expandable
    shrunk-height={shrunkHeight}
    expanded-height={expandedHeight}
    {...rest}
    {...(isOpen && { open: "" })}
  >
    {children}
  </cool-expandable>
);

// Declare the web component as a valid JSX element
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "cool-expandable": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> &
          Partial<Record<ExpandableAttribute, string>>,
        HTMLElement
      >;
    }
  }
}
