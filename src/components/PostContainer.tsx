import { Box, Heading, Text } from "@chakra-ui/layout";
import React from "react";

interface PostContainerProps {
  title: string;
  description: string;
}

const PostContainer: React.FC<PostContainerProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <Box>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Box>
    </>
  );
};
export default PostContainer;
