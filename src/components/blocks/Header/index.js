import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import {
  HeaderContainer,
  Menu,
  MenuContentWrapper,
  MenuText,
  SvgWrapper,
} from "./styles";
import { HeaderSvgImage } from "./svg";
import { SquareButton } from "../../controls/SquareButton";

export const Header = () => {
  return (
    <HeaderContainer>
      <Menu>
        <MenuContentWrapper>
          <MenuIcon />
          <MenuText>MENU</MenuText>
        </MenuContentWrapper>
      </Menu>
      <SvgWrapper>
        <HeaderSvgImage />
      </SvgWrapper>
      <SquareButton>SUBMIT YOUR SITE!</SquareButton>
    </HeaderContainer>
  );
};
