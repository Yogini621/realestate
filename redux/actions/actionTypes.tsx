import {
  AddDraft,
  AddToFavorites,
  FetchProperties,
  Property,
  RemoveAll,
  RemoveFavorires,
  Address,
  AddAddress,
  Customer,
  AddCustomer,
  RemoveCustomer,
  Policy,
  AddPrivacyPolicy,
  AddTermsAndConditions,
  AddPoliciesDraft,
  AddTermsDraft,
  LogedIn,
  LogedOut,
  PropertyType,
  AddProperty,
  DeleteProperty
} from './actions';

export const fetchProperties = (properties: Property[]) => ({
  type: FetchProperties,
  payload: properties,
});

export const addToFavorites = (item:Property) => ({
  type: AddToFavorites,
  payload: item,
});

export const removeFavorites = (item:Property) => ({
  type: RemoveFavorires,
  payload: item,
});

export const removeAllFromFavorites = () => ({
  type:RemoveAll,
})
export const addDraft = (item:Property) => ({
  type:AddDraft,
  payload:item
})
export const addAddress = (address:Address) => ({
  type:AddAddress,
  payload:address
})

export const addCustomer = (customer:Customer) => ({
  type:AddCustomer,
  payload:customer
})

export const removeCustomer = (id:number) => ({
  type:RemoveCustomer,
  payload:id
})

export const addPrivacyPolicy = (policy:Policy) => ({
  type:AddPrivacyPolicy,
  payload:policy
})

export const addTermsAndConditions = (terms:Policy) => ({
  type:AddTermsAndConditions,
  payload:terms
})

export const addPoliciesDraft = (policyDraft:Policy) => () => ({
  type:AddPoliciesDraft,
  payload:policyDraft
})

export const addTermsDraft = (termsDraft:Policy) => ({
  type: AddTermsDraft,
  payload:termsDraft
})

export const logedIn = () => ({
  type:LogedIn,
})
export const logedOut = () => ({
  type:LogedOut
})
export const addProperty = (items:PropertyType) => ({
  type:AddProperty,
  payload:items
})

export const deleteProperty = (id:number) => ({
type:DeleteProperty,
payload:id
})