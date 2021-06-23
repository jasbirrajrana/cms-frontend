import { Avatar } from "@chakra-ui/avatar";
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
        <MenuList>
          <MenuGroup title="Profile">
            {user && user.isAdmin && (
               <MenuItem>
              <Link to="/new">
              New Article
              </Link>
            </MenuItem>
            )}
           
            <MenuItem>Payments </MenuItem>
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
