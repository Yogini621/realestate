import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LandingPage from '../Screens/LandingPage';

const mockNavigation = {
  navigate: jest.fn(),
};

jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/FontAwesome6', () => 'FontAwesome6');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MaterialCommunityIcons',
);
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

describe('LandingPage', () => {
  it('renders Correctly', () => {
    const {getByText, getByTestId} = render(
      <LandingPage navigation={mockNavigation} />,
    );

    const signupButton = getByTestId('signup');
    expect(signupButton).toBeTruthy();
    fireEvent.press(signupButton);
    expect(mockNavigation.navigate('SigninupPage'));
  });
  it('naviagtes correctly to loginPage', () => {
    const {getByTestId} = render(<LandingPage navigation={mockNavigation} />);

    const loginBtn = getByTestId('login');
    expect(loginBtn).toBeTruthy();
    fireEvent.press(loginBtn);
    expect(mockNavigation.navigate('SigninPage'));
  });
  it('tests modal Opens correctly or not', () => {
    const {getByTestId, getByText} = render(
      <LandingPage navigation={mockNavigation} />,
    );

    const cmpText = getByText('Virtual home tour');
    expect(cmpText).toBeTruthy();
    fireEvent.press(cmpText);
    expect(getByTestId('modal'));
    const signUpBtn = getByTestId('signup1');
    expect(signUpBtn).toBeTruthy();
    fireEvent.press(signUpBtn);
    expect(mockNavigation.navigate('SignupPage'));
  });
  it('tests modal Opens correctly or not', () => {
    const {getByTestId, getByText} = render(
      <LandingPage navigation={mockNavigation} />,
    );

    const cmpText = getByText('Find the best deal');
    expect(cmpText).toBeTruthy();
    fireEvent.press(cmpText);
    expect(getByTestId('modal'));
    const signUpBtn = getByTestId('signup1');
    expect(signUpBtn).toBeTruthy();
    fireEvent.press(signUpBtn);
    expect(mockNavigation.navigate('SignupPage'));
  });
  it('tests modal Opens correctly or not', () => {
    const {getByTestId, getByText} = render(
      <LandingPage navigation={mockNavigation} />,
    );

    const cmpText = getByText('Getready to apply');
    expect(cmpText).toBeTruthy();
    fireEvent.press(cmpText);
    expect(getByTestId('modal'));
    const signUpBtn = getByTestId('signup1');
    expect(signUpBtn).toBeTruthy();
    fireEvent.press(signUpBtn);
    expect(mockNavigation.navigate('SignupPage'));
  });
//   it('tests modal closely correctly or not', () => {
//     const {getByTestId, getByText} = render(
//       <LandingPage navigation={mockNavigation} />,
//     );

//     const closeBtn = getByTestId('close');
//     fireEvent.press(closeBtn);
//     expect(getByTestId('signup'));
//   });
});
