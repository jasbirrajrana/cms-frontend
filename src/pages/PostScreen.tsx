//@ts-nocheck
import { Avatar } from "@chakra-ui/avatar";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseISO, format } from "date-fns";
import Loader from "../components/Loader/Loader";
import readingTime from "reading-time";
import {
  GetPostByslugDocument,
  GetPostByslugQuery,
  useGetPostByslugQuery,
  useLikeMutation,
} from "../generated/graphql";
import { Image } from "@chakra-ui/image";

import HighlightedMarkdown from "../components/HighlightMarkdown";
// import FeatureProjectCard from "../components/FeatureProjectCard";
// import { useColorMode } from "@chakra-ui/color-mode";
import HelmetSeo from "../components/HelmetSeo";
import { IconButton } from "@chakra-ui/button";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface PostScreenProps {}

const PostScreen: React.FC<PostScreenProps> = () => {
  const [width, setWidth] = useState(1);
  // const { colorMode } = useColorMode();
  const { slug }: any = useParams();
  const [isLiked, setIsLike] = useState(false);
  const likeToggle = () => {
    if (isLiked) {
      return;
    } else {
      Like({
        variables: { postId: data?.getPostByslug._id },
        update: (store, { data }) => {
          if (!data) {
            return null;
          }
          store.writeQuery<GetPostByslugQuery>({
            query: GetPostByslugDocument,
            data: {
              __typename: "Query",
              getPostByslug: data.Like,
            },
          });
        },
      });
      setIsLike(!isLiked);
    }
  };
  const [Like, { loading, error }] = useLikeMutation();
  const {
    error: getPostError,
    loading: getPostLoading,
    data,
  } = useGetPostByslugQuery({
    variables: { slug },
    fetchPolicy: "network-only",
  });
  console.log(data);
  let READING_TIME;
  if (!getPostLoading && !getPostError) {
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      {getPostLoading ? (
        <Loader />
      ) : error ? (
        <Text>{getPostError}</Text>
      ) : (
        <>
          <HelmetSeo
            title={data?.getPostByslug.title}
            content={data?.getPostByslug.description}
          />
          <Box
            h={1}
            as="div"
            bgGradient="linear(to-r, green.200, pink.500)"
            position="sticky"
            top={0}
            zIndex={9999}
            w={`${width}%`}></Box>
          <Center mt="100px">
            <Box w={["100%", 850]}>
              <Stack
                as="article"
                spacing={8}
                justifyContent="center"
                alignItems="center"
                m="0 auto"
                w="100%"
                px={2}>
                <Flex
                  mt="30px"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  // maxWidth="700px"
                  w="100%">
                  <Heading mb={2} size="2xl">
                    {data?.getPostByslug.title}
                  </Heading>
                  <Flex
                    fontFamily="Ubuntu"
                    justify="space-between"
                    align={["initial", "center"]}
                    direction={["column", "row"]}
                    mt={2}
                    fontSize="16px"
                    fontWeight={500}
                    w="100%"
                    mb={4}>
                    <Flex align="center" pt="20px" pb="20px">
                      <Avatar
                        name="Jass"
                        src="https://bit.ly/dan-abramov"
                        mr={2}
                      />
                      <Text color="gray" fontWeight={400}>
                        @{data?.getPostByslug.author.username} /{" "}
                        {format(
                          parseISO(data?.getPostByslug.createdAt),
                          "MMMM dd, yyyy"
                        )}
                      </Text>
                    </Flex>
                    <Text color="gray.500">{READING_TIME}</Text>
                  </Flex>
                  <Image
                    mt="20px"
                    src={data?.getPostByslug.featureImage}
                    alt={data?.getPostByslug.slug}
                  />
                </Flex>
                <HighlightedMarkdown>
                  {data?.getPostByslug.body}
                </HighlightedMarkdown>
                {/* <FeatureProjectCard
                title="Portfolio"
                href="https://jasbirrajrana.live/"
                src={
                  colorMode === "light"
                    ? "/icons/github-dark.png"
                    : "/icons/github-light.png"
                }
                alt="Image of coffee"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </FeatureProjectCard> */}
                <Box
                  width="100%"
                  display="flex"
                  p="20px"
                  flexDirection="row"
                  alignItems="center"
                  borderBottom="1px solid #f1f1f1">
                  <IconButton
                    shadow="1px 1px 2px 2px rgba(255,0,0,0.01)"
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
                    {data?.getPostByslug.likes}
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Center>
        </>
      )}
    </>
  );
};
export default PostScreen;
