import React from "react";
import { render } from "@testing-library/react-native";
import Rail from "../Screens/Rail";

describe("Rail Page",() => {
 test("renders correctly in Rail Page",() => {
  const {getByTestId} = render(<Rail  />)
 })
})