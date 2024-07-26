import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import Settings from "../Screens/Settings";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');

const mockNavigation = {
 navigate:jest.fn()
}

describe("SettingsPage",() => {
 it("renders correctly in Settings Page",() => {
   const {getByTestId} = render(<Settings navigation={mockNavigation}/>)
     const menuBtn = getByTestId('menu');
     fireEvent.press(menuBtn);
     expect(mockNavigation.navigate('MenuPage'));
 })
})