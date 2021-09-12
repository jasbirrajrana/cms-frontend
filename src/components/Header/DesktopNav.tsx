import { Box, Stack, Link } from "@chakra-ui/layout";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import React from "react";
import { NAV_ITEMS } from "./NavItems";
import DesktopSubNav from "./DesktopSubNav";
import { Link as RLink } from "react-router-dom";
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
                  fontWeight={500}
                  _hover={{
                    textDecoration: "none",
                  }}>
                  <RLink to={`${navItem.href}`}>{navItem.label}</RLink>
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}>
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
