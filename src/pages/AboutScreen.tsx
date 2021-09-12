import {
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react";
import CenterContainer from "../components/CenterContainer";
import InterestTag from "../components/InterestTag";
import interests from "../data/interests.json";
interface AboutScreenProps {}

const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <>
      <Box mt="100px">
        <CenterContainer>
          <VStack spacing={8}>
            <CenterContainer>
              <VStack align="start">
                <Flex
                  width="100%"
                  marginTop="18px"
                  marginBottom="18px"
                  alignItems="center">
                  <Box
                    bg="white"
                    color="gray.900"
                    rounded="full"
                    p={0.2}
                    borderRadius="50%"
                    border="3px solid orange"
                    w={100}
                    h={100}>
                    <Image
                      src="/icons/me.png"
                      alt="Nirmalya Ghosh"
                      objectFit="contain"
                      width={100}
                      quality={100}
                      priority
                    />
                  </Box>
                  <Box>
                    <VStack spacing={2} align="left" marginLeft="24px">
                      <Heading as="h1" size="xl">
                        Jasbir Raj Rana
                      </Heading>
                      <Text>A little bit about me</Text>
                    </VStack>
                  </Box>
                </Flex>
                <Text>
                  Hi I'm Jasbir Raj Rana a Full stack Web Developer focused on
                  great web experiences. Designing and Coding have been my
                  passion since the days I started working with computers but I
                  found myself into web design/development since 2019. I enjoy
                  creating beautifully designed, intuitive and functional
                  websites.
                </Text>
                <Text>
                  I'm also a big fan of React.js and have around 2 years
                  experience with it. I have also fiddled with Nodejs and
                  GraphQl. I'm eager to learn new frameworks, libraries and
                  languages like Angularjs, Vue.js and Ruby.
                </Text>
              </VStack>
            </CenterContainer>
            <CenterContainer>
              <VStack align="stretch" spacing={4}>
                <Heading as="h3" size="lg">
                  Work
                </Heading>
                <Text>
                  Though I spend most of my time writing code for building User
                  Interfaces using reactjs ❤️, I also like enjoying working in
                  the intersection of design and development. I feel most
                  productive when I'm able to design User Interfaces which not
                  only look good but has a good performance as well.
                </Text>
              </VStack>
            </CenterContainer>
            {/* <CenterContainer>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2">😁</Heading>
                <Wrap>
                  {interests.like.map((el) => (
                    <InterestTag name={el} like />
                  ))}
                </Wrap>
              </VStack>
            </CenterContainer> */}
            {/* <CenterContainer>
              <VStack align="stretch" spacing={4}>
                <Heading as="h2">😒</Heading>
                <Wrap>
                  {interests.dislike.map((el) => (
                    <InterestTag name={el} />
                  ))}
                </Wrap>
              </VStack>
            </CenterContainer> */}
          </VStack>
        </CenterContainer>
      </Box>
    </>
  );
};
export default AboutScreen;
