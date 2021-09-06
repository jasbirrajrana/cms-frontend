import { Tag, WrapItem } from "@chakra-ui/react";
import React from "react";

interface InterestTagProps {
  like?: boolean;
  name?: string;
}

const InterestTag: React.FC<InterestTagProps> = ({ like, name }) => {
  return (
    <>
      <WrapItem>
        <Tag
          size="lg"
          variant="subtle"
          colorScheme={like ? "green" : "red"}
          rounded="lg">
          {name}
        </Tag>
      </WrapItem>
    </>
  );
};
export default InterestTag;
