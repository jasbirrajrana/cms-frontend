import { Box, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <>
      <Center position="fixed" top="50%" left="50%">
        <Spinner size="xl" thickness="3px" />
      </Center>
    </>
  );
};
export default Loader;
