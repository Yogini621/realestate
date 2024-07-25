import React from "react";
import { render } from "@testing-library/react-native";
import TenantApplicationForm from "../Screens/TenentApplicationForm";

jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Foundation', () => 'Foundation');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');

jest.mock('react-native-ui-datepicker', () => {
  return {
    DateTimePicker: jest.fn(),
    DateType: jest.fn(),
  };
});

jest.mock('react-native-dropdown-select-list', () => {
  return {
    SelectList: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe("Tenent Application Form",() => {
 it("renders correctly in Tenent Application Form",() => {
  const {getByTestId} = render(<TenantApplicationForm navigation={mockNavigation} route={jest.fn()} />)


 })
})