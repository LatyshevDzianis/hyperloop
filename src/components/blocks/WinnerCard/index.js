import React, { useCallback, useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
              <FavoriteIcon />
              112
            </OutlineButtonLike>
            <OutlineButtonShare>
              <ReplyIconStyled />
            </OutlineButtonShare>
          </>
        )}
      </ImageContainer>
      <ContentContainer>
        <InfoContainer>Wonderland</InfoContainer>
        <AuthorContainer>BY WONDERLAND</AuthorContainer>
      </ContentContainer>
    </WinnerCardWrapper>
  );
};
