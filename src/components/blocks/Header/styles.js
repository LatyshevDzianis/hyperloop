import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 70px;
  top: 0;
  width: 100%;
  background-color: #f4f7f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid #dedede;
`;

const Menu = styled.div`
  height: 100%;
  border-right: 1px solid #dedede;
  width: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: #7a7a7a;
  }
`;

const MenuContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuText = styled.div`
  font-size: 13px;
  height: 100%;
`;

const SvgWrapper = styled.div``;

export { HeaderContainer, Menu, MenuContentWrapper, MenuText, SvgWrapper };
