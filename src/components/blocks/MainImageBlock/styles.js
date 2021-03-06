import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import virginHyperloopCover from "../../../assets/images/virginhyperloop-cover.jpg";
import mobileImage from "../../../assets/images/mobile-main-pic.png";

const MainImageBlockWrapper = styled.div`
  background: no-repeat url(${virginHyperloopCover});
  background-size: contain;
  object-fit: contain;
  position: relative;
  color: #fff;
  margin-top: 70px;

  @media (max-width: 1024px) {
    background-size: cover;
    object-fit: cover;
    height: 500px;
  }

  @media (max-width: 700px) {
    background: no-repeat url(${mobileImage});
    background-size: contain;
    object-fit: contain;
    height: unset;
  }
`;

const MainImageBlockContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  height: 100%;
`;

const DateAndAvatars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

const LikesAndAvatars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MainImageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  height: calc(100% - 120px);
`;

const CentredMainContent = styled.div`
  flex: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductHeader = styled.p`
  font-size: 38px;
  font-weight: 800;
  margin: 0;
`;

const InfoText = styled.p`
  font-weight: 300;
  font-size: 15px;
`;

const TransparentImage = styled.img`
  vertical-align: top;
  width: 100%;
  opacity: 0;
  font-weight: 300;
`;

const BottomContent = styled.div`
  display: flex;
  flex: 1;
  height: 34px;
  justify-content: space-between;
  align-items: flex-end;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FavoriteIconStyled = styled(FavoriteIcon)`
  transform: scale(0.7);
`;

const ShareOutlinedIconStyled = styled(ShareOutlinedIcon)`
  transform: scale(0.7);
`;

export {
  MainImageBlockContainer,
  MainImageBlockWrapper,
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
};
