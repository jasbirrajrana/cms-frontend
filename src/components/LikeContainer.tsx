import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LinkedinShareButton } from "react-share";
interface LikeContainerProps {}

const LikeContainer: React.FC<LikeContainerProps> = () => {
  const [isLiked, setIsLike] = useState(false);
  const likeToggle = () => setIsLike(!isLiked);
  return (
    <>
      <Box
        // height="300px"
        // width="100px"
        // position="fixed"
        // left="18%"
        // top="40%"
        width="100%"
        display="flex"
        p="20px"
        flexDirection="row"
        alignItems="center"
        borderBottom="1px solid #f1f1f1">
        <IconButton
          bg="transparent"
          aria-label="Search database"
          icon={
            isLiked ? (
              <AiFillHeart color="#ff2f0b" size={32} />
            ) : (
              <AiOutlineHeart size={32} />
            )
          }
          onClick={likeToggle}
        />
        <Text fontFamily="monospace" fontWeight="bold" ml="22px">
          234
        </Text>
      </Box>
    </>
  );
};
export default LikeContainer;
