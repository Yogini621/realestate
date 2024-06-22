import {
  AddToFavorites,
  FetchProperties,
  Property,
  RemoveAll,
  RemoveFavorires,
} from './actions';

export const fetchProperties = (properties: Property[]) => ({
  type: FetchProperties,
  payload: properties,
});

export const addToFavorites = (item: Property) => ({
  type: AddToFavorites,
  payload: item,
});

export const removeFavorites = (item: Property) => ({
  type: RemoveFavorires,
  payload: item,
});

export const removeAllFromFavorites = () => ({
  type:RemoveAll,
  // payload:items
})