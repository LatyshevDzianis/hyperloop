import styled from "styled-components";

import { OutlineButtonStyled } from "../OutlineButton/styles";

export const StyledFilledButton = styled(OutlineButtonStyled)`
  background: #49c5b6;
  border-color: #49c5b6;
  color: #fff;

  :hover {
    background: transparent;
    color: #49c5b6;
  }
`;
