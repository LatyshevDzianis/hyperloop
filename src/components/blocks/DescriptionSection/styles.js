import styled from "styled-components";

const DescriptionSectionWrapper = styled.div`
  width: 1010px;
  margin: 0 auto;
  padding: 50px 66px;
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
  width: 878px;
  margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  text-align: center;
`;

const ListStyled = styled.ul`
  padding: 0;
  list-style: none;
`;

const ListItemStyled = styled.li`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export {
  DescriptionSectionWrapper,
  DescriptionHeading,
  ButtonsContainer,
  DescriptionContainer,
  ListStyled,
  ListItemStyled,
};
