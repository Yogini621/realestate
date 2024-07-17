export const FetchProperties = 'FetchProperties';
export const AddToFavorites = 'AddToFavorites';
export const RemoveAll = 'RemoveAll';
export const RemoveFavorires = 'RemoveFavorires';
export const AddDraft = "AddDraft"
export const AddAddress = 'AddAddress';
export const DeleteAddress = 'DeleteAddress';
export const AddCustomer = "AddCustomer"
export const RemoveCustomer = 'RemoveCustomer';
export const AddPrivacyPolicy = "AddPrivacyPolicy"
export const AddTermsAndConditions = "AddTermsAndConditions"
export const AddPoliciesDraft = 'AddPoliciesDraft';
export const AddTermsDraft = 'AddTermsDraft';
export const LogedIn = "LogedIn"

export interface Property {
  id: number;
  image: any;
  rooms: string;
  location: string;
  rent: string;
}

export interface Address{
  id:number;
  streetNo:string;
  flatNo:string;
  city:string;
  state:string;
  pincode:string
}

export interface Policy{
  id:number;
  title:string;
  description:string;
}

export interface Customer{
  id:number;
  name:string;
  contact:string;
  status:string;
  image:any
}

export interface login{
  isLogedIn:boolean
}
export interface FetchPropertiesAction {
  type: typeof FetchProperties;
  payload: Property[];
}
export interface AddToFavoritesAction {
  type: typeof AddToFavorites;
  payload:Property;
}
export interface RemoveAllAction {
  type: typeof RemoveAll;
  // payload: Property[];
}
export interface RemoveFavoriresAction {
  type: typeof RemoveFavorires;
  payload: Property;
}
export interface AddDraftAction{
type:typeof AddDraft;
payload:Property
}
export interface AddAddressAction{
  type:typeof AddAddress
  payload:Address
}

export interface AddCustomerAction{
  type:typeof AddCustomer
  payload:Customer
}

export interface RemoveCustomerAction{
  type: typeof RemoveCustomer
  payload:number
}

export interface AddPrivacyPolicyAction{
  type:typeof AddPrivacyPolicy
  payload:Policy
}

export interface AddTermsAndConditionsAction {
  type:typeof AddTermsAndConditions
  payload:Policy
}

export interface AddPoliciesDraftAction{
  type:typeof AddPoliciesDraft
  payload:Policy
}

export interface AddTermsDraftAction{
  type:typeof AddTermsDraft
  payload:Policy
}

export interface LoginAction{
  type:typeof LogedIn
  payload:login
}
export type RealEstateAppActionTypes =
  | FetchPropertiesAction
  | AddToFavoritesAction
  | RemoveAllAction
  | RemoveFavoriresAction
  | AddDraftAction
  | AddAddressAction
  | AddCustomerAction
  | RemoveCustomerAction
  | AddPrivacyPolicyAction
  | AddTermsAndConditionsAction
  | AddPoliciesDraftAction
  | AddTermsDraftAction
  | LoginAction

export interface RealEstateAppState {
  properties: Property[];
  favorites: Property[];
  drafts:Property[];
  address:Address[];
  customers:Customer[];
  policies:Policy[];
  terms:Policy[];
  policyDraft:Policy[];
  termsDraft:Policy[];
  isLogedIn:boolean
}
