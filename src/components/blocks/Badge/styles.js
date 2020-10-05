import styled from "styled-components";

const BadgeWrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ customColor }) => (customColor ? customColor : "#49c5b6")};
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-size: 12px;
`;

export { BadgeWrapper };
