import { jsx as _jsx } from "react/jsx-runtime";
export const Expandable = ({ isOpen, shrunkHeight, expandedHeight, children, ...rest }) => (_jsx("cool-expandable", { "shrunk-height": shrunkHeight, "expanded-height": expandedHeight, ...rest, ...(isOpen && { open: "" }), children: children }));
