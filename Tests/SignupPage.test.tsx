import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import SignupPage from '../Screens/SignupPage';

const mockNavigation = {
  navigate: jest.fn(),
};

jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');

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

describe('SignUpPage', () => {
  it('renders correctly in signupPage', () => {
    const {getByText, getByTestId, getByPlaceholderText} = render(
      <SignupPage navigation={mockNavigation} />,
    );
    const nameInput = getByPlaceholderText('Full name');
    expect(nameInput).toBeTruthy();
    const emailInput = getByPlaceholderText('Email');
    expect(emailInput).toBeTruthy();
    const contactInput = getByPlaceholderText('phone');
    expect(contactInput).toBeTruthy();
    const passwordInput = getByPlaceholderText('Enter password');
    expect(passwordInput).toBeTruthy();
  });
  it('checks navigates correctly to signin page', () => {
    const {getByTestId, getByText} = render(
      <SignupPage navigation={mockNavigation} />,
    );
    const signupBtn = getByTestId('login');
    expect(signupBtn).toBeTruthy();
    fireEvent.press(signupBtn);
    expect(mockNavigation.navigate('SigninPage'));
  });
  it('Checks Getting error Msg correctly or not', async () => {
    const {getByText, getByTestId, getByPlaceholderText} = render(
      <SignupPage navigation={mockNavigation} />,
    );
    fireEvent.changeText(getByPlaceholderText('Full name'), '');
    fireEvent.changeText(getByPlaceholderText('Email'), '');
    fireEvent.changeText(getByPlaceholderText('phone'), '');
    fireEvent.changeText(getByPlaceholderText('Enter password'), '');
    fireEvent.press(getByText('Sign up'));
    await waitFor(() => {
      expect(getByText('First Name is required'));
      expect(getByText('Phone no is required'));
      expect(getByText('Email is required'));
      expect(getByText('Password required'));
    });
  });
  it('navigates SigninPage after successfull form submission', async () => {
    const {getByText, getByPlaceholderText} = render(
      <SignupPage navigation={mockNavigation} />,
    );

    fireEvent.changeText(getByPlaceholderText('Full name'), 'Tester');
    fireEvent.changeText(getByPlaceholderText('Email'), 'test@gmail.com');
    fireEvent.changeText(getByPlaceholderText('phone'), '9090909090');
    fireEvent.changeText(getByPlaceholderText('Enter password'), 'Test@123');
    fireEvent.press(getByText('Sign up'));
    await waitFor(() => {
      expect(mockNavigation.navigate('SigninPage'));
    });
  });
  it('Navigates signInPage', () => {
    const {getByText, getByTestId} = render(
      <SignupPage navigation={mockNavigation} />,
    );

    const SignInBtn = getByTestId('login');
    fireEvent.press(SignInBtn);
    expect(mockNavigation.navigate('SigninPage'));
  });
});
