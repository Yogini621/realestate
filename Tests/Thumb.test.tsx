import React from "react";
import { render } from "@testing-library/react-native";
import Thumb from "../Screens/Thumb";

describe("Thumb Page",() => {
 it("renders correctly in Thumb Page",() => {
   const {getByTestId} = render(<Thumb />)
 })
})