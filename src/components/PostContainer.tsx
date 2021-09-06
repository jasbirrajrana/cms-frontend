import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Badge,
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { Link } from "react-router-dom";
import readingTime from "reading-time";
interface PostContainerProps {
  title: string;
  description: string;
  bgColor: string;
  tag: string;
  username: string;
  slug: string;
  body: string;
}

const PostContainer: React.FC<PostContainerProps> = ({
  title,
  description,
  bgColor,
  tag,
  username,
  slug,
  body,
}) => {
  const { text } = readingTime(body);
  return (
    <>
      <Container maxW="container.4xl" mt="20px">
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="650px">
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              mb="22px">
              <Text
                fontSize={"sm"}
                fontWeight={500}
                bg={useColorModeValue("green.100", "green.900")}
                p={2}
                px={3}
                color={"green.500"}
                rounded={"base"}>
                {tag}
              </Text>
              <Text color={useColorModeValue("gray.400", "white")}>{text}</Text>
            </Box>
            <Link to={`/post/${slug}`}>
              <Heading
                letterSpacing="tight"
                mb={2}
                as="h1"
                size="xl"
                _hover={{ color: "#ffcc29" }}>
                {title}
              </Heading>
            </Link>

            <Text mb="22px">{description} [...]</Text>
            <Box display="flex" alignItems="center">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Text color="#B5B5B5" ml="14px">
                @{username}
              </Text>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};
export default PostContainer;
