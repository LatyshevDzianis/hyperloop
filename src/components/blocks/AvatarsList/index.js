import React from "react";

import { RoundAvatar } from "../RoundAvatar/index";

export const AvatarsList = ({ avatars }) => {
  return avatars.map((item, index) => (
    <RoundAvatar key={index} imageSrc={item.image} />
  ));
};
