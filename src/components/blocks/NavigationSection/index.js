import React from "react";

import {
  NavigationSectionWrapper,
  NavigationSectionContainer,
  UnorderedListStyled,
  ImagesContainer,
  ImageStyled,
} from "./styles";
import screen1 from "../../../assets/images/virginhyperloop-screen1.jpg";
import screen2 from "../../../assets/images/virginhyperloop-screen2.jpg";
import { VotesSection } from "../VotesSection/index";

const array = ["Screenshots", "Jury votes", "Comments"];

export const NavigationSection = () => {
  return (
    <NavigationSectionWrapper>
      <NavigationSectionContainer>
        <UnorderedListStyled>
          {array.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </UnorderedListStyled>
      </NavigationSectionContainer>
      <ImagesContainer>
        <ImageStyled src={screen1} />
        <ImageStyled src={screen2} />
        <VotesSection>wefew</VotesSection>
      </ImagesContainer>
    </NavigationSectionWrapper>
  );
};
