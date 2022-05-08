import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export enum AddFilterListType {
  Blacklist = 'BLACKLIST',
  Whitelist = 'WHITELIST'
}

export type AddFilterResponse = {
  __typename?: 'AddFilterResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type AddRecordResponse = {
  __typename?: 'AddRecordResponse';
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ChangeFilterTypeResponse = {
  __typename?: 'ChangeFilterTypeResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteFilterResponse = {
  __typename?: 'DeleteFilterResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteRecordResponse = {
  __typename?: 'DeleteRecordResponse';
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
  addFilter?: Maybe<AddFilterResponse>;
  addProfile?: Maybe<UpdateProfileResponse>;
  addRecord?: Maybe<AddRecordResponse>;
  changeFilterType?: Maybe<ChangeFilterTypeResponse>;
  deleteFilter?: Maybe<DeleteFilterResponse>;
  deleteProfile?: Maybe<UpdateProfileResponse>;
  deleteRecord?: Maybe<DeleteRecordResponse>;
  login?: Maybe<LoginResponse>;
  register?: Maybe<RegisterResponse>;
  renameProfile?: Maybe<RenameProfileResponse>;
  sendEmailOwnershipVerificationCode?: Maybe<StandardResponse>;
  updateRecord?: Maybe<UpdateRecordResponse>;
  verifyEmailOwnership?: Maybe<VerifyEmailOwnershipResponse>;
};


export type MutationAddFilterArgs = {
  regex: Scalars['String'];
  type: AddFilterListType;
};


export type MutationAddProfileArgs = {
  profile: Scalars['String'];
};


export type MutationAddRecordArgs = {
  device: Scalars['String'];
  profile: Scalars['String'];
  type: RecordType;
  value: Scalars['String'];
};


export type MutationChangeFilterTypeArgs = {
  type: FilterListType;
};


export type MutationDeleteFilterArgs = {
  filter: Scalars['String'];
  filterListType: FilterListType;
};


export type MutationDeleteProfileArgs = {
  profile: Scalars['String'];
};


export type MutationDeleteRecordArgs = {
  inUserId: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRenameProfileArgs = {
  newProfile: Scalars['String'];
  originalProfile: Scalars['String'];
};


export type MutationSendEmailOwnershipVerificationCodeArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateRecordArgs = {
  inUserId: Scalars['Int'];
  newValue: Scalars['String'];
};


export type MutationVerifyEmailOwnershipArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  emailExists?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  online?: Maybe<Scalars['Boolean']>;
  records?: Maybe<Array<Maybe<Record>>>;
  recordsLaterThanId?: Maybe<Array<Maybe<Record>>>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  usernameExists?: Maybe<Scalars['Boolean']>;
};


export type QueryEmailExistsArgs = {
  email: Scalars['String'];
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

export type RenameProfileResponse = {
  __typename?: 'RenameProfileResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type StandardResponse = {
  __typename?: 'StandardResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateRecordResponse = {
  __typename?: 'UpdateRecordResponse';
  message: Scalars['String'];
  record?: Maybe<Record>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  activated: Scalars['Boolean'];
  blacklist: Array<Maybe<Scalars['String']>>;
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  filterListType: FilterListType;
  lastRecordId: Scalars['Int'];
  profiles?: Maybe<Array<Maybe<Scalars['String']>>>;
  recordCount: Scalars['Int'];
  recordQuota: Scalars['Int'];
  records?: Maybe<Array<Maybe<Record>>>;
  role: Role;
  username: Scalars['String'];
  whitelist: Array<Maybe<Scalars['String']>>;
};

export type VerifyEmailOwnershipResponse = {
  __typename?: 'VerifyEmailOwnershipResponse';
  chanceLeft?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

import { ObjectId } from 'mongodb';

export const AddRecord = gql`
    mutation addRecord($type: RecordType!, $value: String!, $device: String!, $profile: String!) {
  addRecord(type: $type, value: $value, device: $device, profile: $profile) {
    success
    id
    message
  }
}
    `;
export const DeleteRecord = gql`
    mutation deleteRecord($inUserId: Int!) {
  deleteRecord(inUserId: $inUserId) {
    success
    message
  }
}
    `;
export const FetchRecords = gql`
    query fetchRecords {
  records {
    type
    inUserId
    userId
    value
    profile
    createdAt
    device
  }
}
    `;