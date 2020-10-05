import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 70px 0;
  background: #fff;
`;

const FooterContainer = styled.div`
  padding: 0 66px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  flex: 5;
`;

const RightBlock = styled.div`
  flex: 2;
  text-align: end;
`;

const FooterText = styled.div`
  font-size: 18px;
  margin-bottom: 25px;
`;

const ListWithBadges = styled.ul`
  list-style: none;
  margin: 0 0 25px 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;

  > li {
    display: inline-block;
    margin-right: 25px;
    transition: 0.3s;
  }

  > li :hover {
    opacity: 0.75;
  }
`;

const ItemWithBadge = styled.div``;

const StyledLink = styled.a`
  text-decoration: none;
  color: unset;
  display: flex;
  align-items: center;
`;

const FollowList = styled(ListWithBadges)`
  display: inline-block;
  font-weight: normal;
`;

const SmLink = styled(StyledLink)`
  display: inline;
  margin-right: 10px;
  transition: 0.3s;

  :hover {
    color: #626363;
  }
`;

const FollowUsText = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

const ComingSoonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 5px;
`;

const ComingSoonLink = styled.a`
  color: #202121;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  border-bottom: 1px solid #202121;
`;

export {
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
  ComingSoonWrapper,
  ComingSoonLink,
};
