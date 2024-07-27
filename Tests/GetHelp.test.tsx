import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import GetHelp from "../SellerScreens/GetHelp";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');

const mockNavigation = {
 navigate:jest.fn()
}

describe("GetHelp Page",() => {
 it("renders correctly in GetHelp Page",() => {
  const {getByTestId} = render(<GetHelp navigation={mockNavigation}/>)

  const menuBtn = getByTestId('menu')
  fireEvent.press(menuBtn)
  expect(mockNavigation.navigate("MenuPageSeller"))
 })
})