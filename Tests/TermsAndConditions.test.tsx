import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import TermsAndConditions from "../Screens/TermsAndConditions";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');

const mockNavigation = {
 navigate:jest.fn()
}

describe("TermsAndConditions",() => {
 it("renders correctly in Terms And Conditions Page",() => {
   const {getByTestId} = render(<TermsAndConditions navigation={mockNavigation}/>)
    const menuBtn = getByTestId("menu")
    fireEvent.press(menuBtn)
    expect(mockNavigation.navigate("MenuPage"))
})
})