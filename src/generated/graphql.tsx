import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  logout: Scalars["Boolean"];
  login: UserResponse;
  register: UserResponse;
  createPost: Scalars["Boolean"];
  updatePost: Post;
};

export type MutationLoginArgs = {
  password: Scalars["String"];
  email: Scalars["String"];
};

export type MutationRegisterArgs = {
  password: Scalars["String"];
  email: Scalars["String"];
  username: Scalars["String"];
};

export type MutationCreatePostArgs = {
  subtitle?: Maybe<Scalars["String"]>;
  body: Scalars["String"];
  title: Scalars["String"];
};

export type MutationUpdatePostArgs = {
  subtitle?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  slug: Scalars["String"];
};

export type Post = {
  __typename?: "Post";
  _id: Scalars["String"];
  author: User;
  slug: Scalars["String"];
  title: Scalars["String"];
  subtitle: Scalars["String"];
  body: Scalars["String"];
  featureImage: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type Query = {
  __typename?: "Query";
  hello?: Maybe<Scalars["String"]>;
  me?: Maybe<User>;
  getPosts: Array<Post>;
  getMyPosts: Array<Post>;
  getPostByslug: Post;
  getAllPosts: Array<Post>;
};

export type QueryGetPostsArgs = {
  _id: Scalars["String"];
};

export type QueryGetPostByslugArgs = {
  slug: Scalars["String"];
};

export type User = {
  __typename?: "User";
  _id: Scalars["String"];
  username: Scalars["String"];
  email: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = { __typename?: "Query" } & {
  getAllPosts: Array<
    { __typename?: "Post" } & Pick<
      Post,
      "_id" | "title" | "body" | "createdAt" | "updatedAt" | "slug"
    > & {
        author: { __typename?: "User" } & Pick<
          User,
          "_id" | "username" | "email"
        >;
      }
  >;
};

export const GetAllPostsDocument = gql`
  query getAllPosts {
    getAllPosts {
      _id
      title
      body
      createdAt
      updatedAt
      slug
      author {
        _id
        username
        email
      }
    }
  }
`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  );
}
export function useGetAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options
  );
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<
  typeof useGetAllPostsLazyQuery
>;
export type GetAllPostsQueryResult = Apollo.QueryResult<
  GetAllPostsQuery,
  GetAllPostsQueryVariables
>;
