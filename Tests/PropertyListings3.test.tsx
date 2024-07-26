import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PropertyListings3 from '../Screens/PropertyListings3';
import {useDispatch} from 'react-redux';

jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');
jest.mock('react-native-vector-icons/FontAwesome5', () => 'FontAwesome5');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Entypo', () => 'Entypo');

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

const mockNavigation = {
  navigate: jest.fn(),
};

describe('PropertyListngs1', () => {
  const mockedDispatch = jest.fn();
  (useDispatch as unknown as jest.Mock).mockReturnValue(mockedDispatch);

  beforeEach(() => {
    (jest.requireMock('react-redux') as any).useSelector.mockImplementation(
      (selector: any) =>
        selector({
          favorites: {favorites: []},
          properties: {properties: []},
        }),
    );
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly in PropertyListings1 Page', () => {
    const {getByTestId} = render(
      <PropertyListings3 navigation={mockNavigation} />,
    );

    const menuBtn = getByTestId('menu');
    fireEvent.press(menuBtn);
    expect(mockNavigation.navigate('MenuPage'));
  });
});
