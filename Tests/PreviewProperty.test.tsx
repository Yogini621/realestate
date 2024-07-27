import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PreviewProperty from '../SellerScreens/PreviewProperty';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/EvilIcons', () => 'EvilIcons');

jest.mock('react-native-maps', () => {
  return {
    MapView: jest.fn(),
    Marker: jest.fn(),
  };
});

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('PreviewProperty Screen', () => {
  it('renders correctly in PreviewProperty Screen', () => {
    const {getByTestId} = render(
      <PreviewProperty
        navigation={mockNavigation}
      />,
    );

    const backBtn = getByTestId('back');
    fireEvent.press(backBtn);
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
