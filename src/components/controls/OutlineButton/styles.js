import styled from "styled-components";

const OutlineButtonStyled = styled.button`
  background: transparent;
  color: ${({ color }) => (color ? color : "#fff")};
  border: 1px solid ${({ color }) => (color ? color : "#fff")};
  border-radius: 20px;
  padding: 0 23px;
  height: 34px;
  transition: 0.3s;

  :hover {
    color: #42ab9e;
    border-color: #42ab9e;
    cursor: pointer;
  }
`;

export { OutlineButtonStyled };
