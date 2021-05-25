import { Heading } from "@chakra-ui/layout";
import React from "react";
import Loader from "../components/Loader/Loader";
import PostContainer from "../components/PostContainer";
import { useGetPostsQuery } from "../generated/graphql";
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { loading, error, data } = useGetPostsQuery();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }
  console.log(data && data);
  return (
    <>
      {data &&
        data.getAllPosts.map((x) => {
          return (
            <>
              <PostContainer title={x.title} description={x.description} />
            </>
          );
        })}
    </>
  );
};
export default HomeScreen;
