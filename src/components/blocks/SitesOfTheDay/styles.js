import styled from "styled-components";

const SitesOfTheDayWrapper = styled.div`
  max-width: 1905px;
  padding: 0 66px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`;

export {
  SitesOfTheDayWrapper,
  BoldText,
  RegularText,
  HeadingContainer,
  WinnerCardsContainer,
};
