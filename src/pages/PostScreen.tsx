//@ts-nocheck
import { Avatar } from "@chakra-ui/avatar";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseISO, format } from "date-fns";
import Loader from "../components/Loader/Loader";
import readingTime from "reading-time";
import { useGetPostQuery } from "../generated/graphql";
import { Image } from "@chakra-ui/image";
import {
  FcDoughnutChart,
  FcMultipleDevices,
  FcPrivacy,
  FcTimeline,
} from "react-icons/fc";
import HighlightedMarkdown from "../components/HighlightMarkdown";
import FeatureProjectCard from "../components/FeatureProjectCard";
import { useColorMode } from "@chakra-ui/color-mode";

interface PostScreenProps {}

const PostScreen: React.FC<PostScreenProps> = () => {
  const [width, setWidth] = useState(1);
  const { colorMode } = useColorMode();
  const { slug }: any = useParams();
  console.log(slug);
  const { error, loading, data } = useGetPostQuery({
    variables: { slug },
  });
  let READING_TIME;
  if (!loading && !error) {
    const j = readingTime(data?.getPostByslug.body!);
    READING_TIME = j.text;
  }

  const handleScroll = () => {
    let Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setWidth(ScrollPercent);
  };
  const iconColor = {
    light: "gray.600",
    dark: "gray.300",
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <Box
            h={1}
            as="div"
            bgGradient="linear(to-r, green.200, pink.500)"
            position="sticky"
            top={0}
            zIndex={100}
            w={`${width}%`}
          ></Box>

          <Container maxW="container.4xl">
            <Stack
              as="article"
              spacing={8}
              justifyContent="center"
              alignItems="flex-start"
              m="0 auto 4rem auto"
              maxWidth="700px"
              w="100%"
              px={2}
            >
              <Flex
                mt="40px"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                maxWidth="700px"
                w="100%"
              >
                <Heading
                  letterSpacing="tight"
                  mb={2}
                  size="2xl"
                  fontFamily="sans-serif"
                >
                  {data?.getPostByslug.title}
                </Heading>
                <Flex
                  justify="space-between"
                  align={["initial", "center"]}
                  alignItems="center"
                  direction={["column", "row"]}
                  mt={2}
                  w="100%"
                  mb={4}
                >
                  <Flex
                    align="center"
                    mt="20px"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Avatar
                      name="Jass"
                      src="https://bit.ly/dan-abramov"
                      mr={2}
                    />
                    <Text>
                      @{data?.getPostByslug.author.username} /{" "}
                      {format(
                        parseISO(data?.getPostByslug.createdAt),
                        "MMMM dd, yyyy"
                      )}
                    </Text>
                  </Flex>
                  <Text color="gray.500" mt="18px">
                    {READING_TIME}
                  </Text>
                </Flex>
                <Image
                  mt="20px"
                  src={data?.getPostByslug.featureImage}
                  alt={data?.getPostByslug.slug}
                />
                <HighlightedMarkdown>
                  {data?.getPostByslug.body}
                </HighlightedMarkdown>
                <FeatureProjectCard
                  title="Portfolio"
                  href="https://jasbirrajrana.live/"
                  src={
                    colorMode === "light"
                      ? "/icons/github-dark.png"
                      : "/icons/github-light.png"
                  }
                  alt="Image of coffee"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </FeatureProjectCard>
              </Flex>
            </Stack>
          </Container>
        </>
      )}
    </>
  );
};
export default PostScreen;
