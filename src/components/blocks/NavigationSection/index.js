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

const array = ["Screenshots", "Jury votes", "Comments"];

export const NavigationSection = () => {
  return (
    <NavigationSectionWrapper>
      <NavigationSectionContainer>
        <UnorderedListStyled>
          {array.map((item) => (
            <li>
              <span>{item}</span>
            </li>
          ))}
        </UnorderedListStyled>
      </NavigationSectionContainer>
      <ImagesContainer>
        <ImageStyled src={screen1} />
        <ImageStyled src={screen2} />
      </ImagesContainer>
    </NavigationSectionWrapper>
  );
};
