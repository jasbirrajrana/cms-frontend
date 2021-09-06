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
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

interface DropDownProps {}

const DropDown: React.FC<DropDownProps> = () => {
  const { user } = useContext(AuthContext);

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

            {user && user.isSuperAdmin && (
              <MenuItem>
                <ChakraLink _hover={{ textDecoration: "none" }}>
                  <Link to="/users">Users</Link>
                </ChakraLink>
              </MenuItem>
            )}
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};
export default DropDown;
