import React, { useCallback, useState } from "react";

import {
  WinnerCardWrapper,
  ImageStyled,
  ContentContainer,
  InfoContainer,
  AuthorContainer,
  ImageContainer,
  OutlineButtonCollect,
  OutlineButtonLike,
  OutlineButtonShare,
  ReplyIconStyled,
  FavoriteIconStyled,
  CustomLinkStyled,
  CountryDateContainer,
  SmallLightText
} from "./styles";
import prevFirst from "../../../assets/images/prevFirst.jpg";

export const WinnerCard = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseEnter = useCallback(() => {
    setIsHidden(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHidden(true);
  }, []);

  return (
    <WinnerCardWrapper>
      <ImageContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ImageStyled src={prevFirst} />
        {!isHidden && (
          <>
            <OutlineButtonCollect>Collect</OutlineButtonCollect>
            <OutlineButtonLike>
              <FavoriteIconStyled />
              112
            </OutlineButtonLike>
            <OutlineButtonShare>
              <ReplyIconStyled />
            </OutlineButtonShare>
          </>
        )}
      </ImageContainer>
      <ContentContainer>
        <InfoContainer>
          <div>
            <CustomLinkStyled href="#">Wonderland</CustomLinkStyled>
          </div>
          <CountryDateContainer>
            <SmallLightText>From Netherlands</SmallLightText>
            <SmallLightText>September 28, 2020</SmallLightText>
          </CountryDateContainer>
        </InfoContainer>
        <AuthorContainer>BY WONDERLAND</AuthorContainer>
      </ContentContainer>
    </WinnerCardWrapper>
  );
};
