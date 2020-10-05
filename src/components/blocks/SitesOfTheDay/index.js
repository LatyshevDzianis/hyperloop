import React from "react";

import {
  SitesOfTheDayWrapper,
  BoldText,
  RegularText,
  HeadingContainer,
  WinnerCardsContainer,
} from "./styles";
import { WinnerCard } from "../WinnerCard";

export const SitesOfTheDay = () => {
  return (
    <SitesOfTheDayWrapper>
      <HeadingContainer>
        <BoldText>Sites of the day</BoldText>
        <RegularText>Previous Winners</RegularText>
      </HeadingContainer>
      <WinnerCardsContainer>
        <WinnerCard />
        <WinnerCard />
        <WinnerCard />
        <WinnerCard />
      </WinnerCardsContainer>
    </SitesOfTheDayWrapper>
  );
};
