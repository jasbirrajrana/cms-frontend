import { useColorModeValue } from "@chakra-ui/react";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import React from "react";
import { NAV_ITEMS } from "./NavItems";
import DesktopSubNav from "./DesktopSubNav";
interface DesktopNavProps {}

const DesktopNav: React.FC<DesktopNavProps> = () => {
  return (
    <>
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  //   color={useColorModeValue("gray.600", "gray.200")}
                  _hover={{
                    textDecoration: "none",
                    // color: useColorModeValue("gray.800", "white"),
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  //   bg={useColorModeValue("white", "gray.800")}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <>
                        <DesktopSubNav key={child.label} {...child} />
                      </>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </>
  );
};
export default DesktopNav;
