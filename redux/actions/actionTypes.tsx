import { FetchProperties, Property } from "./actions";

export const fetchProperties = (properties:Property[]) => ({
  type:FetchProperties,
  payload:properties
})