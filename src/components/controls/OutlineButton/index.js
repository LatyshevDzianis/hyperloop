import React from "react";

import { OutlineButtonStyled } from "./styles";

export const OutlineButton = ({ children, color }) => {
  return <OutlineButtonStyled color={color}>{children}</OutlineButtonStyled>;
};
