import { Card } from "components/Card"
import styled from "styled-components"
import { pxToRem } from "utils/pxToRem"

export const HeaderWrapper = styled.header`
  height: ${pxToRem(128)};
  background-color: #3498db;
  border-bottom: ${pxToRem(2)} solid #2c3e50;
`
