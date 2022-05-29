import styled from "styled-components"
import { pxToRem } from "utils/pxToRem"

export const LoopScrollWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: start;
  position: relative;
`

export const Scroller = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  column-gap: ${pxToRem(16)};

  justify-content: start;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-left: ${pxToRem(32)};

  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
