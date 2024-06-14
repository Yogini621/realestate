export const FetchProperties = 'FetchProperties';

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

export type RealEstateAppActionTypes = 
| FetchPropertiesAction


export interface RealEstateAppState{
  properties:Property[]
}
