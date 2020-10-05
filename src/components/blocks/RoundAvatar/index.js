import React from "react";

import { AvatarImage } from "./styles";

export const RoundAvatar = ({ imageSrc, width, height }) => {
  return <AvatarImage src={imageSrc} width={width} height={height} />;
};
