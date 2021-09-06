import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const client = new ApolloClient({
  //@ts-ignore
  link: uploadLink,
  cache: new InMemoryCache(),
});
