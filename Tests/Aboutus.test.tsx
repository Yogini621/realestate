import React from "react";
import {fireEvent, render} from '@testing-library/react-native'
import AboutUs from "../Screens/AboutUs";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');

const mockNavigation = {
 navigate:jest.fn()
}

describe("About Us",() => {
 it("renders correctly in About Page",() => {
  const {getByTestId} = render(<AboutUs navigation={mockNavigation} />)

  const btn = getByTestId("menuPage")
  fireEvent.press(btn)
  expect(mockNavigation.navigate("MenuPage"))
 })
})