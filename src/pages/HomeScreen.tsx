import { Box } from "@chakra-ui/react";
import React from "react";
import HelmetSeo from "../components/HelmetSeo";
import Loader from "../components/Loader/Loader";
import PostContainer from "../components/PostContainer";
import { useGetPostsQuery } from "../generated/graphql";
import { isOdd } from "../utils/isOdd";
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { loading, error, data } = useGetPostsQuery({
    fetchPolicy: "network-only",
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    console.log(error);
  }
  console.log(data && data);
  return (
    <>
      <Box mt="130px">
        {data &&
          data.getAllPosts.map((x, i) => {
            return (
              <>
                <HelmetSeo
                  title="Posts | jasbirrajrana"
                  content={x.description}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
                <PostContainer
                  title={x.title}
                  description={x.description}
                  bgColor={isOdd(i) ? "#F9F9F9" : "#FFFFFF"}
                  tag={x.tag}
                  username={x.author.username}
                  slug={x.slug}
                  body={x.body}
                />
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
      </Box>
    </>
  );
};
export default HomeScreen;
