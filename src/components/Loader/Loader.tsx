import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <>
      <Center height="40vh" width="auto">
        <Spinner size="xl" />
      </Center>
    </>
  );
};
export default Loader;
