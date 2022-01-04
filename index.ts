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

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AddRecordResponse = {
  __typename?: 'AddRecordResponse';
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum FilterListType {
  Blacklist = 'BLACKLIST',
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
  createdAt: Scalars['String'];
  device: Scalars['String'];
  inUserId: Scalars['Int'];
  profile?: Maybe<Scalars['String']>;
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
  filterListType?: Maybe<FilterListType>;
  lastRecordId: Scalars['Int'];
  profiles?: Maybe<Array<Maybe<Scalars['String']>>>;
  recordCount: Scalars['Int'];
  records?: Maybe<Array<Maybe<Record>>>;
  role?: Maybe<Role>;
  username?: Maybe<Scalars['String']>;
  whitelist: Array<Maybe<Scalars['String']>>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', accessToken?: string | null | undefined, message?: string | null | undefined, success?: boolean | null | undefined, user?: { __typename?: 'User', email: string, _id: string, username?: string | null | undefined, profiles?: Array<string | null | undefined> | null | undefined, filterListType?: FilterListType | null | undefined, blacklist: Array<string | null | undefined>, whitelist: Array<string | null | undefined>, records?: Array<{ __typename?: 'Record', inUserId: number, value: string, type: string, profile: string, createdAt: string, device: string } | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type OnlineQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlineQuery = { __typename?: 'Query', online?: boolean | null | undefined };

export type SignupMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterResponse', success?: boolean | null | undefined, message?: string | null | undefined } | null | undefined };


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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  AddRecordResponse: ResolverTypeWrapper<AddRecordResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FilterListType: FilterListType;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Record: ResolverTypeWrapper<Record>;
  RecordType: RecordType;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  Role: Role;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  AddRecordResponse: AddRecordResponse;
  Int: Scalars['Int'];
  Boolean: Scalars['Boolean'];
  LoginResponse: LoginResponse;
  Mutation: {};
  Query: {};
  Record: Record;
  RegisterResponse: RegisterResponse;
  User: User;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddRecordResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddRecordResponse'] = ResolversParentTypes['AddRecordResponse']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  accessToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addRecord?: Resolver<Maybe<ResolversTypes['AddRecordResponse']>, ParentType, ContextType, RequireFields<MutationAddRecordArgs, 'device' | 'profile' | 'type' | 'value'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  register?: Resolver<Maybe<ResolversTypes['RegisterResponse']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'password' | 'username'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  online?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  recordsLaterThanId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType, RequireFields<QueryRecordsLaterThanIdArgs, 'id'>>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>;
  usernameExists?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryUsernameExistsArgs, 'username'>>;
};

export type RecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Record'] = ResolversParentTypes['Record']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RecordType'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blacklist?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filterListType?: Resolver<Maybe<ResolversTypes['FilterListType']>, ParentType, ContextType>;
  lastRecordId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  profiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  recordCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  records?: Resolver<Maybe<Array<Maybe<ResolversTypes['Record']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['Role']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  whitelist?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AddRecordResponse?: AddRecordResponseResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Record?: RecordResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';