import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: "include",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
