import { Heading } from "@chakra-ui/layout";
import React from "react";
import Loader from "../components/Loader/Loader";
import PostContainer from "../components/PostContainer";
import { useGetPostsQuery } from "../generated/graphql";
import { isOdd } from "../utils/isOdd";
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
        data.getAllPosts.map((x, i) => {
          return (
            <>
              <PostContainer
                title={x.title}
                description={x.description}
                bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                tag={x.tag}
                username={x.author.username}
                slug={x.slug}
                body={x.body}
              />
            </>
          );
        })}
    </>
  );
};
export default HomeScreen;
