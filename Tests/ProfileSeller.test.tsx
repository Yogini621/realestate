import React from "react";
import { render } from "@testing-library/react-native";
import ProfileSeller from "../SellerScreens/ProfiieSeller";

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');

jest.mock('react-native-circular-progress-indicator', () => {
  return {
    CircularProgress: jest.fn(),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

const mockNavigation = {
 navigate:jest.fn()
}

describe("ProfileSeller",() => {
 it("renders correctly in ProfileSeller Page",() => {
  const {getByTestId} = render(<ProfileSeller  navigation={mockNavigation} />)
 })
})