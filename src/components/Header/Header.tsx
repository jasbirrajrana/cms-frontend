import { Button, IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack } from "@chakra-ui/layout";
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

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isSmallThan730] = useMediaQuery("(max-width: 730px)");
  const { isOpen, onToggle } = useDisclosure();
  const { user } = useContext(AuthContext);
  const [logout, { client }] = useLogout_MeMutation();
  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
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
            alignItems="center"
          >
            {/* {!isSmallThan730 && (
              <Link to="/">
                <Heading>Logo</Heading>
              </Link>
            )} */}

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems="center"
          >
            {user ? (
              <>
                <DropDown />
                <Button
                  colorScheme="red"
                  onClick={async () => {
                    await logout();
                    client.cache.reset();
                  }}
                >
                  Logout
                </Button>
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
                  }}
                >
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
