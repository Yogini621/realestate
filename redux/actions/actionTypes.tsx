import { AddToFavorites, FetchProperties, Property } from "./actions";

export const fetchProperties = (properties:Property[]) => ({
  type:FetchProperties,
  payload:properties
})

export const addToFavorites = (item: Property) => ({
  type: AddToFavorites,
  payload: item,
});