import styled from "styled-components";

const SitesOfTheDayWrapper = styled.div`
  max-width: 1905px;
  padding: 0 66px;
  margin-bottom: 85px;

  @media (max-width: 1024px) {
    padding: 0 35px;
  }
`;

const HeadingContainer = styled.div`
  margin: 50px 0;
`;

const BoldText = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
`;

const RegularText = styled.span`
  font-size: 17px;
  font-weight: 300;
`;

const WinnerCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
  width: 100%;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export {
  SitesOfTheDayWrapper,
  BoldText,
  RegularText,
  HeadingContainer,
  WinnerCardsContainer,
};
