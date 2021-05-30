import { useColorMode } from "@chakra-ui/color-mode";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, LinkBox, Stack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FeatureProjectCardProps {
  title: string;
  href: string;
  children: any;
  src: any;
  alt: string;
}

const FeatureProjectCard: React.FC<FeatureProjectCardProps> = ({
  title,
  src,
  alt,
  children,
  href,
}) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.1)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.9)",
  };
  const [opacity, setOpacity] = useState(0);
  return (
    <>
      {" "}
      <LinkBox
        as="a"
        _hover={{
          boxShadow: boxShadowColor[colorMode],
          textDecoration: "none",
        }}
        mt={4}
        onMouseOver={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
      >
        <a href={href} target="_blank" rel="noreferrer">
          {/* <Link title={title}> */}
          <Flex
            align="center"
            border="1px solid"
            borderColor={borderColor[colorMode]}
            borderRadius={4}
            p={4}
          >
            <Image
              src={src}
              alt={alt}
              width={["40px", "50px", "60px"]}
              ml={2}
              mr={4}
            />
            <Stack>
              <Flex justify="space-between">
                <Heading as="h4" size="md" fontWeight="bold" mb={2}>
                  {title}
                </Heading>
                <ExternalLinkIcon opacity={opacity} fontSize="2xl" />
              </Flex>
              <Text color={colorSecondary[colorMode]}>{children}</Text>
            </Stack>
          </Flex>
          {/* </Link> */}
        </a>
      </LinkBox>
    </>
  );
};
export default FeatureProjectCard;
