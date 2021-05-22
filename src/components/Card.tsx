import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const Card = (props: BoxProps) => (
  <Box
    bg={useColorModeValue("white", "gray.700")}
    py="9"
    px={{ base: "4", md: "10" }}
    shadow="base"
    rounded={{ sm: "lg" }}
    {...props}
  />
);
export default Card;
