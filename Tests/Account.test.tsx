import React from 'react'
import {render} from '@testing-library/react-native'
import Account from '../Screens/Account'

describe("Account Screen",() => {
 it("renders correctly in Account Page",() => {
   const {getByTestId,getByText} = render(<Account />)
   
 })
})