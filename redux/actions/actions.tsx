export const FetchProperties = 'FetchProperties';
export const AddToFavorites = 'AddToFavorites';
export const RemoveAll = "RemoveAll"

export interface Property {
  id: number;
  image: any;
  rooms:string;
  location:string;
  rent:string
}

export interface FetchPropertiesAction {
  type:typeof FetchProperties
  payload:Property[]
}

export interface AddToFavoritesAction {
  type: typeof AddToFavorites;
  payload: Property;
}
export interface RemoveAllAction{
  type:typeof RemoveAll
  payload:Property
}

export type RealEstateAppActionTypes = 
| FetchPropertiesAction
| AddToFavoritesAction
| RemoveAllAction


export interface RealEstateAppState{
  properties:Property[];
  favorites:Property[]
}
