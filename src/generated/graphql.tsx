import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logout: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  Like: Scalars['Float'];
  createPost: Scalars['Boolean'];
  updatePost: Scalars['Boolean'];
  confirmUser: UserResponse;
  upload: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLikeArgs = {
  postId: Scalars['String'];
};


export type MutationCreatePostArgs = {
  tag: Scalars['String'];
  featureImage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  featureImage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationUploadArgs = {
  file: Scalars['Upload'];
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String'];
  author: User;
  slug: Scalars['String'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
  body: Scalars['String'];
  description: Scalars['String'];
  likes: Scalars['Float'];
  tag: Scalars['String'];
  featureImage: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  login?: Maybe<User>;
  getPosts: Array<Post>;
  getAllUsers: Array<User>;
  getMyPosts: Array<Post>;
  getPostByslug: Post;
  getAllPosts: Array<Post>;
  getPostById: Post;
};


export type QueryLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type QueryGetPostsArgs = {
  _id: Scalars['String'];
};


export type QueryGetPostByslugArgs = {
  slug: Scalars['String'];
};


export type QueryGetPostByIdArgs = {
  post_id: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  isVerfied: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  isSuperAdmin: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  goingForVerification?: Maybe<Scalars['Boolean']>;
};

export type LikeMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type LikeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'Like'>
);

export type ConfirmUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserMutation = (
  { __typename?: 'Mutation' }
  & { confirmUser: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, '_id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'isVerfied'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message'>
    )>> }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  description: Scalars['String'];
  tag: Scalars['String'];
  subtitle: Scalars['String'];
  featureImage: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createPost'>
);

export type GetMyPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyPostsQuery = (
  { __typename?: 'Query' }
  & { getMyPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, '_id' | 'title' | 'body' | 'slug' | 'likes' | 'createdAt' | 'updatedAt' | 'tag' | 'description'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'username' | 'email'>
    ) }
  )> }
);

export type GetPostByIdQueryVariables = Exact<{
  post_id: Scalars['String'];
}>;


export type GetPostByIdQuery = (
  { __typename?: 'Query' }
  & { getPostById: (
    { __typename?: 'Post' }
    & Pick<Post, '_id' | 'slug' | 'createdAt' | 'updatedAt' | 'body' | 'subtitle' | 'featureImage' | 'tag' | 'likes' | 'title' | 'description'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'username' | 'email'>
    ) }
  ) }
);

export type GetPostByslugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPostByslugQuery = (
  { __typename?: 'Query' }
  & { getPostByslug: (
    { __typename?: 'Post' }
    & Pick<Post, '_id' | 'slug' | 'createdAt' | 'updatedAt' | 'body' | 'featureImage' | 'likes' | 'title' | 'description'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'username' | 'email'>
    ) }
  ) }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { getAllPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, '_id' | 'title' | 'body' | 'slug' | 'likes' | 'tag' | 'description'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, '_id' | 'username' | 'email'>
    ) }
  )> }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'isAdmin' | 'isSuperAdmin' | '_id' | 'email' | 'createdAt' | 'updatedAt'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'email' | 'isAdmin' | '_id' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type Logout_MeMutationVariables = Exact<{ [key: string]: never; }>;


export type Logout_MeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | '_id' | 'email' | 'isAdmin' | 'isSuperAdmin'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'email' | '_id' | 'createdAt' | 'updatedAt'>
    )> }
  ) }
);

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  featureImage?: Maybe<Scalars['String']>;
}>;


export type UpdatePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updatePost'>
);

export type UploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type UploadMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'upload'>
);


export const LikeDocument = gql`
    mutation Like($postId: String!) {
  Like(postId: $postId)
}
    `;
export type LikeMutationFn = Apollo.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: Apollo.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, options);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = Apollo.MutationResult<LikeMutation>;
export type LikeMutationOptions = Apollo.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const ConfirmUserDocument = gql`
    mutation confirmUser($token: String!) {
  confirmUser(token: $token) {
    user {
      _id
      createdAt
      updatedAt
      username
      email
      isVerfied
    }
    errors {
      message
    }
  }
}
    `;
export type ConfirmUserMutationFn = Apollo.MutationFunction<ConfirmUserMutation, ConfirmUserMutationVariables>;

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, options);
      }
export type ConfirmUserMutationHookResult = ReturnType<typeof useConfirmUserMutation>;
export type ConfirmUserMutationResult = Apollo.MutationResult<ConfirmUserMutation>;
export type ConfirmUserMutationOptions = Apollo.BaseMutationOptions<ConfirmUserMutation, ConfirmUserMutationVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $body: String!, $description: String!, $tag: String!, $subtitle: String!, $featureImage: String!) {
  createPost(
    title: $title
    body: $body
    description: $description
    tag: $tag
    subtitle: $subtitle
    featureImage: $featureImage
  )
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      description: // value for 'description'
 *      tag: // value for 'tag'
 *      subtitle: // value for 'subtitle'
 *      featureImage: // value for 'featureImage'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const GetMyPostsDocument = gql`
    query getMyPosts {
  getMyPosts {
    _id
    title
    body
    slug
    likes
    createdAt
    updatedAt
    tag
    description
    author {
      _id
      username
      email
    }
  }
}
    `;

/**
 * __useGetMyPostsQuery__
 *
 * To run a query within a React component, call `useGetMyPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyPostsQuery, GetMyPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyPostsQuery, GetMyPostsQueryVariables>(GetMyPostsDocument, options);
      }
export function useGetMyPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyPostsQuery, GetMyPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyPostsQuery, GetMyPostsQueryVariables>(GetMyPostsDocument, options);
        }
export type GetMyPostsQueryHookResult = ReturnType<typeof useGetMyPostsQuery>;
export type GetMyPostsLazyQueryHookResult = ReturnType<typeof useGetMyPostsLazyQuery>;
export type GetMyPostsQueryResult = Apollo.QueryResult<GetMyPostsQuery, GetMyPostsQueryVariables>;
export const GetPostByIdDocument = gql`
    query getPostById($post_id: String!) {
  getPostById(post_id: $post_id) {
    _id
    slug
    createdAt
    updatedAt
    body
    subtitle
    featureImage
    tag
    likes
    title
    description
    author {
      _id
      username
      email
    }
  }
}
    `;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      post_id: // value for 'post_id'
 *   },
 * });
 */
export function useGetPostByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
      }
export function useGetPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByIdQuery, GetPostByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(GetPostByIdDocument, options);
        }
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<typeof useGetPostByIdLazyQuery>;
export type GetPostByIdQueryResult = Apollo.QueryResult<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const GetPostByslugDocument = gql`
    query getPostByslug($slug: String!) {
  getPostByslug(slug: $slug) {
    _id
    slug
    createdAt
    updatedAt
    body
    featureImage
    likes
    title
    description
    author {
      _id
      username
      email
    }
  }
}
    `;

/**
 * __useGetPostByslugQuery__
 *
 * To run a query within a React component, call `useGetPostByslugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByslugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByslugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostByslugQuery(baseOptions: Apollo.QueryHookOptions<GetPostByslugQuery, GetPostByslugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByslugQuery, GetPostByslugQueryVariables>(GetPostByslugDocument, options);
      }
export function useGetPostByslugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByslugQuery, GetPostByslugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByslugQuery, GetPostByslugQueryVariables>(GetPostByslugDocument, options);
        }
export type GetPostByslugQueryHookResult = ReturnType<typeof useGetPostByslugQuery>;
export type GetPostByslugLazyQueryHookResult = ReturnType<typeof useGetPostByslugLazyQuery>;
export type GetPostByslugQueryResult = Apollo.QueryResult<GetPostByslugQuery, GetPostByslugQueryVariables>;
export const GetPostsDocument = gql`
    query getPosts {
  getAllPosts {
    _id
    title
    body
    slug
    likes
    tag
    description
    author {
      _id
      username
      email
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    username
    isAdmin
    isSuperAdmin
    _id
    email
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      email
      isAdmin
      _id
      createdAt
      updatedAt
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const Logout_MeDocument = gql`
    mutation logout_me {
  logout
}
    `;
export type Logout_MeMutationFn = Apollo.MutationFunction<Logout_MeMutation, Logout_MeMutationVariables>;

/**
 * __useLogout_MeMutation__
 *
 * To run a mutation, you first call `useLogout_MeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogout_MeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMeMutation, { data, loading, error }] = useLogout_MeMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogout_MeMutation(baseOptions?: Apollo.MutationHookOptions<Logout_MeMutation, Logout_MeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Logout_MeMutation, Logout_MeMutationVariables>(Logout_MeDocument, options);
      }
export type Logout_MeMutationHookResult = ReturnType<typeof useLogout_MeMutation>;
export type Logout_MeMutationResult = Apollo.MutationResult<Logout_MeMutation>;
export type Logout_MeMutationOptions = Apollo.BaseMutationOptions<Logout_MeMutation, Logout_MeMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    username
    _id
    email
    isAdmin
    isSuperAdmin
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      email
      _id
      createdAt
      updatedAt
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdatePostDocument = gql`
    mutation updatePost($id: String!, $title: String, $body: String, $description: String, $tag: String, $subtitle: String, $featureImage: String) {
  updatePost(
    id: $id
    title: $title
    body: $body
    description: $description
    tag: $tag
    subtitle: $subtitle
    featureImage: $featureImage
  )
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      description: // value for 'description'
 *      tag: // value for 'tag'
 *      subtitle: // value for 'subtitle'
 *      featureImage: // value for 'featureImage'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const UploadDocument = gql`
    mutation upload($file: Upload!) {
  upload(file: $file)
}
    `;
export type UploadMutationFn = Apollo.MutationFunction<UploadMutation, UploadMutationVariables>;

/**
 * __useUploadMutation__
 *
 * To run a mutation, you first call `useUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMutation, { data, loading, error }] = useUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMutation(baseOptions?: Apollo.MutationHookOptions<UploadMutation, UploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMutation, UploadMutationVariables>(UploadDocument, options);
      }
export type UploadMutationHookResult = ReturnType<typeof useUploadMutation>;
export type UploadMutationResult = Apollo.MutationResult<UploadMutation>;
export type UploadMutationOptions = Apollo.BaseMutationOptions<UploadMutation, UploadMutationVariables>;