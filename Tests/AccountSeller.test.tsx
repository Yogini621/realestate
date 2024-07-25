import React from 'react'
import {render} from '@testing-library/react-native'
import AccountSeller from '../SellerScreens/AccountSeller'

describe("AccountSeller",() => {
 it("renders correctly in Account Seller",() => {
   const {getByTestId} = render(<AccountSeller />)
   
 })
})