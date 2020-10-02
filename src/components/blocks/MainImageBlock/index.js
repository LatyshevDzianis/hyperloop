import React from "react";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

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
} from "./styles";
import userImage from "../../../assets/images/user.jpg";
import backgroundImage from "../../../assets/images/virginhyperloop-cover.jpg";
import { OutlineButton } from "../../controls/OutlineButton";
import { FilledButton } from "../../controls/FilledButton";

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
              <OutlineButton>88</OutlineButton>
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
              <OutlineButton>Share</OutlineButton>
            </ButtonsWrapper>
            <ButtonsWrapper>
              <OutlineButton>Prev</OutlineButton>
              <OutlineButton>Next</OutlineButton>
            </ButtonsWrapper>
          </BottomContent>
        </MainImageContentWrapper>
      </MainImageBlockContainer>
    </MainImageBlockWrapper>
  );
};
