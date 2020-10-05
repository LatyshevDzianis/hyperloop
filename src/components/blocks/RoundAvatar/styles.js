import styled from "styled-components";

const AvatarImage = styled.img`
  object-fit: cover;
  width: ${({ width }) => (width ? width : "35px")};
  height: ${({ height }) => (height ? height : "35px")};
  border-radius: 50%;
`;

export { AvatarImage };
