import React from "react";
import { useGetMyPostsQuery } from "../generated/graphql";
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
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiEditBoxLine } from "react-icons/ri";
import { format, parseISO } from "date-fns";
interface AdminPostsListScreenProps {}

const AdminPostsListScreen: React.FC<AdminPostsListScreenProps> = () => {
  const { loading, error, data } = useGetMyPostsQuery({
    fetchPolicy: "network-only",
  });
  console.log(data);
  return (
    <>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {data && (
        <>
          <Center minH="80vh" fontFamily="revert" fontWeight="black">
            <Box w={["100%", 950]}>
              <Table variant="striped">
                <TableCaption>All Yours Posts</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Title</Th>
                    <Th>CREATED ON</Th>
                    <Th>EDIT/MANAGE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.getMyPosts.map((post) => {
                    return (
                      <>
                        <Tr>
                          <Td>
                            <Link to={`/post/${post.slug}`}>{post.title}</Link>
                          </Td>
                          <Td>
                            {format(parseISO(post.createdAt), "MMMM dd, yyyy")}
                          </Td>
                          <Td>
                            <Link to={`/editpost/${post._id}`}>
                              <RiEditBoxLine />
                            </Link>
                          </Td>
                        </Tr>
                      </>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Center>
        </>
      )}
    </>
  );
};
export default AdminPostsListScreen;
