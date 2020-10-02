import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

import { HeaderContainer, Menu, MenuContentWrapper, MenuText } from "./styles";
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
      <HeaderSvgImage />
      <SquareButton>SUBMIT YOUR SITE!</SquareButton>
    </HeaderContainer>
  );
};
