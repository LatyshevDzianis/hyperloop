import styled from "styled-components";

const JudgeSliceWrapper = styled.div`
  display: flex;
  padding: 15px 30px;
  border-bottom: 3px solid #f4f7f6;
  justify-content: space-between;
`;

const AvatarAndInfoWrapper = styled.div`
  display: flex;
`;

const AvatarWrapper = styled.div`
  margin-right: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;

const GradeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
`;

const BoldText = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: 0.3s;

  :hover {
    color: #626363;
  }
`;

const Grade = styled.span``;

export {
  JudgeSliceWrapper,
  AvatarAndInfoWrapper,
  GradeWrapper,
  AvatarWrapper,
  InfoWrapper,
  Grade,
  BoldText,
};
