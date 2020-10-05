import React from "react";
import { JudgeList } from "../JudgeList";

import { VotesSectionWrapper, CardSlice } from "./styles";

const judges = [
  {
    id: 1,
    fullName: "Vlad Taran",
    country: "Ukraine",
    job: "Art Director",
    grade: 7.5,
  },
  {
    id: 2,
    fullName: "Sergey Churilov",
    country: "Ukraine",
    job: "Interactive Art Director",
    grade: 7.0,
  },
  { id: 3, fullName: "Nao Sato", country: "Japan", job: "CEO", grade: 8.0 },
  {
    id: 4,
    fullName: "Clement Pavegau",
    country: "United Kingdom",
    job: "Independent Art Director",
    grade: 7.5,
  },
  {
    id: 5,
    fullName: "Marie Benoist",
    country: "Australia",
    job: "Product Designer",
    grade: 7.1,
  },
];

export const VotesSection = () => {
  return (
    <VotesSectionWrapper>
      <CardSlice>VOTES</CardSlice>
      <JudgeList judges={judges} />
    </VotesSectionWrapper>
  );
};
