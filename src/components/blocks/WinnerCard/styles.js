import styled from "styled-components";
import ReplyIcon from "@material-ui/icons/Reply";

import { OutlineButtonStyled } from "../../controls/OutlineButton/styles";
import { RoundButtonStyled } from "../../controls/RoundButton/styles";

const WinnerCardWrapper = styled.div`
  background: #fff;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 286px;

  :hover > img {
    cursor: pointer;
    transform: scale(1.05);
    filter: brightness(60%);
  }
`;

const ContentContainer = styled.div``;

const InfoContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f4f7f6;
`;

const AuthorContainer = styled.div`
  padding: 10px 20px;
`;

const OutlineButtonShare = styled(RoundButtonStyled)`
  position: absolute;
  z-index: 5;
  bottom: 20px;
  right: 20px;

  :hover {
    border: 1px solid #fff;
    color: #fff;
    opacity: 0.7;
  }
`;

const ReplyIconStyled = styled(ReplyIcon)`
  transform: scale(-1, 1);
`;

const ImageStyled = styled.img`
  width: 100%;
  object-fit: contain;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    filter: brightness(60%);
  }
`;

const OutlineButtonOverride = styled(OutlineButtonStyled)`
  position: absolute;
  z-index: 5;

  :hover {
    border: 1px solid #fff;
    color: #fff;
    opacity: 0.7;
  }
`;

const OutlineButtonLike = styled(OutlineButtonOverride)`
  top: 20px;
  right: 120px;
`;

const OutlineButtonCollect = styled(OutlineButtonOverride)`
  top: 20px;
  right: 20px;
`;

export {
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
};
