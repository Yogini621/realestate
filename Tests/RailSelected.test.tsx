import React from "react";
import { render } from "@testing-library/react-native";
import RailSelected from "../Screens/RailSelected";

describe("Rail Selected",() => {
 it("renders correctly in RailSelected Page",() => {
   const {getByTestId} = render(<RailSelected />)
 })
})