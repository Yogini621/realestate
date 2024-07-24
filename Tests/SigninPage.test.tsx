import React from "react";
import {render} from '@testing-library/react-native'
import SigninPage from "../Screens/SigninPage";

const mockNavigation = {
 navigate:jest.fn()
}

jest.mock('react-native-vector-icons/Feather', () => 'Feather');

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    AsyncStorage: jest.fn(),
  };
});

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn(),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe("SignInPage",() => {
 it("renders correctly in SignInPage",() => {
   const {getByText,getByPlaceholderText} = render(<SigninPage navigation={mockNavigation} />)

   const emailInput = getByPlaceholderText("Email")
   expect(emailInput).toBeTruthy()

   const passwordInput = getByPlaceholderText("Enter password")
   expect(passwordInput).toBeTruthy()
 })
})