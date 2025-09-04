import styled from "styled-components";
import { TDropdownOverlay } from "../types";

export const Overlay = styled.div<TDropdownOverlay>`
  position: fixed;
  inset: 0;
  z-index: ${({ zIndex }) => zIndex || 1};
  background: ${({ background }) => background || "transparent"};
`;