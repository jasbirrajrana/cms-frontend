import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

interface AboutScreenProps {}

const AboutScreen: React.FC<AboutScreenProps> = () => {
  return (
    <>
      <Container>
        <Box
          as="main"
          display="flex"
          alignItems="center"
          flexDirection="column"
          m="0 auto 0rem auto"
          maxWidth="700px"
        >
          <Flex
            width="100%"
            marginTop="18px"
            marginBottom="18px"
            alignItems="center"
          >
            <Box
              bg="white"
              color="gray.900"
              rounded="full"
              p={1}
              w={100}
              h={100}
            >
              <Image
                src="/icons/me.png"
                alt="Nirmalya Ghosh"
                height={100}
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
          <Box marginTop="23px">
            <Text fontStyle="italic" fontWeight="bold">
              Computer Science Engineer having interest in web-development and
              design with an eye for detail.
            </Text>
          </Box>
          <Box marginTop="21px">
            <Text>
              I'm also a big fan of React.js and have around 2 years experience
              with it. I have also fiddled with Nodejs and GraphQl. I'm eager to
              learn new frameworks, libraries and languages like Angularjs,
              Vue.js and Ruby.
            </Text>
          </Box>
          <Box marginTop="21px">
            <Text>
              Though I spend most of my time writing code for building User
              Interfaces using reactjs ❤️, I also like enjoying working in the
              intersection of design and development. I feel most productive
              when I'm able to design User Interfaces which not only look good
              but has a good performance as well :)
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default AboutScreen;
