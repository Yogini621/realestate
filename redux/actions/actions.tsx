export const FetchProperties = 'FetchProperties';
export const AddToFavorites = 'AddToFavorites';
export const RemoveAll = 'RemoveAll';
export const RemoveFavorires = 'RemoveFavorires';
export const AddDraft = "AddDraft"
export const AddAddress = 'AddAddress';
export const DeleteAddress = 'DeleteAddress';
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

export type RealEstateAppActionTypes =
  | FetchPropertiesAction
  | AddToFavoritesAction
  | RemoveAllAction
  | RemoveFavoriresAction
  | AddDraftAction
  | AddAddressAction
export interface RealEstateAppState {
  properties: Property[];
  favorites: Property[];
  drafts:Property[];
  address:Address[]
}
