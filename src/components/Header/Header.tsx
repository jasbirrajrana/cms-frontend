import { Button, IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Collapse } from "@chakra-ui/transition";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { AuthContext } from "../../context/auth";
import DropDown from "../DropDown";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useLogout_MeMutation } from "../../generated/graphql";
import { Image, useColorMode } from "@chakra-ui/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { toggleColorMode } = useColorMode();

  const text = useColorModeValue("dark", "light");
  const [isSmallThan530] = useMediaQuery("(max-width: 530px)");
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useContext(AuthContext);
  const [logout, { client }] = useLogout_MeMutation();
  console.log("isSmallThan630", isSmallThan530);
  return (
    <>
      <Box
        position="fixed"
        width="100%"
        top="0"
        zIndex="modal"
        fontFamily="Ubuntu">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 6 }}
          px={{ base: isSmallThan530 ? "6" : "28" }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            mr="-70px"
            display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            alignItems="center">
            <Link to="/">
              <Heading
                // fontSize="28px"
                fontSize={isSmallThan530 ? "22px" : "28px"}
                fontFamily="Kristi"
                letterSpacing="2px"
                color={text === "dark" ? "blackAlpha.800" : "white"}>
                &lt; Jasbir /&gt;
              </Heading>
            </Link>

            <Flex display={{ base: "none", md: "flex" }} ml={100}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems="center">
            {user ? (
              <>
                <DropDown />
                {/* <Button
                  colorScheme="red"
                  onClick={async () => {
                    await logout();
                    client.cache.reset();
                  }}>
                  Logout
                </Button> */}
              </>
            ) : (
              <Link to="/login">
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"pink.400"}
                  _hover={{
                    bg: "pink.300",
                  }}>
                  Sign In
                </Button>
              </Link>
            )}

            <ColorModeSwitcher />
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );
};
export default Header;
