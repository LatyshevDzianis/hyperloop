import React from "react";

import { RoundAvatar } from "../RoundAvatar";
import {
  JudgeSliceWrapper,
  AvatarAndInfoWrapper,
  GradeWrapper,
  AvatarWrapper,
  InfoWrapper,
  Grade,
  BoldText,
} from "./styles";
import avatarImage from "../../../assets/images/user.jpg";

export const JudgeSlice = ({ judge }) => {
  return (
    <JudgeSliceWrapper>
      <AvatarAndInfoWrapper>
        <AvatarWrapper>
          <RoundAvatar width="50px" height="50px" imageSrc={avatarImage} />
        </AvatarWrapper>
        <InfoWrapper>
          <div>
            <div>
              <BoldText href="#">{judge.fullName}</BoldText> from{" "}
              <BoldText href="#">{judge.country}</BoldText>
            </div>
            <div>{judge.job}</div>
          </div>
        </InfoWrapper>
      </AvatarAndInfoWrapper>
      <GradeWrapper>
        <Grade>{judge.grade}</Grade>
      </GradeWrapper>
    </JudgeSliceWrapper>
  );
};
