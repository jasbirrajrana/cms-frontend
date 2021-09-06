import React from "react";
import { useGetAllUsersQuery } from "../generated/graphql";
import Loader from "../components/Loader/Loader";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
} from "@chakra-ui/react";
interface UsersScreenProps {}

const UsersScreen: React.FC<UsersScreenProps> = () => {
  const { loading, error, data } = useGetAllUsersQuery({
    fetchPolicy: "network-only",
  });
  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {data && (
        <>
          <Box width="xl" margin="auto">
            <Table variant="striped">
              <TableCaption>All Users Details</TableCaption>
              <Thead>
                <Tr>
                  <Th>Email</Th>
                  <Th>ID</Th>
                  <Th>Username</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.getAllUsers.map((user) => {
                  return (
                    <>
                      <Tr>
                        <Td>{user.email}</Td>
                        <Td>{user._id}</Td>
                        <Td>{user.username}</Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </>
      )}
    </>
  );
};
export default UsersScreen;
