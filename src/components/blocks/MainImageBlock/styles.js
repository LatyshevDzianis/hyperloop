import styled from "styled-components";

import virginHyperloopCover from "../../../assets/images/virginhyperloop-cover.jpg";

const MainImageBlockWrapper = styled.div`
  background: no-repeat url(${virginHyperloopCover});
  background-size: contain;
  object-fit: contain;
  position: relative;
  color: #fff;
  margin-top: 70px;
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
`;

const MainImageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: calc(100% - 100px);
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
  text-transform: uppercase;
  font-weight: 300;
  font-size: 16px;
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
};
