import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Heading, Stack } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import MobileNavItem from "./MobileNavItem";
import { NAV_ITEMS } from "./NavItems";

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        p={4}
        display={{ md: "none" }}
      >
        <Heading>Logo</Heading>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
        {!user && (
          <Box mt="15px">
            <Link to="/login">
              <Button colorScheme="red">Sign in</Button>
            </Link>
          </Box>
        )}
      </Stack>
    </>
  );
};
export default MobileNav;
