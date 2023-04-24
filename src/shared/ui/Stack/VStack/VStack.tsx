import React from "react";

import { FlexProps } from "../Flex/types";
import { Flex } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack: React.FC<VStackProps> = (props) => {
  const { children, align = "start", ...otherProps } = props;

  return (
    <Flex {...otherProps} align={align} direction="column">
      {children}
    </Flex>
  );
};
