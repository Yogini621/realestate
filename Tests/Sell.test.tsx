import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Sell from "../Screens/Sell";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Fontisto', () => 'Fontisto');

const mockNavigation = {
 navigate:jest.fn()
}

describe("Sell Page",() => {
 it("renders correctly in Sell Page",() => {
  const {getByTestId} = render(<Sell navigation={mockNavigation} />)

  const menuBtn = getByTestId('menu')
  fireEvent.press(menuBtn)
  expect(mockNavigation.navigate("MenuPage"))
})
it("opens modal correctly or not",() => {
 const {getByTestId} = render(<Sell navigation={mockNavigation} />)
 
})
})