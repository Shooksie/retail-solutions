import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  money: any;
  numrange: any;
  timestamptz: any;
  uuid: any;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** fields of action: "actionName" */
export type ActionName = {
  __typename?: 'actionName';
  /** the time at which this action was created */
  created_at?: Maybe<Scalars['timestamptz']>;
  /** errors related to the invocation */
  errors?: Maybe<Scalars['json']>;
  /** the unique id of an action */
  id?: Maybe<Scalars['uuid']>;
  /** the output fields of this action */
  output?: Maybe<SampleOutput>;
};

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  seller?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  store?: Maybe<Stores>;
  store_uid?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Items_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  seller?: Maybe<Uuid_Comparison_Exp>;
  store?: Maybe<Stores_Bool_Exp>;
  store_uid?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['uuid']>;
  store?: Maybe<Stores_Obj_Rel_Insert_Input>;
  store_uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['uuid']>;
  store_uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seller?: Maybe<Order_By>;
  store_uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['uuid']>;
  store_uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seller?: Maybe<Order_By>;
  store_uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Items>;
};

/** input type for inserting object relation for remote table "items" */
export type Items_Obj_Rel_Insert_Input = {
  data: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** ordering options when selecting data from "items" */
export type Items_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seller?: Maybe<Order_By>;
  store?: Maybe<Stores_Order_By>;
  store_uid?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "items" */
export type Items_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Seller = 'seller',
  /** column name */
  StoreUid = 'store_uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seller?: Maybe<Scalars['uuid']>;
  store_uid?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  Seller = 'seller',
  /** column name */
  StoreUid = 'store_uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>;
  _gt?: Maybe<Scalars['money']>;
  _gte?: Maybe<Scalars['money']>;
  _in?: Maybe<Array<Scalars['money']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['money']>;
  _lte?: Maybe<Scalars['money']>;
  _neq?: Maybe<Scalars['money']>;
  _nin?: Maybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "actionName" */
  actionName: Scalars['uuid'];
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "stores" */
  delete_stores?: Maybe<Stores_Mutation_Response>;
  /** delete single row from the table: "stores" */
  delete_stores_by_pk?: Maybe<Stores>;
  /** delete data from the table: "transactions" */
  delete_transactions?: Maybe<Transactions_Mutation_Response>;
  /** delete single row from the table: "transactions" */
  delete_transactions_by_pk?: Maybe<Transactions>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "stores" */
  insert_stores?: Maybe<Stores_Mutation_Response>;
  /** insert a single row into the table: "stores" */
  insert_stores_one?: Maybe<Stores>;
  /** insert data into the table: "transactions" */
  insert_transactions?: Maybe<Transactions_Mutation_Response>;
  /** insert a single row into the table: "transactions" */
  insert_transactions_one?: Maybe<Transactions>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update data of the table: "stores" */
  update_stores?: Maybe<Stores_Mutation_Response>;
  /** update single row of the table: "stores" */
  update_stores_by_pk?: Maybe<Stores>;
  /** update data of the table: "transactions" */
  update_transactions?: Maybe<Transactions_Mutation_Response>;
  /** update single row of the table: "transactions" */
  update_transactions_by_pk?: Maybe<Transactions>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_StoresArgs = {
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stores_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionsArgs = {
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoresArgs = {
  objects: Array<Stores_Insert_Input>;
  on_conflict?: Maybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stores_OneArgs = {
  object: Stores_Insert_Input;
  on_conflict?: Maybe<Stores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionsArgs = {
  objects: Array<Transactions_Insert_Input>;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transactions_OneArgs = {
  object: Transactions_Insert_Input;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StoresArgs = {
  _set?: Maybe<Stores_Set_Input>;
  where: Stores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stores_By_PkArgs = {
  _set?: Maybe<Stores_Set_Input>;
  pk_columns: Stores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionsArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  where: Transactions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transactions_By_PkArgs = {
  _inc?: Maybe<Transactions_Inc_Input>;
  _set?: Maybe<Transactions_Set_Input>;
  pk_columns: Transactions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** expression to compare columns of type numrange. All fields are combined with logical 'AND'. */
export type Numrange_Comparison_Exp = {
  _eq?: Maybe<Scalars['numrange']>;
  _gt?: Maybe<Scalars['numrange']>;
  _gte?: Maybe<Scalars['numrange']>;
  _in?: Maybe<Array<Scalars['numrange']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numrange']>;
  _lte?: Maybe<Scalars['numrange']>;
  _neq?: Maybe<Scalars['numrange']>;
  _nin?: Maybe<Array<Scalars['numrange']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** retrieve the result of action: "actionName" */
  actionName?: Maybe<ActionName>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootActionNameArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** query root */
export type Query_RootItems_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


/** query root */
export type Query_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


/** query root */
export type Query_RootStores_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** query root */
export type Query_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** query root */
export type Query_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** query root */
export type Query_RootTransactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};

/**
 * Store Table
 *
 *
 * columns and relationships of "stores"
 */
export type Stores = {
  __typename?: 'stores';
  date_created: Scalars['timestamptz'];
  /** An array relationship */
  items: Array<Items>;
  /** An aggregated array relationship */
  items_aggregate: Items_Aggregate;
  name: Scalars['String'];
  owner?: Maybe<Scalars['uuid']>;
  uid: Scalars['uuid'];
  /** An object relationship */
  user?: Maybe<User>;
};


/**
 * Store Table
 *
 *
 * columns and relationships of "stores"
 */
export type StoresItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/**
 * Store Table
 *
 *
 * columns and relationships of "stores"
 */
export type StoresItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};

/** aggregated selection of "stores" */
export type Stores_Aggregate = {
  __typename?: 'stores_aggregate';
  aggregate?: Maybe<Stores_Aggregate_Fields>;
  nodes: Array<Stores>;
};

/** aggregate fields of "stores" */
export type Stores_Aggregate_Fields = {
  __typename?: 'stores_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Stores_Max_Fields>;
  min?: Maybe<Stores_Min_Fields>;
};


/** aggregate fields of "stores" */
export type Stores_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Stores_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stores" */
export type Stores_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Stores_Max_Order_By>;
  min?: Maybe<Stores_Min_Order_By>;
};

/** input type for inserting array relation for remote table "stores" */
export type Stores_Arr_Rel_Insert_Input = {
  data: Array<Stores_Insert_Input>;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** Boolean expression to filter rows from the table "stores". All fields are combined with a logical 'AND'. */
export type Stores_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Stores_Bool_Exp>>>;
  _not?: Maybe<Stores_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Stores_Bool_Exp>>>;
  date_created?: Maybe<Timestamptz_Comparison_Exp>;
  items?: Maybe<Items_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Uuid_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "stores" */
export enum Stores_Constraint {
  /** unique or primary key constraint */
  StoresPkey = 'stores_pkey'
}

/** input type for inserting data into table "stores" */
export type Stores_Insert_Input = {
  date_created?: Maybe<Scalars['timestamptz']>;
  items?: Maybe<Items_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['uuid']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Stores_Max_Fields = {
  __typename?: 'stores_max_fields';
  date_created?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "stores" */
export type Stores_Max_Order_By = {
  date_created?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Stores_Min_Fields = {
  __typename?: 'stores_min_fields';
  date_created?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "stores" */
export type Stores_Min_Order_By = {
  date_created?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "stores" */
export type Stores_Mutation_Response = {
  __typename?: 'stores_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Stores>;
};

/** input type for inserting object relation for remote table "stores" */
export type Stores_Obj_Rel_Insert_Input = {
  data: Stores_Insert_Input;
  on_conflict?: Maybe<Stores_On_Conflict>;
};

/** on conflict condition type for table "stores" */
export type Stores_On_Conflict = {
  constraint: Stores_Constraint;
  update_columns: Array<Stores_Update_Column>;
  where?: Maybe<Stores_Bool_Exp>;
};

/** ordering options when selecting data from "stores" */
export type Stores_Order_By = {
  date_created?: Maybe<Order_By>;
  items_aggregate?: Maybe<Items_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  owner?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: "stores" */
export type Stores_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "stores" */
export enum Stores_Select_Column {
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "stores" */
export type Stores_Set_Input = {
  date_created?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['uuid']>;
};

/** update columns of table "stores" */
export enum Stores_Update_Column {
  /** column name */
  DateCreated = 'date_created',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  Uid = 'uid'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** retrieve the result of action: "actionName" */
  actionName?: Maybe<ActionName>;
  /** fetch data from the table: "items" */
  items: Array<Items>;
  /** fetch aggregated fields from the table: "items" */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** fetch data from the table: "stores" */
  stores: Array<Stores>;
  /** fetch aggregated fields from the table: "stores" */
  stores_aggregate: Stores_Aggregate;
  /** fetch data from the table: "stores" using primary key columns */
  stores_by_pk?: Maybe<Stores>;
  /** fetch data from the table: "transactions" */
  transactions: Array<Transactions>;
  /** fetch aggregated fields from the table: "transactions" */
  transactions_aggregate: Transactions_Aggregate;
  /** fetch data from the table: "transactions" using primary key columns */
  transactions_by_pk?: Maybe<Transactions>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootActionNameArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItems_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootStoresArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStores_AggregateArgs = {
  distinct_on?: Maybe<Array<Stores_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Stores_Order_By>>;
  where?: Maybe<Stores_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootStores_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTransactionsArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Transactions_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Transactions_Order_By>>;
  where?: Maybe<Transactions_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTransactions_By_PkArgs = {
  uuid: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "transactions" */
export type Transactions = {
  __typename?: 'transactions';
  buyer_uid: Scalars['uuid'];
  item_uid: Scalars['uuid'];
  rating?: Maybe<Scalars['numrange']>;
  transaction_amount: Scalars['money'];
  transaction_date: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "transactions" */
export type Transactions_Aggregate = {
  __typename?: 'transactions_aggregate';
  aggregate?: Maybe<Transactions_Aggregate_Fields>;
  nodes: Array<Transactions>;
};

/** aggregate fields of "transactions" */
export type Transactions_Aggregate_Fields = {
  __typename?: 'transactions_aggregate_fields';
  avg?: Maybe<Transactions_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Transactions_Max_Fields>;
  min?: Maybe<Transactions_Min_Fields>;
  stddev?: Maybe<Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Transactions_Sum_Fields>;
  var_pop?: Maybe<Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Transactions_Var_Samp_Fields>;
  variance?: Maybe<Transactions_Variance_Fields>;
};


/** aggregate fields of "transactions" */
export type Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Transactions_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transactions" */
export type Transactions_Aggregate_Order_By = {
  avg?: Maybe<Transactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Transactions_Max_Order_By>;
  min?: Maybe<Transactions_Min_Order_By>;
  stddev?: Maybe<Transactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Transactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Transactions_Sum_Order_By>;
  var_pop?: Maybe<Transactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Transactions_Var_Samp_Order_By>;
  variance?: Maybe<Transactions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "transactions" */
export type Transactions_Arr_Rel_Insert_Input = {
  data: Array<Transactions_Insert_Input>;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Transactions_Avg_Fields = {
  __typename?: 'transactions_avg_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transactions" */
export type Transactions_Avg_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transactions". All fields are combined with a logical 'AND'. */
export type Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>;
  _not?: Maybe<Transactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Transactions_Bool_Exp>>>;
  buyer_uid?: Maybe<Uuid_Comparison_Exp>;
  item_uid?: Maybe<Uuid_Comparison_Exp>;
  rating?: Maybe<Numrange_Comparison_Exp>;
  transaction_amount?: Maybe<Money_Comparison_Exp>;
  transaction_date?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "transactions" */
export enum Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = 'transactions_pkey'
}

/** input type for incrementing integer column in table "transactions" */
export type Transactions_Inc_Input = {
  transaction_amount?: Maybe<Scalars['money']>;
};

/** input type for inserting data into table "transactions" */
export type Transactions_Insert_Input = {
  buyer_uid?: Maybe<Scalars['uuid']>;
  item_uid?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['numrange']>;
  transaction_amount?: Maybe<Scalars['money']>;
  transaction_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Transactions_Max_Fields = {
  __typename?: 'transactions_max_fields';
  buyer_uid?: Maybe<Scalars['uuid']>;
  item_uid?: Maybe<Scalars['uuid']>;
  transaction_amount?: Maybe<Scalars['money']>;
  transaction_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "transactions" */
export type Transactions_Max_Order_By = {
  buyer_uid?: Maybe<Order_By>;
  item_uid?: Maybe<Order_By>;
  transaction_amount?: Maybe<Order_By>;
  transaction_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Transactions_Min_Fields = {
  __typename?: 'transactions_min_fields';
  buyer_uid?: Maybe<Scalars['uuid']>;
  item_uid?: Maybe<Scalars['uuid']>;
  transaction_amount?: Maybe<Scalars['money']>;
  transaction_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "transactions" */
export type Transactions_Min_Order_By = {
  buyer_uid?: Maybe<Order_By>;
  item_uid?: Maybe<Order_By>;
  transaction_amount?: Maybe<Order_By>;
  transaction_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** response of any mutation on the table "transactions" */
export type Transactions_Mutation_Response = {
  __typename?: 'transactions_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Transactions>;
};

/** input type for inserting object relation for remote table "transactions" */
export type Transactions_Obj_Rel_Insert_Input = {
  data: Transactions_Insert_Input;
  on_conflict?: Maybe<Transactions_On_Conflict>;
};

/** on conflict condition type for table "transactions" */
export type Transactions_On_Conflict = {
  constraint: Transactions_Constraint;
  update_columns: Array<Transactions_Update_Column>;
  where?: Maybe<Transactions_Bool_Exp>;
};

/** ordering options when selecting data from "transactions" */
export type Transactions_Order_By = {
  buyer_uid?: Maybe<Order_By>;
  item_uid?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  transaction_amount?: Maybe<Order_By>;
  transaction_date?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

/** primary key columns input for table: "transactions" */
export type Transactions_Pk_Columns_Input = {
  uuid: Scalars['uuid'];
};

/** select columns of table "transactions" */
export enum Transactions_Select_Column {
  /** column name */
  BuyerUid = 'buyer_uid',
  /** column name */
  ItemUid = 'item_uid',
  /** column name */
  Rating = 'rating',
  /** column name */
  TransactionAmount = 'transaction_amount',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "transactions" */
export type Transactions_Set_Input = {
  buyer_uid?: Maybe<Scalars['uuid']>;
  item_uid?: Maybe<Scalars['uuid']>;
  rating?: Maybe<Scalars['numrange']>;
  transaction_amount?: Maybe<Scalars['money']>;
  transaction_date?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Transactions_Stddev_Fields = {
  __typename?: 'transactions_stddev_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transactions" */
export type Transactions_Stddev_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transactions_Stddev_Pop_Fields = {
  __typename?: 'transactions_stddev_pop_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transactions" */
export type Transactions_Stddev_Pop_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transactions_Stddev_Samp_Fields = {
  __typename?: 'transactions_stddev_samp_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transactions" */
export type Transactions_Stddev_Samp_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Transactions_Sum_Fields = {
  __typename?: 'transactions_sum_fields';
  transaction_amount?: Maybe<Scalars['money']>;
};

/** order by sum() on columns of table "transactions" */
export type Transactions_Sum_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** update columns of table "transactions" */
export enum Transactions_Update_Column {
  /** column name */
  BuyerUid = 'buyer_uid',
  /** column name */
  ItemUid = 'item_uid',
  /** column name */
  Rating = 'rating',
  /** column name */
  TransactionAmount = 'transaction_amount',
  /** column name */
  TransactionDate = 'transaction_date',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type Transactions_Var_Pop_Fields = {
  __typename?: 'transactions_var_pop_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transactions" */
export type Transactions_Var_Pop_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transactions_Var_Samp_Fields = {
  __typename?: 'transactions_var_samp_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transactions" */
export type Transactions_Var_Samp_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Transactions_Variance_Fields = {
  __typename?: 'transactions_variance_fields';
  transaction_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transactions" */
export type Transactions_Variance_Order_By = {
  transaction_amount?: Maybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  date_joined: Scalars['timestamptz'];
  uid: Scalars['uuid'];
  username: Scalars['String'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  date_joined?: Maybe<Timestamptz_Comparison_Exp>;
  uid?: Maybe<Uuid_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUsernameKey = 'user_username_key'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  date_joined?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  date_joined?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  date_joined?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  date_joined?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  date_joined?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  date_joined?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  Uid = 'uid',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  date_joined?: Maybe<Scalars['timestamptz']>;
  uid?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  DateJoined = 'date_joined',
  /** column name */
  Uid = 'uid',
  /** column name */
  Username = 'username'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetStoresQueryVariables = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type GetStoresQuery = (
  { __typename?: 'query_root' }
  & {
  stores: Array<(
    { __typename?: 'stores' }
    & Pick<Stores, 'name' | 'owner'>
    & {
    user?: Maybe<(
      { __typename?: 'user' }
      & Pick<User, 'username' | 'uid'>
      )>, items: Array<(
      { __typename?: 'items' }
      & Pick<Items, 'name' | 'uuid' | 'description'>
      )>
  }
    )>
}
  );

export type GetItemByTextQueryVariables = {
  value: Scalars['String'];
};


export type GetItemByTextQuery = (
  { __typename?: 'query_root' }
  & {
  items: Array<(
    { __typename?: 'items' }
    & Pick<Items, 'name' | 'description' | 'uuid' | 'seller'>
    )>
}
  );


export const GetStoresDocument = gql`
    query getStores($limit: Int!, $offset: Int!) {
        stores(limit: $limit, offset: $offset) {
            name
            owner
            user {
                username
                uid
            }
            items {
                name
                uuid
                description
            }
        }
    }
`;
export type GetStoresQueryResult = ApolloReactCommon.QueryResult<GetStoresQuery, GetStoresQueryVariables>;
export const GetItemByTextDocument = gql`
    query GetItemByText($value: String!) {
        items(where: {_or: {name: {_ilike: $value}, description: {_ilike: $value}}}) {
            name
            description
            uuid
            seller
            created_at
        }
    }
`;
export type GetItemByTextQueryResult = ApolloReactCommon.QueryResult<GetItemByTextQuery, GetItemByTextQueryVariables>;
