import gql from 'graphql-tag'
import * as Urql from 'urql'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
  numeric: any
  smallint: any
  timestamp: any
  timestamptz: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export type CheckoutOrManagePostPaymentOutput = {
  __typename?: 'CheckoutOrManagePostPaymentOutput'
  url: Scalars['String']
}

export type GetStripeCustomerPortalLinkOutput = {
  __typename?: 'GetStripeCustomerPortalLinkOutput'
  link: Scalars['String']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>
  _gt?: Maybe<Scalars['bigint']>
  _gte?: Maybe<Scalars['bigint']>
  _in?: Maybe<Array<Scalars['bigint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['bigint']>
  _lte?: Maybe<Scalars['bigint']>
  _neq?: Maybe<Scalars['bigint']>
  _nin?: Maybe<Array<Scalars['bigint']>>
}

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "categories" */
export type CategoriesSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** columns and relationships of "categories" */
export type CategoriesSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate'
  aggregate?: Maybe<Categories_Aggregate_Fields>
  nodes: Array<Categories>
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields'
  avg?: Maybe<Categories_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Categories_Max_Fields>
  min?: Maybe<Categories_Min_Fields>
  stddev?: Maybe<Categories_Stddev_Fields>
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>
  sum?: Maybe<Categories_Sum_Fields>
  var_pop?: Maybe<Categories_Var_Pop_Fields>
  var_samp?: Maybe<Categories_Var_Samp_Fields>
  variance?: Maybe<Categories_Variance_Fields>
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>
  _not?: Maybe<Categories_Bool_Exp>
  _or?: Maybe<Array<Categories_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  sub_categories?: Maybe<Sub_Categories_Bool_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  sub_categories?: Maybe<Sub_Categories_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Categories>
}

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint
  update_columns?: Array<Categories_Update_Column>
  where?: Maybe<Categories_Bool_Exp>
}

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  sub_categories_aggregate?: Maybe<Sub_Categories_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities'
  country_code: Scalars['String']
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  state_code: Scalars['String']
  updated_at: Scalars['timestamp']
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
}

/** columns and relationships of "cities" */
export type CitiesZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate'
  aggregate?: Maybe<Cities_Aggregate_Fields>
  nodes: Array<Cities>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields'
  avg?: Maybe<Cities_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Cities_Max_Fields>
  min?: Maybe<Cities_Min_Fields>
  stddev?: Maybe<Cities_Stddev_Fields>
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>
  sum?: Maybe<Cities_Sum_Fields>
  var_pop?: Maybe<Cities_Var_Pop_Fields>
  var_samp?: Maybe<Cities_Var_Samp_Fields>
  variance?: Maybe<Cities_Variance_Fields>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cities_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: Maybe<Array<Cities_Bool_Exp>>
  _not?: Maybe<Cities_Bool_Exp>
  _or?: Maybe<Array<Cities_Bool_Exp>>
  country_code?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  state_code?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  zip_codes?: Maybe<Zip_Codes_Bool_Exp>
}

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint */
  CitiesNameStateCodeCountryCodeKey = 'cities_name_state_code_country_code_key',
  /** unique or primary key constraint */
  CitiesPkey = 'cities_pkey',
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_codes?: Maybe<Zip_Codes_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields'
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields'
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Cities>
}

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** on conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint
  update_columns?: Array<Cities_Update_Column>
  where?: Maybe<Cities_Bool_Exp>
}

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  country_code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  state_code?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_codes_aggregate?: Maybe<Zip_Codes_Aggregate_Order_By>
}

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateCode = 'state_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateCode = 'state_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "donations" */
export type Donations = {
  __typename?: 'donations'
  amount: Scalars['numeric']
  created_at: Scalars['timestamptz']
  email?: Maybe<Scalars['String']>
  id: Scalars['bigint']
  stripe_checkout_session_id: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "donations" */
export type Donations_Aggregate = {
  __typename?: 'donations_aggregate'
  aggregate?: Maybe<Donations_Aggregate_Fields>
  nodes: Array<Donations>
}

/** aggregate fields of "donations" */
export type Donations_Aggregate_Fields = {
  __typename?: 'donations_aggregate_fields'
  avg?: Maybe<Donations_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Donations_Max_Fields>
  min?: Maybe<Donations_Min_Fields>
  stddev?: Maybe<Donations_Stddev_Fields>
  stddev_pop?: Maybe<Donations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Donations_Stddev_Samp_Fields>
  sum?: Maybe<Donations_Sum_Fields>
  var_pop?: Maybe<Donations_Var_Pop_Fields>
  var_samp?: Maybe<Donations_Var_Samp_Fields>
  variance?: Maybe<Donations_Variance_Fields>
}

/** aggregate fields of "donations" */
export type Donations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Donations_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Donations_Avg_Fields = {
  __typename?: 'donations_avg_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "donations". All fields are combined with a logical 'AND'. */
export type Donations_Bool_Exp = {
  _and?: Maybe<Array<Donations_Bool_Exp>>
  _not?: Maybe<Donations_Bool_Exp>
  _or?: Maybe<Array<Donations_Bool_Exp>>
  amount?: Maybe<Numeric_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  stripe_checkout_session_id?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "donations" */
export enum Donations_Constraint {
  /** unique or primary key constraint */
  DonationsPkey = 'donations_pkey',
}

/** input type for incrementing numeric columns in table "donations" */
export type Donations_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "donations" */
export type Donations_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Donations_Max_Fields = {
  __typename?: 'donations_max_fields'
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Donations_Min_Fields = {
  __typename?: 'donations_min_fields'
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "donations" */
export type Donations_Mutation_Response = {
  __typename?: 'donations_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Donations>
}

/** on conflict condition type for table "donations" */
export type Donations_On_Conflict = {
  constraint: Donations_Constraint
  update_columns?: Array<Donations_Update_Column>
  where?: Maybe<Donations_Bool_Exp>
}

/** Ordering options when selecting data from "donations". */
export type Donations_Order_By = {
  amount?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stripe_checkout_session_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: donations */
export type Donations_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "donations" */
export enum Donations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  StripeCheckoutSessionId = 'stripe_checkout_session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "donations" */
export type Donations_Set_Input = {
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Donations_Stddev_Fields = {
  __typename?: 'donations_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Donations_Stddev_Pop_Fields = {
  __typename?: 'donations_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Donations_Stddev_Samp_Fields = {
  __typename?: 'donations_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Donations_Sum_Fields = {
  __typename?: 'donations_sum_fields'
  amount?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "donations" */
export enum Donations_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  StripeCheckoutSessionId = 'stripe_checkout_session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Donations_Var_Pop_Fields = {
  __typename?: 'donations_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Donations_Var_Samp_Fields = {
  __typename?: 'donations_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Donations_Variance_Fields = {
  __typename?: 'donations_variance_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "files" */
export type Files = {
  __typename?: 'files'
  /** An array relationship */
  avatars: Array<Users>
  /** An aggregate relationship */
  avatars_aggregate: Users_Aggregate
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  key: Scalars['String']
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  name?: Maybe<Scalars['String']>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamp']
  url: Scalars['String']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** columns and relationships of "files" */
export type FilesAvatarsArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesAvatars_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** aggregated selection of "files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate'
  aggregate?: Maybe<Files_Aggregate_Fields>
  nodes: Array<Files>
}

/** aggregate fields of "files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields'
  avg?: Maybe<Files_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Files_Max_Fields>
  min?: Maybe<Files_Min_Fields>
  stddev?: Maybe<Files_Stddev_Fields>
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>
  sum?: Maybe<Files_Sum_Fields>
  var_pop?: Maybe<Files_Var_Pop_Fields>
  var_samp?: Maybe<Files_Var_Samp_Fields>
  variance?: Maybe<Files_Variance_Fields>
}

/** aggregate fields of "files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Files_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "files" */
export type Files_Aggregate_Order_By = {
  avg?: Maybe<Files_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Files_Max_Order_By>
  min?: Maybe<Files_Min_Order_By>
  stddev?: Maybe<Files_Stddev_Order_By>
  stddev_pop?: Maybe<Files_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Files_Stddev_Samp_Order_By>
  sum?: Maybe<Files_Sum_Order_By>
  var_pop?: Maybe<Files_Var_Pop_Order_By>
  var_samp?: Maybe<Files_Var_Samp_Order_By>
  variance?: Maybe<Files_Variance_Order_By>
}

/** input type for inserting array relation for remote table "files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Files_On_Conflict>
}

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "files" */
export type Files_Avg_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: Maybe<Array<Files_Bool_Exp>>
  _not?: Maybe<Files_Bool_Exp>
  _or?: Maybe<Array<Files_Bool_Exp>>
  avatars?: Maybe<Users_Bool_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  key?: Maybe<String_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  post_attachments?: Maybe<Post_Attachments_Bool_Exp>
  size?: Maybe<Bigint_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  url?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesKeyKey = 'files_key_key',
  /** unique or primary key constraint */
  FilesPkey = 'files_pkey',
}

/** input type for incrementing numeric columns in table "files" */
export type Files_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  size?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "files" */
export type Files_Insert_Input = {
  avatars?: Maybe<Users_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  post_attachments?: Maybe<Post_Attachments_Arr_Rel_Insert_Input>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "files" */
export type Files_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  name?: Maybe<Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "files" */
export type Files_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  name?: Maybe<Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Files>
}

/** input type for inserting object relation for remote table "files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Files_On_Conflict>
}

/** on conflict condition type for table "files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint
  update_columns?: Array<Files_Update_Column>
  where?: Maybe<Files_Bool_Exp>
}

/** Ordering options when selecting data from "files". */
export type Files_Order_By = {
  avatars_aggregate?: Maybe<Users_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  name?: Maybe<Order_By>
  post_attachments_aggregate?: Maybe<Post_Attachments_Aggregate_Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "files" */
export enum Files_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "files" */
export type Files_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "files" */
export type Files_Stddev_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "files" */
export type Files_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "files" */
export type Files_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields'
  id?: Maybe<Scalars['bigint']>
  size?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "files" */
export type Files_Sum_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "files" */
export enum Files_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "files" */
export type Files_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "files" */
export type Files_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "files" */
export type Files_Variance_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages'
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  file?: Maybe<Files>
  file_id?: Maybe<Scalars['bigint']>
  id: Scalars['bigint']
  is_file?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  room: Rooms
  room_id: Scalars['bigint']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate'
  aggregate?: Maybe<Messages_Aggregate_Fields>
  nodes: Array<Messages>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields'
  avg?: Maybe<Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Messages_Max_Fields>
  min?: Maybe<Messages_Min_Fields>
  stddev?: Maybe<Messages_Stddev_Fields>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>
  sum?: Maybe<Messages_Sum_Fields>
  var_pop?: Maybe<Messages_Var_Pop_Fields>
  var_samp?: Maybe<Messages_Var_Samp_Fields>
  variance?: Maybe<Messages_Variance_Fields>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Messages_Max_Order_By>
  min?: Maybe<Messages_Min_Order_By>
  stddev?: Maybe<Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Messages_Sum_Order_By>
  var_pop?: Maybe<Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Messages_Var_Samp_Order_By>
  variance?: Maybe<Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Messages_Bool_Exp>>
  _not?: Maybe<Messages_Bool_Exp>
  _or?: Maybe<Array<Messages_Bool_Exp>>
  content?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  file?: Maybe<Files_Bool_Exp>
  file_id?: Maybe<Bigint_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_file?: Maybe<Boolean_Comparison_Exp>
  room?: Maybe<Rooms_Bool_Exp>
  room_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint */
  MessagesPkey = 'messages_pkey',
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file?: Maybe<Files_Obj_Rel_Insert_Input>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  is_file?: Maybe<Scalars['Boolean']>
  room?: Maybe<Rooms_Obj_Rel_Insert_Input>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields'
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields'
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Messages>
}

/** on conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint
  update_columns?: Array<Messages_Update_Column>
  where?: Maybe<Messages_Bool_Exp>
}

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file?: Maybe<Files_Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_file?: Maybe<Order_By>
  room?: Maybe<Rooms_Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsFile = 'is_file',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  is_file?: Maybe<Scalars['Boolean']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields'
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsFile = 'is_file',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  checkout_or_manage_post_payment: CheckoutOrManagePostPaymentOutput
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>
  /** delete data from the table: "donations" */
  delete_donations?: Maybe<Donations_Mutation_Response>
  /** delete single row from the table: "donations" */
  delete_donations_by_pk?: Maybe<Donations>
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>
  /** delete single row from the table: "files" */
  delete_files_by_pk?: Maybe<Files>
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>
  /** delete data from the table: "possible_values" */
  delete_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** delete single row from the table: "possible_values" */
  delete_possible_values_by_pk?: Maybe<Possible_Values>
  /** delete data from the table: "post_attachments" */
  delete_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** delete single row from the table: "post_attachments" */
  delete_post_attachments_by_pk?: Maybe<Post_Attachments>
  /** delete data from the table: "post_attributes" */
  delete_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** delete single row from the table: "post_attributes" */
  delete_post_attributes_by_pk?: Maybe<Post_Attributes>
  /** delete data from the table: "post_prices" */
  delete_post_prices?: Maybe<Post_Prices_Mutation_Response>
  /** delete single row from the table: "post_prices" */
  delete_post_prices_by_pk?: Maybe<Post_Prices>
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>
  /** delete data from the table: "properties" */
  delete_properties?: Maybe<Properties_Mutation_Response>
  /** delete single row from the table: "properties" */
  delete_properties_by_pk?: Maybe<Properties>
  /** delete data from the table: "property_screens" */
  delete_property_screens?: Maybe<Property_Screens_Mutation_Response>
  /** delete single row from the table: "property_screens" */
  delete_property_screens_by_pk?: Maybe<Property_Screens>
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>
  /** delete data from the table: "sub_categories" */
  delete_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** delete single row from the table: "sub_categories" */
  delete_sub_categories_by_pk?: Maybe<Sub_Categories>
  /** delete data from the table: "user_rooms" */
  delete_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** delete single row from the table: "user_rooms" */
  delete_user_rooms_by_pk?: Maybe<User_Rooms>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "zip_codes" */
  delete_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** delete single row from the table: "zip_codes" */
  delete_zip_codes_by_pk?: Maybe<Zip_Codes>
  get_stripe_customer_portal_link: GetStripeCustomerPortalLinkOutput
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>
  /** insert data into the table: "donations" */
  insert_donations?: Maybe<Donations_Mutation_Response>
  /** insert a single row into the table: "donations" */
  insert_donations_one?: Maybe<Donations>
  /** insert data into the table: "files" */
  insert_files?: Maybe<Files_Mutation_Response>
  /** insert a single row into the table: "files" */
  insert_files_one?: Maybe<Files>
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>
  /** insert data into the table: "possible_values" */
  insert_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** insert a single row into the table: "possible_values" */
  insert_possible_values_one?: Maybe<Possible_Values>
  /** insert data into the table: "post_attachments" */
  insert_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** insert a single row into the table: "post_attachments" */
  insert_post_attachments_one?: Maybe<Post_Attachments>
  /** insert data into the table: "post_attributes" */
  insert_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** insert a single row into the table: "post_attributes" */
  insert_post_attributes_one?: Maybe<Post_Attributes>
  /** insert data into the table: "post_prices" */
  insert_post_prices?: Maybe<Post_Prices_Mutation_Response>
  /** insert a single row into the table: "post_prices" */
  insert_post_prices_one?: Maybe<Post_Prices>
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>
  /** insert data into the table: "properties" */
  insert_properties?: Maybe<Properties_Mutation_Response>
  /** insert a single row into the table: "properties" */
  insert_properties_one?: Maybe<Properties>
  /** insert data into the table: "property_screens" */
  insert_property_screens?: Maybe<Property_Screens_Mutation_Response>
  /** insert a single row into the table: "property_screens" */
  insert_property_screens_one?: Maybe<Property_Screens>
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>
  /** insert data into the table: "sub_categories" */
  insert_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** insert a single row into the table: "sub_categories" */
  insert_sub_categories_one?: Maybe<Sub_Categories>
  /** insert data into the table: "user_rooms" */
  insert_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** insert a single row into the table: "user_rooms" */
  insert_user_rooms_one?: Maybe<User_Rooms>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "zip_codes" */
  insert_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** insert a single row into the table: "zip_codes" */
  insert_zip_codes_one?: Maybe<Zip_Codes>
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>
  /** update data of the table: "donations" */
  update_donations?: Maybe<Donations_Mutation_Response>
  /** update single row of the table: "donations" */
  update_donations_by_pk?: Maybe<Donations>
  /** update data of the table: "files" */
  update_files?: Maybe<Files_Mutation_Response>
  /** update single row of the table: "files" */
  update_files_by_pk?: Maybe<Files>
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>
  /** update data of the table: "possible_values" */
  update_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** update single row of the table: "possible_values" */
  update_possible_values_by_pk?: Maybe<Possible_Values>
  /** update data of the table: "post_attachments" */
  update_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** update single row of the table: "post_attachments" */
  update_post_attachments_by_pk?: Maybe<Post_Attachments>
  /** update data of the table: "post_attributes" */
  update_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** update single row of the table: "post_attributes" */
  update_post_attributes_by_pk?: Maybe<Post_Attributes>
  /** update data of the table: "post_prices" */
  update_post_prices?: Maybe<Post_Prices_Mutation_Response>
  /** update single row of the table: "post_prices" */
  update_post_prices_by_pk?: Maybe<Post_Prices>
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>
  /** update data of the table: "properties" */
  update_properties?: Maybe<Properties_Mutation_Response>
  /** update single row of the table: "properties" */
  update_properties_by_pk?: Maybe<Properties>
  /** update data of the table: "property_screens" */
  update_property_screens?: Maybe<Property_Screens_Mutation_Response>
  /** update single row of the table: "property_screens" */
  update_property_screens_by_pk?: Maybe<Property_Screens>
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>
  /** update data of the table: "sub_categories" */
  update_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** update single row of the table: "sub_categories" */
  update_sub_categories_by_pk?: Maybe<Sub_Categories>
  /** update data of the table: "user_rooms" */
  update_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** update single row of the table: "user_rooms" */
  update_user_rooms_by_pk?: Maybe<User_Rooms>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update data of the table: "zip_codes" */
  update_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** update single row of the table: "zip_codes" */
  update_zip_codes_by_pk?: Maybe<Zip_Codes>
}

/** mutation root */
export type Mutation_RootCheckout_Or_Manage_Post_PaymentArgs = {
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_DonationsArgs = {
  where: Donations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Donations_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Files_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Possible_ValuesArgs = {
  where: Possible_Values_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Possible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Post_AttachmentsArgs = {
  where: Post_Attachments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Post_AttributesArgs = {
  where: Post_Attributes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Attributes_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Post_PricesArgs = {
  where: Post_Prices_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Prices_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Property_ScreensArgs = {
  where: Property_Screens_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Property_Screens_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Sub_CategoriesArgs = {
  where: Sub_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Sub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_RoomsArgs = {
  where: User_Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Zip_CodesArgs = {
  where: Zip_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Zip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootGet_Stripe_Customer_Portal_LinkArgs = {
  path?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DonationsArgs = {
  objects: Array<Donations_Insert_Input>
  on_conflict?: Maybe<Donations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Donations_OneArgs = {
  object: Donations_Insert_Input
  on_conflict?: Maybe<Donations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>
  on_conflict?: Maybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Files_OneArgs = {
  object: Files_Insert_Input
  on_conflict?: Maybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Possible_ValuesArgs = {
  objects: Array<Possible_Values_Insert_Input>
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Possible_Values_OneArgs = {
  object: Possible_Values_Insert_Input
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_AttachmentsArgs = {
  objects: Array<Post_Attachments_Insert_Input>
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Attachments_OneArgs = {
  object: Post_Attachments_Insert_Input
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_AttributesArgs = {
  objects: Array<Post_Attributes_Insert_Input>
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Attributes_OneArgs = {
  object: Post_Attributes_Insert_Input
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_PricesArgs = {
  objects: Array<Post_Prices_Insert_Input>
  on_conflict?: Maybe<Post_Prices_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Prices_OneArgs = {
  object: Post_Prices_Insert_Input
  on_conflict?: Maybe<Post_Prices_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PropertiesArgs = {
  objects: Array<Properties_Insert_Input>
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Properties_OneArgs = {
  object: Properties_Insert_Input
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Property_ScreensArgs = {
  objects: Array<Property_Screens_Insert_Input>
  on_conflict?: Maybe<Property_Screens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Property_Screens_OneArgs = {
  object: Property_Screens_Insert_Input
  on_conflict?: Maybe<Property_Screens_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sub_CategoriesArgs = {
  objects: Array<Sub_Categories_Insert_Input>
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sub_Categories_OneArgs = {
  object: Sub_Categories_Insert_Input
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_RoomsArgs = {
  objects: Array<User_Rooms_Insert_Input>
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Rooms_OneArgs = {
  object: User_Rooms_Insert_Input
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Zip_CodesArgs = {
  objects: Array<Zip_Codes_Insert_Input>
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Zip_Codes_OneArgs = {
  object: Zip_Codes_Insert_Input
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>
  _set?: Maybe<Categories_Set_Input>
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>
  _set?: Maybe<Categories_Set_Input>
  pk_columns: Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  pk_columns: Cities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_DonationsArgs = {
  _inc?: Maybe<Donations_Inc_Input>
  _set?: Maybe<Donations_Set_Input>
  where: Donations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Donations_By_PkArgs = {
  _inc?: Maybe<Donations_Inc_Input>
  _set?: Maybe<Donations_Set_Input>
  pk_columns: Donations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _inc?: Maybe<Files_Inc_Input>
  _set?: Maybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Files_By_PkArgs = {
  _inc?: Maybe<Files_Inc_Input>
  _set?: Maybe<Files_Set_Input>
  pk_columns: Files_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  pk_columns: Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: Maybe<Payments_Inc_Input>
  _set?: Maybe<Payments_Set_Input>
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: Maybe<Payments_Inc_Input>
  _set?: Maybe<Payments_Set_Input>
  pk_columns: Payments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Possible_ValuesArgs = {
  _inc?: Maybe<Possible_Values_Inc_Input>
  _set?: Maybe<Possible_Values_Set_Input>
  where: Possible_Values_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Possible_Values_By_PkArgs = {
  _inc?: Maybe<Possible_Values_Inc_Input>
  _set?: Maybe<Possible_Values_Set_Input>
  pk_columns: Possible_Values_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_AttachmentsArgs = {
  _inc?: Maybe<Post_Attachments_Inc_Input>
  _set?: Maybe<Post_Attachments_Set_Input>
  where: Post_Attachments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attachments_By_PkArgs = {
  _inc?: Maybe<Post_Attachments_Inc_Input>
  _set?: Maybe<Post_Attachments_Set_Input>
  pk_columns: Post_Attachments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_AttributesArgs = {
  _inc?: Maybe<Post_Attributes_Inc_Input>
  _set?: Maybe<Post_Attributes_Set_Input>
  where: Post_Attributes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attributes_By_PkArgs = {
  _inc?: Maybe<Post_Attributes_Inc_Input>
  _set?: Maybe<Post_Attributes_Set_Input>
  pk_columns: Post_Attributes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_PricesArgs = {
  _inc?: Maybe<Post_Prices_Inc_Input>
  _set?: Maybe<Post_Prices_Set_Input>
  where: Post_Prices_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Prices_By_PkArgs = {
  _inc?: Maybe<Post_Prices_Inc_Input>
  _set?: Maybe<Post_Prices_Set_Input>
  pk_columns: Post_Prices_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>
  _set?: Maybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>
  _set?: Maybe<Posts_Set_Input>
  pk_columns: Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_PropertiesArgs = {
  _inc?: Maybe<Properties_Inc_Input>
  _set?: Maybe<Properties_Set_Input>
  where: Properties_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _inc?: Maybe<Properties_Inc_Input>
  _set?: Maybe<Properties_Set_Input>
  pk_columns: Properties_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Property_ScreensArgs = {
  _inc?: Maybe<Property_Screens_Inc_Input>
  _set?: Maybe<Property_Screens_Set_Input>
  where: Property_Screens_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Property_Screens_By_PkArgs = {
  _inc?: Maybe<Property_Screens_Inc_Input>
  _set?: Maybe<Property_Screens_Set_Input>
  pk_columns: Property_Screens_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _inc?: Maybe<Rooms_Inc_Input>
  _set?: Maybe<Rooms_Set_Input>
  where: Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _inc?: Maybe<Rooms_Inc_Input>
  _set?: Maybe<Rooms_Set_Input>
  pk_columns: Rooms_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Sub_CategoriesArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>
  _set?: Maybe<Sub_Categories_Set_Input>
  where: Sub_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Sub_Categories_By_PkArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>
  _set?: Maybe<Sub_Categories_Set_Input>
  pk_columns: Sub_Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_RoomsArgs = {
  _inc?: Maybe<User_Rooms_Inc_Input>
  _set?: Maybe<User_Rooms_Set_Input>
  where: User_Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Rooms_By_PkArgs = {
  _inc?: Maybe<User_Rooms_Inc_Input>
  _set?: Maybe<User_Rooms_Set_Input>
  pk_columns: User_Rooms_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Zip_CodesArgs = {
  _inc?: Maybe<Zip_Codes_Inc_Input>
  _set?: Maybe<Zip_Codes_Set_Input>
  where: Zip_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Zip_Codes_By_PkArgs = {
  _inc?: Maybe<Zip_Codes_Inc_Input>
  _set?: Maybe<Zip_Codes_Set_Input>
  pk_columns: Zip_Codes_Pk_Columns_Input
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments'
  active: Scalars['Boolean']
  id: Scalars['bigint']
  last_payment?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  post?: Maybe<Posts>
  post_id?: Maybe<Scalars['bigint']>
  stripe_subscription_id: Scalars['String']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate'
  aggregate?: Maybe<Payments_Aggregate_Fields>
  nodes: Array<Payments>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields'
  avg?: Maybe<Payments_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Payments_Max_Fields>
  min?: Maybe<Payments_Min_Fields>
  stddev?: Maybe<Payments_Stddev_Fields>
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>
  sum?: Maybe<Payments_Sum_Fields>
  var_pop?: Maybe<Payments_Var_Pop_Fields>
  var_samp?: Maybe<Payments_Var_Samp_Fields>
  variance?: Maybe<Payments_Variance_Fields>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "payments" */
export type Payments_Aggregate_Order_By = {
  avg?: Maybe<Payments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Payments_Max_Order_By>
  min?: Maybe<Payments_Min_Order_By>
  stddev?: Maybe<Payments_Stddev_Order_By>
  stddev_pop?: Maybe<Payments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Payments_Stddev_Samp_Order_By>
  sum?: Maybe<Payments_Sum_Order_By>
  var_pop?: Maybe<Payments_Var_Pop_Order_By>
  var_samp?: Maybe<Payments_Var_Samp_Order_By>
  variance?: Maybe<Payments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "payments" */
export type Payments_Arr_Rel_Insert_Input = {
  data: Array<Payments_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "payments" */
export type Payments_Avg_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: Maybe<Array<Payments_Bool_Exp>>
  _not?: Maybe<Payments_Bool_Exp>
  _or?: Maybe<Array<Payments_Bool_Exp>>
  active?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  last_payment?: Maybe<Timestamptz_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  stripe_subscription_id?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint */
  PaymentsPkey = 'payments_pkey',
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields'
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  post_id?: Maybe<Scalars['bigint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "payments" */
export type Payments_Max_Order_By = {
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  stripe_subscription_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields'
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  post_id?: Maybe<Scalars['bigint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "payments" */
export type Payments_Min_Order_By = {
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  stripe_subscription_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Payments>
}

/** on conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint
  update_columns?: Array<Payments_Update_Column>
  where?: Maybe<Payments_Bool_Exp>
}

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  active?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  stripe_subscription_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  LastPayment = 'last_payment',
  /** column name */
  PostId = 'post_id',
  /** column name */
  StripeSubscriptionId = 'stripe_subscription_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  post_id?: Maybe<Scalars['bigint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "payments" */
export type Payments_Stddev_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "payments" */
export type Payments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "payments" */
export type Payments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields'
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "payments" */
export type Payments_Sum_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  LastPayment = 'last_payment',
  /** column name */
  PostId = 'post_id',
  /** column name */
  StripeSubscriptionId = 'stripe_subscription_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "payments" */
export type Payments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "payments" */
export type Payments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "payments" */
export type Payments_Variance_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "possible_values" */
export type Possible_Values = {
  __typename?: 'possible_values'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  /** An array relationship */
  post_attributes: Array<Post_Attributes>
  /** An aggregate relationship */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** An object relationship */
  property: Properties
  property_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "possible_values" */
export type Possible_ValuesPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** columns and relationships of "possible_values" */
export type Possible_ValuesPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** aggregated selection of "possible_values" */
export type Possible_Values_Aggregate = {
  __typename?: 'possible_values_aggregate'
  aggregate?: Maybe<Possible_Values_Aggregate_Fields>
  nodes: Array<Possible_Values>
}

/** aggregate fields of "possible_values" */
export type Possible_Values_Aggregate_Fields = {
  __typename?: 'possible_values_aggregate_fields'
  avg?: Maybe<Possible_Values_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Possible_Values_Max_Fields>
  min?: Maybe<Possible_Values_Min_Fields>
  stddev?: Maybe<Possible_Values_Stddev_Fields>
  stddev_pop?: Maybe<Possible_Values_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Possible_Values_Stddev_Samp_Fields>
  sum?: Maybe<Possible_Values_Sum_Fields>
  var_pop?: Maybe<Possible_Values_Var_Pop_Fields>
  var_samp?: Maybe<Possible_Values_Var_Samp_Fields>
  variance?: Maybe<Possible_Values_Variance_Fields>
}

/** aggregate fields of "possible_values" */
export type Possible_Values_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Possible_Values_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "possible_values" */
export type Possible_Values_Aggregate_Order_By = {
  avg?: Maybe<Possible_Values_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Possible_Values_Max_Order_By>
  min?: Maybe<Possible_Values_Min_Order_By>
  stddev?: Maybe<Possible_Values_Stddev_Order_By>
  stddev_pop?: Maybe<Possible_Values_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Possible_Values_Stddev_Samp_Order_By>
  sum?: Maybe<Possible_Values_Sum_Order_By>
  var_pop?: Maybe<Possible_Values_Var_Pop_Order_By>
  var_samp?: Maybe<Possible_Values_Var_Samp_Order_By>
  variance?: Maybe<Possible_Values_Variance_Order_By>
}

/** input type for inserting array relation for remote table "possible_values" */
export type Possible_Values_Arr_Rel_Insert_Input = {
  data: Array<Possible_Values_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** aggregate avg on columns */
export type Possible_Values_Avg_Fields = {
  __typename?: 'possible_values_avg_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "possible_values" */
export type Possible_Values_Avg_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "possible_values". All fields are combined with a logical 'AND'. */
export type Possible_Values_Bool_Exp = {
  _and?: Maybe<Array<Possible_Values_Bool_Exp>>
  _not?: Maybe<Possible_Values_Bool_Exp>
  _or?: Maybe<Array<Possible_Values_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  post_attributes?: Maybe<Post_Attributes_Bool_Exp>
  property?: Maybe<Properties_Bool_Exp>
  property_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "possible_values" */
export enum Possible_Values_Constraint {
  /** unique or primary key constraint */
  PossibleValuesPkey = 'possible_values_pkey',
}

/** input type for incrementing numeric columns in table "possible_values" */
export type Possible_Values_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  property_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "possible_values" */
export type Possible_Values_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  post_attributes?: Maybe<Post_Attributes_Arr_Rel_Insert_Input>
  property?: Maybe<Properties_Obj_Rel_Insert_Input>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Possible_Values_Max_Fields = {
  __typename?: 'possible_values_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "possible_values" */
export type Possible_Values_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Possible_Values_Min_Fields = {
  __typename?: 'possible_values_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "possible_values" */
export type Possible_Values_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "possible_values" */
export type Possible_Values_Mutation_Response = {
  __typename?: 'possible_values_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Possible_Values>
}

/** input type for inserting object relation for remote table "possible_values" */
export type Possible_Values_Obj_Rel_Insert_Input = {
  data: Possible_Values_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** on conflict condition type for table "possible_values" */
export type Possible_Values_On_Conflict = {
  constraint: Possible_Values_Constraint
  update_columns?: Array<Possible_Values_Update_Column>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** Ordering options when selecting data from "possible_values". */
export type Possible_Values_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  post_attributes_aggregate?: Maybe<Post_Attributes_Aggregate_Order_By>
  property?: Maybe<Properties_Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: possible_values */
export type Possible_Values_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "possible_values" */
export enum Possible_Values_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "possible_values" */
export type Possible_Values_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Possible_Values_Stddev_Fields = {
  __typename?: 'possible_values_stddev_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "possible_values" */
export type Possible_Values_Stddev_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Possible_Values_Stddev_Pop_Fields = {
  __typename?: 'possible_values_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "possible_values" */
export type Possible_Values_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Possible_Values_Stddev_Samp_Fields = {
  __typename?: 'possible_values_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "possible_values" */
export type Possible_Values_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Possible_Values_Sum_Fields = {
  __typename?: 'possible_values_sum_fields'
  id?: Maybe<Scalars['bigint']>
  property_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "possible_values" */
export type Possible_Values_Sum_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** update columns of table "possible_values" */
export enum Possible_Values_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Possible_Values_Var_Pop_Fields = {
  __typename?: 'possible_values_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "possible_values" */
export type Possible_Values_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Possible_Values_Var_Samp_Fields = {
  __typename?: 'possible_values_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "possible_values" */
export type Possible_Values_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Possible_Values_Variance_Fields = {
  __typename?: 'possible_values_variance_fields'
  id?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "possible_values" */
export type Possible_Values_Variance_Order_By = {
  id?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** columns and relationships of "post_attachments" */
export type Post_Attachments = {
  __typename?: 'post_attachments'
  created_at: Scalars['timestamp']
  /** An object relationship */
  file: Files
  file_id: Scalars['bigint']
  id: Scalars['bigint']
  /** An object relationship */
  post: Posts
  post_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** aggregated selection of "post_attachments" */
export type Post_Attachments_Aggregate = {
  __typename?: 'post_attachments_aggregate'
  aggregate?: Maybe<Post_Attachments_Aggregate_Fields>
  nodes: Array<Post_Attachments>
}

/** aggregate fields of "post_attachments" */
export type Post_Attachments_Aggregate_Fields = {
  __typename?: 'post_attachments_aggregate_fields'
  avg?: Maybe<Post_Attachments_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Attachments_Max_Fields>
  min?: Maybe<Post_Attachments_Min_Fields>
  stddev?: Maybe<Post_Attachments_Stddev_Fields>
  stddev_pop?: Maybe<Post_Attachments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Attachments_Stddev_Samp_Fields>
  sum?: Maybe<Post_Attachments_Sum_Fields>
  var_pop?: Maybe<Post_Attachments_Var_Pop_Fields>
  var_samp?: Maybe<Post_Attachments_Var_Samp_Fields>
  variance?: Maybe<Post_Attachments_Variance_Fields>
}

/** aggregate fields of "post_attachments" */
export type Post_Attachments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attachments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_attachments" */
export type Post_Attachments_Aggregate_Order_By = {
  avg?: Maybe<Post_Attachments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Attachments_Max_Order_By>
  min?: Maybe<Post_Attachments_Min_Order_By>
  stddev?: Maybe<Post_Attachments_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Attachments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Attachments_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Attachments_Sum_Order_By>
  var_pop?: Maybe<Post_Attachments_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Attachments_Var_Samp_Order_By>
  variance?: Maybe<Post_Attachments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_attachments" */
export type Post_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Post_Attachments_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Attachments_Avg_Fields = {
  __typename?: 'post_attachments_avg_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_attachments" */
export type Post_Attachments_Avg_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_attachments". All fields are combined with a logical 'AND'. */
export type Post_Attachments_Bool_Exp = {
  _and?: Maybe<Array<Post_Attachments_Bool_Exp>>
  _not?: Maybe<Post_Attachments_Bool_Exp>
  _or?: Maybe<Array<Post_Attachments_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  file?: Maybe<Files_Bool_Exp>
  file_id?: Maybe<Bigint_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "post_attachments" */
export enum Post_Attachments_Constraint {
  /** unique or primary key constraint */
  PostAttachmentsPkey = 'post_attachments_pkey',
}

/** input type for incrementing numeric columns in table "post_attachments" */
export type Post_Attachments_Inc_Input = {
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "post_attachments" */
export type Post_Attachments_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  file?: Maybe<Files_Obj_Rel_Insert_Input>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Post_Attachments_Max_Fields = {
  __typename?: 'post_attachments_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "post_attachments" */
export type Post_Attachments_Max_Order_By = {
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Attachments_Min_Fields = {
  __typename?: 'post_attachments_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "post_attachments" */
export type Post_Attachments_Min_Order_By = {
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "post_attachments" */
export type Post_Attachments_Mutation_Response = {
  __typename?: 'post_attachments_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Attachments>
}

/** on conflict condition type for table "post_attachments" */
export type Post_Attachments_On_Conflict = {
  constraint: Post_Attachments_Constraint
  update_columns?: Array<Post_Attachments_Update_Column>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** Ordering options when selecting data from "post_attachments". */
export type Post_Attachments_Order_By = {
  created_at?: Maybe<Order_By>
  file?: Maybe<Files_Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: post_attachments */
export type Post_Attachments_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "post_attachments" */
export enum Post_Attachments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "post_attachments" */
export type Post_Attachments_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Post_Attachments_Stddev_Fields = {
  __typename?: 'post_attachments_stddev_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Attachments_Stddev_Pop_Fields = {
  __typename?: 'post_attachments_stddev_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Attachments_Stddev_Samp_Fields = {
  __typename?: 'post_attachments_stddev_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Post_Attachments_Sum_Fields = {
  __typename?: 'post_attachments_sum_fields'
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "post_attachments" */
export type Post_Attachments_Sum_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** update columns of table "post_attachments" */
export enum Post_Attachments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Post_Attachments_Var_Pop_Fields = {
  __typename?: 'post_attachments_var_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_attachments" */
export type Post_Attachments_Var_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Attachments_Var_Samp_Fields = {
  __typename?: 'post_attachments_var_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_attachments" */
export type Post_Attachments_Var_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Attachments_Variance_Fields = {
  __typename?: 'post_attachments_variance_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_attachments" */
export type Post_Attachments_Variance_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "post_attributes" */
export type Post_Attributes = {
  __typename?: 'post_attributes'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  /** An object relationship */
  possible_value: Possible_Values
  possible_value_id: Scalars['bigint']
  /** An object relationship */
  post: Posts
  post_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** aggregated selection of "post_attributes" */
export type Post_Attributes_Aggregate = {
  __typename?: 'post_attributes_aggregate'
  aggregate?: Maybe<Post_Attributes_Aggregate_Fields>
  nodes: Array<Post_Attributes>
}

/** aggregate fields of "post_attributes" */
export type Post_Attributes_Aggregate_Fields = {
  __typename?: 'post_attributes_aggregate_fields'
  avg?: Maybe<Post_Attributes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Attributes_Max_Fields>
  min?: Maybe<Post_Attributes_Min_Fields>
  stddev?: Maybe<Post_Attributes_Stddev_Fields>
  stddev_pop?: Maybe<Post_Attributes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Attributes_Stddev_Samp_Fields>
  sum?: Maybe<Post_Attributes_Sum_Fields>
  var_pop?: Maybe<Post_Attributes_Var_Pop_Fields>
  var_samp?: Maybe<Post_Attributes_Var_Samp_Fields>
  variance?: Maybe<Post_Attributes_Variance_Fields>
}

/** aggregate fields of "post_attributes" */
export type Post_Attributes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attributes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_attributes" */
export type Post_Attributes_Aggregate_Order_By = {
  avg?: Maybe<Post_Attributes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Attributes_Max_Order_By>
  min?: Maybe<Post_Attributes_Min_Order_By>
  stddev?: Maybe<Post_Attributes_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Attributes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Attributes_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Attributes_Sum_Order_By>
  var_pop?: Maybe<Post_Attributes_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Attributes_Var_Samp_Order_By>
  variance?: Maybe<Post_Attributes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_attributes" */
export type Post_Attributes_Arr_Rel_Insert_Input = {
  data: Array<Post_Attributes_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Attributes_Avg_Fields = {
  __typename?: 'post_attributes_avg_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_attributes" */
export type Post_Attributes_Avg_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_attributes". All fields are combined with a logical 'AND'. */
export type Post_Attributes_Bool_Exp = {
  _and?: Maybe<Array<Post_Attributes_Bool_Exp>>
  _not?: Maybe<Post_Attributes_Bool_Exp>
  _or?: Maybe<Array<Post_Attributes_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  possible_value?: Maybe<Possible_Values_Bool_Exp>
  possible_value_id?: Maybe<Bigint_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "post_attributes" */
export enum Post_Attributes_Constraint {
  /** unique or primary key constraint */
  PostAttributesPkey = 'post_attributes_pkey',
}

/** input type for incrementing numeric columns in table "post_attributes" */
export type Post_Attributes_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  possible_value_id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "post_attributes" */
export type Post_Attributes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  possible_value?: Maybe<Possible_Values_Obj_Rel_Insert_Input>
  possible_value_id?: Maybe<Scalars['bigint']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Post_Attributes_Max_Fields = {
  __typename?: 'post_attributes_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  possible_value_id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "post_attributes" */
export type Post_Attributes_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Attributes_Min_Fields = {
  __typename?: 'post_attributes_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  possible_value_id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "post_attributes" */
export type Post_Attributes_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "post_attributes" */
export type Post_Attributes_Mutation_Response = {
  __typename?: 'post_attributes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Attributes>
}

/** on conflict condition type for table "post_attributes" */
export type Post_Attributes_On_Conflict = {
  constraint: Post_Attributes_Constraint
  update_columns?: Array<Post_Attributes_Update_Column>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** Ordering options when selecting data from "post_attributes". */
export type Post_Attributes_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  possible_value?: Maybe<Possible_Values_Order_By>
  possible_value_id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: post_attributes */
export type Post_Attributes_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "post_attributes" */
export enum Post_Attributes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PossibleValueId = 'possible_value_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "post_attributes" */
export type Post_Attributes_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  possible_value_id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Post_Attributes_Stddev_Fields = {
  __typename?: 'post_attributes_stddev_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_attributes" */
export type Post_Attributes_Stddev_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Attributes_Stddev_Pop_Fields = {
  __typename?: 'post_attributes_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_attributes" */
export type Post_Attributes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Attributes_Stddev_Samp_Fields = {
  __typename?: 'post_attributes_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_attributes" */
export type Post_Attributes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Post_Attributes_Sum_Fields = {
  __typename?: 'post_attributes_sum_fields'
  id?: Maybe<Scalars['bigint']>
  possible_value_id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "post_attributes" */
export type Post_Attributes_Sum_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** update columns of table "post_attributes" */
export enum Post_Attributes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PossibleValueId = 'possible_value_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Post_Attributes_Var_Pop_Fields = {
  __typename?: 'post_attributes_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_attributes" */
export type Post_Attributes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Attributes_Var_Samp_Fields = {
  __typename?: 'post_attributes_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_attributes" */
export type Post_Attributes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Attributes_Variance_Fields = {
  __typename?: 'post_attributes_variance_fields'
  id?: Maybe<Scalars['Float']>
  possible_value_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_attributes" */
export type Post_Attributes_Variance_Order_By = {
  id?: Maybe<Order_By>
  possible_value_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "post_prices" */
export type Post_Prices = {
  __typename?: 'post_prices'
  created_at: Scalars['timestamp']
  detail: Scalars['String']
  id: Scalars['bigint']
  /** An object relationship */
  post: Posts
  post_id: Scalars['bigint']
  price: Scalars['numeric']
  updated_at: Scalars['timestamp']
}

/** aggregated selection of "post_prices" */
export type Post_Prices_Aggregate = {
  __typename?: 'post_prices_aggregate'
  aggregate?: Maybe<Post_Prices_Aggregate_Fields>
  nodes: Array<Post_Prices>
}

/** aggregate fields of "post_prices" */
export type Post_Prices_Aggregate_Fields = {
  __typename?: 'post_prices_aggregate_fields'
  avg?: Maybe<Post_Prices_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Prices_Max_Fields>
  min?: Maybe<Post_Prices_Min_Fields>
  stddev?: Maybe<Post_Prices_Stddev_Fields>
  stddev_pop?: Maybe<Post_Prices_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Prices_Stddev_Samp_Fields>
  sum?: Maybe<Post_Prices_Sum_Fields>
  var_pop?: Maybe<Post_Prices_Var_Pop_Fields>
  var_samp?: Maybe<Post_Prices_Var_Samp_Fields>
  variance?: Maybe<Post_Prices_Variance_Fields>
}

/** aggregate fields of "post_prices" */
export type Post_Prices_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Prices_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_prices" */
export type Post_Prices_Aggregate_Order_By = {
  avg?: Maybe<Post_Prices_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Prices_Max_Order_By>
  min?: Maybe<Post_Prices_Min_Order_By>
  stddev?: Maybe<Post_Prices_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Prices_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Prices_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Prices_Sum_Order_By>
  var_pop?: Maybe<Post_Prices_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Prices_Var_Samp_Order_By>
  variance?: Maybe<Post_Prices_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_prices" */
export type Post_Prices_Arr_Rel_Insert_Input = {
  data: Array<Post_Prices_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Post_Prices_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Prices_Avg_Fields = {
  __typename?: 'post_prices_avg_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_prices" */
export type Post_Prices_Avg_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_prices". All fields are combined with a logical 'AND'. */
export type Post_Prices_Bool_Exp = {
  _and?: Maybe<Array<Post_Prices_Bool_Exp>>
  _not?: Maybe<Post_Prices_Bool_Exp>
  _or?: Maybe<Array<Post_Prices_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  detail?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  price?: Maybe<Numeric_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "post_prices" */
export enum Post_Prices_Constraint {
  /** unique or primary key constraint */
  PostPricesPkey = 'post_prices_pkey',
}

/** input type for incrementing numeric columns in table "post_prices" */
export type Post_Prices_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "post_prices" */
export type Post_Prices_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Post_Prices_Max_Fields = {
  __typename?: 'post_prices_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "post_prices" */
export type Post_Prices_Max_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Prices_Min_Fields = {
  __typename?: 'post_prices_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "post_prices" */
export type Post_Prices_Min_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "post_prices" */
export type Post_Prices_Mutation_Response = {
  __typename?: 'post_prices_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Prices>
}

/** on conflict condition type for table "post_prices" */
export type Post_Prices_On_Conflict = {
  constraint: Post_Prices_Constraint
  update_columns?: Array<Post_Prices_Update_Column>
  where?: Maybe<Post_Prices_Bool_Exp>
}

/** Ordering options when selecting data from "post_prices". */
export type Post_Prices_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: post_prices */
export type Post_Prices_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "post_prices" */
export enum Post_Prices_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "post_prices" */
export type Post_Prices_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Post_Prices_Stddev_Fields = {
  __typename?: 'post_prices_stddev_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_prices" */
export type Post_Prices_Stddev_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Prices_Stddev_Pop_Fields = {
  __typename?: 'post_prices_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_prices" */
export type Post_Prices_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Prices_Stddev_Samp_Fields = {
  __typename?: 'post_prices_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_prices" */
export type Post_Prices_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Post_Prices_Sum_Fields = {
  __typename?: 'post_prices_sum_fields'
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  price?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "post_prices" */
export type Post_Prices_Sum_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** update columns of table "post_prices" */
export enum Post_Prices_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Post_Prices_Var_Pop_Fields = {
  __typename?: 'post_prices_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_prices" */
export type Post_Prices_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Prices_Var_Samp_Fields = {
  __typename?: 'post_prices_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_prices" */
export type Post_Prices_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Prices_Variance_Fields = {
  __typename?: 'post_prices_variance_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_prices" */
export type Post_Prices_Variance_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  price?: Maybe<Order_By>
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts'
  created_at: Scalars['timestamp']
  detail: Scalars['String']
  id: Scalars['bigint']
  is_local: Scalars['Boolean']
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** An array relationship */
  post_attributes: Array<Post_Attributes>
  /** An aggregate relationship */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** An array relationship */
  post_prices: Array<Post_Prices>
  /** An aggregate relationship */
  post_prices_aggregate: Post_Prices_Aggregate
  posted_by: Scalars['bigint']
  stripe_customer_id?: Maybe<Scalars['String']>
  /** An object relationship */
  sub_category: Sub_Categories
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** columns and relationships of "posts" */
export type PostsPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_PricesArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate'
  aggregate?: Maybe<Posts_Aggregate_Fields>
  nodes: Array<Posts>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields'
  avg?: Maybe<Posts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Posts_Max_Fields>
  min?: Maybe<Posts_Min_Fields>
  stddev?: Maybe<Posts_Stddev_Fields>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>
  sum?: Maybe<Posts_Sum_Fields>
  var_pop?: Maybe<Posts_Var_Pop_Fields>
  var_samp?: Maybe<Posts_Var_Samp_Fields>
  variance?: Maybe<Posts_Variance_Fields>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Posts_Max_Order_By>
  min?: Maybe<Posts_Min_Order_By>
  stddev?: Maybe<Posts_Stddev_Order_By>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>
  sum?: Maybe<Posts_Sum_Order_By>
  var_pop?: Maybe<Posts_Var_Pop_Order_By>
  var_samp?: Maybe<Posts_Var_Samp_Order_By>
  variance?: Maybe<Posts_Variance_Order_By>
}

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>
  _not?: Maybe<Posts_Bool_Exp>
  _or?: Maybe<Array<Posts_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  detail?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_local?: Maybe<Boolean_Comparison_Exp>
  payments?: Maybe<Payments_Bool_Exp>
  post_attachments?: Maybe<Post_Attachments_Bool_Exp>
  post_attributes?: Maybe<Post_Attributes_Bool_Exp>
  post_prices?: Maybe<Post_Prices_Bool_Exp>
  posted_by?: Maybe<Bigint_Comparison_Exp>
  stripe_customer_id?: Maybe<String_Comparison_Exp>
  sub_category?: Maybe<Sub_Categories_Bool_Exp>
  sub_category_id?: Maybe<Bigint_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  years_of_experience?: Maybe<Smallint_Comparison_Exp>
}

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint */
  PostsPostedBySubCategoryIdKey = 'posts_posted_by_sub_category_id_key',
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_local?: Maybe<Scalars['Boolean']>
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>
  post_attachments?: Maybe<Post_Attachments_Arr_Rel_Insert_Input>
  post_attributes?: Maybe<Post_Attributes_Arr_Rel_Insert_Input>
  post_prices?: Maybe<Post_Prices_Arr_Rel_Insert_Input>
  posted_by?: Maybe<Scalars['bigint']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Posts>
}

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint
  update_columns?: Array<Posts_Update_Column>
  where?: Maybe<Posts_Bool_Exp>
}

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_local?: Maybe<Order_By>
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>
  post_attachments_aggregate?: Maybe<Post_Attachments_Aggregate_Order_By>
  post_attributes_aggregate?: Maybe<Post_Attributes_Aggregate_Order_By>
  post_prices_aggregate?: Maybe<Post_Prices_Aggregate_Order_By>
  posted_by?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category?: Maybe<Sub_Categories_Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocal = 'is_local',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_local?: Maybe<Scalars['Boolean']>
  posted_by?: Maybe<Scalars['bigint']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields'
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocal = 'is_local',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: 'properties'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  is_mandatory: Scalars['Boolean']
  name: Scalars['String']
  order: Scalars['smallint']
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** An object relationship */
  property_screen: Property_Screens
  property_screen_id: Scalars['bigint']
  /** An object relationship */
  sub_category: Sub_Categories
  sub_category_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "properties" */
export type PropertiesPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** columns and relationships of "properties" */
export type PropertiesPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: 'properties_aggregate'
  aggregate?: Maybe<Properties_Aggregate_Fields>
  nodes: Array<Properties>
}

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: 'properties_aggregate_fields'
  avg?: Maybe<Properties_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Properties_Max_Fields>
  min?: Maybe<Properties_Min_Fields>
  stddev?: Maybe<Properties_Stddev_Fields>
  stddev_pop?: Maybe<Properties_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Properties_Stddev_Samp_Fields>
  sum?: Maybe<Properties_Sum_Fields>
  var_pop?: Maybe<Properties_Var_Pop_Fields>
  var_samp?: Maybe<Properties_Var_Samp_Fields>
  variance?: Maybe<Properties_Variance_Fields>
}

/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Properties_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "properties" */
export type Properties_Aggregate_Order_By = {
  avg?: Maybe<Properties_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Properties_Max_Order_By>
  min?: Maybe<Properties_Min_Order_By>
  stddev?: Maybe<Properties_Stddev_Order_By>
  stddev_pop?: Maybe<Properties_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Properties_Stddev_Samp_Order_By>
  sum?: Maybe<Properties_Sum_Order_By>
  var_pop?: Maybe<Properties_Var_Pop_Order_By>
  var_samp?: Maybe<Properties_Var_Samp_Order_By>
  variance?: Maybe<Properties_Variance_Order_By>
}

/** input type for inserting array relation for remote table "properties" */
export type Properties_Arr_Rel_Insert_Input = {
  data: Array<Properties_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** aggregate avg on columns */
export type Properties_Avg_Fields = {
  __typename?: 'properties_avg_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "properties" */
export type Properties_Avg_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  _and?: Maybe<Array<Properties_Bool_Exp>>
  _not?: Maybe<Properties_Bool_Exp>
  _or?: Maybe<Array<Properties_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_mandatory?: Maybe<Boolean_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  possible_values?: Maybe<Possible_Values_Bool_Exp>
  property_screen?: Maybe<Property_Screens_Bool_Exp>
  property_screen_id?: Maybe<Bigint_Comparison_Exp>
  sub_category?: Maybe<Sub_Categories_Bool_Exp>
  sub_category_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint */
  PropertiesPkey = 'properties_pkey',
}

/** input type for incrementing numeric columns in table "properties" */
export type Properties_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  is_mandatory?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  possible_values?: Maybe<Possible_Values_Arr_Rel_Insert_Input>
  property_screen?: Maybe<Property_Screens_Obj_Rel_Insert_Input>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: 'properties_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "properties" */
export type Properties_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: 'properties_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "properties" */
export type Properties_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: 'properties_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Properties>
}

/** input type for inserting object relation for remote table "properties" */
export type Properties_Obj_Rel_Insert_Input = {
  data: Properties_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** on conflict condition type for table "properties" */
export type Properties_On_Conflict = {
  constraint: Properties_Constraint
  update_columns?: Array<Properties_Update_Column>
  where?: Maybe<Properties_Bool_Exp>
}

/** Ordering options when selecting data from "properties". */
export type Properties_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_mandatory?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  possible_values_aggregate?: Maybe<Possible_Values_Aggregate_Order_By>
  property_screen?: Maybe<Property_Screens_Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category?: Maybe<Sub_Categories_Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: properties */
export type Properties_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsMandatory = 'is_mandatory',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  PropertyScreenId = 'property_screen_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  is_mandatory?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Properties_Stddev_Fields = {
  __typename?: 'properties_stddev_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "properties" */
export type Properties_Stddev_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Properties_Stddev_Pop_Fields = {
  __typename?: 'properties_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "properties" */
export type Properties_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Properties_Stddev_Samp_Fields = {
  __typename?: 'properties_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "properties" */
export type Properties_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Properties_Sum_Fields = {
  __typename?: 'properties_sum_fields'
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_screen_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "properties" */
export type Properties_Sum_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsMandatory = 'is_mandatory',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  PropertyScreenId = 'property_screen_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Properties_Var_Pop_Fields = {
  __typename?: 'properties_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "properties" */
export type Properties_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Properties_Var_Samp_Fields = {
  __typename?: 'properties_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "properties" */
export type Properties_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Properties_Variance_Fields = {
  __typename?: 'properties_variance_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_screen_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "properties" */
export type Properties_Variance_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_screen_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** columns and relationships of "property_screens" */
export type Property_Screens = {
  __typename?: 'property_screens'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  order: Scalars['smallint']
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "property_screens" */
export type Property_ScreensPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** columns and relationships of "property_screens" */
export type Property_ScreensProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** aggregated selection of "property_screens" */
export type Property_Screens_Aggregate = {
  __typename?: 'property_screens_aggregate'
  aggregate?: Maybe<Property_Screens_Aggregate_Fields>
  nodes: Array<Property_Screens>
}

/** aggregate fields of "property_screens" */
export type Property_Screens_Aggregate_Fields = {
  __typename?: 'property_screens_aggregate_fields'
  avg?: Maybe<Property_Screens_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Property_Screens_Max_Fields>
  min?: Maybe<Property_Screens_Min_Fields>
  stddev?: Maybe<Property_Screens_Stddev_Fields>
  stddev_pop?: Maybe<Property_Screens_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Screens_Stddev_Samp_Fields>
  sum?: Maybe<Property_Screens_Sum_Fields>
  var_pop?: Maybe<Property_Screens_Var_Pop_Fields>
  var_samp?: Maybe<Property_Screens_Var_Samp_Fields>
  variance?: Maybe<Property_Screens_Variance_Fields>
}

/** aggregate fields of "property_screens" */
export type Property_Screens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Property_Screens_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Property_Screens_Avg_Fields = {
  __typename?: 'property_screens_avg_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "property_screens". All fields are combined with a logical 'AND'. */
export type Property_Screens_Bool_Exp = {
  _and?: Maybe<Array<Property_Screens_Bool_Exp>>
  _not?: Maybe<Property_Screens_Bool_Exp>
  _or?: Maybe<Array<Property_Screens_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  properties?: Maybe<Properties_Bool_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "property_screens" */
export enum Property_Screens_Constraint {
  /** unique or primary key constraint */
  PropertyScreensPkey = 'property_screens_pkey',
}

/** input type for incrementing numeric columns in table "property_screens" */
export type Property_Screens_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "property_screens" */
export type Property_Screens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  properties?: Maybe<Properties_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Property_Screens_Max_Fields = {
  __typename?: 'property_screens_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Property_Screens_Min_Fields = {
  __typename?: 'property_screens_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "property_screens" */
export type Property_Screens_Mutation_Response = {
  __typename?: 'property_screens_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Property_Screens>
}

/** input type for inserting object relation for remote table "property_screens" */
export type Property_Screens_Obj_Rel_Insert_Input = {
  data: Property_Screens_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Property_Screens_On_Conflict>
}

/** on conflict condition type for table "property_screens" */
export type Property_Screens_On_Conflict = {
  constraint: Property_Screens_Constraint
  update_columns?: Array<Property_Screens_Update_Column>
  where?: Maybe<Property_Screens_Bool_Exp>
}

/** Ordering options when selecting data from "property_screens". */
export type Property_Screens_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  properties_aggregate?: Maybe<Properties_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: property_screens */
export type Property_Screens_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "property_screens" */
export enum Property_Screens_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "property_screens" */
export type Property_Screens_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Property_Screens_Stddev_Fields = {
  __typename?: 'property_screens_stddev_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Property_Screens_Stddev_Pop_Fields = {
  __typename?: 'property_screens_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Property_Screens_Stddev_Samp_Fields = {
  __typename?: 'property_screens_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Property_Screens_Sum_Fields = {
  __typename?: 'property_screens_sum_fields'
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
}

/** update columns of table "property_screens" */
export enum Property_Screens_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Property_Screens_Var_Pop_Fields = {
  __typename?: 'property_screens_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Property_Screens_Var_Samp_Fields = {
  __typename?: 'property_screens_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Property_Screens_Variance_Fields = {
  __typename?: 'property_screens_variance_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "categories" */
  categories: Array<Categories>
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table: "donations" */
  donations: Array<Donations>
  /** fetch aggregated fields from the table: "donations" */
  donations_aggregate: Donations_Aggregate
  /** fetch data from the table: "donations" using primary key columns */
  donations_by_pk?: Maybe<Donations>
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** fetch data from the table: "possible_values" using primary key columns */
  possible_values_by_pk?: Maybe<Possible_Values>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** fetch data from the table: "post_attachments" using primary key columns */
  post_attachments_by_pk?: Maybe<Post_Attachments>
  /** An array relationship */
  post_attributes: Array<Post_Attributes>
  /** An aggregate relationship */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** fetch data from the table: "post_attributes" using primary key columns */
  post_attributes_by_pk?: Maybe<Post_Attributes>
  /** An array relationship */
  post_prices: Array<Post_Prices>
  /** An aggregate relationship */
  post_prices_aggregate: Post_Prices_Aggregate
  /** fetch data from the table: "post_prices" using primary key columns */
  post_prices_by_pk?: Maybe<Post_Prices>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>
  /** fetch data from the table: "property_screens" */
  property_screens: Array<Property_Screens>
  /** fetch aggregated fields from the table: "property_screens" */
  property_screens_aggregate: Property_Screens_Aggregate
  /** fetch data from the table: "property_screens" using primary key columns */
  property_screens_by_pk?: Maybe<Property_Screens>
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** fetch data from the table: "user_rooms" using primary key columns */
  user_rooms_by_pk?: Maybe<User_Rooms>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
  /** fetch data from the table: "zip_codes" using primary key columns */
  zip_codes_by_pk?: Maybe<Zip_Codes>
}

export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Query_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Query_RootCities_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootDonationsArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Query_RootDonations_AggregateArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Query_RootDonations_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Query_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Query_RootFiles_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Query_RootMessages_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Query_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Query_RootPayments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Query_RootPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Query_RootPossible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Query_RootPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Query_RootPost_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Query_RootPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Query_RootPost_Attributes_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPost_PricesArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

export type Query_RootPost_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

export type Query_RootPost_Prices_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Query_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Query_RootProperties_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootProperty_ScreensArgs = {
  distinct_on?: Maybe<Array<Property_Screens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Screens_Order_By>>
  where?: Maybe<Property_Screens_Bool_Exp>
}

export type Query_RootProperty_Screens_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Screens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Screens_Order_By>>
  where?: Maybe<Property_Screens_Bool_Exp>
}

export type Query_RootProperty_Screens_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Query_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Query_RootRooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Query_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Query_RootSub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Query_RootUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Query_RootUser_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Query_RootZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Query_RootZip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms'
  id: Scalars['bigint']
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
}

/** columns and relationships of "rooms" */
export type RoomsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate'
  aggregate?: Maybe<Rooms_Aggregate_Fields>
  nodes: Array<Rooms>
}

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields'
  avg?: Maybe<Rooms_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Rooms_Max_Fields>
  min?: Maybe<Rooms_Min_Fields>
  stddev?: Maybe<Rooms_Stddev_Fields>
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Fields>
  sum?: Maybe<Rooms_Sum_Fields>
  var_pop?: Maybe<Rooms_Var_Pop_Fields>
  var_samp?: Maybe<Rooms_Var_Samp_Fields>
  variance?: Maybe<Rooms_Variance_Fields>
}

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rooms_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Rooms_Avg_Fields = {
  __typename?: 'rooms_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: Maybe<Array<Rooms_Bool_Exp>>
  _not?: Maybe<Rooms_Bool_Exp>
  _or?: Maybe<Array<Rooms_Bool_Exp>>
  id?: Maybe<Bigint_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  user_rooms?: Maybe<User_Rooms_Bool_Exp>
}

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey',
}

/** input type for incrementing numeric columns in table "rooms" */
export type Rooms_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  id?: Maybe<Scalars['bigint']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  user_rooms?: Maybe<User_Rooms_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields'
  id?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields'
  id?: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>
}

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** on conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint
  update_columns?: Array<Rooms_Update_Column>
  where?: Maybe<Rooms_Bool_Exp>
}

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  id?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  user_rooms_aggregate?: Maybe<User_Rooms_Aggregate_Order_By>
}

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Rooms_Stddev_Fields = {
  __typename?: 'rooms_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Rooms_Stddev_Pop_Fields = {
  __typename?: 'rooms_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Rooms_Stddev_Samp_Fields = {
  __typename?: 'rooms_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Rooms_Sum_Fields = {
  __typename?: 'rooms_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Rooms_Var_Pop_Fields = {
  __typename?: 'rooms_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Rooms_Var_Samp_Fields = {
  __typename?: 'rooms_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Rooms_Variance_Fields = {
  __typename?: 'rooms_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>
  _gt?: Maybe<Scalars['smallint']>
  _gte?: Maybe<Scalars['smallint']>
  _in?: Maybe<Array<Scalars['smallint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['smallint']>
  _lte?: Maybe<Scalars['smallint']>
  _neq?: Maybe<Scalars['smallint']>
  _nin?: Maybe<Array<Scalars['smallint']>>
}

/** columns and relationships of "sub_categories" */
export type Sub_Categories = {
  __typename?: 'sub_categories'
  /** An object relationship */
  category?: Maybe<Categories>
  category_id?: Maybe<Scalars['bigint']>
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  max_post_images: Scalars['smallint']
  name: Scalars['String']
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** aggregated selection of "sub_categories" */
export type Sub_Categories_Aggregate = {
  __typename?: 'sub_categories_aggregate'
  aggregate?: Maybe<Sub_Categories_Aggregate_Fields>
  nodes: Array<Sub_Categories>
}

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_Fields = {
  __typename?: 'sub_categories_aggregate_fields'
  avg?: Maybe<Sub_Categories_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Sub_Categories_Max_Fields>
  min?: Maybe<Sub_Categories_Min_Fields>
  stddev?: Maybe<Sub_Categories_Stddev_Fields>
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Fields>
  sum?: Maybe<Sub_Categories_Sum_Fields>
  var_pop?: Maybe<Sub_Categories_Var_Pop_Fields>
  var_samp?: Maybe<Sub_Categories_Var_Samp_Fields>
  variance?: Maybe<Sub_Categories_Variance_Fields>
}

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Categories_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "sub_categories" */
export type Sub_Categories_Aggregate_Order_By = {
  avg?: Maybe<Sub_Categories_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Sub_Categories_Max_Order_By>
  min?: Maybe<Sub_Categories_Min_Order_By>
  stddev?: Maybe<Sub_Categories_Stddev_Order_By>
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Order_By>
  sum?: Maybe<Sub_Categories_Sum_Order_By>
  var_pop?: Maybe<Sub_Categories_Var_Pop_Order_By>
  var_samp?: Maybe<Sub_Categories_Var_Samp_Order_By>
  variance?: Maybe<Sub_Categories_Variance_Order_By>
}

/** input type for inserting array relation for remote table "sub_categories" */
export type Sub_Categories_Arr_Rel_Insert_Input = {
  data: Array<Sub_Categories_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** aggregate avg on columns */
export type Sub_Categories_Avg_Fields = {
  __typename?: 'sub_categories_avg_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "sub_categories" */
export type Sub_Categories_Avg_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "sub_categories". All fields are combined with a logical 'AND'. */
export type Sub_Categories_Bool_Exp = {
  _and?: Maybe<Array<Sub_Categories_Bool_Exp>>
  _not?: Maybe<Sub_Categories_Bool_Exp>
  _or?: Maybe<Array<Sub_Categories_Bool_Exp>>
  category?: Maybe<Categories_Bool_Exp>
  category_id?: Maybe<Bigint_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  max_post_images?: Maybe<Smallint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
  properties?: Maybe<Properties_Bool_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "sub_categories" */
export enum Sub_Categories_Constraint {
  /** unique or primary key constraint */
  SubCategoriesPkey = 'sub_categories_pkey',
}

/** input type for incrementing numeric columns in table "sub_categories" */
export type Sub_Categories_Inc_Input = {
  category_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "sub_categories" */
export type Sub_Categories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
  properties?: Maybe<Properties_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Sub_Categories_Max_Fields = {
  __typename?: 'sub_categories_max_fields'
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "sub_categories" */
export type Sub_Categories_Max_Order_By = {
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Sub_Categories_Min_Fields = {
  __typename?: 'sub_categories_min_fields'
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "sub_categories" */
export type Sub_Categories_Min_Order_By = {
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "sub_categories" */
export type Sub_Categories_Mutation_Response = {
  __typename?: 'sub_categories_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Sub_Categories>
}

/** input type for inserting object relation for remote table "sub_categories" */
export type Sub_Categories_Obj_Rel_Insert_Input = {
  data: Sub_Categories_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** on conflict condition type for table "sub_categories" */
export type Sub_Categories_On_Conflict = {
  constraint: Sub_Categories_Constraint
  update_columns?: Array<Sub_Categories_Update_Column>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** Ordering options when selecting data from "sub_categories". */
export type Sub_Categories_Order_By = {
  category?: Maybe<Categories_Order_By>
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
  properties_aggregate?: Maybe<Properties_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: sub_categories */
export type Sub_Categories_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "sub_categories" */
export enum Sub_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPostImages = 'max_post_images',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "sub_categories" */
export type Sub_Categories_Set_Input = {
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Sub_Categories_Stddev_Fields = {
  __typename?: 'sub_categories_stddev_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Sub_Categories_Stddev_Pop_Fields = {
  __typename?: 'sub_categories_stddev_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Sub_Categories_Stddev_Samp_Fields = {
  __typename?: 'sub_categories_stddev_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Sub_Categories_Sum_Fields = {
  __typename?: 'sub_categories_sum_fields'
  category_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "sub_categories" */
export type Sub_Categories_Sum_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** update columns of table "sub_categories" */
export enum Sub_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPostImages = 'max_post_images',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Sub_Categories_Var_Pop_Fields = {
  __typename?: 'sub_categories_var_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "sub_categories" */
export type Sub_Categories_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Sub_Categories_Var_Samp_Fields = {
  __typename?: 'sub_categories_var_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "sub_categories" */
export type Sub_Categories_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Sub_Categories_Variance_Fields = {
  __typename?: 'sub_categories_variance_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "sub_categories" */
export type Sub_Categories_Variance_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "categories" */
  categories: Array<Categories>
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table: "donations" */
  donations: Array<Donations>
  /** fetch aggregated fields from the table: "donations" */
  donations_aggregate: Donations_Aggregate
  /** fetch data from the table: "donations" using primary key columns */
  donations_by_pk?: Maybe<Donations>
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** fetch data from the table: "possible_values" using primary key columns */
  possible_values_by_pk?: Maybe<Possible_Values>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** fetch data from the table: "post_attachments" using primary key columns */
  post_attachments_by_pk?: Maybe<Post_Attachments>
  /** An array relationship */
  post_attributes: Array<Post_Attributes>
  /** An aggregate relationship */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** fetch data from the table: "post_attributes" using primary key columns */
  post_attributes_by_pk?: Maybe<Post_Attributes>
  /** An array relationship */
  post_prices: Array<Post_Prices>
  /** An aggregate relationship */
  post_prices_aggregate: Post_Prices_Aggregate
  /** fetch data from the table: "post_prices" using primary key columns */
  post_prices_by_pk?: Maybe<Post_Prices>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>
  /** fetch data from the table: "property_screens" */
  property_screens: Array<Property_Screens>
  /** fetch aggregated fields from the table: "property_screens" */
  property_screens_aggregate: Property_Screens_Aggregate
  /** fetch data from the table: "property_screens" using primary key columns */
  property_screens_by_pk?: Maybe<Property_Screens>
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** fetch data from the table: "user_rooms" using primary key columns */
  user_rooms_by_pk?: Maybe<User_Rooms>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
  /** fetch data from the table: "zip_codes" using primary key columns */
  zip_codes_by_pk?: Maybe<Zip_Codes>
}

export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootDonationsArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Subscription_RootDonations_AggregateArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Subscription_RootDonations_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Subscription_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Subscription_RootFiles_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Subscription_RootPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Subscription_RootPossible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Subscription_RootPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Subscription_RootPost_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Subscription_RootPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Subscription_RootPost_Attributes_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPost_PricesArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

export type Subscription_RootPost_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Prices_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Prices_Order_By>>
  where?: Maybe<Post_Prices_Bool_Exp>
}

export type Subscription_RootPost_Prices_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Subscription_RootProperties_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootProperty_ScreensArgs = {
  distinct_on?: Maybe<Array<Property_Screens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Screens_Order_By>>
  where?: Maybe<Property_Screens_Bool_Exp>
}

export type Subscription_RootProperty_Screens_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Screens_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Screens_Order_By>>
  where?: Maybe<Property_Screens_Bool_Exp>
}

export type Subscription_RootProperty_Screens_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Subscription_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Subscription_RootSub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Subscription_RootUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Subscription_RootUser_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Subscription_RootZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Subscription_RootZip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>
  _gt?: Maybe<Scalars['timestamp']>
  _gte?: Maybe<Scalars['timestamp']>
  _in?: Maybe<Array<Scalars['timestamp']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamp']>
  _lte?: Maybe<Scalars['timestamp']>
  _neq?: Maybe<Scalars['timestamp']>
  _nin?: Maybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** columns and relationships of "user_rooms" */
export type User_Rooms = {
  __typename?: 'user_rooms'
  id: Scalars['bigint']
  /** An object relationship */
  room: Rooms
  room_id: Scalars['bigint']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "user_rooms" */
export type User_Rooms_Aggregate = {
  __typename?: 'user_rooms_aggregate'
  aggregate?: Maybe<User_Rooms_Aggregate_Fields>
  nodes: Array<User_Rooms>
}

/** aggregate fields of "user_rooms" */
export type User_Rooms_Aggregate_Fields = {
  __typename?: 'user_rooms_aggregate_fields'
  avg?: Maybe<User_Rooms_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Rooms_Max_Fields>
  min?: Maybe<User_Rooms_Min_Fields>
  stddev?: Maybe<User_Rooms_Stddev_Fields>
  stddev_pop?: Maybe<User_Rooms_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Rooms_Stddev_Samp_Fields>
  sum?: Maybe<User_Rooms_Sum_Fields>
  var_pop?: Maybe<User_Rooms_Var_Pop_Fields>
  var_samp?: Maybe<User_Rooms_Var_Samp_Fields>
  variance?: Maybe<User_Rooms_Variance_Fields>
}

/** aggregate fields of "user_rooms" */
export type User_Rooms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Rooms_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_rooms" */
export type User_Rooms_Aggregate_Order_By = {
  avg?: Maybe<User_Rooms_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Rooms_Max_Order_By>
  min?: Maybe<User_Rooms_Min_Order_By>
  stddev?: Maybe<User_Rooms_Stddev_Order_By>
  stddev_pop?: Maybe<User_Rooms_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Rooms_Stddev_Samp_Order_By>
  sum?: Maybe<User_Rooms_Sum_Order_By>
  var_pop?: Maybe<User_Rooms_Var_Pop_Order_By>
  var_samp?: Maybe<User_Rooms_Var_Samp_Order_By>
  variance?: Maybe<User_Rooms_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_rooms" */
export type User_Rooms_Arr_Rel_Insert_Input = {
  data: Array<User_Rooms_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** aggregate avg on columns */
export type User_Rooms_Avg_Fields = {
  __typename?: 'user_rooms_avg_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_rooms" */
export type User_Rooms_Avg_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_rooms". All fields are combined with a logical 'AND'. */
export type User_Rooms_Bool_Exp = {
  _and?: Maybe<Array<User_Rooms_Bool_Exp>>
  _not?: Maybe<User_Rooms_Bool_Exp>
  _or?: Maybe<Array<User_Rooms_Bool_Exp>>
  id?: Maybe<Bigint_Comparison_Exp>
  room?: Maybe<Rooms_Bool_Exp>
  room_id?: Maybe<Bigint_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "user_rooms" */
export enum User_Rooms_Constraint {
  /** unique or primary key constraint */
  UserRoomsPkey = 'user_rooms_pkey',
}

/** input type for incrementing numeric columns in table "user_rooms" */
export type User_Rooms_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_rooms" */
export type User_Rooms_Insert_Input = {
  id?: Maybe<Scalars['bigint']>
  room?: Maybe<Rooms_Obj_Rel_Insert_Input>
  room_id?: Maybe<Scalars['bigint']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type User_Rooms_Max_Fields = {
  __typename?: 'user_rooms_max_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "user_rooms" */
export type User_Rooms_Max_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Rooms_Min_Fields = {
  __typename?: 'user_rooms_min_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "user_rooms" */
export type User_Rooms_Min_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_rooms" */
export type User_Rooms_Mutation_Response = {
  __typename?: 'user_rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Rooms>
}

/** on conflict condition type for table "user_rooms" */
export type User_Rooms_On_Conflict = {
  constraint: User_Rooms_Constraint
  update_columns?: Array<User_Rooms_Update_Column>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** Ordering options when selecting data from "user_rooms". */
export type User_Rooms_Order_By = {
  id?: Maybe<Order_By>
  room?: Maybe<Rooms_Order_By>
  room_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_rooms */
export type User_Rooms_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "user_rooms" */
export enum User_Rooms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_rooms" */
export type User_Rooms_Set_Input = {
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type User_Rooms_Stddev_Fields = {
  __typename?: 'user_rooms_stddev_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Rooms_Stddev_Pop_Fields = {
  __typename?: 'user_rooms_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Rooms_Stddev_Samp_Fields = {
  __typename?: 'user_rooms_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Rooms_Sum_Fields = {
  __typename?: 'user_rooms_sum_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "user_rooms" */
export type User_Rooms_Sum_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_rooms" */
export enum User_Rooms_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type User_Rooms_Var_Pop_Fields = {
  __typename?: 'user_rooms_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_rooms" */
export type User_Rooms_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Rooms_Var_Samp_Fields = {
  __typename?: 'user_rooms_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_rooms" */
export type User_Rooms_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Rooms_Variance_Fields = {
  __typename?: 'user_rooms_variance_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_rooms" */
export type User_Rooms_Variance_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** An object relationship */
  avatar?: Maybe<Files>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size: Scalars['String']
  contact_address?: Maybe<Scalars['String']>
  created_at: Scalars['timestamp']
  email: Scalars['String']
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  firebase_uid: Scalars['String']
  full_name: Scalars['String']
  id: Scalars['bigint']
  is_privacy_enabled: Scalars['Boolean']
  last_seen?: Maybe<Scalars['timestamp']>
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  phone?: Maybe<Scalars['String']>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** A computed field, executes function "users_public_contact_address" */
  public_contact_address?: Maybe<Scalars['String']>
  /** A computed field, executes function "users_public_phone" */
  public_phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamp']
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** An object relationship */
  zip_code: Zip_Codes
  zip_code_id: Scalars['bigint']
}

/** columns and relationships of "users" */
export type UsersFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<Users_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
  stddev?: Maybe<Users_Stddev_Fields>
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>
  sum?: Maybe<Users_Sum_Fields>
  var_pop?: Maybe<Users_Var_Pop_Fields>
  var_samp?: Maybe<Users_Var_Samp_Fields>
  variance?: Maybe<Users_Variance_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
  stddev?: Maybe<Users_Stddev_Order_By>
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>
  sum?: Maybe<Users_Sum_Order_By>
  var_pop?: Maybe<Users_Var_Pop_Order_By>
  var_samp?: Maybe<Users_Var_Samp_Order_By>
  variance?: Maybe<Users_Variance_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  avatar?: Maybe<Files_Bool_Exp>
  avatar_file_id?: Maybe<Bigint_Comparison_Exp>
  business_name?: Maybe<String_Comparison_Exp>
  business_size?: Maybe<String_Comparison_Exp>
  contact_address?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  files?: Maybe<Files_Bool_Exp>
  firebase_uid?: Maybe<String_Comparison_Exp>
  full_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_privacy_enabled?: Maybe<Boolean_Comparison_Exp>
  last_seen?: Maybe<Timestamp_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  payments?: Maybe<Payments_Bool_Exp>
  phone?: Maybe<String_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
  public_contact_address?: Maybe<String_Comparison_Exp>
  public_phone?: Maybe<String_Comparison_Exp>
  stripe_customer_id?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user_rooms?: Maybe<User_Rooms_Bool_Exp>
  zip_code?: Maybe<Zip_Codes_Bool_Exp>
  zip_code_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersFirebaseUidKey = 'users_firebase_uid_key',
  /** unique or primary key constraint */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  avatar_file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: Maybe<Files_Obj_Rel_Insert_Input>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  files?: Maybe<Files_Arr_Rel_Insert_Input>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  last_seen?: Maybe<Scalars['timestamp']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>
  phone?: Maybe<Scalars['String']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_rooms?: Maybe<User_Rooms_Arr_Rel_Insert_Input>
  zip_code?: Maybe<Zip_Codes_Obj_Rel_Insert_Input>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar?: Maybe<Files_Order_By>
  avatar_file_id?: Maybe<Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  files_aggregate?: Maybe<Files_Aggregate_Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_privacy_enabled?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>
  phone?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
  public_contact_address?: Maybe<Order_By>
  public_phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_rooms_aggregate?: Maybe<User_Rooms_Aggregate_Order_By>
  zip_code?: Maybe<Zip_Codes_Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  ContactAddress = 'contact_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivacyEnabled = 'is_privacy_enabled',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Phone = 'phone',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields'
  avatar_file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  ContactAddress = 'contact_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivacyEnabled = 'is_privacy_enabled',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Phone = 'phone',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** columns and relationships of "zip_codes" */
export type Zip_Codes = {
  __typename?: 'zip_codes'
  /** An object relationship */
  city: Cities
  city_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  id: Scalars['bigint']
  latitude: Scalars['numeric']
  longitude: Scalars['numeric']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  zip_code: Scalars['String']
}

/** columns and relationships of "zip_codes" */
export type Zip_CodesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "zip_codes" */
export type Zip_CodesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "zip_codes" */
export type Zip_Codes_Aggregate = {
  __typename?: 'zip_codes_aggregate'
  aggregate?: Maybe<Zip_Codes_Aggregate_Fields>
  nodes: Array<Zip_Codes>
}

/** aggregate fields of "zip_codes" */
export type Zip_Codes_Aggregate_Fields = {
  __typename?: 'zip_codes_aggregate_fields'
  avg?: Maybe<Zip_Codes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Zip_Codes_Max_Fields>
  min?: Maybe<Zip_Codes_Min_Fields>
  stddev?: Maybe<Zip_Codes_Stddev_Fields>
  stddev_pop?: Maybe<Zip_Codes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Zip_Codes_Stddev_Samp_Fields>
  sum?: Maybe<Zip_Codes_Sum_Fields>
  var_pop?: Maybe<Zip_Codes_Var_Pop_Fields>
  var_samp?: Maybe<Zip_Codes_Var_Samp_Fields>
  variance?: Maybe<Zip_Codes_Variance_Fields>
}

/** aggregate fields of "zip_codes" */
export type Zip_Codes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Zip_Codes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "zip_codes" */
export type Zip_Codes_Aggregate_Order_By = {
  avg?: Maybe<Zip_Codes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Zip_Codes_Max_Order_By>
  min?: Maybe<Zip_Codes_Min_Order_By>
  stddev?: Maybe<Zip_Codes_Stddev_Order_By>
  stddev_pop?: Maybe<Zip_Codes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Zip_Codes_Stddev_Samp_Order_By>
  sum?: Maybe<Zip_Codes_Sum_Order_By>
  var_pop?: Maybe<Zip_Codes_Var_Pop_Order_By>
  var_samp?: Maybe<Zip_Codes_Var_Samp_Order_By>
  variance?: Maybe<Zip_Codes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "zip_codes" */
export type Zip_Codes_Arr_Rel_Insert_Input = {
  data: Array<Zip_Codes_Insert_Input>
  /** on conflict condition */
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** aggregate avg on columns */
export type Zip_Codes_Avg_Fields = {
  __typename?: 'zip_codes_avg_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "zip_codes" */
export type Zip_Codes_Avg_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "zip_codes". All fields are combined with a logical 'AND'. */
export type Zip_Codes_Bool_Exp = {
  _and?: Maybe<Array<Zip_Codes_Bool_Exp>>
  _not?: Maybe<Zip_Codes_Bool_Exp>
  _or?: Maybe<Array<Zip_Codes_Bool_Exp>>
  city?: Maybe<Cities_Bool_Exp>
  city_id?: Maybe<Bigint_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  latitude?: Maybe<Numeric_Comparison_Exp>
  longitude?: Maybe<Numeric_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
  zip_code?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "zip_codes" */
export enum Zip_Codes_Constraint {
  /** unique or primary key constraint */
  ZipCodesPkey = 'zip_codes_pkey',
  /** unique or primary key constraint */
  ZipCodesZipCodeKey = 'zip_codes_zip_code_key',
}

/** input type for incrementing numeric columns in table "zip_codes" */
export type Zip_Codes_Inc_Input = {
  city_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "zip_codes" */
export type Zip_Codes_Insert_Input = {
  city?: Maybe<Cities_Obj_Rel_Insert_Input>
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Zip_Codes_Max_Fields = {
  __typename?: 'zip_codes_max_fields'
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "zip_codes" */
export type Zip_Codes_Max_Order_By = {
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Zip_Codes_Min_Fields = {
  __typename?: 'zip_codes_min_fields'
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "zip_codes" */
export type Zip_Codes_Min_Order_By = {
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code?: Maybe<Order_By>
}

/** response of any mutation on the table "zip_codes" */
export type Zip_Codes_Mutation_Response = {
  __typename?: 'zip_codes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Zip_Codes>
}

/** input type for inserting object relation for remote table "zip_codes" */
export type Zip_Codes_Obj_Rel_Insert_Input = {
  data: Zip_Codes_Insert_Input
  /** on conflict condition */
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** on conflict condition type for table "zip_codes" */
export type Zip_Codes_On_Conflict = {
  constraint: Zip_Codes_Constraint
  update_columns?: Array<Zip_Codes_Update_Column>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** Ordering options when selecting data from "zip_codes". */
export type Zip_Codes_Order_By = {
  city?: Maybe<Cities_Order_By>
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
  zip_code?: Maybe<Order_By>
}

/** primary key columns input for table: zip_codes */
export type Zip_Codes_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "zip_codes" */
export enum Zip_Codes_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

/** input type for updating data in table "zip_codes" */
export type Zip_Codes_Set_Input = {
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Zip_Codes_Stddev_Fields = {
  __typename?: 'zip_codes_stddev_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Zip_Codes_Stddev_Pop_Fields = {
  __typename?: 'zip_codes_stddev_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Zip_Codes_Stddev_Samp_Fields = {
  __typename?: 'zip_codes_stddev_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Zip_Codes_Sum_Fields = {
  __typename?: 'zip_codes_sum_fields'
  city_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "zip_codes" */
export type Zip_Codes_Sum_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** update columns of table "zip_codes" */
export enum Zip_Codes_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

/** aggregate var_pop on columns */
export type Zip_Codes_Var_Pop_Fields = {
  __typename?: 'zip_codes_var_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "zip_codes" */
export type Zip_Codes_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Zip_Codes_Var_Samp_Fields = {
  __typename?: 'zip_codes_var_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "zip_codes" */
export type Zip_Codes_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Zip_Codes_Variance_Fields = {
  __typename?: 'zip_codes_variance_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "zip_codes" */
export type Zip_Codes_Variance_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

export type PostCard__DeletePostMutationVariables = Exact<{
  post_id: Scalars['bigint']
}>

export type PostCard__DeletePostMutation = {
  __typename?: 'mutation_root'
  delete_post_prices?: Maybe<{
    __typename?: 'post_prices_mutation_response'
    affected_rows: number
  }>
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  delete_files?: Maybe<{
    __typename?: 'files_mutation_response'
    affected_rows: number
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  delete_posts_by_pk?: Maybe<{ __typename?: 'posts'; id: any }>
}

export type GetRoomsListQueryVariables = Exact<{
  user_id?: Maybe<Scalars['bigint']>
}>

export type GetRoomsListQuery = {
  __typename?: 'query_root'
  rooms: Array<{
    __typename?: 'rooms'
    id: any
    user_rooms: Array<{
      __typename?: 'user_rooms'
      user: {
        __typename?: 'users'
        email: string
        full_name: string
        id: any
        avatar?: Maybe<{ __typename?: 'files'; url: string }>
      }
      room: {
        __typename?: 'rooms'
        id: any
        messages: Array<{
          __typename?: 'messages'
          created_at?: Maybe<any>
          content?: Maybe<string>
        }>
      }
    }>
  }>
}

export type GetRoomForUserQueryVariables = Exact<{
  my_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}>

export type GetRoomForUserQuery = {
  __typename?: 'query_root'
  rooms: Array<{
    __typename?: 'rooms'
    id: any
    user_rooms: Array<{
      __typename?: 'user_rooms'
      user: {
        __typename?: 'users'
        email: string
        full_name: string
        avatar?: Maybe<{ __typename?: 'files'; url: string }>
      }
      room: {
        __typename?: 'rooms'
        id: any
        messages: Array<{
          __typename?: 'messages'
          created_at?: Maybe<any>
          content?: Maybe<string>
        }>
      }
    }>
  }>
}

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type GetUserQuery = {
  __typename?: 'query_root'
  users_by_pk?: Maybe<{
    __typename?: 'users'
    full_name: string
    avatar?: Maybe<{ __typename?: 'files'; url: string }>
  }>
}

export type GetMessagesForRoomSubscriptionVariables = Exact<{
  room_id?: Maybe<Scalars['bigint']>
}>

export type GetMessagesForRoomSubscription = {
  __typename?: 'subscription_root'
  messages: Array<{
    __typename?: 'messages'
    id: any
    content?: Maybe<string>
    is_file?: Maybe<boolean>
    created_at?: Maybe<any>
    user: { __typename?: 'users'; id: any }
    file?: Maybe<{
      __typename?: 'files'
      name?: Maybe<string>
      url: string
      type?: Maybe<string>
    }>
  }>
}

export type SendMessageMutationVariables = Exact<{
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
  file_id?: Maybe<Scalars['bigint']>
  content?: Maybe<Scalars['String']>
  is_file?: Maybe<Scalars['Boolean']>
}>

export type SendMessageMutation = {
  __typename?: 'mutation_root'
  insert_messages?: Maybe<{
    __typename?: 'messages_mutation_response'
    returning: Array<{
      __typename?: 'messages'
      id: any
      content?: Maybe<string>
      is_file?: Maybe<boolean>
      created_at?: Maybe<any>
      file?: Maybe<{ __typename?: 'files'; name?: Maybe<string>; url: string }>
      user: { __typename?: 'users'; id: any }
    }>
  }>
}

export type CreateRoomForUserMutationVariables = Exact<{
  my_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}>

export type CreateRoomForUserMutation = {
  __typename?: 'mutation_root'
  insert_rooms?: Maybe<{
    __typename?: 'rooms_mutation_response'
    returning: Array<{
      __typename?: 'rooms'
      id: any
      user_rooms: Array<{
        __typename?: 'user_rooms'
        user: {
          __typename?: 'users'
          email: string
          full_name: string
          avatar?: Maybe<{ __typename?: 'files'; url: string }>
        }
        room: {
          __typename?: 'rooms'
          id: any
          messages: Array<{
            __typename?: 'messages'
            created_at?: Maybe<any>
            content?: Maybe<string>
          }>
        }
      }>
    }>
  }>
}

export type CityChooser__SearchCitiesQueryVariables = Exact<{
  term: Scalars['String']
}>

export type CityChooser__SearchCitiesQuery = {
  __typename?: 'query_root'
  zip_codes: Array<{
    __typename?: 'zip_codes'
    id: any
    zip_code: string
    latitude: any
    longitude: any
    city: {
      __typename?: 'cities'
      id: any
      name: string
      state_code: string
      country_code: string
    }
  }>
}

export type UserOnlineSubscriptionVariables = Exact<{
  id: Scalars['bigint']
}>

export type UserOnlineSubscription = {
  __typename?: 'subscription_root'
  users_by_pk?: Maybe<{ __typename?: 'users'; last_seen?: Maybe<any> }>
}

export type PostEdit__UpdatePostMutationVariables = Exact<{
  post_id: Scalars['bigint']
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
  post_prices: Array<Post_Prices_Insert_Input> | Post_Prices_Insert_Input
  years_of_experience?: Maybe<Scalars['smallint']>
  post_attributes:
    | Array<Post_Attributes_Insert_Input>
    | Post_Attributes_Insert_Input
}>

export type PostEdit__UpdatePostMutation = {
  __typename?: 'mutation_root'
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  insert_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  delete_post_prices?: Maybe<{
    __typename?: 'post_prices_mutation_response'
    affected_rows: number
  }>
  insert_post_prices?: Maybe<{
    __typename?: 'post_prices_mutation_response'
    affected_rows: number
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  insert_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  update_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{ __typename?: 'posts'; id: any }>
  }>
}

export type PostEdit__GetStripeCustomerPortalLinkMutationVariables = Exact<{
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}>

export type PostEdit__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  checkout_or_manage_post_payment: {
    __typename?: 'CheckoutOrManagePostPaymentOutput'
    url: string
  }
}

export type PostNew__PreviousPostsCountQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type PostNew__PreviousPostsCountQuery = {
  __typename?: 'query_root'
  posts_aggregate: {
    __typename?: 'posts_aggregate'
    aggregate?: Maybe<{ __typename?: 'posts_aggregate_fields'; count: number }>
  }
}

export type PostNew__InsertPostMutationVariables = Exact<{
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
  post_prices: Array<Post_Prices_Insert_Input> | Post_Prices_Insert_Input
  years_of_experience?: Maybe<Scalars['smallint']>
  post_attributes:
    | Array<Post_Attributes_Insert_Input>
    | Post_Attributes_Insert_Input
}>

export type PostNew__InsertPostMutation = {
  __typename?: 'mutation_root'
  insert_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{ __typename?: 'posts'; id: any }>
  }>
}

export type PostNew__GetStripeCustomerPortalLinkMutationVariables = Exact<{
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}>

export type PostNew__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  checkout_or_manage_post_payment: {
    __typename?: 'CheckoutOrManagePostPaymentOutput'
    url: string
  }
}

export type SettingsSellerProfile__UpdateAccountMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsSellerProfile__UpdateAccountMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type SettingsSellerProfile__UpdateProfileMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsSellerProfile__UpdateProfileMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type SettingsSellerProfile__GetStripeCustomerPortalLinkMutationVariables =
  Exact<{
    path?: Maybe<Scalars['String']>
  }>

export type SettingsSellerProfile__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  get_stripe_customer_portal_link: {
    __typename?: 'GetStripeCustomerPortalLinkOutput'
    link: string
  }
}

export type SettingsUpdatePhoneNumber__UpdateProfileMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsUpdatePhoneNumber__UpdateProfileMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type CityContext__UpdateUserZipAndCityMutationVariables = Exact<{
  user_id: Scalars['bigint']
  zip_code_id: Scalars['bigint']
}>

export type CityContext__UpdateUserZipAndCityMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type UserContext__GetMeQueryVariables = Exact<{
  firebase_uid: Scalars['String']
}>

export type UserContext__GetMeQuery = {
  __typename?: 'query_root'
  meArray: Array<{
    __typename?: 'users'
    id: any
    full_name: string
    is_privacy_enabled: boolean
    firebase_uid: string
    email: string
    phone?: Maybe<string>
    contact_address?: Maybe<string>
    business_size: string
    business_name?: Maybe<string>
    avatar?: Maybe<{ __typename?: 'files'; id: any; url: string }>
    zip_code: {
      __typename?: 'zip_codes'
      id: any
      zip_code: string
      latitude: any
      longitude: any
      city: {
        __typename?: 'cities'
        id: any
        name: string
        state_code: string
        country_code: string
      }
    }
  }>
}

export type UserContext__UpdateLastSeenMutationVariables = Exact<{
  id: Scalars['bigint']
}>

export type UserContext__UpdateLastSeenMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; last_seen?: Maybe<any> }>
}

export const PostCard__DeletePostDocument = gql`
  mutation PostCard__deletePost($post_id: bigint!) {
    delete_post_prices(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_files(where: { post_attachments: { post_id: { _eq: $post_id } } }) {
      affected_rows
    }
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_posts_by_pk(id: $post_id) {
      id
    }
  }
`

export function usePostCard__DeletePostMutation() {
  return Urql.useMutation<
    PostCard__DeletePostMutation,
    PostCard__DeletePostMutationVariables
  >(PostCard__DeletePostDocument)
}
export const GetRoomsListDocument = gql`
  query GetRoomsList($user_id: bigint) {
    rooms(where: { user_rooms: { user_id: { _eq: $user_id } } }) {
      id
      user_rooms(where: { user_id: { _neq: $user_id } }) {
        user {
          email
          full_name
          avatar {
            url
          }
          id
        }
        room {
          id
          messages(limit: 1, order_by: { created_at: desc }) {
            created_at
            content
          }
        }
      }
    }
  }
`

export function useGetRoomsListQuery(
  options: Omit<Urql.UseQueryArgs<GetRoomsListQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetRoomsListQuery>({
    query: GetRoomsListDocument,
    ...options,
  })
}
export const GetRoomForUserDocument = gql`
  query GetRoomForUser($my_id: bigint, $user_id: bigint) {
    rooms(
      where: {
        _and: {
          user_rooms: { user_id: { _eq: $my_id } }
          _and: { user_rooms: { user_id: { _eq: $user_id } } }
        }
      }
    ) {
      id
      user_rooms(where: { user_id: { _neq: $my_id } }) {
        user {
          email
          full_name
          avatar {
            url
          }
        }
        room {
          id
          messages(limit: 1, order_by: { created_at: desc }) {
            created_at
            content
          }
        }
      }
    }
  }
`

export function useGetRoomForUserQuery(
  options: Omit<Urql.UseQueryArgs<GetRoomForUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetRoomForUserQuery>({
    query: GetRoomForUserDocument,
    ...options,
  })
}
export const GetUserDocument = gql`
  query getUser($user_id: bigint!) {
    users_by_pk(id: $user_id) {
      avatar {
        url
      }
      full_name
    }
  }
`

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options })
}
export const GetMessagesForRoomDocument = gql`
  subscription GetMessagesForRoom($room_id: bigint) {
    messages(
      where: { room_id: { _eq: $room_id } }
      order_by: { created_at: desc }
    ) {
      id
      content
      user {
        id
      }
      is_file
      file {
        name
        url
        type
      }
      created_at
    }
  }
`

export function useGetMessagesForRoomSubscription<
  TData = GetMessagesForRoomSubscription
>(
  options: Omit<
    Urql.UseSubscriptionArgs<GetMessagesForRoomSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<GetMessagesForRoomSubscription, TData>
) {
  return Urql.useSubscription<
    GetMessagesForRoomSubscription,
    TData,
    GetMessagesForRoomSubscriptionVariables
  >({ query: GetMessagesForRoomDocument, ...options }, handler)
}
export const SendMessageDocument = gql`
  mutation SendMessage(
    $room_id: bigint
    $user_id: bigint
    $file_id: bigint
    $content: String
    $is_file: Boolean = false
  ) {
    insert_messages(
      objects: {
        user_id: $user_id
        content: $content
        room_id: $room_id
        file_id: $file_id
        is_file: $is_file
      }
    ) {
      returning {
        id
        content
        is_file
        file {
          name
          url
        }
        user {
          id
        }
        created_at
      }
    }
  }
`

export function useSendMessageMutation() {
  return Urql.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument
  )
}
export const CreateRoomForUserDocument = gql`
  mutation CreateRoomForUser($my_id: bigint, $user_id: bigint) {
    insert_rooms(
      objects: {
        user_rooms: {
          data: [{ user_id: $my_id }, { user_id: $user_id }]
          on_conflict: { constraint: user_rooms_pkey }
        }
      }
      on_conflict: { constraint: rooms_pkey }
    ) {
      returning {
        id
        user_rooms(where: { user_id: { _neq: $my_id } }) {
          user {
            email
            full_name
            avatar {
              url
            }
          }
          room {
            id
            messages(limit: 1, order_by: { created_at: desc }) {
              created_at
              content
            }
          }
        }
      }
    }
  }
`

export function useCreateRoomForUserMutation() {
  return Urql.useMutation<
    CreateRoomForUserMutation,
    CreateRoomForUserMutationVariables
  >(CreateRoomForUserDocument)
}
export const CityChooser__SearchCitiesDocument = gql`
  query CityChooser__SearchCities($term: String!) {
    zip_codes(
      limit: 5
      where: {
        _or: [
          { zip_code: { _ilike: $term } }
          { city: { name: { _ilike: $term } } }
          { city: { state_code: { _ilike: $term } } }
          { city: { country_code: { _ilike: $term } } }
        ]
      }
    ) {
      id
      zip_code
      latitude
      longitude
      city {
        id
        name
        state_code
        country_code
      }
    }
  }
`

export function useCityChooser__SearchCitiesQuery(
  options: Omit<
    Urql.UseQueryArgs<CityChooser__SearchCitiesQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<CityChooser__SearchCitiesQuery>({
    query: CityChooser__SearchCitiesDocument,
    ...options,
  })
}
export const UserOnlineDocument = gql`
  subscription userOnline($id: bigint!) {
    users_by_pk(id: $id) {
      last_seen
    }
  }
`

export function useUserOnlineSubscription<TData = UserOnlineSubscription>(
  options: Omit<
    Urql.UseSubscriptionArgs<UserOnlineSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<UserOnlineSubscription, TData>
) {
  return Urql.useSubscription<
    UserOnlineSubscription,
    TData,
    UserOnlineSubscriptionVariables
  >({ query: UserOnlineDocument, ...options }, handler)
}
export const PostEdit__UpdatePostDocument = gql`
  mutation PostEdit__updatePost(
    $post_id: bigint! = 118
    $post_attributes: [post_attributes_insert_input!]! = {
      post_id: 118
      possible_value: { hello: "hello2" }
    }
    $post_prices: [post_prices_insert_input!]!
    $post_attachments: [post_attachments_insert_input!]!
    $sub_category_id: bigint!
    $title: String
    $detail: String
    $years_of_experience: smallint
  ) {
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_attributes(objects: $post_attributes) {
      affected_rows
    }

    delete_post_prices(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_prices(objects: $post_prices) {
      affected_rows
    }

    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_attachments(objects: $post_attachments) {
      affected_rows
    }

    update_posts_by_pk(
      pk_columns: { id: $post_id }
      _set: {
        sub_category_id: $sub_category_id
        title: $title
        detail: $detail
        years_of_experience: $years_of_experience
      }
    ) {
      id
    }
  }
`

// delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
//   affected_rows
// }
// insert_post_attachments(objects: $post_attachments) {
//   returning {
//     possible_value
//   }
// }

// gql`
//   mutation PostEdit__updatePost(
//     $post_id: bigint!
//     $sub_category_id: bigint!
//     $title: String!
//     $detail: String!
//     $post_attachments: [post_attachments_insert_input!]!
//     $post_prices: [post_prices_insert_input!]!
//     $years_of_experience: smallint
//     $post_attributes: [post_attributes_insert_input!]!
//   ) {
//     delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
//       affected_rows
//     }
//     insert_post_attachments(objects: $post_attachments) {
//       affected_rows
//     }
//     delete_post_prices(where: { post_id: { _eq: $post_id } }) {
//       affected_rows
//     }
//     insert_post_prices(objects: $post_prices) {
//       affected_rows
//     }
//     delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
//       affected_rows
//     }
//     insert_post_attributes(objects: $post_attributes) {
//       affected_rows
//     }
//     update_posts(
//       where: { id: { _eq: $post_id } }
//       _set: {
//         sub_category_id: $sub_category_id
//         title: $title
//         detail: $detail
//         years_of_experience: $years_of_experience
//       }
//     ) {
//       returning {
//         id
//       }
//     }
//   }
// `

export function usePostEdit__UpdatePostMutation() {
  return Urql.useMutation(PostEdit__UpdatePostDocument)
}
export const PostEdit__GetStripeCustomerPortalLinkDocument = gql`
  mutation PostEdit__GetStripeCustomerPortalLink(
    $post_id: bigint!
    $updated_post_is_local: Boolean!
  ) {
    checkout_or_manage_post_payment(
      post_id: $post_id
      updated_post_is_local: $updated_post_is_local
    ) {
      url
    }
  }
`

export function usePostEdit__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    PostEdit__GetStripeCustomerPortalLinkMutation,
    PostEdit__GetStripeCustomerPortalLinkMutationVariables
  >(PostEdit__GetStripeCustomerPortalLinkDocument)
}
export const PostNew__PreviousPostsCountDocument = gql`
  query PostNew__previousPostsCount($user_id: bigint!) {
    posts_aggregate(where: { posted_by: { _eq: $user_id } }) {
      aggregate {
        count
      }
    }
  }
`

export function usePostNew__PreviousPostsCountQuery(
  options: Omit<
    Urql.UseQueryArgs<PostNew__PreviousPostsCountQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<PostNew__PreviousPostsCountQuery>({
    query: PostNew__PreviousPostsCountDocument,
    ...options,
  })
}
export const PostNew__InsertPostDocument = gql`
  mutation MyMutation2(
    $detail: String
    $title: String!
    $sub_category_id: bigint
    $years_of_experience: smallint
    $post_prices: [post_prices_insert_input!]!
    $post_attachments: [post_attachments_insert_input!]!
    $post_attributes: post_attributes_insert_input!
    $file_id: bigint
  ) {
    insert_posts_one(
      object: {
        detail: $detail
        title: $title
        sub_category_id: $sub_category_id
        years_of_experience: $years_of_experience
        post_prices: { data: $post_prices }
        post_attributes: { data: $post_attributes }
        post_attachments: { data: $post_attachments }
      }
    ) {
      id
    }
  }
`

export function usePostNew__InsertPostMutation() {
  return Urql.useMutation(PostNew__InsertPostDocument)
}
export const PostNew__GetStripeCustomerPortalLinkDocument = gql`
  mutation PostNew__GetStripeCustomerPortalLink(
    $post_id: bigint!
    $updated_post_is_local: Boolean!
  ) {
    checkout_or_manage_post_payment(
      post_id: $post_id
      updated_post_is_local: $updated_post_is_local
    ) {
      url
    }
  }
`

export function usePostNew__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    PostNew__GetStripeCustomerPortalLinkMutation,
    PostNew__GetStripeCustomerPortalLinkMutationVariables
  >(PostNew__GetStripeCustomerPortalLinkDocument)
}
export const SettingsSellerProfile__UpdateAccountDocument = gql`
  mutation SettingsSellerProfile__updateAccount(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsSellerProfile__UpdateAccountMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__UpdateAccountMutation,
    SettingsSellerProfile__UpdateAccountMutationVariables
  >(SettingsSellerProfile__UpdateAccountDocument)
}
export const SettingsSellerProfile__UpdateProfileDocument = gql`
  mutation SettingsSellerProfile__UpdateProfile(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsSellerProfile__UpdateProfileMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__UpdateProfileMutation,
    SettingsSellerProfile__UpdateProfileMutationVariables
  >(SettingsSellerProfile__UpdateProfileDocument)
}
export const SettingsSellerProfile__GetStripeCustomerPortalLinkDocument = gql`
  mutation SettingsSellerProfile__GetStripeCustomerPortalLink($path: String) {
    get_stripe_customer_portal_link(path: $path) {
      link
    }
  }
`

export function useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__GetStripeCustomerPortalLinkMutation,
    SettingsSellerProfile__GetStripeCustomerPortalLinkMutationVariables
  >(SettingsSellerProfile__GetStripeCustomerPortalLinkDocument)
}
export const SettingsUpdatePhoneNumber__UpdateProfileDocument = gql`
  mutation SettingsUpdatePhoneNumber__updateProfile(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsUpdatePhoneNumber__UpdateProfileMutation() {
  return Urql.useMutation<
    SettingsUpdatePhoneNumber__UpdateProfileMutation,
    SettingsUpdatePhoneNumber__UpdateProfileMutationVariables
  >(SettingsUpdatePhoneNumber__UpdateProfileDocument)
}
export const CityContext__UpdateUserZipAndCityDocument = gql`
  mutation CityContext__UpdateUserZipAndCity(
    $user_id: bigint!
    $zip_code_id: bigint!
  ) {
    update_users_by_pk(
      _set: { zip_code_id: $zip_code_id }
      pk_columns: { id: $user_id }
    ) {
      id
    }
  }
`

export function useCityContext__UpdateUserZipAndCityMutation() {
  return Urql.useMutation<
    CityContext__UpdateUserZipAndCityMutation,
    CityContext__UpdateUserZipAndCityMutationVariables
  >(CityContext__UpdateUserZipAndCityDocument)
}
export const UserContext__GetMeDocument = gql`
  query UserContext__GetMe($firebase_uid: String!) {
    meArray: users(limit: 1, where: { firebase_uid: { _eq: $firebase_uid } }) {
      id
      full_name
      is_privacy_enabled
      firebase_uid
      email
      phone
      contact_address
      avatar {
        id
        url
      }
      zip_code {
        id
        zip_code
        latitude
        longitude
        city {
          id
          name
          state_code
          country_code
        }
      }
      business_size
      business_name
      contact_address
      is_privacy_enabled
    }
  }
`

export function useUserContext__GetMeQuery(
  options: Omit<
    Urql.UseQueryArgs<UserContext__GetMeQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<UserContext__GetMeQuery>({
    query: UserContext__GetMeDocument,
    ...options,
  })
}
export const UserContext__UpdateLastSeenDocument = gql`
  mutation UserContext__UpdateLastSeen($id: bigint!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: "now()" }) {
      last_seen
    }
  }
`

export function useUserContext__UpdateLastSeenMutation() {
  return Urql.useMutation<
    UserContext__UpdateLastSeenMutation,
    UserContext__UpdateLastSeenMutationVariables
  >(UserContext__UpdateLastSeenDocument)
}
