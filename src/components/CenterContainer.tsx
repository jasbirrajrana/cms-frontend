import { Box, Center } from "@chakra-ui/react";
import React from "react";

interface CenterContainerProps {}

const CenterContainer: React.FC<CenterContainerProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <>
      <Center as="section" {...rest} w="100%">
        <Box
          w="full"
          mx="auto"
          maxW="3xl"
          px={{ base: "6", md: "8" }}
          {...props}>
          {children}
        </Box>
      </Center>
    </>
  );
};
export default CenterContainer;
