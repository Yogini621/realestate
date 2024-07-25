import React from "react";
import { render } from "@testing-library/react-native";
import Notifications from "../Screens/Notifications";

describe("Notifications",() => {
 it("renders correctly in Notifications Page",() => {
  const {getByTestId} = render(<Notifications />)
 })
})