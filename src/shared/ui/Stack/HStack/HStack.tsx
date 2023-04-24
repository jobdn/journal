import React from "react";

import { FlexProps } from "../Flex/types";
import { Flex } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack: React.FC<HStackProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Flex {...otherProps} direction="row">
      {children}
    </Flex>
  );
};
