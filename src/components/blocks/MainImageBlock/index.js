import React, { useEffect, useState, useCallback } from "react";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";

import { AvatarsList } from "../AvatarsList";
import {
  MainImageBlockWrapper,
  MainImageBlockContainer,
  DateAndAvatars,
  LikesAndAvatars,
  MainImageContentWrapper,
  CentredMainContent,
  ProductHeader,
  TransparentImage,
  InfoText,
  BottomContent,
  ButtonsWrapper,
  FavoriteIconStyled,
  ShareOutlinedIconStyled,
} from "./styles";
import userImage from "../../../assets/images/user.jpg";
import backgroundImage from "../../../assets/images/virginhyperloop-cover.jpg";
import mobileImage from "../../../assets/images/mobile-main-pic.png";
import { OutlineButton } from "../../controls/OutlineButton";
import { FilledButton } from "../../controls/FilledButton";
import { RoundButton } from "../../controls/RoundButton";

const BREAKPOINT = 700;

const avatars = [
  { image: userImage },
  { image: userImage },
  { image: userImage },
  { image: userImage },
];

export const MainImageBlock = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const resizeListener = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <MainImageBlockWrapper>
      <TransparentImage
        src={screenWidth <= BREAKPOINT ? mobileImage : backgroundImage}
      />
      {screenWidth > BREAKPOINT ? (
        <MainImageBlockContainer>
          <MainImageContentWrapper>
            <DateAndAvatars>
              <span>
                <b>Site of the Day</b> September 29, 2020
              </span>
              <LikesAndAvatars>
                <AvatarsList avatars={avatars} />
                <OutlineButton>
                  <FavoriteIconStyled />
                  <span>88</span>
                </OutlineButton>
                <OutlineButton>Collect</OutlineButton>
              </LikesAndAvatars>
            </DateAndAvatars>
            <CentredMainContent>
              <div>
                <ProductHeader>Virgin Hyperloop</ProductHeader>
                <InfoText>
                  BY <strong>HELLO MONDAY</strong> FROM UNITED STATES WITH 7.66
                </InfoText>
              </div>
            </CentredMainContent>
            <BottomContent>
              <ButtonsWrapper>
                <FilledButton>Visit Site</FilledButton>
                <RoundButton>
                  <ShareOutlinedIconStyled />
                </RoundButton>
              </ButtonsWrapper>
              <ButtonsWrapper>
                <RoundButton>
                  <ChevronLeftOutlinedIcon />
                </RoundButton>
                <RoundButton>
                  <ChevronRightOutlinedIcon />
                </RoundButton>
              </ButtonsWrapper>
            </BottomContent>
          </MainImageContentWrapper>
        </MainImageBlockContainer>
      ) : (
        <div style={{ color: "#000", padding: "23px" }}>
          <span>
            <b>Virgin Hyperloop</b>
            <InfoText>
              BY <strong>HELLO MONDAY</strong> FROM UNITED STATES WITH 7.66
            </InfoText>
            <InfoText>September 29, 2020</InfoText>
          </span>
        </div>
      )}
    </MainImageBlockWrapper>
  );
};
