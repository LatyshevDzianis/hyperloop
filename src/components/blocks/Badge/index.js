import React from "react";

import { BadgeWrapper } from "./styles";

export const Badge = ({ children, customColor }) => {
  return (
    <BadgeWrapper customColor={customColor}>
      <span>{children}</span>
    </BadgeWrapper>
  );
};
