import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddRecordResponse = {
  __typename?: 'AddRecordResponse';
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum FilterListType {
  Blacklist = 'BLACKLIST',
  Mixed = 'MIXED',
  Whitelist = 'WHITELIST'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addRecord?: Maybe<AddRecordResponse>;
  login?: Maybe<LoginResponse>;
  register?: Maybe<RegisterResponse>;
};


export type MutationAddRecordArgs = {
  device: Scalars['String'];
  profile: Scalars['String'];
  type: RecordType;
  value: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  online?: Maybe<Scalars['Boolean']>;
  records?: Maybe<Array<Maybe<Record>>>;
  recordsLaterThanId?: Maybe<Array<Maybe<Record>>>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  usernameExists?: Maybe<Scalars['Boolean']>;
};


export type QueryRecordsLaterThanIdArgs = {
  id: Scalars['Int'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryUsernameExistsArgs = {
  username: Scalars['String'];
};

export type Record = {
  __typename?: 'Record';
  createdAt?: Maybe<Scalars['String']>;
  device: Scalars['String'];
  inUserId: Scalars['Int'];
  profile: Scalars['String'];
  type: RecordType;
  userId: Scalars['String'];
  value: Scalars['String'];
};

export enum RecordType {
  Image = 'IMAGE',
  Text = 'TEXT'
}

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  blacklist: Array<Maybe<Scalars['String']>>;
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  filterListType: FilterListType;
  lastRecordId: Scalars['Int'];
  profiles?: Maybe<Array<Maybe<Scalars['String']>>>;
  recordCount: Scalars['Int'];
  records?: Maybe<Array<Maybe<Record>>>;
  role: Role;
  username: Scalars['String'];
  whitelist: Array<Maybe<Scalars['String']>>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', accessToken?: string | null | undefined, message?: string | null | undefined, success?: boolean | null | undefined, user?: { __typename?: 'User', email: string, _id: string, username: string, profiles?: Array<string | null | undefined> | null | undefined, filterListType: FilterListType, blacklist: Array<string | null | undefined>, whitelist: Array<string | null | undefined>, records?: Array<{ __typename?: 'Record', inUserId: number, value: string, type: RecordType, profile: string, createdAt?: string | null | undefined, device: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type OnlineQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineQuery = { __typename?: 'Query', online?: boolean | null | undefined };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterResponse', success?: boolean | null | undefined, message?: string | null | undefined } | null | undefined };

export type AddRecordMutationVariables = Exact<{
  type: RecordType;
  value: Scalars['String'];
  device: Scalars['String'];
  profile: Scalars['String'];
}>;


export type AddRecordMutation = { __typename?: 'Mutation', addRecord?: { __typename?: 'AddRecordResponse', success?: boolean | null | undefined, id?: number | null | undefined, message?: string | null | undefined } | null | undefined };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    message
    user {
      email
      _id
      username
      profiles
      filterListType
      blacklist
      whitelist
      records {
        inUserId
        value
        type
        profile
        createdAt
        device
      }
    }
    success
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(options: VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginMutation, LoginMutationVariables>>) {
  return VueApolloComposable.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginMutation, LoginMutationVariables>;
export const OnlineDocument = gql`
    query online {
  online
}
    `;

/**
 * __useOnlineQuery__
 *
 * To run a query within a Vue component, call `useOnlineQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlineQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useOnlineQuery();
 */
export function useOnlineQuery(options: VueApolloComposable.UseQueryOptions<OnlineQuery, OnlineQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<OnlineQuery, OnlineQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<OnlineQuery, OnlineQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<OnlineQuery, OnlineQueryVariables>(OnlineDocument, {}, options);
}
export type OnlineQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<OnlineQuery, OnlineQueryVariables>;
export const SignupDocument = gql`
    mutation Signup($username: String!, $email: String!, $password: String!) {
  register(username: $username, email: $email, password: $password) {
    success
    message
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSignupMutation({
 *   variables: {
 *     username: // value for 'username'
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(options: VueApolloComposable.UseMutationOptions<SignupMutation, SignupMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<SignupMutation, SignupMutationVariables>>) {
  return VueApolloComposable.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
}
export type SignupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<SignupMutation, SignupMutationVariables>;
export const AddRecordDocument = gql`
    mutation addRecord($type: RecordType!, $value: String!, $device: String!, $profile: String!) {
  addRecord(type: $type, value: $value, device: $device, profile: $profile) {
    success
    id
    message
  }
}
    `;

/**
 * __useAddRecordMutation__
 *
 * To run a mutation, you first call `useAddRecordMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAddRecordMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAddRecordMutation({
 *   variables: {
 *     type: // value for 'type'
 *     value: // value for 'value'
 *     device: // value for 'device'
 *     profile: // value for 'profile'
 *   },
 * });
 */
export function useAddRecordMutation(options: VueApolloComposable.UseMutationOptions<AddRecordMutation, AddRecordMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AddRecordMutation, AddRecordMutationVariables>>) {
  return VueApolloComposable.useMutation<AddRecordMutation, AddRecordMutationVariables>(AddRecordDocument, options);
}
export type AddRecordMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AddRecordMutation, AddRecordMutationVariables>;