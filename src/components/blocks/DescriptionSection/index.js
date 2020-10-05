import React from "react";

import { OutlineButton } from "../../controls/OutlineButton";
import {
  DescriptionSectionWrapper,
  DescriptionHeading,
  ButtonsContainer,
  DescriptionContainer,
  ListStyled,
  ListItemStyled,
} from "./styles";

const array = [
  "Business & Corporate",
  "Promotional",
  "Technology",
  "Data Vizualization",
  "3D",
  "Interaction Design",
  "Microinteractions",
];

export const DescriptionSection = () => {
  return (
    <DescriptionSectionWrapper>
      <DescriptionContainer>
        <DescriptionHeading>
          Virgin Hyperloop is the only company in the world that has
          successfully tested its technology at scale, launching the first new
          mode of mass transportation in over 100 years.
        </DescriptionHeading>
        <ButtonsContainer>
          <ListStyled>
            {array.map((item, index) => (
              <ListItemStyled key={index}>
                <OutlineButton color="black">{item}</OutlineButton>
              </ListItemStyled>
            ))}
          </ListStyled>
        </ButtonsContainer>
      </DescriptionContainer>
    </DescriptionSectionWrapper>
  );
};
