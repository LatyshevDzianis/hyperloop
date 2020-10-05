import React from "react";

import { JudgeSlice } from "../JudgeSlice";

export const JudgeList = ({ judges }) => {
  return judges.map((judge) => <JudgeSlice key={judge.id} judge={judge} />);
};
