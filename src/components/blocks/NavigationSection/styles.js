import styled from "styled-components";

const NavigationSectionWrapper = styled.div`
  padding: 50px 0;
  border-top: 1px solid #dedede;
`;

const NavigationSectionContainer = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const UnorderedListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    display: inline-block;
    font-size: 17px;
  }

  > li span {
    padding-bottom: 10px;
  }

  > li span:hover {
    color: #64686a;
    cursor: pointer;
  }

  > li:nth-child(1) span {
    border-bottom: 3px solid #000;
    font-weight: bold;
  }

  > li:nth-child(1)::after,
  > li:nth-child(2)::after {
    content: ".";
    margin: 0 12px;
  }
`;

const ImagesContainer = styled.div`
  padding: 0 66px;
  margin: 0 auto;
  max-width: 1290px;

  @media (max-width: 1024px) {
    padding: 0 35px;
  }
`;

const ImageStyled = styled.img`
  object-fit: contain;
  width: 100%;
  margin-bottom: 35px;
`;

export {
  NavigationSectionWrapper,
  NavigationSectionContainer,
  UnorderedListStyled,
  ImagesContainer,
  ImageStyled,
};
