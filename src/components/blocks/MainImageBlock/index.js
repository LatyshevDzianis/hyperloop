import React from "react";
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
import { OutlineButton } from "../../controls/OutlineButton";
import { FilledButton } from "../../controls/FilledButton";
import { RoundButton } from "../../controls/RoundButton";

const avatars = [
  { image: userImage },
  { image: userImage },
  { image: userImage },
  { image: userImage },
];

export const MainImageBlock = () => {
  return (
    <MainImageBlockWrapper>
      <TransparentImage src={backgroundImage} />
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
                by <strong>hello monday</strong> from united states with 7.66
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
    </MainImageBlockWrapper>
  );
};
