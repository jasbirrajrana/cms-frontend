import { Avatar } from "@chakra-ui/avatar";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { FiLogOut } from "react-icons/fi";
import { useLogout_MeMutation } from "../generated/graphql";

interface DropDownProps {}

const DropDown: React.FC<DropDownProps> = () => {
  const { user } = useContext(AuthContext);
  const [logout, { client }] = useLogout_MeMutation();
  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </MenuButton>
        <MenuList fontFamily="Ubuntu">
          <MenuGroup title="Profile">
            {user && user.isAdmin && (
              <MenuItem>
                <ChakraLink _hover={{ textDecoration: "none" }}>
                  <Link to="/new">New Article</Link>
                </ChakraLink>
              </MenuItem>
            )}

            {/* {user && user.isSuperAdmin && (
              <MenuItem>
                <ChakraLink _hover={{ textDecoration: "none" }}>
                  <Link to="/users">Users</Link>
                </ChakraLink>
              </MenuItem>
            )} */}
            {user && user.isSuperAdmin && (
              <MenuItem>
                <ChakraLink _hover={{ textDecoration: "none" }}>
                  <Link to="/myposts">My Posts</Link>
                </ChakraLink>
              </MenuItem>
            )}
            {user && (
              <>
                <Button
                  textAlign="left"
                  variant="ghost"
                  colorScheme="red"
                  onClick={async () => {
                    await logout();
                    client.cache.reset();
                  }}>
                  <FiLogOut />
                  <span style={{ marginLeft: "12px" }}>Logout</span>
                </Button>
              </>
            )}
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};
export default DropDown;
