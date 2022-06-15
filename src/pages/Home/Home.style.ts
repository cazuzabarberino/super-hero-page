import styled from "styled-components"
import { pxToRem } from "utils/pxToRem"

export const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PageContent = styled.div`
  display: grid;
  align-content: center;
  justify-content: start;
  flex: 1;
  background-color: #ecf0f1;
`
