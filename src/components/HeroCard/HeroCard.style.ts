import { Card } from "components/Card"
import styled from "styled-components"
import { pxToRem } from "utils/pxToRem"

export const ComponentWrapper = styled(Card)`
  padding: 0;
  overflow: hidden;
  width: ${pxToRem(233)};
  height: ${pxToRem(377)};
  position: relative;
  scroll-snap-align: start;
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

export const HeroCardOverlay = styled.div`
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  padding: ${pxToRem(16)} 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const HeroCardTitle = styled.h3`
  color: white;
  text-align: center;
`
export const HeroCardDescription = styled.p`
  color: white;
`
