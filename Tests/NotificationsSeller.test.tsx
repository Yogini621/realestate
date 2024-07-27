import React from "react";
import {render} from '@testing-library/react-native'
import NotificationsSeller from "../SellerScreens/NotificationsSeller";

describe("NotificationsSeller",() => {
 it("renders correctly in NotificationsSeller Screen",() => {
  const {getByTestId} = render(<NotificationsSeller />)
 })
})