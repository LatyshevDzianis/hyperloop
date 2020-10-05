import React from "react";

import { Badge } from "../Badge/index";
import {
  FooterWrapper,
  FooterContainer,
  LeftBlock,
  RightBlock,
  FooterText,
  ListWithBadges,
  ItemWithBadge,
  StyledLink,
  FollowList,
  SmLink,
  FollowUsText,
} from "./styles";

const array = [
  { name: "Directory", notific: 6 },
  { name: "Jobs", notific: 2 },
  { name: "About Us", notific: null },
  { name: "Winners", notific: null },
  { name: "Nominees", notific: null },
  { name: "Blog", notific: null },
];

const smArray = ["Twitter", "Facebook", "Youtube", "Instagram", "Linkedin"];

export const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <FooterContainer>
          <LeftBlock>
            <FooterText>
              The awards from design, creativity and innovation on the internet
            </FooterText>
            <ListWithBadges>
              {array.map((item) => (
                <li>
                  <ItemWithBadge>
                    <StyledLink href="#">
                      {item.name}
                      {item.notific && (
                        <Badge customColor="#FEF7C1">{item.notific}</Badge>
                      )}
                    </StyledLink>
                  </ItemWithBadge>
                </li>
              ))}
            </ListWithBadges>
            <div>
              <FollowUsText>Follow us</FollowUsText>
              <FollowList>
                {smArray.map((item) => (
                  <SmLink href="#">{item}</SmLink>
                ))}
              </FollowList>
            </div>
          </LeftBlock>
          <RightBlock>
            <FooterText>Next conferences Coming soon</FooterText>
          </RightBlock>
        </FooterContainer>
      </FooterWrapper>
    </footer>
  );
};
