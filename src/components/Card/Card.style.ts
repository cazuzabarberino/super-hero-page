import styled, { css } from "styled-components"
import { pxToRem } from "utils/pxToRem"

export type CardStyleProps = {
  elevation?: number
}

export const CardStyle = styled.div<CardStyleProps>`
  border-radius: ${pxToRem(16)};
  padding: ${pxToRem(16)};
  background-color: white;

  ${({ elevation }) =>
    css`
      --blur: calc(var(--epx) * 2);
      --elevation: ${elevation};
      --epx: calc(var(--elevation) * ${pxToRem(1)});
      --offset-y: calc(var(--epx) + ${pxToRem(1)});
      --shadow1: 0 0 ${pxToRem(1)} rgba(0, 0, 0, 0.1);
      --shadow2: 0 ${pxToRem(1)} ${pxToRem(2)} rgba(0, 0, 0, 0.08);
      --shadow3: 0 var(--offset-y) var(--blur) var(--spread) rgba(0, 0, 0, 0.2);
      --spread: calc(var(--epx) * 0.3);
      box-shadow: var(--shadow1), var(--shadow2), var(--shadow3);
    `}
`
