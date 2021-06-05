import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "gray.400",
    dark: "gray.500",
  };
  const footerHoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  return (
    <>
      <Flex
        alignSelf="flex-end"
        padding="13px"
        direction="row"
        align="center"
        display={["none", "flex", "flex"]}
        justifyContent="space-around"
      >
        <Box color="gray.400">Made with ❤️ by @jasbirrajrana</Box>
        <Flex
          align="center"
          mb={4}
          direction="column"
          display={["none", "flex", "flex"]}
        >
          <div>
            <a href="https://twitter.com/jasbirrajrana" title="Twitter">
              <IconButton
                aria-label="Twitter"
                icon={<FiTwitter />}
                size="lg"
                color={borderIcon[colorMode]}
                variant="ghost"
                _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              />
            </a>
            <a href="https://github.com/jasbirrajrana" title="GitHub">
              <IconButton
                aria-label="GitHub"
                icon={<FiGithub />}
                size="lg"
                color={borderIcon[colorMode]}
                variant="ghost"
                _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jasbirrajrana"
              title="LinkedIn"
            >
              <IconButton
                aria-label="LinkedIn"
                icon={<FiLinkedin />}
                size="lg"
                color={borderIcon[colorMode]}
                variant="ghost"
                _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              />
            </a>

            <a href="mailto:jasbirrajrana6699@gmail.com" title="Email">
              <IconButton
                aria-label="Email"
                icon={<FiMail />}
                size="lg"
                color={borderIcon[colorMode]}
                variant="ghost"
                _hover={{ backgroundColor: footerHoverBg[colorMode] }}
              />
            </a>
          </div>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
