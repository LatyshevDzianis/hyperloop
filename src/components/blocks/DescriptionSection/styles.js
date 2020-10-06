import styled from "styled-components";

const DescriptionSectionWrapper = styled.div`
  max-width: 876px;
  margin: 0 auto;
  padding: 50px 66px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const DescriptionHeading = styled.h3`
  font-size: 19px;
  margin: 0;
  padding: 0;
  font-weight: 400;
  text-align: center;
  margin-bottom: 24px;
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

const ListStyled = styled.ul`
  padding: 0;
  margin-bottom: 0;
  list-style: none;
`;

const ListItemStyled = styled.li`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export {
  DescriptionSectionWrapper,
  DescriptionHeading,
  ButtonsContainer,
  DescriptionContainer,
  ListStyled,
  ListItemStyled,
};
